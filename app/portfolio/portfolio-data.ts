export type CloudinaryResource = {
  asset_id: string;
  public_id: string;
  secure_url: string;
  width?: number;
  height?: number;
};

export type PortfolioAsset = {
  id: string;
  title: string;
  label: string;
  note: string;
  alt: string;
  imageUrl: string;
  width: number;
  height: number;
  sessionId?: string;
  sessionName?: string;
  sessionDate?: string;
  isSessionCover?: boolean;
  excludeFromCarousel?: boolean;
  isVideo?: boolean;
};

export type PortfolioModule = {
  slug: string;
  menuLabel: string;
  title: string;
  subtitle: string;
  tags: string[];
  galleryHeading: string;
  sequenceHeading: string;
};

export const portfolioModules: PortfolioModule[] = [
  {
    slug: "key-projects",
    menuLabel: "Key Projects",
    title: "Key Projects",
    subtitle: "A broader visual edit of standout beauty work across campaigns, portraits and client-facing looks.",
    tags: ["Beauty", "Campaign", "Portfolio", "Signature"],
    galleryHeading: "Featured projects",
    sequenceHeading: "Project sequence",
  },
  {
    slug: "photoshoot",
    menuLabel: "Photoshoot",
    title: "Photoshoot",
    subtitle: "An image-led module focused on polished beauty direction, clean skin work and editorial precision in front of the camera.",
    tags: ["Beauty", "Editorial", "Skin", "Photoshoot"],
    galleryHeading: "Selected work",
    sequenceHeading: "More looks",
  },
  {
    slug: "editorials",
    menuLabel: "Editorials",
    title: "Editorials",
    subtitle: "Editorial beauty looks with a sharper rhythm, balancing concept, light and finish for magazine-style imagery.",
    tags: ["Editorial", "Beauty", "Fashion", "Studio"],
    galleryHeading: "Editorial spread",
    sequenceHeading: "Editorial sequence",
  },
  {
    slug: "social-glam",
    menuLabel: "Social Glam",
    title: "Social Glam",
    subtitle: "High-finish glam looks built for camera-ready events, night lighting and polished social content.",
    tags: ["Glam", "Events", "Camera", "Glow"],
    galleryHeading: "Glam selection",
    sequenceHeading: "Glam sequence",
  },
  {
    slug: "bridesmaid-crew",
    menuLabel: "Bridesmaid Crew",
    title: "Bridesmaid Crew",
    subtitle: "Soft coordination across multiple faces, keeping tone, timing and finish aligned for the full bridal party.",
    tags: ["Bridal", "Crew", "Soft Glam", "Harmony"],
    galleryHeading: "Crew highlights",
    sequenceHeading: "Crew sequence",
  },
  {
    slug: "timeless-beauty",
    menuLabel: "Timeless Beauty",
    title: "Timeless Beauty",
    subtitle: "Classic makeup direction with modern restraint, centered on skin, structure and a lasting elegant finish.",
    tags: ["Classic", "Skin", "Elegant", "Timeless"],
    galleryHeading: "Timeless looks",
    sequenceHeading: "Beauty sequence",
  },
];

