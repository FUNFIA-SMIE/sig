/* ═══════════════════════════════════════════════════════════
   MODÈLE — Images d'étapes de circuit
   Ajouter ce fichier dans src/app/models/ ou directement
   dans app.ts si vous préférez tout garder ensemble.
   ═══════════════════════════════════════════════════════════ */

export interface EtapeImage {
  url: string; // chemin relatif depuis /assets/ ou URL absolue
  caption?: string; // légende optionnelle affichée sous l'image
  credit?: string; // crédit photo (ex: "© Unsplash")
  thumbnailUrl?: string; // ex: 200px wide, ~2-5 KB
}

export const ETAPE_IMAGES: Record<string, EtapeImage[]> = {
  // ── Tananarive ──────────────────────────────────────────────
  // ── Tananarive ──────────────────────────────────────────────
  'Antananarivo (Tana)': [
    {
      url: '/Photos/Tananarive/PXL_20250817_071546512.RAW-01.COVER.jpg',
      caption: 'Antananarivo — Photo 1',
    },
    {
      url: '/Photos/Tananarive/PXL_20250817_072022521.RAW-01.COVER.jpg',
      caption: 'Antananarivo — Photo 2',
    },
    {
      url: '/Photos/Tananarive/PXL_20250817_120917389.RAW-01.COVER.jpg',
      caption: 'Antananarivo — Photo 3',
    },
    {
      url: '/Photos/Tananarive/PXL_20250905_130028686.RAW-01.COVER.jpg',
      caption: 'Antananarivo — Photo 4',
    },
    {
      url: '/Photos/Tananarive/PXL_20250905_130353318.RAW-01.COVER.jpg',
      caption: 'Antananarivo — Photo 5',
    },
    {
      url: '/Photos/Tananarive/PXL_20250906_082343160.RAW-01.COVER.jpg',
      caption: 'Antananarivo — Photo 6',
    },
    {
      url: '/Photos/Tananarive/PXL_20250906_082651455.RAW-01.COVER.jpg',
      caption: 'Antananarivo — Photo 7',
    },
    {
      url: '/Photos/Tananarive/PXL_20250906_083341521.RAW-01.COVER.jpg',
      caption: 'Antananarivo — Photo 8',
    },
  ],

  // ── Andasibe ────────────────────────────────────────────────
  // ── Andasibe ────────────────────────────────────────────────
  Andasibe: [
    {
      url: '/Photos/Andasibe/WhatsApp Image 2026-06-11 at 17.19.15.jpeg',
      caption: 'Andasibe — Photo 1',
    },
    {
      url: '/Photos/Andasibe/WhatsApp Image 2026-06-11 at 17.19.15(1).jpeg',
      caption: 'Andasibe — Photo 2',
    },
    {
      url: '/Photos/Andasibe/WhatsApp Image 2026-06-11 at 17.19.16.jpeg',
      caption: 'Andasibe — Photo 3',
    },
    {
      url: '/Photos/Andasibe/WhatsApp Image 2026-06-11 at 17.19.16(1).jpeg',
      caption: 'Andasibe — Photo 4',
    },
    {
      url: '/Photos/Andasibe/WhatsApp Image 2026-06-11 at 17.19.16(2).jpeg',
      caption: 'Andasibe — Photo 5',
    },
  ],

  // ── Ambatolampy ─────────────────────────────────────────────
  Ambatolampy: [
    {
      url: '/Photos/Ambatolampy/PXL_20250817_120117453.RAW-01.COVER.jpg',
      caption: 'Ambatolampy — Photo 1',
    },
    {
      url: '/Photos/Ambatolampy/PXL_20250817_120119631.RAW-01.COVER.jpg',
      caption: 'Ambatolampy — Photo 2',
    },
    {
      url: '/Photos/Ambatolampy/PXL_20250817_120119631.RAW-02.ORIGINAL.dng',
      caption: 'Ambatolampy — Photo 3 (DNG)',
    },
    {
      url: '/Photos/Ambatolampy/PXL_20250905_130020544.RAW-01.COVER.jpg',
      caption: 'Ambatolampy — Photo 4',
    },
  ],

  // ── Antsirabe ───────────────────────────────────────────────
  // ── Antsirabe ──────────────────────────────────────────────
  Antsirabe: [
    {
      url: '/Photos/Antsirabe/WhatsApp Image 2026-06-11 at 17.45.46.jpeg',
      caption: 'Antsirabe — Photo 1',
    },
    {
      url: '/Photos/Antsirabe/WhatsApp Image 2026-06-11 at 17.45.47.jpeg',
      caption: 'Antsirabe — Photo 2',
    },
    {
      url: '/Photos/Antsirabe/WhatsApp Image 2026-06-11 at 17.45.47(1).jpeg',
      caption: 'Antsirabe — Photo 3',
    },
    {
      url: '/Photos/Antsirabe/WhatsApp Image 2026-06-11 at 17.45.47(2).jpeg',
      caption: 'Antsirabe — Photo 4',
    },
    {
      url: '/Photos/Antsirabe/WhatsApp Image 2026-06-11 at 17.45.48.jpeg',
      caption: 'Antsirabe — Photo 5',
    },
    {
      url: '/Photos/Antsirabe/WhatsApp Image 2026-06-11 at 17.45.48(1).jpeg',
      caption: 'Antsirabe — Photo 6',
    },
  ],

  // ── Ranomafana ──────────────────────────────────────────────
  Ranomafana: [
    {
      url: '/Photos/Ranomafana/PXL_20241018_112139572.PORTRAIT.jpg',
      caption: 'Ranomafana — Photo 1',
    },
    {
      url: '/Photos/Ranomafana/PXL_20241018_113505633.PORTRAIT.jpg',
      caption: 'Ranomafana — Photo 2',
    },
    {
      url: '/Photos/Ranomafana/PXL_20241018_114942387.PORTRAIT.ORIGINAL.jpg',
      caption: 'Ranomafana — Photo 3',
    },
    {
      url: '/Photos/Ranomafana/PXL_20241018_114944278.PORTRAIT.ORIGINAL.jpg',
      caption: 'Ranomafana — Photo 4',
    },
    {
      url: '/Photos/Ranomafana/PXL_20241018_114947765.PORTRAIT.ORIGINAL.jpg',
      caption: 'Ranomafana — Photo 5',
    },
    {
      url: '/Photos/Ranomafana/PXL_20241018_124437244.PORTRAIT.ORIGINAL.jpg',
      caption: 'Ranomafana — Photo 6',
    },
  ],

  // ── Manakara ────────────────────────────────────────────────
  Manakara: [
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.52.13.jpeg',
      caption: 'Manakara — Photo 1',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.52.14.jpeg',
      caption: 'Manakara — Photo 2',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.52.14(1).jpeg',
      caption: 'Manakara — Photo 3',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.52.14(2).jpeg',
      caption: 'Manakara — Photo 4',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.52.14(3).jpeg',
      caption: 'Manakara — Photo 5',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.52.14(4).jpeg',
      caption: 'Manakara — Photo 6',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.54.42.jpeg',
      caption: 'Manakara — Photo 7',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.54.42(1).jpeg',
      caption: 'Manakara — Photo 8',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.54.43.jpeg',
      caption: 'Manakara — Photo 9',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.54.44.jpeg',
      caption: 'Manakara — Photo 10',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.54.44(1).jpeg',
      caption: 'Manakara — Photo 11',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.54.44(2).jpeg',
      caption: 'Manakara — Photo 12',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.54.44(3).jpeg',
      caption: 'Manakara — Photo 13',
    },
    {
      url: '/Photos/Manakara/WhatsApp Image 2026-06-15 at 15.54.44(4).jpeg',
      caption: 'Manakara — Photo 14',
    },
  ],

  // ── Mahajanga ───────────────────────────────────────────────
  // ── Mahajanga ───────────────────────────────────────────────
  'Mahajanga (Majunga)': [
    {
      url: '/Photos/Majunga/WhatsApp Image 2026-05-28 at 10.22.45(1).jpeg',
      caption: 'Majunga — Photo 1',
    },
    {
      url: '/Photos/Majunga/WhatsApp Image 2026-05-28 at 10.22.45.jpeg',
      caption: 'Majunga — Photo 2',
    },
    {
      url: '/Photos/Majunga/WhatsApp Image 2026-05-28 at 10.22.46(1).jpeg',
      caption: 'Majunga — Photo 3',
    },
    {
      url: '/Photos/Majunga/WhatsApp Image 2026-05-28 at 10.22.46(2).jpeg',
      caption: 'Majunga — Photo 4',
    },
    {
      url: '/Photos/Majunga/WhatsApp Image 2026-05-28 at 10.22.46.jpeg',
      caption: 'Majunga — Photo 5',
    },
  ],

  // ── Nosy Be ─────────────────────────────────────────────────
  // ── Nosy Be ────────────────────────────────────────────────
  'Nosy Be': [
    {
      url: '/Photos/NosyBe/WhatsApp Image 2026-06-12 at 08.15.44.jpeg',
      caption: 'Nosy Be — Photo 1',
    },
    {
      url: '/Photos/NosyBe/WhatsApp Image 2026-06-12 at 08.15.50.jpeg',
      caption: 'Nosy Be — Photo 2',
    },
    {
      url: '/Photos/NosyBe/WhatsApp Image 2026-06-12 at 08.15.58.jpeg',
      caption: 'Nosy Be — Photo 3',
    },
    {
      url: '/Photos/NosyBe/WhatsApp Image 2026-06-12 at 08.15.59.jpeg',
      caption: 'Nosy Be — Photo 4',
    },
    {
      url: '/Photos/NosyBe/WhatsApp Image 2026-06-12 at 08.15.59(1).jpeg',
      caption: 'Nosy Be — Photo 5',
    },
    {
      url: '/Photos/NosyBe/WhatsApp Image 2026-06-12 at 08.16.00.jpeg',
      caption: 'Nosy Be — Photo 6',
    },
  ],

  // ── Miandrivazo ─────────────────────────────────────────────
  // ── Miandrivazo ─────────────────────────────────────────────
  Miandrivazo: [
    {
      url: '/Photos/Miandrivazo/PXL_20250818_103618376.RAW-01.COVER.jpg',
      caption: 'Miandrivazo — Photo 1',
    },
    {
      url: '/Photos/Miandrivazo/PXL_20250818_131353941.RAW-02.ORIGINAL.dng',
      caption: 'Miandrivazo — Photo 2 (DNG)',
    },
    {
      url: '/Photos/Miandrivazo/PXL_20250819_063001829.RAW-01.COVER.jpg',
      caption: 'Miandrivazo — Photo 3',
    },
    {
      url: '/Photos/Miandrivazo/PXL_20250819_063001829.RAW-02.ORIGINAL.dng',
      caption: 'Miandrivazo — Photo 4 (DNG)',
    },
    {
      url: '/Photos/Miandrivazo/PXL_20250819_063007141.RAW-01.COVER.jpg',
      caption: 'Miandrivazo — Photo 5',
    },
  ],

  // ── Morondava ───────────────────────────────────────────────
  // ── Morondava ───────────────────────────────────────────────
  Morondava: [
    {
      url: '/Photos/Morondava/PXL_20250819_143144448.NIGHT.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 1 (Nuit)',
    },
    {
      url: '/Photos/Morondava/PXL_20250819_143152891.NIGHT.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 2 (Nuit)',
    },
    {
      url: '/Photos/Morondava/PXL_20250819_143212192.NIGHT.RAW-01.COVER~3.jpg',
      caption: 'Morondava — Photo 3 (Nuit)',
    },
    {
      url: '/Photos/Morondava/PXL_20250819_143212192.NIGHT.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 4 (Nuit)',
    },
    {
      url: '/Photos/Morondava/PXL_20250819_143751979.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 5',
    },
    {
      url: '/Photos/Morondava/PXL_20250819_143758210.NIGHT.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 6 (Nuit)',
    },
    {
      url: '/Photos/Morondava/PXL_20250819_143800641.NIGHT.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 7 (Nuit)',
    },
    {
      url: '/Photos/Morondava/PXL_20250819_144548592.NIGHT.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 8 (Nuit)',
    },
    {
      url: '/Photos/Morondava/PXL_20250823_122225078.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 9',
    },
    {
      url: '/Photos/Morondava/PXL_20250823_122225078.RAW-02.ORIGINAL.jpg',
      caption: 'Morondava — Photo 10',
    },
    {
      url: '/Photos/Morondava/PXL_20250823_142705536.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 11',
    },
    {
      url: '/Photos/Morondava/PXL_20250823_143721084.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 12',
    },
    {
      url: '/Photos/Morondava/PXL_20250823_143748715.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 13',
    },
    {
      url: '/Photos/Morondava/PXL_20250823_144227014.NIGHT.RAW-01.COVER~3.jpg',
      caption: 'Morondava — Photo 14 (Nuit)',
    },
    {
      url: '/Photos/Morondava/PXL_20250823_144645338.RAW-01.COVER.jpg',
      caption: 'Morondava — Photo 15',
    },
    {
      url: '/Photos/Morondava/PXL_20250823_144645338.RAW-02.ORIGINAL.dng',
      caption: 'Morondava — Photo 16 (DNG)',
    },
  ],

  // ── Tsingy ──────────────────────────────────────────────────
  // ── Tsingy ──────────────────────────────────────────────────
  'Tsingy de Bemaraha': [
    {
      url: '/Photos/Tsingy/PXL_20250821_064419795.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 2',
    },
    {
      url: '/Photos/Tsingy/PXL_20250821_064423228.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 3',
    },
    {
      url: '/Photos/Tsingy/PXL_20250821_071005319.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 4',
    },
    {
      url: '/Photos/Tsingy/PXL_20250821_071014159.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 5',
    },
    {
      url: '/Photos/Tsingy/PXL_20250821_091058579.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 6',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_054832731.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 7',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_055725224.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 8',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_065630038.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 9',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_070530648.RAW-01.COVER~3.jpg',
      caption: 'Tsingy de Bemaraha — Photo 10',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_072719475.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 11',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_073047832.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 12',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_074325653.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 13',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_074338554.PORTRAIT.ORIGINAL~2.jpg',
      caption: 'Tsingy de Bemaraha — Photo 14',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_074340773.PORTRAIT.ORIGINAL.jpg',
      caption: 'Tsingy de Bemaraha — Photo 15',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_090255680.NIGHT.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 16 (Nuit)',
    },
    {
      url: '/Photos/Tsingy/PXL_20250822_090303774.NIGHT.RAW-01.COVER.jpg',
      caption: 'Tsingy de Bemaraha — Photo 17 (Nuit)',
    },
  ],

  // ── Ambositra ───────────────────────────────────────────────
  Ambositra: [
    {
      url: '/Photos/Ambositra/IMG-20260615-WA0047.jpg',
      caption: 'Ambositra — Photo 1',
    },
    {
      url: '/Photos/Ambositra/IMG-20260615-WA0048.jpg',
      caption: 'Ambositra — Photo 2',
    },
    {
      url: '/Photos/Ambositra/IMG-20260615-WA0049.jpg',
      caption: 'Ambositra — Photo 3',
    },
    {
      url: '/Photos/Ambositra/IMG-20260615-WA0050.jpg',
      caption: 'Ambositra — Photo 4',
    },
    {
      url: '/Photos/Ambositra/IMG-20260615-WA0051.jpg',
      caption: 'Ambositra — Photo 5',
    },
    {
      url: '/Photos/Ambositra/IMG-20260615-WA0052.jpg',
      caption: 'Ambositra — Photo 6',
    },
    {
      url: '/Photos/Ambositra/IMG-20260615-WA0053.jpg',
      caption: 'Ambositra — Photo 7',
    },
    {
      url: '/Photos/Ambositra/IMG-20260615-WA0054.jpg',
      caption: 'Ambositra — Photo 8',
    },
  ],

  // ── Sahambavy ───────────────────────────────────────────────
  'Sahambavy & Lac Hôtel': [
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-11 at 18.30.49.jpeg',
      caption: 'Sahambavy — Photo 1',
    },
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-11 at 18.30.49(1).jpeg',
      caption: 'Sahambavy — Photo 2',
    },
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-11 at 18.30.49(2).jpeg',
      caption: 'Sahambavy — Photo 3',
    },
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-11 at 18.30.50.jpeg',
      caption: 'Sahambavy — Photo 4',
    },
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-11 at 18.30.50(1).jpeg',
      caption: 'Sahambavy — Photo 5',
    },
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-12 at 08.13.46.jpeg',
      caption: 'Sahambavy — Photo 6',
    },
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-12 at 08.13.46(1).jpeg',
      caption: 'Sahambavy — Photo 7',
    },
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-12 at 08.13.47.jpeg',
      caption: 'Sahambavy — Photo 8',
    },
    {
      url: '/Photos/Sahambavy/WhatsApp Image 2026-06-12 at 08.13.47(1).jpeg',
      caption: 'Sahambavy — Photo 9',
    },
  ],

  // ── Fianarantsoa ────────────────────────────────────────────
  // ── Fianarantsoa ────────────────────────────────────────────
  Fianarantsoa: [
    {
      url: '/Photos/Fianarantsoa/DSC_0001.JPG',
      caption: 'Fianarantsoa — Photo 1',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0003.JPG',
      caption: 'Fianarantsoa — Photo 2',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0010.JPG',
      caption: 'Fianarantsoa — Photo 3',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0011.JPG',
      caption: 'Fianarantsoa — Photo 4',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0025.JPG',
      caption: 'Fianarantsoa — Photo 5',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0030.JPG',
      caption: 'Fianarantsoa — Photo 6',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0044.JPG',
      caption: 'Fianarantsoa — Photo 7',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0134.JPG',
      caption: 'Fianarantsoa — Photo 8',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0357.JPG',
      caption: 'Fianarantsoa — Photo 9',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0363.JPG',
      caption: 'Fianarantsoa — Photo 10',
    },
    {
      url: '/Photos/Fianarantsoa/DSC_0366.JPG',
      caption: 'Fianarantsoa — Photo 11',
    },
    {
      url: '/Photos/Fianarantsoa/PXL_20251106_122623335.RAW-01.COVER~3.jpg',
      caption: 'Fianarantsoa — Photo 12',
    },
  ],
  // ── Ambalavao ───────────────────────────────────────────────
