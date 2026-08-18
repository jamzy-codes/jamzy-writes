import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/data/projects";

export const alt = "Jamzy — Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#06070c",
          backgroundImage:
            "radial-gradient(circle at 75% 30%, rgba(77,127,255,0.18), transparent 55%), radial-gradient(circle at 85% 70%, rgba(139,92,246,0.14), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "#8b93a1",
            marginBottom: 28,
            textTransform: "uppercase",
          }}
        >
          JAMZY<span style={{ color: "#8b5cf6" }}>!</span>
          <span style={{ marginLeft: 16, fontSize: 20, color: "#565d6b" }}>Case Study</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            color: "#eef0f5",
          }}
        >
          {project?.name ?? "Case Study"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8b93a1",
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {project?.positioning ?? ""}
        </div>
      </div>
    ),
    { ...size }
  );
}
