"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="navbar-bar"
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.85)"
          : "transparent",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "var(--primary-light)" }}
        >
          <Code2 size={16} className="text-white" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">
          JC<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </Link>

      {/* Centered nav pill — desktop */}
      <div className="hidden md:flex nav-pill items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href} className="nav-link">
            {l.label}
          </Link>
        ))}
      </div>

      {/* Right CTA — desktop */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="mailto:chinonsoali2005@gmail.com"
          className="btn-primary text-sm px-5 py-2"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-2 ml-auto"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 p-5 flex flex-col gap-1 z-50"
          style={{
            background: "rgba(0, 0, 0, 0.98)",
            borderBottom: "1px solid var(--border)",
            backdropFilter: "blur(12px)",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-white/70 hover:text-white py-2.5 px-3 rounded-lg transition-colors hover:bg-white/5 text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:chinonsoali2005@gmail.com"
            className="btn-primary mt-3 justify-center text-sm"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
