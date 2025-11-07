import HeroBackground from '../components/HeroBackground.jsx'
import GlassCard from '../components/GlassCard.jsx'
import Countdown from '../components/Countdown.jsx'
import { heroText } from '../config.js'

export default function Home() {
  return (
    <HeroBackground>
      {/* Hero header text above the glass card */}
      <div className="w-full text-center mb-10 sm:mb-12 md:mb-16">
        <h1 className="font-isabel-condensed text-white leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
          {heroText.title}
        </h1>
        <p className="mt-3 sm:mt-4 text-white/95 font-area font-bold text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.12)]">
          {heroText.subtitle}
        </p>
      </div>

      {/* Glass card stays identical; it now contains only the countdown */}
      <GlassCard className="w-full max-w-2xl mx-auto text-center px-8 py-10">
        <div className="w-full max-w-md mx-auto">
          <Countdown />
        </div>
      </GlassCard>
    </HeroBackground>
  )
}
