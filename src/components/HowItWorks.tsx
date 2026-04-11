import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "ULININ",
    role: "Backend Developer",
    period: "Aug 2025 – Present",
    location: "Remote",
    bullets: [
      "Built and maintained backend services for the Landmark University Student Portal and HR Management Portal using Express.js and Node.js, handling core functionalities such as user management, authentication, and system operations.",
      "Improved API performance and reliability across both systems by optimizing database queries, implementing structured error handling, and ensuring efficient data flow between services.",
    ],
  },
  {
    company: "Klouto Social Media",
    role: "Backend Developer",
    period: "Nov 2024 – Mar 2025",
    location: "Remote",
    bullets: [
      "Built and maintained REST APIs powering the Klouto mobile application using FastAPI.",
    ],
  },
  {
    company: "AFCFTA e-commerce",
    role: "Backend Developer",
    period: "Contract",
    location: "Remote",
    bullets: [
      "Collaborated with the backend team to develop the APIs powering the AFCFTA e-commerce platform using FastAPI.",
    ],
  },
  {
    company: "Freelance",
    role: "Fullstack Developer",
    period: "2021 – 2024",
    location: "Remote",
    bullets: [
      "Designed and developed Fullstack software systems for clients using Django, FastAPI, and Node.js.",
      "Built and optimized RESTful APIs, ensuring security, scalability, and seamless integration with frontend apps.",
      "Collaborated with frontend developers to deliver complete applications with improved user experience.",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="experience"
      className="py-20 md:py-24 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge mb-4 mx-auto">Experience</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Professional Background
          </h2>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <div key={exp.company + exp.period} className="relative pl-8 pb-10">
              {/* Vertical line */}
              {i < experiences.length - 1 && (
                <div
                  className="absolute left-[0.28rem] top-4 bottom-0 w-0.5"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,87,34,0.3), transparent)",
                  }}
                />
              )}
              {/* Dot */}
              <div className="timeline-dot" />

              {/* Card */}
              <div className="glass-card p-5 ml-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-base">{exp.role}</h3>
                    <div
                      className="flex items-center gap-1.5 mt-0.5 text-sm font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      <Briefcase size={13} />
                      {exp.company}
                    </div>
                  </div>
                  <div
                    className="flex flex-col sm:items-end gap-1 text-xs shrink-0"
                    style={{ color: "var(--gray-400)" }}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="text-sm leading-relaxed flex gap-2"
                      style={{ color: "var(--gray-400)" }}
                    >
                      <span
                        className="mt-2 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--accent-mid)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
