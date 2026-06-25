"use client";

import Image from "next/image";


import { useEffect, useRef, useState } from "react";
import {
  ClipboardCheck,
  Search,
  FileSignature,
  HandCoins,
  ShieldCheck,
  TrendingUp,
  Camera,
  Users,
  ArrowRight,
  ArrowUpRight,
  Home,
  Building2,
  MapPinned,
  ChevronDown,
} from "lucide-react";

const PROPERTY_TYPES = [
  "Residential Plot",
  "Apartment / Flat",
  "Villa / House",
  "Commercial Space",
  "Agricultural Land",
];

const STEPS = [
  {
    icon: ClipboardCheck,
    step: "Step One",
    title: "Submit Property Details",
    text: "Share your property's location, size, and documents through our simple online form.",
  },
  {
    icon: Search,
    step: "Step Two",
    title: "Free Valuation Visit",
    text: "Our advisor visits the site, verifies documents, and gives you a fair market valuation.",
  },
  {
    icon: Camera,
    step: "Step Three",
    title: "Listing & Marketing",
    text: "We photograph, list, and market your property to our network of verified buyers.",
  },
  {
    icon: FileSignature,
    step: "Step Four",
    title: "Offer & Paperwork",
    text: "We shortlist serious offers and manage all legal paperwork until the deal closes.",
  },
  {
    icon: HandCoins,
    step: "Step Five",
    title: "Closing & Payment",
    text: "Secure, RERA-compliant closing with full payment tracked and confirmed in writing.",
  },
];

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Fair Market Valuation",
    desc: "Data-backed pricing using recent NCR transactions — not a guessed number.",
  },
  {
    icon: Users,
    title: "Pre-Verified Buyer Network",
    desc: "Your listing reaches genuine, financially-qualified buyers, not just browsers.",
  },
  {
    icon: ShieldCheck,
    title: "Legal & RERA Support",
    desc: "Our team handles title checks, documentation, and compliance end-to-end.",
  },
  {
    icon: Camera,
    title: "Professional Listing",
    desc: "Photography, floor plans, and write-ups that present your property at its best.",
  },
];

const FAQS = [
  {
    q: "How much does it cost to list my property with Avyaya?",
    a: "There is no upfront listing fee. Our team only charges a brokerage commission once your property is successfully sold, agreed upfront in writing.",
  },
  {
    q: "How long does the valuation process take?",
    a: "Most site visits are scheduled within 48 hours of your submission, and you'll receive a written valuation within 3–5 working days.",
  },
  {
    q: "Do I need to be present for the valuation visit?",
    a: "It helps, but isn't required. You can authorise a family member, caretaker, or share documents digitally and join the visit over a call.",
  },
  {
    q: "What documents do I need to sell my property?",
    a: "Typically the title deed, latest property tax receipts, encumbrance certificate, and identity proof. Our advisor will share the exact checklist for your property type.",
  },
  {
    q: "Can I sell a property that still has a home loan on it?",
    a: "Yes. We coordinate directly with your bank to settle the outstanding loan and transfer the title as part of the closing process.",
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

function Eyebrow({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        marginBottom: 16,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 32, height: 2, background: "#b8892e" }} />
        <div
          style={{
            width: 6,
            height: 6,
            background: "#b8892e",
            transform: "rotate(45deg)",
          }}
        />
        <div style={{ width: 32, height: 2, background: "#b8892e" }} />
      </div>
      <span
        style={{
          color: "#b8892e",
          fontSize: 11,
          letterSpacing: "0.28em",
          fontWeight: 700,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 32, height: 2, background: "#b8892e" }} />
        <div
          style={{
            width: 6,
            height: 6,
            background: "#b8892e",
            transform: "rotate(45deg)",
          }}
        />
        <div style={{ width: 32, height: 2, background: "#b8892e" }} />
      </div>
    </div>
  );
}

