"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "200+", label: "Acres Developed" },
  { value: "600+", label: "Happy Families" },
  { value: "100+", label: "Landmark Projects" },
  { value: "₹500Cr+", label: "Total Transactions" },
];

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Residential Development",
    items: ["Premium Villas", "Apartments & Housing", "Gated Communities", "Affordable Housing"],
    color: "#1a3a6b",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Commercial Development",
    items: ["Office Spaces", "Retail Complexes", "Shopping Centers", "Business Parks"],
    color: "#b07d2a",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Land Development",
    items: ["Residential Plotting", "Township Development", "Infrastructure Planning", "Land Acquisition"],
    color: "#2d6a4f",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Real Estate Consulting",
    items: ["Investment Advisory", "Project Planning", "Market Analysis", "Property Management"],
    color: "#6b3a1a",
  },
];

const VALUES = [
  { icon: "◆", title: "Integrity", desc: "Transparent dealings and ethical practices in every transaction — no exceptions." },
  { icon: "◈", title: "Quality", desc: "Construction and design that meets the highest standards, built to endure generations." },
  { icon: "◉", title: "Innovation", desc: "Modern technologies and creative solutions shaping future-ready developments." },
  { icon: "◎", title: "Customer First", desc: "Our customers are at the heart of every decision we make." },
  { icon: "◇", title: "Sustainability", desc: "Environmentally responsible practices woven into every project we deliver." },
];

const WHY_US = [
  "Trusted & Transparent Approach",
  "Timely Project Delivery",
  "Customer-Focused Service",
  "Innovative Designs",
  "Long-Term Value Creation",
  "Sustainable Development Practices",
];

const MILESTONES = [
  {
    year: "Founded",
    title: "The Vision",
    text: "avyaya developer established with a commitment to build spaces that endure — inspired by the Sanskrit for 'eternal'.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b8892e" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    year: "Growth",
    title: "Footprint",
    text: "Expanded across residential, commercial, and land segments, earning trust with quality over speed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b8892e" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25l5.25-5.25 4.5 4.5L21 8.25M21 8.25H15m6 0v6" />
      </svg>
    ),
  },
  {
    year: "Scale",
    title: "Landmark Projects",
    text: "Crossed 50+ landmark developments spanning villas, gated communities, business parks, and townships.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b8892e" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5.25 21V9.75A1.5 1.5 0 016.75 8.25h2.25A1.5 1.5 0 0110.5 9.75V21M13.5 21V5.25a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5V21M8.25 12h.008M8.25 15h.008M16.5 9h.008M16.5 12h.008M16.5 15h.008" />
      </svg>
    ),
  },
  {
    year: "Today",
    title: "Industry Leader",
    text: "₹3,200Cr+ in transactions, 5,000+ families housed, and a legacy of lasting communities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#b8892e" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9M12 18.75v-4.5m0 0a6.75 6.75 0 006.75-6.75V4.5h-1.5m-5.25 9.75a6.75 6.75 0 01-6.75-6.75V4.5h1.5m9 0H7.5m9 0V3H7.5v1.5m0 0H4.875A1.125 1.125 0 003.75 5.625v.75c0 2.07 1.68 3.75 3.75 3.75M16.125 4.5H19.125c.621 0 1.125.504 1.125 1.125v.75c0 2.07-1.68 3.75-3.75 3.75" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Fade({ children, className = "", delay = 0, from = "bottom", style = {} }) {
  const [ref, inView] = useInView();
  const transforms = { bottom: "translateY(36px)", left: "translateX(-36px)", right: "translateX(36px)" };
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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16, flexWrap: "nowrap", overflow: "hidden" }}>
      <div style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }} />
      <div style={{ width: 5, height: 5, background: "#b8892e", transform: "rotate(45deg)", flexShrink: 0 }} />
      <div style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }} />
      <span style={{ color: "#b8892e", fontSize: "clamp(9px,2.5vw,11px)", letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 1, minWidth: 0 }}>
        {children}
      </span>
      <div style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }} />
      <div style={{ width: 5, height: 5, background: "#b8892e", transform: "rotate(45deg)", flexShrink: 0 }} />
      <div style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }} />
    </div>
  );
}

