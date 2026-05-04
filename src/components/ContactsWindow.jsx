import { useState } from "react";
import { K, CONTACTS } from "../constants";

export default function ContactsWindow({ onClose }) {
  const [cp, setCp] = useState(null);

  const copy = (v, k) => {
    try { navigator.clipboard.writeText(v); } catch (e) {}
    setCp(k);
    setTimeout(() => setCp(null), 1800);
  };

  return (
    <div className="contacts-overlay" style={{
      position: "fixed", inset: 0, zIndex: 300,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(7,8,16,0.88)", backdropFilter: "blur(6px)",
      animation: "fadeIn 0.2s ease",
    }}>
      <div className="contacts-window" style={{
        width: "min(540px, 95vw)",
        background: K.bgPanel,
        border: `1px solid ${K.borderGlow}`,
        boxShadow: `0 0 80px rgba(59,130,246,0.3), 0 0 160px rgba(59,130,246,0.1)`,
        animation: "slideUp 0.3s cubic-bezier(.4,0,.2,1)",
      }}>
        {/* Title bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 16px", background: K.bgDark, borderBottom: `1px solid ${K.border}`,
        }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {[K.red, K.yellow, K.green].map((c, i) => (
                <div key={i} style={{
                  width: 12, height: 12, borderRadius: "50%",
                  background: c, boxShadow: `0 0 8px ${c}99`,
                }} />
              ))}
            </div>
            <span style={{ color: K.dimBright, fontSize: 11, marginLeft: 4 }}>
              contacts.sh — Terminal
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "none", color: K.dimBright,
              cursor: "pointer", fontSize: 18, padding: "0 4px",
              fontFamily: "inherit", transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = K.red}
            onMouseLeave={e => e.target.style.color = K.dimBright}
          >✕</button>
        </div>

        {/* Content */}
        <div className="contacts-content" style={{ padding: 24 }}>
          <div style={{ color: K.cyan, fontSize: 11, letterSpacing: 2, marginBottom: 6 }}>
            $ cat contacts.cfg
          </div>
          <div style={{ color: K.dim, fontSize: 10, marginBottom: 20 }}>
            ── Encrypted contact channels ───────────────────
          </div>

          {/* Photo + Bio strip */}
          <div className="contacts-profile" style={{
            display: "flex", gap: 16, alignItems: "center", marginBottom: 22,
            padding: "14px 16px", background: K.bgCard,
            border: `1px solid ${K.border}`, borderLeft: `3px solid ${K.blue}`,
          }}>
            <div style={{
              width: 68, height: 68, flexShrink: 0,
              border: `2px solid ${K.blue}`, overflow: "hidden",
              position: "relative", boxShadow: `0 0 25px rgba(59,130,246,0.5)`,
            }}>
              {/* ── REPLACE src with your photo URL ── */}
              <img
                src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=amanuel&backgroundColor=111525&primaryColor=3b82f6&secondaryColor=8b5cf6"
                alt="Amanuel Esayase"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(135deg, transparent 55%, ${K.blue}22)`,
              }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ color: K.white, fontWeight: "bold", marginBottom: 3, fontSize: 14 }}>
                Amanuel Esayase
              </div>
              <div style={{ color: K.blue, fontSize: 11, marginBottom: 5 }}>
                Full Stack Dev · AI Automation · n8n Expert
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: K.green, boxShadow: `0 0 10px ${K.green}`,
                  animation: "pulse 2s infinite",
                }} />
                <span style={{ color: K.green, fontSize: 11, fontWeight: "bold" }}>
                  AVAILABLE FOR HIRE
                </span>
              </div>
            </div>
          </div>

          {/* Contact rows */}
          {CONTACTS.map(r => (
            <div
              key={r.label}
              className="contacts-row"
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "9px 14px", marginBottom: 6,
                background: K.bgCard, border: `1px solid ${K.border}`,
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = K.blue;
                e.currentTarget.style.background = "#151c35";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = K.border;
                e.currentTarget.style.background = K.bgCard;
              }}
            >
              <span style={{ color: K.blue, minWidth: 20, textAlign: "center", fontSize: 13 }}>
                {r.icon}
              </span>
              <span className="contacts-label" style={{ color: K.dimBright, minWidth: 70, fontSize: 11 }}>{r.label}</span>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-link"
                style={{ color: K.cyanBright, flex: 1, fontSize: 12, textDecoration: "underline", wordBreak: "break-all" }}
                onClick={e => e.stopPropagation()}
              >
                {r.val}
              </a>
              <button
                onClick={() => copy(r.val, r.label)}
                className="contacts-copy"
                style={{
                  background: "none",
                  border: `1px solid ${cp === r.label ? K.green : K.border}`,
                  color: cp === r.label ? K.green : K.dimBright,
                  cursor: "pointer", padding: "2px 10px",
                  fontSize: 10, fontFamily: "inherit",
                  transition: "all 0.2s", borderRadius: 2,
                }}
              >
                {cp === r.label ? "✓ copied" : "copy"}
              </button>
            </div>
          ))}

          <div style={{
            marginTop: 18, color: K.dim, fontSize: 10, textAlign: "center",
            borderTop: `1px solid ${K.border}`, paddingTop: 14,
          }}>
            ⚡ Avg. response &lt;2h · UTC+3 · Remote worldwide · No agency fees
          </div>
        </div>
      </div>
    </div>
  );
}