function EyebrowLeft({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 16,
      }}
    >
      <div
        style={{ width: 28, height: 2, background: "#b8892e", flexShrink: 0 }}
      />
      <span
        style={{
          color: "#b8892e",
          fontSize: 11,
          letterSpacing: "0.28em",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e2d9cc",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          background: "none",
          border: "none",
          textAlign: "left",
          padding: "1.25rem 1.5rem",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            color: "#12243d",
            fontSize: 14.5,
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <ChevronDown
          style={{
            width: 18,
            height: 18,
            color: "#b8892e",
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            color: "rgba(18,36,61,0.6)",
            fontSize: 13.5,
            lineHeight: 1.75,
            padding: "0 1.5rem 1.4rem",
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

const css = `
  * { box-sizing: border-box; }
  .sell-root { overflow-x: hidden; }

  .benefit-card, .step-card { transition: box-shadow 0.3s, transform 0.3s; }
  .benefit-card:hover, .step-card:hover { box-shadow: 0 16px 40px rgba(18,36,61,0.1); transform: translateY(-4px); }

  .form-input::placeholder { color: rgba(18,36,61,0.35); }
  .form-input, .form-select {
    width: 100%;
    border: 1px solid #e2d9cc;
    border-radius: 2px;
    padding: 0.85rem 1rem;
    font-size: 14px;
    font-family: inherit;
    color: #12243d;
    background: #faf8f4;
    outline: none;
  }
  .form-input:focus, .form-select:focus { border-color: #b8892e; }

  /* Hero */
  .hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3.5rem;
    align-items: start;
  }
  .hero-stats {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  /* Form row */
  .form-row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  /* Benefits */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  /* Steps */
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.25rem;
  }

  /* What we sell */
  .what-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  .what-collage {
    position: relative;
    height: 420px;
  }
  .what-img1 {
    position: absolute; top: 0; left: 0;
    width: 70%; height: 72%;
    object-fit: cover; border-radius: 2px;
    box-shadow: 0 16px 48px rgba(18,36,61,0.14);
  }
  .what-img2 {
    position: absolute; bottom: 0; right: 0;
    width: 52%; height: 52%;
    object-fit: cover; border-radius: 2px;
    box-shadow: 0 12px 36px rgba(18,36,61,0.12);
    border: 4px solid #fff;
  }

  /* ── TABLET ── */
  @media (max-width: 1024px) {
    .hero-grid { grid-template-columns: 1fr; }
    .benefits-grid { grid-template-columns: repeat(2, 1fr); }
    .steps-grid { grid-template-columns: repeat(3, 1fr); }
    .what-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .what-collage { height: 320px; max-width: 520px; }
  }

  /* ── MOBILE ── */
  @media (max-width: 640px) {
    .benefits-grid { grid-template-columns: 1fr; }
    .steps-grid { grid-template-columns: 1fr 1fr; }
    .form-row-2 { grid-template-columns: 1fr; }
    .hero-stats { gap: 1.5rem; }
    .what-collage { height: 260px; }
    .what-img1 { width: 68%; height: 68%; }
    .what-img2 { width: 50%; height: 50%; }
  }

  @media (max-width: 400px) {
    .steps-grid { grid-template-columns: 1fr; }
  }
`;

export default function Sell() {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    type: PROPERTY_TYPES[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{css}</style>
      <div
        className="sell-root"
        style={{
          background: "#f7f4ef",
          color: "#12243d",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* ── HERO + FORM ── */}
        <section
          style={{
            background: "#12243d",
            padding:
              "clamp(5rem,8vw,6.5rem) clamp(1.25rem,4vw,2.5rem) clamp(2.5rem,6vw,5rem)",
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
                <EyebrowLeft>Sell With Avyaya</EyebrowLeft>
                <h1
                  style={{
                    fontSize: "clamp(2rem,4.5vw,3.8rem)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.1,
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Sell Your Property
                  <br />
                  <span style={{ color: "#b8892e" }}>at the Right Price</span>
                </h1>
                <p
                  style={{
                    color: "rgba(255,255,255,0.52)",
                    fontSize: "clamp(0.875rem,2vw,1rem)",
                    lineHeight: 1.8,
                    maxWidth: 460,
                    marginBottom: "2rem",
                  }}
                >
                  Get a free, no-obligation valuation from our advisory team and
                  reach a network of verified buyers across NCR — with full
                  legal support until closing.
                </p>
                <div className="hero-stats">
                  {[
                    { v: "Zero", l: "Upfront Listing Fee" },
                    { v: "48 Hrs", l: "Valuation Turnaround" },
                    { v: "100%", l: "Legal Compliance" },
                  ].map((s) => (
                    <div key={s.l}>
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
                          color: "rgba(255,255,255,0.45)",
                          fontSize: 12,
                          marginTop: 6,
                        }}
                      >
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </Fade>

              <Fade delay={150} from="right">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 2,
                    padding: "clamp(1.5rem,3vw,2rem)",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
                    marginTop: "clamp(2rem,4vw,0rem)",
                  }}
                >
                  {submitted ? (
                    <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background: "rgba(184,137,46,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 1.25rem",
                        }}
                      >
                        <ShieldCheck
                          style={{ width: 26, height: 26, color: "#b8892e" }}
                        />
                      </div>
                      <h3
                        style={{
                          fontWeight: 700,
                          color: "#12243d",
                          fontSize: 17,
                          marginBottom: 8,
                        }}
                      >
                        Request Received
                      </h3>
                      <p
                        style={{
                          color: "rgba(18,36,61,0.55)",
                          fontSize: 13.5,
                          lineHeight: 1.7,
                        }}
                      >
                        An Avyaya advisor will call you within 48 hours to
                        schedule your free valuation visit.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3
                        style={{
                          fontWeight: 700,
                          color: "#12243d",
                          fontSize: 18,
                          marginBottom: 4,
                        }}
                      >
                        Get a Free Property Valuation
                      </h3>
                      <p
                        style={{
                          color: "rgba(18,36,61,0.5)",
                          fontSize: 12.5,
                          marginBottom: "1.5rem",
                        }}
                      >
                        Takes under 2 minutes. No commitment required.
                      </p>
                      <form
                        onSubmit={handleSubmit}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <input
                          className="form-input"
                          type="text"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange("name")}
                        />
                        <div className="form-row-2">
                          <input
                            className="form-input"
                            type="tel"
                            required
                            placeholder="Phone number"
                            value={form.phone}
                            onChange={handleChange("phone")}
                          />
                          <input
                            className="form-input"
                            type="text"
                            required
                            placeholder="City / area"
                            value={form.city}
                            onChange={handleChange("city")}
                          />
                        </div>
                        <select
                          className="form-select"
                          value={form.type}
                          onChange={handleChange("type")}
                        >
                          {PROPERTY_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <button
                          type="submit"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            background: "#b8892e",
                            color: "#fff",
                            fontWeight: 700,
                            padding: "0.95rem",
                            borderRadius: 2,
                            border: "none",
                            fontSize: 14,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            marginTop: "0.25rem",
                          }}
                        >
                          Request Free Valuation
                          <ArrowRight style={{ width: 16, height: 16 }} />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── WHY SELL WITH US ── */}
        <section
          style={{
            padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)",
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
                <Eyebrow>Why Sell With Avyaya</Eyebrow>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem,3vw,2.4rem)",
                    fontWeight: 700,
                    color: "#12243d",
                  }}
                >
                  A Better Way to Sell
                </h2>
              </div>
            </Fade>
            <div className="benefits-grid">
              {BENEFITS.map((b, i) => (
                <Fade key={b.title} delay={i * 90}>
                  <div
                    className="benefit-card"
                    style={{
                      background: "#fff",
                      border: "1px solid #e2d9cc",
                      borderRadius: 2,
                      padding: "clamp(1.25rem,3vw,2rem) clamp(1rem,2vw,1.5rem)",
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
                        marginBottom: "1.25rem",
                        flexShrink: 0,
                      }}
                    >
                      <b.icon style={{ width: 22, height: 22 }} />
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        color: "#12243d",
                        marginBottom: "0.75rem",
                        fontSize: 15,
                      }}
                    >
                      {b.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(18,36,61,0.55)",
                        fontSize: 13,
                        lineHeight: 1.7,
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

        {/* ── HOW SELLING WORKS ── */}
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
                  marginBottom: "clamp(2rem,5vw,3.5rem)",
                }}
              >
                <EyebrowLeft>The Process</EyebrowLeft>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem,3vw,2.4rem)",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  How Selling Works
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 14,
                    marginTop: 12,
                  }}
                >
                  Five steps from your first form submission to money in your
                  account.
                </p>
              </div>
            </Fade>
            <div className="steps-grid">
              {STEPS.map((s, i) => (
                <Fade key={s.title} delay={i * 80}>
                  <div
                    className="step-card"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(184,137,46,0.2)",
                      borderRadius: 2,
                      padding:
                        "clamp(1.25rem,2vw,1.75rem) clamp(1rem,2vw,1.25rem)",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
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
                      <s.icon style={{ width: 20, height: 20 }} />
                    </div>
                    <p
                      style={{
                        color: "#b8892e",
                        fontSize: 10.5,
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      {s.step}
                    </p>
                    <h3
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 14,
                        marginBottom: 8,
                        lineHeight: 1.35,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: 12.5,
                        lineHeight: 1.65,
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

        {/* ── WHAT WE SELL + IMAGE ── */}
        <section
          style={{
            padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)",
            background: "#fff",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="what-grid">
              <Fade from="left">
                <div className="what-collage">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80"
                    alt="Property valuation meeting"
                    className="what-img1"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&q=80"
                    alt="Handshake closing deal"
                    className="what-img2"
                  />
                </div>
              </Fade>

              <Fade delay={150}>
                <div style={{ marginTop: "clamp(1.5rem,4vw,0rem)" }}>
                  <EyebrowLeft>What We Sell</EyebrowLeft>
                  <h2
                    style={{
                      fontSize: "clamp(1.5rem,3vw,2.4rem)",
                      fontWeight: 700,
                      color: "#12243d",
                      lineHeight: 1.25,
                      marginBottom: "1.5rem",
                    }}
                  >
                    We List Every Type of Property
                  </h2>
                  <p
                    style={{
                      color: "rgba(18,36,61,0.6)",
                      lineHeight: 1.85,
                      marginBottom: "2rem",
                      fontSize: 15,
                    }}
                  >
                    Whether it's a family home, a commercial unit, or a plot of
                    land you've been holding for years — our advisors price and
                    market it correctly for the segment it belongs to.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.9rem",
                    }}
                  >
                    {[
                      {
                        icon: Home,
                        t: "Residential — apartments, villas, independent houses",
                      },
                      {
                        icon: Building2,
                        t: "Commercial — offices, retail units, business parks",
                      },
                      {
                        icon: MapPinned,
                        t: "Land & Plots — residential plots, agricultural land",
                      },
                    ].map((item) => (
                      <div
                        key={item.t}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background: "rgba(184,137,46,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <item.icon
                            style={{ width: 17, height: 17, color: "#b8892e" }}
                          />
                        </div>
                        <span
                          style={{
                            color: "rgba(18,36,61,0.7)",
                            fontSize: 13.5,
                            fontWeight: 600,
                          }}
                        >
                          {item.t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── FAQ + CTA ── */}
        <section
          style={{
            padding: "clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2.5rem)",
            background: "#f7f4ef",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <Fade>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "clamp(2rem,5vw,2rem)",
                }}
              >
                <EyebrowLeft>Common Questions</EyebrowLeft>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem,3vw,2.4rem)",
                    fontWeight: 700,
                    color: "#12243d",
                  }}
                >
                  Frequently Asked Questions
                </h2>
              </div>
            </Fade>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "3.5rem",
              }}
            >
              {FAQS.map((item, i) => (
                <Fade key={item.q} delay={i * 60}>
                  <FaqItem
                    item={item}
                    isOpen={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                </Fade>
              ))}
            </div>

            <Fade>
              <div
                style={{
                  background: "#12243d",
                  borderRadius: 2,
                  padding: "clamp(2rem,5vw,3rem) clamp(1.5rem,4vw,2.5rem)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "clamp(1.2rem,2.5vw,1.4rem)",
                    marginBottom: 12,
                  }}
                >
                  Ready to Sell Your Property?
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    maxWidth: 440,
                    margin: "0 auto 1.75rem",
                  }}
                >
                  Get a free valuation today and let our advisors handle the
                  rest.
                </p>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#b8892e",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "0.9rem 2.25rem",
                    borderRadius: 2,
                    textDecoration: "none",
                    fontSize: 14,
                  }}
                >
                  Get Started <ArrowUpRight style={{ width: 16, height: 16 }} />
                </a>
              </div>
            </Fade>
          </div>
        </section>
      </div>
    </>
  );
}
