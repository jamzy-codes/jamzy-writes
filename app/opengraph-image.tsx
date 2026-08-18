import { ImageResponse } from "next/og";

export const alt = "Jamzy — Web3 Technical Writer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "#eef0f5",
            marginBottom: 40,
            textTransform: "uppercase",
          }}
        >
          JAMZY<span style={{ color: "#8b5cf6" }}>!</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            color: "#eef0f5",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Turning dense protocol mechanics into documents people actually trust.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8b93a1",
            marginTop: 32,
          }}
        >
          Web3 Technical Writer — Whitepapers &amp; Protocol Documentation
        </div>
      </div>
    ),
    { ...size }
  );
}
