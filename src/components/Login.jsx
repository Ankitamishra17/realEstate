"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Lock, Mail } from "lucide-react";

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .login-root {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'Georgia', 'Times New Roman', serif;
    background: #12243d;
  }

  /* ── LEFT PANEL ── */
  .login-left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(2rem, 5vw, 3.5rem);
    overflow: hidden;
    background: #12243d;
  }

  .login-left-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
  .login-left-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.18;
  }
  .login-left-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(160deg, rgba(18,36,61,0.7) 0%, rgba(18,36,61,0.92) 100%);
    z-index: 1;
  }

  .login-left-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .login-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .login-logo-mark {
    width: 36px;
    height: 36px;
    border: 2px solid #b8892e;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .login-logo-mark::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #b8892e;
    transform: rotate(45deg);
  }
  .login-logo-text {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.04em;
  }
  .login-logo-text span {
    color: #b8892e;
  }

  .login-left-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 4vw, 3rem) 0;
  }

  .left-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.25rem;
  }
  .left-eyebrow-line {
    width: 24px;
    height: 2px;
    background: #b8892e;
  }
  .left-eyebrow-diamond {
    width: 5px;
    height: 5px;
    background: #b8892e;
    transform: rotate(45deg);
  }
  .left-eyebrow span {
    color: #b8892e;
    font-size: 11px;
    letter-spacing: 0.2em;
    font-weight: 700;
    text-transform: uppercase;
  }

  .left-headline {
    font-size: clamp(1.6rem, 3.2vw, 2.8rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 1.25rem;
    letter-spacing: -0.01em;
  }
  .left-headline span {
    color: #b8892e;
  }

  .left-desc {
    color: rgba(255,255,255,0.48);
    font-size: clamp(13px, 1.4vw, 14.5px);
    line-height: 1.85;
    max-width: 380px;
    margin-bottom: 2.5rem;
  }

  .left-stats {
    display: flex;
    gap: 1.25rem;
    flex-wrap: wrap;
  }
  .left-stat {
    border-left: 2px solid rgba(184,137,46,0.4);
    padding-left: 14px;
  }
  .left-stat-val {
    color: #b8892e;
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 800;
    line-height: 1;
    margin-bottom: 4px;
  }
  .left-stat-label {
    color: rgba(255,255,255,0.42);
    font-size: 11px;
    letter-spacing: 0.04em;
  }

  .left-footer {
    color: rgba(255,255,255,0.25);
    font-size: 11.5px;
    letter-spacing: 0.03em;
  }

  /* ── RIGHT PANEL ── */
  .login-right {
    background: #f7f4ef;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3rem);
  }

  .login-card {
    width: 100%;
    max-width: 420px;
  }

  .login-card-header {
    margin-bottom: 2.25rem;
  }
  .login-card-eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  .login-card-eyebrow-line {
    width: 20px;
    height: 2px;
    background: #b8892e;
  }
  .login-card-eyebrow span {
    color: #b8892e;
    font-size: 10.5px;
    letter-spacing: 0.2em;
    font-weight: 700;
    text-transform: uppercase;
  }
  .login-card-title {
    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
    font-weight: 700;
    color: #12243d;
    line-height: 1.2;
    margin-bottom: 8px;
  }
  .login-card-sub {
    color: rgba(18,36,61,0.5);
    font-size: 13.5px;
    line-height: 1.6;
  }

  /* FORM */
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .field-label {
    font-size: 12px;
    font-weight: 700;
    color: rgba(18,36,61,0.65);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .field-wrap {
    position: relative;
  }
  .field-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(18,36,61,0.35);
    width: 15px;
    height: 15px;
    pointer-events: none;
  }
  .field-input {
    width: 100%;
    padding: 0.85rem 1rem 0.85rem 2.6rem;
    border: 1px solid #e2d9cc;
    background: #fff;
    color: #12243d;
    font-size: 14px;
    font-family: inherit;
    border-radius: 2px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .field-input::placeholder {
    color: rgba(18,36,61,0.3);
  }
  .field-input:focus {
    border-color: #b8892e;
    box-shadow: 0 0 0 3px rgba(184,137,46,0.12);
  }
  .field-toggle {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: rgba(18,36,61,0.35);
    padding: 4px;
    display: flex;
    align-items: center;
  }
  .field-toggle:hover {
    color: #b8892e;
  }

  .form-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .remember-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 13px;
    color: rgba(18,36,61,0.6);
    user-select: none;
  }
  .remember-checkbox {
    width: 15px;
    height: 15px;
    accent-color: #b8892e;
    cursor: pointer;
  }
  .forgot-link {
    font-size: 13px;
    color: #b8892e;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
  }
  .forgot-link:hover {
    text-decoration: underline;
  }

  .login-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #b8892e;
    color: #fff;
    border: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    padding: 0.95rem 1.5rem;
    border-radius: 2px;
    cursor: pointer;
    letter-spacing: 0.04em;
    transition: background 0.2s, transform 0.15s;
    margin-top: 0.4rem;
  }
  .login-btn:hover {
    background: #a07828;
    transform: translateY(-1px);
  }
  .login-btn:active {
    transform: translateY(0);
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0.25rem 0;
  }
  .divider-line {
    flex: 1;
    height: 1px;
    background: #e2d9cc;
  }
  .divider-text {
    color: rgba(18,36,61,0.35);
    font-size: 11px;
    letter-spacing: 0.1em;
    white-space: nowrap;
  }

  .signup-row {
    text-align: center;
    font-size: 13px;
    color: rgba(18,36,61,0.5);
    margin-top: 0.25rem;
  }
  .signup-link {
    color: #b8892e;
    font-weight: 700;
    text-decoration: none;
  }
  .signup-link:hover {
    text-decoration: underline;
  }

  .trust-row {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e2d9cc;
  }
  .trust-dot {
    width: 4px;
    height: 4px;
    background: #b8892e;
    border-radius: 50%;
  }
  .trust-text {
    color: rgba(18,36,61,0.38);
    font-size: 11.5px;
    letter-spacing: 0.04em;
  }

  /* ── MOBILE ── */
  @media (max-width: 768px) {
    .login-root {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
    .login-left {
      padding: clamp(1.5rem, 5vw, 2rem);
      min-height: unset;
    }
    .login-left-bg img { opacity: 0.12; }
    .left-headline { font-size: clamp(1.3rem, 5vw, 1.7rem); }
    .left-desc { display: none; }
    .left-stats { gap: 1rem; }
    .left-footer { display: none; }
    .login-left-body { padding: 1.25rem 0 1rem; }
    .login-right {
      padding: clamp(1.5rem, 5vw, 2.5rem) clamp(1.25rem, 5vw, 2rem);
      align-items: flex-start;
    }
    .login-card { max-width: 100%; }
  }

  @media (max-width: 400px) {
    .left-stats { flex-direction: column; gap: 0.75rem; }
    .form-row { flex-direction: column; align-items: flex-start; }
  }
`;

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <>
      <style>{css}</style>
      <div className="login-root">
        {/* ── LEFT PANEL ── */}
        <div className="login-left">
          <div className="login-left-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="login-left-overlay" />

          <div className="login-left-content">
            {/* Logo */}
            <div className="login-logo">
              <div className="login-logo-mark" />
              <span className="login-logo-text">
                AVYAYA <span>DEVELOPERS</span>
              </span>
            </div>

            {/* Body */}
            <div className="login-left-body">
              <div className="left-eyebrow">
                <div className="left-eyebrow-line" />
                <div className="left-eyebrow-diamond" />
                <span>Client Portal</span>
              </div>
              <h2 className="left-headline">
                Your Property Journey,
                <br />
                <span>All in One Place</span>
              </h2>
              <p className="left-desc">
                Track bookings, access documents, follow project milestones, and
                stay connected with our advisory team — all from your personal
                dashboard.
              </p>
              <div className="left-stats">
                {[
                  { v: "9+", l: "Active Projects" },
                  { v: "4", l: "Locations" },
                  { v: "500+", l: "Happy Families" },
                ].map((s) => (
                  <div key={s.l} className="left-stat">
                    <div className="left-stat-val">{s.v}</div>
                    <div className="left-stat-label">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="left-footer">
              © {new Date().getFullYear()} Avyaya Developers — Your Trusted
              Real Estate Partner.
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="login-right">
          <div className="login-card">
            <div className="login-card-header">
              <div className="login-card-eyebrow">
                <div className="login-card-eyebrow-line" />
                <span>Secure Access</span>
              </div>
              <h1 className="login-card-title">Welcome Back</h1>
              <p className="login-card-sub">
                Sign in to your Avyaya client portal to manage your properties
                and bookings.
              </p>
            </div>

            <div className="login-form">
              {/* Email */}
              <div className="field-group">
                <label className="field-label" htmlFor="email">
                  Email Address
                </label>
                <div className="field-wrap">
                  <Mail className="field-icon" />
                  <input
                    id="email"
                    type="email"
                    className="field-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="field-group">
                <label className="field-label" htmlFor="password">
                  Password
                </label>
                <div className="field-wrap">
                  <Lock className="field-icon" />
                  <input
                    id="password"
                    type={showPass ? "text" : "password"}
                    className="field-input"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    style={{ paddingRight: "2.75rem" }}
                  />
                  <button
                    type="button"
                    className="field-toggle"
                    onClick={() => setShowPass((p) => !p)}
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    {showPass ? (
                      <EyeOff style={{ width: 15, height: 15 }} />
                    ) : (
                      <Eye style={{ width: 15, height: 15 }} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="form-row">
                <label className="remember-label">
                  <input
                    type="checkbox"
                    className="remember-checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
                <Link href="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button type="button" className="login-btn">
                Sign In{" "}
                <ArrowRight style={{ width: 15, height: 15, flexShrink: 0 }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
