import type { Metadata } from "next";
import { buildPortfolioMetadata, renderPortfolioRoute } from "../portfolio-route";
import { portfolioModules } from "../portfolio-data";

type PortfolioModulePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioModules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({ params }: PortfolioModulePageProps): Promise<Metadata> {
  const { slug } = await params;
  return buildPortfolioMetadata(slug);
}

export default async function PortfolioModulePage({ params }: PortfolioModulePageProps) {
  const { slug } = await params;
  return renderPortfolioRoute(slug);
}