import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Khalil Moughamir — Portfolio Data & Développement Web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07070a",
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
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#f5f5f7", fontSize: 36, fontWeight: 700 }}>KM</span>
        </div>

        {/* Name */}
        <div
          style={{
            color: "#f5f5f7",
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
            color: "#8a8a90",
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
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "8px 16px",
                color: "#f5f5f7",
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
            color: "#8a8a90",
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
