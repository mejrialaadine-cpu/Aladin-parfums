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
