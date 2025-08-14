import React, { useState } from "react";

type NavLink = { name: string; href: string };

const LINKS: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "Destinations", href: "#destinations" },
  { name: "Packages", href: "#packages" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-white">
          Ceylon Guide
        </a>

        <ul className="hidden md:flex gap-6">
          {LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-800 text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {/* Toggle menu icon and close icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.name} className="border-b border-gray-800 last:border-b-0">
                <a
                  href={link.href}
                  className="block px-6 py-3 text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
