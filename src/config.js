// Configuration principale (textes, date, palette)

export const countdownTarget = '2025-11-24T00:00:00+01:00' // date de l'anniversaire

export const heroText = {
  title: 'Pour toi, mon amour',
  subtitle: 'Quelque chose arrive pour ton jour spécial bab...',
  waiting: 'Encore un peu de patience',
  readyBtn: 'Ouvrir ta surprise 🎁',
}

export const storyIntro = {
  heading: 'Notre histoire',
  sub: 'Merci dexister',
}

export const finalMessage = 'Je taime plus que ce que je saurai jamais te dire'

// Photos de la galerie de souvenirs
export const photos = [
  { src: '/images/musee.jpg', caption: 'Date nigth au musée 🖼️', date: '18-05-2024', description: 'Une magnifique soirée au musée, pleine avec Séphora, plein d\'art et d\'émotions' },
  { src: '/images/anarchiste.jpg', caption: 'Toi l\'anarchiste ❤️', date: '06-06-2024', description: 'Ma petite militante qui pose devant des tags de socialiste' },
  { src: '/images/anniversaire-belinda2.jpeg', caption: 'One Year Ago 🎉', date: '24-11-2024', description: 'Il y a un an déjà... je me souviens de cette soirée comme si c\'était hier' },
  { src: '/images/anniversaire-belinda.jpeg', caption: 'Souvenir d\'anniversaire 🎂', date: '24-11-2024', description: 'Une soirée mémorable avec toi' },
  { src: '/images/ascenseur.png', caption: '1er Date avec ma mère ❤️', date: '08-06-2024', description: 'Ta première rencontre avec ma mère, un moment que je n\'oublierai jamais' },
  { src: '/images/bcn-belinda.jpeg', caption: 'Toi + le magnifique ciel de Barcelone 🌅', date: '10-10-2024', description: 'Un magnifique couché de soleil comme tu les aime, la lune qui nous accompagne... Je peux en pleurer' },
  { src: '/images/belinda1.jpeg', caption: 'Le soleil, ton meilleur Make Up ☀️', date: '02-10-2024', description: 'Tu es SI BELLE. Un rien te suffit, le soleil t\'aime tout autant que je t\'aime' },
  { src: '/images/brunch.jpeg', caption: 'Brunch 🍳', date: '31-08-2024', description: 'Un moment de partage et de gourmandise, un outfit au point, tout pour me rendre heureux' },
  { src: '/images/nini.jpeg', caption: 'Notre journée avec Nini ❤️', date: '21-01-2025', description: 'Une sieste bien mérité avec les deux amour de ma vie (MDR Nini était tellement fatiguée' },
  { src: '/images/etoile.jpeg', caption: 'Première prière 🙏', date: '15-07-2024', description: 'Notre première prière ensemble, un souvenir doux-amer mais qui avec le temps est de plus en plus fort... En tout cas, un moment unique en son genre.' },
  { src: '/images/fleur.jpeg', caption: 'Moi et des fleurs 🌸', date: '13-03-2025', description: 'Symbole de notre relation : moi qui t\'offre des fleurs. Ma façon de te montrer mon amour tout simplement' },
  { src: '/images/stade.JPG', caption: 'Les Jeux Olympiques 🏅', date: '04-08-2025', description: 'J\'oublierais jamais cet été de ma vie entière... L\'ambiance était incroyable à chaque événement ! Tout ça me manque' },
  { src: '/images/london.jpeg', caption: 'Toi à mon bday 😛', date: '29-12-2024', description: 'Une magnifique surprise à Londres, je n\'oublierais jamais ce que tu as fais pour moi' },
  { src: '/images/london-bday.jpeg', caption: 'On est si beau...', date: '29-12-2024', description: 'Une de mes photos préférés de nous deux' },
  { src: '/images/mariage-lorella.jpeg', caption: 'C\'est toi la mariée ouuuu..? 🌭', date: '16-08-2024', description: 'Alala ce mariage, quel moment inoubliable ! Que de péripéties, mais un souvenir qui restera à JAMAIS' },
  { src: '/images/mariage-nanou.jpeg', caption: 'Un autre mariage, bien plus chargé en émotion', date: '07-12-2024', description: 'Quel souvenir chargé en émotion, quelle robe de fou furieux... tu es incroyable sur cette photo' },
  { src: '/images/picnique.jpeg', caption: 'Le meilleur picnic du MONDE 🧺', date: '23-06-2024', description: 'On à surement fait le meilleur picnic du monde ce jour là, toi, de la musique, de la bonne bouffe et une sieste dans tes bras... C\'était juste magique' },
  { src: '/images/polaroid.jpeg', caption: 'Un récap du best bday ever', date: '29-12-2024', description: 'Les polaroïds de mon anniversaire à Londres, on les montreras à Keziah eheh' },
  { src: '/images/ramy.jpeg', caption: 'Tu me rends heureux...', date: '04-01-2025', description: 'Ca ne se voit pas forcément sur la photo mais je te jure que je suis l\'homme le plus heureux du monde à tes côtés' },
  { src: '/images/royal-torcy.jpeg', caption: 'Toi + le ciel, un feat qui marche ⛅', date: '21-05-2024', description: 'Le Royal Torcy c\'est un peu notre QG depuis toujours, n\'est-ce pas ?' },
  { src: '/images/soleil-malte.png', caption: 'Un couchée de soleil près de Malte... 🌇', date: '16-07-2024', description: 'Je ne vais pas mettre tous les couchée de soleil de malte... C\'est juste trop beau, trop de souvenirs, trop d\'émotions' },
  { src: '/images/asake.jpg', caption: 'Notre premier concert ensemble 🎤', date: '28-09-2024', description: 'Le concert d\'Asake, une expérience c\'était incroyable !' },
  { src: '/images/train.jpeg', caption: 'Je t\'aime plus que tout ❤️', date: '25-07-2024', description: 'J\'aime juste trop cette photo' },
  { src: '/images/vulgaire.jpeg', caption: 'Quelle vulgarité !', date: '28-06-2024', description: 'ça se passe de commentaire...' },
  { src: '/images/pref.JPG', caption: 'Ma photo pref de nous deux...', date: '14-07-2024', description: 'Juste ma photo préféré, celle qui est à côté de mon lit, qui me regarde quand je dors...' },
  { src: '/images/piscine.jpg', caption: 'Ma photo seconde pref', date: '16-07-2024', description: 'La photo qui me regarde travailler, j\'aime juste trop ce moment, au-delà d\'aimer la photo...' },
  { src: '/images/malte.jpg', caption: 'Le plus beau souvenir de malte ☀️', date: '18-07-2024', description: 'Ce moment vaut 1000 mots, rien n\'est assez fort pour décrire ce moment passé avec toi. Le meilleur souvenir que j\'ai avec toi à Malte...' },
  { src: '/images/crybaby.jpg', caption: 'J\'étais obligé...', date: '17-07-2024', description: 'Mon petit crybaby mdrrrrrrrrrrrrrrrrrrrrrrrrr' },
  { src: '/images/belinda3.jpg', caption: 'Tu es belle de dos (:', date: '31-08-2024', description: 'Tu es magnifique, sous tous tes angles, tu me fais juste perdre la tête' },
  { src: '/images/nousdeux.jpg', caption: 'Ce jour la devant le plus beau couché de soleil de ma vie', date: '17-07-2024', description: 'Sur cette falaise, des heures de uber pour y arriver, toi en larme émerveillé par ce spectacle. Un de mes plus beau souvenir...' },
]

// Palette coucher de soleil pastel
export const theme = {
  pinkPastel: '#FFB5C5',
  peach: '#FFCBA4',
  nudeBeige: '#F5E6D3',
  softGold: '#E8D5B7',

  // Dégradé principal arrière plan
  gradientFrom: '#FFB5C5',
  gradientVia: '#FFCBA4',
  gradientTo: '#F5E6D3', 

  // Styles glassmorphism
  cardBg: 'rgba(255, 255, 255, 0.22)',
  cardBorder: 'rgba(255, 255, 255, 0.55)',
  textColor: '#ffffff',
}
