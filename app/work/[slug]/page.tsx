import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import DocReaderClient from "@/components/DocReaderClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.positioning,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.name} — Jamzy`,
      description: project.positioning,
      url: `/work/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Jamzy`,
      description: project.positioning,
    },
  };
}

export default async function ProjectDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <DocReaderClient project={project} />;
}
