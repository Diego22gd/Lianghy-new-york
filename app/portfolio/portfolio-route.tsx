import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioShowcase } from "./portfolio-showcase";
import { getPortfolioAssets, getPortfolioModule } from "./portfolio-data";

export async function buildPortfolioMetadata(slug: string): Promise<Metadata> {
  const module = getPortfolioModule(slug);

  if (!module) {
    return {};
  }

  return {
    title: `${module.menuLabel} | Lhiangy`,
    description: module.subtitle,
  };
}

export async function renderPortfolioRoute(slug: string) {
  const module = getPortfolioModule(slug);

  if (!module) {
    notFound();
  }

  const { assets } = await getPortfolioAssets();

  return <PortfolioShowcase assets={assets} module={module} />;
}