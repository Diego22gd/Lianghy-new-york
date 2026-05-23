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

export function getPortfolioModule(slug: string) {
  return portfolioModules.find((module) => module.slug === slug);
}

export async function getPortfolioAssets() {
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