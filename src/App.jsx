import React, { useState, useMemo, useEffect } from 'react';
import {
  ShoppingBag,
  Search,
  Heart,
  Phone,
  Truck,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Star,
  X,
  Plus,
  Minus,
  CheckCircle2,
  MapPin,
  SlidersHorizontal,
  Award,
  Flame,
  Droplets,
  Wind,
  Clock,
  Package,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Menu,
  ArrowRight,
  Gift,
  Percent,
  Building2,
  Camera,
  Upload,
  RotateCcw,
  Eye,
  Bell,
  Send,
  Mail,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  Settings,
  ClipboardList,
  Trash2
} from 'lucide-react';

// --- CONSTANTS: ALADIN BRANDING & CONTACT ---
const STORE_PHONE_DISPLAY = "+216 94 318 153";
const STORE_WHATSAPP_NUMBER = "21694318153";

// --- BESPOKE ROYAL ORIENTAL GOLD EMBLEM CREST FOR "ALADIN PARFUMS DE LUXE" ---
const AladinRoyalCrest = ({ size = "md" }) => {
  const dimensions =
    size === "lg"
      ? "w-16 h-16"
      : size === "sm"
      ? "w-9 h-9"
      : "w-12 h-12";

  return (
    <div
      className={`${dimensions} relative rounded-full p-[1.5px] bg-gradient-to-br from-amber-200 via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 shrink-0 select-none group`}
    >
      <div className="w-full h-full rounded-full bg-[#070913] flex items-center justify-center relative overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1 transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="aladinGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>
          {/* Outer Ornate Medallion Ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#aladinGold)"
            strokeWidth="1.6"
            strokeDasharray="3 2"
          />
          <circle
            cx="50"
            cy="50"
            r="41"
            stroke="url(#aladinGold)"
            strokeWidth="1"
            opacity="0.7"
          />
          {/* Oriental Arch Dome */}
          <path
            d="M26 66 C26 42, 38 25, 50 16 C62 25, 74 42, 74 66"
            stroke="url(#aladinGold)"
            strokeWidth="1.5"
            fill="rgba(212,175,55,0.06)"
          />
          {/* Luxury Perfume Flacon Neck & Cap (Right Center) */}
          <rect
            x="53"
            y="29"
            width="10"
            height="4"
            rx="1"
            fill="url(#aladinGold)"
          />
          <rect
            x="55"
            y="33"
            width="6"
            height="4"
            fill="url(#aladinGold)"
          />
          <path
            d="M50 45 C50 39, 66 39, 66 45 L66 56 C66 60, 50 60, 50 56 Z"
            stroke="url(#aladinGold)"
            strokeWidth="1.5"
            fill="rgba(212,175,55,0.15)"
          />
          {/* Aladin Magic Lamp Silhouette (Foreground) */}
          <path
            d="M20 56 C27 56, 32 64, 46 64 C60 64, 68 56, 79 49 C74 63, 62 71, 46 71 C33 71, 25 65, 20 56 Z"
            fill="url(#aladinGold)"
          />
          {/* Lamp Handle & Lid */}
          <path
            d="M23 56 C17 52, 18 44, 25 46 C28 47, 28 52, 24 55"
            stroke="url(#aladinGold)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M40 56 C43 51, 49 51, 52 56"
            stroke="url(#aladinGold)"
            strokeWidth="1.8"
            fill="#070913"
          />
          {/* Lamp Base */}
          <path
            d="M38 74 L54 74 M42 71 L50 71"
            stroke="url(#aladinGold)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Golden Scent Swirl / Genie Mist */}
          <path
            d="M77 47 C82 39, 73 31, 69 24 C66 19, 72 14, 76 16"
            stroke="url(#aladinGold)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Sparkle Stars */}
          <circle cx="36" cy="36" r="1.6" fill="#FEF08A" />
          <circle cx="50" cy="24" r="1.4" fill="#FEF08A" />
        </svg>
      </div>
    </div>
  );
};

