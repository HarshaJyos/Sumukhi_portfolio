"use client";

/**
 * Playful decorative elements: sparkles, stars, lightning bolts, circles
 * scattered throughout the page for visual energy and personality.
 */

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
    </svg>
  );
}

function Lightning({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function StarShape({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

export default function Decorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">

      {/* ═══ Hero area sparkles ═══ */}

      {/* Pink sparkle — top left */}
      <div
        className="absolute top-[6%] left-[4%] text-pink/25"
        style={{ animation: "sparkle-spin 8s ease-in-out infinite" }}
      >
        <Sparkle className="w-5 h-5" />
      </div>

      {/* Yellow sparkle — top right */}
      <div
        className="absolute top-[8%] right-[7%] text-yellow/30"
        style={{ animation: "sparkle-spin 6s ease-in-out 1s infinite" }}
      >
        <Sparkle className="w-4 h-4" />
      </div>

      {/* Small circles — dot cluster */}
      <div className="absolute top-[15%] right-[12%] flex gap-1.5" style={{ animation: "float-down 6s ease-in-out infinite" }}>
        <div className="w-2 h-2 rounded-full bg-pink/15" />
        <div className="w-2 h-2 rounded-full bg-yellow/20" />
        <div className="w-2 h-2 rounded-full bg-pink/15" />
      </div>

      {/* ═══ About zone ═══ */}

      {/* Lightning bolt — left */}
      <div
        className="absolute top-[28%] left-[3%] text-yellow/20"
        style={{ animation: "float-up 7s ease-in-out infinite" }}
      >
        <Lightning className="w-6 h-6" />
      </div>

      {/* Pink circle ring */}
      <div
        className="absolute top-[32%] right-[5%] w-8 h-8 rounded-full border-[2.5px] border-pink/15"
        style={{ animation: "drift-diagonal 10s ease-in-out infinite" }}
      />

      {/* Star — mid left */}
      <div
        className="absolute top-[38%] left-[6%] text-lavender/25"
        style={{ animation: "sway 5s ease-in-out infinite" }}
      >
        <StarShape className="w-4 h-4" />
      </div>

      {/* ═══ Skills / Experience zone ═══ */}

      {/* Morphing blob — warm */}
      <div
        className="absolute top-[45%] right-[4%] w-14 h-14 bg-yellow/[0.06]"
        style={{ animation: "morph 14s ease-in-out infinite" }}
      />

      {/* Sparkle — center left */}
      <div
        className="absolute top-[50%] left-[3%] text-pink/15"
        style={{ animation: "sparkle-spin 10s ease-in-out 2s infinite" }}
      >
        <Sparkle className="w-3 h-3" />
      </div>

      {/* Cross/plus shape */}
      <div
        className="absolute top-[55%] right-[6%] text-yellow/15"
        style={{ animation: "rotate-slow 25s linear infinite" }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <rect x="6" y="0" width="4" height="16" rx="2" />
          <rect x="0" y="6" width="16" height="4" rx="2" />
        </svg>
      </div>

      {/* ═══ Projects zone ═══ */}

      {/* Lightning — right */}
      <div
        className="absolute top-[62%] right-[4%] text-pink/15"
        style={{ animation: "float-up 6s ease-in-out 1.5s infinite" }}
      >
        <Lightning className="w-5 h-5" />
      </div>

      {/* Small yellow dot */}
      <div
        className="absolute top-[68%] left-[5%] w-3 h-3 rounded-full bg-yellow/15"
        style={{ animation: "scale-breathe 5s ease-in-out infinite" }}
      />

      {/* Dashed circle */}
      <svg
        className="absolute top-[72%] right-[7%] w-10 h-10 opacity-[0.08]"
        style={{ animation: "rotate-slow 20s linear reverse infinite" }}
      >
        <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-pink" />
      </svg>

      {/* ═══ Contact / Footer zone ═══ */}

      {/* Star — bottom left */}
      <div
        className="absolute top-[82%] left-[6%] text-yellow/20"
        style={{ animation: "sparkle-spin 7s ease-in-out infinite" }}
      >
        <StarShape className="w-5 h-5" />
      </div>

      {/* Pink ring — bottom right */}
      <div
        className="absolute top-[85%] right-[8%] w-6 h-6 rounded-full border-2 border-pink/10"
        style={{ animation: "drift-x 9s ease-in-out infinite" }}
      />

      {/* Dot trio — vertical */}
      <div className="absolute top-[90%] left-[12%] flex flex-col gap-1.5" style={{ animation: "float-down 7s ease-in-out infinite" }}>
        <div className="w-1.5 h-1.5 rounded-full bg-pink/15" />
        <div className="w-2 h-2 rounded-full bg-yellow/10" />
        <div className="w-1.5 h-1.5 rounded-full bg-pink/15" />
      </div>

      {/* Sparkle — very bottom */}
      <div
        className="absolute top-[94%] right-[15%] text-lavender/15"
        style={{ animation: "float-up 8s ease-in-out infinite" }}
      >
        <Sparkle className="w-3 h-3" />
      </div>
    </div>
  );
}
