"use client";

import { useEffect, useRef, useState } from "react";

const ENQUIRY_TYPES = [
  "Residential Project",
  "Commercial Project",
  "Land / Plotting",
  "Investment Advisory",
  "General Enquiry",
];

function useInView(threshold = 0.1) {
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

function Fade({ children, style = {}, delay = 0, from = "bottom" }) {
  const [ref, inView] = useInView();
  const transforms = {
    bottom: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : transforms[from],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ width: 18, height: 18, flexShrink: 0 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}
function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ width: 18, height: 18, flexShrink: 0 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}
function IconClock() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ width: 18, height: 18, flexShrink: 0 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
function IconPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ width: 18, height: 18, flexShrink: 0 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}
function IconWhatsapp() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 18, height: 18, flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const css = `
  * { box-sizing: border-box; }
  .contact-root { overflow-x: hidden; }

  input:focus, textarea:focus, select:focus {
    border-color: #b8892e !important;
    box-shadow: 0 0 0 3px rgba(184,137,46,0.12);
  }
  .office-card:hover {
    border-color: #b8892e !important;
    box-shadow: 0 4px 20px rgba(18,36,61,0.1) !important;
  }
  .submit-btn:hover { background: #a07828 !important; }

  /* ── GRIDS ── */
  .contact-grid  { display: grid; grid-template-columns: 1fr 1.1fr; gap: 3.5rem; align-items: start; }
  .offices-grid  { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
  .form-row      { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

  .hero-overlay {
    background: linear-gradient(to right, rgba(10,20,45,0.88) 45%, rgba(10,20,45,0.45) 100%);
  }

  /* ── TABLET ≤ 1024px ── */
  @media (max-width: 1024px) {
    .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .offices-grid { grid-template-columns: repeat(2,1fr); }
  }

  /* ── MOBILE ≤ 700px ── */
  @media (max-width: 700px) {
    .offices-grid  { grid-template-columns: 1fr; }
    .form-row      { grid-template-columns: 1fr; }

    .hero-overlay {
      background: linear-gradient(to bottom, rgba(10,20,45,0.7) 0%, rgba(10,20,45,0.85) 100%);
    }

    .hero-chips  { flex-direction: column !important; align-items: flex-start !important; }
    .hero-chips > div { width: 100%; }

    .hero-ctas   { flex-direction: column !important; }
    .hero-ctas a { width: 100%; justify-content: center; }

    .whatsapp-strip { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
    .whatsapp-strip a { width: 100%; justify-content: center; }

    .map-header { flex-wrap: wrap; gap: 8px; }
    .map-header span:last-child { font-size: 12px !important; }
  }

  /* ── XS ≤ 400px ── */
  @media (max-width: 400px) {
    .contact-chip-label { display: none; }
  }
`;

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://avyayadeveloper.com/send-contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const inputBase = {
    width: "100%",
    boxSizing: "border-box",
    background: "#fff",
    border: "1px solid #d9cfc2",
    borderRadius: 2,
    padding: "0.78rem 1rem",
    fontSize: 14,
    color: "#12243d",
    fontFamily: "inherit",
    outline: "none",
  };

  if (sent) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#b8892e",
            margin: "0 auto 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth={2.5}
            style={{ width: 26, height: 26 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#12243d",
            marginBottom: 10,
          }}
        >
          Enquiry Received!
        </h3>
        <p
          style={{
            color: "rgba(18,36,61,0.55)",
            fontSize: 14,
            lineHeight: 1.75,
            marginBottom: 20,
          }}
        >
          Thank you{form.name ? `, ${form.name}` : ""}. A senior advisor will
          contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", phone: "", email: "", type: "", message: "" });
          }}
          style={{
            background: "#12243d",
            color: "#fff",
            border: "none",
            borderRadius: 2,
            padding: "0.7rem 1.8rem",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          New Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
    >
      <div className="form-row">
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              color: "#12243d",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: 7,
            }}
          >
            Full Name *
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handle}
            placeholder="Your Name"
            style={inputBase}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              color: "#12243d",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: 7,
            }}
          >
            Phone *
          </label>
          <input
            name="phone"
            required
            value={form.phone}
            onChange={handle}
            placeholder="+91 98000 00000"
            style={inputBase}
          />
        </div>
      </div>
      <div>
        <label
          style={{
            display: "block",
            fontSize: 11,
            fontWeight: 700,
            color: "#12243d",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 7,
          }}
        >
          Email Address
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handle}
          placeholder="abc@example.com"
          style={inputBase}
        />
      </div>
      <div>
        <label
          style={{
            display: "block",
            fontSize: 11,
            fontWeight: 700,
            color: "#12243d",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 7,
          }}
        >
          Enquiry Type
        </label>
        <select
          name="type"
          value={form.type}
          onChange={handle}
          style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
        >
          <option value="">Select a category…</option>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          style={{
            display: "block",
            fontSize: 11,
            fontWeight: 700,
            color: "#12243d",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 7,
          }}
        >
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handle}
          placeholder="Tell us about the project, budget range, preferred location…"
          style={{ ...inputBase, resize: "vertical", lineHeight: 1.65 }}
        />
      </div>
      <button
        type="submit"
        className="submit-btn"
        style={{
          background: "#b8892e",
          color: "#fff",
          border: "none",
          borderRadius: 2,
          padding: "0.9rem 2rem",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: "0.05em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
        }}
      >
        Send Enquiry
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth={2.5}
          style={{ width: 16, height: 16, flexShrink: 0 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
      <p
        style={{
          fontSize: 12,
          color: "rgba(18,36,61,0.4)",
          textAlign: "center",
          marginTop: -4,
        }}
      >
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}

export default function ContactPage() {
  const SP = "clamp(3rem,8vw,5rem) clamp(1.25rem,4vw,2.5rem)";

  return (
    <>
      <style>{css}</style>
      <div
        className="contact-root"
        style={{
          background: "#f7f4ef",
          color: "#12243d",
          fontFamily: "'Georgia', serif",
        }}
      >
        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85"
            alt="Avyaya Developers headquarters"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            className="hero-overlay"
            style={{ position: "absolute", inset: 0 }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background:
                "linear-gradient(90deg,transparent,#b8892e 35%,#d4a84b 65%,transparent)",
              zIndex: 2,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 3,
              maxWidth: 1200,
              margin: "0 auto",
              padding:
                "clamp(5rem,10vw,7rem) clamp(1.25rem,4vw,2.5rem) clamp(4rem,8vw,5rem)",
              width: "100%",
            }}
          >
            <Fade
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 2,
                  background: "#b8892e",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "#b8892e",
                  fontSize: "clamp(9px,2.5vw,11px)",
                  letterSpacing: "0.28em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Get in Touch
              </span>
            </Fade>

            <Fade delay={80}>
              <h1
                style={{
                  fontSize: "clamp(1.8rem,3.4vw,3.2rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                  maxWidth: 620,
                  wordBreak: "break-word",
                }}
              >
                Let's Build Something{" "}
                <span style={{ color: "#b8892e" }}>Extraordinary Together</span>
              </h1>
            </Fade>

            <Fade delay={160}>
              <p
                style={{
                  color: "rgba(255,255,255,0.58)",
                  fontSize: "clamp(0.85rem,1.8vw,1.05rem)",
                  lineHeight: 1.8,
                  maxWidth: 480,
                  marginBottom: "2.5rem",
                }}
              >
                Whether you're looking for a dream home, a strategic commercial
                investment, or expert real estate advisory — our team is ready
                to guide you.
              </p>
            </Fade>

            <Fade delay={220}>
              <div
                className="hero-chips"
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                  marginBottom: "2rem",
                }}
              >
                {[
                  { icon: <IconPhone />, label: "+91 7004397655" },
                  { icon: <IconMail />, label: "info@avyayadevelopers.com" },
                ].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 9,
                      border: "1px solid rgba(184,137,46,0.4)",
                      borderRadius: 2,
                      padding: "0.65rem 1.2rem",
                      background: "rgba(10,20,45,0.45)",
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "clamp(11px,1.5vw,13px)",
                      minWidth: 0,
                      overflow: "hidden",
                    }}
                  >
                    <span style={{ color: "#b8892e", flexShrink: 0 }}>
                      {c.icon}
                    </span>
                    <span
                      className="contact-chip-label"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </Fade>

            <Fade delay={280}>
              <div
                className="hero-ctas"
                style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}
              >
                <a
                  href="#contact-form"
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
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}
                >
                  Send an Enquiry
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2.5}
                    style={{ width: 15, height: 15, flexShrink: 0 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#offices"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 600,
                    padding: "0.9rem 2rem",
                    borderRadius: 2,
                    textDecoration: "none",
                    fontSize: "clamp(12px,1.4vw,14px)",
                    background: "rgba(10,20,45,0.3)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Our Offices
                </a>
              </div>
            </Fade>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 1,
                height: 36,
                background:
                  "linear-gradient(to bottom, rgba(184,137,46,0.8), transparent)",
              }}
            />
          </div>
        </section>

        {/* ── FORM + INFO ── */}
        <section
          id="contact-form"
          style={{ padding: SP, background: "#f7f4ef" }}
        >
          <div
            className="contact-grid"
            style={{ maxWidth: 1200, margin: "0 auto" }}
          >
            {/* FORM */}
            <Fade from="left">
              <div
                style={{
                  background: "#fff",
                  borderRadius: 2,
                  overflow: "hidden",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    background: "#12243d",
                    padding: "1.75rem clamp(1.25rem,3vw,2rem)",
                    borderBottom: "3px solid #b8892e",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 2,
                        background: "#b8892e",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "#b8892e",
                        fontSize: "clamp(9px,2vw,11px)",
                        letterSpacing: "0.28em",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Send an Enquiry
                    </span>
                  </div>
                  <h2
                    style={{
                      color: "#fff",
                      fontSize: "clamp(1rem,2vw,1.3rem)",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    Speak with a Senior Advisor
                  </h2>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.42)",
                      fontSize: 13,
                      marginTop: 6,
                      lineHeight: 1.6,
                    }}
                  >
                    Free consultation · No pressure · Expert guidance
                  </p>
                </div>
                <div style={{ padding: "clamp(1.25rem,3vw,2rem)" }}>
                  <ContactForm />
                </div>
              </div>
            </Fade>

            {/* INFO */}
            <div style={{ minWidth: 0 }}>
              <Fade delay={100}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 2,
                      background: "#b8892e",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: "#b8892e",
                      fontSize: "clamp(9px,2vw,11px)",
                      letterSpacing: "0.28em",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Direct Contact
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.3rem,2.5vw,2rem)",
                    fontWeight: 700,
                    color: "#12243d",
                    marginBottom: "0.6rem",
                    lineHeight: 1.25,
                    wordBreak: "break-word",
                  }}
                >
                  Reach Us Directly
                </h2>
              </Fade>

              <Fade delay={140}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  {[
                    {
                      icon: <IconPhone />,
                      label: "Call Us",
                      value: "+91 7004397655",
                      sub: "Mon – Sat, 10 AM – 7 PM",
                    },
                    {
                      icon: <IconMail />,
                      label: "Email Us",
                      value: "info@avyayadevelopers.com",
                      sub: "We reply within 12 hours",
                    },
                    {
                      icon: <IconPin />,
                      label: "Head Office",
                      value:
                        "Office Number 1529, 15th Floor Galaxy Diamond Plaza, Sector 4 Greater Noida, Uttar Pradesh 201009",
                      sub: "Open for walk-ins",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                        background: "#fff",
                        border: "1px solid #e2d9cc",
                        borderRadius: 2,
                        padding: "1.1rem 1.25rem",
                        minWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          background: "#12243d",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#b8892e",
                          flexShrink: 0,
                        }}
                      >
                        {row.icon}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <p
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#b8892e",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            margin: "0 0 3px",
                          }}
                        >
                          {row.label}
                        </p>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#12243d",
                            margin: "0 0 2px",
                            wordBreak: "break-word",
                          }}
                        >
                          {row.value}
                        </p>
                        <p
                          style={{
                            fontSize: 12,
                            color: "rgba(18,36,61,0.45)",
                            margin: 0,
                          }}
                        >
                          {row.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>

              <Fade delay={200}>
                <div
                  className="whatsapp-strip"
                  style={{
                    background: "#12243d",
                    borderRadius: 2,
                    padding: "1.25rem clamp(1rem,3vw,1.5rem)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 14,
                        margin: 0,
                      }}
                    >
                      Prefer WhatsApp?
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.42)",
                        fontSize: 12,
                        margin: "4px 0 0",
                      }}
                    >
                      Message us directly for quick responses
                    </p>
                  </div>
                  <a
                    href="https://wa.me/917004397655"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "#25d366",
                      color: "#fff",
                      fontWeight: 700,
                      padding: "0.7rem 1.25rem",
                      borderRadius: 2,
                      textDecoration: "none",
                      fontSize: 13,
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <IconWhatsapp /> Chat Now
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── MAP ── */}
        <section
          style={{
            padding: `0 clamp(1.25rem,4vw,2.5rem) clamp(3rem,8vw,5rem)`,
            background: "#fff",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Fade>
              <div
                style={{
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid #e2d9cc",
                }}
              >
                <div
                  className="map-header"
                  style={{
                    background: "#12243d",
                    padding: "0.85rem 1.5rem",
                    borderBottom: "3px solid #b8892e",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#b8892e", flexShrink: 0 }}>
                    <IconPin />
                  </span>
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "clamp(12px,1.5vw,14px)",
                      wordBreak: "break-word",
                    }}
                  >
                    Avyaya Developers – Noida Headquarters
                  </span>
                </div>
                <iframe
                  title="Avyaya Developers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7818344659636!2d77.42722827927595!3d28.606321022581717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4b71461185%3A0xd1989111c49e52fa!2sGalaxy%20Diamond%20Plaza!5e0!3m2!1sen!2sin!4v1781358485127!5m2!1sen!2sin"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Fade>
          </div>
        </section>
      </div>
    </>
  );
}