// --- LUXURY STUDIO PEDESTAL FOR REAL PERFUME PHOTOGRAPHS ---
const PerfumePhotoShowcase = ({
  product,
  size = 'md',
  studioTheme = 'ivory',
  customImageUrl
}) => {
  const [imgError, setImgError] = useState(false);
  const activeImage = customImageUrl || product.imageUrl;

  const containerClasses =
    size === 'lg'
      ? 'w-full h-72 sm:h-80 rounded-2xl p-6'
      : size === 'sm'
      ? 'w-14 h-16 rounded-xl p-1.5'
      : 'w-full h-60 rounded-2xl p-5';

  const imgClasses =
    size === 'lg'
      ? 'max-h-60 sm:max-h-64'
      : size === 'sm'
      ? 'max-h-12'
      : 'max-h-48';

  const pedestalStyle =
    studioTheme === 'ivory'
      ? 'bg-gradient-to-b from-white via-[#FCFBF7] to-[#F2ECE1] border-amber-500/30 shadow-[inset_0_0_25px_rgba(212,175,55,0.12)]'
      : studioTheme === 'pure'
      ? 'bg-white border-zinc-200 shadow-inner'
      : 'bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#E6DEC8] border-amber-400/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]';

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden border transition-all duration-500 select-none group ${containerClasses} ${pedestalStyle}`}
    >
      {/* Subtle Top Gold Spotlight */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-24 rounded-full blur-2xl opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-75"
        style={{
          background: `radial-gradient(circle, ${product.accentColor || '#D4AF37'}, transparent 70%)`
        }}
      />

      {/* Decorative Corner Luxury Framing */}
      {size !== 'sm' && (
        <>
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-amber-600/40 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-amber-600/40 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-amber-600/40 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-amber-600/40 pointer-events-none" />
        </>
      )}

      {/* Subtle Pedestal Floor Reflection */}
      {size !== 'sm' && (
        <div className="absolute bottom-3 w-2/3 h-3 rounded-full bg-amber-950/10 blur-md pointer-events-none group-hover:scale-110 transition-transform duration-500" />
      )}

      {/* Official Perfume Bottle Image */}
      {!imgError && activeImage ? (
        <img
          src={activeImage}
          alt={`${product.brand} - ${product.name}`}
          onError={() => setImgError(true)}
          loading="lazy"
          className={`${imgClasses} w-auto object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-110 relative z-10`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-2 text-zinc-700">
          <Sparkles className="w-8 h-8 text-amber-600 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">
            {product.brand}
          </span>
          <span className="text-xs font-serif font-bold text-zinc-900">
            {product.name}
          </span>
        </div>
      )}

      {/* Authentic Seal Watermark on Large View */}
      {size === 'lg' && (
        <div className="absolute bottom-2.5 right-3 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-950/85 text-amber-300 text-[10px] font-bold tracking-wider uppercase shadow">
          <ShieldCheck className="w-3 h-3 text-amber-400" />
          Aladin Authentique
        </div>
      )}
    </div>
  );
};

// --- REALISTIC TUNISIAN PERFUME CATALOG DATA WITH OFFICIAL BOTTLE PHOTOS ---
const PERFUMES_DATA = [
  {
    id: 1,
    name: "Khamrah",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 88,
    oldPrice: 115,
    gender: "Unisexe",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviews: 342,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.75805.jpg",
    primaryColor: "#7c2d12",
    accentColor: "#d97706",
    shortLabel: "KHAMRAH",
    inspiration: "Oriental Gourmand Épicé — Le N°1 des ventes en Tunisie",
    description: "Un élixir oriental somptueux mêlant la chaleur de la cannelle, la douceur des dattes confites et un fond praliné vanillé irrésistible dans un flacon cristal iconique. Tenue extrême de plus de 12 heures.",
    topNotes: ["Cannelle", "Noix de Muscade", "Bergamote"],
    heartNotes: ["Dattes", "Praliné", "Tubéreuse", "Mahonial"],
    baseNotes: ["Vanille", "Fève Tonka", "Bois d'Akigala", "Myrrhe", "Benjoin"],
    longevity: 96,
    sillage: 94,
    accords: ["Gourmand", "Épicé chaud", "Vanille", "Sucré"]
  },
  {
    id: 2,
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 92,
    oldPrice: 120,
    gender: "Unisexe",
    category: "Nouveautés",
    isPromo: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviews: 218,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.88175.jpg",
    primaryColor: "#3e1f0d",
    accentColor: "#a16207",
    shortLabel: "QAHWA",
    inspiration: "Café Arabica Torréfié, Cardamome & Praliné Royal",
    description: "Une déclinaison intense et mystérieuse du célèbre Khamrah, sublimée par une note de café arabica corsé, de cardamome verte, de gingembre et de fruits confits.",
    topNotes: ["Cardamome", "Gingembre", "Cannelle"],
    heartNotes: ["Praliné", "Fruits Confits", "Fleurs Blanches"],
    baseNotes: ["Café Arabica", "Vanille", "Fève Tonka", "Benjoin", "Musc"],
    longevity: 98,
    sillage: 95,
    accords: ["Café", "Épicé", "Gourmand", "Vanille"]
  },
  {
    id: 3,
    name: "Asad",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 75,
    oldPrice: 95,
    gender: "Homme",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
    reviews: 412,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.72821.jpg",
    primaryColor: "#09090b",
    accentColor: "#d4af37",
    shortLabel: "ASAD",
    inspiration: "Puissance Masculine — Épices Noires, Tabac & Vanille Ambrée",
    description: "Un parfum masculin puissant et racé dans son flacon noir et or. Le poivre noir rencontre le tabac blond et l'ananas, soutenus par un cœur de café et une vanille sèche boisée.",
    topNotes: ["Poivre Noir", "Tabac", "Ananas"],
    heartNotes: ["Patchouli", "Café", "Iris"],
    baseNotes: ["Vanille", "Ambre", "Bois Secs", "Benjoin", "Labdanum"],
    longevity: 92,
    sillage: 90,
    accords: ["Épicé frais", "Ambré", "Boisé", "Tabac"]
  },
  {
    id: 4,
    name: "Yara Rose",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 72,
    oldPrice: 90,
    gender: "Femme",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviews: 389,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.76880.jpg",
    primaryColor: "#db2777",
    accentColor: "#f472b6",
    shortLabel: "YARA",
    inspiration: "Douceur Lactée, Fruits Tropicaux & Vanille Poudrée",
    description: "L'icône féminine par excellence en Tunisie. Un nuage velouté d'orchidée, de fruits tropicaux crémeux et de vanille poudrée qui attire tous les compliments.",
    topNotes: ["Orchidée", "Héliotrope", "Mandarine"],
    heartNotes: ["Accord Gourmand", "Fruits Tropicaux"],
    baseNotes: ["Vanille", "Musc Blanc", "Bois de Santal"],
    longevity: 88,
    sillage: 86,
    accords: ["Sucré", "Poudré", "Vanille", "Tropical"]
  },
  {
    id: 5,
    name: "Angham",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 68,
    oldPrice: 88,
    gender: "Femme",
    category: "Nouveautés",
    isPromo: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviews: 167,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.96768.jpg",
    primaryColor: "#a16207",
    accentColor: "#fde047",
    shortLabel: "ANGHAM",
    inspiration: "Symphonie Dorée de Lavande, Praliné & Vanille Cacao",
    description: "Une harmonie envoûtante où la fraîcheur aromatique de la lavande et du gingembre se fond dans un trio exquis de vanille infusée, de praliné et de cacao.",
    topNotes: ["Mandarine", "Gingembre", "Poivre Rose"],
    heartNotes: ["Lavande", "Praliné", "Cacao", "Jasmin"],
    baseNotes: ["Vanille", "Ambre", "Musc"],
    longevity: 90,
    sillage: 88,
    accords: ["Vanille", "Aromatique", "Doux", "Cacao"]
  },
  {
    id: 6,
    name: "Eclaire",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 75,
    oldPrice: 98,
    gender: "Femme",
    category: "Nouveautés",
    isPromo: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviews: 204,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.93628.jpg",
    primaryColor: "#b45309",
    accentColor: "#fcd34d",
    shortLabel: "ECLAIRE",
    inspiration: "Caramel Fondant, Lait Chaud, Miel & Vanille Gourmande",
    description: "La révélation gourmande de Lattafa. Un délice irrésistible de caramel beurre salé, de lait sucré, de miel doré et de praliné vanillé au sillage ultra-complimenté.",
    topNotes: ["Caramel", "Lait Chaud", "Sucre"],
    heartNotes: ["Miel Doré", "Fleurs Blanches"],
    baseNotes: ["Vanille", "Praliné", "Musc Crémeux"],
    longevity: 93,
    sillage: 91,
    accords: ["Gourmand", "Caramel", "Vanille", "Lacté"]
  },
  {
    id: 7,
    name: "Bade'e Al Oud Honor & Glory",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 70,
    oldPrice: 95,
    gender: "Unisexe",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
    reviews: 192,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.84302.jpg",
    primaryColor: "#d97706",
    accentColor: "#fef08a",
    shortLabel: "HONOR & GLORY",
    inspiration: "Ananas Crème Brûlée, Curcuma Épicé & Vanille Santal",
    description: "Dans son flacon blanc et or sculptural, Honor & Glory marie l'exotisme d'un ananas rôti façon crème brûlée à la chaleur de la cannelle, du poivre noir et du bois de santal.",
    topNotes: ["Ananas", "Crème Brûlée"],
    heartNotes: ["Cannelle", "Benjoin", "Curcuma", "Poivre Noir"],
    baseNotes: ["Vanille", "Bois de Santal", "Cashmeran", "Mousse"],
    longevity: 91,
    sillage: 89,
    accords: ["Fruité", "Gourmand", "Épicé chaud", "Vanille"]
  },
  {
    id: 8,
    name: "9PM",
    brand: "Afnan",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 95,
    oldPrice: 125,
    gender: "Homme",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviews: 310,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.65414.jpg",
    primaryColor: "#18181b",
    accentColor: "#ca8a04",
    shortLabel: "9 PM",
    inspiration: "Le Roi des Soirées — Pomme Croquante, Cannelle & Vanille",
    description: "Le parfum de soirée par excellence. Une ouverture vibrante de pomme rouge, bergamote et cannelle qui fond sur un lit sensuel de vanille ambrée et de fève tonka.",
    topNotes: ["Pomme", "Cannelle", "Lavande sauvage", "Bergamote"],
    heartNotes: ["Fleur d'oranger", "Muguet"],
    baseNotes: ["Vanille", "Fève Tonka", "Ambre", "Patchouli"],
    longevity: 94,
    sillage: 92,
    accords: ["Fruité", "Vanille", "Ambré", "Épicé doux"]
  },
  {
    id: 9,
    name: "Supremacy Not Only Intense",
    brand: "Afnan",
    concentration: "Extrait de Parfum",
    volume: "100ml",
    price: 145,
    oldPrice: 175,
    gender: "Homme",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviews: 225,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.68271.jpg",
    primaryColor: "#1e293b",
    accentColor: "#94a3b8",
    shortLabel: "SUPREMACY",
    inspiration: "Extrait Impérial — Cassis, Bergamote & Mousse de Chêne",
    description: "Un Extrait de Parfum à la performance monumentale. Une explosion fruitée-fumée de cassis, pomme et bergamote sur un fond noble de mousse de chêne, ambre gris et safran.",
    topNotes: ["Cassis", "Bergamote", "Pomme"],
    heartNotes: ["Mousse de Chêne", "Patchouli", "Lavande"],
    baseNotes: ["Ambre Gris", "Safran", "Musc"],
    longevity: 98,
    sillage: 96,
    accords: ["Fruité", "Boisé", "Fumé", "Frais"]
  },
  {
    id: 10,
    name: "Turathi Blue",
    brand: "Afnan",
    concentration: "Eau de Parfum",
    volume: "90ml",
    price: 115,
    oldPrice: 140,
    gender: "Homme",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviews: 184,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.70839.jpg",
    primaryColor: "#1d4ed8",
    accentColor: "#60a5fa",
    shortLabel: "TURATHI BLUE",
    inspiration: "Pamplemousse Scintillant, Ambre & Bois Précieux",
    description: "L'élégance méditerranéenne alliée au savoir-faire oriental. Un pamplemousse juteux et vibrant soutenu par des notes ambrées, boisées et musquées d'une grande noblesse.",
    topNotes: ["Pamplemousse", "Bergamote", "Mandarine"],
    heartNotes: ["Ambre", "Notes Boisées"],
    baseNotes: ["Musc", "Patchouli", "Épices Fraîches"],
    longevity: 92,
    sillage: 90,
    accords: ["Agrumes", "Ambré", "Boisé", "Frais"]
  },
  {
    id: 11,
    name: "Sharaf Blend",
    brand: "Zimaya",
    concentration: "Extrait de Parfum",
    volume: "100ml",
    price: 89,
    oldPrice: 115,
    gender: "Unisexe",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviews: 215,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.91883.jpg",
    primaryColor: "#92400e",
    accentColor: "#fbbf24",
    shortLabel: "SHARAF BLEND",
    inspiration: "Extrait de Parfum — Safran, Dattes & Vanille Liquoreuse",
    description: "Présenté dans un flacon cristal d'exception signé Zimaya, Sharaf Blend dévoile un accord liquoreux raffiné mêlant safran précieux, muscade, dattes royales et vanille fève tonka.",
    topNotes: ["Noix de Muscade", "Safran", "Dattes"],
    heartNotes: ["Vanille", "Praliné", "Tubéreuse"],
    baseNotes: ["Fève Tonka", "Bois d'Ambre", "Benjoin", "Musc"],
    longevity: 96,
    sillage: 93,
    accords: ["Gourmand", "Ambré", "Épicé chaud", "Boisé"]
  },
  {
    id: 12,
    name: "Fatima Pink",
    brand: "Zimaya",
    concentration: "Extrait de Parfum",
    volume: "100ml",
    price: 85,
    oldPrice: 110,
    gender: "Femme",
    category: "En Promotion",
    isPromo: true,
    isNew: false,
    isBestSeller: false,
    rating: 4.8,
    reviews: 142,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.92817.jpg",
    primaryColor: "#f43f5e",
    accentColor: "#fda4af",
    shortLabel: "FATIMA PINK",
    inspiration: "Bouquet Royal de Rose Turque, Litchi & Rhubarbe",
    description: "Un Extrait de Parfum floral-fruité sophistiqué présenté dans un écrin rose impérial. L'alliance pétillante de la rhubarbe et du litchi révèle un cœur de rose veloutée et de vanille musquée.",
    topNotes: ["Litchi", "Rhubarbe", "Bergamote", "Muscade"],
    heartNotes: ["Rose Turque", "Pivoine", "Vanille"],
    baseNotes: ["Cashmeran", "Musc Blanc", "Vétiver", "Encens"],
    longevity: 91,
    sillage: 89,
    accords: ["Floral", "Fruité", "Rose", "Frais"]
  },
  {
    id: 13,
    name: "Liquid Brun",
    brand: "French Avenue",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 125,
    oldPrice: 155,
    gender: "Homme",
    category: "Nouveautés",
    isPromo: true,
    isNew: true,
    isBestSeller: true,
    rating: 5.0,
    reviews: 194,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.94713.jpg",
    primaryColor: "#78350f",
    accentColor: "#f59e0b",
    shortLabel: "LIQUID BRUN",
    inspiration: "Haute Parfumerie Niche — Vanille Bourbon & Fleur d'Oranger",
    description: "La sensation mondiale signée French Avenue. Un chef-d'œuvre de vanille Bourbon enveloppée de fleur d'oranger lumineuse, cannelle fine, cardamome et praliné boisé.",
    topNotes: ["Cannelle", "Fleur d'oranger", "Cardamome", "Bergamote"],
    heartNotes: ["Vanille Bourbon", "Élémi"],
    baseNotes: ["Praliné", "Ambroxan", "Bois de Gaïac", "Musc"],
    longevity: 96,
    sillage: 93,
    accords: ["Vanille", "Boisé", "Cannelle", "Gourmand"]
  },
  {
    id: 14,
    name: "Spectre Ghost",
    brand: "French Avenue",
    concentration: "Eau de Parfum",
    volume: "80ml",
    price: 118,
    oldPrice: 145,
    gender: "Unisexe",
    category: "Nouveautés",
    isPromo: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviews: 116,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.94697.jpg",
    primaryColor: "#27272a",
    accentColor: "#e4e4e7",
    shortLabel: "SPECTRE GHOST",
    inspiration: "Gingembre Frais, Cardamome & Vanille Noire Boisée",
    description: "Un flacon avant-gardiste renfermant la plus belle vanille épicée du marché. Le gingembre frais, la bergamote et la cardamome illuminent une vanille boisée profonde et magnétique.",
    topNotes: ["Gingembre", "Cardamome", "Bergamote"],
    heartNotes: ["Poivre Rose", "Cassis", "Rose"],
    baseNotes: ["Vanille", "Cèdre", "Patchouli", "Benjoin"],
    longevity: 93,
    sillage: 90,
    accords: ["Vanille", "Épicé chaud", "Boisé", "Aromatique"]
  },
  {
    id: 15,
    name: "Royal Blend",
    brand: "French Avenue",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 115,
    oldPrice: 140,
    gender: "Unisexe",
    category: "Nouveautés",
    isPromo: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviews: 138,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.94022.jpg",
    primaryColor: "#451a03",
    accentColor: "#f59e0b",
    shortLabel: "ROYAL BLEND",
    inspiration: "Accord Cognac Boisé, Cannelle, Prune & Fève Tonka",
    description: "L'excellence de la collection French Avenue dans un flacon cristal ciselé. Un accord liquoreux et chaleureux de prune confite, cannelle épicée, fève tonka et vanille boisée.",
    topNotes: ["Cannelle", "Prune", "Accord Liquoreux"],
    heartNotes: ["Iris", "Myrrhe"],
    baseNotes: ["Fève Tonka", "Vanille", "Bois de Santal"],
    longevity: 95,
    sillage: 92,
    accords: ["Boisé", "Épicé chaud", "Ambré", "Vanille"]
  },
  {
    id: 16,
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    concentration: "Eau de Toilette",
    volume: "105ml",
    price: 110,
    oldPrice: 135,
    gender: "Homme",
    category: "Best-Sellers",
    isPromo: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
    reviews: 520,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.34696.jpg",
    primaryColor: "#09090b",
    accentColor: "#71717a",
    shortLabel: "CDNIM",
    inspiration: "La Légende Boisée Citronnée — Compliments Garantis",
    description: "Le best-seller mondial incontesté. Une attaque vive de citron, bergamote et ananas suivie d'un cœur de bouleau fumé et d'un fond ambre gris ultra masculin.",
    topNotes: ["Citron", "Ananas", "Bergamote", "Cassis", "Pomme"],
    heartNotes: ["Bouleau", "Jasmin", "Rose"],
    baseNotes: ["Musc", "Ambre Gris", "Patchouli", "Vanille"],
    longevity: 94,
    sillage: 95,
    accords: ["Agrumes", "Boisé fumé", "Fruité", "Cuiré"]
  },
  {
    id: 17,
    name: "Kismet Magic",
    brand: "Maison Alhambra",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 68,
    oldPrice: 85,
    gender: "Unisexe",
    category: "En Promotion",
    isPromo: true,
    isNew: false,
    isBestSeller: false,
    rating: 4.8,
    reviews: 162,
    imageUrl: "https://fimgs.net/mdimg/perfume/375x500.95138.jpg",
    primaryColor: "#451a03",
    accentColor: "#d97706",
    shortLabel: "KISMET MAGIC",
    inspiration: "Nectar Liquoreux de Fève Tonka, Cannelle & Vanille",
    description: "Un parfum chaleureux et envoûtant aux accents de miel épicé, de fève tonka grillée, de praliné noisette et de vanille ambrée. Idéal pour les soirées fraîches.",
    topNotes: ["Cannelle", "Bois de Chêne"],
    heartNotes: ["Fève Tonka", "Praliné", "Noisette"],
    baseNotes: ["Vanille", "Bois de Santal", "Miel Ambré"],
    longevity: 89,
    sillage: 87,
    accords: ["Boisé", "Vanille", "Cannelle", "Sucré"]
  }
];

const BRANDS = [
  { name: "Toutes", tagline: "Catalogue Complet", count: 17 },
  { name: "Lattafa", tagline: "Haute Parfumerie Dubai", count: 7 },
  { name: "Afnan", tagline: "Créations Exclusives", count: 3 },
  { name: "French Avenue", tagline: "Collection Niche Prestige", count: 3 },
  { name: "Zimaya", tagline: "Extraits Précieux", count: 2 },
  { name: "Armaf", tagline: "Signatures Iconiques", count: 1 },
  { name: "Maison Alhambra", tagline: "Éditions Privées", count: 1 }
];

const TUNISIAN_GOVERNORATES = [
  "Tunis", "Ariana", "Ben Arous", "La Manouba", "Sousse", "Sfax", "Nabeul",
  "Monastir", "Bizerte", "Mahdia", "Kairouan", "Gabès", "Médenine", "Gafsa",
  "Béja", "Jendouba", "Kasserine", "Kébili", "Le Kef", "Sidi Bouzid",
  "Siliana", "Tataouine", "Tozeur", "Zaghouan"
];

const HERO_SLIDES = [
  {
    id: 1,
    badge: "BOUTIQUE OFFICIELLE ALADIN • 100% AUTHENTIQUE IMPORTÉ DE DUBAÏ",
    title: "ALADIN — L'Élixir d'Orient & Parfums de Luxe en Tunisie",
    subtitle: "Découvrez les véritables flacons de Lattafa, French Avenue, Afnan, Zimaya et Armaf sélectionnés par Aladin. Garantie d'origine avec paiement à la livraison sur les 24 gouvernorats.",
    ctaPrimary: "Découvrir les Best-Sellers",
    featuredProductId: 1,
    highlightBrand: "Lattafa Khamrah & Qahwa",
    priceTag: "À partir de 68 DT"
  },
  {
    id: 2,
    badge: "EXCLUSIVITÉ ALADIN PARFUMS • FRENCH AVENUE",
    title: "Liquid Brun, Spectre Ghost & Royal Blend",
    subtitle: "Les créations les plus recherchées de French Avenue enfin disponibles chez Aladin Parfums. Tenue extrême et sillage royal livrés chez vous en 24h/48h.",
    ctaPrimary: "Explorer French Avenue",
    featuredProductId: 13,
    highlightBrand: "French Avenue Paris",
    priceTag: "Livraison Gratuite dès 250 DT"
  },
  {
    id: 3,
    badge: "SÉLECTION AFNAN & ZIMAYA • EXTRAITS DE PARFUM",
    title: "9PM, Supremacy & Sharaf Blend : L'Élégance Absolue",
    subtitle: "Des concentrations en Extrait de Parfum pour une signature olfactive inoubliable du matin jusqu'au bout de la nuit.",
    ctaPrimary: "Voir les Promotions",
    featuredProductId: 8,
    highlightBrand: "Afnan & Zimaya",
    priceTag: "Frais de livraison fixes : 8 DT"
  }
];

const FAQ_ITEMS = [
  {
    q: "Vos parfums chez Aladin Parfums sont-ils 100% originaux ?",
    a: "Absolument. Tous nos parfums (Lattafa, Afnan, Zimaya, French Avenue, Armaf, Maison Alhambra) sont importés directement des Émirats Arabes Unis avec leur hologramme d'authenticité officiel et sous blister scellé. Vous avez le droit de vérifier votre colis à la livraison."
  },
  {
    q: "Quels sont les délais et tarifs de livraison en Tunisie ?",
    a: "Nous livrons sur les 24 gouvernorats de la Tunisie en 24h à 48h ouvrables. Les frais de livraison sont fixes à 8.000 DT partout en Tunisie, et la livraison est GRATUITE dès 250 DT d'achat."
  },
  {
    q: "Comment fonctionne la confirmation de commande ?",
    a: "Dès validation de votre commande, Aladin reçoit instantanément votre bon de commande par notification automatique et WhatsApp (+216 94 318 153). Le paiement s'effectue en espèces à la livraison (Cash on Delivery)."
  },
  {
    q: "Proposez-vous la vente en gros pour les boutiques et revendeurs ?",
    a: "Oui ! Nous disposons d'un tarif préférentiel pour les commandes en gros (à partir de 12 pièces). Cliquez sur 'Commande en Gros' en haut de page ou contactez Aladin directement sur le +216 94 318 153."
  }
];

// --- HELPER: FORMAT CLEAN WHATSAPP & TEXT ORDER RECEIPT ---
const buildFormattedOrderReceipt = (order) => {
  const itemsLines = order.items
    .map(
      (i) =>
        `• ${i.quantity}x *${i.product.brand} ${i.product.name}* (${i.product.volume}) — ${
          i.product.price * i.quantity
        } DT`
    )
    .join("\n");

  return [
    `🧞‍♂️ *NOUVELLE COMMANDE — ALADIN PARFUMS*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `🔖 *Réf :* ${order.ref}`,
    `📅 *Date :* ${order.date}`,
    ``,
    `👤 *CLIENT :*`,
    `• Nom : ${order.customer.fullName}`,
    `• Tél : ${order.customer.phone}`,
    `• Gouvernorat : ${order.customer.governorate}`,
    `• Adresse : ${order.customer.address}`,
    order.customer.notes ? `• Note : ${order.customer.notes}` : null,
    ``,
    `🛍️ *ARTICLES COMMANDÉS :*`,
    itemsLines,
    ``,
    `💰 *RÉCAPITULATIF :*`,
    `• Sous-total : ${order.subtotal.toFixed(3)} DT`,
    `• Livraison : ${
      order.shipping === 0 ? "GRATUITE (0 DT)" : `${order.shipping.toFixed(3)} DT`
    }`,
    `• *TOTAL À PAYER (Cash à la livraison) : ${order.total.toFixed(3)} DT*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `Merci de confirmer ma commande Aladin Parfums !`
  ]
    .filter(Boolean)
    .join("\n");
};

export default function App() {
  // Navigation & Filtering State
  const [selectedBrand, setSelectedBrand] = useState("Toutes");
  const [selectedGender, setSelectedGender] = useState("Tous");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedNoteFilter, setSelectedNoteFilter] = useState("Toutes");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Studio Pedestal Theme & Custom Image Overrides
  const [studioTheme, setStudioTheme] = useState("ivory");
  const [customImages, setCustomImages] = useState({});
  const [selectedProductForPhoto, setSelectedProductForPhoto] = useState(PERFUMES_DATA[0].id);
  const [customUrlInput, setCustomUrlInput] = useState("");

  // Admin Hub Modal State (Tabs: 'notifications' | 'orders' | 'photos')
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminTab, setAdminTab] = useState("notifications");

  // Option 1 & Option 3 Notification Settings (Persisted in localStorage)
  const [notificationConfig, setNotificationConfig] = useState(() => {
    try {
      const saved = localStorage.getItem("aladin_notif_config");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore storage errors
    }
    return {
      whatsappAutoRedirect: true,
      whatsappNumber: STORE_WHATSAPP_NUMBER,
      enableEmailAlert: false,
      adminEmail: "",
      customWebhookUrl: "",
      enableTelegramAlert: false,
      telegramBotToken: "",
      telegramChatId: ""
    };
  });

  // Saved Orders Log (Persisted in localStorage so Aladin can view all orders)
  const [savedOrders, setSavedOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("aladin_orders_log");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("aladin_notif_config", JSON.stringify(notificationConfig));
    } catch (e) {
      // ignore
    }
  }, [notificationConfig]);

  useEffect(() => {
    try {
      localStorage.setItem("aladin_orders_log", JSON.stringify(savedOrders));
    } catch (e) {
      // ignore
    }
  }, [savedOrders]);

  // Cart & Wishlist State (Fresh & Empty for New Visitors)
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Modals State
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewQty, setQuickViewQty] = useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWholesaleModalOpen, setIsWholesaleModalOpen] = useState(false);
  const [orderSuccessData, setOrderSuccessData] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [testAlertStatus, setTestAlertStatus] = useState(null);

  // Tunisian COD Checkout Form State
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: "",
    phone: "",
    governorate: "Tunis",
    city: "",
    address: "",
    notes: ""
  });
  const [formError, setFormError] = useState("");

  // Wholesale Inquiry Form State
  const [wholesaleForm, setWholesaleForm] = useState({
    shopName: "",
    phone: "",
    governorate: "Tunis",
    estimatedQuantity: "12 - 30 pièces"
  });
  const [wholesaleSent, setWholesaleSent] = useState(false);

  // Auto-advance Hero Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  // Toast helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3400);
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return PERFUMES_DATA.filter((item) => {
      const matchesBrand = selectedBrand === "Toutes" || item.brand === selectedBrand;
      const matchesGender = selectedGender === "Tous" || item.gender === selectedGender;
      const matchesCategory =
        selectedCategory === "Tous" ||
        (selectedCategory === "En Promotion" && item.isPromo) ||
        (selectedCategory === "Nouveautés" && item.isNew) ||
        (selectedCategory === "Best-Sellers" && item.isBestSeller) ||
        item.category === selectedCategory;

      const matchesNote =
        selectedNoteFilter === "Toutes" ||
        item.accords.some((a) => a.toLowerCase().includes(selectedNoteFilter.toLowerCase())) ||
        [...item.topNotes, ...item.heartNotes, ...item.baseNotes].some((n) =>
          n.toLowerCase().includes(selectedNoteFilter.toLowerCase())
        );

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.inspiration.toLowerCase().includes(q) ||
        [...item.topNotes, ...item.heartNotes, ...item.baseNotes].some((n) =>
          n.toLowerCase().includes(q)
        );

      return matchesBrand && matchesGender && matchesCategory && matchesNote && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });
  }, [selectedBrand, selectedGender, selectedCategory, selectedNoteFilter, searchQuery, sortBy]);

  // Cart Calculations (in Tunisian Dinar - DT)
  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 250;
  const shippingFee = cartSubtotal === 0 ? 0 : cartSubtotal >= freeShippingThreshold ? 0 : 8;
  const cartTotal = cartSubtotal + shippingFee;

  // Cart Actions
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + qty, 10) }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    showToast(`${product.brand} ${product.name} ajouté au panier !`);
  };

  const updateCartQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (productId) => {
    const targetProduct = PERFUMES_DATA.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        if (targetProduct) {
          showToast(`${targetProduct.name} retiré de vos favoris.`);
        }
        return prev.filter((id) => id !== productId);
      } else {
        if (targetProduct) {
          showToast(`${targetProduct.brand} ${targetProduct.name} ajouté aux favoris ♥`);
        }
        return [...prev, productId];
      }
    });
  };

  const handleDirectOrder = (product, qty = 1) => {
    addToCart(product, qty);
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  // --- OPTION 3: SILENT BACKGROUND NOTIFICATIONS (TELEGRAM BOT + EMAIL / WEBHOOK) ---
  const triggerBackgroundNotifications = async (orderPayload) => {
    const channelsSent = [];
    const plainReceipt = buildFormattedOrderReceipt(orderPayload);

    // 3A. Telegram Bot API Instant Push Notification
    if (
      notificationConfig.enableTelegramAlert &&
      notificationConfig.telegramBotToken.trim() &&
      notificationConfig.telegramChatId.trim()
    ) {
      try {
        const tgUrl = `https://api.telegram.org/bot${notificationConfig.telegramBotToken.trim()}/sendMessage`;
        const res = await fetch(tgUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: notificationConfig.telegramChatId.trim(),
            text: plainReceipt,
            parse_mode: "Markdown"
          })
        });
        if (res.ok) channelsSent.push("Telegram");
      } catch (err) {
        // Silent catch so customer checkout never breaks
      }
    }

    // 3B. Automated Email Alert via FormSubmit.co Zero-Config AJAX or Custom Webhook (Formspree / Make)
    if (notificationConfig.enableEmailAlert) {
      const itemsSummary = orderPayload.items
        .map((i) => `${i.quantity}x ${i.product.brand} ${i.product.name} (${i.product.price * i.quantity} DT)`)
        .join(" | ");

      if (notificationConfig.adminEmail.trim()) {
        try {
          const emailEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(
            notificationConfig.adminEmail.trim()
          )}`;
          const res = await fetch(emailEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              _subject: `🛍️ Nouvelle Commande Aladin Parfums (${orderPayload.ref}) - ${orderPayload.total} DT`,
              Reference: orderPayload.ref,
              Client: orderPayload.customer.fullName,
              Telephone: orderPayload.customer.phone,
              Gouvernorat: orderPayload.customer.governorate,
              Adresse: orderPayload.customer.address,
              Notes: orderPayload.customer.notes || "Aucune",
              Articles: itemsSummary,
              Total_DT: `${orderPayload.total.toFixed(3)} DT (Paiement à la livraison)`
            })
          });
          if (res.ok) channelsSent.push("Email");
        } catch (err) {
          // ignore
        }
      }

      if (notificationConfig.customWebhookUrl.trim()) {
        try {
          const res = await fetch(notificationConfig.customWebhookUrl.trim(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              store: "ALADIN Parfums de Luxe",
              order: orderPayload,
              receiptText: plainReceipt
            })
          });
          if (res.ok) channelsSent.push("Webhook");
        } catch (err) {
          // ignore
        }
      }
    }

    return channelsSent;
  };

  // --- CHECKOUT SUBMIT: COMBINES OPTION 1 (WHATSAPP REDIRECT) + OPTION 3 (SILENT PUSH) ---
  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    const cleanPhone = checkoutForm.phone.replace(/\s+/g, "");
    if (!checkoutForm.fullName.trim()) {
      setFormError("Veuillez saisir votre Nom et Prénom.");
      return;
    }
    if (!/^\d{8}$/.test(cleanPhone)) {
      setFormError("Veuillez saisir un numéro de téléphone tunisien valide à 8 chiffres (ex: 94318153).");
      return;
    }
    if (!checkoutForm.address.trim()) {
      setFormError("Veuillez indiquer votre adresse de livraison exacte.");
      return;
    }

    setIsSubmittingOrder(true);

    const orderRef = "ALADIN-" + Math.floor(100000 + Math.random() * 900000);
    const nowStr = new Date().toLocaleString("fr-TN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newOrder = {
      ref: orderRef,
      date: nowStr,
      status: "Nouvelle",
      customer: { ...checkoutForm, phone: cleanPhone },
      items: [...cart],
      subtotal: cartSubtotal,
      shipping: shippingFee,
      total: cartTotal,
      notifiedChannels: ["WhatsApp"]
    };

    const receiptText = buildFormattedOrderReceipt(newOrder);
    const whatsappTarget = (notificationConfig.whatsappNumber || STORE_WHATSAPP_NUMBER).replace(
      /\D/g,
      ""
    );
    const whatsappUrl = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(receiptText)}`;

    // Option 3: Fire silent background notifications (Telegram + Email/Webhook)
    const bgChannels = await triggerBackgroundNotifications(newOrder);
    newOrder.notifiedChannels = Array.from(new Set(["WhatsApp", ...bgChannels]));
    newOrder.whatsappUrl = whatsappUrl;
    newOrder.receiptText = receiptText;

    // Save to Admin Local Order Journal
    setSavedOrders((prev) => [newOrder, ...prev]);

    setIsSubmittingOrder(false);
    setOrderSuccessData(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);

    // Option 1: Instant WhatsApp Order Redirection to Aladin (+216 94 318 153)
    if (notificationConfig.whatsappAutoRedirect) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  // --- TEST NOTIFICATION BUTTON IN ADMIN PANEL ---
  const handleSendTestNotification = async (channelType) => {
    setTestAlertStatus("Envoi du test en cours...");
    const sampleOrder = {
      ref: "TEST-ALADIN-999",
      date: new Date().toLocaleString("fr-TN"),
      customer: {
        fullName: "Client Test (Aladin Store)",
        phone: "94318153",
        governorate: "Tunis",
        address: "Avenue Habib Bourguiba, Tunis",
        notes: "Test de notification automatique"
      },
      items: [{ product: PERFUMES_DATA[0], quantity: 1 }],
      subtotal: 88,
      shipping: 8,
      total: 96
    };

    if (channelType === "whatsapp") {
      const text = buildFormattedOrderReceipt(sampleOrder);
      const waUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setTestAlertStatus("✅ Redirection WhatsApp ouverte vers +216 94 318 153 !");
      return;
    }

    const sent = await triggerBackgroundNotifications(sampleOrder);
    if (sent.length > 0) {
      setTestAlertStatus(`✅ Alerte envoyée avec succès via : ${sent.join(", ")} !`);
    } else {
      setTestAlertStatus(
        "⚠️ Veuillez d'abord activer et remplir vos identifiants (Email ou Telegram) ci-dessous."
      );
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById("catalog-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Handle Custom Photo URL or Local File Upload
  const handleSaveCustomPhoto = (e) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;
    setCustomImages((prev) => ({
      ...prev,
      [selectedProductForPhoto]: customUrlInput.trim()
    }));
    setCustomUrlInput("");
    showToast("Photo du produit mise à jour avec succès !");
  };

  const handleLocalFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setCustomImages((prev) => ({
          ...prev,
          [selectedProductForPhoto]: reader.result
        }));
        showToast("Votre photo locale a été appliquée au flacon !");
      }
    };
    reader.readAsDataURL(file);
  };

  const resetCustomPhoto = (productId) => {
    setCustomImages((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
    showToast("Photo officielle restaurée.");
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-900 border border-amber-500/60 text-amber-100 px-5 py-3.5 rounded-xl shadow-2xl animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Floating WhatsApp Direct Button (Bottom Left) */}
      <a
        href={`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Bonjour Aladin Parfums ! Je souhaite avoir un conseil sur vos parfums."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-full shadow-2xl border border-emerald-400/40 transition group"
        title="Contacter Aladin sur WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="text-xs font-bold hidden sm:inline">
          WhatsApp Aladin • {STORE_PHONE_DISPLAY}
        </span>
      </a>

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-amber-950/90 via-zinc-900 to-amber-950/90 border-b border-amber-500/20 text-xs sm:text-sm py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-amber-200/95 font-medium mx-auto sm:mx-0">
            <Truck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Livraison rapide partout en Tunisie (24h–48h) •{" "}
              <strong className="text-amber-300">Frais fixes : 8 DT</strong> (Gratuite dès 250 DT)
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-zinc-300 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Parfums 100% Originaux Scellés
            </span>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => setIsWholesaleModalOpen(true)}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition underline-offset-4 hover:underline"
            >
              <Building2 className="w-3.5 h-3.5" />
              Commande en Gros
            </button>
            <span className="text-zinc-600">|</span>
            <a
              href={`tel:${STORE_WHATSAPP_NUMBER}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Service Client : <strong className="text-white">{STORE_PHONE_DISPLAY}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY LUXURY HEADER WITH ALADIN ROYAL EMBLEM */}
      <header className="sticky top-0 z-40 bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* ALADIN Brand Logo Crest */}
            <div
              onClick={() => {
                setSelectedBrand("Toutes");
                setSelectedGender("Tous");
                setSelectedCategory("Tous");
                setSelectedNoteFilter("Toutes");
                setSearchQuery("");
              }}
              className="cursor-pointer flex items-center gap-3 group"
            >
              <AladinRoyalCrest size="md" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-serif font-extrabold tracking-[0.14em] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                    ALADIN
                  </span>
                  <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold uppercase tracking-widest">
                    Parfums de Luxe
                  </span>
                </div>
                <span className="block text-[10px] tracking-[0.22em] text-zinc-400 uppercase">
                  L'Élixir d'Orient • Tunisie
                </span>
              </div>
            </div>

            {/* Instant Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher Khamrah, 9PM, Liquid Brun, Vanille, Oud..."
                  className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500/70 rounded-full pl-10 pr-9 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Wishlist Drawer Trigger */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 text-zinc-300 hover:text-amber-400 transition"
                title="Mes Favoris"
              >
                <Heart
                  className={`w-5 h-5 transition ${
                    wishlist.length > 0 ? "text-rose-400 fill-rose-400" : ""
                  }`}
                />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-bold flex items-center justify-center text-white shadow">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Trigger Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition shadow-lg shadow-amber-500/20"
              >
                <div className="relative flex items-center">
                  <ShoppingBag className="w-5 h-5" />
                  {cartTotalItems > 0 && (
                    <span className=" -top-2 -right-2 ml-1.5 w-4 h-4 rounded-full bg-zinc-950 text-amber-400 text-[10px] font-bold flex items-center justify-center">
                      {cartTotalItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline font-bold">
                  {cartTotalItems > 0 ? `${cartSubtotal.toFixed(0)} DT` : "Panier"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="mt-3 md:hidden">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un parfum chez Aladin..."
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500 rounded-full pl-10 pr-4 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Desktop Category Navigation Links */}
          <nav className="hidden lg:flex items-center justify-between pt-3 mt-3 border-t border-zinc-800/60 text-sm">
            <div className="flex items-center gap-6">
              {[
                { label: "Accueil", cat: "Tous", gender: "Tous" },
                { label: "Best-Sellers", cat: "Best-Sellers", gender: "Tous", icon: Flame },
                { label: "Nouveautés 2026", cat: "Nouveautés", gender: "Tous", icon: Sparkles },
                { label: "Parfums Homme", cat: "Tous", gender: "Homme" },
                { label: "Parfums Femme", cat: "Tous", gender: "Femme" },
                { label: "Unisexe", cat: "Tous", gender: "Unisexe" },
                { label: "En Promotion", cat: "En Promotion", gender: "Tous", icon: Percent, highlight: true }
              ].map((nav, idx) => {
                const IconComponent = nav.icon;
                const isActive =
                  selectedCategory === nav.cat && selectedGender === nav.gender && nav.label !== "Accueil";
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(nav.cat);
                      setSelectedGender(nav.gender);
                      scrollToCatalog();
                    }}
                    className={`flex items-center gap-1.5 font-medium transition ${
                      nav.highlight
                        ? "text-rose-400 hover:text-rose-300"
                        : isActive
                        ? "text-amber-400"
                        : "text-zinc-300 hover:text-amber-400"
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                    {nav.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Boutique Officielle Aladin • Importé des Émirats</span>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {["Tous", "Best-Sellers", "Nouveautés", "En Promotion"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setMobileMenuOpen(false);
                    scrollToCatalog();
                  }}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold text-left border ${
                    selectedCategory === cat
                      ? "bg-amber-500/20 border-amber-500 text-amber-300"
                      : "bg-zinc-900 border-zinc-800 text-zinc-300"
                  }`}
                >
                  {cat === "Tous" ? "Tout le Catalogue" : cat}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-xs text-zinc-400">
              <a href={`tel:${STORE_WHATSAPP_NUMBER}`} className="text-amber-300 font-semibold">
                📞 {STORE_PHONE_DISPLAY}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsWholesaleModalOpen(true);
                }}
                className="text-amber-300 font-semibold flex items-center gap-1"
              >
                <Building2 className="w-3.5 h-3.5" /> Espace Revendeurs
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER CAROUSEL */}
      <section className="relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-[#100e0b] to-zinc-950">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.25), transparent 50%), radial-gradient(circle at 80% 30%, rgba(180, 83, 9, 0.2), transparent 50%)`
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16 relative z-10">
          {HERO_SLIDES.map((slide, index) => {
            if (index !== currentHeroSlide) return null;
            const featuredPerfume =
              PERFUMES_DATA.find((p) => p.id === slide.featuredProductId) || PERFUMES_DATA[0];

            return (
              <div
                key={slide.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Column: Luxury Copywriting */}
                <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    {slide.badge}
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-[1.15]">
                    {slide.title}
                  </h1>

                  <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                    <button
                      onClick={scrollToCatalog}
                      className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold text-sm hover:brightness-110 transition shadow-xl shadow-amber-500/20 flex items-center gap-2"
                    >
                      {slide.ctaPrimary}
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        setQuickViewProduct(featuredPerfume);
                        setQuickViewQty(1);
                      }}
                      className="px-6 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-amber-500/40 text-amber-200 font-semibold text-sm transition"
                    >
                      Découvrir {featuredPerfume.name} ({featuredPerfume.price} DT)
                    </button>
                  </div>

                  {/* Key Trust Highlights */}
                  <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 border-t border-zinc-800/80 text-left">
                    <div>
                      <span className="block text-amber-400 font-bold text-sm sm:text-base">100% Original</span>
                      <span className="text-[11px] text-zinc-400">Importé de Dubaï (EAU)</span>
                    </div>
                    <div>
                      <span className="block text-amber-400 font-bold text-sm sm:text-base">Livraison 24/48h</span>
                      <span className="text-[11px] text-zinc-400">Partout en Tunisie (8 DT)</span>
                    </div>
                    <div>
                      <span className="block text-amber-400 font-bold text-sm sm:text-base">Confirmation Directe</span>
                      <span className="text-[11px] text-zinc-400">WhatsApp & Notification</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Spotlight Perfume Card */}
                <div className="lg:col-span-5">
                  <div className="relative mx-auto max-w-sm bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-amber-500/30 rounded-3xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                        ★ SÉLECTION ALADIN
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">
                        {featuredPerfume.volume} • {featuredPerfume.concentration}
                      </span>
                    </div>

                    <div
                      onClick={() => {
                        setQuickViewProduct(featuredPerfume);
                        setQuickViewQty(1);
                      }}
                      className="cursor-pointer py-2 group"
                    >
                      <PerfumePhotoShowcase
                        product={featuredPerfume}
                        size="lg"
                        studioTheme={studioTheme}
                        customImageUrl={customImages[featuredPerfume.id]}
                      />
                    </div>

                    <div className="text-center mt-3 space-y-2">
                      <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                        {featuredPerfume.brand}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white">
                        {featuredPerfume.name}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {featuredPerfume.inspiration}
                      </p>

                      <div className="pt-3 flex items-center justify-between border-t border-zinc-800/80">
                        <div className="text-left">
                          {featuredPerfume.oldPrice && (
                            <span className="text-xs text-zinc-500 line-through mr-2">
                              {featuredPerfume.oldPrice} DT
                            </span>
                          )}
                          <span className="text-2xl font-bold text-amber-400">
                            {featuredPerfume.price} DT
                          </span>
                        </div>
                        <button
                          onClick={() => addToCart(featuredPerfume, 1)}
                          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition flex items-center gap-1.5"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Ajouter au panier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Slide Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentHeroSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentHeroSlide === idx ? "w-8 bg-amber-400" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE BRAND SHOWCASE BAR */}
      <section className="py-8 bg-zinc-950/60 border-b border-zinc-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-amber-400 font-semibold">
                Nos Maisons de Parfumerie
              </h2>
              <p className="text-xs text-zinc-400">
                Cliquez sur une marque pour filtrer les parfums disponibles chez Aladin Parfums
              </p>
            </div>
            {selectedBrand !== "Toutes" && (
              <button
                onClick={() => setSelectedBrand("Toutes")}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1"
              >
                Afficher toutes les marques <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {BRANDS.map((b) => {
              const isSelected = selectedBrand === b.name;
              return (
                <button
                  key={b.name}
                  onClick={() => {
                    setSelectedBrand(b.name);
                    scrollToCatalog();
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-gradient-to-br from-amber-500/20 to-amber-900/20 border-amber-400 shadow-lg shadow-amber-500/10"
                      : "bg-zinc-900/70 border-zinc-800/90 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`font-serif font-bold text-sm ${
                        isSelected ? "text-amber-300" : "text-white"
                      }`}
                    >
                      {b.name}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                      {b.count}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-400 truncate w-full">{b.tagline}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MAIN CATALOG & OLFACTORY FILTERING SECTION */}
      <section id="catalog-section" className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-4 sm:p-5 mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Gender Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-zinc-400 mr-2 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" /> Genre :
              </span>
              {["Tous", "Homme", "Femme", "Unisexe"].map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(g)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                    selectedGender === g
                      ? "bg-amber-500 text-zinc-950 shadow"
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* Olfactory Note Quick Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-zinc-400 mr-1">Notes Olfactives :</span>
              {["Toutes", "Vanille", "Gourmand", "Boisé", "Café", "Fruité", "Épicé"].map((note) => (
                <button
                  key={note}
                  onClick={() => setSelectedNoteFilter(note)}
                  className={`px-3 py-1 rounded-full text-xs transition border ${
                    selectedNoteFilter === note
                      ? "bg-amber-500/20 border-amber-400 text-amber-300 font-semibold"
                      : "bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {note}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 ml-auto">
              <label className="text-xs text-zinc-400">Trier par :</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              >
                <option value="popular">Plus Populaires</option>
                <option value="price-asc">Prix : Croissant</option>
                <option value="price-desc">Prix : Décroissant</option>
                <option value="rating">Meilleures Notes</option>
              </select>
            </div>
          </div>

          {/* Active Filter Summary Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
            <div>
              Affichage de <strong className="text-white">{filteredProducts.length}</strong> parfum(s) chez{" "}
              <strong className="text-amber-400">Aladin Parfums</strong>
              {selectedBrand !== "Toutes" && (
                <span>
                  {" "}
                  • Marque : <strong className="text-amber-400">{selectedBrand}</strong>
                </span>
              )}
            </div>

            {/* Studio Pedestal Lighting Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-400 hidden sm:inline">Éclairage Studio :</span>
              {[
                { id: "ivory", label: "Ivoire Chaud" },
                { id: "gold", label: "Or Impérial" },
                { id: "pure", label: "Blanc Pur" }
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setStudioTheme(mode.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition ${
                    studioTheme === mode.id
                      ? "bg-amber-500/20 border-amber-400 text-amber-300"
                      : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-3xl border border-zinc-800 p-8">
            <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-3 opacity-80" />
            <h3 className="text-lg font-serif font-bold text-white mb-1">
              Aucun parfum ne correspond à votre recherche
            </h3>
            <p className="text-sm text-zinc-400 mb-5">
              Essayez de modifier vos filtres ou recherchez une autre note (ex: Vanille, Ambre, Lattafa).
            </p>
            <button
              onClick={() => {
                setSelectedBrand("Toutes");
                setSelectedGender("Tous");
                setSelectedCategory("Tous");
                setSelectedNoteFilter("Toutes");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-full bg-amber-500 text-zinc-950 font-bold text-xs"
            >
              Voir toute la collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              const discountPercent = product.oldPrice
                ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                : null;

              return (
                <div
                  key={product.id}
                  className="group bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/90 hover:border-amber-500/50 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 relative"
                >
                  {/* Top Badges & Wishlist */}
                  <div className="flex items-start justify-between gap-2 z-10 mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {product.isBestSeller && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                          ★ Best-Seller
                        </span>
                      )}
                      {product.isNew && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                          Nouveau
                        </span>
                      )}
                      {discountPercent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold">
                          -{discountPercent}%
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full border transition shrink-0 ${
                        isWishlisted
                          ? "bg-rose-500/20 border-rose-500/50 text-rose-400"
                          : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                      title="Ajouter aux favoris"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? "fill-rose-400" : ""}`} />
                    </button>
                  </div>

                  {/* Clickable Real Bottle Photograph Pedestal */}
                  <div
                    onClick={() => {
                      setQuickViewProduct(product);
                      setQuickViewQty(1);
                    }}
                    className="cursor-pointer mb-3 relative"
                  >
                    <PerfumePhotoShowcase
                      product={product}
                      size="md"
                      studioTheme={studioTheme}
                      customImageUrl={customImages[product.id]}
                    />
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-zinc-950/90 text-amber-300 text-[10px] font-semibold flex items-center gap-1 shadow-lg border border-amber-500/30 whitespace-nowrap">
                        <Eye className="w-3 h-3" /> Pyramide olfactive
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400">
                      <span className="uppercase tracking-wider font-semibold text-amber-400">
                        {product.brand}
                      </span>
                      <span>
                        {product.gender} • {product.volume}
                      </span>
                    </div>

                    <h3
                      onClick={() => {
                        setQuickViewProduct(product);
                        setQuickViewQty(1);
                      }}
                      className="font-serif font-bold text-base text-white group-hover:text-amber-300 transition cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-1">{product.inspiration}</p>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="font-bold text-white">{product.rating}</span>
                        <span className="text-zinc-500">({product.reviews})</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-medium">
                        ● En stock
                      </span>
                    </div>

                    {/* Price & Action Buttons */}
                    <div className="pt-3 mt-2 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                      <div>
                        {product.oldPrice && (
                          <span className="block text-[11px] text-zinc-500 line-through">
                            {product.oldPrice.toFixed(0)} DT
                          </span>
                        )}
                        <span className="text-lg font-extrabold text-amber-400">
                          {product.price.toFixed(0)} <span className="text-xs font-semibold">DT</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setQuickViewProduct(product);
                            setQuickViewQty(1);
                          }}
                          className="px-2.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition"
                        >
                          Détails
                        </button>
                        <button
                          onClick={() => addToCart(product, 1)}
                          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs transition flex items-center gap-1 shadow-md shadow-amber-500/10"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Panier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 6. WHY CHOOSE ALADIN PARFUMS */}
      <section className="py-12 bg-zinc-900/40 border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm mb-1">
                  Authenticité Garantie par Aladin
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Parfums 100% originaux sous blister avec code-barres et hologramme officiel des maisons Lattafa, Afnan et French Avenue.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm mb-1">
                  Livraison Rapide 24h–48h
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Expédition express sur les 24 gouvernorats de Tunisie. Tarif fixe de 8 DT et gratuite dès 250 DT.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm mb-1">
                  Confirmation WhatsApp & Alerte Directe
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Dès votre commande validée, Aladin reçoit instantanément votre fiche de livraison sur WhatsApp ({STORE_PHONE_DISPLAY}) et par notification.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm mb-1">
                  Paiement à la Livraison
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Aucune carte bancaire requise. Payez en espèces directement au livreur lors de la réception de votre parfum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
            Questions Fréquentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Tout savoir sur vos commandes chez Aladin Parfums
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-zinc-900/70 border border-zinc-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-zinc-900 transition"
                >
                  <span className="font-semibold text-sm sm:text-base text-white flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. FOOTER WITH ALADIN CREST */}
      <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <AladinRoyalCrest size="sm" />
              <div>
                <span className="block text-base font-serif font-bold text-amber-400 tracking-wider">
                  ALADIN
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-400">
                  Parfums de Luxe • L'Élixir d'Orient
                </span>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Votre destination N°1 en Tunisie pour les parfums orientaux et de niche : Lattafa, Afnan, Zimaya, French Avenue, Armaf et Maison Alhambra.
            </p>
            <div className="pt-1 text-amber-400 font-semibold">
              📞 Aladin Direct & WhatsApp : {STORE_PHONE_DISPLAY}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">
              Service Client
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setSelectedCategory("Best-Sellers");
                    scrollToCatalog();
                  }}
                  className="hover:text-amber-400 transition"
                >
                  Nos Best-Sellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedCategory("Nouveautés");
                    scrollToCatalog();
                  }}
                  className="hover:text-amber-400 transition"
                >
                  Nouveautés 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsWholesaleModalOpen(true)}
                  className="hover:text-amber-400 transition"
                >
                  Espace Revendeurs / Vente en Gros
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${STORE_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition flex items-center gap-1"
                >
                  Assistance WhatsApp Directe
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">
              Livraison en Tunisie
            </h4>
            <p className="leading-relaxed mb-3">
              Livraison rapide à domicile dans les 24 gouvernorats (Grand Tunis, Sousse, Sfax, Nabeul, Monastir, Bizerte...).
            </p>
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <div>• Frais de livraison fixes : <strong className="text-amber-400">8.000 DT</strong></div>
              <div>• Livraison gratuite dès <strong className="text-amber-400">250 DT</strong></div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 py-4 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-500">
            <span>
              © 2026 ALADIN — Parfums de Luxe (L'Élixir d'Orient Tunisie). Tous droits réservés.
            </span>
            <button
              onClick={() => {
                setAdminTab("notifications");
                setIsAdminModalOpen(true);
              }}
              className="text-[11px] text-zinc-600 hover:text-zinc-400 transition flex items-center gap-1"
              title="Accès Gérant"
            >
              <Settings className="w-3 h-3" />
              Accès Gérant {savedOrders.length > 0 ? `(${savedOrders.length})` : ""}
            </button>
          </div>
        </div>
      </footer>

      {/* --- PRODUCT QUICK-VIEW MODAL --- */}
      {/* --- SLIDING WISHLIST DRAWER --- */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
          <div className="bg-zinc-950 border-l border-zinc-800 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl">
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <Heart className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif font-bold text-lg text-white">
                    Mes Parfums Favoris {wishlist.length > 0 && `(${wishlist.length})`}
                  </h3>
                </div>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-1.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {wishlist.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/15 to-amber-900/10 border border-amber-500/30 flex items-center justify-center mb-4 shadow-inner">
                    <Heart className="w-9 h-9 text-amber-400/80 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white mb-1.5">
                    Votre liste de favoris est vide
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mb-6">
                    Cliquez sur le cœur en haut des flacons pour sauvegarder vos élixirs préférés (Lattafa, French Avenue, Afnan, Zimaya...).
                  </p>
                  <button
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setSelectedCategory("Best-Sellers");
                      scrollToCatalog();
                    }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold text-xs hover:brightness-110 transition shadow-lg shadow-amber-500/20 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Découvrir nos Best-Sellers
                  </button>
                </div>
              ) : (
                <div className="space-y-3 overflow-y-auto pr-1 my-4 flex-1">
                  {PERFUMES_DATA.filter((p) => wishlist.includes(p.id)).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition"
                    >
                      <div
                        onClick={() => {
                          setIsWishlistOpen(false);
                          setQuickViewProduct(product);
                          setQuickViewQty(1);
                        }}
                        className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                      >
                        <div className="shrink-0">
                          <PerfumePhotoShowcase
                            product={product}
                            size="sm"
                            studioTheme={studioTheme}
                            customImageUrl={customImages[product.id]}
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] text-amber-400 font-bold uppercase">
                            {product.brand}
                          </div>
                          <div className="text-sm font-bold text-white truncate">
                            {product.name}
                          </div>
                          <div className="text-xs text-amber-300 font-semibold">
                            {product.price} DT
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => {
                            addToCart(product, 1);
                            setIsWishlistOpen(false);
                            setIsCartOpen(true);
                          }}
                          className="px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" /> Panier
                        </button>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-rose-400 transition"
                          title="Retirer des favoris"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {wishlist.length > 0 && (
              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={() => {
                    PERFUMES_DATA.filter((p) => wishlist.includes(p.id)).forEach((prod) =>
                      addToCart(prod, 1)
                    );
                    setIsWishlistOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold text-xs hover:brightness-110 transition shadow-lg shadow-amber-500/20"
                >
                  Tout ajouter au panier ({wishlist.length})
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- SLIDING CART DRAWER --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
          <div className="bg-zinc-950 border-l border-zinc-800 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl">
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif font-bold text-lg text-white">
                    Votre Panier {cartTotalItems > 0 && `(${cartTotalItems})`}
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length > 0 && (
                /* Free Shipping Progress Bar */
                <div className="my-4 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs">
                  {cartSubtotal >= freeShippingThreshold ? (
                    <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Félicitations ! Vous bénéficiez de la LIVRAISON GRATUITE.
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between text-zinc-300 mb-1.5">
                        <span>
                          Plus que{" "}
                          <strong className="text-amber-400">
                            {(freeShippingThreshold - cartSubtotal).toFixed(0)} DT
                          </strong>{" "}
                          pour la livraison gratuite !
                        </span>
                        <span>{Math.round((cartSubtotal / freeShippingThreshold) * 100)}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 transition-all"
                          style={{
                            width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%`
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Cart Items List or Luxury Empty State */}
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/15 via-zinc-900 to-amber-900/15 border border-amber-500/30 flex items-center justify-center mb-5 shadow-inner">
                    {/* Subtle Golden Perfume Flacon Illustration */}
                    <svg
                      viewBox="0 0 64 64"
                      className="w-12 h-12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="25"
                        y="8"
                        width="14"
                        height="6"
                        rx="1.5"
                        stroke="#FBBF24"
                        strokeWidth="2"
                      />
                      <rect
                        x="28"
                        y="14"
                        width="8"
                        height="5"
                        stroke="#FBBF24"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 27C16 22.5817 19.5817 19 24 19H40C44.4183 19 48 22.5817 48 27V49C48 52.866 44.866 56 41 56H23C19.134 56 16 52.866 16 49V27Z"
                        stroke="#FBBF24"
                        strokeWidth="2"
                        fill="rgba(212,175,55,0.08)"
                      />
                      <rect
                        x="22"
                        y="30"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="#FBBF24"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-white mb-2">
                    Votre panier est vide
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mb-6">
                    Explorez la collection <strong className="text-amber-300">ALADIN Parfums</strong> et laissez-vous séduire par nos fragrances orientales authentiques livrées chez vous en 24h/48h.
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setSelectedCategory("Best-Sellers");
                      scrollToCatalog();
                    }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold text-xs hover:brightness-110 transition shadow-lg shadow-amber-500/20 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Découvrir nos Best-Sellers
                  </button>
                </div>
              ) : (
                <div className="space-y-3 overflow-y-auto pr-1 flex-1">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="shrink-0">
                          <PerfumePhotoShowcase
                            product={item.product}
                            size="sm"
                            studioTheme={studioTheme}
                            customImageUrl={customImages[item.product.id]}
                          />
                        </div>
                        <div>
                          <div className="text-[10px] text-amber-400 font-bold uppercase">
                            {item.product.brand}
                          </div>
                          <div className="text-sm font-bold text-white">{item.product.name}</div>
                          <div className="text-xs text-zinc-400">
                            {item.product.price} DT × {item.quantity}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 bg-zinc-950 border border-zinc-800 rounded-lg px-2 py-1">
                        <button
                          onClick={() => updateCartQty(item.product.id, -1)}
                          className="text-zinc-400 hover:text-white p-0.5"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold px-1.5">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQty(item.product.id, 1)}
                          className="text-zinc-400 hover:text-white p-0.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Sous-total</span>
                    <span>{cartSubtotal.toFixed(3)} DT</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Frais de livraison (Tunisie 24/48h)</span>
                    <span>
                      {shippingFee === 0 ? (
                        <strong className="text-emerald-400">GRATUITE</strong>
                      ) : (
                        `${shippingFee.toFixed(3)} DT`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-zinc-800">
                    <span>Total à payer à la livraison</span>
                    <span className="text-amber-400">{cartTotal.toFixed(3)} DT</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold text-sm hover:brightness-110 transition shadow-lg shadow-amber-500/20"
                >
                  Commander • Paiement à la livraison
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- TUNISIAN COD CHECKOUT MODAL (TRIGGERS OPTION 1 WHATSAPP + OPTION 3 SILENT PUSH) --- */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-8">
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <AladinRoyalCrest size="sm" />
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  ALADIN PARFUMS • COMMANDE EXPRESS
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Finaliser votre commande
                </h3>
              </div>
            </div>

            {formError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs">
                {formError}
              </div>
            )}

            <form onSubmit={handleCheckoutSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Nom & Prénom complet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Amine Ben Salem"
                  value={checkoutForm.fullName}
                  onChange={(e) =>
                    setCheckoutForm({ ...checkoutForm, fullName: e.target.value })
                  }
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Téléphone (8 chiffres) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: 94318153"
                    value={checkoutForm.phone}
                    onChange={(e) =>
                      setCheckoutForm({ ...checkoutForm, phone: e.target.value })
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Gouvernorat *
                  </label>
                  <select
                    value={checkoutForm.governorate}
                    onChange={(e) =>
                      setCheckoutForm({ ...checkoutForm, governorate: e.target.value })
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                  >
                    {TUNISIAN_GOVERNORATES.map((gov) => (
                      <option key={gov} value={gov}>
                        {gov}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Adresse exacte de livraison (Rue, Ville, Code postal) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Avenue Habib Bourguiba, Ennasr 2, Ariana"
                  value={checkoutForm.address}
                  onChange={(e) =>
                    setCheckoutForm({ ...checkoutForm, address: e.target.value })
                  }
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Note pour le livreur (Optionnel)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Appelez-moi 30 min avant l'arrivée"
                  value={checkoutForm.notes}
                  onChange={(e) =>
                    setCheckoutForm({ ...checkoutForm, notes: e.target.value })
                  }
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Order Total Summary Box */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Articles ({cartTotalItems})</span>
                  <span>{cartSubtotal.toFixed(3)} DT</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Livraison Rapide ({checkoutForm.governorate})</span>
                  <span>{shippingFee === 0 ? "GRATUITE" : `${shippingFee.toFixed(3)} DT`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-amber-400 pt-2 border-t border-zinc-800">
                  <span>Total à payer à la livraison :</span>
                  <span>{cartTotal.toFixed(3)} DT</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmittingOrder}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white font-bold text-sm hover:brightness-110 transition shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {isSubmittingOrder
                  ? "Envoi de la notification à Aladin..."
                  : `Confirmer & Envoyer la Commande (${cartTotal.toFixed(0)} DT)`}
              </button>
              <p className="text-[11px] text-center text-zinc-400">
                En cliquant, Aladin reçoit une alerte immédiate + votre bon de commande WhatsApp sur le{" "}
                <strong className="text-amber-300">{STORE_PHONE_DISPLAY}</strong>.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* --- ORDER CONFIRMATION MODAL WITH WHATSAPP & COPY RECEIPT ACTIONS --- */}
      {orderSuccessData && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border border-amber-500/50 rounded-3xl max-w-md w-full p-6 sm:p-7 text-center space-y-4 shadow-2xl my-8">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Commande {orderSuccessData.ref} Enregistrée !
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Merci <strong className="text-white">{orderSuccessData.customer.fullName}</strong> !
              Votre commande a été transmise à <strong className="text-amber-400">Aladin Parfums</strong>.
            </p>

            {/* Notification Channels Triggered Status */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {orderSuccessData.notifiedChannels?.map((ch) => (
                <span
                  key={ch}
                  className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold flex items-center gap-1"
                >
                  <Check className="w-3 h-3" /> Notifié via {ch}
                </span>
              ))}
            </div>

            {/* Direct WhatsApp Re-Open Button (in case browser blocked popup) */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2.5">
              <p className="text-xs text-emerald-200 font-medium">
                📲 Cliquez ci-dessous pour envoyer/confirmer votre ticket directement sur le WhatsApp d'Aladin ({STORE_PHONE_DISPLAY}) :
              </p>
              <a
                href={orderSuccessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <MessageCircle className="w-4 h-4" />
                Envoyer le Reçu sur WhatsApp ({STORE_PHONE_DISPLAY})
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(orderSuccessData.receiptText || "");
                  setCopiedReceipt(true);
                  setTimeout(() => setCopiedReceipt(false), 2500);
                }}
                className="w-full py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs flex items-center justify-center gap-1.5 transition"
              >
                {copiedReceipt ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Reçu copié dans le presse-papiers !
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" /> Copier le texte de la commande
                  </>
                )}
              </button>
            </div>

            <button
              onClick={() => setOrderSuccessData(null)}
              className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs"
            >
              Retour à la boutique Aladin
            </button>
          </div>
        </div>
      )}

      {/* --- ADMIN HUB MODAL: OPTION 1 (WHATSAPP) & OPTION 3 (TELEGRAM / EMAIL / WEBHOOK) + ORDERS LOG --- */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border border-amber-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsAdminModalOpen(false);
                setTestAlertStatus(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <AladinRoyalCrest size="sm" />
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  ESPACE PROPRIÉTAIRE • ALADIN PARFUMS
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Centre d'Alertes & Gestion des Commandes
                </h3>
              </div>
            </div>

            {/* Admin Navigation Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-4 mb-6">
              <button
                onClick={() => setAdminTab("notifications")}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                  adminTab === "notifications"
                    ? "bg-amber-500 text-zinc-950"
                    : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                <Bell className="w-4 h-4" />
                1. Configurer Notifications (WhatsApp, Email & Telegram)
              </button>
              <button
                onClick={() => setAdminTab("orders")}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                  adminTab === "orders"
                    ? "bg-amber-500 text-zinc-950"
                    : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                <ClipboardList className="w-4 h-4" />
                2. Commandes Reçues ({savedOrders.length})
              </button>
              <button
                onClick={() => setAdminTab("photos")}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                  adminTab === "photos"
                    ? "bg-amber-500 text-zinc-950"
                    : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                <Camera className="w-4 h-4" />
                3. Studio Photos
              </button>
            </div>

            {/* TAB 1: OPTION 1 & OPTION 3 NOTIFICATION SETUP */}
            {adminTab === "notifications" && (
              <div className="space-y-6 text-xs">
                {testAlertStatus && (
                  <div className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-200 font-medium flex items-center justify-between">
                    <span>{testAlertStatus}</span>
                    <button
                      onClick={() => setTestAlertStatus(null)}
                      className="text-zinc-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* OPTION 1 CARD: WHATSAPP DIRECT REDIRECTION */}
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                          OPTION 1 • ACTIVE PAR DÉFAUT
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          Redirection Commande WhatsApp Instantanée (+216 94 318 153)
                        </h4>
                      </div>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationConfig.whatsappAutoRedirect}
                        onChange={(e) =>
                          setNotificationConfig({
                            ...notificationConfig,
                            whatsappAutoRedirect: e.target.checked
                          })
                        }
                        className="rounded accent-emerald-500 w-4 h-4"
                      />
                      <span className="text-emerald-300 font-semibold">Activé</span>
                    </label>
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    Dès qu'un client clique sur <strong>"Confirmer ma commande"</strong>, son téléphone ouvre WhatsApp avec le bon de commande complet pré-rempli (Nom, Gouvernorat, Adresse, Parfums, Total en DT) prêt à être envoyé sur votre numéro <strong>{STORE_PHONE_DISPLAY}</strong>.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => handleSendTestNotification("whatsapp")}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Tester une commande WhatsApp maintenant
                    </button>
                  </div>
                </div>

                {/* OPTION 3A CARD: SILENT EMAIL / WEBHOOK NOTIFICATION */}
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-amber-500/30 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                          OPTION 3A • ALERTE SILENCIEUSE EN ARRIÈRE-PLAN
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          Notification par Email Automatique (FormSubmit / Webhook)
                        </h4>
                      </div>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationConfig.enableEmailAlert}
                        onChange={(e) =>
                          setNotificationConfig({
                            ...notificationConfig,
                            enableEmailAlert: e.target.checked
                          })
                        }
                        className="rounded accent-amber-500 w-4 h-4"
                      />
                      <span className="text-amber-300 font-semibold">Activer Email</span>
                    </label>
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    Entrez simplement votre adresse email ci-dessous. Même si le client ferme WhatsApp, le site vous envoie en arrière-plan un email contenant tous les détails de la commande.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">
                        Votre Email de réception (Aladin) :
                      </label>
                      <input
                        type="email"
                        placeholder="Ex: aladin.parfums@gmail.com"
                        value={notificationConfig.adminEmail}
                        onChange={(e) =>
                          setNotificationConfig({
                            ...notificationConfig,
                            adminEmail: e.target.value,
                            enableEmailAlert: true
                          })
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">
                        Ou URL Webhook (Formspree / Make / Discord) :
                      </label>
                      <input
                        type="url"
                        placeholder="https://formspree.io/f/..."
                        value={notificationConfig.customWebhookUrl}
                        onChange={(e) =>
                          setNotificationConfig({
                            ...notificationConfig,
                            customWebhookUrl: e.target.value,
                            enableEmailAlert: true
                          })
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSendTestNotification("email")}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold flex items-center gap-1.5 transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Tester l'alerte Email / Webhook
                  </button>
                </div>

                {/* OPTION 3B CARD: TELEGRAM BOT INSTANT PUSH */}
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-sky-500/30 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400">
                        <Send className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                          OPTION 3B • NOTIFICATION PUSH INSTANTANÉE SUR TÉLÉPHONE
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          Bot Telegram Privé (100% Gratuit & Temps Réel)
                        </h4>
                      </div>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationConfig.enableTelegramAlert}
                        onChange={(e) =>
                          setNotificationConfig({
                            ...notificationConfig,
                            enableTelegramAlert: e.target.checked
                          })
                        }
                        className="rounded accent-sky-500 w-4 h-4"
                      />
                      <span className="text-sky-300 font-semibold">Activer Telegram</span>
                    </label>
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    Recevez une notification push sur votre téléphone à la seconde même où un client valide son panier (sans aucune action requise du client).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">
                        Telegram Bot Token (@BotFather) :
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 7123456789:AAH..."
                        value={notificationConfig.telegramBotToken}
                        onChange={(e) =>
                          setNotificationConfig({
                            ...notificationConfig,
                            telegramBotToken: e.target.value,
                            enableTelegramAlert: true
                          })
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-white focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">
                        Votre Telegram Chat ID (@userinfobot) :
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 123456789"
                        value={notificationConfig.telegramChatId}
                        onChange={(e) =>
                          setNotificationConfig({
                            ...notificationConfig,
                            telegramChatId: e.target.value,
                            enableTelegramAlert: true
                          })
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-white focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSendTestNotification("telegram")}
                    className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold flex items-center gap-1.5 transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Tester la notification Telegram
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: SAVED ORDERS JOURNAL */}
            {adminTab === "orders" && (
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <p className="text-zinc-400">
                    Historique des commandes enregistrées sur cet appareil ({savedOrders.length}) :
                  </p>
                  {savedOrders.length > 0 && (
                    <button
                      onClick={() => {
                        setSavedOrders([]);
                        showToast("Historique des commandes effacé.");
                      }}
                      className="text-rose-400 hover:underline flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Vider l'historique
                    </button>
                  )}
                </div>

                {savedOrders.length === 0 ? (
                  <div className="text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800 text-zinc-400">
                    Aucune commande reçue pour le moment. Passez une commande test sur la boutique pour voir comment elle apparaît ici !
                  </div>
                ) : (
                  <div className="space-y-3">
                    {savedOrders.map((ord) => (
                      <div
                        key={ord.ref}
                        className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2.5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-2">
                          <div>
                            <span className="font-bold text-amber-400 text-sm">{ord.ref}</span>
                            <span className="text-zinc-500 ml-2">• {ord.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {ord.notifiedChannels?.map((ch) => (
                              <span
                                key={ch}
                                className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold"
                              >
                                {ch} ✓
                              </span>
                            ))}
                            <span className="font-bold text-sm text-white">
                              {ord.total.toFixed(3)} DT
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300">
                          <div>
                            <strong className="text-white">Client :</strong> {ord.customer.fullName} (
                            <a
                              href={`tel:${ord.customer.phone}`}
                              className="text-amber-400 underline"
                            >
                              {ord.customer.phone}
                            </a>
                            )
                          </div>
                          <div>
                            <strong className="text-white">Destination :</strong>{" "}
                            {ord.customer.governorate} — {ord.customer.address}
                          </div>
                        </div>

                        <div className="text-zinc-400">
                          <strong className="text-zinc-200">Articles : </strong>
                          {ord.items
                            .map((i) => `${i.quantity}x ${i.product.brand} ${i.product.name}`)
                            .join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: STUDIO PHOTO CUSTOMIZER */}
            {adminTab === "photos" && (
              <div className="space-y-4 text-xs">
                {(() => {
                  const targetProd =
                    PERFUMES_DATA.find((p) => p.id === Number(selectedProductForPhoto)) ||
                    PERFUMES_DATA[0];

                  return (
                    <>
                      <div>
                        <label className="block text-zinc-300 font-medium mb-1.5">
                          Sélectionner le parfum à personnaliser :
                        </label>
                        <select
                          value={selectedProductForPhoto}
                          onChange={(e) => setSelectedProductForPhoto(Number(e.target.value))}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                        >
                          {PERFUMES_DATA.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.brand} — {p.name} ({p.price} DT)
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4">
                        <PerfumePhotoShowcase
                          product={targetProd}
                          size="md"
                          studioTheme={studioTheme}
                          customImageUrl={customImages[targetProd.id]}
                        />

                        <div className="space-y-3">
                          <div>
                            <span className="text-amber-400 font-bold uppercase">
                              {targetProd.brand}
                            </span>
                            <h4 className="text-base font-serif font-bold text-white">
                              {targetProd.name}
                            </h4>
                          </div>

                          <label className="cursor-pointer w-full py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium flex items-center justify-center gap-2 border border-zinc-700 transition">
                            <Upload className="w-4 h-4 text-amber-400" />
                            Importer une photo (PC/Mobile)
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleLocalFileUpload}
                              className="hidden"
                            />
                          </label>

                          {customImages[targetProd.id] && (
                            <button
                              type="button"
                              onClick={() => resetCustomPhoto(targetProd.id)}
                              className="w-full py-2 px-3 rounded-xl bg-rose-500/15 text-rose-300 border border-rose-500/30 font-medium flex items-center justify-center gap-1.5"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              Restaurer la photo officielle
                            </button>
                          )}
                        </div>
                      </div>

                      <form onSubmit={handleSaveCustomPhoto} className="space-y-2">
                        <label className="block text-zinc-300 font-medium">
                          Ou coller un lien direct vers une image (URL) :
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="url"
                            placeholder="https://exemple.com/mon-flacon.jpg"
                            value={customUrlInput}
                            onChange={(e) => setCustomUrlInput(e.target.value)}
                            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                          />
                          <button
                            type="submit"
                            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold shrink-0"
                          >
                            Appliquer
                          </button>
                        </div>
                      </form>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- WHOLESALE / COMMANDE EN GROS MODAL --- */}
      {isWholesaleModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-amber-500/40 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setIsWholesaleModalOpen(false);
                setWholesaleSent(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {wholesaleSent ? (
              <div className="text-center space-y-4 py-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-serif font-bold text-white">
                  Demande Revendeur Envoyée à Aladin !
                </h3>
                <p className="text-xs text-zinc-300">
                  Vous pouvez également discuter directement avec Aladin sur WhatsApp au{" "}
                  <strong className="text-amber-400">{STORE_PHONE_DISPLAY}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsWholesaleModalOpen(false);
                    setWholesaleSent(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const msg = `Bonjour Aladin Parfums ! Demande de tarif en GROS :\n• Boutique : ${wholesaleForm.shopName}\n• Tél : ${wholesaleForm.phone}\n• Quantité : ${wholesaleForm.estimatedQuantity}`;
                  window.open(
                    `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                  setWholesaleSent(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <span className="text-amber-400 font-bold uppercase tracking-wider">
                    Espace Professionnel B2B • Aladin Parfums
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    Commande en Gros / Revendeurs
                  </h3>
                  <p className="text-zinc-400 mt-1">
                    Tarifs grossistes disponibles à partir de 12 pièces assorties.
                  </p>
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">Nom de la boutique ou société *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Parfumerie Prestige Sousse"
                    value={wholesaleForm.shopName}
                    onChange={(e) =>
                      setWholesaleForm({ ...wholesaleForm, shopName: e.target.value })
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">Téléphone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: 94 318 153"
                    value={wholesaleForm.phone}
                    onChange={(e) =>
                      setWholesaleForm({ ...wholesaleForm, phone: e.target.value })
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">Quantité estimée</label>
                  <select
                    value={wholesaleForm.estimatedQuantity}
                    onChange={(e) =>
                      setWholesaleForm({ ...wholesaleForm, estimatedQuantity: e.target.value })
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white"
                  >
                    <option>12 - 30 pièces</option>
                    <option>30 - 100 pièces</option>
                    <option>+100 pièces (Distributeur)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs"
                >
                  Envoyer ma demande Grossiste sur WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