export const curatedAssets: PortfolioAsset[] = [
  {
    id: "Mira-7423",
    title: "Beauty Look 01",
    label: "Hero",
    note: "Luminous skin and clean editorial finish.",
    alt: "Makeup portfolio portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703619/Mira-7423_leg8rt.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Mira-7362",
    title: "Beauty Look 02",
    label: "Skin focus",
    note: "Refined complexion work for camera-ready beauty.",
    alt: "Professional makeup detail",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703618/Mira-7362_lpntg4.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Mira-6301",
    title: "Beauty Look 03",
    label: "Beauty detail",
    note: "Portrait beauty work with clean definition.",
    alt: "Beauty portrait with makeup focus",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703612/Mira-6301_ifo2hi.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Mira-6313",
    title: "Beauty Look 04",
    label: "Soft glam",
    note: "Balanced eyes, lips and skin finish.",
    alt: "Soft glam makeup portfolio look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703611/Mira-6313_o07swg.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Mo5294",
    title: "Beauty Look 05",
    label: "Editorial clean",
    note: "Clean editorial makeup direction.",
    alt: "Clean editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703366/Mo5294_dt1liu.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Mo3808",
    title: "Beauty Look 06",
    label: "Studio",
    note: "Elegant studio-ready makeup finish.",
    alt: "Studio makeup portfolio look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703364/Mo3808_gnwpo9.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Mo2107",
    title: "Beauty Look 07",
    label: "Polished",
    note: "Defined features with polished beauty direction.",
    alt: "Polished professional makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703356/Mo2107_m8ql8f.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Rolando-Acunam-Kim019",
    title: "Beauty Look 08",
    label: "Campaign",
    note: "Campaign-ready beauty with crisp finish.",
    alt: "Beauty campaign makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703047/Rolando.Acunam_Kim019_gyanlg.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Rolando-Acunam-Kim008",
    title: "Beauty Look 09",
    label: "Portrait",
    note: "Portrait makeup with clear skin focus.",
    alt: "Editorial makeup portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703045/Rolando.Acunam_Kim008_hodkvp.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Rolando-Acunam-RWarehouse042",
    title: "Beauty Look 10",
    label: "Fashion",
    note: "Editorial fashion beauty direction.",
    alt: "Fashion beauty makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778702933/Rolando.Acunam_RWarehouse042_xmyuec.jpg",
    width: 1400,
    height: 1750,
  },
  {
    id: "Rolando-Acunam-RWarehouse031",
    title: "Beauty Look 11",
    label: "Final",
    note: "Strong closing image with consistent finish.",
    alt: "Closing image for makeup portfolio",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778700638/Rolando.Acunam_RWarehouse031_uj3c57.jpg",
    width: 1400,
    height: 1750,
  },
];

