"use client";

import { useEffect, useRef, useState } from "react";
import { FaHome } from "react-icons/fa";

import {
  Search,
  MapPin,
  BedDouble,
  Maximize,
  ArrowRight,
  Wallet,
  ShieldCheck,
  FileCheck2,
  IndianRupee,
  Percent,
  Calculator,
} from "lucide-react";

const TYPE_FILTERS = [
  "All Types",
  "Apartments",
  "Villas",
  "Plots",
  "Commercial",
];

const LISTINGS = [
  {
    name: "Avyaya Garden Residences",
    type: "Apartments",
    beds: "2 BHK",
    status: "Ready to Move",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80",
  },
  {
    name: "Avyaya Meadows",
    type: "Villas",
    beds: "4 BHK",
    status: "Ready to Move",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  },
  {
    name: "Avyaya Green Acres",
    type: "Plots",
    beds: "2 BHK",
    status: "Selling Fast",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80",
  },
  {
    name: "Avyaya Horizon Towers",
    type: "Apartments",
    beds: "3 BHK",
    status: "Under Construction",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
  },
  {
    name: "Avyaya Business Square",
    type: "Commercial",
    beds: "1 BHK",
    status: "Ready to Move",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
  {
    name: "Avyaya Riverside Villas",
    type: "Villas",
    beds: "5 BHK",
    status: "New Launch",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
  },
];

const STEPS = [
  {
    icon: Search,
    step: "Step One",
    title: "Browse & Shortlist",
    text: "Filter by budget, location, and property type to build your shortlist.",
  },
  {
    icon: MapPin,
    step: "Step Two",
    title: "Schedule a Site Visit",
    text: "Your advisor arranges visits at a time that works for you, in person or virtual.",
  },
  {
    icon: Wallet,
    step: "Step Three",
    title: "Finalise & Negotiate",
    text: "We help you negotiate fairly and explain every cost before you commit.",
  },
  {
    icon: FileCheck2,
    step: "Step Four",
    title: "Documentation & Loan",
    text: "Legal verification, home loan assistance, and paperwork handled for you.",
  },
  {
    icon: ShieldCheck,
    step: "Step Five",
    title: "Registration & Handover",
    text: "Property registration and key handover, completed start to finish.",
  },
];

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "RERA-Verified Listings",
    desc: "Every project on this page is registered and legally verified before listing.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "No hidden charges — see the full cost breakup before you make an offer.",
  },
  {
    icon: FileCheck2,
    title: "End-to-End Paperwork",
    desc: "From token agreement to registration, our legal team manages the process.",
  },
  {
    icon: Percent,
    title: "Home Loan Assistance",
    desc: "Pre-approved tie-ups with leading banks to get you the best rate.",
  },
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

/* ── Fixed Eyebrow — nowrap, scales on 320px ── */
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
        background: colorMap[status] || "#b8892e",
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.03em",
        padding: "5px 12px",
        borderRadius: 2,
        zIndex: 2,
      }}
    >
      {status}
    </span>
  );
}

