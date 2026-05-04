import { K, PROJECTS, SKILLS, HELP_CMDS } from "../constants";
import { SkillBar, GlitchText } from "./UI";

// ── WHOAMI PHOTO BLOCK ────────────────────────────────────────────────
function PhotoBlock() {
  return (
    <div style={{ marginTop: 10, display: "flex", gap: 22, flexWrap: "wrap", alignItems: "flex-start" }}>
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: -5, border: `1px solid ${K.blue}44` }} />
        <div style={{ position: "absolute", inset: -10, border: `1px solid ${K.blue}18` }} />
        <div style={{ position: "absolute", top: -12, left: 4, color: K.dim, fontSize: 9 }}>┌─[photo.jpg]</div>
        <div style={{
          width: 165, height: 195, background: K.bgCard,
          border: `2px solid ${K.blue}`, overflow: "hidden",
          position: "relative",
          boxShadow: `0 0 50px rgba(59,130,246,0.35), 0 0 100px rgba(59,130,246,0.1)`,
        }}>
          {/* ── REPLACE src with your actual photo URL ── */}
          <img
            src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=devamanuel&backgroundColor=111525&primaryColor=3b82f6&secondaryColor=8b5cf6"
            alt="Amanuel Esayase"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(180deg, transparent 55%, ${K.bg}dd)`,
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.1) 3px,rgba(0,0,0,0.1) 4px)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: 8, left: 0, right: 0,
            textAlign: "center", color: K.blue, fontSize: 10, fontWeight: "bold",
          }}>
            [ DEVELOPER ]
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 5, color: K.dim, fontSize: 9 }}>
          photo.jpg · 165×195
        </div>
      </div>

      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ marginBottom: 10 }}>
          <GlitchText text="root@portfolio:~#" color={K.yellow} size={13} />
        </div>
        {[
          ["uid",    "1337(developer) gid=1337(sudo)"],
          ["name",   "Amanuel Esayase"],
          ["role",   "Full Stack Developer"],
          ["stack",  "Golang · Python · React · n8n"],
          ["xp",     "5+ years in production systems"],
          ["upwork", "Top Rated Plus Freelancer"],
          ["loc",    "Remote · Available Worldwide"],
          ["uptime", "100% · $0 disputes · 50+ jobs"],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", gap: 8, marginBottom: 5, fontSize: 12 }}>
            <span style={{ color: K.blue, minWidth: 72 }}>{k}:</span>
            <span style={{ color: K.white }}>{v}</span>
          </div>
        ))}
        <div style={{
          marginTop: 12, display: "flex", gap: 8, alignItems: "center",
          padding: "8px 12px", background: K.bgCard, border: `1px solid ${K.green}44`,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: K.green, boxShadow: `0 0 12px ${K.green}`,
            animation: "pulse 2s infinite",
          }} />
          <span style={{ color: K.green, fontWeight: "bold", fontSize: 12 }}>
            ONLINE — AVAILABLE FOR PROJECTS
          </span>
        </div>
      </div>
    </div>
  );
}

// ── RENDER COMMAND ────────────────────────────────────────────────────
export default function renderCmd(raw) {
  const t = raw.trim().toLowerCase();

  // HELP
  if (t === "help") return (
    <div style={{ marginTop: 10 }}>
      <div style={{ color: K.blue, fontSize: 11, marginBottom: 10, lineHeight: 1.6 }}>
        ╔══════════════════════════════════════════════════╗<br />
        ║{"  "}<span style={{ color: K.yellow, letterSpacing: 3 }}>COMMAND REFERENCE</span>{"                            "}║<br />
        ╚══════════════════════════════════════════════════╝
      </div>
      <div style={{ display: "grid", gap: 3 }}>
        {HELP_CMDS.map(([c, d]) => (
          <div key={c} style={{ display: "flex", gap: 10, padding: "4px 8px", borderBottom: `1px solid ${K.dim}22`, flexWrap: "wrap" }}>
            <span style={{ color: K.cyan, minWidth: "min(220px, 100%)", fontSize: 12 }}>{c}</span>
            <span style={{ color: K.dimBright, fontSize: 12, flex: 1, minWidth: 180 }}>— {d}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // WHOAMI
  if (t === "whoami") return <PhotoBlock />;

  // NEOFETCH
  if (t === "neofetch") return (
    <div style={{ marginTop: 10, display: "flex", gap: 28, flexWrap: "wrap" }}>
      <pre style={{ color: K.blue, margin: 0, fontSize: 11, lineHeight: 1.4, textShadow: `0 0 15px ${K.blue}` }}>{`
     ,.......        
   .::::::::::::..   
  ::::::::::::::::::  
 ::::::xXXXXXx:::::  
