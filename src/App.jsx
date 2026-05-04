import { useState, useEffect, useRef, useCallback } from "react";
import { K, AUTOCOMPLETE } from "./constants";
import MatrixRain from "./components/MatrixRain";
import BootScreen from "./components/BootScreen";
import ContactsWindow from "./components/ContactsWindow";
import renderCmd from "./components/CommandOutput";
import { Cursor, PromptLine } from "./components/UI";

export default function App() {
  const [booted,   setBooted]   = useState(false);
  const [history,  setHistory]  = useState([]);
  const [cmdHist,  setCmdHist]  = useState([]);
  const [histIdx,  setHistIdx]  = useState(-1);
  const [input,    setInput]    = useState("");
  const [contacts, setContacts] = useState(false);
  const [time,     setTime]     = useState(new Date());

  const inputRef  = useRef();
  const bottomRef = useRef();

  // Clock tick
  useEffect(() => {
    const iv = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(iv);
  }, []);

  // Focus input after boot
  useEffect(() => {
    if (booted) setTimeout(() => inputRef.current?.focus(), 300);
  }, [booted]);

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const run = useCallback((cmd) => {
    const t = cmd.trim().toLowerCase();
    if (!t) return;

    if (t === "clear") {
      setHistory([]);
      setCmdHist(h => [cmd, ...h]);
      setHistIdx(-1);
      return;
    }

    const out = renderCmd(cmd);

    if (out === "__CONTACTS__") {
      setContacts(true);
      setHistory(h => [...h, {
        cmd,
        output: <div style={{ color: K.green, marginTop: 8 }}>▶ Opening contacts window...</div>,
      }]);
      setCmdHist(h => [cmd, ...h]);
      setHistIdx(-1);
      return;
    }

    setHistory(h => [...h, { cmd, output: out }]);
    setCmdHist(h => [cmd, ...h]);
    setHistIdx(-1);
  }, []);

  const onKey = (e) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(histIdx + 1, cmdHist.length - 1);
      setHistIdx(i);
      setInput(cmdHist[i] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = Math.max(histIdx - 1, -1);
      setHistIdx(i);
      setInput(i === -1 ? "" : cmdHist[i] || "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const m = AUTOCOMPLETE.find(o => o.startsWith(input) && o !== input);
      if (m) setInput(m);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${K.bg}; overflow: hidden; }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes scanH {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes headerPulse {
          0%, 100% { text-shadow: 0 0 20px ${K.blue}55; }
          50%       { text-shadow: 0 0 40px ${K.blue}, 0 0 80px ${K.blue}33; }
        }

        .t-input {
          background: transparent;
          border: none;
          outline: none;
          color: ${K.white};
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          flex: 1;
          caret-color: transparent;
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${K.bgDark}; }
        ::-webkit-scrollbar-thumb { background: ${K.borderHot}; border-radius: 2px; }
      `}</style>

      {/* Boot screen */}
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      {/* Contacts popup */}
      {contacts && <ContactsWindow onClose={() => setContacts(false)} />}

      {/* Main terminal */}
      {booted && (
        <div
          style={{
            position: "fixed", inset: 0, background: K.bg,
            fontFamily: "'JetBrains Mono', monospace",
            display: "flex", flexDirection: "column", zIndex: 1,
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Matrix background */}
          <MatrixRain />

          {/* Moving scanline */}
          <div style={{
            position: "fixed", left: 0, right: 0, height: 3,
            background: `linear-gradient(transparent, ${K.blue}1a, transparent)`,
            animation: "scanH 9s linear infinite",
            pointerEvents: "none", zIndex: 50,
          }} />

          {/* CRT lines */}
          <div style={{
            position: "fixed", inset: 0,
            background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px)",
            pointerEvents: "none", zIndex: 50,
          }} />

          {/* Corner brackets */}
          {[
            { top: 0,    left: 0,    borderTop: `2px solid ${K.blue}33`,    borderLeft:   `2px solid ${K.blue}33`  },
            { top: 0,    right: 0,   borderTop: `2px solid ${K.blue}33`,    borderRight:  `2px solid ${K.blue}33`  },
            { bottom: 0, left: 0,    borderBottom: `2px solid ${K.blue}33`, borderLeft:   `2px solid ${K.blue}33`  },
            { bottom: 0, right: 0,   borderBottom: `2px solid ${K.blue}33`, borderRight:  `2px solid ${K.blue}33`  },
          ].map((s, i) => (
            <div key={i} style={{
              position: "fixed", width: 28, height: 28,
              zIndex: 60, pointerEvents: "none", ...s,
            }} />
          ))}

          {/* ── TOP BAR ─────────────────────────────────────────── */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "7px 20px", background: K.bgDark,
            borderBottom: `1px solid ${K.border}`, flexShrink: 0, zIndex: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {[K.red, K.yellow, K.green].map((c, i) => (
                  <div key={i} style={{
                    width: 12, height: 12, borderRadius: "50%",
                    background: c, boxShadow: `0 0 8px ${c}99`, cursor: "pointer",
                  }} />
                ))}
              </div>
              <span style={{ color: K.dimBright, fontSize: 11 }}>
                amanuel@portfolio:~ — bash
              </span>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center", fontSize: 11 }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: K.green, boxShadow: `0 0 8px ${K.green}`,
                  animation: "pulse 2s infinite",
                }} />
                <span style={{ color: K.green }}>ONLINE</span>
              </div>
              <span style={{ color: K.blue }}>CPU 12%</span>
              <span style={{ color: K.purple }}>RAM 4.2G</span>
              <span style={{ color: K.dimBright, letterSpacing: 1 }}>
                {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
              </span>
            </div>
          </div>

          {/* ── PERSONAL HEADER ─────────────────────────────────── */}
          <div style={{ padding: "10px 24px 0", flexShrink: 0, zIndex: 10, animation: "fadeSlide 0.6s ease" }}>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: 8 }}>
              {/* Name */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <span style={{
                  fontSize: "clamp(18px, 3.2vw, 32px)",
                  fontWeight: "bold", letterSpacing: 4,
                  color: K.blue, animation: "headerPulse 4s ease infinite",
                  textShadow: `0 0 30px ${K.blue}88`,
                }}>AMANUEL</span>
                <span style={{
                  fontSize: "clamp(18px, 3.2vw, 32px)",
                  fontWeight: "bold", letterSpacing: 4,
                  color: K.purple, animation: "headerPulse 4s ease infinite 0.5s",
                  textShadow: `0 0 30px ${K.purple}88`,
                }}>ESAYASE</span>
                <span style={{
                  fontSize: "clamp(8px, 1vw, 11px)",
                  color: K.dim, letterSpacing: 2,
                  alignSelf: "flex-end", paddingBottom: 4,
                }}>v2.0.25</span>
              </div>
              {/* Tagline */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                <span style={{ color: K.cyan, fontSize: 12, letterSpacing: 1 }}>{"< "}</span>
                <span style={{ color: K.white, fontSize: 12 }}>
                  Full Stack Engineer who ships ideas into reality
                </span>
                <span style={{ color: K.cyan, fontSize: 12, letterSpacing: 1 }}>{" />"}</span>
              </div>
              {/* Code identity */}
              <div style={{ marginTop: 5, fontSize: 11, color: K.dim }}>
                <span style={{ color: K.blue }}>const</span>
                <span style={{ color: K.white }}> amanuel </span>
                <span style={{ color: K.purple }}>=</span>
                <span style={{ color: K.yellow }}> {"{ "}</span>
                <span style={{ color: K.cyan }}>backend</span>
                <span style={{ color: K.white }}>: </span>
                <span style={{ color: K.green }}>"Golang+Python"</span>
                <span style={{ color: K.white }}>, </span>
                <span style={{ color: K.cyan }}>ai</span>
                <span style={{ color: K.white }}>: </span>
                <span style={{ color: K.green }}>"n8n+LLMs"</span>
                <span style={{ color: K.white }}>, </span>
                <span style={{ color: K.cyan }}>upwork</span>
                <span style={{ color: K.white }}>: </span>
                <span style={{ color: K.green }}>"TopRated+"</span>
                <span style={{ color: K.white }}>, </span>
                <span style={{ color: K.cyan }}>disputes</span>
                <span style={{ color: K.white }}>: </span>
                <span style={{ color: K.blue }}>0</span>
                <span style={{ color: K.yellow }}> {"}"}</span>
              </div>
            </div>
            {/* Skills strip */}
            <div style={{
              display: "flex", gap: 10, paddingBottom: 8,
              borderBottom: `1px solid ${K.border}`,
              flexWrap: "wrap", alignItems: "center",
            }}>
              {[
                ["⬡ Golang · Python", K.cyan],
                ["⬡ React · Next.js", K.blue],
                ["⬡ n8n · AI Agents", K.purple],
                ["⬡ Upwork Top Rated+", K.yellow],
                ["⬡ Remote · Worldwide", K.dimBright],
              ].map(([txt, c]) => (
                <span key={txt} style={{ color: c, fontSize: 11 }}>{txt}</span>
              ))}
            </div>
          </div>

          {/* ── TERMINAL BODY ────────────────────────────────────── */}
          <div style={{
            flex: 1, overflow: "auto",
            padding: "14px 24px", fontSize: 14, lineHeight: 1.6, zIndex: 10,
          }}>
            {/* Welcome hint */}
            <div style={{ marginBottom: 14, animation: "fadeSlide 0.4s ease 0.2s both" }}>
              <div style={{ color: K.dimBright, fontSize: 12 }}>
                Last login: {new Date().toDateString()} pts/0
              </div>
              <div style={{ color: K.dim, fontSize: 12, marginTop: 2 }}>
                Try:{" "}
                {["whoami", "neofetch", "ls projects/", "cat skills.txt", "contacts","clear","help"].map((cmd, i, arr) => (
                  <span key={cmd}>
                    <span
                      style={{ color: K.yellow, cursor: "pointer" }}
                      onClick={() => { setInput(cmd); setTimeout(() => { run(cmd); setInput(""); }, 10); }}
                    >
                      {cmd}
                    </span>
                    {i < arr.length - 1 && <span style={{ color: K.dim }}> · </span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Command history */}
            {history.map((item, i) => (
              <PromptLine key={i} cmd={item.cmd} output={item.output} />
            ))}

            {/* Active input line */}
            <div>
              <div style={{
                display: "flex", alignItems: "baseline",
                flexWrap: "wrap", gap: "0 4px", marginBottom: 1, fontSize: 14,
              }}>
                <span style={{ color: K.blue }}>┌──(</span>
                <span style={{ color: K.purple, fontWeight: "bold" }}>visitor</span>
                <span style={{ color: K.blue }}>㉿</span>
                <span style={{ color: K.cyan, fontWeight: "bold" }}>portfolio</span>
                <span style={{ color: K.blue }}>)-[</span>
                <span style={{ color: K.yellow }}>~</span>
                <span style={{ color: K.blue }}>]</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 14 }}>
                <span style={{ color: K.blue }}>└─</span>
                <span style={{ color: K.red, fontWeight: "bold" }}>$</span>
                <input
                  ref={inputRef}
                  className="t-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKey}
                  autoComplete="off"
                  spellCheck="false"
                  autoFocus
                />
                <Cursor />
              </div>
            </div>

            <div ref={bottomRef} />
          </div>

          {/* ── STATUS BAR ──────────────────────────────────────── */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "4px 18px", background: K.bgDark,
            borderTop: `1px solid ${K.border}`,
            fontSize: 10, color: K.dim,
            flexShrink: 0, flexWrap: "wrap", gap: 6, zIndex: 10,
          }}>
            <div style={{ display: "flex", gap: 16 }}>
              <span style={{ color: K.blue }}>● amanuel-portfolio</span>
              <span>bash 5.2.15</span>
              <span>UTF-8</span>
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              <span><span style={{ color: K.yellow }}>↑↓</span> history</span>
              <span><span style={{ color: K.yellow }}>TAB</span> complete</span>
              <span>cmds: {history.length}</span>
            </div>
            <div>
              <span style={{ color: K.purple }}>Full Stack</span>
              <span style={{ color: K.dim }}> · </span>
              <span style={{ color: K.blue }}>AI Expert</span>
              <span style={{ color: K.dim }}> · </span>
              <span style={{ color: K.yellow }}>Top Rated+</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
