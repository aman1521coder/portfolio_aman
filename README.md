# Amanuel Esayase — Portfolio Terminal

A Linux-style interactive terminal portfolio built with React + Vite.
Dark blue/purple hacker aesthetic with matrix rain, boot sequence, and terminal commands.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
npm run preview   # test the build locally
```

The `dist/` folder is ready to deploy to **Vercel**, **Netlify**, **GitHub Pages**, or any static host.

---

## 🛠 Customization

### 1. Update Your Contact Details
Open `src/constants.js` → find `CONTACTS` array and replace:
```js
{ icon: "✉", label: "Email", val: "your@email.com", href: "mailto:your@email.com" },
{ icon: "⬡", label: "GitHub", val: "github.com/yourhandle", ... },
// etc.
```

### 2. Add Your Real Photo
In two places — replace the `src` with your image URL:

**`src/components/CommandOutput.jsx`** (whoami command):
```jsx
<img src="https://YOUR-PHOTO-URL.jpg" alt="Amanuel Esayase" />
```

**`src/components/ContactsWindow.jsx`** (contacts popup):
```jsx
<img src="https://YOUR-PHOTO-URL.jpg" alt="Amanuel Esayase" />
```

> Tip: Upload your photo to [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com) and use the direct link.

### 3. Edit Projects
Open `src/constants.js` → update the `PROJECTS` array with your real work.

### 4. Adjust Skills
Open `src/constants.js` → update the `SKILLS` array with your real percentages.

---

## 📁 Project Structure

```
amanuel-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BootScreen.jsx       # Boot animation sequence
│   │   ├── CommandOutput.jsx    # All terminal command outputs
│   │   ├── ContactsWindow.jsx   # Contacts popup window
│   │   ├── MatrixRain.jsx       # Matrix canvas background
│   │   └── UI.jsx               # Cursor, GlitchText, SkillBar, PromptLine
│   ├── constants.js             # ← Edit your data here
│   ├── App.jsx                  # Main terminal shell
│   └── main.jsx                 # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 💻 Terminal Commands

| Command | Description |
|---|---|
| `whoami` | Profile + photo |
| `neofetch` | System overview |
| `ls projects/` | List all projects |
| `cat projects/<name>` | Project details |
| `cat skills.txt` | Skills with progress bars |
| `contacts` | Open contacts window |
| `upwork` | Upwork stats |
| `sudo hire-me` | 🔒 Easter egg |
| `clear` | Clear terminal |
| `help` | Show all commands |

**Keyboard shortcuts:**
- `↑ / ↓` — navigate command history
- `Tab` — autocomplete commands

---

## 🌐 Deploy to Vercel (1 minute)

```bash
npm install -g vercel
vercel
```

Or drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop).

---

## 🎨 Tech Stack

- **React 18** + **Vite 5**
- **JetBrains Mono** font
- Pure CSS animations (no external animation library)
- Canvas API for matrix rain
- Zero UI framework dependencies
# portfolio_aman