export const editorialAssets: PortfolioAsset[] = [
  // Primary Editorial Hero Cover (3rd photo of Series II - Part 1)
  {
    id: "edit-series-2-3",
    title: "Editorial Look 05",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771435/Photo_Jul_20_2026_8_44_24_PM_4_ncpxxc.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-ii-a",
    sessionName: "Editorial Series II - Part 1",
    sessionDate: "Collection II-A",
  },
  {
    id: "edit-series-2-1",
    title: "Editorial Look 01",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771440/Photo_Jul_20_2026_8_44_24_PM_5_1_ijga90.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-ii-a",
    sessionName: "Editorial Series II - Part 1",
    sessionDate: "Collection II-A",
    isSessionCover: true,
  },
  {
    id: "edit-series-1-1",
    title: "Editorial Look 02",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771470/Photo_Jun_06_2026_4_24_11_AM_wgntwu.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-i",
    sessionName: "Editorial Series I",
    sessionDate: "Collection I",
    isSessionCover: true,
  },
  {
    id: "edit-series-1-2",
    title: "Editorial Look 02-B",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771469/Photo_Jun_06_2026_4_46_16_AM_erkat3.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-i",
    sessionName: "Editorial Series I",
    sessionDate: "Collection I",
  },
  {
    id: "edit-series-1-3",
    title: "Editorial Look 03",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771468/Photo_Jun_06_2026_4_24_11_AM_1_wgntwu.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-i",
    sessionName: "Editorial Series I",
    sessionDate: "Collection I",
  },
  {
    id: "edit-series-2-2",
    title: "Editorial Look 04",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771439/Photo_Jul_20_2026_8_44_24_PM_5_ezb9fj.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-ii-a",
    sessionName: "Editorial Series II - Part 1",
    sessionDate: "Collection II-A",
  },

  // Series II - Part 2 (Fotos 4, 5, 6, 7)
  {
    id: "edit-series-2-4",
    title: "Editorial Look 06",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771435/Photo_Jul_20_2026_8_44_24_PM_3_uqd5km.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-ii-b",
    sessionName: "Editorial Series II - Part 2",
    sessionDate: "Collection II-B",
    isSessionCover: true,
  },
  {
    id: "edit-series-2-5",
    title: "Editorial Look 07",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771435/Photo_Jul_20_2026_8_44_24_PM_2_1_xnnb4a.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-ii-b",
    sessionName: "Editorial Series II - Part 2",
    sessionDate: "Collection II-B",
  },
  {
    id: "edit-series-2-6",
    title: "Editorial Look 08",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771433/Photo_Jul_20_2026_8_44_24_PM_sbnidh.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-ii-b",
    sessionName: "Editorial Series II - Part 2",
    sessionDate: "Collection II-B",
  },
  {
    id: "edit-series-2-7",
    title: "Editorial Look 09",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771433/Photo_Jul_20_2026_8_44_24_PM_1_zqnzy1.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-ii-b",
    sessionName: "Editorial Series II - Part 2",
    sessionDate: "Collection II-B",
  },

  // Series III - Part 1 (Fotos 1, 2, 3, 5, 7, 8)
  {
    id: "edit-series-3-1",
    title: "Editorial Look 10",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771463/Photo_Jul_20_2026_8_47_47_PM_13_dazsxo.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-a",
    sessionName: "Editorial Series III - Part 1",
    sessionDate: "Collection III-A",
    isSessionCover: true,
  },
  {
    id: "edit-series-3-2",
    title: "Editorial Look 11",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771462/Photo_Jul_20_2026_8_47_47_PM_12_wgbzwz.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-a",
    sessionName: "Editorial Series III - Part 1",
    sessionDate: "Collection III-A",
  },
  {
    id: "edit-series-3-3",
    title: "Editorial Look 12",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771461/Photo_Jul_20_2026_8_47_47_PM_11_amb2hd.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-a",
    sessionName: "Editorial Series III - Part 1",
    sessionDate: "Collection III-A",
  },
  {
    id: "edit-series-3-5",
    title: "Editorial Look 14",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771459/Photo_Jul_20_2026_8_47_47_PM_9_up937r.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-a",
    sessionName: "Editorial Series III - Part 1",
    sessionDate: "Collection III-A",
  },
  {
    id: "edit-series-3-7",
    title: "Editorial Look 16",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771455/Photo_Jul_20_2026_8_47_47_PM_7_xnkzj8.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-a",
    sessionName: "Editorial Series III - Part 1",
    sessionDate: "Collection III-A",
  },
  {
    id: "edit-series-3-8",
    title: "Editorial Look 17",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771453/Photo_Jul_20_2026_8_47_47_PM_6_zvjb7v.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-a",
    sessionName: "Editorial Series III - Part 1",
    sessionDate: "Collection III-A",
  },

  // Series III - Part 2 (Fotos 4, 6)
  {
    id: "edit-series-3-4",
    title: "Editorial Look 13",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771460/Photo_Jul_20_2026_8_47_47_PM_10_vwotz4.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-b",
    sessionName: "Editorial Series III - Part 2",
    sessionDate: "Collection III-B",
    isSessionCover: true,
  },
  {
    id: "edit-series-3-6",
    title: "Editorial Look 15",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771456/Photo_Jul_20_2026_8_47_47_PM_8_mzjwlt.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-b",
    sessionName: "Editorial Series III - Part 2",
    sessionDate: "Collection III-B",
    excludeFromCarousel: true,
  },

  // Series III - Part 3 (Fotos 9, 10, 11)
  {
    id: "edit-series-3-9",
    title: "Editorial Look 18",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771450/Photo_Jul_20_2026_8_47_47_PM_4_l5nwzv.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-c",
    sessionName: "Editorial Series III - Part 3",
    sessionDate: "Collection III-C",
    isSessionCover: true,
  },
  {
    id: "edit-series-3-10",
    title: "Editorial Look 19",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771449/Photo_Jul_20_2026_8_47_47_PM_3_ixweno.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-c",
    sessionName: "Editorial Series III - Part 3",
    sessionDate: "Collection III-C",
  },
  {
    id: "edit-series-3-11",
    title: "Editorial Look 20",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771448/Photo_Jul_20_2026_8_47_47_PM_2_yjld2k.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-c",
    sessionName: "Editorial Series III - Part 3",
    sessionDate: "Collection III-C",
  },

  // Series III - Part 4 (Fotos 12, 14)
  {
    id: "edit-series-3-12",
    title: "Editorial Look 21",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771445/Photo_Jul_20_2026_8_47_47_PM_1_1_bcmpko.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-d",
    sessionName: "Editorial Series III - Part 4",
    sessionDate: "Collection III-D",
    isSessionCover: true,
  },
  {
    id: "edit-series-3-14",
    title: "Editorial Look 23",
    label: "Editorial",
    note: "Clean editorial beauty direction.",
    alt: "Editorial makeup look",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784771441/Photo_Jul_20_2026_8_47_47_PM_gh1x8o.jpg",
    width: 1400,
    height: 1750,
    sessionId: "series-iii-d",
    sessionName: "Editorial Series III - Part 4",
    sessionDate: "Collection III-D",
  },
];

