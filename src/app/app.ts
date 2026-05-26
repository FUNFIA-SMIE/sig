import { Component, signal, PLATFORM_ID, Inject, OnDestroy, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface City {
  name: string;
  lat: number;
  lng: number;
  region: string;
  description: string;
  highlights: string[];
  image: string;
  population: string;
  bestTime: string;
  category: 'capital' | 'north' | 'east' | 'south' | 'west' | 'highland';
}

export interface CircuitLayer {
  circuit: any;
  visible: boolean;
  layer: any;
  halo: any;
  itinMarkers: any[]; // Marqueurs des villes d'itinéraire
}

// Base de données des coordonnées des villes d'itinéraire
const CITY_COORDS: Record<string, [number, number]> = {
  Antananarivo: [-18.9249, 47.5185],
  Andasibe: [-18.9733, 48.4125],
  Ambatolampy: [-19.3833, 47.4167],
  Antsirabe: [-19.8659, 47.0342],
  Ranomafana: [-21.25, 47.4167],
  Manakara: [-22.1455, 48.011],
  Mahajanga: [-15.7167, 46.3167],
  'Nosy Be': [-13.3333, 48.2667],
  Miandrivazo: [-19.5167, 45.45],
  Morondava: [-20.2841, 44.2828],
  'Tsingy de Bemaraha': [-18.75, 44.6667],
  Ambositra: [-20.5333, 47.25],
  'Sahambavy & Lac Hôtel': [-21.2667, 47.2],
  Fianarantsoa: [-21.4527, 47.0856],
  Ambalavao: [-21.85, 46.9333],
  "Parc National de l'Isalo": [-22.3333, 45.3833],
  'Tuléar (Toliara)': [-23.3568, 43.6917],
  'Anakao & Nosy Ve': [-23.6667, 43.6667],
  Ambatomilo: [-22.5, 43.2333],
  'Belo sur Mer': [-20.7333, 44.0],
  Morombe: [-21.7333, 43.3667],
  Andavadoaka: [-22.0667, 43.2833],
  'Andringitra & Tsaranoro': [-22.25, 46.9167],
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Madagascar Explorer');

  private map: any;
  private L: any;
  selectedCity = signal<City | null>(null);
  selectedCircuit = signal<any | null>(null);
  brochureOpen = signal(false);
  activePanel = signal<'city' | 'circuit' | null>(null);
  legendOpen = signal(true);

  circuitLayers: CircuitLayer[] = [];

  // ─── Configuration des circuits GeoJSON ───────────────────────────────────
  readonly circuitConfig: any[] = [
    {
      file: 'geojson/Circuit_Est.geojson',
      name: 'Circuit Est',
      color: '#48CAE4',
      needsReproject: false,
      sous_name: '✦ Forêts Mystiques & Côte Sauvage ✦',
      description:
        "Partez à l'assaut du cœur vivant de Madagascar ! Ce circuit vous emmène à travers les forêts tropicales d'Andasibe bruissant de lémurs, les artisans des hauts plateaux, les parcs nationaux brumeux de Ranomafana jusqu'aux plages sauvages de la côte Est. Un voyage inoubliable entre nature luxuriante et traditions authentiques.",
      itineraire: 'Tananarive → Andasibe → Ambatolampy → Antsirabe → Ranomafana → Manakara',
      duree: '8 à 12 jours',
      saison: 'Avril à novembre',
      pointFort:
        "Les chants de l'Indri-Indri au lever du soleil dans les forêts d'Andasibe, les bains thermaux de Ranomafana et les pirogues sur les Pangalanes à Manakara.",
      etapes: [
        {
          nom: 'Antananarivo (Tana)',
          description:
            "Perchée à 1 400 m d'altitude, Antananarivo est la capitale trépidante de Madagascar. Ville haute et ville basse se côtoient entre palais royaux, marchés colorés et ruelles animées. C'est le point de départ idéal pour découvrir l'île rouge.",
          activites: [
            'Visite du Palais Royal de Manjakamiadana',
            'Croc Farm (ferme aux crocodiles)',
            "Lemurs' Park d'Imerintsiatosika",
            'Marché artisanal de Digue',
            'Tour de la ville haute et basse',
            "Musée d'Art et d'Archéologie",
          ],
          hotels: [
            'Hôtel San Cristobal Boutique ★★★★',
            'Hôtel Colbert ★★★★',
            'Palissandre Hôtel ★★★★★',
            'Le Pavé Boutique Hôtel ★★★',
          ],
          restaurants: [
            'Le Pavé (cuisine française)',
            'Café de la Gare',
            'Restaurant Shoprite Ambodivona',
            'Le Glacier (pizza et spécialités malgaches)',
          ],
        },
        {
          nom: 'Andasibe',
          description:
            "Nichée dans la forêt tropicale humide à 150 km de la capitale, Andasibe est le royaume de l'Indri-Indri, le plus grand lémur de Madagascar.",
          activites: [
            "Observation de l'Indri-Indri dans le Parc National d'Analamazaotra",
            'Visite de la Réserve de Peyrieras (caméléons, reptiles)',
            'Excursion au parc privé VAKONA (île aux lémurs)',
            'Randonnée nocturne dans la forêt VOIM',
            'Birdwatching (oiseaux endémiques)',
          ],
          hotels: [
            "Hôtel Feon'ny Ala ★★★",
            'Mantadia Lodge ★★★',
            'Vakona Forest Lodge ★★★★',
            'Andasibe Hôtel',
          ],
          restaurants: ["Restaurant Feon'ny Ala", 'La Terrasse Verte', 'Buffet au Vakona Lodge'],
        },
        {
          nom: 'Ambatolampy',
          description:
            "Petite ville des Hauts Plateaux, Ambatolampy est connue pour ses ateliers artisanaux où l'aluminium est façonné à la main selon des techniques ancestrales.",
          activites: [
            "Visite des fonderies artisanales d'aluminium",
            'Découverte des ateliers de poterie traditionnelle',
            'Panoramas sur les rizières en terrasses',
            'Rencontre avec les artisans locaux',
          ],
          hotels: ['Hôtel Les Orchidées', "Gîte communautaire d'Ambatolampy"],
          restaurants: ['Restaurant local du marché', 'Auberge de passage RN7'],
        },
        {
          nom: 'Antsirabe',
          description:
            'Surnommée la "ville des eaux" en raison de ses sources thermales, Antsirabe est une charmante cité coloniale à 1 500 m d\'altitude.',
          activites: [
            'Visite des sources thermales et bains relaxants',
            'Tour en pousse-pousse dans la vieille ville',
            'Découverte des ateliers de gemmes et pierres précieuses',
            'Lacs volcaniques de Tritriva et Andraikiba',
          ],
          hotels: [
            'Royal Palace Hôtel ★★★',
            'Hôtel Truchet ★★★',
            'Résidence Luxe Antsirabe ★★★',
            'FJKM Hôtel',
          ],
          restaurants: [
            'Spicy Grill (au Royal Palace)',
            'Restaurant de la Station',
            'La Belle Étoile',
            'Chez Jenny',
          ],
        },
        {
          nom: 'Ranomafana',
          description:
            'Forêt magique et parc national de renommée mondiale, Ranomafana est un trésor de biodiversité.',
          activites: [
            'Trekking dans le Parc National de Ranomafana',
            'Observation du lémur Milne-Edwards et du Propithèque soyeux',
            'Randonnée nocturne',
            'Bains thermaux naturels',
          ],
          hotels: ['Hôtel Thermal ★★★', 'Setam Lodge ★★★', 'Domaine Nature Vohiparara'],
          restaurants: [
            "Restaurant de l'Hôtel Thermal",
            'La Pirogue',
            'Chez Gaspard (cuisine locale)',
          ],
        },
        {
          nom: 'Manakara',
          description:
            'Ville côtière traversée par le fameux train FCE (Fianarantsoa-Côte Est). Avec ses plages sauvages, ses lagons et ses piroguiers vezo.',
          activites: [
            'Balade en pirogue sur le canal des Pangalanes',
            'Promenade sur la plage et baignade',
            'Traversée en train FCE',
            'Visite du marché local de poisson frais',
          ],
          hotels: ['Hôtel de Manakara', 'Chez Maggie Bungalows', 'Hôtel La Vanille'],
          restaurants: [
            'Restaurant Chez Maggie',
            'Le Lakana (fruits de mer)',
            'Snack du marché central',
          ],
        },
      ],
    },
    {
      file: 'geojson/Circuit Nord.geojson',
      name: 'Circuit Nord',
      color: '#C77DFF',
      needsReproject: false,
      sous_name: '✦ Baobabs, Plongée & Îles Paradisiaques ✦',
      description:
        "Une odyssée entre jungle et mer cristalline ! Ce grand circuit Nord vous guide depuis la verdure d'Andasibe vers la côte Ouest et ses baobabs majestueux, puis jusqu'à Nosy Be, l'île aux parfums.",
      itineraire: 'Tananarive → Andasibe → Mahajanga → Nosy Be',
      duree: '11 à 15 jours',
      saison: 'Avril à décembre',
      pointFort:
        "Le vol vers Nosy Be, l'île aux parfums d'ylang-ylang, les récifs coralliens de Nosy Sakatia et le coucher de soleil flamboyant au Mont Passot.",
      etapes: [
        {
          nom: 'Antananarivo (Tana)',
          description:
            "Perchée à 1 400 m d'altitude, la capitale de Madagascar entre palais royaux, marchés colorés et ruelles animées.",
          activites: [
            'Visite du Palais Royal de Manjakamiadana',
            'Croc Farm',
            "Lemurs' Park",
            'Marché artisanal de Digue',
          ],
          hotels: [
            'Hôtel San Cristobal Boutique ★★★★',
            'Hôtel Colbert ★★★★',
            'Palissandre Hôtel ★★★★★',
          ],
          restaurants: ['Le Pavé (cuisine française)', 'Café de la Gare', 'Le Glacier'],
        },
        {
          nom: 'Andasibe',
          description:
            "Nichée dans la forêt tropicale humide, Andasibe est le royaume de l'Indri-Indri.",
          activites: [
            "Observation de l'Indri-Indri",
            'Réserve de Peyrieras',
            'Parc privé VAKONA',
            'Randonnée nocturne',
          ],
          hotels: ["Hôtel Feon'ny Ala ★★★", 'Mantadia Lodge ★★★', 'Vakona Forest Lodge ★★★★'],
          restaurants: ["Restaurant Feon'ny Ala", 'La Terrasse Verte'],
        },
        {
          nom: 'Mahajanga (Majunga)',
          description:
            'Perle de la côte ouest, Mahajanga séduit par ses baobabs géants et sa population multiculturelle.',
          activites: [
            'Promenade sur le front de mer',
            'Grotte des Chauves-Souris',
            "Parc National d'Ankarafantsika",
            'Plages et couchers de soleil',
          ],
          hotels: ['Hôtel Coco Lodge ★★★', 'Palm Beach Hôtel ★★★', 'Les Roches Rouges'],
          restaurants: [
            'Le Grand Bleu (fruits de mer)',
            'Restaurant Papillon',
            'Coco Beach Bar & Grill',
          ],
        },
        {
          nom: 'Nosy Be',
          description:
            '"L\'île aux Parfums" — plantations d\'ylang-ylang, plages immaculées et eaux turquoise.',
          activites: [
            'Snorkeling et plongée à Nosy Sakatia',
            'Réserve Naturelle de Lokobe',
            "Tour de l'île en quad",
            'Mont Passot (coucher de soleil)',
          ],
          hotels: ['Villa Mena Hôtel ★★★', 'Long Beach Resort ★★★★', 'Andilana Beach Resort ★★★★★'],
          restaurants: [
            "La Terrasse d'Ambatoloaka",
            'Chez Ndrema (cuisine créole)',
            'Restaurant du Long Beach Resort',
          ],
        },
      ],
    },
    {
      file: 'geojson/Circuit Ouest.geojson',
      name: 'Circuit Ouest',
      color: '#74C69D',
      needsReproject: false,
      sous_name: '✦ Baobabs Millénaires & Tsingy Majestueux ✦',
      description:
        "Ce circuit est une invitation au voyage authentique et à l'aventure pure. Des forêts équatoriales d'Andasibe aux paysages lunaires du Tsingy, en passant par l'Allée des Baobabs.",
      itineraire:
        'Tananarive → Andasibe → Ambatolampy → Antsirabe → Miandrivazo → Morondava → Tsingy de Bemaraha',
      duree: '12 à 16 jours',
      saison: 'Avril à novembre',
      pointFort:
        "L'Allée des Baobabs au coucher du soleil, la descente en pirogue du Tsiribihina et les forêts calcaires du Tsingy (UNESCO).",
      etapes: [
        {
          nom: 'Antananarivo (Tana)',
          description: "Perchée à 1 400 m d'altitude, capitale de Madagascar.",
          activites: ['Palais Royal', 'Croc Farm', "Lemurs' Park", 'Marché artisanal'],
          hotels: [
            'Hôtel San Cristobal Boutique ★★★★',
            'Hôtel Colbert ★★★★',
            'Palissandre Hôtel ★★★★★',
          ],
          restaurants: ['Le Pavé', 'Café de la Gare', 'Le Glacier'],
        },
        {
          nom: 'Andasibe',
          description: "Royaume de l'Indri-Indri dans la forêt tropicale.",
          activites: [
            "Observation de l'Indri-Indri",
            'Réserve de Peyrieras',
            'Parc VAKONA',
            'Randonnée nocturne',
          ],
          hotels: ["Hôtel Feon'ny Ala ★★★", 'Mantadia Lodge ★★★', 'Vakona Forest Lodge ★★★★'],
          restaurants: ["Restaurant Feon'ny Ala", 'La Terrasse Verte'],
        },
        {
          nom: 'Ambatolampy',
          description: "Hauts Plateaux, ateliers artisanaux d'aluminium.",
          activites: ['Fonderies artisanales', 'Poterie traditionnelle', 'Panoramas rizières'],
          hotels: ['Hôtel Les Orchidées', 'Gîte communautaire'],
          restaurants: ['Restaurant local du marché'],
        },
        {
          nom: 'Antsirabe',
          description: 'Ville des eaux, pousse-pousse et artisanat à 1 500 m.',
          activites: [
            'Sources thermales',
            'Tour en pousse-pousse',
            'Ateliers de gemmes',
            'Lacs volcaniques',
          ],
          hotels: ['Royal Palace Hôtel ★★★', 'Hôtel Truchet ★★★'],
          restaurants: ['Spicy Grill', 'Restaurant de la Station'],
        },
        {
          nom: 'Miandrivazo',
          description: 'Point de départ des descentes mythiques du Tsiribihina.',
          activites: [
            'Descente du fleuve en pirogue',
            'Observation faune fluviale',
            'Coucher de soleil',
          ],
          hotels: ['Hôtel Princesse de Tsiribihina ★★', 'Bungalows de la Rivière'],
          restaurants: ["Restaurant de l'Hôtel Princesse"],
        },
        {
          nom: 'Morondava',
          description: "Le temple des baobabs ! L'Allée des Baobabs millénaires.",
          activites: ['Coucher de soleil Allée des Baobabs', 'Baobab Amoureux', 'Forêt de Kirindy'],
          hotels: ['Hôtel Le Vezo Beach ★★★', 'Akiba Lodge ★★★', 'Palissandre Côte Ouest ★★★★'],
          restaurants: ['Le Coucher du Soleil', 'Restaurant du Vezo Beach'],
        },
        {
          nom: 'Tsingy de Bemaraha',
          description: 'Patrimoine Mondial UNESCO, forêt de calcaire aux aiguilles acérées.',
          activites: [
            'Trekking Grands et Petits Tsingy',
            'Navigation gorges du Manambolo',
            'Observation lémurs',
          ],
          hotels: ['Olympe de Bemaraha ★★★', 'Karibo Lodge'],
          restaurants: ["Restaurant de l'Olympe", 'La Clairière'],
        },
      ],
    },
    {
      file: 'geojson/Circuit_Sud.geojson',
      name: 'Circuit Sud',
      color: '#F4A261',
      needsReproject: false,
      sous_name: '✦ Route Nationale 7 — Le Grand Tour des Merveilles du Sud ✦',
      description:
        "Le circuit Sud est la référence absolue ! En suivant la mythique RN7, vous traversez les hauts plateaux betsileo, les forêts tropicales, les paysages de l'Isalo et terminez les pieds dans le sable d'Anakao.",
      itineraire:
        'Tananarive → Ambositra → Ranomafana → Sahambavy → Fianarantsoa → Ambalavao → Isalo → Tuléar → Anakao → Ambatomilo',
      duree: '15 à 20 jours',
      saison: 'Avril à novembre',
      pointFort:
        "La RN7 offre un panorama unique : artisanat à Ambositra, brumes de Ranomafana, canyons de l'Isalo et plages immaculées d'Anakao.",
      etapes: [
        {
          nom: 'Ambositra',
          description:
            "Capitale de l'artisanat malgache, bois sculptés en chefs-d'œuvre zafimaniry.",
          activites: [
            'Ateliers de marqueterie zafimaniry',
            'Créations en corne de zébu',
            'Villages zafimaniry',
            'Marché hebdomadaire',
          ],
          hotels: ['Hôtel Prestige ★★★', 'Chez Papillon', 'La Rose des Bois'],
          restaurants: ['Restaurant Chez Papillon', 'Auberge Betsileo'],
        },
        {
          nom: 'Ranomafana',
          description: 'Forêt magique et parc national de renommée mondiale.',
          activites: [
            'Trekking Parc National',
            'Observation lémur Milne-Edwards',
            'Randonnée nocturne',
            'Bains thermaux',
          ],
          hotels: ['Hôtel Thermal ★★★', 'Setam Lodge ★★★', 'Domaine Nature Vohiparara'],
          restaurants: ["Restaurant de l'Hôtel Thermal", 'La Pirogue'],
        },
        {
          nom: 'Sahambavy & Lac Hôtel',
          description: 'La seule plantation de thé de Madagascar dans un cadre enchanteur.',
          activites: [
            'Visite plantation de thé',
            'Balade en barque',
            'Randonnées collines betsileo',
          ],
          hotels: ['Lac Hôtel ★★★ (bungalows sur pilotis)', 'Chez Faniry'],
          restaurants: ['Restaurant du Lac Hôtel', 'Salon de thé de la plantation'],
        },
        {
          nom: 'Fianarantsoa',
          description: 'Cœur culturel et spirituel de Madagascar, Haute-Ville aux ruelles pavées.',
          activites: [
            'Haute-Ville historique (UNESCO)',
            'Ancienne capitale betsileo',
            'Dégustation vins malgaches',
          ],
          hotels: ['Hôtel Sofia ★★★', 'Cotsoyannis House ★★★'],
          restaurants: ['Restaurant Sofia', 'Le Bain de Soleil'],
        },
        {
          nom: 'Ambalavao',
          description: "Papier Antaimoro, soieries et lémurs catta au Parc d'Anja.",
          activites: [
            'Papier Antaimoro',
            'Soie sauvage',
            "Parc Communautaire d'Anja",
            'Marché aux zébus',
          ],
          hotels: ['Hôtel Aux Bougainvillées ★★★', 'Camp Catta ★★★'],
          restaurants: ['Restaurant Aux Bougainvillées', 'Buffet du Camp Catta'],
        },
        {
          nom: "Parc National de l'Isalo",
          description:
            'Le Grand Canyon malgache ! Formations de grès, canyons et piscines naturelles.',
          activites: [
            "Trekking canyons de l'Isalo",
            'Piscines naturelles',
            "Fenêtre de l'Isalo (coucher de soleil)",
            'Culture Bara',
          ],
          hotels: ['Relais de la Reine ★★★★', 'Isalo Rock Lodge ★★★★★', 'Hôtel Jardin du Roy ★★★'],
          restaurants: ['Restaurant du Relais de la Reine', "La Terrasse de l'Isalo Rock"],
        },
        {
          nom: 'Tuléar (Toliara)',
          description: '"Porte du Grand Sud", traversée par le Tropique du Capricorne.',
          activites: [
            "Arboretum d'Antsokay",
            'Monument du Tropique du Capricorne',
            'Parc Reniala',
            'Plongée récifs coralliens',
          ],
          hotels: ['Hôtel Moringa ★★★', 'Hôtel Le Dauphin ★★★'],
          restaurants: ['Restaurant Moringa', 'Le Corail (fruits de mer)'],
        },
        {
          nom: 'Anakao & Nosy Ve',
          description: 'Village de pêcheurs vezo préservé sur une plage de sable blanc.',
          activites: [
            "Baignade plage d'Anakao",
            'Snorkeling à Nosy Ve',
            'Pique-nique avec pêcheurs vezo',
          ],
          hotels: ['Hôtel Anakao Ocean Lodge ★★★', 'Safari Vezo Bungalows'],
          restaurants: ["Restaurant de l'Anakao Lodge", 'Chez Vezo'],
        },
        {
          nom: 'Ambatomilo',
          description: "Face à l'une des plus belles barrières coralliennes de Madagascar.",
          activites: [
            'Snorkeling barrière corallienne',
            "Baignade mer d'Émeraude",
            'Plages sauvages',
          ],
          hotels: ['Mamirano Lodge ★★★', 'Laguna Blu Resort'],
          restaurants: ['Restaurant du Mamirano Lodge', 'Cuisine de la Laguna Blu'],
        },
      ],
    },
    {
      file: 'geojson/Circuit Sud-Ouest.geojson',
      name: 'Circuit Sud-Ouest',
      color: '#FFD60A',
      needsReproject: false,
      sous_name: "✦ L'Intégrale — Du Tsingy aux Plages du Grand Sud ✦",
      description:
        "Pour ceux qui veulent tout voir, tout vivre, tout ressentir ! Ce grand circuit est une immersion totale dans Madagascar, couvrant ses plus beaux joyaux du Nord-Ouest jusqu'au Grand Sud.",
      itineraire:
        'Tananarive → Andasibe → Morondava → Tsingy → Belo sur Mer → Morombe → Andavadoaka → Ambatomilo → Tuléar → Anakao → Isalo → Fianarantsoa → Ranomafana → Antsirabe → Tananarive',
      duree: '22 à 28 jours',
      saison: 'Mai à octobre',
      pointFort:
        'Le circuit le plus complet : Tsingy, baobabs, côte Vezo sauvage, plages immaculées, Isalo et retour par la mythique RN7.',
      etapes: [
        {
          nom: 'Belo sur Mer',
          description:
            'Village de pêcheurs Vezo, artisans charpentiers construisant des boutres traditionnels.',
          activites: [
            'Construction traditionnelle de boutres',
            'Salines artisanales',
            'Plages sauvages',
            'Pirogue sur les lagons',
          ],
          hotels: ['Hôtel Entremer ★★', "Bungalows Les Pieds dans l'Eau"],
          restaurants: ["Restaurant de l'Entremer", 'Cuisine communautaire Vezo'],
        },
        {
          nom: 'Morombe',
          description: 'Ville côtière authentique surplombant le Canal de Mozambique.',
          activites: [
            'Plages sauvages',
            'Observation baobabs atypiques',
            'Rencontre pêcheurs vezo',
          ],
          hotels: ['Auberge Chez Laurette ★★', 'Hôtel du Voyageur'],
          restaurants: ['Restaurant Chez Laurette', 'Snack de la plage'],
        },
        {
          nom: 'Andavadoaka',
          description: 'Face à la barrière corallienne la plus préservée de Madagascar.',
          activites: [
            'Plongée sous-marine',
            'Snorkeling',
            'Observation dauphins et baleines',
            'Kayak de mer',
          ],
          hotels: ['Laguna Blu Resort ★★★', 'Hôtel Les Sables Blancs'],
          restaurants: ['Restaurant Laguna Blu (buffet fruits de mer)', 'Chez Noro'],
        },
        {
          nom: 'Andringitra & Tsaranoro',
          description: 'Pic Boby (2 658 m), deuxième sommet de Madagascar, paradis des grimpeurs.',
          activites: [
            'Ascension du Pic Boby (2 658 m)',
            'Trekking dans le massif',
            'Escalade parois de granit Tsaranoro',
          ],
          hotels: ['Camp Catta ★★★', 'Bungalows de Namoly'],
          restaurants: ['Restaurant du Camp Catta', 'Cuisine de camp'],
        },
      ],
    },
  ];

  // ─── Villes principales ───────────────────────────────────────────────────
  readonly cities: City[] = [
    {
      name: 'Antananarivo',
      lat: -18.9249,
      lng: 47.5185,
      region: 'Analamanga',
      description:
        "Perchée à 1 400 m d'altitude, la capitale de Madagascar mêle palais royaux, marchés colorés et ruelles animées. Ville haute et ville basse se côtoient dans une atmosphère unique, entre héritage merina et influences coloniales françaises.",
      highlights: [
        'Palais Royal de Manjakamiadana',
        'Croc Farm (ferme aux crocodiles)',
        "Lemurs' Park d'Imerintsiatosika",
        'Marché artisanal de Digue',
        'Tour de la ville haute et basse',
        "Musée d'Art et d'Archéologie",
      ],
      image: '🏛️',
      population: '3,4 millions',
      bestTime: "Toute l'année",
      category: 'capital',
    },
    {
      name: 'Toamasina',
      lat: -18.162,
      lng: 49.382,
      region: 'Atsinanana',
      description:
        "Principal port de Madagascar sur la côte est. Porte d'entrée vers la forêt tropicale et les îles Sainte-Marie.",
      highlights: [
        'Port de Toamasina',
        'Île Sainte-Marie',
        'Parc Ivoloina',
        'Canal des Pangalanes',
      ],
      image: '⚓',
      population: '325 000',
      bestTime: 'Juillet – Novembre',
      category: 'east',
    },
    {
      name: 'Mahajanga',
      lat: -15.7167,
      lng: 46.3167,
      region: 'Boeny',
      description:
        'Perle de la côte ouest, Mahajanga séduit par ses baobabs géants, son bord de mer apaisant et sa population multiculturelle.',
      highlights: [
        'Front de mer et baobab millénaire',
        'Grotte des Chauves-Souris',
        "Parc National d'Ankarafantsika",
        'Plages et couchers de soleil',
      ],
      image: '🌴',
      population: '220 000',
      bestTime: 'Avril – Octobre',
      category: 'west',
    },
    {
      name: 'Fianarantsoa',
      lat: -21.4527,
      lng: 47.0856,
      region: 'Haute Matsiatra',
      description:
        'Fière ville des Hauts Plateaux — "là où l\'on apprend le bien". Haute-Ville aux ruelles pavées, maisons betsileo en briques rouges.',
      highlights: [
        'Haute-Ville historique (UNESCO)',
        'Ancienne capitale betsileo',
        'Église Ambozontany',
        'Vins malgaches',
        'Gare ferroviaire historique FCE',
      ],
      image: '🚂',
      population: '167 000',
      bestTime: 'Mai – Septembre',
      category: 'highland',
    },
    {
      name: 'Toliara',
      lat: -23.3568,
      lng: 43.6917,
      region: 'Atsimo-Andrefana',
      description:
        'Traversée par le Tropique du Capricorne, "Porte du Grand Sud". Point de départ vers les paradis marins d\'Anakao et Nosy Ve.',
      highlights: [
        "Arboretum d'Antsokay",
        'Monument du Tropique du Capricorne',
        'Parc Reniala',
        "Plage d'Anakao & Nosy Ve",
      ],
      image: '🌊',
      population: '107 000',
      bestTime: "Toute l'année",
      category: 'south',
    },
    {
      name: 'Antsiranana',
      lat: -12.3525,
      lng: 49.2994,
      region: 'Diana',
      description:
        "Diego-Suarez possède l'un des plus beaux ports naturels au monde. Paysages lunaires, kitesurf et forêts tropicales préservées.",
      highlights: [
        'Baie de Diego-Suarez',
        "Parc Montagne d'Ambre",
        'Plage de Ramena',
        'Tsingy rouge',
      ],
      image: '🏔️',
      population: '108 000',
      bestTime: 'Avril – Décembre',
      category: 'north',
    },
    {
      name: 'Morondava',
      lat: -20.2841,
      lng: 44.2828,
      region: 'Menabe',
      description:
        "Le temple des baobabs ! La célébrissime Allée des Baobabs avec ses géants millénaires est l'une des images les plus iconiques de Madagascar.",
      highlights: [
        'Allée des Baobabs (coucher de soleil)',
        'Baobab Amoureux',
        'Forêt de Kirindy',
        'Tsingy de Bemaraha (UNESCO)',
      ],
      image: '🌳',
      population: '58 000',
      bestTime: 'Avril – Novembre',
      category: 'west',
    },
    {
      name: 'Antsirabe',
      lat: -19.8659,
      lng: 47.0342,
      region: 'Vakinankaratra',
      description:
        'Surnommée la "ville des eaux", Antsirabe est une charmante cité coloniale à 1 500 m d\'altitude, animée par ses pousse-pousse colorés.',
      highlights: [
        'Sources thermales',
        'Tour en pousse-pousse',
        'Ateliers de gemmes',
        'Lacs Tritriva et Andraikiba',
        'Marché artisanal',
      ],
      image: '♨️',
      population: '225 000',
      bestTime: 'Avril – Octobre',
      category: 'highland',
    },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {}

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    // Délai pour que le DOM soit vraiment prêt après SSR hydration
    await new Promise((resolve) => setTimeout(resolve, 0));
    await this.initMap();
  }

  // Retourne le nombre total de villes d'itinéraire uniques
  getTotalItinCities(): number {
    const all = new Set<string>();
    this.circuitConfig.forEach((c) => {
      c.etapes?.forEach((e: any) => {
        if (CITY_COORDS[e.nom]) all.add(e.nom);
      });
    });
    return all.size;
  }

  private async initMap(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    const leafletModule = await import('leaflet');
    this.L = leafletModule.default ?? leafletModule;
    const L = this.L;

    // ✅ Fix OBLIGATOIRE pour les icônes après ng build
    const iconDefault = L.icon({
      iconRetinaUrl: 'assets/images/marker-icon-2x.png',
      iconUrl: 'assets/images/marker-icon.png',
      shadowUrl: 'assets/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;


    const mapEl = document.getElementById('map');
    if (!mapEl) {
      console.error('❌ #map introuvable dans le DOM');
      return;
    }

    this.map = L.map(mapEl, {
      center: [-19.5, 46.5],
      zoom: 6,
      minZoom: 5,
      maxZoom: 15,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CartoDB</a> &copy; OpenStreetMap',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(this.map);

    L.control.zoom({ position: 'bottomright' }).addTo(this.map);
    L.control.scale({ position: 'bottomleft', imperial: false, maxWidth: 100 }).addTo(this.map);

    await this.loadAllCircuits(L);
    this.cities.forEach((city) => this.addCityMarker(L, city));

    // ✅ Délai plus long pour SSR hydration
    setTimeout(() => this.map?.invalidateSize(), 300);
  }
  private async loadAllCircuits(L: any): Promise<void> {
    for (const circuit of this.circuitConfig) {
      try {
        const response = await fetch(circuit.file);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        const geojsonData = {
          ...data,
          features: data.features.map((feature: any) => {
            const geom = { ...feature.geometry };
            if (geom.type === 'LineString') {
              geom.coordinates = geom.coordinates.map((c: any) => [c[0], c[1]]);
            } else if (geom.type === 'MultiLineString') {
              geom.coordinates = geom.coordinates.map((line: any) =>
                line.map((c: any) => [c[0], c[1]]),
              );
            }
            return { ...feature, geometry: geom };
          }),
        };

        const cl = this.drawCircuit(L, geojsonData, circuit);

        // Ajouter les marqueurs de villes d'itinéraire
        const itinMarkers = this.addItineraryMarkers(L, circuit);

        this.circuitLayers.push({
          circuit,
          visible: true,
          layer: cl.layer,
          halo: cl.halo,
          itinMarkers,
        });
        console.log(`✅ ${circuit.name} chargé`);
      } catch (err) {
        console.error(`❌ Erreur chargement ${circuit.file}:`, err);
      }
    }
  }

  // ── Marqueurs pour les villes d'itinéraire ────────────────────────────────
  private addItineraryMarkers(L: any, circuit: any): any[] {
    const markers: any[] = [];
    if (!circuit.etapes) return markers;

    circuit.etapes.forEach((etape: any, index: number) => {
      const coords = CITY_COORDS[etape.nom];
      if (!coords) return;

      // Vérifier si c'est déjà une ville principale
      const isMainCity = this.cities.some(
        (c) => Math.abs(c.lat - coords[0]) < 0.05 && Math.abs(c.lng - coords[1]) < 0.05,
      );
      if (isMainCity) return;

      const stepNum = index + 1;

      // Marqueur d'étape — petit, élégant
      const dotIcon = L.divIcon({
        className: '',
        html: `<div style="
          width: 16px; height: 16px;
          background: ${circuit.color};
          border-radius: 50%;
          border: 2.5px solid rgba(255,255,255,0.9);
          box-shadow: 0 0 0 1.5px ${circuit.color}60, 0 2px 8px rgba(0,0,0,0.3);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        ">
          <div style="
            width: 5px; height: 5px;
            background: rgba(255,255,255,0.7);
            border-radius: 50%;
          "></div>
        </div>`,
        iconAnchor: [8, 8],
      });

      // Label du nom de l'étape
      const labelIcon = L.divIcon({
        className: '',
        html: `<div style="
          color: ${circuit.color};
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6);
          pointer-events: none;
          letter-spacing: 0.3px;
          padding: 2px 0;
        ">${etape.nom}</div>`,
        iconAnchor: [-8, -2],
      });

      const marker = L.marker(coords, { icon: dotIcon, zIndexOffset: 100 }).addTo(this.map);
      const label = L.marker(coords, { icon: labelIcon, interactive: false }).addTo(this.map);

      // Popup au clic sur l'étape
      marker.on('click', () => {
        this.selectedCircuit.set(circuit);
        this.selectedCity.set(null);
        this.activePanel.set('circuit');
        this.brochureOpen.set(true);

        // Scroll jusqu'à l'étape dans la brochure (delay pour attendre l'ouverture)
        setTimeout(() => {
          const etapeEls = document.querySelectorAll('.etape-nom');
          etapeEls.forEach((el) => {
            if (el.textContent?.includes(etape.nom)) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
        }, 600);

        this.map.panTo(coords, { animate: true, duration: 0.6 });
      });

      markers.push(marker, label);
    });

    return markers;
  }

  private applyOffset(data: any, offset: number): any {
    return {
      ...data,
      features: data.features.map((feature: any) => {
        const geom = { ...feature.geometry };
        const shiftCoords = (coords: [number, number][]): [number, number][] => {
          return coords.map((coord, i) => {
            const prev = coords[i - 1] || coord;
            const next = coords[i + 1] || coord;
            const dx = next[0] - prev[0];
            const dy = next[1] - prev[1];
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            const px = -dy / len;
            const py = dx / len;
            return [coord[0] + px * offset, coord[1] + py * offset];
          });
        };
        if (geom.type === 'LineString') {
          geom.coordinates = shiftCoords(geom.coordinates);
        } else if (geom.type === 'MultiLineString') {
          geom.coordinates = geom.coordinates.map((line: any) => shiftCoords(line));
        }
        return { ...feature, geometry: geom };
      }),
    };
  }

  private drawCircuit(L: any, data: any, circuit: any): { layer: any; halo: any } {
    const drawData = circuit.offset ? this.applyOffset(data, circuit.offset) : data;

    const halo = L.geoJSON(drawData, {
      style: { color: circuit.color, weight: 22, opacity: 0.1, lineJoin: 'round' },
      interactive: false,
    }).addTo(this.map);

    const layer = L.geoJSON(drawData, {
      style: {
        color: circuit.color,
        weight: 4.5,
        opacity: 0.92,
        lineCap: 'round',
        lineJoin: 'round',
      },
    }).addTo(this.map);

    // Label circuit centré
    try {
      // ── Récupère le dernier point du tracé ──────────────────────────────
      const allPoints: [number, number][] = [];
      drawData.features.forEach((feature: any) => {
        const geom = feature.geometry;
        if (geom.type === 'LineString') {
          geom.coordinates.forEach((c: any) => allPoints.push([c[1], c[0]]));
        } else if (geom.type === 'MultiLineString') {
          geom.coordinates.forEach((line: any) =>
            line.forEach((c: any) => allPoints.push([c[1], c[0]])),
          );
        }
      });

      //if (allPoints.length === 0);

      // Dernier point = fin du circuit
      const endPt = allPoints[allPoints.length - 1];
      const labelLatLng = L.latLng(endPt[0], endPt[1]);

      // ── Style du label ──────────────────────────────────────────────────
      const darkColorMap: Record<string, string> = {
        '#48CAE4': '#148FAA',
        '#C77DFF': '#7B42C4',
        '#74C69D': '#2A7A4F',
        '#F4A261': '#A05A2C',
        '#FFD60A': '#8A7010',
      };
      const textColor = darkColorMap[circuit.color] ?? '#1E3326';
      const borderColor = circuit.color + '66';

      const labelIcon = L.divIcon({
        className: '',
        html: `<div style="
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      white-space: nowrap;
      padding: 4px 10px 4px 6px;
      border-radius: 4px;
      background: rgba(255,255,255,0.88);
      border: 0.5px solid ${borderColor};
      color: ${textColor};
      pointer-events: none;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    ">
      <span style="
        width: 6px; height: 6px;
        border-radius: 50%;
        background: ${circuit.color};
        flex-shrink: 0;
        display: inline-block;
      "></span>
      ${circuit.name}
    </div>`,
        // Ancré à gauche du label, légèrement décalé du point
        iconAnchor: [-12, 10],
      });

      L.marker(labelLatLng, { icon: labelIcon, interactive: false }).addTo(this.map);
    } catch (e) {}

    layer.on('mouseover', () => {
      layer.setStyle({ weight: 8, opacity: 1 });
      layer.bringToFront();
    });
    layer.on('mouseout', () => layer.setStyle({ weight: 4.5, opacity: 0.92 }));
    layer.on('click', (e: any) => {
      L.DomEvent?.stopPropagation(e);
      this.selectedCircuit.set(circuit);
      this.selectedCity.set(null);
      this.activePanel.set('circuit');
      this.brochureOpen.set(true);
    });

    return { layer, halo };
  }

  toggleCircuit(cl: CircuitLayer): void {
    cl.visible = !cl.visible;
    if (cl.visible) {
      cl.layer.addTo(this.map);
      cl.halo.addTo(this.map);
      cl.itinMarkers.forEach((m) => m.addTo(this.map));
    } else {
      this.map.removeLayer(cl.layer);
      this.map.removeLayer(cl.halo);
      cl.itinMarkers.forEach((m) => this.map.removeLayer(m));
    }
  }

  allVisible(): boolean {
    return this.circuitLayers.every((cl) => cl.visible);
  }

  toggleAll(): void {
    const show = !this.allVisible();
    this.circuitLayers.forEach((cl) => {
      if (cl.visible !== show) this.toggleCircuit(cl);
    });
  }

  private addCityMarker(L: any, city: City): void {
    const colorMap: Record<string, string> = {
      capital: '#FFD60A',
      north: '#74C69D',
      east: '#48CAE4',
      south: '#F4A261',
      west: '#C77DFF',
      highland: '#FF8FA3',
    };
    const color = colorMap[city.category];
    const isCapital = city.category === 'capital';
    const size = isCapital ? 20 : 14;

    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width:${size}px; height:${size}px;
        background:${color};
        border-radius:50%;
        border:2.5px solid rgba(255,255,255,0.9);
        box-shadow:0 0 0 3px ${color}45, 0 3px 16px rgba(0,0,0,0.35);
        cursor:pointer;
        display:flex; align-items:center; justify-content:center;
        font-size:${isCapital ? 10 : 0}px;
        font-weight:800;
        color:rgba(0,0,0,0.7);
      ">${isCapital ? '★' : ''}</div>`,
      iconAnchor: [size / 2, size / 2],
    });

    const nameIcon = L.divIcon({
      className: '',
      html: `<div style="
        color:${color};
        font-family:'DM Sans',sans-serif;
        font-size:${isCapital ? 13 : 11}px;
        font-weight:${isCapital ? 700 : 600};
        white-space:nowrap;
        text-shadow:0 1px 5px rgba(0,0,0,0.95),0 0 10px rgba(0,0,0,0.7);
        pointer-events:none;
        letter-spacing:0.5px;
      ">${city.name}</div>`,
      iconAnchor: [-6, -2],
    });

    const marker = L.marker([city.lat, city.lng], { icon, zIndexOffset: 500 }).addTo(this.map);
    L.marker([city.lat, city.lng], { icon: nameIcon, interactive: false }).addTo(this.map);

    marker.on('click', () => {
      this.selectedCity.set(city);
      this.selectedCircuit.set(null);
      this.activePanel.set('city');
      this.brochureOpen.set(true);
      this.map.panTo([city.lat, city.lng], { animate: true, duration: 0.8 });
    });
  }

  closeBrochure(): void {
    this.brochureOpen.set(false);
    setTimeout(() => {
      this.activePanel.set(null);
      this.selectedCity.set(null);
      this.selectedCircuit.set(null);
    }, 450);
  }

  getCategoryLabel(cat: string): string {
    const labels: Record<string, string> = {
      capital: 'Capitale',
      north: 'Grand Nord',
      east: 'Côte Est',
      south: 'Grand Sud',
      west: 'Côte Ouest',
      highland: 'Hautes Terres',
    };
    return labels[cat] || cat;
  }

  getCategoryColor(cat: string): string {
    const colors: Record<string, string> = {
      capital: '#FFD60A',
      north: '#74C69D',
      east: '#48CAE4',
      south: '#F4A261',
      west: '#C77DFF',
      highland: '#FF8FA3',
    };
    return colors[cat] || '#fff';
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
