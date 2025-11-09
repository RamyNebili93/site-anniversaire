import { useEffect, useState, useRef } from 'react'

export default function AnimatedScene() {
  const [claimed, setClaimed] = useState(false)
  const [showTv, setShowTv] = useState(false)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // preload confetti script (browser CDN) but don't block render
    if (typeof window !== 'undefined' && !scriptLoaded.current) {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
      s.async = true
      s.onload = () => { scriptLoaded.current = true }
      document.head.appendChild(s)
    }
  }, [])

  const handleClaim = () => {
    if (claimed) return
    setClaimed(true)

    // small delay to allow claimed animation to run, then show TV
    setTimeout(() => setShowTv(true), 600)

    // fire confetti if available
    setTimeout(() => {
      try {
        if (window && window.confetti) {
          window.confetti({ particleCount: 200, spread: 100, origin: { y: 0.35 } })
        }
      } catch (e) {
        // ignore
      }
    }, 300)
  }

  return (
    <div className="scene">
      {/* Inline the full background SVG so we can target its groups directly */}
      <div
        className="scene-svg"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="Dégradé_sans_nom_286" data-name="Dégradé sans nom 286" x1="-21.53" y1="1049.5" x2="1758.56" y2="126.27" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".63" stop-color="#f8dadb"/>
    </linearGradient>
    <linearGradient id="Dégradé_sans_nom_246" data-name="Dégradé sans nom 246" x1="7.64" y1="1075.06" x2="7.64" y2="1073.57" gradientTransform="translate(-109 151381) scale(140 -140)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#efced2"/>
      <stop offset="1" stop-color="#f7bbbb"/>
    </linearGradient>
    <radialGradient id="Dégradé_sans_nom_257" data-name="Dégradé sans nom 257" cx="7.64" cy="1066.21" fx="7.64" fy="1066.21" r="1.24" gradientTransform="translate(-109 24691.19) scale(140 -22.34)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ecd5db"/>
      <stop offset="1" stop-color="#f8bab9"/>
    </radialGradient>
    <linearGradient id="Dégradé_sans_nom_2461" data-name="Dégradé sans nom 246" y2="1073.57" xlink:href="#Dégradé_sans_nom_246"/>
    <radialGradient id="Dégradé_sans_nom_2571" data-name="Dégradé sans nom 257" r="1.24" xlink:href="#Dégradé_sans_nom_257"/>
  </defs>
  <g id="background">
    <rect x="1.02" y="-.46" width="1919.64" height="1080.91" fill="url(#Dégradé_sans_nom_286)"/>
  </g>
  <g id="cylindre_x5F_haut">
    <g id="id_x3D__x22_cylindreHaut_x22_">
      <path d="M1133.42,289.97h-5.19c3.38,4.23,5.19,8.65,5.19,13.2v-13.2Z" fill="#efced2"/>
      <path d="M786.58,289.97v13.2c0-4.55,1.81-8.98,5.19-13.2h-5.19Z" fill="#efced2"/>
      <path d="M1122.9,284.53c.97.83,1.88,1.67,2.73,2.52.84.85,1.62,1.71,2.34,2.57.1.12.18.23.27.35h5.19v-13.2h-21.93c4.42,2.47,8.25,5.07,11.41,7.76Z" fill="#efcdd1"/>
      <path d="M808.51,276.77h-21.93v13.2h5.19c3.74-4.67,9.41-9.1,16.74-13.2Z" fill="#efcdd1"/>
      <path d="M1096.43,269.7c2.57,1.02,5.03,2.08,7.37,3.16,2.74,1.27,5.3,2.57,7.69,3.91h21.93v-13.2h-54.99c6.48,1.9,12.51,3.94,18.01,6.13Z" fill="#f0ccd0"/>
      <path d="M841.57,263.57h-54.99v13.2h21.93c8.8-4.92,19.98-9.38,33.06-13.2Z" fill="#f0ccd0"/>
      <path d="M1060.39,258.96c2.27.5,4.49,1.02,6.68,1.56,3.93.97,7.71,1.99,11.36,3.05h54.99v-13.2h-133.91c22.24,1.62,42.85,4.58,60.88,8.59Z" fill="#f0cbcf"/>
      <path d="M920.49,250.37h-133.91v13.2h54.99c21.8-6.37,48.85-11.01,78.92-13.2Z" fill="#f0cbcf"/>
      <path d="M960,248.95c13.59,0,26.81.49,39.51,1.41h133.91v-13.2h-346.84v13.2h133.91c12.69-.92,25.91-1.41,39.51-1.41Z" fill="#f0cbce"/>
      <rect x="786.58" y="223.97" width="346.84" height="13.2" fill="#f1cacd"/>
      <rect x="786.58" y="210.76" width="346.84" height="13.2" fill="#f1c9cc"/>
      <rect x="786.58" y="197.56" width="346.84" height="13.2" fill="#f2c8cb"/>
      <rect x="786.58" y="184.36" width="346.84" height="13.2" fill="#f2c7ca"/>
      <rect x="786.58" y="171.16" width="346.84" height="13.2" fill="#f2c6c9"/>
      <rect x="786.58" y="157.96" width="346.84" height="13.2" fill="#f3c5c8"/>
      <rect x="786.58" y="144.76" width="346.84" height="13.2" fill="#f3c5c7"/>
      <rect x="786.58" y="131.56" width="346.84" height="13.2" fill="#f3c4c5"/>
      <rect x="786.58" y="118.35" width="346.84" height="13.2" fill="#f4c3c4"/>
      <rect x="786.58" y="105.15" width="346.84" height="13.2" fill="#f4c2c3"/>
      <rect x="786.58" y="91.95" width="346.84" height="13.2" fill="#f4c1c2"/>
      <rect x="786.58" y="78.75" width="346.84" height="13.2" fill="#f5c0c1"/>
      <rect x="786.58" y="65.55" width="346.84" height="13.2" fill="#f5bfc0"/>
      <rect x="786.58" y="52.35" width="346.84" height="13.2" fill="#f6bebf"/>
      <rect x="786.58" y="39.15" width="346.84" height="13.2" fill="#f6bebe"/>
      <rect x="786.58" y="25.95" width="346.84" height="13.2" fill="#f6bdbd"/>
      <rect x="786.58" y="12.74" width="346.84" height="13.2" fill="#f7bcbc"/>
      <rect x="786.58" y="-.46" width="346.84" height="13.2" fill="#f7bbbb"/>
      <line x1="1133.42" y1="-.46" x2="786.58" y2="-.46" fill="none" stroke="#f7bbbb" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1128.23,289.97c-.09-.12-.18-.23-.27-.35-.71-.87-1.49-1.72-2.34-2.57-.84-.85-1.75-1.69-2.73-2.52-3.15-2.69-6.98-5.29-11.41-7.76-2.39-1.34-4.95-2.65-7.69-3.91-2.34-1.08-4.8-2.14-7.37-3.16-5.49-2.19-11.52-4.23-18.01-6.13-3.65-1.07-7.43-2.09-11.36-3.05-2.18-.54-4.41-1.06-6.68-1.56-18.04-4.01-38.64-6.97-60.88-8.59-12.69-.92-25.91-1.41-39.51-1.41s-26.81.49-39.51,1.41c-30.07,2.19-57.12,6.83-78.92,13.2-13.08,3.83-24.26,8.28-33.06,13.2-7.33,4.1-13,8.53-16.74,13.2-3.38,4.23-5.19,8.65-5.19,13.2,0,29.94,77.64,54.22,173.42,54.22,37.41,0,72.06-3.7,100.39-10,2.27-.5,4.49-1.02,6.68-1.56,4.37-1.07,8.57-2.21,12.58-3.41,2.01-.6,3.97-1.21,5.88-1.84,3.83-1.26,7.47-2.57,10.9-3.93,2.57-1.02,5.03-2.08,7.37-3.16,7.79-3.61,14.23-7.52,19.09-11.67.97-.83,1.88-1.67,2.73-2.52.84-.85,1.62-1.71,2.34-2.57,3.56-4.33,5.46-8.87,5.46-13.55s-1.81-8.98-5.19-13.2ZM960,355.8c-92.96,0-168.32-23.56-168.32-52.63s75.36-52.63,168.32-52.63,168.32,23.56,168.32,52.63-75.36,52.63-168.32,52.63Z" fill="#f8bab9"/>
      <path d="M1128.32,303.17c0-29.06-75.36-52.63-168.32-52.63s-168.32,23.56-168.32,52.63,75.36,52.63,168.32,52.63,168.32-23.56,168.32-52.63ZM960,354.2c-90.14,0-163.22-22.85-163.22-51.03s73.08-51.03,163.22-51.03,163.22,22.85,163.22,51.03-73.08,51.03-163.22,51.03Z" fill="#f8bbba"/>
    </g>
  </g>
  <g id="cylindre_x5F_bas">
    <g id="id_x3D__x22_cylindreBas_x22_">
      <path d="M960,900.34c-95.78,0-173.42-12.39-173.42-27.67v208.24h346.84v-208.24c0,15.28-77.64,27.67-173.42,27.67Z" fill="url(#Dégradé_sans_nom_246)"/>
      <path d="M960,845c-95.78,0-173.42,12.39-173.42,27.67h346.84c0-15.28-77.64-27.67-173.42-27.67Z" fill="url(#Dégradé_sans_nom_257)"/>
      <path d="M960,900.34c95.78,0,173.42-12.39,173.42-27.67h-346.84c0,15.28,77.64,27.67,173.42,27.67Z" fill="url(#Dégradé_sans_nom_2461)"/>
      <path d="M960,900.34c95.78,0,173.42-12.39,173.42-27.67h-346.84c0,15.28,77.64,27.67,173.42,27.67Z" fill="url(#Dégradé_sans_nom_2571)"/>
    </g>
  </g>
</svg>` }}
      />

  <div className="center-ui">
        {!claimed ? (
          <div className="gift-box" role="button" aria-label="Claim your gift">
            <div className="gift-box__emoji joggle">🎁</div>
            <div className="mt-4 text-sm text-white/90">Un petit cadeau pour toi</div>
            <button className="claim-btn" onClick={handleClaim}>
              Réclamer mon cadeau
            </button>
          </div>
        ) : (
          <div className="tv-box" aria-hidden={!showTv}>
            <img src="images/tvbox.png" alt="TV" />
          </div>
        )}
      </div>

      <style>{`
        .scene {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }
        .scene-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }

        /* animate the two cylinder groups inside the inlined SVG by their ids */
        #id_x3D__x22_cylindreHaut_x22_ {
          transform-origin: 50% 50%;
          transform-box: fill-box;
          transform: translateY(-300px);
          opacity: 0;
          animation: drop 900ms ease forwards;
        }
        #id_x3D__x22_cylindreBas_x22_ {
          transform-origin: 50% 50%;
          transform-box: fill-box;
          transform: translateY(300px);
          opacity: 0;
          animation: rise 900ms ease forwards;
        }

        @keyframes drop {
          from { transform: translateY(-300px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes rise {
          from { transform: translateY(300px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .center-ui { position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; pointer-events: auto; transform: translateY(100px); }

        .gift-box { text-align: center; color: white; }
        .gift-box__emoji { font-size: 6rem; line-height: 1; }
        .joggle { animation: joggle 4.5s ease-in-out infinite; display: inline-block; }
        @keyframes joggle { 0%,33%,100%{ transform: rotate(0deg) } 3.33%{ transform: rotate(-10deg) } 6.67%{ transform: rotate(12deg) } 10%{ transform: rotate(-10deg) } 13.33%{ transform: rotate(9deg) } 16.67%{ transform: rotate(0deg) } }

        .claim-btn { margin-top: 1rem; padding: 0.6rem 1.2rem; border-radius: 999px; border: none; background: linear-gradient(135deg,#ffc5d3 0%,#ff85a3 100%); color: white; font-weight: 700; cursor: pointer; box-shadow: 0 8px 30px rgba(255,133,163,0.18); }

        /* claimed state: hide gift-box with a smooth disappearance */
        .gift-box.disappear { animation: giftDisappear 500ms ease forwards; }
        @keyframes giftDisappear { to { opacity: 0; transform: translateY(-10px) scale(0.96); } }

        .tv-box { display: flex; align-items: center; justify-content: center; }
        .tv-box img { width: min(480px, 80vw); opacity: 0; transform: scale(0.7); animation: popIn 400ms ease forwards; }
        @keyframes popIn { from { transform: scale(0.7); opacity: 0 } to { transform: scale(1); opacity: 1 } }

        /* ensure decorative elements don't block clicks */
        .scene-bg, .cyl { pointer-events: none }
      `}</style>
    </div>
  )
}