::::::XXXXXXXXXX:::: 
::::::XXXXXXXXXX:::: 
::::::xXXXXXXXx::::: 
 ::::::::::::::::::  
  ::::::::::::::::   
    .::::::::::::.   
       .:::::::.     `}</pre>
      <div style={{ paddingTop: 2 }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: K.blue, fontWeight: "bold" }}>visitor</span>
          <span style={{ color: K.white }}>@</span>
          <span style={{ color: K.purple, fontWeight: "bold" }}>amanuel-portfolio</span>
        </div>
        <div style={{ color: K.dim, marginBottom: 10, fontSize: 11 }}>─────────────────────────────</div>
        {[
          ["OS",      "Portfolio Linux 2024.1",       K.blue],
          ["Kernel",  "6.8.0 portfolio-sh",           K.white],
          ["Backend", "Golang · Python · FastAPI",    K.cyan],
          ["Frontend","React · Next.js · TS",         K.cyan],
          ["AI/Auto", "n8n · LangChain · Agents",     K.purple],
          ["Database","PostgreSQL · Redis · Mongo",   K.white],
          ["Cloud",   "AWS · GCP · Docker · K8s",     K.white],
          ["Upwork",  "Top Rated Plus · 98% JSS",     K.yellow],
          ["Uptime",  "5yr · 50+ jobs · $0 disputes", K.green],
          
        ].map(([k, v, c]) => (
          <div key={k} style={{ marginBottom: 5, fontSize: 12 }}>
            <span style={{ color: K.blue }}>{k}: </span>
            <span style={{ color: c }}>{v}</span>
          </div>
        ))}
        <div style={{ marginTop: 12, display: "flex", gap: 5 }}>
          {[K.bgDark, K.blue, K.purple, K.cyan, K.yellow, K.orange, K.white].map(c => (
            <div key={c} style={{
              width: 18, height: 18, background: c,
              border: `1px solid ${K.border}`, boxShadow: `0 0 4px ${c}55`,
            }} />
          ))}
        </div>
      </div>
    </div>
  );

  // LS PROJECTS
  if (t === "ls projects/" || t === "ls projects" || t === "ls") return (
    <div style={{ marginTop: 10 }}>
      <div style={{ color: K.dimBright, fontSize: 11, marginBottom: 10 }}>
        drwxr-xr-x {PROJECTS.length} projects {new Date().toDateString()}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: 8 }}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.name}
            style={{
              display: "flex", gap: 10, alignItems: "center",
              padding: "9px 13px", background: K.bgCard,
              border: `1px solid ${K.border}`,
              animation: `fadeSlide 0.2s ease ${i * 60}ms both`,
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = K.blue; e.currentTarget.style.background = "#151c35"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = K.border; e.currentTarget.style.background = K.bgCard; }}
          >
            <span style={{ color: K.blue, fontSize: 16 }}>📁</span>
            <div>
              <div style={{ color: K.cyanBright, fontSize: 12 }}>{p.name}/</div>
              <div style={{ color: K.dim, fontSize: 10 }}>{p.rating} · {p.status}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, color: K.dim, fontSize: 11 }}>
        Hint: <span style={{ color: K.yellow }}>cat projects/&lt;name&gt;</span>
      </div>
    </div>
  );

  // CAT PROJECT
  const cm = raw.trim().match(/^cat projects\/(.+)/i);
  if (cm) {
    const nm = cm[1].replace(/\.txt|\.md/g, "");
    const p = PROJECTS.find(x => x.name === nm || x.name.includes(nm.toLowerCase()));
    if (!p) return (
      <div style={{ color: K.red, marginTop: 8 }}>
        cat: projects/{nm}: No such file or directory
      </div>
    );
    return (
      <div style={{ marginTop: 10 }}>
        <div style={{ color: K.yellow, fontWeight: "bold", fontSize: 15, marginBottom: 4 }}>{p.title}</div>
        <div style={{ color: K.dim, fontSize: 10, marginBottom: 14 }}>── {p.name} ─────────────────</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 8, maxWidth: 500, marginBottom: 14 }}>
          {[["Stack", p.stack, K.cyan], ["Status", p.status, K.green], ["Rating", p.rating, K.yellow]].map(([k, v, c]) => (
            <div key={k} style={{ padding: "9px 13px", background: K.bgCard, border: `1px solid ${K.border}` }}>
              <div style={{ color: K.dimBright, fontSize: 10, marginBottom: 3 }}>{k}</div>
              <div style={{ color: c, fontWeight: "bold", fontSize: 11 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{
          padding: "12px 16px", background: K.bgCard,
          borderLeft: `3px solid ${K.blue}`, color: K.white, lineHeight: 1.7, fontSize: 13,
        }}>
          {p.desc}
        </div>
      </div>
    );
  }

  // SKILLS
  if (t === "cat skills.txt" || t === "skills") return (
    <div style={{ marginTop: 10 }}>
      <div style={{ color: K.cyan, letterSpacing: 2, fontSize: 11, marginBottom: 16 }}>
        ▓▓▓ SKILLS.TXT — LOADING MODULES ▓▓▓
      </div>
      {SKILLS.map((s, si) => (
        <div key={s.cat} style={{ marginBottom: 18, animation: `fadeSlide 0.3s ease ${si * 80}ms both` }}>
          <div style={{ color: K.purple, fontWeight: "bold", marginBottom: 8, fontSize: 12, letterSpacing: 1 }}>
            [{s.cat}]
          </div>
          <div style={{ paddingLeft: 16 }}>
            {s.items.map(([name, pct], ii) => (
              <SkillBar key={name} name={name} pct={pct} delay={si * 90 + ii * 55} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // CONTACTS — signal to parent
  if (t === "contacts" || t === "contact" || t === "cat contact.txt") return "__CONTACTS__";

  // UPWORK
  if (t === "upwork") return (
    <div style={{ marginTop: 10 }}>
      <div style={{ color: K.yellow, letterSpacing: 2, fontSize: 11, marginBottom: 16 }}>▓▓▓ UPWORK PROFILE ▓▓▓</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 10, maxWidth: 520, marginBottom: 16 }}>
        {[
          ["Job Success","98%",K.green], ["Rating","4.97/5",K.yellow], ["Total Jobs","50+",K.cyan],
          ["Hours","1,200+",K.blue], ["Status","Top Rated+",K.orange], ["Repeat","70%+",K.purple],
        ].map(([k, v, c]) => (
          <div key={k} style={{ padding: "12px 14px", background: K.bgCard, border: `1px solid ${K.border}`, textAlign: "center" }}>
            <div style={{ color: K.dimBright, fontSize: 10, marginBottom: 4 }}>{k}</div>
            <div style={{ color: c, fontWeight: "bold", fontSize: 20 }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 14px", background: K.bgCard, borderLeft: `3px solid ${K.orange}`, color: K.white, fontSize: 12, lineHeight: 1.8 }}>
        Specializing in:{" "}
        <span style={{ color: K.cyan }}>AI Automation</span> ·{" "}
        <span style={{ color: K.blue }}>Backend Systems</span> ·{" "}
        <span style={{ color: K.purple }}>Full Stack Apps</span>
      </div>
    </div>
  );

  // HIRE ME
  if (t === "sudo hire-me" || t === "hire-me") return (
    <div style={{ marginTop: 10 }}>
      <div style={{ color: K.red, marginBottom: 8 }}>[sudo] password for visitor: ●●●●●●●●</div>
      <div style={{ color: K.green, marginBottom: 4 }}>✓ Authentication successful — root access granted</div>
      <div style={{ marginTop: 12 }}>
        <div style={{ color: K.yellow, fontWeight: "bold", letterSpacing: 2, marginBottom: 12 }}>
          INITIATING HIRE SEQUENCE v2.0...
        </div>
        {[
          "Verifying skill matrix...      [██████████] 100%",
          "Checking availability...       [██████████] 100%",
          "Generating project proposal... [██████████] 100%",
          "Deploying awesomeness...       [██████████] 100%",
        ].map((l, i) => (
          <div key={i} style={{ color: i < 3 ? K.green : K.cyan, marginBottom: 4, animation: `fadeSlide 0.2s ease ${i * 200}ms both` }}>
            {l}
          </div>
        ))}
        <div style={{ marginTop: 16, padding: "14px 18px", background: K.bgCard, borderLeft: `3px solid ${K.green}`, color: K.white, lineHeight: 1.9 }}>
          🚀 <strong style={{ color: K.green }}>Excellent choice.</strong><br />
          Top Rated Plus · Fast delivery · Clean architecture · Zero disputes<br />
          <span style={{ color: K.cyan }}>→ Type <strong>contacts</strong> to get started now</span>
        </div>
      </div>
    </div>
  );

  // CLEAR — signal to parent
  if (t === "clear") return "__CLEAR__";

  // EMPTY
  if (!t) return null;

  // NOT FOUND
  return (
    <div style={{ marginTop: 8 }}>
      <span style={{ color: K.red }}>bash: {raw}: command not found</span>
      <span style={{ color: K.dim }}> — type </span>
      <span style={{ color: K.yellow }}>help</span>
    </div>
  );
}
