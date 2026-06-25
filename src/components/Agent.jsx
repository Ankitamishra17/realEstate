"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search, MapPin, Phone, Mail, Star, Award, Languages,
  Building2, ArrowRight, ArrowUpRight, Users, ShieldCheck,
  Clock, Briefcase,
} from "lucide-react";

const CITIES = ["All Cities", "Noida", "Greater Noida", "Yamuna Expressway", "Noida Extension"];

const AGENTS = [
  {
    name: "Rohan Malhotra",
    role: "Senior Sales Consultant",
    city: "Noida",
    deals: "180+ Deals Closed",
    experience: "9 Yrs Experience",
    specialty: "Residential & Villas",
    languages: "English, Hindi",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Ananya Kapoor",
    role: "Commercial Property Advisor",
    city: "Noida",
    deals: "140+ Deals Closed",
    experience: "7 Yrs Experience",
    specialty: "Office & Retail Spaces",
    languages: "English, Hindi",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Vikram Sehgal",
    role: "Land & Plotting Specialist",
    city: "Greater Noida",
    deals: "210+ Deals Closed",
    experience: "11 Yrs Experience",
    specialty: "Plots & Township",
    languages: "English, Hindi, Punjabi",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Priya Nair",
    role: "Senior Sales Consultant",
    city: "Greater Noida",
    deals: "165+ Deals Closed",
    experience: "8 Yrs Experience",
    specialty: "Apartments & Housing",
    languages: "English, Hindi, Malayalam",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Arjun Verma",
    role: "Investment Advisory Lead",
    city: "Yamuna Expressway",
    deals: "120+ Deals Closed",
    experience: "6 Yrs Experience",
    specialty: "Gated Communities",
    languages: "English, Hindi",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
  },
  {
    name: "Simran Bhatia",
    role: "Client Relations Manager",
    city: "Noida Extension",
    deals: "95+ Deals Closed",
    experience: "5 Yrs Experience",
    specialty: "Affordable Housing",
    languages: "English, Hindi",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
];

const TRUST_STATS = [
  { icon: Users, value: "32+", label: "Verified Agents" },
  { icon: ShieldCheck, value: "100%", label: "RERA Compliant" },
  { icon: Clock, value: "< 2 Hrs", label: "Avg. Response Time" },
  { icon: Star, value: "4.8/5", label: "Client Satisfaction" },
];

const HOW_STEPS = [
  {
    icon: Search,
    step: "Step One",
    title: "Tell Us What You Need",
    text: "Pick a city and property type, or search directly for an agent by name or specialty.",
  },
  {
    icon: Users,
    step: "Step Two",
    title: "Connect With an Agent",
    text: "Call or message your chosen agent directly — no call centre, no waiting in a queue.",
  },
  {
    icon: Briefcase,
    step: "Step Three",
    title: "Get Site Visits Arranged",
    text: "Your agent schedules site visits, shares documentation, and guides you through closing.",
  },
];

/* ── CSS ── */
const css = `
  * { box-sizing: border-box; }
  .agent-root { overflow-x: hidden; }

  .agent-card { transition: box-shadow 0.3s, transform 0.3s; }
  .agent-card:hover { box-shadow: 0 16px 40px rgba(18,36,61,0.14); transform: translateY(-4px); }
  .filter-btn { transition: background 0.25s, color 0.25s, border-color 0.25s; font-family: inherit; }
  .step-card { transition: box-shadow 0.3s, transform 0.3s; }
  .step-card:hover { box-shadow: 0 16px 40px rgba(18,36,61,0.1); transform: translateY(-4px); }
  .search-input::placeholder { color: rgba(18,36,61,0.35); }

  /* ── GRIDS ── */
  .agents-grid  { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
  .trust-grid   { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; }
  .steps-grid   { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
  .cta-grid     { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2.5rem; align-items: center; min-width: 0; }

  .agent-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-bottom: 2.5rem;
  }

  /* ── FILTER ROW ── */
  .filter-row {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  /* ── SEARCH BAR ── */
  .search-bar {
    display: flex;
    gap: 0.75rem;
    background: #fff;
    padding: 0.6rem;
    borderRadius: 2;
  }

/* ── TABLET ≤ 1024px ── */
@media (max-width: 1024px) {
  .agents-grid  { grid-template-columns: repeat(2,1fr); }
  .trust-grid   { grid-template-columns: repeat(2,1fr); }
  .steps-grid   { grid-template-columns: repeat(2,1fr); }
  .cta-grid     { grid-template-columns: 1fr; }
  .agent-header { flex-direction: column; align-items: flex-start; }
  .filter-row   { width: 100%; }   /* tablet pe wrap theek hai */
}

  /* ── MOBILE ≤ 768px ── */
@media (max-width: 768px) {
  .agents-grid { grid-template-columns: 1fr; }
  .steps-grid  { grid-template-columns: 1fr; }

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
    width: 100%;
  }
  .filter-row::-webkit-scrollbar { display: none; }

    .search-bar { flex-direction: column; }
    .search-bar .search-btn { width: 100%; }

    .cta-btns { flex-direction: column; }
    .cta-btns a { width: 100%; }
  }

  /* ── XS ≤ 400px ── */
  @media (max-width: 400px) {
    .trust-grid { grid-template-columns: 1fr; }
  }
`;

/* ── HOOKS & UTILS ── */
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
  const transforms = {
    bottom: "translateY(36px)",
    left:   "translateX(-36px)",
    right:  "translateX(36px)",
  };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translate(0)" : transforms[from],
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: 8, marginBottom: 16, flexWrap: "nowrap", overflow: "hidden",
    }}>
      <div style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }} />
      <div style={{ width: 5, height: 5, background: "#b8892e", transform: "rotate(45deg)", flexShrink: 0 }} />
      <div style={{ width: 20, height: 2, background: "#b8892e", flexShrink: 0 }} />
      <span style={{
        color: "#b8892e", fontSize: "clamp(9px,2.5vw,11px)",
        letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase",
        whiteSpace: "nowrap", flexShrink: 1, minWidth: 0,
      }}>
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
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <div style={{ width: 24, height: 2, background: "#b8892e", flexShrink: 0 }} />
      <span style={{
        color: "#b8892e", fontSize: "clamp(9px,2.5vw,11px)",
        letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>
        {children}
      </span>
    </div>
  );
}