function EyebrowLeft({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 28, height: 2, background: "#b8892e", flexShrink: 0 }} />
      <span style={{ color: "#b8892e", fontSize: 11, letterSpacing: "0.28em", fontWeight: 700, textTransform: "uppercase" }}>
        {children}
      </span>
    </div>
  );
}

const styles = `
  .avyaya-root * { box-sizing: border-box; }
  .avyaya-root { overflow-x: hidden; }

  /* ══════════════════════════════
     HERO
  ══════════════════════════════ */
  .hero-section {
    background: url('/about.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 92vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .hero-inner {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    padding: clamp(6rem, 7vw, 5rem) clamp(1.5rem, 4vw, 2.5rem);
    width: 100%;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-sanskrit-badge {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid rgba(184,137,46,0.35);
    padding: 0.75rem 1.1rem;
    border-radius: 2px;
    background: rgba(184,137,46,0.06);
    margin-bottom: 1.75rem;
    flex-wrap: wrap;
    max-width: 100%;
  }
  .hero-sanskrit-divider {
    width: 1px;
    height: 32px;
    background: rgba(184,137,46,0.3);
    flex-shrink: 0;
  }

  .hero-cta-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .hero-cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #b8892e;
    color: #fff;
    font-weight: 700;
    padding: 0.85rem 1.75rem;
    border-radius: 2px;
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }
  .hero-cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.75);
    font-weight: 600;
    padding: 0.85rem 1.75rem;
    border-radius: 2px;
    text-decoration: none;
    font-size: 14px;
    white-space: nowrap;
  }

  .hero-collage {
    position: relative;
    height: 460px;
    width: 100%;
  }
  .hero-collage-img1 {
    position: absolute;
    top: 0; right: 0;
    width: 78%; height: 68%;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 24px 60px rgba(0,0,0,0.4);
  }
  .hero-collage-img2 {
    position: absolute;
    bottom: 0; left: 0;
    width: 50%; height: 50%;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.4);
    border: 3px solid #12243d;
  }
  .hero-collage-badge {
    position: absolute;
    bottom: 60px; right: 8px;
    z-index: 10;
    background: #b8892e;
    color: #fff;
    padding: 1rem 1.25rem;
    border-radius: 2px;
    box-shadow: 0 8px 32px rgba(184,137,46,0.4);
    text-align: center;
  }
  .hero-badge-num {
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 1;
  }
  .hero-badge-label {
    font-size: 11px;
    opacity: 0.85;
    margin-top: 4px;
    line-height: 1.4;
  }

  /* ── STATS ── */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 1px;
    background: #e2d9cc;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(18,36,61,0.08);
  }

  /* ── STORY ── */
  .story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
  .story-collage {
    position: relative;
    height: 460px;
  }
  .story-collage-img1 {
    position: absolute; top: 0; left: 0;
    width: 66%; height: 70%;
    object-fit: cover; border-radius: 2px;
    box-shadow: 0 16px 48px rgba(18,36,61,0.14);
  }
  .story-collage-img2 {
    position: absolute; bottom: 0; right: 0;
    width: 54%; height: 54%;
    object-fit: cover; border-radius: 2px;
    box-shadow: 0 12px 36px rgba(18,36,61,0.12);
    border: 4px solid #fff;
  }
  .story-quote-box {
    position: absolute; top: 55%; left: 42%; z-index: 10;
    background: #12243d; padding: 1rem 1.2rem; border-radius: 2px;
    max-width: 170px; box-shadow: 0 8px 32px rgba(18,36,61,0.3);
  }

  /* ── MISSION ── */
  .mission-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
  }

  /* ── SERVICES ── */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  /* ── VALUES ── */
  .values-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 5rem;
    align-items: start;
  }
  .values-left-img {
    width: 100%;
    border-radius: 2px;
    box-shadow: 0 12px 40px rgba(18,36,61,0.1);
    display: block;
    margin-top: 1.5rem;
  }

  /* ── WHY US ── */
  .whyus-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
  .whyus-checks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.875rem;
    margin-top: 1.5rem;
  }
  .whyus-img-wrap {
    position: relative;
    padding-bottom: 32px;
  }
  .whyus-badge {
    position: absolute;
    bottom: 0;
    left: -24px;
    background: #12243d;
    padding: 1.25rem 1.75rem;
    border-radius: 2px;
    box-shadow: 0 8px 32px rgba(18,36,61,0.25);
  }

  /* ── MILESTONES ── */
  .milestones-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  .milestone-connector {
    position: absolute; top: 52px; left: 8%; right: 8%; height: 4px; z-index: 0;
  }

  /* ══════════════════════════════
     HERO — TABLET  ≤ 1024px
  ══════════════════════════════ */
  @media (max-width: 1024px) {
    .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .hero-collage { height: 380px; max-width: 560px; margin: 0 auto; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .story-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .story-collage { height: 340px; max-width: 540px; margin: 0 auto; width: 100%; }
    .story-quote-box { top: 52%; left: 38%; }
    .mission-grid { grid-template-columns: repeat(3, 1fr); }
    .services-grid { grid-template-columns: repeat(2, 1fr); }
    .values-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .values-left-img { max-height: 320px; object-fit: cover; }
    .whyus-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .whyus-img-wrap { max-width: 540px; margin: 0 auto; width: 100%; }
    .whyus-badge { left: -12px; }
    .milestones-grid { grid-template-columns: repeat(2, 1fr); }
    .milestone-connector { display: none; }
  }

  /* ══════════════════════════════
     HERO — SMALL TABLET  ≤ 768px
  ══════════════════════════════ */
  @media (max-width: 768px) {
    .hero-inner { padding: clamp(5.5rem, 8vw, 6rem) 1.5rem 3rem; }
    .hero-collage { height: 320px; max-width: 480px; }
    .hero-collage-badge { bottom: 40px; padding: 0.85rem 1.1rem; }
    .hero-badge-num { font-size: 1.5rem; }
  }

  /* ══════════════════════════════
     MOBILE  ≤ 640px
  ══════════════════════════════ */
  @media (max-width: 640px) {
    /* Hero */
    .hero-section { min-height: auto; }
  .hero-inner { padding: 5.5rem 1.25rem 3rem; }

    /* Stack: text first, image below — NO order:-1 */
    .hero-grid {
      display: flex;
    flex-direction: column;
    gap: 1.75rem;
    }

    /* Text block — full width, comes first naturally */
    .hero-text-col {
      width: 100%;
    order: 1;
    }

    /* Image block — comes second */
    .hero-collage-wrap {
      width: 100%;
      order: 2;
    }

    .hero-collage {
      height: 240px;
      max-width: 100%;
      width: 100%;
    }

    .hero-collage-img1 {
      width: 80%;
      height: 70%;
    }

    .hero-collage-img2 {
      width: 48%;
      height: 48%;
    }

    .hero-collage-badge {
      bottom: 10px;
      right: 6px;
      padding: 0.55rem 0.85rem;
    }
    .hero-badge-num { font-size: 1.3rem; }
    .hero-badge-label { font-size: 10px; }

    .hero-cta-row {
      flex-direction: column;
    }
    .hero-cta-primary,
    .hero-cta-secondary {
      width: 100%;
      justify-content: center;
      text-align: center;
    }

    .hero-sanskrit-badge {
      gap: 0.6rem;
      padding: 0.6rem 0.875rem;
    }
    .hero-sanskrit-divider { height: 24px; }

    /* Stats */
    .stats-grid { grid-template-columns: repeat(2, 1fr); }

    /* Story */
    .story-collage { height: 240px; }
    .story-quote-box { display: none; }

    /* Mission */
    .mission-grid { grid-template-columns: repeat(2, 1fr); }

    /* Services */
    .services-grid { grid-template-columns: 1fr; }

    /* Values */
    .values-left-img { max-height: 220px; }

    /* Why Us */
    .whyus-checks { grid-template-columns: 1fr; }
    .whyus-img-wrap { padding-bottom: 0; }
    .whyus-badge { position: static; margin-top: 1.25rem; display: inline-block; left: 0; }

    /* Milestones */
    .milestones-grid { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
  }

  /* ══════════════════════════════
     XS  ≤ 400px
  ══════════════════════════════ */
  @media (max-width: 400px) {
    .hero-inner { padding: 5rem 1rem 1.75rem; }
    .hero-collage { height: 200px; }
    .hero-collage-badge { bottom: 8px; right: 4px; padding: 0.45rem 0.7rem; }
    .hero-badge-num { font-size: 1.1rem; }
    .hero-badge-label { font-size: 9px; }
    .hero-sanskrit-badge { gap: 0.4rem; padding: 0.5rem 0.75rem; }
    .mission-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
  }

  /* ══════════════════════════════
     TINY  ≤ 320px
  ══════════════════════════════ */
  @media (max-width: 320px) {
    .hero-inner { padding: 5rem 0.875rem 1.5rem; }
    .hero-collage { height: 175px; }
    .hero-sanskrit-divider { display: none; }
    .hero-cta-primary,
    .hero-cta-secondary {
      padding: 0.75rem 1rem;
      font-size: 13px;
    }
  }
`;

