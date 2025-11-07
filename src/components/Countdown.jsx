import { useEffect, useState } from 'react'
import { countdownTarget, heroText, theme } from '../config.js'

function getTimeRemaining() {
  const target = new Date(countdownTarget).getTime()
  const now = Date.now()
  const diff = target - now

  if (diff <= 0) {
    return { done: true, days: 0, hours: 0, mins: 0, secs: 0 }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
  const mins = Math.floor((totalSeconds % (60 * 60)) / 60)
  const secs = totalSeconds % 60

  return { done: false, days, hours, mins, secs }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft.done) {
    return (
      <div className="text-center space-y-5">
        <p className="text-lg sm:text-xl text-primaryText">
          Joyeux anniversaire mon amour ! 🎉
        </p>
        <a
          href="#/story"
          className="aqua-button inline-flex items-center justify-center font-medium"
        >
          <span>{heroText.readyBtn}</span>
        </a>

        <style>{`
          .aqua-button {
            --hue: 340deg;
            --sat: 80%;
            --hue2: calc(var(--hue) + 15deg);
            --sat2: calc(var(--sat) + 10%);
            --clr: hsl(var(--hue) var(--sat) 90%);  
            --clr2: hsl(var(--hue2) var(--sat2) 85%);
            --text: hsla(var(--hue), 70%, 20%, .9);
            --gradoffset: 45%;
            --gradgap: 30%;
            
            font-size: 1.2rem;
            color: var(--text);
            font-weight: 600;
            letter-spacing: -0.025em;
            background-color: var(--clr);
            background-image: linear-gradient(180deg, var(--clr2) var(--gradgap), transparent calc(100% - var(--gradgap)));
            background-repeat: no-repeat;
            background-position: center var(--gradoffset);
            background-size: 100% 200%;
            padding: 1.1em 1.5em;
            border-radius: 2em;
            border: none;
            overflow: hidden;
            position: relative;
            transition: all 0.5s ease;
            outline: none;
            box-shadow: 
              0 0.25em 0.3em -0.2em hsla(var(--hue), var(--sat), 50%, 0.46), 
              0 0.25em 0.75em hsla(var(--hue), calc(var(--sat) - 10%), 40%, 0.3);
          }
          
          .aqua-button::before,
          .aqua-button::after {
            content: "";
            inset: 0;
            position: absolute;
            border-radius: 2em;
            pointer-events: none;
          }
          
          .aqua-button::before {
            background-image: 
              radial-gradient(ellipse, hsla(var(--hue), 100%, 90%, .8) 20%, transparent 50%, transparent 200%),
              linear-gradient(90deg, hsl(0deg, 0%, 25%) -10%, transparent 30%, transparent 70%, hsl(0deg, 0%, 25%) 110%);
            box-shadow: 
              inset 0 .25em .75em hsla(0deg, 0%, 0%, 0.15),
              inset 0 -.05em .2em rgba(255, 255, 255, 0.4),
              inset 0 -1px 3px hsla(var(--hue), 80%, 50%, .75);
            background-blend-mode: overlay;
            background-repeat: no-repeat;
            background-size: 200% 80%, cover;
            background-position: center 220%;
            mix-blend-mode: overlay;
          }
          
          .aqua-button::after {
            background: linear-gradient(180deg, hsla(var(--hue2),100%,90%,.9), hsla(var(--hue2),calc(var(--sat2)*0.7),50%,.75) 40%, transparent 80%);
            top: 0.075em;
            left: 0.75em;
            right: 0.75em;
            bottom: 1.4em;
            mix-blend-mode: screen;
          }
          
          .aqua-button:hover,
          .aqua-button:focus {
            box-shadow: 
              0 -0.2em 0.5em hsla(var(--hue2), calc(var(--sat2) * 1.2), 80%, 0.3), 
              0 0.25em 0.5em hsla(var(--hue), calc(var(--sat) * 1.2), 80%, 0.25), 
              0 0.25em 0.3em -0.2em hsl(var(--hue), calc(var(--sat) * 1.66), 70%), 
              0 0.25em 0.5em hsla(var(--hue), calc(var(--sat) * 0.5), 30%, 0.2), 
              inset 0 -2px 2px rgba(255, 255, 255, 0.2);
            background-position: center calc(var(--gradoffset) - 0.75em);
          }
          
          .aqua-button:active {
            scale: 0.97;
            translate: 0 1.5%;
            box-shadow: 
              0 -0.15em 0.375em hsla(var(--hue2), calc(var(--sat2) * 1.2), 80%, 0.3), 
              0 0.1875em 0.375em hsla(var(--hue), calc(var(--sat) * 1.2), 80%, 0.25);
          }
          
          .aqua-button span {
            position: relative;
            z-index: 1;
            filter: drop-shadow(0 1px 0 hsla(var(--hue), var(--sat), 88%, 1));
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex justify-center gap-4 sm:gap-5 text-primaryText">
        {[
          { label: 'jours', value: timeLeft.days },
          { label: 'heures', value: timeLeft.hours },
          { label: 'min', value: timeLeft.mins },
          { label: 'sec', value: timeLeft.secs },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="min-w-[4.2rem] sm:min-w-[4.6rem] md:min-w-[5.2rem] rounded-2xl bg-white/60 text-primaryText font-semibold text-3xl sm:text-4xl md:text-5xl px-4 py-3 shadow-md border border-white/70">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="font-area font-bold text-xs sm:text-sm mt-1 opacity-70">{item.label}</div>
          </div>
        ))}
      </div>
      <p className="font-area font-bold text-sm sm:text-base mt-4 text-white">{heroText.waiting}</p>
    </div>
  )
}
