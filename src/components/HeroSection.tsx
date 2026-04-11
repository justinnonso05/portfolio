"use client";
import Image from "next/image";
import { Mail, MapPin, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="flex-1 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 py-20 md:py-28 relative z-10 max-w-6xl mx-auto w-full gap-10 md:gap-16"
    >
      {/* Text Content */}
      <div className="flex-1 max-w-2xl">
        {/* Badge */}
        <div className="section-badge animate-fade-up mb-5 mx-auto md:mx-0">
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: "var(--accent)" }}
          />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up-d1 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-3"
        >
          Justin{" "}
          <span style={{ color: "var(--accent)" }}>Chinonso</span>
        </h1>

        {/* Title */}
        <p
          className="animate-fade-up-d2 text-lg sm:text-xl md:text-2xl font-semibold mb-4"
          style={{ color: "var(--gray-300)" }}
        >
          Backend Engineer &amp; Fullstack Developer
        </p>

        {/* Location */}
        <div
          className="animate-fade-up-d2 flex items-center justify-center md:justify-start gap-1.5 text-sm mb-5"
          style={{ color: "var(--gray-400)" }}
        >
          <MapPin size={14} />
          Lagos, Nigeria
        </div>

        {/* Bio */}
        <p
          className="animate-fade-up-d3 text-base leading-relaxed mb-8"
          style={{ color: "var(--gray-400)" }}
        >
          Backend-focused Fullstack Engineer with 4 years of experience building
          scalable APIs and web applications. Strong in{" "}
          <span style={{ color: "var(--gray-200)" }}>
            Python, Django, FastAPI, and Node.js
          </span>
          , with hands-on experience deploying production systems and integrating
          AI features.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-d3 flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start mb-10">
          <a
            href="#projects"
            className="btn-primary text-base px-7 py-3"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="btn-outline text-base px-7 py-3"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="animate-fade-up-d4 flex items-center justify-center md:justify-start gap-5">
          {[
            {
              href: "https://github.com/chinonsoali",
              icon: <FaGithub size={22} />,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/justin-chinonso",
              icon: <FaLinkedin size={22} />,
              label: "LinkedIn",
            },
            {
              href: "mailto:chinonsoali2005@gmail.com",
              icon: <Mail size={22} />,
              label: "Email",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-colors duration-200 p-1"
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

        {/* Stats row */}
        <div
          className="animate-fade-up-d4 mt-12 flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12"
        >
          {[
            { value: "4+",  label: "Years Experience" },
            { value: "10+", label: "Projects Shipped" },
            { value: "3+",  label: "Companies" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div
                className="text-2xl font-black"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs mt-1 uppercase tracking-widest"
                style={{ color: "var(--gray-400)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar column (shows on desktop on the right side) */}
      <div className="animate-fade-in shrink-0 hidden md:block">
        <div className="avatar-ring animate-float inline-block">
          <Image
            src="/avatar.png"
            alt="Justin Chinonso"
            width={280}
            height={280}
            className="rounded-full object-cover shadow-2xl shadow-orange-500/10"
            priority
          />
        </div>
      </div>
      
    </section>
  );
}
