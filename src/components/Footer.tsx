"use client";
import { Mail, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/chinonsoali",              icon: <FaGithub size={16} />,   label: "GitHub" },
  { href: "https://linkedin.com/in/justin-chinonso",     icon: <FaLinkedin size={16} />, label: "LinkedIn" },
  { href: "mailto:chinonsoali2005@gmail.com",            icon: <Mail size={16} />,     label: "Email" },
];

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-14 px-4 sm:px-6"
      style={{
        background: "var(--bg-deep)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-10 justify-between mb-10">
          {/* Brand + bio */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--primary-light)" }}
              >
                <Code2 size={15} className="text-white" />
              </div>
              <span className="text-white font-bold text-base">
                Justin<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gray-400)" }}>
              Backend Engineer building scalable APIs and web systems. Open to
              full-time roles and freelance opportunities.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors duration-200"
                  style={{ color: "var(--gray-500)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--gray-500)")
                  }
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--gray-400)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--gray-400)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--white)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--gray-400)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--gray-400)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:chinonsoali2005@gmail.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--gray-400)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--gray-400)")
                  }
                >
                  chinonsoali2005@gmail.com
                </a>
              </li>
              <li className="text-sm" style={{ color: "var(--gray-400)" }}>
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--gray-500)" }}>
            © {new Date().getFullYear()} Justin Chinonso. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--gray-500)" }}>
            Built with{" "}
            <span style={{ color: "var(--accent)" }}>Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
