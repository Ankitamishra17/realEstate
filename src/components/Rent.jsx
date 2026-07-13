"use client";

import { useEffect, useRef, useState } from "react";
import { FaHome } from "react-icons/fa";

import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  KeyRound,
  Wallet,
  CalendarClock,
  Sofa,
} from "lucide-react";

const TYPE_FILTERS = ["All Types", "Apartments", "Villas", "Commercial"];

const LISTINGS = [
  {
    name: "Avyaya Garden Residences",
    type: "Apartments",
    furnishing: "Semi-Furnished",
    beds: "2 BHK",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80",
  },
  {
    name: "Avyaya Horizon Towers",
    type: "Apartments",
    furnishing: "Unfurnished",
    beds: "3 BHK",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
  },
  {
    name: "Avyaya Meadows",
    type: "Villas",
    furnishing: "Furnished",
    beds: "4 BHK",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  },
  {
    name: "Avyaya Business Square",
    type: "Commercial",
    furnishing: "Unfurnished",
    beds: "2 BHK",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
  {
    name: "Avyaya Garden Residences — Tower B",
    type: "Apartments",
    furnishing: "Unfurnished",
    beds: "1 BHK",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
  },
  {
    name: "Avyaya Riverside Villas",
    type: "Villas",
    furnishing: "Furnished",
    beds: "5 BHK",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
  },
];

const STEPS = [
  {
    icon: Search,
    step: "Step One",
    title: "Browse & Shortlist",
    text: "Filter by budget, furnishing, and location to find homes that fit.",
  },
  {
    icon: MapPin,
    step: "Step Two",
    title: "Schedule a Visit",
    text: "Book an in-person or virtual viewing at a time that suits you.",
  },
  {
    icon: FileCheck2,
    step: "Step Three",
    title: "Verify & Agree Terms",
    text: "We verify the property and draft a clear, fair rental agreement.",
  },
  {
    icon: KeyRound,
    step: "Step Four",
    title: "Move In",
    text: "Sign, pay the deposit, and collect your keys — we handle the handover.",
  },
];

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Verified Listings Only",
    desc: "Every rental is verified by our team before it goes live — no fake listings.",
  },
  {
    icon: FileCheck2,
    title: "Clear Rental Agreements",
    desc: "Standard, legally sound agreements with no confusing clauses.",
  },
  {
    icon: Wallet,
    title: "No Hidden Brokerage",
    desc: "Brokerage terms are shown upfront — what you see is what you pay.",
  },
  {
    icon: CalendarClock,
    title: "Fast Move-In",
    desc: "Most tenants move in within a week of finalising a property.",
  },
];

/* ─────────────────────────────────────────── */
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

