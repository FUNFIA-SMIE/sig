import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ETAPE_IMAGES, EtapeImage } from '../etape-slider/etape.model';

@Component({
  selector: 'app-etape-slider',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './etape-slider.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (images.length > 0) {
      <div
        class="etape-img-slider"
        [class.single]="images.length === 1"
        (touchstart)="onTouchStart($event)"
        (touchend)="onTouchEnd($event)"
      >
        <!-- Skeleton pendant le chargement -->
        <!-- Spinner pendant le chargement -->
        @if (loading()) {
          <div class="etape-img-spinner-wrapper">
            <div class="etape-img-spinner"></div>
          </div>
        }

        <!-- Track masqué tant que l'image n'est pas prête -->
        <div
          class="etape-img-track"
          [style.transform]="'translateX(' + -currentIndex() * 100 + '%)'"
          [style.opacity]="loading() ? '0' : '1'"
          style="transition: transform 0.35s ease, opacity 0.3s ease"
        >
          @for (img of images; track img.url; let i = $index) {
            <div class="etape-img-slide">
              <img
                [src]="img.url"
                [alt]="img.caption || etapeNom"
                (load)="onImageLoad(i)"
                (error)="onImageError(i)"
              />
              <div class="etape-img-overlay"></div>
              @if (img.caption && currentIndex() === i) {
                <p class="etape-img-caption">{{ img.caption }}</p>
              }
            </div>
          }
        </div>

        <!-- Compteur -->
        @if (images.length > 1) {
          <span class="etape-img-counter">{{ currentIndex() + 1 }} / {{ images.length }}</span>
        }

        <!-- Bouton précédent -->
        @if (images.length > 1) {
          <button class="etape-img-btn prev" (click)="prev()" aria-label="Image précédente">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            >
              <path d="M7.5 2L4 6l3.5 4" />
            </svg>
          </button>

          <!-- Bouton suivant -->
          <button class="etape-img-btn next" (click)="next()" aria-label="Image suivante">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            >
              <path d="M4.5 2L8 6l-3.5 4" />
            </svg>
          </button>

          <!-- Dots -->
          <div
            class="etape-img-dots"
            role="tablist"
            [attr.aria-label]="'Navigation images ' + etapeNom"
          >
            @for (img of images; track img.url; let i = $index) {
              <button
                class="etape-img-dot"
                [class.active]="currentIndex() === i"
                [style.background]="currentIndex() === i ? color : undefined"
                (click)="goTo(i)"
                role="tab"
                [attr.aria-selected]="currentIndex() === i"
                [attr.aria-label]="'Photo ' + (i + 1)"
              ></button>
            }
          </div>
        }
      </div>
    }
  `,
})
export class EtapeSlider implements OnInit, OnDestroy {
  @Input({ required: true }) etapeNom!: string;
  @Input() color: string = '#3A5445';
  @Input() autoplayDelay: number = 4500;

  images: EtapeImage[] = [];
  currentIndex = signal(0);
  loading = signal(true);

  private autoplayTimer: ReturnType<typeof setInterval> | null = null;
  private touchStartX = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.images = ETAPE_IMAGES[this.etapeNom] ?? [];

    // ✅ Préchargement immédiat de toutes les images via new Image()
    // Aucun lazy loading — les images sont en cache quand l'utilisateur swipe
    this.preloadImages();

    if (this.images.length > 1 && this.autoplayDelay > 0) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  // ── Préchargement ─────────────────────────────────────────────
  private preloadImages(): void {
    if (this.images.length === 0) {
      this.loading.set(false);
      return;
    }

    this.images.forEach((img, i) => {
      const image = new Image();

      image.onload = () => {
        // Dès que la 1ère image est prête → masquer skeleton
        if (i === 0) {
          this.loading.set(false);
          this.cdr.markForCheck();
        }
      };

      image.onerror = () => {
        this.images = this.images.filter((_, idx) => idx !== i);
        if (this.currentIndex() >= this.images.length) {
          this.currentIndex.set(Math.max(0, this.images.length - 1));
        }
        if (i === 0) {
          this.loading.set(false);
          this.cdr.markForCheck();
        }
      };

      // Lance le téléchargement immédiatement (toutes les images en parallèle)
      image.src = img.url;
    });
  }

  // ── Navigation ────────────────────────────────────────────────
  next(): void {
    this.goTo((this.currentIndex() + 1) % this.images.length);
    this.resetAutoplay();
  }

  prev(): void {
    this.goTo((this.currentIndex() - 1 + this.images.length) % this.images.length);
    this.resetAutoplay();
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }

  // ── Fallback load/error sur les <img> du DOM ──────────────────
  onImageLoad(index: number): void {
    if (index === 0) {
      this.loading.set(false);
      this.cdr.markForCheck();
    }
  }

  onImageError(index: number): void {
    this.images = this.images.filter((_, i) => i !== index);
    if (this.currentIndex() >= this.images.length) {
      this.currentIndex.set(Math.max(0, this.images.length - 1));
    }
    if (index === 0) this.loading.set(false);
    this.cdr.markForCheck();
  }

  // ── Touch / swipe mobile ──────────────────────────────────────
  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.changedTouches[0].clientX;
  }

  onTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(dx) < 30) return;
    dx < 0 ? this.next() : this.prev();
  }

  // ── Autoplay ──────────────────────────────────────────────────
  private startAutoplay(): void {
    this.autoplayTimer = setInterval(() => {
      this.currentIndex.set((this.currentIndex() + 1) % this.images.length);
      this.cdr.markForCheck();
    }, this.autoplayDelay);
  }

  private stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  private resetAutoplay(): void {
    if (this.autoplayDelay > 0 && this.images.length > 1) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
}
