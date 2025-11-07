// Fullscreen image background used only on the landing page
export default function HeroBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-8">
      {/* Background image layer */}
      <div
        aria-hidden
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/landing-hero.jpeg')",
          zIndex: 0,
        }}
      />

      {/* Soft top gradient overlay for readability (very light) */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.10) 20%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 w-full max-w-2xl sm:max-w-3xl flex flex-col items-center">
        {children}
      </div>
    </div>
  )
}
