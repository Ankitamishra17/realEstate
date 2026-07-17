"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiCloseLine, RiLoader4Line, RiCheckLine } from "react-icons/ri";

// Change this to wherever your PHP file is hosted
const PHP_ENDPOINT = "https://avyayadeveloper.com/send-lead.php";

export default function LeadFormModal({ isOpen, destination, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  if (!isOpen) return null;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const resetAndClose = () => {
    setFormData({ name: "", phone: "", email: "", message: "" });
    setStatus("idle");
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("phone", formData.phone);
      body.append("email", formData.email);
      body.append("message", formData.message);
      body.append("source", destination || "");

      const res = await fetch(PHP_ENDPOINT, { method: "POST", body });
      const data = await res.json();

      if (!data.success) throw new Error(data.message || "Failed");

      setStatus("success");
      setTimeout(() => {
        resetAndClose();
        if (destination) router.push(destination);
      }, 1100);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={() => status !== "loading" && resetAndClose()}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15,31,61,.72)",
          backdropFilter: "blur(6px)",
        }}
      />

      <div
        className="cor"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 420,
          background: "#FAFAF8",
          borderRadius: 22,
          padding: "40px 36px",
          border: "1px solid #E8E3DA",
          boxSizing: "border-box",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={resetAndClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#8A8A8A",
            fontSize: 20,
            display: "flex",
          }}
        >
          <RiCloseLine />
        </button>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "#FDF6EC",
                color: "#B08B4C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                fontSize: 24,
              }}
            >
              <RiCheckLine />
            </div>
            <h3
              className="cor"
              style={{ fontSize: 22, fontWeight: 700, color: "#0F1F3D" }}
            >
              Thank you!
            </h3>
            <p
              className="out"
              style={{ fontSize: 13, color: "#8A8A8A", marginTop: 6 }}
            >
              Taking you there now...
            </p>
          </div>
        ) : (
          <>
            <span
              className="mono"
              style={{
                fontSize: 9,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#B08B4C",
                display: "block",
                marginBottom: 10,
              }}
            >
              One Quick Step
            </span>
            <h3
              className="cor"
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#0F1F3D",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Share Your Details
            </h3>
            <p
              className="out"
              style={{
                fontSize: 13,
                color: "#8A8A8A",
                fontWeight: 300,
                marginBottom: 26,
              }}
            >
              We'll take you straight to the page after this.
            </p>

            <form
              onSubmit={handleSubmit}
              className="out"
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  padding: "13px 16px",
                  borderRadius: 10,
                  border: "1px solid #E8E3DA",
                  outline: "none",
                  fontSize: 13,
                  fontFamily: "Outfit, sans-serif",
                  background: "#fff",
                }}
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  padding: "13px 16px",
                  borderRadius: 10,
                  border: "1px solid #E8E3DA",
                  outline: "none",
                  fontSize: 13,
                  fontFamily: "Outfit, sans-serif",
                  background: "#fff",
                }}
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={{
                  padding: "13px 16px",
                  borderRadius: 10,
                  border: "1px solid #E8E3DA",
                  outline: "none",
                  fontSize: 13,
                  fontFamily: "Outfit, sans-serif",
                  background: "#fff",
                }}
              />
              <textarea
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                style={{
                  padding: "13px 16px",
                  borderRadius: 10,
                  border: "1px solid #E8E3DA",
                  outline: "none",
                  fontSize: 13,
                  fontFamily: "Outfit, sans-serif",
                  background: "#fff",
                  resize: "none",
                }}
              />

              {status === "error" && (
                <p style={{ fontSize: 12, color: "#9B1C1C" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="lead-submit-btn"
                style={{
                  marginTop: 6,
                  padding: "14px",
                  borderRadius: 11,
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  border: "none",
                  cursor: "pointer",
                  background: "#B08B4C",
                  color: "#fff",
                  fontWeight: 600,
                  fontFamily: "Outfit, sans-serif",
                  letterSpacing: ".03em",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
              >
                {status === "loading" ? (
                  <>
                    <RiLoader4Line
                      style={{ animation: "spin 1s linear infinite" }}
                    />
                    Sending...
                  </>
                ) : (
                  "Submit & Continue"
                )}
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        .lead-submit-btn:hover:not(:disabled) {
          background: #C9A96E !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(176,139,76,.35);
        }
        .lead-submit-btn { transition: background .25s, transform .2s, box-shadow .25s; }
      `}</style>
    </div>
  );
}
