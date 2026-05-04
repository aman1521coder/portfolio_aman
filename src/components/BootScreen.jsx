import { useState, useEffect } from "react";
import { K, BOOT } from "../constants";

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const iv = setInterval(() => setOn(v => !v), 520);
    return () => clearInterval(iv);
  }, []);
  return (
    <span style={{
      display: "inline-block", width: 9, height: 17,
      background: on ? K.cyan : "transparent",
      marginLeft: 2, verticalAlign: "middle",
      boxShadow: on ? `0 0 10px ${K.cyan}, 0 0 20px ${K.cyan}44` : "none",
      transition: "background 0.08s",
    }} />
  );
}

export default function BootScreen({ onDone }) {
  const [lines, setLines] = useState([]);
  const [out, setOut] = useState(false);

  useEffect(() => {
    BOOT.forEach(([ms, col, txt], i) => {
      setTimeout(() => {
        setLines(l => [...l, { col, txt }]);
        if (i === BOOT.length - 1) {
          setTimeout(() => {
            setOut(true);
            setTimeout(onDone, 500);
          }, 500);
        }
      }, ms);
    });
  }, []);

  const cm = {
    blue: K.blue, purple: K.purple, cyan: K.cyan,
    dim: K.dim, white: K.white, yellow: K.yellow, green: K.green,
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: K.bg, zIndex: 999,
      display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center",
      fontFamily: "'JetBrains Mono', monospace",
      opacity: out ? 0 : 1, transition: "opacity 0.5s",
    }}>
      <div style={{ maxWidth: 680, width: "100%", padding: "0 28px" }}>
        {lines.map((l, i) => (
          <div key={i} style={{
            color: cm[l.col] || K.white,
            fontSize: 12, lineHeight: 1.75,
            whiteSpace: "pre",
            animation: "fadeSlide 0.15s ease",
          }}>
            {l.txt || "\u00A0"}
          </div>
        ))}
        {!out && <Cursor />}
      </div>
    </div>
  );
}
