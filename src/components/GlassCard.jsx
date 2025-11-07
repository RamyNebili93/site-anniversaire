import { theme } from '../config.js'

// Style glassmorphism inspiré du CSS fourni
// Coins XL + espace intérieur plus généreux pour respirer
export default function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`glass-card rounded-[36px] p-8 sm:p-10 ${className}`}
      style={{
        // Surface
        background: 'rgba(255,255,255,0.08)',
        // Flou selon l’exemple (12px)
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        // Bordure claire et lumineuse
        border: '1px solid rgba(255,255,255,0.3)',
        // Ombres extérieures et intérieures pour le relief (proches de l’exemple)
        boxShadow: [
          '0 8px 32px rgba(0,0,0,0.10)',
          'inset 0 1px 0 rgba(255,255,255,0.5)',
          'inset 0 -1px 0 rgba(255,255,255,0.1)',
          'inset 0 0 8px 4px rgba(255,255,255,0.4)'
        ].join(', '),
      }}
    >
      {children}

      {/* Traits de lumière comme dans le CSS fourni */}
      <style>{`
        .glass-card { position: relative; overflow: hidden; }
        /* Trait horizontal lumineux en haut */
        .glass-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
        }
        /* Trait vertical doux à gauche */
        .glass-card::after {
          content: '';
          position: absolute; top: 0; left: 0; width: 1px; height: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3));
        }
      `}</style>
    </div>
  )
}
