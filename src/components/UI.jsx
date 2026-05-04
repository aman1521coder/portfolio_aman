import { useState, useEffect } from "react";
import { K } from "../constants";

// ── BLINKING CURSOR ───────────────────────────────────────────────────
export function Cursor() {
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

// ── GLITCH TEXT ───────────────────────────────────────────────────────
export function GlitchText({ text, color, size }) {
  const G = "!@#$%^&*<>?/|\\01";
  const [d, setD] = useState(text);

  useEffect(() => {
    const go = () => {
      let n = 0;
      const step = () => {
        if (n++ > 8) { setD(text); return; }
        setD(text.split("").map(c =>
          Math.random() < 0.07 ? G[Math.floor(Math.random() * G.length)] : c
        ).join(""));
        setTimeout(step, 70);
      };
      step();
    };
    const iv = setInterval(go, 4000);
    return () => clearInterval(iv);
  }, [text]);

  return (
    <span style={{
      color: color || K.blue, fontSize: size,
      fontWeight: "bold", animation: "headerPulse 4s ease infinite",
    }}>
      {d}
    </span>
  );
}

// ── ANIMATED SKILL BAR ────────────────────────────────────────────────
export function SkillBar({ name, pct, delay = 0 }) {
  const [w, setW] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setW(pct), delay + 120);
    return () => clearTimeout(t);
  }, [pct, delay]);

  const col = pct >= 85 ? K.blue : pct >= 75 ? K.cyan : K.purple;

  return (
    <div style={{ marginBottom: 7 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span style={{ color: K.white, fontSize: 12 }}>{name}</span>
        <span style={{ color: col, fontSize: 11, fontWeight: "bold" }}>{pct}%</span>
      </div>
      <div style={{
        background: K.bgDark, height: 5, borderRadius: 2,
        overflow: "hidden", border: `1px solid ${K.border}`,
      }}>
        <div style={{
          width: `${w}%`, height: "100%",
          background: `linear-gradient(90deg, ${K.blueDim}, ${col})`,
          transition: `width 1s cubic-bezier(.4,0,.2,1) ${delay}ms`,
          boxShadow: `0 0 8px ${col}88`,
        }} />
      </div>
    </div>
  );
}

// ── PROMPT LINE ───────────────────────────────────────────────────────
export function PromptLine({ cmd, output }) {
  return (
    <div style={{ marginBottom: 14, animation: "fadeSlide 0.2s ease" }}>
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
      <div style={{
        display: "flex", alignItems: "baseline",
        gap: 5, flexWrap: "wrap", fontSize: 14,
      }}>
        <span style={{ color: K.blue }}>└─</span>
        <span style={{ color: K.red, fontWeight: "bold" }}>$</span>
        <span style={{ color: K.white }}>{cmd}</span>
      </div>
      {output !== null && output !== undefined && output}
    </div>
  );
}
