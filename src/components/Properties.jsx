"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  SlidersHorizontal,
  Building2,
  Home,
  TreePine,
  Briefcase,
  Phone,
} from "lucide-react";

const FILTERS = ["All Properties", "Residential", "Commercial", "Plots & Land"];

const PROPERTIES = [
  {
    name: "Avyaya Meadows",
    type: "Residential",
    category: "Villas",
    beds: "4BHK",
    status: "Ready to Move",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  },
  {
    name: "Avyaya Horizon Towers",
    type: "Residential",
    category: "Apartments",
    beds: "3BHK",
    status: "Under Construction",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
  },
  {
    name: "Avyaya Business Square",
    type: "Commercial",
    category: "Office Spaces",
    beds: "1BHK",
    status: "Ready to Move",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
  {
    name: "Avyaya High Street",
    type: "Commercial",
    category: "Retail",
    beds: "2BHK",
    status: "New Launch",
    img: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=700&q=80",
  },
  {
    name: "Avyaya Green Acres",
    type: "Plots & Land",
    category: "Residential Plots",
    beds: "3BHK",
    status: "Selling Fast",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80",
  },
  {
    name: "Avyaya Riverside Villas",
    type: "Residential",
    category: "Gated Community",
    beds: "5BHK",
    status: "New Launch",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
  },
  {
    name: "Avyaya Township Phase II",
    type: "Plots & Land",
    category: "Township",
    beds: "1BHK",
    status: "Under Construction",
    img: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=700&q=80",
  },
  {
    name: "Avyaya Corporate Park",
    type: "Commercial",
    category: "Business Park",
    beds: "2BHK",
    status: "Ready to Move",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80",
  },
  {
    name: "Avyaya Garden Residences",
    type: "Residential",
    category: "Apartments",
    beds: "2BHK",
    status: "Ready to Move",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80",
  },
];

const LOCATIONS = [
  { icon: Building2, count: "9 Projects" },
  { icon: Home, count: "6 Projects" },
  { icon: TreePine, count: "4 Projects" },
  { icon: Briefcase, count: "3 Projects" },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Fade({
  children,
  className = "",
  delay = 0,
  from = "bottom",
  style = {},
}) {
  const [ref, inView] = useInView();
  const transforms = {
    bottom: "translateY(36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : transforms[from],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 16,
        flexWrap: "nowrap",
        overflow: "hidden",
      }}
    >
      <div
        style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }}
      />
      <div
        style={{
          width: 5,
          height: 5,
          background: "#b8892e",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <div
        style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }}
      />
      <span
        style={{
          color: "#b8892e",
          fontSize: "clamp(9px,2.5vw,11px)",
          letterSpacing: "0.18em",
          fontWeight: 700,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          flexShrink: 1,
          minWidth: 0,
        }}
      >
        {children}
      </span>
      <div
        style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }}
      />
      <div
        style={{
          width: 5,
          height: 5,
          background: "#b8892e",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <div
        style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }}
      />
    </div>
  );
}

