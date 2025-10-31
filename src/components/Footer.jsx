import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p style={{color:"var(--muted)"}}>© {new Date().getFullYear()} Harshal Patil — Built with ❤️ using React & Vite</p>
    </footer>
  );
}
