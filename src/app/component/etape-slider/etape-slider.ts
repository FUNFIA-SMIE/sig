import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  signal,
  computed,
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
        <!-- Skeleton pendant le chargement de la première image -->
        @if (loading()) {
          <div class="etape-img-skeleton"></div>
        }

        <!-- Track de défilement -->
        <div
          class="etape-img-track"
          [style.transform]="'translateX(' + -currentIndex() * 100 + '%)'"
        >
          @for (img of images; track img.url; let i = $index) {
            <div class="etape-img-slide">
              <img
                [src]="img.url"
                [alt]="img.caption || etapeNom"
                loading="lazy"
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

        <!-- Compteur (ex: "2 / 3") -->
        @if (images.length > 1) {
          <span class="etape-img-counter"> {{ currentIndex() + 1 }} / {{ images.length }} </span>
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

          <!-- Dots de navigation -->
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
export class EtapeSlider {

  /** Nom de l'étape — utilisé comme clé dans ETAPE_IMAGES */
  @Input({ required: true }) etapeNom!: string;

  /** Couleur du circuit parente (utilisée pour les dots actifs) */
  @Input() color: string = '#3A5445';

  /** Délai du diaporama automatique en ms. 0 = désactivé */
  @Input() autoplayDelay: number = 4500;

  images: EtapeImage[] = [];
  currentIndex = signal(0);
  loading = signal(true);

  private autoplayTimer: ReturnType<typeof setInterval> | null = null;
  private touchStartX = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.images = ETAPE_IMAGES[this.etapeNom] ?? [];
    if (this.images.length > 1 && this.autoplayDelay > 0) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
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

  // ── Chargement des images ─────────────────────────────────────
  onImageLoad(index: number): void {
    if (index === 0) this.loading.set(false);
  }

  onImageError(index: number): void {
    // Retire l'image cassée de la liste
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
    if (Math.abs(dx) < 30) return; // seuil minimum
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
