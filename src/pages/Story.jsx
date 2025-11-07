import { useEffect, useState, useCallback } from 'react'
// Background handled locally with a gradient; no background component needed
import { photos as basePhotos } from '../config.js'

// Données de secours si jamais config.js est vide
const fallbackMemories = [
  { src: '/images/photo1.jpg', title: 'notre jour préféré', desc: "c'est là que j'ai su" },
  { src: '/images/photo2.jpg', title: 'premier fou rire', desc: 'minutes qui ont tout changé' },
  { src: '/images/photo3.jpg', title: 'toi + moi', desc: 'juste nous, simplement' },
]

// On construit la liste finale des souvenirs à partir de config.js
const memories = (basePhotos && basePhotos.length
  ? basePhotos.map((p, idx) => ({ 
      src: p.src, 
      title: p.caption || `souvenir ${idx + 1}`, 
      desc: p.caption || '', 
      description: p.description || '',
      date: p.date || '' 
    }))
  : fallbackMemories)

// Modal / lightbox (overlay blanc, image sans arrondis, navigation)
function MemoryModal({ index, onClose, onPrev, onNext }) {
  if (index === null || index === undefined) return null

  // Transition management for smoother image changes
  const [displayedIndex, setDisplayedIndex] = useState(index)
  const [prevIndex, setPrevIndex] = useState(null)
  const [direction, setDirection] = useState('next') // 'next' | 'prev'

  useEffect(() => {
    if (index !== displayedIndex) {
      // keep previous image to animate out
      setPrevIndex(displayedIndex)
      setDisplayedIndex(index)
      // cleanup previous after animation ends
      const t = setTimeout(() => setPrevIndex(null), 700)
      return () => clearTimeout(t)
    }
  }, [index, displayedIndex])

  const memory = memories[displayedIndex]

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-start sm:justify-center">
      {/* overlay sombre flouté sur la galerie */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[4px]" onClick={onClose} aria-hidden="true" />

      {/* zone de contenu */}
      <div className="relative w-full h-full flex flex-col items-center pt-8 sm:pt-16">
        {/* bouton fermer en haut à gauche, style simple "×" */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 sm:right-8 sm:top-8 text-white/90 text-4xl sm:text-5xl leading-none p-2 sm:p-3 font-area font-bold"
          aria-label="Fermer"
        >
          ×
        </button>

        {/* bloc principal : flèche gauche / image / flèche droite */}
        <div className="relative flex w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] items-start sm:items-center justify-center gap-4 sm:gap-8">
          {/* flèche gauche (desktop) */}
          <button
            onClick={(e) => { e.stopPropagation(); setDirection('prev'); onPrev(); }}
            className="hidden sm:flex text-white/85 hover:text-white text-5xl p-3 select-none"
            aria-label="Précédent"
          >
            ‹
          </button>

          {/* image affichée en grand */}
          <div className="flex-1 max-h-[70vh] sm:max-h-[75vh] flex flex-col items-center">
            {/* Smooth transition stage */}
            <div className="relative w-full flex justify-center items-center perspective-1000">
              {/* spacer to preserve layout height while images are absolutely positioned */}
              <div className="h-[60vh] sm:h-[70vh]"></div>
              {/* previous image (animates out) */}
              {prevIndex !== null && (
                <img
                  src={memories[prevIndex].src}
                  alt={memories[prevIndex].title}
                  className={`modal-smooth-img modal-out ${direction === 'next' ? 'out-next' : 'out-prev'} max-h-[60vh] sm:max-h-[70vh] w-auto object-contain shadow-xl`}
                  style={{ borderRadius: 0 }}
                />
              )}
              {/* current image (animates in) */}
              <img
                key={displayedIndex}
                src={memory.src}
                alt={memory.title}
                className={`modal-smooth-img modal-in ${direction === 'next' ? 'in-next' : 'in-prev'} max-h-[60vh] sm:max-h-[70vh] w-auto object-contain shadow-xl`}
                style={{ borderRadius: 0 }}
              />
            </div>

            {/* titre sous la photo, centrée, grande, police Isabel Condensed */}
            {memory.desc && (
              <div className="mt-4 text-center text-white/90 font-isabel-condensed text-2xl sm:text-3xl px-4">
                {memory.desc}
              </div>
            )}

            {/* description supplémentaire sous le titre, police Area */}
            {memory.description && (
              <div className="mt-2 text-center text-white/80 font-area text-base sm:text-lg px-4">
                {memory.description}
              </div>
            )}

          </div>

          {/* flèche droite (desktop) */}
          <button
            onClick={(e) => { e.stopPropagation(); setDirection('next'); onNext(); }}
            className="hidden sm:flex text-white/85 hover:text-white text-5xl p-3 select-none"
            aria-label="Suivant"
          >
            ›
          </button>
        </div>

        {/* flèches mobile sous l'image */}
        <div className="flex sm:hidden items-center justify-between w-full max-w-[80%] text-white text-2xl mt-6">
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Précédent">‹</button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Suivant">›</button>
        </div>
      </div>
    </div>
  )
}

export default function Story() {
  // index du souvenir actuellement ouvert dans le modal
  const [activeIndex, setActiveIndex] = useState(null)
  // État pour l'animation d'apparition progressive
  const [visiblePhotos, setVisiblePhotos] = useState([])

  // Animation d'apparition progressive des photos
  useEffect(() => {
    memories.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePhotos(prev => [...prev, index])
      }, index * 30) // Décalage de 30ms entre chaque photo (très rapide et fluide)
    })
  }, [])

  // empêcher le scroll derrière quand le modal est ouvert
  useEffect(() => {
    const prev = document.body.style.overflow
    if (activeIndex !== null) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = prev || ''
    return () => { document.body.style.overflow = prev || '' }
  }, [activeIndex])

  // ouvre/ferme et navigation
  const openMemory = useCallback((idx) => setActiveIndex(idx), [])
  const closeMemory = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + memories.length) % memories.length))
  }, [])
  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % memories.length))
  }, [])

  // Grille masonry responsive avec espacement uniforme
  const columnsClass = 'columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 [column-fill:_balance]' 

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background: 'linear-gradient(to bottom, #F7D7D8 0%, #FCEDF2 40%, #9DC7D3 100%)',
      }}
    >
      <div className="w-full max-w-none mx-auto px-4 sm:px-10 md:px-16">
        {/* Header avec titre à gauche et bouton à droite */}
        <div className="flex justify-between items-start pt-8 pb-20">
          {/* Titre + sous-titre en haut à gauche */}
          <div className="text-left">
            <h1 className="font-isabel-condensed text-white leading-tight text-5xl sm:text-6xl">Nos souvenirs</h1>
            <p className="font-area font-bold text-white/95 text-xl sm:text-2xl">choisis ton souvenir</p>
          </div>

          {/* Bouton "Ta surprise" en haut à droite */}
          <button 
            onClick={() => window.location.hash = '#/gift'}
            className="gift-button relative cursor-pointer text-xl sm:text-2xl text-white transition-transform duration-200 hover:scale-105"
          >
            <span className="hearts-container absolute w-full h-full top-0 left-0"></span>
            <span className="button-text relative px-4 py-2 block rounded-full transition-transform duration-200">
              Gift 🎁
            </span>
          </button>
        </div>

        <style>{`
          .gift-button {
            all: unset;
            cursor: pointer;
            font-size: 1.5rem;
            font-family: 'Area', sans-serif;
            font-weight: 700;
            color: white;
            position: relative;
            transition: transform .2s ease;
          }

          .gift-button:before {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background: #F6D9D7;
            transform: scale(0.9);
            outline: 0px solid #F6D9D7;
            border-radius: 1e5px;
            transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          }

          .gift-button .button-text {
            position: relative;
            padding: 0.4em 1em;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            display: block;
            border-radius: 1e5px;
            transition: transform 0.2s ease;
          }

          .gift-button .button-text:before,
          .gift-button .button-text:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            transform: scale(0) rotate(0deg);
            transition: transform 0.2s ease, opacity .2s ease, transform 0.4s cubic-bezier(.02,1.02,.67,1.06);
            pointer-events: none;
            z-index: -1;
          }

          .gift-button .button-text:before {
            width: 2.1em;
            top: -0.8em;
            left: -0.8em;
            background: url(https://assets.codepen.io/64/heart+%286%29+%281%29.png) no-repeat center center / contain;
            z-index: -1;
            filter: drop-shadow(0 2px 4px rgb(0 0 0 / 20%)) saturate(300%) hue-rotate(350deg) brightness(0.85);
          }

          .gift-button .button-text:after {
            width: 1.2em;
            top: 1em;
            left: 0.5em;
            background: url(https://assets.codepen.io/64/heart+%285%29+%281%29.png) no-repeat center center / contain;
            filter: blur(2px) drop-shadow(0 2px 4px rgb(0 0 0 / 20%)) saturate(300%) hue-rotate(350deg) brightness(0.85);
          }

          .gift-button .hearts-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: transparent;
          }

          .gift-button .hearts-container:before,
          .gift-button .hearts-container:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            z-index: 5;
            transform: scale(0) rotate(0deg);
            transition: transform 0.2s ease, opacity .2s ease, transform 0.4s cubic-bezier(.02,1.02,.67,1.06);
            pointer-events: none;
            opacity: 0;
          }

          .gift-button .hearts-container:before {
            width: 1.75em;
            top: -1em;
            right: 0.5em;
            background: url(https://assets.codepen.io/64/heart+%283%29+%281%29.png) no-repeat center center / contain;
            filter: blur(1px) drop-shadow(0 2px 4px rgb(0 0 0 / 20%)) saturate(300%) hue-rotate(350deg) brightness(0.85);
          }

          .gift-button .hearts-container:after {
            width: 2em;
            top: 1em;
            right: -0.5em;
            background: url(https://assets.codepen.io/64/heart+%284%29+%281%29.png) no-repeat center center / contain;
            filter: drop-shadow(0 2px 4px rgb(0 0 0 / 20%)) saturate(300%) hue-rotate(350deg) brightness(0.85);
          }

          .gift-button:hover:before {
            transform: scale(1.05);
            background: -webkit-linear-gradient(180deg, #ffc5d3, #ff85a3);
            background: linear-gradient(180deg, #ffc5d3, #ff85a3);
            box-shadow: 0 4px 22px -8px rgba(255, 197, 211, 0.8);
          }

          .gift-button:hover .button-text {
            transform: scale(0.95);
          }

          .gift-button:hover .button-text:before,
          .gift-button:hover .button-text:after,
          .gift-button:hover .hearts-container:before,
          .gift-button:hover .hearts-container:after {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }

          .gift-button:active {
            transform: scale(1.05);
          }

          .gift-button:active:before {
            transform: scale(0.95);
            box-shadow: 0 2px 12px rgba(255, 197, 211, 0.8);
          }

          .gift-button:active .button-text:before,
          .gift-button:active .button-text:after,
          .gift-button:active .hearts-container:before,
          .gift-button:active .hearts-container:after {
            transform: scale(0.8) rotate(20deg);
          }

          .gift-button:active .hearts-container:before {
            transform: scale(0.8) rotate(-20deg);
          }

          .gift-button:active .hearts-container:after {
            transform: scale(0.8) rotate(20deg);
          }

          /* ===== Modal smooth image transition ===== */
          .perspective-1000 { perspective: 1000px; }
          .modal-smooth-img {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            opacity: 0;
            will-change: transform, opacity;
          }
          .modal-in.in-next { animation: modalInNext 700ms cubic-bezier(.97,.13,.34,1.15) forwards; }
          .modal-out.out-next { animation: modalOutNext 700ms cubic-bezier(.97,.13,.34,1.15) forwards; }
          .modal-in.in-prev { animation: modalInPrev 700ms cubic-bezier(.97,.13,.34,1.15) forwards; }
          .modal-out.out-prev { animation: modalOutPrev 700ms cubic-bezier(.97,.13,.34,1.15) forwards; }

          @keyframes modalInNext {
            from { opacity: 0; transform: translateX(calc(-50% + 14%)) translateZ(-40px) rotateY(-10deg) scale(0.96); }
            to   { opacity: 1; transform: translateX(-50%) translateZ(0) rotateY(0deg) scale(1); }
          }
          @keyframes modalOutNext {
            from { opacity: 1; transform: translateX(-50%) translateZ(0) rotateY(0deg) scale(1); }
            to   { opacity: 0; transform: translateX(calc(-50% - 12%)) translateZ(-50px) rotateY(10deg) scale(0.94); }
          }
          @keyframes modalInPrev {
            from { opacity: 0; transform: translateX(calc(-50% - 14%)) translateZ(-40px) rotateY(10deg) scale(0.96); }
            to   { opacity: 1; transform: translateX(-50%) translateZ(0) rotateY(0deg) scale(1); }
          }
          @keyframes modalOutPrev {
            from { opacity: 1; transform: translateX(-50%) translateZ(0) rotateY(0deg) scale(1); }
            to   { opacity: 0; transform: translateX(calc(-50% + 12%)) translateZ(-50px) rotateY(-10deg) scale(0.94); }
          }
        `}</style>

        {/* Galerie pleine largeur avec animation d'apparition */}
        <div className={columnsClass}>
          {memories.map((m, i) => (
            <button
              key={i}
              onClick={() => openMemory(i)}
              className={`group block mb-4 transition-all duration-300 ${
                visiblePhotos.includes(i)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ breakInside: 'avoid' }}
            >
              <div className="relative w-full overflow-hidden shadow-sm aspect-square">
                <img
                  src={m.src}
                  alt={m.title}
                  className="w-full h-full object-cover scale-[1.02] blur-[5px] transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-75 group-hover:blur-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-5 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  {m.date && <div className="text-xs sm:text-sm md:text-base text-white/70 mb-1">{m.date}</div>}
                  <div className="font-isabel-condensed text-white text-2xl sm:text-3xl leading-tight">{m.title}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {activeIndex !== null && (
          <MemoryModal index={activeIndex} onClose={closeMemory} onPrev={showPrev} onNext={showNext} />
        )}
      </div>
    </div>
  )
}





