interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-9 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lux Salon"
    >
      {/* Stylized geometric shears & emblem in copper theme variable */}
      <g transform="translate(15, 10)">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent" />
        <circle cx="20" cy="40" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent" />
        <path d="M28 25 L52 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-accent" />
        <path d="M28 35 L52 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-accent" />
        <circle cx="37" cy="30" r="2.5" fill="currentColor" className="text-foreground" />
        <path d="M52 12 L58 6 M52 48 L58 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-accent" />
      </g>

      {/* LUX wordmark: deep slate-teal in light, linen in dark */}
      <text
        x="95"
        y="44"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="34"
        fontWeight="600"
        letterSpacing="4"
        fill="currentColor"
        className="text-foreground"
      >
        LUX
      </text>

      {/* SALON wordmark: copper theme variable */}
      <text
        x="180"
        y="44"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="34"
        fontWeight="300"
        letterSpacing="4"
        fill="currentColor"
        className="text-accent"
      >
        SALON
      </text>

      {/* Subtitle */}
      <text
        x="96"
        y="60"
        fontFamily="'Inter', sans-serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="6"
        fill="currentColor"
        className="text-muted"
      >
        ADDIS ABABA · EST. 2016
      </text>
      <line
        x1="96"
        y1="64"
        x2="280"
        y2="64"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.4"
        className="text-accent"
      />
    </svg>
  )
}
