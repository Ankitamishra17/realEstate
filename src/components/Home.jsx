"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  RiSearchLine,
  RiMapPinLine,
  RiHome4Line,
  RiArrowRightLine,
  RiArrowDownLine,
  RiStarFill,
  RiShieldCheckLine,
  RiTeamLine,
  RiAwardLine,
  RiBuilding2Line,
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookFill,
  RiYoutubeLine
} from "react-icons/ri";

const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

    html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
    body { background: #FAFAF8; color: #18181B; overflow-x: hidden; font-family: 'Outfit', sans-serif; margin:0; padding:0; }

    .cor { font-family: 'Cormorant', serif; }
    .out { font-family: 'Outfit', sans-serif; }
    .mono { font-family: 'DM Mono', monospace; }

    :root {
      --navy: #0F1F3D;
      --gold: #B08B4C;
      --gold2: #C9A96E;
      --cream: #FAFAF8;
      --stone: #F4F1EC;
      --border: #E8E3DA;
      --muted: #8A8A8A;
      --w: 1280px;
    }

    * { box-sizing: border-box; }
    img { max-width: 100%; }

    @keyframes mqroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    .mq { animation: mqroll 34s linear infinite; display:flex; }

    .rv { opacity:0; transform:translateY(24px); transition: opacity .65s ease, transform .65s cubic-bezier(.22,.68,0,1.2); }
    .rv.on { opacity:1; transform:translateY(0); }

    .lift { transition: transform .35s cubic-bezier(.22,.68,0,1.2), box-shadow .35s; }
    .lift:hover { transform:translateY(-6px); box-shadow:0 24px 56px rgba(15,31,61,.13); }

    @keyframes pdot { 0%,100%{opacity:1} 50%{opacity:.25} }
    .pdot { animation: pdot 2.2s infinite; }

    @keyframes flt { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    .flt { animation: flt 4.5s ease-in-out infinite; }

    .ptab { cursor:pointer; padding:8px 20px; border-radius:8px; font-size:13px; font-weight:600; border:none; font-family:'Outfit',sans-serif; transition:all .2s; }
    .ptab.on { background:var(--navy); color:#fff; }
    .ptab:not(.on) { background:transparent; color:#aaa; }

    .nl { position:relative; text-decoration:none; }
    .nl::after { content:''; position:absolute; left:0; bottom:-2px; width:0; height:1.5px; background:var(--gold); transition:width .22s; }
    .nl:hover::after { width:100%; }

    @keyframes btnShine { 0%{left:-100%} 100%{left:200%} }

    .gbtn {
      position:relative; overflow:hidden;
      background:var(--gold); color:#fff; border:none;
      font-family:'Outfit',sans-serif; font-weight:600;
      cursor:pointer; letter-spacing:.04em;
      transition: background .25s, transform .22s cubic-bezier(.22,.68,0,1.2), box-shadow .25s;
    }
    .gbtn::after {
      content:''; position:absolute;
      top:0; left:-100%; width:60%; height:100%;
      background:linear-gradient(120deg,transparent,rgba(255,255,255,.28),transparent);
      transition:none;
    }
    .gbtn:hover { background:var(--gold2); transform:translateY(-2px) scale(1.025); box-shadow:0 8px 28px rgba(176,139,76,.38); }
    .gbtn:hover::after { animation: btnShine .55s ease forwards; }
    .gbtn:active { transform:translateY(0) scale(.98); }

    .nbtn {
      position:relative; overflow:hidden;
      background:var(--navy); color:#fff; border:none;
      font-family:'Outfit',sans-serif; font-weight:600;
      cursor:pointer; letter-spacing:.04em;
      transition: background .25s, transform .22s cubic-bezier(.22,.68,0,1.2), box-shadow .25s;
    }
    .nbtn::after {
      content:''; position:absolute;
      top:0; left:-100%; width:60%; height:100%;
      background:linear-gradient(120deg,transparent,rgba(255,255,255,.15),transparent);
      transition:none;
    }
    .nbtn:hover { background:#1a3260; transform:translateY(-2px) scale(1.025); box-shadow:0 8px 28px rgba(15,31,61,.28); }
    .nbtn:hover::after { animation: btnShine .55s ease forwards; }
    .nbtn:active { transform:translateY(0) scale(.98); }

    .card-btn {
      position:relative; overflow:hidden;
      display:block; text-align:center;
      background:var(--navy); color:#fff;
      font-family:'Outfit',sans-serif; font-weight:600;
      font-size:13px; letter-spacing:.04em;
      text-decoration:none; border:none; cursor:pointer;
      padding:13px; border-radius:12px;
      transition: color .3s, box-shadow .3s, transform .22s cubic-bezier(.22,.68,0,1.2);
    }
    .card-btn::before {
      content:'';
      position:absolute; inset:0;
      background:var(--gold);
      transform:translateX(-101%);
      transition:transform .35s cubic-bezier(.22,.68,0,1.2);
      z-index:0;
    }
    .card-btn span { position:relative; z-index:1; display:inline-flex; align-items:center; gap:6px; }
    .card-btn .arr { display:inline-block; transition:transform .3s; }
    .card-btn:hover::before { transform:translateX(0); }
    .card-btn:hover { box-shadow:0 8px 24px rgba(176,139,76,.32); transform:translateY(-2px); }
    .card-btn:hover .arr { transform:translateX(4px); }
    .card-btn:active { transform:translateY(0); }

    @keyframes imgFade { from{opacity:0;transform:scale(1.04)} to{opacity:1;transform:scale(1)} }
    .cat-img-enter { animation: imgFade .5s cubic-bezier(.22,.68,0,1.2) forwards; }

    .noscroll::-webkit-scrollbar { display:none; }
    .noscroll { -ms-overflow-style:none; scrollbar-width:none; }

    /* ── Hero base (centered) ── */
    .hero-inner-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .hero-content {
      max-width: 640px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .hero-search-box { width: 100%; max-width: 480px; }
    .hero-cta-row { justify-content: center; }
    .hero-stats { justify-content: center; }

    /* ── Responsive ── */

    /* Large desktop down to small laptop */
    @media (max-width:1200px) {
      .props-row { grid-template-columns: repeat(2,1fr) !important; }
      .featured-grid { grid-template-columns: 1fr 1fr !important; }
      section { padding: 88px 32px !important; }
      .hero-inner { padding: 80px 32px 48px !important; }
    }

    /* Tablet landscape */
    @media (max-width:1024px) {
      .explore-grid { grid-template-columns: 1fr !important; gap:36px !important; }
      .explore-grid > div:nth-child(2) { order: -1; }
      .why-grid { grid-template-columns: 1fr !important; gap:40px !important; }
      .nl-grid { grid-template-columns: 1fr !important; }
      .cta-grid { grid-template-columns: 1fr !important; gap:32px !important; text-align:center; }
      .cta-grid > div:last-child { width: 100%; }
      .gallery-row { flex-wrap:wrap; height:auto !important; padding:0 32px !important; }
      .gallery-item { width:48% !important; height:200px; border-radius:14px !important; margin-bottom:8px; }
      .test-grid { grid-template-columns: 1fr 1fr !important; }
      .as-featured-row { gap: 22px !important; }
      .brand-card-imgs { gap: 6px !important; }
      .hero-rera { top: 80px !important; right: 24px !important; }
      .hero-float-card { right: 24px !important; bottom: 40px !important; min-width: 240px !important; max-width: calc(100vw - 48px) !important; }
      section { padding: 72px 28px !important; }
      .hero-inner { padding: 72px 28px 44px !important; }
      .cta-inner { padding: 56px 48px !important; }
    }

    /* Small tablet / large phone */
    @media (max-width:900px) {
      .featured-grid { grid-template-columns: 1fr !important; }
      .props-row { grid-template-columns: repeat(2,1fr) !important; }
    }

    /* Phones */
    @media (max-width:768px) {
      section { padding:60px 20px !important; }
      .props-row { grid-template-columns: 1fr !important; }
      .why-cards { grid-template-columns: 1fr 1fr !important; }
      .cta-inner { padding:40px 28px !important; }
      .gallery-item { width:100% !important; }
      .hero-stats { flex-wrap:wrap; gap:20px !important; }
      .hero-stat { border-right:none !important; padding-right:0 !important; margin-right:0 !important; }
      .test-grid { grid-template-columns: 1fr !important; }
      .stats-grid > div { padding: 20px 12px !important; }
      .search-row { flex-direction: column !important; }
      .search-row > button { width: 100% !important; justify-content: center !important; }
      .search-loc-row { width: 100% !important; }
      .as-featured-row { overflow-x: auto !important; flex-wrap: nowrap !important; padding-bottom: 8px !important; }
      .nl-input-row { flex-direction: column !important; border-radius: 12px !important; }
      .nl-input-row input { width: 100% !important; padding: 14px 16px !important; }
      .nl-input-row button { width: 100% !important; height: 48px !important; }
      .nl-card-padding { padding: 40px 28px !important; }
      .brand-card-padding { padding: 28px 28px 0 !important; }
      .brand-card-header { flex-direction: column !important; align-items: center !important; text-align: center; gap: 16px !important; }
      .cta-buttons-col { width: 100% !important; }
      .cta-buttons-col a { width: 100% !important; }
      .explore-list-row { justify-content: center !important; text-align: center; gap: 10px; }
      .hero-rera { display: none !important; }
      .hero-float-card { display: none !important; }
      .hero-scroll-hint { display: none !important; }
      .hero-inner { padding: 32px 20px 40px !important; }
      .hero-content { max-width: 100% !important; }
      h1.cor { font-size: clamp(36px,10vw,56px) !important; }
      .stats-grid .cor { font-size: clamp(34px,9vw,50px) !important; }
      .explore-grid button.nbtn,
      .explore-grid button.gbtn { width: 100% !important; justify-content: center !important; }
      .as-featured-row span.mono { white-space: nowrap; }
      .gallery-row { padding: 0 20px !important; }
      h2.cor { font-size: clamp(28px,7vw,40px) !important; }
    }

    /* Small phones */
    @media (max-width:480px) {
      .why-cards { grid-template-columns: 1fr !important; }
      .hero-stats { gap: 16px !important; }
      .hero-stat { margin-right: 0 !important; padding-right: 0 !important; }
      h1.cor { font-size: clamp(34px,9vw,52px) !important; }
      .brand-card-imgs { grid-template-columns: 1fr 1fr 1fr !important; }
      .gallery-item { height: 170px !important; }
      .hero-content p.out { font-size: 14px !important; }
      .cta-buttons-col { gap: 10px !important; }
      section { padding: 48px 16px !important; }
      .hero-inner { padding: 28px 16px 36px !important; }
      .gallery-row { padding: 0 16px !important; gap: 4px !important; }
      .nl-card-padding { padding: 32px 20px !important; }
      .brand-card-padding { padding: 24px 20px 0 !important; }
      .cta-inner { padding: 32px 20px !important; }
      .hero-search-box { padding: 12px !important; }
      .explore-list-row span.ca { font-size: 14px !important; }
      .props-row, .test-grid { gap: 14px !important; }
    }

    /* Stats grid: single column up to 425px, 3-in-a-row above that */
    @media (max-width:425px) {
      .stats-grid { grid-template-columns: 1fr !important; }
      .stats-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); padding: 24px 12px !important; }
      .stats-grid > div:last-child { border-bottom: none; }
    }

    /* Very small phones */
    @media (max-width:380px) {
      h1.cor { font-size: clamp(30px,9vw,44px) !important; }
      .hero-stat p.cor { font-size: 22px !important; }
      section { padding: 40px 14px !important; }
      .gallery-row { padding: 0 14px !important; }
    }
  `}</style>
);

function useRv() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("on");
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function Rv({ children, delay = 0, className = "", style = {} }) {
  const ref = useRv();
  return (
    <div
      ref={ref}
      className={`rv ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

function CountUp({ end, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          let s = 0;
          const step = Math.ceil(end / 72);
          const t = setInterval(() => {
            s += step;
            if (s >= end) {
              setN(end);
              clearInterval(t);
            } else setN(s);
          }, 18);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const PROPS = [
  {
    id: 1,
    name: "Royal Heights",
    cfg: "3 BHK",
    status: "Ready to Move",
    badge: "Featured",
    badgeColor: "#0F1F3D",
    img: "https://images.pexels.com/photos/4143567/pexels-photo-4143567.jpeg",
  },
  {
    id: 2,
    name: "Green Valley",
    cfg: "4 BHK Villa",
    status: "New Launch",
    badge: "New",
    badgeColor: "#166534",
    img: "https://images.pexels.com/photos/16240077/pexels-photo-16240077.jpeg",
  },
  {
    id: 3,
    name: "Business Park",
    cfg: "Open Floor",
    status: "Under Construction",
    badge: "Hot",
    badgeColor: "#9B1C1C",
    img: "https://images.pexels.com/photos/20812782/pexels-photo-20812782.jpeg",
  },
  {
    id: 4,
    name: "Emerald Greens",
    cfg: "2 BHK",
    status: "Ready to Move",
    badge: "Popular",
    badgeColor: "#7C3AED",
    img: "https://images.pexels.com/photos/34243927/pexels-photo-34243927.jpeg",
  },
];

const CATS = [
  {
    label: "Premium Villas",
    img: "https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg",
    gallery: [
      "https://images.pexels.com/photos/7546648/pexels-photo-7546648.jpeg",
    ],
  },
  {
    label: "Luxury Apartments",
    img: "https://images.pexels.com/photos/20159477/pexels-photo-20159477.jpeg",
    gallery: [
      "https://images.pexels.com/photos/14600169/pexels-photo-14600169.jpeg",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop",
    ],
  },
  {
    label: "Commercial Spaces",
    img: "https://images.pexels.com/photos/16140813/pexels-photo-16140813.jpeg",
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&auto=format&fit=crop",
    ],
  },
  {
    label: "Plots & Land",
    img: "https://images.pexels.com/photos/35101084/pexels-photo-35101084.jpeg",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop",
    ],
  },
  {
    label: "Affordable Homes",
    img: "https://images.pexels.com/photos/4469136/pexels-photo-4469136.jpeg",
    gallery: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop",
    ],
  },
];

const TESTS = [
  {
    name: "Rajesh Kumar",
    role: "Home Owner · Sector 62",
    stars: 5,
    text: "Avyaya delivered our dream home on time. Transparency and construction quality is simply unmatched.",
    av: "https://i.pinimg.com/1200x/b1/05/ee/b105ee681b2c01e1ceb964421d9566e2.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Investor · Noida",
    stars: 5,
    text: "Invested in two projects — the ROI and build quality is unmatched. The team's after-sales support is exceptional.",
    av: "https://i.pinimg.com/736x/5a/f3/69/5af3693d2998fe333469f9c5422a11df.jpg",
  },
  {
    name: "Amit Verma",
    role: "Home Owner · NH-24",
    stars: 5,
    text: "From site visit to possession, every step was smooth. Green Valley villa exceeded every expectation we had.",
    av: "https://i.pinimg.com/736x/95/27/98/9527986992f218aa26fee549651dd001.jpg",
  },
];

const WHY = [
  {
    icon: <RiShieldCheckLine />,
    title: "RERA Certified",
    desc: "100% compliant across all active projects",
  },
  {
    icon: <RiAwardLine />,
    title: "Award Winning",
    desc: "Top-rated developer 4 years running",
  },
  {
    icon: <RiTeamLine />,
    title: "Dedicated Manager",
    desc: "One contact from selection to possession",
  },
  {
    icon: <RiBuilding2Line />,
    title: "Grade-A Build",
    desc: "Rigorous quality checks at every stage",
  },
];

export default function Home() {
  const [tab, setTab] = useState("Buy");
  const [scrollY, setScrollY] = useState(0);
  const [activeCat, setActiveCat] = useState(0);
  const [catImgKey, setCatImgKey] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleCatClick = (i) => {
    setActiveCat(i);
    setCatImgKey((k) => k + 1);
  };

  const mw = { maxWidth: "var(--w)", margin: "0 auto" };

  return (
    <>
      <Fonts />
      <main style={{ overflowX: "hidden" }}>
        {/* ══ HERO ════════════════════════════════════════════ */}
        <section
          style={{
            minHeight: "100vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* BG */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom,rgba(15,31,61,.78) 0%,rgba(15,31,61,.72) 50%,rgba(15,31,61,.82) 100%)",
            }}
          />

          {/* Content */}
          <div
            className="hero-inner"
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              padding: "90px 48px 56px",
              boxSizing: "border-box",
            }}
          >
            <div className="hero-inner-wrap">
              <div className="hero-content">
                {/* Pill badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 9,
                    border: "1px solid rgba(176,139,76,.35)",
                    borderRadius: 999,
                    padding: "7px 16px",
                    marginBottom: 22,
                    background: "rgba(176,139,76,.06)",
                  }}
                >
                  <span
                    className="pdot"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      display: "inline-block",
                    }}
                  />
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "var(--gold2)",
                    }}
                  >
                    Premium Real Estate
                  </span>
                </div>

                <h1
                  className="cor"
                  style={{
                    fontSize: "clamp(40px,6vw,86px)",
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 0.97,
                    marginBottom: 20,
                    letterSpacing: "-.01em",
                  }}
                >
                  Find Your{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--gold2)",
                      fontWeight: 600,
                    }}
                  >
                    Perfect
                  </em>
                  <br />
                  Address.
                </h1>

                <p
                  className="out"
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    color: "rgba(255, 255, 255, 0.76)",
                    lineHeight: 1.75,
                    maxWidth: 420,
                    marginBottom: 26,
                  }}
                >
                  Landmark residences and commercial spaces, crafted for the
                  life you deserve.
                </p>

                {/* Search box */}
                <div
                  className="hero-search-box"
                  style={{
                    background: "rgba(255,255,255,.07)",
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: 18,
                    padding: 16,
                    backdropFilter: "blur(12px)",
                    marginBottom: 22,
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 3,
                      marginBottom: 12,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {["Buy", "Rent", "Commercial"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`ptab ${tab === t ? "on" : ""}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <div
                    className="search-row"
                    style={{ display: "flex", gap: 8 }}
                  >
                    <div
                      className="search-loc-row"
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 9,
                        background: "rgba(255,255,255,.07)",
                        borderRadius: 10,
                        padding: "12px 14px",
                        border: "1px solid rgba(255,255,255,.08)",
                        minWidth: 0,
                      }}
                    >
                      <RiMapPinLine
                        style={{
                          color: "var(--gold)",
                          fontSize: 16,
                          flexShrink: 0,
                        }}
                      />
                      <input
                        placeholder="Location or project…"
                        className="out"
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                          color: "#fff",
                          fontSize: 13,
                          width: "100%",
                          minWidth: 0,
                        }}
                      />
                    </div>
                    <button
                      className="gbtn"
                      style={{
                        padding: "0 20px",
                        borderRadius: 10,
                        fontSize: 13,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        flexShrink: 0,
                        minHeight: 44,
                      }}
                    >
                      <RiSearchLine /> Search
                    </button>
                  </div>
                </div>

                {/* CTA row */}
                <div
                  className="hero-cta-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href="/properties"
                    className="gbtn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "13px 28px",
                      borderRadius: 12,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    Browse Properties <RiArrowRightLine />
                  </Link>
                </div>

                {/* Stats row */}
                <div
                  className="hero-stats"
                  style={{
                    display: "flex",
                    gap: 0,
                    marginTop: 32,
                    paddingTop: 20,
                    borderTop: "1px solid rgba(255,255,255,.08)",
                    width: "100%",
                  }}
                >
                  {[
                    ["200+", "Projects"],
                    ["600+", "Families"],
                    ["5 Yrs", "Trust"],
                  ].map(([v, l], i) => (
                    <div
                      key={l}
                      className="hero-stat"
                      style={{
                        paddingRight: 36,
                        marginRight: 36,
                        textAlign: "center",
                        borderRight:
                          i < 2 ? "1px solid rgba(255,255,255,.08)" : "none",
                      }}
                    >
                      <p
                        className="cor"
                        style={{
                          fontSize: 28,
                          fontWeight: 700,
                          color: "#fff",
                          lineHeight: 1,
                        }}
                      >
                        {v}
                      </p>
                      <p
                        className="out"
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,.35)",
                          marginTop: 5,
                          fontWeight: 300,
                        }}
                      >
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating card — hidden on mobile via CSS class */}
          <div
            className="flt hero-float-card"
            style={{
              position: "absolute",
              bottom: 40,
              right: 48,
              zIndex: 3,
              background: "rgba(255,255,255,.96)",
              backdropFilter: "blur(20px)",
              borderRadius: 22,
              padding: "20px 24px",
              minWidth: 286,
              boxShadow: "0 28px 70px rgba(15,31,61,.28)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=120&auto=format"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  className="out"
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--navy)",
                  }}
                >
                  Avyaya Royal Heights
                </p>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  background: "#DCFCE7",
                  color: "#166534",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: 999,
                  fontFamily: "'Outfit',sans-serif",
                  flexShrink: 0,
                }}
              >
                Ready
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
                paddingTop: 14,
                borderTop: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <div>
                <p className="out" style={{ fontSize: 10, color: "#bbb" }}>
                  Price
                </p>
                <p
                  className="out"
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--navy)",
                    marginTop: 2,
                  }}
                >
                  ₹85 Lac
                </p>
              </div>
              <div style={{ background: "var(--border)" }} />
              <div>
                <p className="out" style={{ fontSize: 10, color: "#bbb" }}>
                  Config
                </p>
                <p
                  className="out"
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: "var(--navy)",
                    marginTop: 2,
                  }}
                >
                  3 BHK
                </p>
              </div>
              <div style={{ background: "var(--border)" }} />
              <div>
                <p className="out" style={{ fontSize: 10, color: "#bbb" }}>
                  Area
                </p>
                <p
                  className="out"
                  style={{
                    fontWeight: 600,
                    fontSize: 13,
                    color: "var(--navy)",
                    marginTop: 2,
                  }}
                >
                  1,450 sq.ft
                </p>
              </div>
            </div>
          </div>

          {/* Scroll hint — hidden on mobile */}
          <div
            className="hero-scroll-hint"
            style={{
              position: "absolute",
              bottom: 20,
              left: 48,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              color: "rgba(255,255,255,.22)",
            }}
          >
            <span
              className="mono"
              style={{ fontSize: 9, letterSpacing: ".2em" }}
            >
              SCROLL
            </span>
            <RiArrowDownLine style={{ fontSize: 15 }} />
          </div>
        </section>

        {/* ══ MARQUEE ════════════════════════════════════════ */}
        <div
          style={{
            background: "var(--gold)",
            padding: "12px 0",
            overflow: "hidden",
          }}
        >
          <div className="mq" style={{ whiteSpace: "nowrap" }}>
            {[0, 1].map((i) => (
              <span key={i} style={{ display: "inline-flex" }}>
                {[
                  "Luxury Apartments",
                  "Premium Villas",
                  "Commercial Spaces",
                  "Plots & Land",
                  "Penthouses",
                  "Gated Communities",
                  "RERA Certified",
                  "Affordable Homes",
                ].map((t, j) => (
                  <span
                    key={j}
                    className="mono"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 14,
                      color: "rgba(255,255,255,.65)",
                      fontSize: 10,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      padding: "0 32px",
                    }}
                  >
                    <span
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,.5)",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    {t}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ══ STATS ══════════════════════════════════════════ */}
        <section style={{ background: "#fff", padding: "56px 48px 40px" }}>
          <div
            style={{
              ...mw,
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
            }}
            className="stats-grid"
          >
            {[
              {
                end: 200,
                suf: "+",
                label: "Projects Delivered",
                icon: <RiHome4Line />,
              },
              {
                end: 600,
                suf: "+",
                label: "Happy Families",
                icon: <RiTeamLine />,
              },
              {
                end: 5,
                suf: "+",
                label: "Years of Trust",
                icon: <RiAwardLine />,
              },
            ].map((s, i) => (
              <Rv key={i} delay={i * 80}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "28px 20px",
                    borderRight: i < 3 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: "#FDF6EC",
                      color: "var(--gold)",
                      fontSize: 21,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    {s.icon}
                  </div>
                  <div
                    className="cor"
                    style={{
                      fontSize: "clamp(34px,6vw,50px)",
                      fontWeight: 700,
                      color: "var(--navy)",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    <CountUp end={s.end} suffix={s.suf} />
                  </div>
                  <p
                    className="out"
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      fontWeight: 300,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              </Rv>
            ))}
          </div>
        </section>

        {/* ══ FEATURED PROPERTIES ════════════════════════════ */}
        <section
          style={{
            padding: "56px 48px 100px",
            background: "var(--stone)",
            overflowX: "hidden",
          }}
        >
          <div style={{ ...mw, width: "100%" }}>
            <Rv>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: 52,
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    Premium Listings
                  </span>
                  <h2
                    className="cor"
                    style={{
                      fontSize: "clamp(36px,4vw,58px)",
                      fontWeight: 700,
                      color: "var(--navy)",
                      lineHeight: 1.0,
                    }}
                  >
                    Featured{" "}
                    <em
                      style={{
                        fontStyle: "italic",
                        color: "var(--gold)",
                        fontWeight: 400,
                      }}
                    >
                      Properties
                    </em>
                  </h2>
                </div>
                <Link
                  href="/properties"
                  className="out"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    border: "1.5px solid var(--navy)",
                    color: "var(--navy)",
                    padding: "10px 20px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: ".03em",
                    transition: "all .2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "var(--navy)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--navy)";
                  }}
                >
                  All Listings <RiArrowRightLine />
                </Link>
              </div>
            </Rv>

            <div
              className="props-row"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 16,
                width: "100%",
              }}
            >
              {PROPS.map((p, i) => (
                <Rv key={p.id} delay={i * 70} style={{ height: "100%" }}>
                  <div
                    className="lift"
                    style={{
                      background: "#fff",
                      borderRadius: 20,
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: 200,
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
                          transition:
                            "transform .6s cubic-bezier(.22,.68,0,1.2)",
                          display: "block",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.08)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top,rgba(15,31,61,.62) 0%,transparent 55%)",
                        }}
                      />
                      <span
                        className="out"
                        style={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          background: p.badgeColor,
                          color: "#fff",
                          fontSize: 9,
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: 999,
                          letterSpacing: ".07em",
                        }}
                      >
                        {p.badge}
                      </span>
                      <span
                        className="cor"
                        style={{
                          position: "absolute",
                          bottom: 12,
                          left: 14,
                          color: "#fff",
                          fontSize: 22,
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {p.price}
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "16px 18px 18px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 8,
                          flexWrap: "wrap",
                          gap: 6,
                        }}
                      >
                        <span
                          className="mono"
                          style={{
                            fontSize: 8.5,
                            letterSpacing: ".16em",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                          }}
                        >
                          Avyaya {p.name}
                        </span>
                        <span
                          className="out"
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            padding: "3px 9px",
                            borderRadius: 999,
                            background:
                              p.status === "Ready to Move"
                                ? "#DCFCE7"
                                : p.status === "New Launch"
                                  ? "#DBEAFE"
                                  : "#FEF3C7",
                            color:
                              p.status === "Ready to Move"
                                ? "#166534"
                                : p.status === "New Launch"
                                  ? "#1e40af"
                                  : "#92400e",
                          }}
                        >
                          {p.status}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          color: "#aaa",
                          fontSize: 12,
                          marginBottom: 14,
                        }}
                        className="out"
                      >
                        <RiMapPinLine
                          style={{
                            color: "var(--gold)",
                            flexShrink: 0,
                            fontSize: 13,
                          }}
                        />
                        {p.loc}
                      </div>
                      <div
                        style={{
                          background: "var(--stone)",
                          borderRadius: 10,
                          padding: "9px 4px",
                          marginBottom: 14,
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <p
                            className="out"
                            style={{
                              fontSize: 9,
                              color: "#bbb",
                              marginBottom: 2,
                            }}
                          >
                            Config
                          </p>
                          <p
                            className="out"
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "var(--navy)",
                            }}
                          >
                            {p.cfg}
                          </p>
                        </div>
                        <div style={{ background: "var(--border)" }} />
                        <div>
                          <p
                            className="out"
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "var(--navy)",
                            }}
                          >
                            {p.area}
                          </p>
                        </div>
                      </div>
                      <Link
                        href="/properties"
                        className="card-btn"
                        style={{ marginTop: "auto" }}
                      >
                        <span>
                          View Details <span className="arr">→</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Rv>
              ))}
            </div>
          </div>
        </section>

        {/* ══ EXPLORE CATEGORIES ═════════════════════════════ */}
        <section
          style={{
            padding: "100px 48px",
            background: "#fff",
            overflowX: "hidden",
          }}
        >
          <div style={mw}>
            <Rv>
              <div
                className="as-featured-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 36,
                  paddingBottom: 28,
                  borderBottom: "1px solid var(--border)",
                  marginBottom: 64,
                  flexWrap: "wrap",
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#ccc",
                    flexShrink: 0,
                  }}
                >
                  As Featured On
                </span>
                {[
                  "Smart Homes",
                  "Creative Build",
                  "Realty Times",
                  "The Economic Times",
                  "PropertyGuru",
                  "MagicBricks",
                ].map((b, i) => (
                  <span
                    key={i}
                    className="out"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#D4CFCA",
                      letterSpacing: ".04em",
                      flexShrink: 0,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Rv>

            <div
              className="explore-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.15fr 1fr",
                gap: 56,
                alignItems: "center",
              }}
            >
              <Rv>
                <span
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: 16,
                  }}
                >
                  Explore by Type
                </span>
                <h2
                  className="cor"
                  style={{
                    fontSize: "clamp(32px,3.5vw,50px)",
                    fontWeight: 700,
                    color: "var(--navy)",
                    lineHeight: 1.08,
                    marginBottom: 20,
                  }}
                >
                  Every
                  <br />
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--gold)",
                      fontWeight: 400,
                    }}
                  >
                    Property Type
                  </em>
                  <br />
                  Covered.
                </h2>
                <p
                  className="out"
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    fontWeight: 300,
                    marginBottom: 36,
                  }}
                >
                  From luxury apartments to commercial plots, our listings span
                  every segment across — curated for every need and budget.
                </p>
                <a
                href="/properties">
                <button
                  className="nbtn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 26px",
                    borderRadius: 11,
                    fontSize: 13,
                  }}
                >
                  Explore Collections <RiArrowRightLine />
                </button>
                </a>
              </Rv>

              <Rv delay={100}>
                <div
                  style={{
                    borderRadius: 22,
                    overflow: "hidden",
                    position: "relative",
                    aspectRatio: "4/3.2",
                  }}
                >
                  <img
                    key={catImgKey}
                    src={CATS[activeCat].img}
                    alt={CATS[activeCat].label}
                    className="cat-img-enter"
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
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(15,31,61,.45) 0%,transparent 55%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      background: "rgba(255,255,255,.93)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 12,
                      padding: "10px 16px",
                    }}
                  >
                    <p
                      className="out"
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--navy)",
                      }}
                    >
                      {CATS[activeCat].label}
                    </p>
                    <p
                      className="out"
                      style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}
                    >
                      Avyaya Collections
                    </p>
                  </div>
                </div>
              </Rv>

              <Rv delay={180}>
                <div>
                  {CATS.map((cat, i) => (
                    <div
                      key={i}
                      className="explore-list-row"
                      onClick={() => handleCatClick(i)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "17px 0",
                        borderBottom: "1px solid var(--border)",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.querySelector(".ca").style.color =
                          "var(--gold)";
                        e.currentTarget.querySelector(".arr2").style.opacity =
                          "1";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.querySelector(".ca").style.color =
                          i === activeCat ? "var(--navy)" : "var(--muted)";
                        e.currentTarget.querySelector(".arr2").style.opacity =
                          i === activeCat ? "1" : "0.2";
                      }}
                    >
                      <span
                        className="ca out"
                        style={{
                          fontSize: 15,
                          fontWeight: i === activeCat ? 700 : 400,
                          color:
                            i === activeCat ? "var(--navy)" : "var(--muted)",
                          transition: "color .18s",
                          lineHeight: 1,
                        }}
                      >
                        {cat.label}
                      </span>
                      <span
                        className="arr2"
                        style={{
                          color: "var(--gold)",
                          fontSize: 17,
                          opacity: i === activeCat ? 1 : 0.2,
                          transition: "opacity .18s",
                        }}
                      >
                        →
                      </span>
                    </div>
                  ))}
                </div>
              </Rv>
            </div>
          </div>
        </section>

        {/* ══ PHOTO GALLERY ══════════════════════════════════ */}
        <section
          className="gallery-section"
          style={{
            padding: "100px 0 0",
            background: "var(--stone)",
            overflow: "hidden",
          }}
        >
          <style>{`
    .gallery-header-wrap {
      padding: 0 48px;
      margin-bottom: 44px;
    }
    .gallery-cats {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .gallery-row {
      display: flex;
      gap: 10px;
      height: 360px;
      padding-left: 180px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
    .gallery-item {
      flex-shrink: 0;
      border-radius: 18px 18px 0 0;
      overflow: hidden;
      position: relative;
      cursor: pointer;
    }

    @media (max-width: 1024px) {
      .gallery-section { padding-top: 72px; }
      .gallery-header-wrap { padding: 0 32px; margin-bottom: 32px; }
      .gallery-row { padding-left: 32px; padding-right: 32px; height: 300px; }
    }

    @media (max-width: 768px) {
      .gallery-section { padding-top: 56px; }
      .gallery-header-wrap { padding: 0 20px; margin-bottom: 24px; }
      .gallery-header-flex {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 20px !important;
      }
      .gallery-cats {
        width: 100%;
        overflow-x: auto;
        flex-wrap: nowrap !important;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        padding-bottom: 4px;
      }
      .gallery-cats::-webkit-scrollbar { display: none; }
      .gallery-cats button { flex-shrink: 0; }

      /* Convert gallery to horizontal snap-scroll on mobile */
      .gallery-row {
        height: 260px;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 5px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
      }
      .gallery-row::-webkit-scrollbar { display: none; }
      .gallery-item {
        width: 78% !important;
        scroll-snap-align: start;
      }
    }

    @media (max-width: 480px) {
      .gallery-section { padding-top: 40px; }
      .gallery-header-wrap { padding: 0 16px; }
      .gallery-row { height: 220px; padding-left: 16px; padding-right: 16px; }
      .gallery-item { width: 88% !important; }
      .gallery-item span { font-size: 12px !important; bottom: 14px !important; left: 14px !important; }
    }

    /* Landscape phones: row was getting too tall relative to viewport height */
    @media (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
      .gallery-row { height: 200px; }
    }

    /* Very narrow devices (foldables, small Androids) */
    @media (max-width: 360px) {
      .gallery-header-wrap { padding: 0 12px; }
      .gallery-row { padding-left: 12px; padding-right: 12px; height: 190px; }
      .gallery-item { width: 92% !important; }
    }
  `}</style>

          <div className="gallery-header-wrap" style={{ ...mw }}>
            <Rv>
              <div
                className="gallery-header-flex  max-w-7xl"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  gap: 16,
                  marginBottom: "10px",
                }}
              >
                <div>
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    Our Projects
                  </span>
                  <h2
                    className="cor"
                    style={{
                      fontSize: "clamp(28px,6vw,52px)",
                      fontWeight: 700,
                      color: "var(--navy)",
                      lineHeight: 1.1,
                    }}
                  >
                    Spaces That{" "}
                    <em
                      style={{
                        fontStyle: "italic",
                        color: "var(--gold)",
                        fontWeight: 400,
                      }}
                    >
                      Inspire
                    </em>
                  </h2>
                </div>
                <div className="gallery-cats">
                  {CATS.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => handleCatClick(i)}
                      className="out"
                      style={{
                        padding: "7px 16px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        background:
                          i === activeCat ? "var(--navy)" : "transparent",
                        color: i === activeCat ? "#fff" : "var(--muted)",
                        border:
                          i === activeCat
                            ? "1.5px solid var(--navy)"
                            : "1.5px solid var(--border)",
                        transition: "all .2s",
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </Rv>
          </div>

          <div className="gallery-row">
  {[
    {
      w: "21%",
      label: "Living Spaces",
      img: "https://i.pinimg.com/736x/ff/13/25/ff1325ee41487fa0786900320db42651.jpg",
    },
    {
      w: "21%",
      label: "Exteriors",
      img: "https://i.pinimg.com/736x/ff/84/86/ff84865f07698d168e6b3f291e87acda.jpg",
    },
    {
      w: "21%",
      label: "Amenities",
      img: "https://i.pinimg.com/1200x/c8/25/29/c82529eead19d10d8b89000fc0c51fa6.jpg",
    },
    {
      w: "21%",
      label: "Interiors",
      img: "https://i.pinimg.com/736x/c6/0f/ec/c60fec5efa1b8aff3a85409984b7c449.jpg",
    },
  ].map((g, i) => (
    <div
      key={`${activeCat}-${i}`}
      className="gallery-item lift"
      style={{ width: g.w }}
    >
      <img
        src={g.img}
        alt={g.label}
        className="cat-img-enter"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .6s cubic-bezier(.22,.68,0,1.2)",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.07)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top,rgba(15,31,61,.65) 0%,transparent 55%)",
        }}
      />

      <span
        className="out"
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          color: "#fff",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: ".03em",
        }}
      >
        {g.label}
      </span>
    </div>
  ))}
</div>
        </section>

        {/* ══ NEWSLETTER + BRAND CARD ═══════════════════════ */}
        <section
          style={{
            padding: "100px 48px",
            background: "#fff",
            overflowX: "hidden",
          }}
        >
          <div
            className="nl-grid"
            style={{
              ...mw,
              display: "grid",
              gridTemplateColumns: "1fr 1.35fr",
              gap: 20,
              alignItems: "stretch",
            }}
          >
            <Rv>
              <div
                className="nl-card-padding"
                style={{
                  background: "var(--stone)",
                  borderRadius: 24,
                  padding: "52px 48px",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: 16,
                  }}
                >
                  Stay Updated
                </span>
                <h3
                  className="cor"
                  style={{
                    fontSize: "clamp(26px,2.8vw,40px)",
                    fontWeight: 700,
                    color: "var(--navy)",
                    lineHeight: 1.1,
                    marginBottom: 12,
                  }}
                >
                  Subscribe to
                  <br />
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--gold)",
                      fontWeight: 400,
                    }}
                  >
                    Our Newsletter
                  </em>
                </h3>
                <p
                  className="out"
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: 36,
                  }}
                >
                  Receive exclusive offers, new launch alerts and insider guides
                  on premium real estate.
                </p>
                <div>
                  <label
                    className="mono"
                    style={{
                      fontSize: 9,
                      fontWeight: 500,
                      color: "var(--navy)",
                      display: "block",
                      marginBottom: 10,
                      letterSpacing: ".18em",
                    }}
                  >
                    E-MAIL *
                  </label>
                  <div
                    className="nl-input-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1.5px solid var(--border)",
                      borderRadius: 12,
                      overflow: "hidden",
                      background: "#fff",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="out"
                      style={{
                        flex: 1,
                        padding: "14px 18px",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        fontSize: 14,
                        color: "var(--navy)",
                        minWidth: 0,
                      }}
                    />
                    <button
                      className="gbtn"
                      style={{
                        padding: "10px 20px",
                        height: "100%",
                        borderRadius: 0,
                        fontSize: 18,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </button>
                  </div>
                  <p
                    className="out"
                    style={{
                      fontSize: 11,
                      color: "#ccc",
                      marginTop: 10,
                      fontWeight: 300,
                    }}
                  >
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </Rv>

            <Rv delay={100}>
              <div
                className="brand-card-padding"
                style={{
                  background: "var(--navy)",
                  borderRadius: 24,
                  padding: "36px 36px 0",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="brand-card-header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 28,
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  <div>
                    <p
                      className="cor"
                      style={{
                        fontSize: 30,
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      Avyaya
                    </p>
                    <p
                      className="out"
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,.35)",
                        marginTop: 4,
                        letterSpacing: ".03em",
                      }}
                    >
                      Premium Real Estate
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: 9,
                        color: "rgba(255,255,255,.3)",
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                      }}
                    >
                      Follow us
                    </span>
                    {[
                      {
                          icon: <RiFacebookFill />,
                          href: "https://www.facebook.com/share/1PfHxWvUja/",
                          label: "Facebook",
                        },
                        {
                          icon: <RiInstagramLine />,
                          href: "https://www.instagram.com/avyayadeveloper?igsh=MTByeTV3bW1za203dA==",
                          label: "Instagram",
                        },
                        {
                          icon: <RiYoutubeLine />,
                          href: "https://youtube.com/@avyayadeveloper?si=cBUOCNZS7QAL84bl",
                          label: "YouTube",
                        },
                        {
                          icon: <RiWhatsappLine />,
                          href: "https://wa.me/917004397655",
                          label: "WhatsApp",
                        },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href="#"
                        aria-label={s.label}
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 9,
                          border: "1px solid rgba(255,255,255,.13)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "rgba(255,255,255,.55)",
                          fontSize: 16,
                          textDecoration: "none",
                          transition: "all .2s",
                          flexShrink: 0,
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = "var(--gold)";
                          e.currentTarget.style.color = "var(--gold2)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,.13)";
                          e.currentTarget.style.color = "rgba(255,255,255,.55)";
                        }}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div
                  className="brand-card-imgs"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 8,
                    flex: 1,
                  }}
                >
                  {[
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop",
                  ].map((src, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: "12px 12px 0 0",
                        overflow: "hidden",
                        aspectRatio: "2/3",
                        position: "relative",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) =>
                        (e.querySelector("img").style.transform = "scale(1.06)")
                      }
                      onMouseOut={(e) =>
                        (e.querySelector("img").style.transform = "scale(1)")
                      }
                    >
                      <img
                        src={src}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform .5s",
                        }}
                      />
                      {i === 2 && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 12,
                            right: 12,
                            width: 32,
                            height: 32,
                            background: "rgba(255,255,255,.92)",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 15,
                            color: "var(--navy)",
                          }}
                        >
                          ↗
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Rv>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══════════════════════════════════ */}
        <section
          style={{
            padding: "100px 48px",
            background: "var(--stone)",
            overflowX: "hidden",
          }}
        >
          <div style={mw}>
            <Rv>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: 52,
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    Client Stories
                  </span>
                  <h2
                    className="cor"
                    style={{
                      fontSize: "clamp(34px,4vw,54px)",
                      fontWeight: 700,
                      color: "var(--navy)",
                      lineHeight: 1.0,
                    }}
                  >
                    What Our{" "}
                    <em
                      style={{
                        fontStyle: "italic",
                        color: "var(--gold)",
                        fontWeight: 400,
                      }}
                    >
                      Clients
                    </em>{" "}
                    Say
                  </h2>
                </div>
                <div style={{ display: "flex", gap: 3 }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <RiStarFill
                      key={s}
                      style={{ color: "var(--gold)", fontSize: 18 }}
                    />
                  ))}
                </div>
              </div>
            </Rv>
            <div
              className="test-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 18,
              }}
            >
              {TESTS.map((t, i) => (
                <Rv key={i} delay={i * 90}>
                  <div
                    className="lift"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border)",
                      borderRadius: 22,
                      padding: 32,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      className="cor"
                      style={{
                        fontSize: 72,
                        color: "rgba(176,139,76,.12)",
                        lineHeight: 0.75,
                        marginBottom: 18,
                        fontWeight: 300,
                      }}
                    >
                      "
                    </div>
                    <p
                      className="out"
                      style={{
                        fontSize: 14,
                        color: "#666",
                        lineHeight: 1.85,
                        fontWeight: 300,
                        fontStyle: "italic",
                        flex: 1,
                        marginBottom: 24,
                      }}
                    >
                      {t.text}
                    </p>
                    <div style={{ display: "flex", gap: 2, marginBottom: 18 }}>
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <RiStarFill
                          key={j}
                          style={{ color: "var(--gold)", fontSize: 12 }}
                        />
                      ))}
                    </div>
                    <div
                      style={{
                        height: 1,
                        background: "var(--border)",
                        marginBottom: 18,
                      }}
                    />
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <img
                        src={t.av}
                        alt={t.name}
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid var(--gold)",
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <p
                          className="out"
                          style={{
                            fontWeight: 700,
                            color: "var(--navy)",
                            fontSize: 13,
                          }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="out"
                          style={{ fontSize: 11, color: "#bbb" }}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Rv>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ════════════════════════════════════ */}
        <section
          style={{
            padding: "100px 48px",
            background: "#fff",
            overflowX: "hidden",
          }}
        >
          <Rv>
            <div
              style={{
                ...mw,
                background: "var(--navy)",
                borderRadius: 28,
                padding: "72px 72px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: 56,
                position: "relative",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
              className="cta-grid cta-inner"
            >
              <div
                style={{
                  position: "absolute",
                  right: -80,
                  bottom: -80,
                  width: 360,
                  height: 360,
                  borderRadius: "50%",
                  border: "1px solid rgba(176,139,76,.1)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: -40,
                  bottom: -40,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  border: "1px solid rgba(176,139,76,.07)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: "rgba(176,139,76,.12)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  className="mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: 14,
                  }}
                >
                  Limited Units Available
                </span>
                <h2
                  className="cor"
                  style={{
                    fontSize: "clamp(32px,4vw,56px)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.03,
                    marginBottom: 16,
                  }}
                >
                  Your Dream Home
                  <br />
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--gold2)",
                      fontWeight: 400,
                    }}
                  >
                    Awaits You.
                  </em>
                </h2>
                <p
                  className="out"
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,.42)",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    maxWidth: 480,
                  }}
                >
                  Schedule a free site visit today and let our experts guide you
                  to the perfect property.
                </p>
              </div>

              <div
                className="cta-buttons-col"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 13,
                  position: "relative",
                  zIndex: 1,
                  flexShrink: 0,
                }}
              >
                <Link
                  href="/contact"
                  className="gbtn"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "16px 40px",
                    borderRadius: 13,
                    fontSize: 13,
                    textDecoration: "none",
                    letterSpacing: ".05em",
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                  }}
                >
                  Book Free Site Visit
                </Link>
                <a
                  href="https://chat.whatsapp.com/FidK3t1WlxPKrLb5J8dWvM"
                  className="out"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    border: "1px solid rgba(255,255,255,.15)",
                    color: "rgba(255,255,255,.65)",
                    padding: "14px 32px",
                    borderRadius: 13,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "all .2s",
                    boxSizing: "border-box",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.15)";
                    e.currentTarget.style.color = "rgba(255,255,255,.65)";
                  }}
                >
                  <RiWhatsappLine style={{ fontSize: 17 }} /> WhatsApp Us
                </a>
              </div>
            </div>
          </Rv>
        </section>
      </main>
    </>
  );
}