export default function AvyayaDevelopersAbout() {
  return (
    <>
      <style>{styles}</style>
      <div
        className="avyaya-root"
        style={{ background: "#f7f4ef", color: "#12243d", fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        {/* ── HERO ── */}
        <section className="hero-section">
          <div className="hero-inner">
            <div className="hero-grid">

              {/* LEFT — Text (always first in DOM = always on top on mobile) */}
              <Fade className="hero-text-col">
                <EyebrowLeft>avyaya developer</EyebrowLeft>
                <h1
                  style={{
                    fontSize: "clamp(1.5rem,4vw,3.5rem)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.06,
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Building Dreams,
                  <br />
                  <span style={{ color: "#b8892e" }}>Creating Futures</span>
                </h1>
                <p
                  style={{
                    color: "rgba(255,255,255,0.52)",
                    fontSize: "clamp(0.82rem,2vw,1rem)",
                    lineHeight: 1.8,
                    maxWidth: 420,
                    marginBottom: "1.5rem",
                  }}
                >
                  Inspired by the Sanskrit word <em>Avyaya</em> — eternal, enduring, everlasting — we build spaces
                  that stand the test of time and create lasting value for communities.
                </p>

                <div className="hero-sanskrit-badge">
                  <span style={{ fontFamily: "serif", fontSize: "clamp(1.1rem,3vw,1.6rem)", color: "#b8892e", lineHeight: 1 }}>
                    अव्यय
                  </span>
                  <div className="hero-sanskrit-divider" />
                  <div>
                    <p style={{ color: "#b8892e", fontWeight: 700, fontSize: "clamp(10px,2vw,13px)", letterSpacing: "0.15em" }}>
                      AVYAYA
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(10px,1.8vw,12px)", marginTop: 2 }}>
                      Eternal · Enduring · Everlasting
                    </p>
                  </div>
                </div>

                <div className="hero-cta-row">
                  <a href="#story" className="hero-cta-primary">
                    Our Story
                    <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#services" className="hero-cta-secondary">Our Services</a>
                </div>
              </Fade>

            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ background: "#f7f4ef", padding: "2rem clamp(1rem,4vw,2rem) 2rem" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <Fade key={s.label} delay={i * 60} style={{ height: "100%" }}>
                  <div
                    style={{
                      background: "#fff",
                      padding: "clamp(1.1rem,3vw,2rem) clamp(0.75rem,2vw,1.5rem)",
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ fontSize: "clamp(1.15rem,4.5vw,2.4rem)", fontWeight: 800, color: "#12243d", wordBreak: "break-word", lineHeight: 1.1 }}>
                      {s.value}
                    </p>
                    <div style={{ width: 28, height: 2, background: "#b8892e", margin: "0.5rem auto" }} />
                    <p style={{ fontSize: "clamp(10px,2.5vw,13px)", color: "rgba(18,36,61,0.5)", fontWeight: 600, lineHeight: 1.4 }}>
                      {s.label}
                    </p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section id="story" style={{ padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)", background: "#f7f4ef" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="story-grid">
              <Fade from="left">
                <div className="story-collage">
                  <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=700&q=80" alt="Construction site" className="story-collage-img1" />
                  <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80" alt="Property" className="story-collage-img2" />
                  <div className="story-quote-box">
                    <p style={{ color: "#b8892e", fontSize: 12, fontWeight: 600, lineHeight: 1.6, fontStyle: "italic" }}>
                      "Real estate is more than buildings — it is about creating a legacy."
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade delay={150}>
                <EyebrowLeft>Our Story</EyebrowLeft>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.5rem)", fontWeight: 700, color: "#12243d", lineHeight: 1.25, marginBottom: "1.25rem" }}>
                  Built to Create Spaces That Outlast Generations
                </h2>
                <p style={{ color: "rgba(18,36,61,0.6)", lineHeight: 1.85, marginBottom: "1.1rem", fontSize: "clamp(14px,1.6vw,15px)" }}>
                  avyaya developer was founded with a singular conviction: that real estate development in India deserved
                  the same rigour, vision, and integrity that the world's finest developers bring to their work.
                </p>
                <p style={{ color: "rgba(18,36,61,0.6)", lineHeight: 1.85, marginBottom: "1.75rem", fontSize: "clamp(14px,1.6vw,15px)" }}>
                  Our mission is to transform land into thriving destinations through innovative design, superior
                  construction, and customer-centric service.
                </p>
                <div style={{ border: "1px solid #e2d9cc", borderLeft: "3px solid #b8892e", padding: "1.25rem 1.5rem", background: "#fff", borderRadius: "0 2px 2px 0" }}>
                  <p style={{ color: "#b8892e", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Our Vision</p>
                  <p style={{ color: "rgba(18,36,61,0.7)", fontSize: 14, lineHeight: 1.75 }}>
                    To become a trusted and leading real estate developer known for sustainable, innovative, and value-driven developments.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section style={{ padding: "clamp(3rem,8vw,5rem) clamp(1.25rem,4vw,2.5rem)", background: "#12243d", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
            <Fade>
              <div style={{ textAlign: "center", marginBottom: "clamp(2rem,5vw,3.5rem)" }}>
                <Eyebrow>Our Mission</Eyebrow>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", fontWeight: 700, color: "#fff" }}>Five Pillars of Purpose</h2>
              </div>
            </Fade>
            <div className="mission-grid">
              {[
                { n: "01", t: "Exceptional Quality", d: "Uncompromising standards in every project we deliver." },
                { n: "02", t: "Sustainable Communities", d: "Future-ready developments built with the planet in mind." },
                { n: "03", t: "Trust & Transparency", d: "Long-term relationships built on honesty, always." },
                { n: "04", t: "Stakeholder Value", d: "Maximising returns for customers, partners, and investors." },
                { n: "05", t: "Social Impact", d: "Contributing positively to economic and community growth." },
              ].map((p, i) => (
                <Fade key={p.n} delay={i * 80}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(184,137,46,0.2)",
                      borderRadius: 2,
                      padding: "clamp(1.25rem,2.5vw,1.75rem) clamp(1rem,2vw,1.25rem)",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <div style={{ color: "#b8892e", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, lineHeight: 1, marginBottom: "0.875rem", opacity: 0.7 }}>
                      {p.n}
                    </div>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(12px,1.4vw,14px)", marginBottom: "0.5rem", lineHeight: 1.35 }}>{p.t}</h3>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(11px,1.2vw,13px)", lineHeight: 1.7 }}>{p.d}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" style={{ padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Fade>
              <div style={{ textAlign: "center", marginBottom: "clamp(2rem,5vw,3.5rem)" }}>
                <Eyebrow>What We Build</Eyebrow>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", fontWeight: 700, color: "#12243d" }}>Our Services</h2>
              </div>
            </Fade>
            <div className="services-grid">
              {SERVICES.map((s, i) => (
                <Fade key={s.title} delay={i * 90}>
                  <div style={{ background: "#faf8f4", border: "1px solid #e2d9cc", borderRadius: 2, padding: "clamp(1.25rem,2.5vw,2rem) clamp(1rem,2vw,1.5rem)", height: "100%" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 2, background: `${s.color}12`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, marginBottom: "1.1rem" }}>
                      {s.icon}
                    </div>
                    <h3 style={{ fontWeight: 700, color: "#12243d", marginBottom: "0.875rem", fontSize: 15 }}>{s.title}</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {s.items.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <div style={{ width: 4, height: 4, background: "#b8892e", borderRadius: "50%", flexShrink: 0 }} />
                          <span style={{ color: "rgba(18,36,61,0.6)", fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)", background: "#f7f4ef" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="values-grid">
              <Fade from="left">
                <EyebrowLeft>What Drives Us</EyebrowLeft>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", fontWeight: 700, color: "#12243d", lineHeight: 1.25, marginBottom: "1.1rem" }}>
                  Core Values That Shape Every Decision
                </h2>
                <p style={{ color: "rgba(18,36,61,0.55)", fontSize: "clamp(14px,1.5vw,15px)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  Our values aren't aspirational posters on a wall. They are the operating principles behind how we
                  acquire land, design projects, manage construction, and serve our customers.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=500&q=80"
                  alt="Team meeting"
                  className="values-left-img"
                />
              </Fade>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {VALUES.map((v, i) => (
                  <Fade key={v.title} delay={i * 70} from="right">
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem", background: "#fff", border: "1px solid #e2d9cc", borderRadius: 2, padding: "clamp(1rem,2vw,1.4rem) clamp(1rem,2vw,1.5rem)" }}>
                      <span style={{ fontSize: "1.3rem", color: "#b8892e", lineHeight: 1, paddingTop: 2, flexShrink: 0 }}>{v.icon}</span>
                      <div>
                        <h3 style={{ fontWeight: 700, color: "#12243d", marginBottom: 5, fontSize: 15 }}>{v.title}</h3>
                        <p style={{ color: "rgba(18,36,61,0.55)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section style={{ padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="whyus-grid">
              <Fade>
                <div>
                  <Eyebrow>Why Avyaya</Eyebrow>
                  <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", fontWeight: 700, color: "#12243d", textAlign: "center" }}>
                    Why Choose avyaya developer
                  </h2>
                  <div className="whyus-checks">
                    {WHY_US.map((w) => (
                      <div key={w} style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#faf8f4", border: "1px solid #e2d9cc", padding: "0.875rem 1rem", borderRadius: 2 }}>
                        <svg style={{ width: 18, height: 18, color: "#b8892e", flexShrink: 0, marginTop: 1 }} fill="none" stroke="#b8892e" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span style={{ color: "rgba(18,36,61,0.75)", fontSize: 13, lineHeight: 1.5, fontWeight: 600 }}>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
              <Fade from="right" delay={150}>
                <div className="whyus-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
                    alt="Architecture"
                    style={{ width: "100%", borderRadius: 2, boxShadow: "0 16px 56px rgba(18,36,61,0.13)", display: "block" }}
                  />
                  <div className="whyus-badge">
                    <p style={{ color: "#b8892e", fontWeight: 800, fontSize: "clamp(1.2rem,2.5vw,1.6rem)", lineHeight: 1 }}>600+</p>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 4 }}>Happy Families Housed</p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── MILESTONES ── */}
        <section style={{ padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)", background: "#f7f4ef" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Fade>
              <div style={{ textAlign: "center", marginBottom: "clamp(2rem,5vw,4rem)" }}>
                <Eyebrow>Our Journey</Eyebrow>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", fontWeight: 700, color: "#12243d" }}>Milestones That Define Us</h2>
                <p style={{ color: "rgba(18,36,61,0.45)", fontSize: 14, marginTop: 12 }}>
                  A journey built on excellence, trust, and an unwavering commitment to lasting quality.
                </p>
              </div>
            </Fade>
            <div style={{ position: "relative" }}>
              <div className="milestone-connector">
                <svg width="100%" height="4">
                  <line x1="0" y1="2" x2="100%" y2="2" stroke="#b8892e" strokeWidth="1.5" strokeDasharray="10 7" strokeLinecap="round" />
                </svg>
              </div>
              <div className="milestones-grid">
                {MILESTONES.map((m, i) => (
                  <Fade key={m.year} delay={i * 100}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                      <div
                        style={{
                          position: "relative", zIndex: 1,
                          width: 104, height: 104, borderRadius: "50%",
                          background: "#fff", border: "2px solid #e2d9cc",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          marginBottom: "1.1rem",
                          boxShadow: "0 4px 20px rgba(18,36,61,0.08)", flexShrink: 0,
                        }}
                      >
                        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#f7f4ef", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {m.icon}
                        </div>
                      </div>
                      <div style={{ display: "inline-flex", padding: "4px 14px", borderRadius: 20, background: "#12243d", marginBottom: "0.65rem" }}>
                        <span style={{ color: "#b8892e", fontSize: 11, fontWeight: 800, letterSpacing: "0.2em" }}>{m.year.toUpperCase()}</span>
                      </div>
                      <h3 style={{ fontWeight: 700, color: "#12243d", fontSize: 15, marginBottom: "0.4rem" }}>{m.title}</h3>
                      <p style={{ color: "rgba(18,36,61,0.55)", fontSize: 13, lineHeight: 1.7, padding: "0 0.5rem" }}>{m.text}</p>
                      <div style={{ marginTop: 10, width: 28, height: 2, background: "rgba(184,137,46,0.4)" }} />
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMITMENT / CTA ── */}
        <section style={{ padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)", background: "#12243d", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <Fade>
              <Eyebrow>Our Commitment</Eyebrow>
              <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                Building Legacy,<br />
                <span style={{ color: "#b8892e" }}>One Community at a Time</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px,1.5vw,15px)", lineHeight: 1.85, maxWidth: 560, margin: "0 auto 2rem" }}>
                At avyaya developer, we believe real estate is more than buildings — it is about creating communities,
                nurturing dreams, and building a legacy that lasts for generations.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/properties" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#b8892e", color: "#fff", fontWeight: 700, padding: "1rem 2rem", borderRadius: 2, textDecoration: "none", fontSize: 14, letterSpacing: "0.05em" }}>
                  Explore Our Properties
                </a>
                <a href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, border: "2px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.75)", fontWeight: 600, padding: "1rem 2rem", borderRadius: 2, textDecoration: "none", fontSize: 14 }}>
                  Get in Touch
                </a>
              </div>
            </Fade>
          </div>
        </section>
      </div>
    </>
  );
}