function ListingCard({ p, delay }) {
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
          transition: "box-shadow 0.3s, transform 0.3s",
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
          <StatusPill status={p.status} />
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
              gap: "0.875rem",
              flexWrap: "wrap",
              paddingTop: "0.875rem",
              borderTop: "1px solid #e2d9cc",
              marginBottom: "1rem",
            }}
          >
            {p.beds && (
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <FaHome
                  style={{ width: 14, height: 14, color: "#b8892e" }}
                />
                <span style={{ fontSize: 12, color: "rgba(18,36,61,0.6)" }}>
                  {p.beds}
                </span>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "auto",
            }}
          >
            <p
              style={{
                color: "#12243d",
                fontWeight: 800,
                fontSize: "clamp(13px,1.6vw,15.5px)",
              }}
            >
              {p.price}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default function Buy() {
  const [activeType, setActiveType] = useState("All Types");
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [tenure, setTenure] = useState(5);

  const rate = 7;
  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi =
    loanAmount > 0
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1),
        )
      : 0;

  const filtered = LISTINGS.filter((p) => {
    const typeMatch = activeType === "All Types" || p.type === activeType;
    return typeMatch;
  });

  return (
    <div
      style={{
        background: "#f7f4ef",
        color: "#12243d",
        fontFamily: "'Cormorant', serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }

        .listing-card:hover { box-shadow: 0 16px 40px rgba(18,36,61,0.14); transform: translateY(-4px); }
        .filter-btn { transition: background 0.25s, color 0.25s, border-color 0.25s; }
        .benefit-card:hover, .step-card:hover { box-shadow: 0 16px 40px rgba(18,36,61,0.1); transform: translateY(-4px); }
        .benefit-card, .step-card { transition: box-shadow 0.3s, transform 0.3s; }

        input[type="range"] { -webkit-appearance: none; width: 100%; height: 5px; border-radius: 3px; background: #e2d9cc; }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%;
          background: #b8892e; cursor: pointer; border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(18,36,61,0.3);
        }

        /* ── GRIDS ── */
        .buy-hero-grid   { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: end; }
        .listings-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .benefits-grid   { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .steps-grid      { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.25rem; }
        .calc-grid       { display: grid; grid-template-columns: 1fr 0.8fr; gap: 3rem; align-items: center; }

        .filter-header   {
          display: flex; align-items: flex-start;
          justify-content: space-between; flex-wrap: wrap; gap: 1.25rem; margin-bottom: 2rem;
        }
        .filter-groups   { display: flex; flex-direction: column; gap: 0.65rem; align-items: flex-end; }
        .filter-row      { display: flex; gap: 0.45rem; flex-wrap: wrap; justify-content: flex-end; }

        /* ── MOBILE ≤ 700px filter overrides ── */
        @media (max-width: 700px) {
          .filter-header  { flex-direction: column; align-items: stretch; gap: 1rem; }
          .filter-groups  { align-items: stretch; width: 100%; }
          .filter-row     {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: visible;
            padding-bottom: 6px;
            /* pull to section edges so pills don't clip */
            margin-left: calc(-1 * clamp(1.25rem,4vw,2.5rem));
            margin-right: calc(-1 * clamp(1.25rem,4vw,2.5rem));
            padding-left: clamp(1.25rem,4vw,2.5rem);
            padding-right: clamp(1.25rem,4vw,2.5rem);
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .filter-row::-webkit-scrollbar { display: none; }
        }
 
        /* ── TABLET ≤ 1024px ── */
        @media (max-width: 1024px) {
          .listings-grid  { grid-template-columns: repeat(2, 1fr); }
          .benefits-grid  { grid-template-columns: repeat(2, 1fr); }
          .steps-grid     { grid-template-columns: repeat(3, 1fr); }
          .calc-grid      { grid-template-columns: 1fr; }
        }

        /* ── MOBILE ≤ 700px ── */
        @media (max-width: 700px) {
          .buy-hero-grid  { grid-template-columns: 1fr; gap: 2rem; }
          .listings-grid  { grid-template-columns: 1fr; }
          .benefits-grid  { grid-template-columns: 1fr; }
          .steps-grid     { grid-template-columns: 1fr; }

          .hero-stats-row { justify-content: flex-start !important; }
          .cta-btn-row    { flex-direction: column; }
          .cta-btn-row a  { width: 100%; justify-content: center; }
        }

        /* ── XS ≤ 400px ── */
        @media (max-width: 400px) {
          .steps-grid { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          backgroundImage: "url('/buy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding:
            "clamp(5rem,8vw,7rem) clamp(1.25rem,4vw,2.5rem) clamp(3rem,6vw,5rem)",
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
            marginTop: "56px",
          }}
        >
          <div className="buy-hero-grid">
            <Fade>
              <EyebrowLeft>Buy With Confidence</EyebrowLeft>
              <h1
                style={{
                  fontSize: "clamp(1.8rem,4.5vw,3.8rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: "1.1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Find a Home That{" "}
                <span style={{ color: "#b8892e" }}>Feels Like Yours</span>
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.52)",
                  fontSize: "clamp(0.85rem,1.8vw,1rem)",
                  lineHeight: 1.8,
                  maxWidth: 480,
                }}
              >
                Browse RERA-verified apartments, villas, plots, and commercial
                spaces — with full legal support and home loan assistance built
                in.
              </p>
            </Fade>

            <Fade delay={150} from="right">
              <div
                className="hero-stats-row"
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  marginTop: 0,
                }}
              >
                {[
                  { v: "10", l: "Listings Live" },
                  { v: "7%", l: "Loan Rate From" },
                  { v: "0", l: "Hidden Charges" },
                ].map((s) => (
                  <div
                    key={s.l}
                    style={{
                      border: "1px solid rgba(184,137,46,0.3)",
                      background: "rgba(184,137,46,0.06)",
                      padding: "clamp(0.75rem,2vw,1rem) clamp(1rem,2vw,1.4rem)",
                      borderRadius: 2,
                      textAlign: "center",
                      minWidth: 90,
                      flex: "1 1 auto",
                    }}
                  >
                    <p
                      style={{
                        color: "#b8892e",
                        fontWeight: 800,
                        fontSize: "clamp(1.2rem,3vw,1.6rem)",
                        lineHeight: 1,
                      }}
                    >
                      {s.v}
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.5)",
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
            "clamp(3rem,7vw,5rem) clamp(1.25rem,4vw,2.5rem) clamp(3rem,8vw,6rem)",
          background: "#f7f4ef",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div className="filter-header">
              <div>
                <EyebrowLeft>Browse Properties</EyebrowLeft>
                <h2
                  style={{
                    fontSize: "clamp(1.3rem,2.6vw,2.1rem)",
                    fontWeight: 700,
                    color: "#12243d",
                  }}
                >
                  {filtered.length} Properties Available
                </h2>
              </div>
              <div className="filter-groups">
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
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Fade>

          <div className="listings-grid">
            {filtered.map((p, i) => (
              <ListingCard key={p.name} p={p} delay={(i % 6) * 70} />
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
              No properties match these filters. Try a different budget or type.
            </p>
          )}
        </div>
      </section>

      {/* ── WHY BUY WITH US ── */}
      <section
        style={{
          padding: "clamp(3rem,7vw,6rem) clamp(1.25rem,4vw,2.5rem)",
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
              <Eyebrow>Buyer Protection</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(1.4rem,3vw,2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Why Buy With Avyaya
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
                    padding: "clamp(1.25rem,2.5vw,2rem) clamp(1rem,2vw,1.5rem)",
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

      {/* ── EMI CALCULATOR ── */}
      <section
        style={{
          padding: "clamp(3rem,7vw,6rem) clamp(1.25rem,4vw,2.5rem)",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Fade>
            <div
              style={{
                textAlign: "center",
                marginBottom: "clamp(2rem,4vw,3rem)",
              }}
            >
              <Eyebrow>Plan Your Budget</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(1.4rem,3vw,2.4rem)",
                  fontWeight: 700,
                  color: "#12243d",
                }}
              >
                Home Loan EMI Calculator
              </h2>
            </div>
          </Fade>

          <Fade>
            <div
              className="calc-grid"
              style={{
                background: "#faf8f4",
                border: "1px solid #e2d9cc",
                borderRadius: 2,
                padding: "clamp(1.5rem,3vw,2.5rem)",
              }}
            >
              {/* Sliders */}
              <div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgba(18,36,61,0.6)",
                        fontWeight: 600,
                      }}
                    >
                      Loan Amount
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "#12243d",
                        fontWeight: 700,
                      }}
                    >
                      ₹{(loanAmount / 100000).toFixed(1)} Lakh
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="50000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                </div>
                <div style={{ marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgba(18,36,61,0.6)",
                        fontWeight: 600,
                      }}
                    >
                      Loan Tenure
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "#12243d",
                        fontWeight: 700,
                      }}
                    >
                      {tenure} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(18,36,61,0.45)",
                    lineHeight: 1.6,
                  }}
                >
                  Calculated at {rate}% p.a. indicative interest rate. Actual
                  rate may vary by lender.
                </p>
              </div>

              {/* Result */}
              <div
                style={{
                  background: "#12243d",
                  borderRadius: 2,
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                }}
              >
                <Calculator
                  style={{
                    width: 26,
                    height: 26,
                    color: "#b8892e",
                    margin: "0 auto 1rem",
                  }}
                />
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Estimated Monthly EMI
                </p>
                <p
                  style={{
                    color: "#b8892e",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem,3vw,2.2rem)",
                    lineHeight: 1,
                  }}
                >
                  ₹{emi.toLocaleString("en-IN")}
                </p>
                <a
                  href="tel: +91 7004397655"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#fff",
                    fontSize: 12.5,
                    fontWeight: 700,
                    marginTop: "1.5rem",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                    paddingBottom: 2,
                  }}
                >
                  Talk to a Loan Advisor
                  <ArrowRight style={{ width: 13, height: 13 }} />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── HOW BUYING WORKS + CTA ── */}
      <section
        style={{
          padding: "clamp(3rem,7vw,6rem) clamp(1.25rem,4vw,2.5rem)",
          background: "#f7f4ef",
        }}
      >
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
                How Buying Works
              </h2>
            </div>
          </Fade>

          <div
            className="steps-grid"
            style={{ marginBottom: "clamp(2rem,4vw,3.5rem)" }}
          >
            {STEPS.map((s, i) => (
              <Fade key={s.title} delay={i * 80}>
                <div
                  className="step-card"
                  style={{
                    background: "#fff",
                    border: "1px solid #e2d9cc",
                    borderRadius: 2,
                    padding:
                      "clamp(1.25rem,2vw,1.75rem) clamp(1rem,1.5vw,1.25rem)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      background: "rgba(184,137,46,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#b8892e",
                      marginBottom: "1rem",
                    }}
                  >
                    <s.icon style={{ width: 20, height: 20 }} />
                  </div>
                  <p
                    style={{
                      color: "#b8892e",
                      fontSize: 10.5,
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
                      fontSize: "clamp(13px,1.4vw,14px)",
                      marginBottom: 6,
                      lineHeight: 1.35,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(18,36,61,0.55)",
                      fontSize: 12.5,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {s.text}
                  </p>
                </div>
              </Fade>
            ))}
          </div>

          {/* CTA block */}
          <Fade>
            <div
              style={{
                background: "#12243d",
                borderRadius: 2,
                padding: "clamp(2rem,4vw,3rem) clamp(1.5rem,4vw,2.5rem)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem,2.5vw,1.5rem)",
                  marginBottom: 10,
                }}
              >
                Found Something You Like?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  maxWidth: 460,
                  margin: "0 auto 1.5rem",
                }}
              >
                Talk to an advisor today and schedule a site visit at your
                convenience.
              </p>
              <div
                className="cta-btn-row"
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#b8892e",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "0.9rem 2rem",
                    borderRadius: 2,
                    textDecoration: "none",
                    fontSize: 14,
                  }}
                >
                  Schedule a Visit
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </a>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    border: "2px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 600,
                    padding: "0.9rem 2rem",
                    borderRadius: 2,
                    textDecoration: "none",
                    fontSize: 14,
                  }}
                >
                  Talk to an Advisor
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
