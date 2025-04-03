# 🧠 Interactive Keyboard Viewer

This is a modern 3D interactive keyboard viewer built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Spline](https://spline.design/). It's lightweight, responsive, and designed to run smoothly with zero backend setup.

## 📸 Live Preview

Visit: [https://gitaddmason.dev](https://gitaddmason.dev)

## 🚀 Features

- 🌐 Built with Next.js 14
- 🎨 Styled with Tailwind CSS 3
- 🎮 3D interactive keyboard via Spline iframe
- 💬 In-app instructions + external link button
- 📱 Fully responsive layout
- 🧪 ESLint config with Next.js core-web-vitals rules
- 🧵 Font optimization via `next/font`

## 🛠️ Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/YOUR-USERNAME/keyboard.git
cd keyboard
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
public/
  next.svg            # Default Next.js logo
  vercel.svg          # Vercel logo

src/
  app/
    layout.tsx        # Root layout with Inter font
    globals.css       # Tailwind CSS globals + dark mode vars
    page.tsx          # Main app entry with iframe embed

.eslintrc.json        # Linting rules
.gitignore            # Git ignores
next.config.mjs       # Next.js config
postcss.config.mjs    # PostCSS setup for Tailwind
tailwind.config.ts    # Tailwind theme + content paths
tsconfig.json         # TypeScript config
package.json          # Scripts + dependencies
README.md             # You are here
```

## 🧩 Embedded Spline Scene

The keyboard animation is loaded via Spline:

```tsx
<iframe
  src="https://my.spline.design/keyboard-9df2ae81a4477008e78bb9389260d5bb/"
  style={{ width: '100vw', height: '100vh', border: 'none' }}
></iframe>
```

Try:
- Pressing number keys
- Clicking and dragging to rotate the view

## 📦 Dependencies

```json
"next": "14.2.3",
"react": "^18",
"react-dom": "^18",
"tailwindcss": "^3.4.1",
"typescript": "^5"
```

## 🧹 Linting

Run lint checks with:

```bash
npm run lint
```

## 🖥 Deployment

The app is production-ready and easily deployable to [Vercel](https://vercel.com), Netlify, or any static host.

## 📄 License

MIT — free to use, modify, and distribute.

---

Built with 💚 by [Mason Aviles](https://gitaddmason.dev)
