import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const LINKS = [
    { name: "Home", href: "#hero" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
];
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (_jsxs("nav", { className: "fixed top-0 left-0 w-full bg-black backdrop-blur-sm shadow z-50", children: [_jsxs("div", { className: "max-w-6xl mx-auto px-6 py-3 flex items-center justify-between", children: [_jsx("a", { href: "#hero", className: "text-2xl font-bold text-white", children: "Ceylon Guide" }), _jsx("ul", { className: "hidden md:flex gap-6", children: LINKS.map((link) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-white hover:text-yellow-400 transition-colors", children: link.name }) }, link.name))) }), _jsx("button", { className: "md:hidden p-2 rounded hover:bg-gray-800 text-white", "aria-label": "Toggle menu", "aria-expanded": open, onClick: () => setOpen((s) => !s), children: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("path", { d: open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })] }), open && (_jsx("div", { className: "md:hidden bg-black border-t border-gray-800", children: _jsx("ul", { className: "flex flex-col", children: LINKS.map((link) => (_jsx("li", { className: "border-b border-gray-800 last:border-b-0", children: _jsx("a", { href: link.href, className: "block px-6 py-3 text-white hover:text-yellow-400 transition-colors", onClick: () => setOpen(false), children: link.name }) }, link.name))) }) }))] }));
};
export default Navbar;
