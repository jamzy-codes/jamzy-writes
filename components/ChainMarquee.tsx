import Image from "next/image";

const CHAINS = [
  { name: "Ethereum", icon: "/chains/ethereum.svg" },
  { name: "Solana", icon: "/chains/solana.svg" },
  { name: "Polygon", icon: "/chains/polygon.svg" },
];

const REPEATED_CHAINS = [...CHAINS, ...CHAINS];

function ChainBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <span
      className="flex shrink-0 items-center gap-2 whitespace-nowrap globe-text font-medium"
      style={{
        fontSize: "clamp(0.95rem, 1.3vw, 1.25rem)",
      }}
    >
      <Image
        src={icon}
        alt={name}
        width={20}
        height={20}
        className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] shrink-0"
      />
      {name}
    </span>
  );
}

export default function ChainMarquee() {
  return (
    <div className="relative z-[2] w-full max-w-full">
      {/* ── Desktop & Tablet: Single continuous horizontal row ── */}
      <div className="hidden sm:flex items-center justify-center flex-nowrap gap-3 md:gap-4 lg:gap-5 whitespace-nowrap">
        <span
          className="globe-text font-semibold tracking-[-0.01em]"
          style={{
            fontSize: "clamp(1.2rem, 1.8vw, 1.8rem)",
          }}
        >
          Protocols documented across
        </span>

        <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
          {CHAINS.map((c, idx) => (
            <div key={c.name} className="flex items-center gap-3 md:gap-4 lg:gap-5">
              {idx > 0 && (
                <span className="globe-text-muted opacity-40 text-xs select-none">•</span>
              )}
              <ChainBadge name={c.name} icon={c.icon} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: Headline + Continuous Left-to-Right Marquee ── */}
      <div className="sm:hidden w-full flex flex-col items-center gap-3.5">
        <h2
          className="globe-text font-semibold text-center leading-tight tracking-[-0.01em]"
          style={{
            fontSize: "clamp(1rem, 4vw, 1.2rem)",
          }}
        >
          Protocols documented across
        </h2>

        {/* Marquee viewport container clipped to screen */}
        <div className="w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="chain-marquee-track">
            {/* Track Half 1 */}
            <div className="flex shrink-0 items-center gap-6 pr-6">
              {REPEATED_CHAINS.map((c, i) => (
                <div key={`h1-${c.name}-${i}`} className="flex items-center gap-6">
                  <ChainBadge name={c.name} icon={c.icon} />
                  <span className="globe-text-muted opacity-40 text-xs select-none">•</span>
                </div>
              ))}
            </div>

            {/* Track Half 2 (Exact duplicate for 100% seamless infinite loop) */}
            <div className="flex shrink-0 items-center gap-6 pr-6">
              {REPEATED_CHAINS.map((c, i) => (
                <div key={`h2-${c.name}-${i}`} className="flex items-center gap-6">
                  <ChainBadge name={c.name} icon={c.icon} />
                  <span className="globe-text-muted opacity-40 text-xs select-none">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}