function RentalCard({ p, delay }) {
  const isNow = p.available === "Available Now";
  return (
    <Fade delay={delay} style={{ height: "100%" }}>
      <div
        className="listing-card"
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
            height: 210,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
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
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "45%",
              background:
                "linear-gradient(to top, rgba(18,36,61,0.55), transparent)",
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
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            {p.type}
          </p>
          <h3
            style={{
              fontWeight: 700,
              color: "#12243d",
              fontSize: "clamp(13px,1.8vw,16.5px)",
              marginBottom: 6,
              lineHeight: 1.3,
            }}
          >
            {p.name}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 14,
            }}
          ></div>

          <div
            style={{
              display: "flex",
              gap: "0.875rem",
              flexWrap: "wrap",
              paddingTop: "0.875rem",
              borderTop: "1px solid #e2d9cc",
              marginBottom: "1rem",
            }}
          >
            {p.beds && (
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                < FaHome 
                  style={{ width: 14, height: 14, color: "#b8892e" }}
                />
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

/* ─── CSS ─────────────────────────────────── */
const css = `
  * { box-sizing: border-box; }
  .rent-root { overflow-x: hidden; }

  .listing-card { transition: box-shadow 0.3s, transform 0.3s; }
  .listing-card:hover { box-shadow: 0 16px 40px rgba(18,36,61,0.14); transform: translateY(-4px); }
  .filter-btn { transition: background 0.25s, color 0.25s, border-color 0.25s; font-family: inherit; }
  .benefit-card, .step-card { transition: box-shadow 0.3s, transform 0.3s; }
  .benefit-card:hover, .step-card:hover { box-shadow: 0 16px 40px rgba(18,36,61,0.1); transform: translateY(-4px); }

  /* ── GRIDS ── */
  .listings-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  .steps-grid    { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  .hero-grid     { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: end; }
  .cta-grid      { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2.5rem; align-items: center; min-width: 0; overflow: hidden; }

  /* ── FILTER ROWS (desktop: wrap) ── */
  .filter-row {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  /* ── TABLET ≤ 1024px ── */
  @media (max-width: 1024px) {
    .listings-grid { grid-template-columns: repeat(2, 1fr); }
    .benefits-grid { grid-template-columns: repeat(2, 1fr); }
    .steps-grid    { grid-template-columns: repeat(2, 1fr); }
    .cta-grid      { grid-template-columns: 1fr; }
  }

  /* ── MOBILE ≤ 700px ── */
  @media (max-width: 700px) {
    .hero-grid     { grid-template-columns: 1fr; gap: 2rem; }
    .listings-grid { grid-template-columns: 1fr; }
    .benefits-grid { grid-template-columns: 1fr; }
    .steps-grid    { grid-template-columns: 1fr; }
    .cta-grid      { grid-template-columns: 1fr; }

    /* Filter rows: horizontal scroll, bleed to section edges */
    .filter-row {
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: visible;
      padding-bottom: 6px;
      margin-left:  calc(-1 * clamp(1.25rem, 4vw, 2.5rem));
      margin-right: calc(-1 * clamp(1.25rem, 4vw, 2.5rem));
      padding-left:  clamp(1.25rem, 4vw, 2.5rem);
      padding-right: clamp(1.25rem, 4vw, 2.5rem);
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .filter-row::-webkit-scrollbar { display: none; }

    .cta-btn-col { flex-direction: column !important; }
    .cta-btn-col a { width: 90%; }
  }

  /* ── XS ≤ 400px ── */
  @media (max-width: 400px) {
    .benefits-grid { grid-template-columns: 1fr; }
    .steps-grid    { grid-template-columns: 1fr; }
  }
`;

/* ─── PAGE ────────────────────────────────── */
export default function Rent() {
  const [activeType, setActiveType] = useState("All Types");
  const filtered = LISTINGS.filter((p) => {
    const typeMatch = activeType === "All Types" || p.type === activeType;
    return typeMatch;
  });

  const SP = "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)";

  return (
    <>
      <style>{css}</style>
      <div
        className="rent-root"
        style={{
          background: "#f7f4ef",
          color: "#12243d",
          fontFamily: "'Cormorant',serif",
        }}
      >
        {/* ── HERO ── */}
        <section
          style={{
            backgroundImage: "url('/rent.png')",
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
              marginTop: "56px"
            }}
          >
            <div className="hero-grid">
              <Fade>
                <EyebrowLeft>Rent With Avyaya</EyebrowLeft>
                <h1
                  style={{
                    fontSize: "clamp(1.8rem,4.5vw,3.8rem)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                    marginBottom: "1.1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                   A Home to Rent,{" "}
                  <span style={{ color: "#b8892e" }}>Minus the Hassle</span>
                </h1>
                <p
                  style={{
                    color: "rgba(209, 215, 222, 0.7)",
                    fontSize: "clamp(0.85rem,1.8vw,1rem)",
                    lineHeight: 1.8,
                    maxWidth: 480,
                  }}
                >
                  Verified apartments, villas, and commercial spaces available
                  for rent — with transparent agreements and no fake listings.
                </p>
              </Fade>

              <Fade delay={150} from="right">
                <div
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    marginTop: "clamp(1.5rem,4vw,0rem)",
                  }}
                >
                  {[
                    { v: "6", l: "Rentals Live" },
                    
                    { v: "7 Days", l: "Avg. Move-In" },
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
                        style={{
                          color: "#12243d",
                          fontSize: 11,
                          marginTop: 6,
                        }}
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

        {/* ── FILTERS + LISTINGS ── */}
        <section
          style={{
            padding:
              "clamp(2.5rem,6vw,5rem) clamp(1.25rem,4vw,2.5rem) clamp(3rem,8vw,6rem)",
            background: "#f7f4ef",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Fade>
              <div style={{ marginBottom: "clamp(1.5rem,3vw,2rem)" }}>
                <EyebrowLeft>Browse Rentals</EyebrowLeft>
                <h2
                  style={{
                    fontSize: "clamp(1.3rem,2.6vw,2.1rem)",
                    fontWeight: 700,
                    color: "#12243d",
                  }}
                >
                  {filtered.length} Rentals Available
                </h2>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  marginBottom: "2rem",
                }}
              >
                <div className="filter-row">
                  {TYPE_FILTERS.map((f) => (
                    <button
                      key={f}
                      className="filter-btn"
                      onClick={() => setActiveType(f)}
                      style={{
                        border:
                          activeType === f
                            ? "1px solid #b8892e"
                            : "1px solid #e2d9cc",
                        background: activeType === f ? "#b8892e" : "#fff",
                        color:
                          activeType === f ? "#fff" : "rgba(18,36,61,0.65)",
                        fontWeight: 600,
                        fontSize: "clamp(11px,1.4vw,12px)",
                        padding: "0.45rem 0.9rem",
                        borderRadius: 10,
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

            <div className="listings-grid">
              {filtered.map((p, i) => (
                <RentalCard key={p.name} p={p} delay={(i % 6) * 70} />
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
                No rentals match these filters. Try a different budget, type, or
                furnishing.
              </p>
            )}
          </div>
        </section>

        {/* ── WHY RENT WITH US ── */}
        <section
          style={{
            padding: SP,
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
                  marginBottom: "clamp(2rem,5vw,3.5rem)",
                }}
              >
                <Eyebrow>Tenant Protection</Eyebrow>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem,3vw,2.4rem)",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  Why Rent With Avyaya
                </h2>
              </div>
            </Fade>
            <div className="benefits-grid">
              {BENEFITS.map((b, i) => (
                <Fade key={b.title} delay={i * 90}>
                  <div
                    className="benefit-card"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(184,137,46,0.2)",
                      borderRadius: 2,
                      padding:
                        "clamp(1.25rem,2.5vw,2rem) clamp(1rem,2vw,1.5rem)",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background: "rgba(184,137,46,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#b8892e",
                        marginBottom: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      <b.icon style={{ width: 22, height: 22 }} />
                    </div>
                    <h3
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        marginBottom: "0.6rem",
                        fontSize: "clamp(13px,1.5vw,15px)",
                      }}
                    >
                      {b.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: 13,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW RENTING WORKS ── */}
        <section style={{ padding: SP, background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Fade>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "clamp(2rem,5vw,3.5rem)",
                }}
              >
                <Eyebrow>The Process</Eyebrow>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem,3vw,2.4rem)",
                    fontWeight: 700,
                    color: "#12243d",
                  }}
                >
                  How Renting Works
                </h2>
                <p
                  style={{
                    color: "rgba(18,36,61,0.45)",
                    fontSize: 14,
                    marginTop: 10,
                  }}
                >
                  Four steps from browsing to picking up your keys.
                </p>
              </div>
            </Fade>
            <div className="steps-grid">
              {STEPS.map((s, i) => (
                <Fade key={s.title} delay={i * 90}>
                  <div
                    className="step-card"
                    style={{
                      background: "#faf8f4",
                      border: "1px solid #e2d9cc",
                      borderRadius: 2,
                      padding:
                        "clamp(1.25rem,2.5vw,2rem) clamp(1rem,2vw,1.5rem)",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background: "rgba(184,137,46,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#b8892e",
                        marginBottom: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      <s.icon style={{ width: 22, height: 22 }} />
                    </div>
                    <p
                      style={{
                        color: "#b8892e",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      {s.step}
                    </p>
                    <h3
                      style={{
                        color: "#12243d",
                        fontWeight: 700,
                        fontSize: "clamp(13px,1.4vw,15px)",
                        marginBottom: 6,
                        lineHeight: 1.35,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(18,36,61,0.6)",
                        fontSize: 13,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {s.text}
                    </p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── LANDLORD CTA ── */}
        <section style={{ padding: SP, background: "#f7f4ef" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              className="cta-grid"
              style={{
                background: "#12243d",
                borderRadius: 2,
                padding: "clamp(2rem,5vw,3.5rem) clamp(1.25rem,4vw,2rem)",
                minWidth: 0,
                overflow: "hidden",
              }}
            >
              <Fade from="left">
                <div style={{ minWidth: 0, overflow: "hidden" }}>
                  <EyebrowLeft>List Your Property</EyebrowLeft>
                  <h2
                    style={{
                      fontSize: "clamp(1.3rem,3vw,2.2rem)",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "1rem",
                      lineHeight: 1.25,
                      wordBreak: "break-word",
                    }}
                  >
                    Have a Property to Rent Out?
                  </h2>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "clamp(13px,1.5vw,14.5px)",
                      lineHeight: 1.8,
                      maxWidth: "100%",
                      margin: 0,
                      wordBreak: "break-word",
                    }}
                  >
                    List your apartment, villa, or commercial space with Avyaya
                    and reach verified, serious tenants — we handle the
                    screening and paperwork.
                  </p>
                </div>
              </Fade>

              <Fade from="right" delay={150}>
                <div
                  className="cta-btn-col"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    marginTop: "clamp(1.75rem,4vw,0rem)",
                  }}
                >
                  <a
                    href="/properties"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "#b8892e",
                      color: "#fff",
                      fontWeight: 700,
                      padding: "0.9rem 1.75rem",
                      borderRadius: 2,
                      textDecoration: "none",
                      fontSize: 14,
                      whiteSpace: "nowrap",
                    }}
                  >
                    List Your Property{" "}
                    <ArrowRight
                      style={{ width: 16, height: 16, flexShrink: 0 }}
                    />
                  </a>
                  <a
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      border: "2px solid rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.75)",
                      fontWeight: 600,
                      padding: "0.9rem 1.75rem",
                      borderRadius: 2,
                      textDecoration: "none",
                      fontSize: 14,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Talk to an Advisor{" "}
                    <ArrowUpRight
                      style={{ width: 15, height: 15, flexShrink: 0 }}
                    />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
