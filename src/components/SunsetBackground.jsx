// Fond coucher de soleil pastel avec brume et halo
export default function SunsetBackground({ children, fluid = false }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4 py-10 flex items-center justify-center">
      {/* Calque 1 – Dégradé principal (ciel/eau) */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          zIndex: 0,
          position: 'absolute',
          background: `linear-gradient(
            to bottom,
            rgba(239,170,191,1) 0%,        /* rose pastel du haut */
            rgba(255,194,160,1) 25%,       /* pêche / abricot doux */
            rgba(255,227,160,1) 45%,       /* doré/jaune chaud avant l'horizon */
            rgba(255,245,210,1) 55%,       /* jaune crème très clair (zone lumineuse du soleil) */
            rgba(255,255,255,0.7) 60%,     /* brume blanche juste sous l'horizon */
            rgba(255,255,255,0.0) 68%,     /* fondu de la brume */
            rgba(210,236,240,1) 78%,       /* début du bas bleuté pastel */
            rgba(140,199,198,1) 100%       /* bleu/turquoise doux du bas */
          )`,
          backgroundSize: '100% 100%',
          backgroundPosition: '50% 0%',
          animation: 'bgDrift 120s ease-in-out infinite alternate',
          filter: 'blur(0.5px)',
        }}
      />

      {/* Calque 2 – Halo central diffus */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, position: 'absolute' }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '60%',
            transform: 'translate(-50%, -50%)',
            width: '70vmin',
            height: '70vmin',
            borderRadius: '9999px',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 18%, rgba(255,246,210,0.55) 36%, rgba(255,246,210,0.25) 52%, rgba(255,246,210,0.0) 70%)',
            filter: 'blur(6px)',
          }}
        />
      </div>

      {/* Calque 3 – Brume/haze horizontale à l'horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0"
        style={{
          zIndex: 2,
          position: 'absolute',
          top: '60%',
          height: '24vmin',
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0.35) 55%, rgba(255,255,255,0.0) 100%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Contenu au‑dessus de tout */}
      <div className={fluid ? 'relative z-10 w-full' : 'relative z-10 w-full max-w-md sm:max-w-2xl'}>{children}</div>

      {/* Animation lente du dégradé principal */}
      <style>{`
        @keyframes bgDrift {
          0%   { background-position: 45% 0%; }
          50%  { background-position: 55% 0%; }
          100% { background-position: 40% 0%; }
        }
      `}</style>
    </div>
  )
}
