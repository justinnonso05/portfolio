import { GraduationCap, BookOpen } from "lucide-react";

export default function TrustedBy() {
  return (
    <section
      id="education"
      className="py-14"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="section-badge mb-6 mx-auto text-center w-fit">
          Education
        </div>

        <div className="glass-card p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(74,158,255,0.08)", color: "var(--accent)" }}
          >
            <GraduationCap size={24} />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-white font-bold text-base">
              B.Sc, Computer Science
            </h3>
            <div
              className="flex items-center gap-1.5 mt-1 text-sm"
              style={{ color: "var(--accent)" }}
            >
              <BookOpen size={13} />
              University of Ibadan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