function StarRow({ rating }) {
  const full = Math.round(rating);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} style={{ width: 13, height: 13, color: "#b8892e", fill: i <= full ? "#b8892e" : "none" }} />
      ))}
      <span style={{ color: "rgba(18,36,61,0.55)", fontSize: 12.5, marginLeft: 4, fontWeight: 600 }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function AgentCard({ a, delay }) {
  return (
    <Fade delay={delay}>
      <div className="agent-card" style={{
        background: "#fff", border: "1px solid #e2d9cc", borderRadius: 2,
        overflow: "hidden", height: "100%", display: "flex", flexDirection: "column",
      }}>
        <div style={{ position: "relative", height: 240, overflow: "hidden", flexShrink: 0 }}>
          <img src={a.img} alt={a.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(18,36,61,0.65), transparent)" }} />
          <span style={{
            position: "absolute", top: 14, left: 14,
            background: "#12243d", color: "#b8892e",
            fontSize: 11, fontWeight: 700, padding: "5px 12px", borderRadius: 2,
            display: "flex", alignItems: "center", gap: 5,
          }}>
            <MapPin style={{ width: 11, height: 11 }} />
            {a.city}
          </span>
        </div>

        <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
          <h3 style={{ fontWeight: 700, color: "#12243d", fontSize: "clamp(14px,1.8vw,17px)", marginBottom: 4 }}>{a.name}</h3>
          <p style={{ color: "#b8892e", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.04em", marginBottom: 10 }}>
            {a.role}
          </p>

          <StarRow rating={a.rating} />

          <div style={{
            display: "flex", flexDirection: "column", gap: 8,
            marginTop: 14, paddingTop: 14, borderTop: "1px solid #e2d9cc", marginBottom: "1.25rem",
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <Award style={{ width: 14, height: 14, color: "#b8892e", flexShrink: 0, marginTop: 1 }} />
              <span style={{ fontSize: 12.5, color: "rgba(18,36,61,0.6)", lineHeight: 1.4 }}>
                {a.experience} · {a.deals}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <Building2 style={{ width: 14, height: 14, color: "#b8892e", flexShrink: 0, marginTop: 1 }} />
              <span style={{ fontSize: 12.5, color: "rgba(18,36,61,0.6)" }}>{a.specialty}</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <Languages style={{ width: 14, height: 14, color: "#b8892e", flexShrink: 0, marginTop: 1 }} />
              <span style={{ fontSize: 12.5, color: "rgba(18,36,61,0.6)" }}>{a.languages}</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", marginTop: "auto" }}>
            <a href="#" style={{
              flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center",
              gap: 6, background: "#b8892e", color: "#fff", fontWeight: 700,
              fontSize: 12.5, padding: "0.65rem 0.5rem", borderRadius: 2, textDecoration: "none",
            }}>
              <Phone style={{ width: 13, height: 13, flexShrink: 0 }} /> Call
            </a>
            <a href="#" style={{
              flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center",
              gap: 6, border: "1px solid #e2d9cc", color: "#12243d", fontWeight: 700,
              fontSize: 12.5, padding: "0.65rem 0.5rem", borderRadius: 2, textDecoration: "none",
            }}>
              <Mail style={{ width: 13, height: 13, flexShrink: 0 }} /> Message
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

/* ── PAGE ── */
export default function FindAgent() {
  const [activeCity, setActiveCity] = useState("All Cities");
  const [query, setQuery] = useState("");

  const filtered = AGENTS.filter((a) => {
    const cityMatch = activeCity === "All Cities" || a.city === activeCity;
    const queryMatch =
      query.trim() === "" ||
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.specialty.toLowerCase().includes(query.toLowerCase());
    return cityMatch && queryMatch;
  });

  const SP = "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)";

  return (
    <>
      <style>{css}</style>
      <div className="agent-root" style={{ background: "#f7f4ef", color: "#12243d", fontFamily: "'Georgia','Times New Roman',serif" }}>

        {/* ── HERO / SEARCH ── */}
        <section style={{
          background: "#12243d",
          padding: "clamp(3.5rem,8vw,7rem) clamp(1.25rem,4vw,2.5rem) clamp(2.5rem,6vw,5rem)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "relative", zIndex: 10, maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <Fade>
              <Eyebrow>Talk to a Specialist</Eyebrow>
              <h1 style={{
                fontSize: "clamp(1.8rem,4.5vw,3.6rem)", fontWeight: 700, color: "#fff",
                lineHeight: 1.1, marginBottom: "1.25rem", letterSpacing: "-0.01em",
                wordBreak: "break-word",
              }}>
                Find the Right <span style={{ color: "#b8892e" }}>Avyaya Agent</span>
              </h1>
              <p style={{
                color: "rgba(255,255,255,0.52)", fontSize: "clamp(0.85rem,1.8vw,1rem)",
                lineHeight: 1.8, maxWidth: 540, margin: "0 auto 2.5rem",
              }}>
                Every Avyaya agent is RERA-registered and trained on our full portfolio — so you get advice
                from someone who actually knows the project, not just the brochure.
              </p>
            </Fade>

            <Fade delay={150}>
              <div className="search-bar" style={{
                display: "flex", gap: "0.75rem", background: "#fff",
                padding: "0.6rem", borderRadius: 2,
              }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, padding: "0 0.75rem", minWidth: 0 }}>
                  <Search style={{ width: 17, height: 17, color: "rgba(18,36,61,0.4)", flexShrink: 0 }} />
                  <input
                    className="search-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by agent name or specialty"
                    style={{
                      border: "none", outline: "none", width: "100%",
                      fontSize: "clamp(12px,1.5vw,14px)", color: "#12243d",
                      fontFamily: "inherit", padding: "0.6rem 0", background: "transparent",
                    }}
                  />
                </div>
                <a href="#agents" className="search-btn" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "#b8892e", color: "#fff", fontWeight: 700,
                  padding: "0.85rem 1.5rem", borderRadius: 2, textDecoration: "none",
                  fontSize: "clamp(12px,1.4vw,13.5px)", whiteSpace: "nowrap", flexShrink: 0,
                }}>
                  Search Agents
                </a>
              </div>
            </Fade>
          </div>
        </section>

        {/* ── AGENT GRID ── */}
        <section id="agents" style={{ padding: SP, background: "#f7f4ef" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Fade>
              <div className="agent-header">
                <div style={{ minWidth: 0 }}>
                  <EyebrowLeft>Our Agents</EyebrowLeft>
                  <h2 style={{ fontSize: "clamp(1.3rem,2.6vw,2.1rem)", fontWeight: 700, color: "#12243d" }}>
                    {filtered.length} Agents Available
                  </h2>
                </div>
                <div className="filter-row">
                  {CITIES.map((c) => (
                    <button key={c} className="filter-btn" onClick={() => setActiveCity(c)} style={{
                      border: activeCity === c ? "1px solid #b8892e" : "1px solid #e2d9cc",
                      background: activeCity === c ? "#b8892e" : "#fff",
                      color: activeCity === c ? "#fff" : "rgba(18,36,61,0.65)",
                      fontWeight: 600, fontSize: "clamp(11px,1.3vw,12.5px)",
                      padding: "0.5rem 1rem", borderRadius: 20,
                      cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                    }}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </Fade>

            <div className="agents-grid">
              {filtered.map((a, i) => (
                <AgentCard key={a.name} a={a} delay={(i % 6) * 70} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p style={{ textAlign: "center", color: "rgba(18,36,61,0.5)", padding: "3rem 0" }}>
                No agents match your search. Try a different name, city, or specialty.
              </p>
            )}
          </div>
        </section>

        {/* ── TRUST STATS ── */}
        <section style={{ padding: SP, background: "#12243d", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
            <Fade>
              <div style={{ textAlign: "center", marginBottom: "clamp(2rem,5vw,3rem)" }}>
                <Eyebrow>Why Work With Us</Eyebrow>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", fontWeight: 700, color: "#fff" }}>
                  Agents You Can Actually Trust
                </h2>
              </div>
            </Fade>
            <div className="trust-grid">
              {TRUST_STATS.map((s, i) => (
                <Fade key={s.label} delay={i * 80}>
                  <div style={{
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,137,46,0.2)",
                    borderRadius: 2, padding: "clamp(1.25rem,2.5vw,2rem) 1.25rem", textAlign: "center",
                  }}>
                    <s.icon style={{ width: 26, height: 26, color: "#b8892e", margin: "0 auto 1rem" }} />
                    <p style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.2rem,3vw,1.6rem)", lineHeight: 1, marginBottom: 8 }}>
                      {s.value}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12.5, fontWeight: 600 }}>{s.label}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding: SP, background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Fade>
              <div style={{ textAlign: "center", marginBottom: "clamp(2rem,5vw,3.5rem)" }}>
                <Eyebrow>Getting Started</Eyebrow>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", fontWeight: 700, color: "#12243d" }}>
                  How Matching Works
                </h2>
              </div>
            </Fade>
            <div className="steps-grid">
              {HOW_STEPS.map((s, i) => (
                <Fade key={s.title} delay={i * 90}>
                  <div className="step-card" style={{
                    background: "#faf8f4", border: "1px solid #e2d9cc",
                    borderRadius: 2, padding: "clamp(1.25rem,2.5vw,2rem) clamp(1rem,2vw,1.5rem)", height: "100%",
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 2,
                      background: "rgba(184,137,46,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#b8892e", marginBottom: "1.1rem",
                    }}>
                      <s.icon style={{ width: 22, height: 22 }} />
                    </div>
                    <p style={{ color: "#b8892e", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                      {s.step}
                    </p>
                    <h3 style={{ fontWeight: 700, color: "#12243d", fontSize: "clamp(13px,1.5vw,15px)", marginBottom: 8, lineHeight: 1.35 }}>
                      {s.title}
                    </h3>
                    <p style={{ color: "rgba(18,36,61,0.6)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{s.text}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: SP, background: "#f7f4ef" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="cta-grid" style={{
              background: "#12243d", borderRadius: 2,
              padding: "clamp(2rem,5vw,3.5rem) clamp(1.25rem,4vw,3rem)",
              overflow: "hidden",
            }}>
              <Fade from="left">
                <div style={{ minWidth: 0 }}>
                  <EyebrowLeft>Join Our Network</EyebrowLeft>
                  <h2 style={{
                    fontSize: "clamp(1.3rem,3vw,2.2rem)", fontWeight: 700, color: "#fff",
                    marginBottom: "1.1rem", lineHeight: 1.25, wordBreak: "break-word",
                  }}>
                    Are You a Real Estate Professional?
                  </h2>
                  <p style={{
                    color: "rgba(255,255,255,0.5)", fontSize: "clamp(13px,1.5vw,14.5px)",
                    lineHeight: 1.8, maxWidth: "100%", margin: 0,
                  }}>
                    Partner with Avyaya Developers and get access to verified leads, full project documentation,
                    and a brand that clients already trust across NCR.
                  </p>
                </div>
              </Fade>

              <Fade from="right" delay={150}>
                <div className="cta-btns" style={{
                  display: "flex", flexDirection: "column", gap: "0.75rem",
                  marginTop: "clamp(1.75rem,4vw,0rem)",
                }}>
                  <a href="/contact" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "#b8892e", color: "#fff", fontWeight: 700,
                    padding: "0.9rem 1.75rem", borderRadius: 2, textDecoration: "none",
                    fontSize: "clamp(12px,1.4vw,14px)", whiteSpace: "nowrap",
                  }}>
                    Apply to Join <ArrowRight style={{ width: 16, height: 16, flexShrink: 0 }} />
                  </a>
                  <a href="/about" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    border: "2px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.75)",
                    fontWeight: 600, padding: "0.9rem 1.75rem", borderRadius: 2,
                    textDecoration: "none", fontSize: "clamp(12px,1.4vw,14px)", whiteSpace: "nowrap",
                  }}>
                    Learn More <ArrowUpRight style={{ width: 15, height: 15, flexShrink: 0 }} />
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