Ambalavao: [
  { url: '/Photos/Ambalavao/IMG-20260615-WA0030.jpg', caption: 'Ambalavao — Photo 1' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0031.jpg', caption: 'Ambalavao — Photo 2' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0032.jpg', caption: 'Ambalavao — Photo 3' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0033.jpg', caption: 'Ambalavao — Photo 4' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0034.jpg', caption: 'Ambalavao — Photo 5' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0035.jpg', caption: 'Ambalavao — Photo 6' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0036.jpg', caption: 'Ambalavao — Photo 7' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0037.jpg', caption: 'Ambalavao — Photo 8' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0038.jpg', caption: 'Ambalavao — Photo 9' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0039.jpg', caption: 'Ambalavao — Photo 10' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0040.jpg', caption: 'Ambalavao — Photo 11' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0041.jpg', caption: 'Ambalavao — Photo 12' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0042.jpg', caption: 'Ambalavao — Photo 13' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0043.jpg', caption: 'Ambalavao — Photo 14' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0044.jpg', caption: 'Ambalavao — Photo 15' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0045.jpg', caption: 'Ambalavao — Photo 16' },
  { url: '/Photos/Ambalavao/IMG-20260615-WA0046.jpg', caption: 'Ambalavao — Photo 17' },
],
  // ── Isalo ───────────────────────────────────────────────────
  // ── Isalo ───────────────────────────────────────────────────
  "Parc National de l'Isalo": [
    {
      url: '/Photos/Isalo/PXL_20250902_104006462.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 1",
    },
    {
      url: '/Photos/Isalo/PXL_20250902_141359176.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 2",
    },
    {
      url: '/Photos/Isalo/PXL_20250902_141928840.RAW-01.COVER~3.jpg',
      caption: "Parc National de l'Isalo — Photo 3",
    },
    {
      url: '/Photos/Isalo/PXL_20250902_141933644.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 4",
    },
    {
      url: '/Photos/Isalo/PXL_20250902_143339049.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 5",
    },
    {
      url: '/Photos/Isalo/PXL_20250902_143720419.RAW-01.COVER~3.jpg',
      caption: "Parc National de l'Isalo — Photo 6",
    },
    {
      url: '/Photos/Isalo/PXL_20250902_143720419.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 7",
    },
    {
      url: '/Photos/Isalo/PXL_20250902_141359176.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 8",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_070135626.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 9",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_075616748.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 10",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_085624042.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 11",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_085829490.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 12",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_090046987.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 13",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_090135555.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 14",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_091458016.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 15",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_092037562.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 16",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_092411024.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 17",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_105447187.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 18",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_113809447.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 19",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_113902148.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 20",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_115944240.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 21",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_115948845.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 22",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_120234819.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 23",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_142804394.RAW-01.COVER.jpg',
      caption: "Parc National de l'Isalo — Photo 24",
    },
    {
      url: '/Photos/Isalo/PXL_20250903_142808391.RAW-01.COVER~3.jpg',
      caption: "Parc National de l'Isalo — Photo 25",
    },
  ],

  // ── Tuléar ──────────────────────────────────────────────────
  // ── Tuléar ──────────────────────────────────────────────────
  'Tuléar (Toliara)': [
    {
      url: '/Photos/Tulear/PXL_20241029_122300443.jpg',
      caption: 'Tuléar — Photo 1',
    },
    {
      url: '/Photos/Tulear/PXL_20241029_125705322.jpg',
      caption: 'Tuléar — Photo 2',
    },
    {
      url: '/Photos/Tulear/PXL_20241029_132525770.PORTRAIT.ORIGINAL~2.jpg',
      caption: 'Tuléar — Photo 3',
    },
    {
      url: '/Photos/Tulear/PXL_20241222_044421800.jpg',
      caption: 'Tuléar — Photo 4',
    },
    {
      url: '/Photos/Tulear/PXL_20241222_163158145.NIGHT~3.jpg',
      caption: 'Tuléar — Photo 5 (Nuit)',
    },
    {
      url: '/Photos/Tulear/PXL_20241222_163158145.NIGHT.jpg',
      caption: 'Tuléar — Photo 6 (Nuit)',
    },
    {
      url: '/Photos/Tulear/PXL_20241223_081024262.jpg',
      caption: 'Tuléar — Photo 7',
    },
    {
      url: '/Photos/Tulear/PXL_20241224_055700165.jpg',
      caption: 'Tuléar — Photo 8',
    },
    {
      url: '/Photos/Tulear/PXL_20241224_191125803.NIGHT.jpg',
      caption: 'Tuléar — Photo 9 (Nuit)',
    },
    {
      url: '/Photos/Tulear/PXL_20250805_140816452.RAW-01.COVER~3.jpg',
      caption: 'Tuléar — Photo 10',
    },
  ],

  // ── Anakao ──────────────────────────────────────────────────
  // ── Anakao & Nosy Ve ────────────────────────────────────────
  'Anakao & Nosy Ve': [
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.20.54.jpeg',
      caption: 'Anakao & Nosy Ve — Photo 1',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.20.55.jpeg',
      caption: 'Anakao & Nosy Ve — Photo 2',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.20.55(1).jpeg',
      caption: 'Anakao & Nosy Ve — Photo 3',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.20.56.jpeg',
      caption: 'Anakao & Nosy Ve — Photo 4',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.20.56(1).jpeg',
      caption: 'Anakao & Nosy Ve — Photo 5',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.20.57.jpeg',
      caption: 'Anakao & Nosy Ve — Photo 6',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.25.25.jpeg',
      caption: 'Anakao & Nosy Ve — Photo 7',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.25.26.jpeg',
      caption: 'Anakao & Nosy Ve — Photo 8',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.26.57.jpeg',
      caption: 'Anakao & Nosy Ve — Photo 9',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.26.57(1).jpeg',
      caption: 'Anakao & Nosy Ve — Photo 10',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.26.58.jpeg',
      caption: 'Anakao & Nosy Ve — Photo 11',
    },
    {
      url: '/Photos/Anakao/WhatsApp Image 2026-06-12 at 12.26.58(1).jpeg',
      caption: 'Anakao & Nosy Ve — Photo 12',
    },
  ],
  // ── Ambatomilo ──────────────────────────────────────────────
  Ambatomilo: [
    {
      url: '/Photos/Ambatomilo/PXL_20250731_144640408.PORTRAIT.ORIGINAL.jpg',
      caption: 'Ambatomilo — Photo 1',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250801_074239093~2.jpg',
      caption: 'Ambatomilo — Photo 2',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250801_074239093.jpg',
      caption: 'Ambatomilo — Photo 3',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250803_082926547.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 4',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250803_083016268.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 5',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250803_083019208.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 6',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250828_090404272.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 7',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250829_085817398.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 8',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250829_094950719.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 9',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250830_103111364.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 10',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250830_103754181.RAW-01.COVER~3.jpg',
      caption: 'Ambatomilo — Photo 11',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250830_142924471.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 12',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250830_143721015.RAW-01.COVER~3.jpg',
      caption: 'Ambatomilo — Photo 13',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250830_144226008.RAW-01.COVER~3.jpg',
      caption: 'Ambatomilo — Photo 14',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250901_083357183.jpg',
      caption: 'Ambatomilo — Photo 15',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250901_084001959.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 16',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250901_084003129.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 17',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250901_092731505.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 18',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250901_092836562.RAW-01.COVER~2.jpg',
      caption: 'Ambatomilo — Photo 19',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250901_092903032.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 20',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250901_093158402.RAW-01.COVER~3.jpg',
      caption: 'Ambatomilo — Photo 21',
    },
    {
      url: '/Photos/Ambatomilo/PXL_20250901_093232572.RAW-01.COVER.jpg',
      caption: 'Ambatomilo — Photo 22',
    },
  ],

  // ── Belo sur Mer ────────────────────────────────────────────
  // ── Belo sur Mer ────────────────────────────────────────────
  'Belo sur Mer': [
    {
      url: '/Photos/Belo Sur Mer/PXL_20250824_090027835.RAW-01.COVER[2].jpg',
      caption: 'Belo sur Mer — Photo 1',
    },
    {
      url: '/Photos/Belo Sur Mer/PXL_20250824_111618712.RAW-01.COVER[2].jpg',
      caption: 'Belo sur Mer — Photo 2',
    },
    {
      url: '/Photos/Belo Sur Mer/PXL_20250824_111619472.RAW-01.COVER~3[2].jpg',
      caption: 'Belo sur Mer — Photo 3',
    },
    {
      url: '/Photos/Belo Sur Mer/PXL_20250824_123708893.RAW-02.ORIGINAL[2].dng',
      caption: 'Belo sur Mer — Photo 4 (DNG)',
    },
    {
      url: '/Photos/Belo Sur Mer/PXL_20250824_144430108.RAW-01.COVER[2].jpg',
      caption: 'Belo sur Mer — Photo 5',
    },
    {
      url: '/Photos/Belo Sur Mer/PXL_20250824_150647005.RAW-01.COVER[2].jpg',
      caption: 'Belo sur Mer — Photo 6',
    },
    {
      url: '/Photos/Belo Sur Mer/PXL_20250824_151908616.RAW-01.COVER[2].jpg',
      caption: 'Belo sur Mer — Photo 7',
    },
    {
      url: '/Photos/Belo Sur Mer/PXL_20250825_040231247.RAW-01.COVER[2].jpg',
      caption: 'Belo sur Mer — Photo 8',
    },
  ],

  // ── Morombe ─────────────────────────────────────────────────
  Morombe: [
    {
      url: '/Photos/Morombe/PXL_20250825_142206409.RAW-01.COVER~3 (1).jpg',
      caption: 'Morombe — Photo 1',
    },
    {
      url: '/Photos/Morombe/PXL_20250825_142206409.RAW-01.COVER~3.jpg',
      caption: 'Morombe — Photo 2',
    },
    {
      url: '/Photos/Morombe/PXL_20250825_142206409.RAW-01.COVER~4.jpg',
      caption: 'Morombe — Photo 3',
    },
    {
      url: '/Photos/Morombe/PXL_20250825_151732251.RAW-01.COVER.jpg',
      caption: 'Morombe — Photo 4',
    },
    {
      url: '/Photos/Morombe/PXL_20250825_151735084.RAW-01.COVER.jpg',
      caption: 'Morombe — Photo 5',
    },
    {
      url: '/Photos/Morombe/PXL_20250826_072016915.RAW-01.COVER.jpg',
      caption: 'Morombe — Photo 6',
    },
    {
      url: '/Photos/Morombe/PXL_20250826_072019351.RAW-01.COVER.jpg',
      caption: 'Morombe — Photo 7',
    },
    {
      url: '/Photos/Morombe/PXL_20250826_084630335.RAW-01.COVER.jpg',
      caption: 'Morombe — Photo 8',
    },
    {
      url: '/Photos/Morombe/PXL_20250826_084632380.RAW-01.COVER.jpg',
      caption: 'Morombe — Photo 9',
    },
    {
      url: '/Photos/Morombe/PXL_20250826_084632380.RAW-02.ORIGINAL.dng',
      caption: 'Morombe — Photo 10 (DNG)',
    },
    {
      url: '/Photos/Morombe/PXL_20250826_091555933.RAW-01.COVER.jpg',
      caption: 'Morombe — Photo 11',
    },
  ],

  // ── Andavadoaka ─────────────────────────────────────────────
  Andavadoaka: [
    {
      url: '/Photos/Andavadoaka/PXL_20241026_083815755.PORTRAIT.ORIGINAL.jpg',
      caption: 'Andavadoaka — Photo 1',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20241026_152333096.PORTRAIT.jpg',
      caption: 'Andavadoaka — Photo 2',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250826_094341016.RAW-01.COVER.jpg',
      caption: 'Andavadoaka — Photo 3',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250826_095857067.RAW-01.COVER.jpg',
      caption: 'Andavadoaka — Photo 4',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250826_111115543.RAW-01.COVER.jpg',
      caption: 'Andavadoaka — Photo 5',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250826_111137622.RAW-01.COVER.jpg',
      caption: 'Andavadoaka — Photo 6',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250827_143210314.RAW-01.COVER.jpg',
      caption: 'Andavadoaka — Photo 7',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250827_143253073.RAW-01.COVER.jpg',
      caption: 'Andavadoaka — Photo 8',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250827_143505832.RAW-01.COVER~2.jpg',
      caption: 'Andavadoaka — Photo 9',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250827_144252201.RAW-01.COVER~2.jpg',
      caption: 'Andavadoaka — Photo 10',
    },
    {
      url: '/Photos/Andavadoaka/PXL_20250827_144258100.RAW-01.COVER.jpg',
      caption: 'Andavadoaka — Photo 11',
    },
  ],

  // ── Andringitra ─────────────────────────────────────────────
  'Andringitra & Tsaranoro': [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      caption: "Pic Boby — 2 658 m d'altitude",
    },
    {
      url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
      caption: 'Parois de granite de Tsaranoro',
    },
    {
      url: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
      caption: "Trekking dans le massif d'Andringitra",
    },
  ],

  Diego: [
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.32.jpeg',
      caption: 'Diego-Suarez — Photo 1',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.33(1).jpeg',
      caption: 'Diego-Suarez — Photo 2',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.33.jpeg',
      caption: 'Diego-Suarez — Photo 3',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.34(1).jpeg',
      caption: 'Diego-Suarez — Photo 4',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.34(2).jpeg',
      caption: 'Diego-Suarez — Photo 5',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.34.jpeg',
      caption: 'Diego-Suarez — Photo 6',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.35(1).jpeg',
      caption: 'Diego-Suarez — Photo 7',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.35.jpeg',
      caption: 'Diego-Suarez — Photo 8',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.36(1).jpeg',
      caption: 'Diego-Suarez — Photo 9',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.36(2).jpeg',
      caption: 'Diego-Suarez — Photo 10',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.36.jpeg',
      caption: 'Diego-Suarez — Photo 11',
    },
    {
      url: '/Photos/Diego/WhatsApp Image 2026-06-09 at 17.21.37.jpeg',
      caption: 'Diego-Suarez — Photo 12',
    },
  ],
  Soatanana: [
    {
      url: '/Photos/Soatanana/WhatsApp Image 2026-06-09 at 18.07.41.jpeg',
      caption: 'Soatanana — Photo 1',
    },
    {
      url: '/Photos/Soatanana/WhatsApp Image 2026-06-09 at 18.07.42(1).jpeg',
      caption: 'Soatanana — Photo 2',
    },
    {
      url: '/Photos/Soatanana/WhatsApp Image 2026-06-09 at 18.07.42.jpeg',
      caption: 'Soatanana — Photo 3',
    },
    {
      url: '/Photos/Soatanana/WhatsApp Image 2026-06-09 at 18.07.43(1).jpeg',
      caption: 'Soatanana — Photo 4',
    },
    {
      url: '/Photos/Soatanana/WhatsApp Image 2026-06-09 at 18.07.43.jpeg',
      caption: 'Soatanana — Photo 5',
    },
    {
      url: '/Photos/Soatanana/WhatsApp Image 2026-06-09 at 18.07.44.jpeg',
      caption: 'Soatanana — Photo 6',
    },
  ],

  Ilakaka: [
    {
      url: '/Photos/Ilakaka/WhatsApp Image 2026-06-15 at 16.46.04.jpeg',
      caption: 'Ilakaka — Photo 1',
    },
    {
      url: '/Photos/Ilakaka/WhatsApp Image 2026-06-15 at 16.46.04(1).jpeg',
      caption: 'Ilakaka — Photo 2',
    },
    {
      url: '/Photos/Ilakaka/WhatsApp Image 2026-06-15 at 16.46.04(2).jpeg',
      caption: 'Ilakaka — Photo 3',
    },
    {
      url: '/Photos/Ilakaka/WhatsApp Image 2026-06-15 at 16.46.57.jpeg',
      caption: 'Ilakaka — Photo 4',
    },
    {
      url: '/Photos/Ilakaka/WhatsApp Image 2026-06-15 at 17.07.49.jpeg',
      caption: 'Ilakaka — Photo 5',
    },
  ],
};
