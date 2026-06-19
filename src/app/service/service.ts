// translation.service.ts
import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'fr' | 'en' | 'mg'; // à ajuster selon vos 3 langues
export type LocalizedText = Record<Lang, string>;
const UI_LABELS = {
  population: { fr: 'Population', en: 'Population', mg: '' },
  bestTime: { fr: 'Meilleure période', en: 'Best time to visit', mg: '' },
  highlightsTitle: { fr: 'À ne pas manquer', en: 'Highlights', mg: '' },
  stepsTitle: { fr: 'Étapes du circuit', en: 'Circuit stages', mg: '' },
  activitiesLabel: { fr: 'Activités', en: 'Activities', mg: '' },
  hotelsLabel: { fr: 'Hébergements', en: 'Accommodation', mg: '' },
  restaurantsLabel: { fr: 'Restaurants', en: 'Restaurants', mg: '' },
  pointFortLabel: { fr: 'Point fort du circuit', en: 'Circuit highlight', mg: '' },
  itineraryLabel: { fr: 'Itinéraire', en: 'Itinerary', mg: '' },
  // ajoutez ici chaque libellé fixe trouvé dans app.html
} as const satisfies Record<string, LocalizedText>;

type UiKey = keyof typeof UI_LABELS;

@Injectable({
  providedIn: 'root',
})
export class Service {

  private platformId = inject(PLATFORM_ID);
  readonly lang = signal<Lang>('fr');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as Lang | null;
      if (saved) this.lang.set(saved);
    }
  }

  setLang(l: Lang): void {
    this.lang.set(l);
    if (isPlatformBrowser(this.platformId)) localStorage.setItem('lang', l);
  }

  // pour le contenu dynamique (circuitConfig, villes)
  t(text: LocalizedText | string | undefined | null): string {
    if (!text) return '';
    if (typeof text === 'string') return text; // fallback si pas encore traduit
    return text[this.lang()] ?? text.fr ?? '';
  }

  // pour les libellés fixes de l'interface
  tr(key: UiKey): string {
    return this.t(UI_LABELS[key]);
  }

}
