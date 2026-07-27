import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioShowcase } from "./portfolio-showcase";
import { getPortfolioAssets, getPortfolioModule } from "./portfolio-data";

export async function buildPortfolioMetadata(slug: string): Promise<Metadata> {
  const module = getPortfolioModule(slug);

  if (!module) {
    return {};
  }

  const { assets } = await getPortfolioAssets(slug);
  const coverImage = assets[0]?.imageUrl || "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703619/Mira-7423_leg8rt.jpg";

  return {
    title: `${module.menuLabel} | Lianghy Beauty Studio NYC`,
    description: module.subtitle,
    keywords: [module.menuLabel, ...module.tags, "New York makeup", "NYC hair", "Lianghy portfolio"],
    openGraph: {
      title: `${module.menuLabel} | Lianghy Beauty Studio NYC`,
      description: module.subtitle,
      url: `https://lianghy.com/portfolio/${slug}`,
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: `${module.menuLabel} portfolio gallery`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${module.menuLabel} | Lianghy Beauty Studio NYC`,
      description: module.subtitle,
      images: [coverImage],
    },
  };
}

export async function renderPortfolioRoute(slug: string) {
  const module = getPortfolioModule(slug);

  if (!module) {
    notFound();
  }

  const { assets } = await getPortfolioAssets(slug);

  return <PortfolioShowcase assets={assets} module={module} />;
}