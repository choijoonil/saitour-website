import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { getService, services } from "@/data/services/index";

type TourDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "서비스"
    };
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/tours/${slug}` },
    openGraph: {
      title: `${service.title} | 사이투어`,
      description: service.summary,
      images: [service.heroImage]
    }
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