export const timelessAssets: PortfolioAsset[] = [
  // Session 1: Timeless Series I
  {
    id: "tb-1-photo",
    title: "Timeless Look 01",
    label: "Timeless",
    note: "Classic beauty direction with refined finish.",
    alt: "Timeless beauty portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1785101720/Photo_Apr_25_2026_1_44_28_PM_ngurum.jpg",
    width: 1400,
    height: 1750,
    sessionId: "tb-series-1",
    sessionName: "Timeless Series I",
    sessionDate: "Collection I",
    isSessionCover: true,
  },
  {
    id: "tb-1-video",
    title: "Timeless Look 01 - Video",
    label: "Timeless",
    note: "Video capture of timeless look.",
    alt: "Timeless beauty video",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/video/upload/f_mp4,q_auto/v1785101721/Video_Apr_25_2026_1_44_19_PM_gdoga3.mp4",
    width: 1080,
    height: 1920,
    sessionId: "tb-series-1",
    sessionName: "Timeless Series I",
    sessionDate: "Collection I",
    isVideo: true,
  },

  // Session 2: Timeless Series II
  {
    id: "tb-2-photo1",
    title: "Timeless Look 02",
    label: "Timeless",
    note: "Classic beauty direction with refined finish.",
    alt: "Timeless beauty portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1785101717/Photo_Jun_28_2025_6_36_01_PM_wmho9u.jpg",
    width: 1400,
    height: 1750,
    sessionId: "tb-series-2",
    sessionName: "Timeless Series II",
    sessionDate: "Collection II",
  },
  {
    id: "tb-2-photo2",
    title: "Timeless Look 03",
    label: "Timeless",
    note: "Classic beauty direction with refined finish.",
    alt: "Timeless beauty portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1785101718/Photo_Jun_28_2025_6_38_43_PM_qh0roy.jpg",
    width: 1400,
    height: 1750,
    sessionId: "tb-series-2",
    sessionName: "Timeless Series II",
    sessionDate: "Collection II",
    isSessionCover: true,
  },
  {
    id: "tb-2-video",
    title: "Timeless Look 02 - Video",
    label: "Timeless",
    note: "Video capture of timeless look.",
    alt: "Timeless beauty video",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/video/upload/f_mp4,q_auto/v1785101718/Video_Jul_24_2025_8_54_19_PM_uv7qjo.mp4",
    width: 1080,
    height: 1920,
    sessionId: "tb-series-2",
    sessionName: "Timeless Series II",
    sessionDate: "Collection II",
    isVideo: true,
  },

  // Session 3: Timeless Series III
  {
    id: "tb-3-photo",
    title: "Timeless Look 04",
    label: "Timeless",
    note: "Classic beauty direction with refined finish.",
    alt: "Timeless beauty portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1785101719/Photo_Jun_06_2026_11_26_54_AM_wbffg5.jpg",
    width: 1400,
    height: 1750,
    sessionId: "tb-series-3",
    sessionName: "Timeless Series III",
    sessionDate: "Collection III",
    isSessionCover: true,
  },
  {
    id: "tb-3-video",
    title: "Timeless Look 04 - Video",
    label: "Timeless",
    note: "Video capture of timeless look.",
    alt: "Timeless beauty video",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/video/upload/f_mp4,q_auto/v1785101720/Video_Jun_13_2026_11_57_09_AM_rnovam.mp4",
    width: 1080,
    height: 1920,
    sessionId: "tb-series-3",
    sessionName: "Timeless Series III",
    sessionDate: "Collection III",
    isVideo: true,
  },

  // Session 4: Timeless Series IV
  {
    id: "tb-4-photo1",
    title: "Timeless Look 05",
    label: "Timeless",
    note: "Classic beauty direction with refined finish.",
    alt: "Timeless beauty portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1785101716/Photo_Jun_28_2025_5_13_03_PM_ytbuu4.jpg",
    width: 1400,
    height: 1750,
    sessionId: "tb-series-4",
    sessionName: "Timeless Series IV",
    sessionDate: "Collection IV",
    isSessionCover: true,
  },
  {
    id: "tb-4-photo2",
    title: "Timeless Look 06",
    label: "Timeless",
    note: "Classic beauty direction with refined finish.",
    alt: "Timeless beauty portrait",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1785101717/Photo_Jun_28_2025_5_13_20_PM_t0oczn.jpg",
    width: 1400,
    height: 1750,
    sessionId: "tb-series-4",
    sessionName: "Timeless Series IV",
    sessionDate: "Collection IV",
  },
  {
    id: "tb-4-video",
    title: "Timeless Look 05 - Video",
    label: "Timeless",
    note: "Video capture of timeless look.",
    alt: "Timeless beauty video",
    imageUrl: "https://res.cloudinary.com/dqcpmau9i/video/upload/f_mp4,q_auto/v1785101717/Video_Jul_03_2025_11_05_59_PM_fvxhfn.mp4",
    width: 1080,
    height: 1920,
    sessionId: "tb-series-4",
    sessionName: "Timeless Series IV",
    sessionDate: "Collection IV",
    isVideo: true,
  },
];

