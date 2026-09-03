import { ImageResponse } from "next/og";

const LOGOMARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 100">
  <path d="M54,15 L76,85 L98,15 L98,85" fill="none" stroke="#1e5f8c" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16,15 L16,85 M16,50 L54,15 M16,50 L54,85" fill="none" stroke="#1c2f4a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const LOGOMARK_B64 = Buffer.from(LOGOMARK_SVG).toString("base64");

export const runtime = "edge";
export const alt = "Khalil Moughamir · Portfolio Data & Développement Web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f5f0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Monogram */}
        <img
          src={`data:image/svg+xml;base64,${LOGOMARK_B64}`}
          width={104}
          height={90}
          alt=""
          style={{ marginBottom: 32 }}
        />

        {/* Name */}
        <div
          style={{
            color: "#1c2f4a",
            fontSize: 60,
            fontWeight: 600,
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          Khalil Moughamir
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#a8b0b5",
            fontSize: 24,
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Data · Développement Web
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Python", "SQL", "Power BI", "React", "Next.js"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(217,199,163,0.6)",
                borderRadius: 999,
                padding: "8px 16px",
                color: "#1c2f4a",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "#a8b0b5",
            fontSize: 16,
            letterSpacing: "2px",
          }}
        >
          khalil-moughamir.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
