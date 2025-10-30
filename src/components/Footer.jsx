import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 text-gray-400 border-t border-green-500/20 mt-12">
      <p>© {new Date().getFullYear()} Harshal Patil — Built with ❤️ using React & Vite</p>
    </footer>
  );
}
