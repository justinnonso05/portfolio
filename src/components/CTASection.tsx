import { ExternalLink, CreditCard, Users, Vote, MessageSquare, BookOpen } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    icon: <CreditCard size={22} />,
    title: "DuesPay",
    desc: "Digital payment platform designed for organizations to manage dues collection efficiently. Streamlines payments, tracks member contributions, and provides transparent reporting for treasurers and admins.",
    stack: ["React", "Django"],
    link: "http://nacos-duespay.vercel.app/",
    tag: "Fullstack",
    image: "/duespay.png",
  },

  {
    icon: <Vote size={22} />,
    title: "NACOS Poll",
    desc: "AI-integrated e-voting web app for the Faculty of Computing, University of Ibadan. Built with Next.js, LangChain, and a vector database for intelligent manifesto summarization and Q&A.",
    stack: ["Next.js", "LangChain", "Vector DB"],
    link: "https://nacospoll.vercel.app/admin/login",
    tag: "AI / Fullstack",
    image: "/nacospoll.png",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Voxs",
    desc: "A p2p local file and messages sharing tool that can allow up to three members in a private room to share text and media securely.",
    stack: ["FastAPI", "Next.js"],
    link: "https://voxs.vercel.app",
    tag: "Fullstack",
    image: "/voxs.png",
  },
  {
    icon: <BookOpen size={22} />,
    title: "LUMEN BLOG",
    desc: "A customized blogging website developed for the Department of Political Science at Obafemi Awolowo University. It offers an organized platform for publishing academic articles, news, and departmental updates.",
    stack: ["Django"],
    link: "https://ifepolitikal.vercel.app/",
    tag: "Backend",
    image: "/lumenblog.png",
  },
];

export default function CTASection() {
  return (
    <section
      id="projects"
      className="py-20 md:py-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge mb-4 mx-auto">Projects</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Notable Projects
          </h2>
          <p className="max-w-md mx-auto text-sm" style={{ color: "var(--gray-400)" }}>
            A selection of projects I've built end-to-end.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass-card flex flex-col overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-48 border-b border-[var(--border)]">
                <Image
                  src={p.image || "/duespay.png"}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Icon + tag row */}
                <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,87,34,0.08)",
                    color: "var(--accent)",
                  }}
                >
                  {p.icon}
                </div>
                <span className="section-badge text-xs">{p.tag}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg leading-snug">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--gray-400)" }}>
                {p.desc}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span key={tech} className="skill-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 mt-1"
                style={{ color: "var(--accent)" }}
              >
                View Project <ExternalLink size={13} />
              </a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
