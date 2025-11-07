import { useEffect, useState } from 'react'
import { photos, finalMessage } from '../config.js'

export default function PhotoSlideshow() {
  const [index, setIndex] = useState(0)

  // passe automatiquement à la photo suivante toutes les 5 secondes
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % (photos.length + 1)) // +1 pour la diapo finale
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const goPrev = () => {
    setIndex((i) => (i - 1 + photos.length + 1) % (photos.length + 1))
  }

  const goNext = () => {
    setIndex((i) => (i + 1) % (photos.length + 1))
  }

  const isLast = index === photos.length

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto text-center select-none">
      <div
        className="relative overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.18)] bg-white/20 border border-white/40 backdrop-blur-xl"
        style={{ height: '400px' }}
      >
        {isLast ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-primaryText animate-[fade_0.6s_ease]">
            <p className="h-script text-2xl leading-tight text-primaryText text-center whitespace-pre-line">
              {finalMessage}
            </p>
          </div>
        ) : (
          <figure className="absolute inset-0 flex flex-col">
            <div className="relative flex-1 overflow-hidden">
              <img
                key={photos[index].src}
                src={photos[index].src}
                alt="souvenir"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  animation: 'kenburns 5s ease-in-out infinite',
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
            </div>
            <figcaption className="p-4 text-sm text-primaryText bg-white/50 border-t border-white/40">
              {photos[index].caption}
            </figcaption>
          </figure>
        )}
      </div>

      {/* boutons navigation */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/60 backdrop-blur-xl text-primaryText text-xs px-3 py-2 rounded-full shadow-md border border-white/70 active:scale-95"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/60 backdrop-blur-xl text-primaryText text-xs px-3 py-2 rounded-full shadow-md border border-white/70 active:scale-95"
      >
        ›
      </button>
    </div>
  )
}