export function getPortfolioModule(slug: string) {
  return portfolioModules.find((module) => module.slug === slug);
}

export async function getPortfolioAssets(slug?: string) {
  if (slug === "editorials") {
    return { assets: editorialAssets, source: "editorials" as const };
  }
  if (slug === "timeless-beauty") {
    return { assets: timelessAssets, source: "timeless-beauty" as const };
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return { assets: curatedAssets, source: "fallback" as const };
  }

  const endpoint = new URL(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`);
  endpoint.searchParams.set("max_results", "100");

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return { assets: curatedAssets, source: "fallback" as const };
    }

    const payload = (await response.json()) as { resources?: CloudinaryResource[] };
    const resources = payload.resources?.filter((resource) => resource.secure_url) ?? [];
    const assetMap = new Map(resources.map((resource) => [resource.secure_url.replace(/\/upload\/.+?\/v/, "/upload/q_auto/f_auto/v"), resource]));

    const assets = curatedAssets.map((asset) => {
      const matchingResource = assetMap.get(asset.imageUrl);

      if (!matchingResource) {
        return asset;
      }

      return {
        ...asset,
        width: matchingResource.width ?? asset.width,
        height: matchingResource.height ?? asset.height,
      };
    });

    return { assets, source: "api" as const };
  } catch {
    return { assets: curatedAssets, source: "fallback" as const };
  }
}