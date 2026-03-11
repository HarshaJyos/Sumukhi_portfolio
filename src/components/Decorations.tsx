"use client";

/**
 * Purely decorative CSS elements scattered across the page.
 * These are fixed/absolute-positioned, pointer-events-none,
 * and only add visual texture — no content changes.
 */
export default function Decorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">

      {/* ═══ Top area (Hero zone) ═══ */}

      {/* Warm morphing blob — top left */}
      <div
        className="absolute top-[8%] left-[3%] w-16 h-16 bg-warm/[0.06]"
        style={{ animation: "morph 12s ease-in-out infinite, float-up 8s ease-in-out infinite" }}
      />

      {/* Small circle — top right */}
      <div
        className="absolute top-[12%] right-[5%] w-3 h-3 rounded-full bg-coral/20"
        style={{ animation: "scale-breathe 4s ease-in-out infinite" }}
      />

      {/* Thin ring — mid left */}
      <div
        className="absolute top-[22%] left-[8%] w-10 h-10 rounded-full border-[2px] border-warm/15"
        style={{ animation: "drift-diagonal 10s ease-in-out infinite" }}
      />

      {/* Tiny dot cluster — right side */}
      <div className="absolute top-[18%] right-[12%] flex gap-2" style={{ animation: "float-down 6s ease-in-out 0.5s infinite" }}>
        <div className="w-1.5 h-1.5 rounded-full bg-navy/10" />
        <div className="w-1.5 h-1.5 rounded-full bg-navy/15" />
        <div className="w-1.5 h-1.5 rounded-full bg-navy/10" />
      </div>


      {/* ═══ Mid area (About / Experience zones) ═══ */}

      {/* Dashed line accent — left gutter */}
      <svg className="absolute top-[32%] left-[4%] w-[2px] h-24 opacity-[0.08]" style={{ animation: "float-up 9s ease-in-out 2s infinite" }}>
        <line x1="1" y1="0" x2="1" y2="96" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-ink" />
      </svg>

      {/* Warm square — rotated */}
      <div
        className="absolute top-[38%] right-[4%] w-6 h-6 rounded-sm bg-warm/[0.07] rotate-45"
        style={{ animation: "sway 5s ease-in-out infinite, drift-x 12s ease-in-out infinite" }}
      />

      {/* Morphing blob — center-left */}
      <div
        className="absolute top-[48%] left-[6%] w-20 h-20 bg-coral/[0.04]"
        style={{ animation: "morph 15s ease-in-out 3s infinite" }}
      />

      {/* Small navy circle */}
      <div
        className="absolute top-[45%] right-[8%] w-4 h-4 rounded-full bg-navy/[0.06]"
        style={{ animation: "float-up 7s ease-in-out 1s infinite" }}
      />

      {/* Cross/Plus shape — left side */}
      <div className="absolute top-[55%] left-[3%] text-warm/[0.1]" style={{ animation: "rotate-slow 30s linear infinite" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <rect x="6" y="0" width="4" height="16" rx="2" />
          <rect x="0" y="6" width="16" height="4" rx="2" />
        </svg>
      </div>

      {/* Dashed ring — right side */}
      <svg className="absolute top-[60%] right-[6%] w-12 h-12 opacity-[0.06]" style={{ animation: "rotate-slow 25s linear reverse infinite" }}>
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-ink" />
      </svg>


      {/* ═══ Bottom area (Projects / Footer zones) ═══ */}

      {/* Warm dot — bottom left */}
      <div
        className="absolute top-[72%] left-[5%] w-5 h-5 rounded-full bg-warm/[0.08]"
        style={{ animation: "scale-breathe 6s ease-in-out 2s infinite" }}
      />

      {/* Small rotated square — bottom right */}
      <div
        className="absolute top-[75%] right-[4%] w-4 h-4 rounded-[3px] border-[1.5px] border-coral/15 rotate-12"
        style={{ animation: "drift-diagonal 8s ease-in-out infinite" }}
      />

      {/* Dot trio — bottom center-left */}
      <div className="absolute top-[82%] left-[15%] flex flex-col gap-2" style={{ animation: "float-down 7s ease-in-out infinite" }}>
        <div className="w-1 h-1 rounded-full bg-warm/15" />
        <div className="w-1.5 h-1.5 rounded-full bg-warm/10" />
        <div className="w-1 h-1 rounded-full bg-warm/15" />
      </div>

      {/* Small morphing blob — bottom right */}
      <div
        className="absolute top-[85%] right-[10%] w-14 h-14 bg-navy/[0.03]"
        style={{ animation: "morph 18s ease-in-out 5s infinite" }}
      />

      {/* Thin vertical dashes — right gutter */}
      <svg className="absolute top-[70%] right-[3%] w-[2px] h-16 opacity-[0.06]" style={{ animation: "float-down 8s ease-in-out 1s infinite" }}>
        <line x1="1" y1="0" x2="1" y2="64" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" className="text-coral" />
      </svg>

      {/* Final accent circle — very bottom */}
      <div
        className="absolute top-[92%] left-[8%] w-3 h-3 rounded-full bg-coral/10"
        style={{ animation: "drift-x 10s ease-in-out infinite" }}
      />
    </div>
  );
}
