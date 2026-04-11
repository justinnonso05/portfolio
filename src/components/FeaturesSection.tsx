import {
  Server,
  Globe,
  Database,
  Wrench,
  Cloud,
  Brain,
} from "lucide-react";

const skillGroups = [
  {
    icon: <Server size={18} />,
    title: "Backend",
    skills: ["Python", "Django", "FastAPI", "Node.js", "Express", "Nest.js"],
  },
  {
    icon: <Globe size={18} />,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: <Database size={18} />,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Vector DBs"],
  },
  {
    icon: <Wrench size={18} />,
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "Postman", "Swagger"],
  },
  {
    icon: <Cloud size={18} />,
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS", "CI/CD", "GitHub Actions"],
  },
  {
    icon: <Brain size={18} />,
    title: "Data Science & AI/ML",
    skills: ["LangChain", "Gemini API", "Prompt Engineering"],
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-24"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge mb-4 mx-auto">Skills</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Technologies I work with
          </h2>
          <p className="max-w-md mx-auto text-sm" style={{ color: "var(--gray-400)" }}>
            A range of tools and frameworks I use to build reliable, scalable systems.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,87,34,0.10)",
                    color: "var(--accent)",
                  }}
                >
                  {group.icon}
                </div>
                <h3 className="text-white font-semibold text-sm">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
