export default function ColorDemo() {
  const accents = [
    {
      name: "Antique Gold",
      hex: "#C9A84C",
      textHex: "#C9A84C",
      bgHex: "#C9A84C18",
      borderHex: "#C9A84C40",
      description: "Warm, metallic — editorial without being flashy",
    },
    {
      name: "Dark Bronze",
      hex: "#A67C3A",
      textHex: "#A67C3A",
      bgHex: "#A67C3A18",
      borderHex: "#A67C3A40",
      description: "Deeper, more muted — closer to the Fey reference",
    },
    {
      name: "Pale Gold",
      hex: "#E2C97E",
      textHex: "#E2C97E",
      bgHex: "#E2C97E14",
      borderHex: "#E2C97E35",
      description: "Lighter, high contrast on dark — good for links and text accents",
    },
    {
      name: "Evergreen",
      hex: "#4E7D53",
      textHex: "#4E7D53",
      bgHex: "#4E7D5318",
      borderHex: "#4E7D5340",
      description: "Medium forest — visible on dark bg, reads as pine not lime",
    },
    {
      name: "Deep Forest",
      hex: "#3D6B42",
      textHex: "#3D6B42",
      bgHex: "#3D6B4218",
      borderHex: "#3D6B4240",
      description: "Darker and richer — bold fills, hover states, borders",
    },
    {
      name: "Sage Forest",
      hex: "#6B9C6F",
      textHex: "#6B9C6F",
      bgHex: "#6B9C6F14",
      borderHex: "#6B9C6F35",
      description: "Lighter sage-green — highest legibility for text and links",
    },
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fafafa", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 32px" }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ color: "#666", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            Portfolio · Accent Color Exploration
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 300, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Color Options
          </h1>
          <p style={{ color: "#888", fontSize: 15, maxWidth: 480 }}>
            Six accent candidates applied to realistic UI elements. Background is the live site value (#0a0a0a).
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {accents.map((a) => (
            <div
              key={a.hex}
              style={{
                background: "#111",
                border: `1px solid #222`,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {/* Color swatch header */}
              <div style={{ height: 6, background: a.hex }} />

              <div style={{ padding: 28 }}>
                {/* Name + hex */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 16, fontWeight: 500 }}>{a.name}</span>
                  <span style={{ fontSize: 12, color: "#555", fontFamily: "monospace" }}>{a.hex}</span>
                </div>
                <p style={{ fontSize: 13, color: "#666", marginBottom: 28, lineHeight: 1.5 }}>
                  {a.description}
                </p>

                {/* ── Nav link ── */}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 11, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Nav / Links</p>
                  <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                    <span style={{ fontSize: 14, color: "#555", cursor: "pointer" }}>Work</span>
                    <span style={{ fontSize: 14, color: a.textHex, cursor: "pointer", borderBottom: `1px solid ${a.borderHex}` }}>About</span>
                    <span style={{ fontSize: 14, color: "#555", cursor: "pointer" }}>Contact</span>
                  </div>
                </div>

                {/* ── Heading with accent rule ── */}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 11, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Section Heading</p>
                  <div style={{ borderLeft: `3px solid ${a.hex}`, paddingLeft: 12 }}>
                    <div style={{ fontSize: 20, fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                      UX Design
                    </div>
                    <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>
                      10 years · Enterprise &amp; Product
                    </div>
                  </div>
                </div>

                {/* ── Body text with inline link ── */}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 11, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Body + Link</p>
                  <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.6 }}>
                    Principal UX Designer at{" "}
                    <span style={{ color: a.textHex, cursor: "pointer" }}>SAP Concur</span>
                    , with a focus on enterprise travel systems and AI-assisted workflows.
                  </p>
                </div>

                {/* ── Divider ── */}
                <div style={{ height: 1, background: a.borderHex, marginBottom: 24 }} />

                {/* ── Tags ── */}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 11, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Tags</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["Interaction Design", "Enterprise UX", "Design Systems"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          color: a.textHex,
                          border: `1px solid ${a.borderHex}`,
                          background: a.bgHex,
                          borderRadius: 4,
                          padding: "4px 10px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── CTA button ── */}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 11, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>CTA Button</p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      style={{
                        fontSize: 13,
                        color: "#0a0a0a",
                        background: a.hex,
                        border: "none",
                        borderRadius: 6,
                        padding: "9px 18px",
                        cursor: "pointer",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                      }}
                    >
                      View Case Study
                    </button>
                    <button
                      style={{
                        fontSize: 13,
                        color: a.textHex,
                        background: "transparent",
                        border: `1px solid ${a.borderHex}`,
                        borderRadius: 6,
                        padding: "9px 18px",
                        cursor: "pointer",
                        letterSpacing: "0.02em",
                      }}
                    >
                      See All Work
                    </button>
                  </div>
                </div>

                {/* ── Project card border ── */}
                <div>
                  <p style={{ fontSize: 11, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Project Card Hover</p>
                  <div
                    style={{
                      border: `1px solid ${a.hex}`,
                      borderRadius: 8,
                      padding: "16px",
                      background: a.bgHex,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Tell Concur About Your Trip</div>
                      <div style={{ fontSize: 12, color: "#666" }}>Enterprise Product Design · SAP Concur</div>
                    </div>
                    <span style={{ color: a.textHex, fontSize: 18 }}>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combination preview */}
        <div style={{ marginTop: 80, marginBottom: 16 }}>
          <p style={{ color: "#666", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            Bonus — Side-by-side pairing
          </p>
          <p style={{ color: "#888", fontSize: 15, marginBottom: 32 }}>
            What if gold is used for interactive elements (links, buttons) and forest green for structural accents (borders, tags)?
          </p>
        </div>

        <div style={{ background: "#111", border: "1px solid #222", borderRadius: 12, padding: 40 }}>
          {/* Faux nav */}
          <nav style={{ display: "flex", gap: 32, marginBottom: 48, paddingBottom: 20, borderBottom: "1px solid #1e1e1e" }}>
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.04em" }}>Adam Prumm</span>
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 14, color: "#555" }}>Work</span>
            <span style={{ fontSize: 14, color: "#C9A84C", borderBottom: "1px solid #C9A84C60" }}>About</span>
            <span style={{ fontSize: 14, color: "#555" }}>Contact</span>
          </nav>

          {/* Faux hero */}
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 24, height: 2, background: "#4E7D53" }} />
              <span style={{ fontSize: 12, color: "#4E7D53", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Principal UX Designer
              </span>
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 20 }}>
              10 years designing enterprise products that{" "}
              <span style={{ color: "#C9A84C" }}>people actually use.</span>
            </h2>
            <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7, marginBottom: 28 }}>
              Currently at SAP Concur. Previously ATPCO, eBay, and freelance. PhD candidate in Informatics at Indiana University.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ fontSize: 13, color: "#0a0a0a", background: "#C9A84C", border: "none", borderRadius: 6, padding: "10px 22px", cursor: "pointer", fontWeight: 500 }}>
                View My Work
              </button>
              <button style={{ fontSize: 13, color: "#C9A84C", background: "transparent", border: "1px solid #C9A84C40", borderRadius: 6, padding: "10px 22px", cursor: "pointer" }}>
                About Me
              </button>
            </div>
          </div>

          {/* Faux project card row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { title: "Corporate Travel & AI", cat: "SAP Concur", active: true },
              { title: "Tell Concur About Your Trip", cat: "SAP Concur", active: false },
              { title: "Airline Industry UX Practice", cat: "ATPCO", active: false },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  border: p.active ? "1px solid #4E7D5360" : "1px solid #1e1e1e",
                  borderRadius: 8,
                  padding: 16,
                  background: p.active ? "#4E7D5310" : "transparent",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 11, color: "#555" }}>{p.cat}</div>
                {p.active && (
                  <div style={{ marginTop: 8 }}>
                    <span style={{ fontSize: 10, color: "#4E7D53", border: "1px solid #4E7D5340", borderRadius: 3, padding: "2px 7px", letterSpacing: "0.05em" }}>
                      Featured
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginTop: 24, fontSize: 13, color: "#444", textAlign: "center" }}>
          Pairing: Gold (#C9A84C) for links/CTAs · Forest Green (#4E7D53) for structure/tags
        </p>
      </div>
    </div>
  );
}
