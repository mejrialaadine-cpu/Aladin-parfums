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

const STORE_PHONE_DISPLAY = "+216 94 318 153";
const STORE_WHATSAPP_NUMBER = "21694318153";

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
          <circle cx="50" cy="50" r="45" stroke="url(#aladinGold)" strokeWidth="1.6" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="41" stroke="url(#aladinGold)" strokeWidth="1" opacity="0.7" />
          <path d="M26 66 C26 42, 38 25, 50 16 C62 25, 74 42, 74 66" stroke="url(#aladinGold)" strokeWidth="1.5" fill="rgba(212,175,55,0.06)" />
          <rect x="53" y="29" width="10" height="4" rx="1" fill="url(#aladinGold)" />
          <rect x="55" y="33" width="6" height="4" fill="url(#aladinGold)" />
          <path d="M50 45 C50 39, 66 39, 66 45 L66 56 C66 60, 50 60, 50 56 Z" stroke="url(#aladinGold)" strokeWidth="1.5" fill="rgba(212,175,55,0.15)" />
          <path d="M20 56 C27 56, 32 64, 46 64 C60 64, 68 56, 79 49 C74 63, 62 71, 46 71 C33 71, 25 65, 20 56 Z" fill="url(#aladinGold)" />
          <path d="M23 56 C17 52, 18 44, 25 46 C28 47, 28 52, 24 55" stroke="url(#aladinGold)" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 56 C43 51, 49 51, 52 56" stroke="url(#aladinGold)" strokeWidth="1.8" fill="#070913" />
          <path d="M38 74 L54 74 M42 71 L50 71" stroke="url(#aladinGold)" strokeWidth="2" strokeLinecap="round" />
          <path d="M77 47 C82 39, 73 31, 69 24 C66 19, 72 14, 76 16" stroke="url(#aladinGold)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="36" cy="36" r="1.6" fill="#FEF08A" />
          <circle cx="50" cy="24" r="1.4" fill="#FEF08A" />
        </svg>
      </div>
    </div>
  );
};

const PerfumePhotoShowcase = ({ product, size = 'md', studioTheme = 'ivory', customImageUrl }) => {
  const [imgError, setImgError] = useState(false);
  const activeImage = customImageUrl || product.imageUrl;

  const containerClasses =
    size === 'lg' ? 'w-full h-72 sm:h-80 rounded-2xl p-6' : size === 'sm' ? 'w-14 h-16 rounded-xl p-1.5' : 'w-full h-60 rounded-2xl p-5';
  const imgClasses = size === 'lg' ? 'max-h-60 sm:max-h-64' : size === 'sm' ? 'max-h-12' : 'max-h-48';
  const pedestalStyle =
    studioTheme === 'ivory'
      ? 'bg-gradient-to-b from-white via-[#FCFBF7] to-[#F2ECE1] border-amber-500/30 shadow-[inset_0_0_25px_rgba(212,175,55,0.12)]'
      : studioTheme === 'pure'
      ? 'bg-white border-zinc-200 shadow-inner'
      : 'bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#E6DEC8] border-amber-400/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]';

  return (
    <div className={`relative flex flex-col items-center justify-center overflow-hidden border transition-all duration-500 select-none group ${containerClasses} ${pedestalStyle}`}>
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-24 rounded-full blur-2xl opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-75"
        style={{ background: `radial-gradient(circle, ${product.accentColor || '#D4AF37'}, transparent 70%)` }}
      />
      {size !== 'sm' && (
        <>
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-amber-600/40 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-amber-600/40 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-amber-600/40 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-amber-600/40 pointer-events-none" />
        </>
      )}
      {size !== 'sm' && (
        <div className="absolute bottom-3 w-2/3 h-3 rounded-full bg-amber-950/10 blur-md pointer-events-none group-hover:scale-110 transition-transform duration-500" />
      )}
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
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">{product.brand}</span>
          <span className="text-xs font-serif font-bold text-zinc-900">{product.name}</span>
        </div>
      )}
      {size === 'lg' && (
        <div className="absolute bottom-2.5 right-3 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-950/85 text-amber-300 text-[10px] font-bold tracking-wider uppercase shadow">
          <ShieldCheck className="w-3 h-3 text-amber-400" />
          Aladin Authentique
        </div>
      )}
    </div>
  );
};

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
    description: "Un élixir oriental somptueux mêlant la chaleur de la cannelle, la douceur des dattes confites et un fond praliné vanillé irrésistible dans un flacon cristal iconique.",
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
