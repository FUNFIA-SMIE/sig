import {
  Component, Input, OnInit, OnDestroy,
  ChangeDetectionStrategy, ChangeDetectorRef, signal,
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
        <!-- Spinner uniquement si même le thumb n'est pas prêt -->
        @if (loading()) {
          <div class="etape-img-spinner-wrapper">
            <div class="etape-img-spinner"></div>
          </div>
        }

        <div
          class="etape-img-track"
          [style.transform]="'translateX(' + -currentIndex() * 100 + '%)'"
          [style.opacity]="loading() ? '0' : '1'"
          style="transition: transform 0.35s ease, opacity 0.3s ease"
        >
          @for (img of images; track img.url; let i = $index) {
            <div class="etape-img-slide">

              <!-- ① Thumbnail (placeholder flou) — toujours présent -->
              <img
                class="etape-img-thumb"
                [src]="img.thumbnailUrl || img.url"
                [alt]="''"
                aria-hidden="true"
                [style.opacity]="fullLoaded()[i] ? '0' : '1'"
              />

              <!-- ② Image originale — crossfade quand prête -->
              <img
                class="etape-img-full"
                [src]="img.url"
                [alt]="img.caption || etapeNom"
                [style.opacity]="fullLoaded()[i] ? '1' : '0'"
                (load)="onFullLoad(i)"
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
          <span class="etape-img-counter">
            {{ currentIndex() + 1 }} / {{ images.length }}
          </span>
        }

        <!-- Bouton précédent -->
        @if (images.length > 1) {
          <button class="etape-img-btn prev" (click)="prev()" aria-label="Image précédente">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor"
                 stroke-width="1.8" stroke-linecap="round">
              <path d="M7.5 2L4 6l3.5 4" />
            </svg>
          </button>

          <button class="etape-img-btn next" (click)="next()" aria-label="Image suivante">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor"
                 stroke-width="1.8" stroke-linecap="round">
              <path d="M4.5 2L8 6l-3.5 4" />
            </svg>
          </button>

          <div class="etape-img-dots" role="tablist"
               [attr.aria-label]="'Navigation images ' + etapeNom">
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
  loading    = signal(true);   // spinner initial (avant même le thumb)
  fullLoaded = signal<boolean[]>([]); // true[i] = original chargé pour l'image i

  private autoplayTimer: ReturnType<typeof setInterval> | null = null;
  private touchStartX = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.images = ETAPE_IMAGES[this.etapeNom] ?? [];
    this.fullLoaded.set(this.images.map(() => false));
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
      // — Étape 1 : thumbnail (ou url si pas de thumb)
      const thumb = new Image();

      thumb.onload = () => {
        // Dès que le thumb[0] est prêt → cacher le spinner
        if (i === 0) {
          this.loading.set(false);
          this.cdr.markForCheck();
        }
        // — Étape 2 : lancer le chargement de l'original en arrière-plan
        this.loadFull(img, i);
      };

      thumb.onerror = () => {
        // Thumb KO → essayer directement l'original
        if (i === 0) {
          this.loading.set(false);
          this.cdr.markForCheck();
        }
        this.loadFull(img, i);
      };

      thumb.src = img.thumbnailUrl || img.url;
    });
  }

  private loadFull(img: EtapeImage, i: number): void {
    const full = new Image();

    full.onload = () => {
      const updated = [...this.fullLoaded()];
      updated[i] = true;
      this.fullLoaded.set(updated);
      this.cdr.markForCheck();
    };

    full.onerror = () => this.onImageError(i);

    full.src = img.url;
  }

  // ── Callbacks DOM ─────────────────────────────────────────────

  /** Déclenché si le <img class="etape-img-full"> se charge avant le preload */
  onFullLoad(index: number): void {
    const updated = [...this.fullLoaded()];
    updated[index] = true;
    this.fullLoaded.set(updated);
    if (index === 0) {
      this.loading.set(false);
    }
    this.cdr.markForCheck();
  }

  onImageError(index: number): void {
    this.images = this.images.filter((_, i) => i !== index);
    const updated = this.fullLoaded().filter((_, i) => i !== index);
    this.fullLoaded.set(updated);
    if (this.currentIndex() >= this.images.length) {
      this.currentIndex.set(Math.max(0, this.images.length - 1));
    }
    if (index === 0) this.loading.set(false);
    this.cdr.markForCheck();
  }

  // ── Navigation ────────────────────────────────────────────────
  next(): void { this.goTo((this.currentIndex() + 1) % this.images.length); this.resetAutoplay(); }
  prev(): void { this.goTo((this.currentIndex() - 1 + this.images.length) % this.images.length); this.resetAutoplay(); }
  goTo(index: number): void { this.currentIndex.set(index); }

  // ── Touch / swipe ─────────────────────────────────────────────
  onTouchStart(e: TouchEvent): void { this.touchStartX = e.changedTouches[0].clientX; }
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
    if (this.autoplayTimer) { clearInterval(this.autoplayTimer); this.autoplayTimer = null; }
  }
  private resetAutoplay(): void {
    if (this.autoplayDelay > 0 && this.images.length > 1) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
}