function EyebrowLeft({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 12,
      }}
    >
      <div
        style={{ width: 24, height: 2, background: "#b8892e", flexShrink: 0 }}
      />
      <span
        style={{
          color: "#b8892e",
          fontSize: "clamp(9px,2.5vw,11px)",
          letterSpacing: "0.2em",
          fontWeight: 700,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function StatusPill({ status }) {
  const colorMap = {
    "Ready to Move": "#2d6a4f",
    "Under Construction": "#b07d2a",
    "New Launch": "#1a3a6b",
    "Selling Fast": "#7a2e2e",
  };
  return (
    <span
      style={{
        position: "absolute",
        top: 14,
        left: 14,
        zIndex: 2,
        background: colorMap[status] || "#b8892e",
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.03em",
        padding: "5px 12px",
        borderRadius: 2,
      }}
    >
      {status}
    </span>
  );
}

function PropertyCard({ p, delay }) {
  return (
    <Fade delay={delay}>
      <div
        className="property-card"
        style={{
          background: "#fff",
          border: "1px solid #e2d9cc",
          borderRadius: 2,
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            height: 220,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <StatusPill status={p.status} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.img}
            alt={p.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <p
            style={{
              color: "#b8892e",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            {p.category}
          </p>
          <h3
            style={{
              fontWeight: 700,
              color: "#12243d",
              fontSize: "clamp(14px,1.8vw,17px)",
              marginBottom: 6,
              lineHeight: 1.3,
            }}
          >
            {p.name}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              paddingTop: "0.875rem",
              borderTop: "1px solid #e2d9cc",
              marginBottom: "1rem",
            }}
          >
            {p.beds && (
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <FaHome size={14} color="#12243D" />
                <span style={{ fontSize: 12, color: "rgba(18,36,61,0.6)" }}>
                  {p.beds}
                </span>
              </div>
            )}
            {p.baths && (
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Bath style={{ width: 14, height: 14, color: "#b8892e" }} />
                <span style={{ fontSize: 12, color: "rgba(18,36,61,0.6)" }}>
                  {p.baths} Baths
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

const css = `
  * { box-sizing: border-box; }
  .props-root { overflow-x: hidden; }

  .property-card { transition: box-shadow 0.3s, transform 0.3s; }
  .property-card:hover { box-shadow: 0 16px 40px rgba(18,36,61,0.14); transform: translateY(-4px); }
  .filter-btn { transition: background 0.25s, color 0.25s, border-color 0.25s; font-family: inherit; }
  .loc-card { transition: border-color 0.3s, box-shadow 0.3s; }
  .loc-card:hover { border-color: #b8892e !important; box-shadow: 0 8px 24px rgba(18,36,61,0.1); }

  /* ── GRIDS & LAYOUT ── */
  .hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3rem;
    align-items: end;
  }
  .hero-stats {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .filter-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-bottom: 2.5rem;
  }
  .filter-bar {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  .props-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .featured-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3rem;
    align-items: center;
    min-width: 0;
  }
  .featured-img {
    position: relative;
    height: 420px;
    min-width: 0;
  }
  .featured-specs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  .locations-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  .cta-box {
    padding: clamp(2rem,5vw,4rem) clamp(1.25rem,4vw,3rem);
  }
  .cta-btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* ── TABLET ≤ 1024px ── */
  @media (max-width: 1024px) {
    .hero-grid { grid-template-columns: 1fr; }
    .hero-stats { justify-content: flex-start; margin-top: 1.5rem; }
    .props-grid { grid-template-columns: repeat(2, 1fr); }
    .featured-grid { grid-template-columns: 1fr; }
    .featured-img { height: 340px; }
    .locations-grid { grid-template-columns: repeat(2, 1fr); }
    .filter-header { flex-direction: column; align-items: flex-start; }
    .filter-bar { width: 100%; }
  }

  /* ── MOBILE ≤ 700px ── */
  @media (max-width: 700px) {
    .props-grid { grid-template-columns: 1fr; }
    .featured-img { height: 240px; }
    .featured-specs { grid-template-columns: repeat(3, 1fr); }
    .locations-grid { grid-template-columns: repeat(2, 1fr); }
    .filter-bar {
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: visible;
      padding-bottom: 6px;
      margin-left: calc(-1 * clamp(1.25rem, 4vw, 2.5rem));
      margin-right: calc(-1 * clamp(1.25rem, 4vw, 2.5rem));
      padding-left: clamp(1.25rem, 4vw, 2.5rem);
      padding-right: clamp(1.25rem, 4vw, 2.5rem);
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      width: auto;
    }
    .filter-bar::-webkit-scrollbar { display: none; }
    .hero-stats { gap: 0.75rem; }
    .cta-btns { flex-direction: column; align-items: center; }
    .cta-btns a { width: 100%; max-width: 320px; }
  }

  /* ── XS ≤ 400px ── */
  @media (max-width: 400px) {
    .locations-grid { grid-template-columns: 1fr; }
    .featured-specs { grid-template-columns: repeat(3, 1fr); }
    .hero-stats { flex-direction: column; }
    .hero-stats > div { width: 100%; }
  }
`;

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All Properties");

  const filtered =
    activeFilter === "All Properties"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.type === activeFilter);

  return (
    <>
      <style>{css}</style>
      <div
        className="props-root"
        style={{
          background: "#f7f4ef",
          color: "#12243d",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* ── HERO ── */}
        <section
          style={{
            backgroundImage: "url('/properties.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding:
              "clamp(5rem,8vw,7rem) clamp(1.25rem,4vw,2.5rem) clamp(2.5rem,6vw,5rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 10,
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div className="hero-grid">
              <Fade>
                <EyebrowLeft>Our Portfolio</EyebrowLeft>
                <h1
                  style={{
                    fontSize: "clamp(1.8rem,4.5vw,3.8rem)",
                    fontWeight: 700,
                    color: "#ffff",
                    lineHeight: 1.1,
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.01em",
                    wordBreak: "break-word",
                  }}
                >
                  Properties Built to{" "}
                  <span style={{ color: "#b8892e" }}>Last Generations</span>
                </h1>
                <p
                  style={{
                    color: "rgba(214, 216, 221, 0.97)",
                    fontSize: "clamp(0.85rem,1.8vw,1rem)",
                    lineHeight: 1.8,
                    maxWidth: "100%",
                  }}
                >
                  Browse our residential, commercial, and land developments —
                  each one designed with the same enduring philosophy: Avyaya.
                </p>
              </Fade>
              <Fade delay={150} from="right">
                <div className="hero-stats">
                  {[
                    { v: "9", l: "Active Projects" },
                    { v: "3", l: "Property Types" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      style={{
                        border: "1px solid rgba(184,137,46,0.35)",
                        background: "rgba(255,255,255,0.75)",
                        padding:
                          "clamp(0.75rem,2vw,1rem) clamp(0.875rem,2vw,1.4rem)",
                        borderRadius: 2,
                        textAlign: "center",
                        minWidth: 88,
                        flex: "1 1 auto",
                      }}
                    >
                      <p
                        style={{
                          color: "#b8892e",
                          fontWeight: 800,
                          fontSize: "clamp(1.1rem,3vw,1.6rem)",
                          lineHeight: 1,
                        }}
                      >
                        {s.v}
                      </p>
                      <p
                        style={{ color: "#12243d", fontSize: 11, marginTop: 6 }}
                      >
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── FILTER + LISTINGS ── */}
        <section
          style={{
            padding:
              "clamp(2.5rem,6vw,5rem) clamp(1.25rem,4vw,2.5rem) clamp(3rem,8vw,6rem)",
            background: "#f7f4ef",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Fade>
              <div className="filter-header">
                <div style={{ minWidth: 0 }}>
                  <EyebrowLeft>Browse Listings</EyebrowLeft>
                  <h2
                    style={{
                      fontSize: "clamp(1.3rem,2.6vw,2.1rem)",
                      fontWeight: 700,
                      color: "#12243d",
                    }}
                  >
                    Find Your Next Property
                  </h2>
                </div>
                <div className="filter-bar">
                  <SlidersHorizontal
                    style={{
                      width: 14,
                      height: 14,
                      color: "rgba(18,36,61,0.45)",
                      flexShrink: 0,
                    }}
                  />
                  {FILTERS.map((f) => (
                    <button
                      key={f}
                      className="filter-btn"
                      onClick={() => setActiveFilter(f)}
                      style={{
                        border:
                          activeFilter === f
                            ? "1px solid #b8892e"
                            : "1px solid #e2d9cc",
                        background: activeFilter === f ? "#b8892e" : "#fff",
                        color:
                          activeFilter === f ? "#fff" : "rgba(18,36,61,0.65)",
                        fontWeight: 600,
                        fontSize: "clamp(11px,1.4vw,12.5px)",
                        padding: "0.5rem 1rem",
                        borderRadius: 20,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </Fade>

            <div className="props-grid">
              {filtered.map((p, i) => (
                <PropertyCard key={p.name} p={p} delay={(i % 6) * 70} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(18,36,61,0.5)",
                  padding: "3rem 0",
                }}
              >
                No properties found in this category right now.
              </p>
            )}
          </div>
        </section>

        {/* ── FEATURED SPOTLIGHT ── */}
        <section
          style={{
            padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)",
            background: "#12243d",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <Fade>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "clamp(2rem,5vw,3rem)",
                }}
              >
                <Eyebrow>Featured Listing</Eyebrow>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem,3vw,2.4rem)",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  This Month&apos;s Spotlight Property
                </h2>
              </div>
            </Fade>

            <div className="featured-grid">
              <Fade from="left">
                <div className="featured-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"
                    alt="Avyaya Riverside Villas"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      background: "#b8892e",
                      color: "#fff",
                      padding: "0.6rem 1.1rem",
                      borderRadius: 2,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}
                  >
                    New Launch
                  </div>
                </div>
              </Fade>

              <Fade delay={150} from="right">
                <div
                  style={{ marginTop: "clamp(1.5rem,4vw,0rem)", minWidth: 0 }}
                >
                  <p
                    style={{
                      color: "#b8892e",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    Gated Community · Yamuna Expressway
                  </p>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "clamp(1.3rem,2.6vw,2.2rem)",
                      fontWeight: 700,
                      marginBottom: 16,
                      wordBreak: "break-word",
                    }}
                  >
                    Avyaya Riverside Villas
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "clamp(13px,1.5vw,14.5px)",
                      lineHeight: 1.85,
                      marginBottom: "1.75rem",
                    }}
                  >
                    Five-bedroom riverside villas set across landscaped acreage,
                    designed for families who want space, privacy, and a
                    community built around them. Limited units released in this
                    phase.
                  </p>

                  <div className="featured-specs">
                    {[{ icon: FaHome, v: "3 BHK" }].map((f) => (
                        
                      <div
                        key={f.v}
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(184,137,46,0.2)",
                          borderRadius: 2,
                          padding: "0.85rem 0.5rem",
                          textAlign: "center",
                        }}
                      >
                        <f.icon
                          style={{
                            width: 18,
                            height: 18,
                            color: "#b8892e",
                            margin: "0 auto 6px",
                          }}
                        />
                        <p
                          style={{
                            color: "rgba(255,255,255,0.7)",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          {f.v}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "1rem",
                    }}
                  >
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "#b8892e",
                        color: "#fff",
                        fontWeight: 700,
                        padding: "0.8rem 1.5rem",
                        borderRadius: 2,
                        textDecoration: "none",
                        fontSize: "clamp(12px,1.4vw,13.5px)",
                      }}
                    >
                      Enquire Now{" "}
                      <ArrowRight
                        style={{ width: 15, height: 15, flexShrink: 0 }}
                      />
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── BROWSE BY LOCATION ── */}
        <section
          style={{
            padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)",
            background: "#fff",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Fade>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "clamp(2rem,5vw,3.5rem)",
                }}
              >
                <Eyebrow>Explore By Region</Eyebrow>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem,3vw,2.4rem)",
                    fontWeight: 700,
                    color: "#12243d",
                  }}
                >
                  Browse Properties by Location
                </h2>
              </div>
            </Fade>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)",
            background: "#f7f4ef",
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              background: "#12243d",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div className="cta-box">
              <Fade>
                <div
                  style={{
                    textAlign: "center",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Eyebrow>What You&apos;re Looking For</Eyebrow>
                  <h2
                    style={{
                      fontSize: "clamp(1.3rem,3vw,2.3rem)",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "1.25rem",
                      lineHeight: 1.25,
                      wordBreak: "break-word",
                    }}
                  >
                    Let Our Team Help You Find the Right Property
                  </h2>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "clamp(13px,1.5vw,14.5px)",
                      lineHeight: 1.8,
                      maxWidth: 520,
                      margin: "0 auto 2rem",
                    }}
                  >
                    Share your requirements with our advisory team and
                    we&apos;ll match you with upcoming launches, resale
                    opportunities, and off-market listings.
                  </p>
                  <div className="cta-btns">
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        background: "#b8892e",
                        color: "#fff",
                        fontWeight: 700,
                        padding: "0.9rem 2rem",
                        borderRadius: 2,
                        textDecoration: "none",
                        fontSize: "clamp(12px,1.4vw,14px)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Talk to an Advisor{" "}
                      <Phone style={{ width: 15, height: 15, flexShrink: 0 }} />
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
