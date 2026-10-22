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
  const dimensions = size === "lg" ? "w-16 h-16" : size === "sm" ? "w-9 h-9" : "w-12 h-12";
  return (
    <div className={`${dimensions} relative rounded-full p-[1.5px] bg-gradient-to-br from-amber-200 via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 shrink-0 select-none group`}>
      <div className="w-full h-full rounded-full bg-[#070913] flex items-center justify-center relative overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full p-1 transition-transform duration-500 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  const containerClasses = size === 'lg' ? 'w-full h-72 sm:h-80 rounded-2xl p-6' : size === 'sm' ? 'w-14 h-16 rounded-xl p-1.5' : 'w-full h-60 rounded-2xl p-5';
  const imgClasses = size === 'lg' ? 'max-h-60 sm:max-h-64' : size === 'sm' ? 'max-h-12' : 'max-h-48';
  const pedestalStyle = 'bg-gradient-to-b from-[#FFFFFF] via-[#FAF7F2] to-[#ECE5D8] border-amber-500/40 shadow-[inset_0_2px_15px_rgba(255,255,255,0.9),0_4px_20px_rgba(0,0,0,0.3)]';

  return (
    <div className={`relative flex flex-col items-center justify-center overflow-hidden border transition-all duration-500 select-none group ${containerClasses} ${pedestalStyle}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-28 rounded-full blur-xl opacity-60 pointer-events-none" style={{ background: `radial-gradient(circle, rgba(255,255,255,0.8), ${product.accentColor || '#D4AF37'}40 70%)` }} />
      {size !== 'sm' && (
        <>
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-amber-600/60 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-amber-600/60 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-amber-600/60 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-amber-600/60 pointer-events-none" />
        </>
      )}
      {!imgError && activeImage ? (
        <img src={activeImage} alt={`${product.brand} - ${product.name}`} onError={() => setImgError(true)} loading="lazy" className={`${imgClasses} w-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out group-hover:scale-110 relative z-10`} />
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-2 text-zinc-700">
          <Sparkles className="w-8 h-8 text-amber-600 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">{product.brand}</span>
          <span className="text-xs font-serif font-bold text-zinc-900">{product.name}</span>
        </div>
      )}
      {size === 'lg' && (
        <div className="absolute bottom-2.5 right-3 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-950/90 text-amber-300 text-[10px] font-bold tracking-wider uppercase shadow">
          <ShieldCheck className="w-3 h-3 text-amber-400" />
          Aladin Authentique
        </div>
      )}
    </div>
  );
};

const PERFUMES_DATA = [
  { id: 1, name: "Khamrah", brand: "Lattafa", concentration: "Eau de Parfum", volume: "100ml", price: 88, oldPrice: 115, gender: "Unisexe", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.9, reviews: 342, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.75805.jpg", inspiration: "Oriental Gourmand Épicé — Le N°1 des ventes en Tunisie", description: "Un élixir oriental somptueux mêlant cannelle, dattes et vanille.", topNotes: ["Cannelle"], heartNotes: ["Dattes"], baseNotes: ["Vanille"], longevity: 96, sillage: 94, accords: ["Gourmand"] },
  { id: 2, name: "Khamrah Qahwa", brand: "Lattafa", concentration: "Eau de Parfum", volume: "100ml", price: 92, oldPrice: 120, gender: "Unisexe", category: "Nouveautés", isPromo: true, isNew: true, isBestSeller: true, rating: 4.9, reviews: 218, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.88175.jpg", inspiration: "Café Arabica Torréfié, Cardamome & Praliné Royal", description: "Déclinaison intense au café arabica.", topNotes: ["Cardamome"], heartNotes: ["Praliné"], baseNotes: ["Café"], longevity: 98, sillage: 95, accords: ["Café"] },
  { id: 3, name: "Asad", brand: "Lattafa", concentration: "Eau de Parfum", volume: "100ml", price: 75, oldPrice: 95, gender: "Homme", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.8, reviews: 412, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.72821.jpg", inspiration: "Puissance Masculine", description: "Parfum masculin puissant.", topNotes: ["Poivre Noir"], heartNotes: ["Café"], baseNotes: ["Vanille"], longevity: 92, sillage: 90, accords: ["Boisé"] },
  { id: 4, name: "Yara Rose", brand: "Lattafa", concentration: "Eau de Parfum", volume: "100ml", price: 72, oldPrice: 90, gender: "Femme", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.9, reviews: 389, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.76880.jpg", inspiration: "Douceur Lactée", description: "Nuage velouté d'orchidée et vanille.", topNotes: ["Orchidée"], heartNotes: ["Fruits"], baseNotes: ["Vanille"], longevity: 88, sillage: 86, accords: ["Sucré"] },
  { id: 5, name: "Angham", brand: "Lattafa", concentration: "Eau de Parfum", volume: "100ml", price: 68, oldPrice: 88, gender: "Femme", category: "Nouveautés", isPromo: true, isNew: true, isBestSeller: true, rating: 4.9, reviews: 167, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.96768.jpg", inspiration: "Lavande & Praliné", description: "Harmonie de lavande et cacao.", topNotes: ["Mandarine"], heartNotes: ["Lavande"], baseNotes: ["Vanille"], longevity: 90, sillage: 88, accords: ["Vanille"] },
  { id: 6, name: "Eclaire", brand: "Lattafa", concentration: "Eau de Parfum", volume: "100ml", price: 75, oldPrice: 98, gender: "Femme", category: "Nouveautés", isPromo: true, isNew: true, isBestSeller: true, rating: 4.9, reviews: 204, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.93628.jpg", inspiration: "Caramel & Miel", description: "Délice de caramel beurre salé.", topNotes: ["Caramel"], heartNotes: ["Miel"], baseNotes: ["Vanille"], longevity: 93, sillage: 91, accords: ["Caramel"] },
  { id: 7, name: "Bade'e Al Oud Honor & Glory", brand: "Lattafa", concentration: "Eau de Parfum", volume: "100ml", price: 70, oldPrice: 95, gender: "Unisexe", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.8, reviews: 192, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.84302.jpg", inspiration: "Ananas Crème Brûlée", description: "Ananas rôti et santal.", topNotes: ["Ananas"], heartNotes: ["Cannelle"], baseNotes: ["Vanille"], longevity: 91, sillage: 89, accords: ["Fruité"] },
  { id: 8, name: "9PM", brand: "Afnan", concentration: "Eau de Parfum", volume: "100ml", price: 95, oldPrice: 125, gender: "Homme", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.9, reviews: 310, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.65414.jpg", inspiration: "Le Roi des Soirées", description: "Pomme et vanille ambrée.", topNotes: ["Pomme"], heartNotes: ["Fleur d'oranger"], baseNotes: ["Vanille"], longevity: 94, sillage: 92, accords: ["Vanille"] },
  { id: 9, name: "Supremacy Not Only Intense", brand: "Afnan", concentration: "Extrait de Parfum", volume: "100ml", price: 145, oldPrice: 175, gender: "Homme", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.9, reviews: 225, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.68271.jpg", inspiration: "Extrait Impérial", description: "Cassis et mousse de chêne.", topNotes: ["Cassis"], heartNotes: ["Patchouli"], baseNotes: ["Ambre Gris"], longevity: 98, sillage: 96, accords: ["Fruité"] },
  { id: 10, name: "Turathi Blue", brand: "Afnan", concentration: "Eau de Parfum", volume: "90ml", price: 115, oldPrice: 140, gender: "Homme", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.9, reviews: 184, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.70839.jpg", inspiration: "Pamplemousse Scintillant", description: "Pamplemousse et ambre.", topNotes: ["Pamplemousse"], heartNotes: ["Ambre"], baseNotes: ["Musc"], longevity: 92, sillage: 90, accords: ["Agrumes"] },
  { id: 11, name: "Sharaf Blend", brand: "Zimaya", concentration: "Extrait de Parfum", volume: "100ml", price: 89, oldPrice: 115, gender: "Unisexe", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.9, reviews: 215, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.91883.jpg", inspiration: "Safran & Dattes", description: "Accord liquoreux raffiné.", topNotes: ["Safran"], heartNotes: ["Vanille"], baseNotes: ["Fève Tonka"], longevity: 96, sillage: 93, accords: ["Gourmand"] },
  { id: 12, name: "Fatima Pink", brand: "Zimaya", concentration: "Extrait de Parfum", volume: "100ml", price: 85, oldPrice: 110, gender: "Femme", category: "En Promotion", isPromo: true, isNew: false, isBestSeller: false, rating: 4.8, reviews: 142, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.92817.jpg", inspiration: "Rose Turque & Litchi", description: "Bouquet floral fruité.", topNotes: ["Litchi"], heartNotes: ["Rose"], baseNotes: ["Musc"], longevity: 91, sillage: 89, accords: ["Floral"] },
  { id: 13, name: "Liquid Brun", brand: "French Avenue", concentration: "Eau de Parfum", volume: "100ml", price: 125, oldPrice: 155, gender: "Homme", category: "Nouveautés", isPromo: true, isNew: true, isBestSeller: true, rating: 5.0, reviews: 194, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.94713.jpg", inspiration: "Vanille Bourbon", description: "Vanille Bourbon et fleur d'oranger.", topNotes: ["Cannelle"], heartNotes: ["Vanille"], baseNotes: ["Praliné"], longevity: 96, sillage: 93, accords: ["Vanille"] },
  { id: 14, name: "Spectre Ghost", brand: "French Avenue", concentration: "Eau de Parfum", volume: "80ml", price: 118, oldPrice: 145, gender: "Unisexe", category: "Nouveautés", isPromo: true, isNew: true, isBestSeller: true, rating: 4.9, reviews: 116, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.94697.jpg", inspiration: "Gingembre & Vanille", description: "Vanille noire boisée.", topNotes: ["Gingembre"], heartNotes: ["Rose"], baseNotes: ["Vanille"], longevity: 93, sillage: 90, accords: ["Vanille"] },
  { id: 15, name: "Royal Blend", brand: "French Avenue", concentration: "Eau de Parfum", volume: "100ml", price: 115, oldPrice: 140, gender: "Unisexe", category: "Nouveautés", isPromo: true, isNew: true, isBestSeller: true, rating: 4.9, reviews: 138, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.94022.jpg", inspiration: "Accord Cognac", description: "Prune, cannelle et cognac.", topNotes: ["Cannelle"], heartNotes: ["Iris"], baseNotes: ["Vanille"], longevity: 95, sillage: 92, accords: ["Boisé"] },
  { id: 16, name: "Club de Nuit Intense Man", brand: "Armaf", concentration: "Eau de Toilette", volume: "105ml", price: 110, oldPrice: 135, gender: "Homme", category: "Best-Sellers", isPromo: true, isNew: false, isBestSeller: true, rating: 4.8, reviews: 520, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.34696.jpg", inspiration: "Légende Citronnée", description: "Citron, ananas et bouleau fumé.", topNotes: ["Citron"], heartNotes: ["Bouleau"], baseNotes: ["Musc"], longevity: 94, sillage: 95, accords: ["Agrumes"] },
  { id: 17, name: "Kismet Magic", brand: "Maison Alhambra", concentration: "Eau de Parfum", volume: "100ml", price: 68, oldPrice: 85, gender: "Unisexe", category: "En Promotion", isPromo: true, isNew: false, isBestSeller: false, rating: 4.8, reviews: 162, imageUrl: "https://fimgs.net/mdimg/perfume/375x500.95138.jpg", inspiration: "Nectar de Fève Tonka", description: "Miel épicé et vanille.", topNotes: ["Cannelle"], heartNotes: ["Fève Tonka"], baseNotes: ["Vanille"], longevity: 89, sillage: 87, accords: ["Boisé"] }
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
  { id: 1, badge: "BOUTIQUE OFFICIELLE", title: "ALADIN — Parfums de Luxe", subtitle: "Découvrez les flacons authentiques.", ctaPrimary: "Voir", featuredProductId: 1 }
];

const FAQ_ITEMS = [
  { q: "Vos parfums sont-ils originaux ?", a: "Oui, 100% originaux importés de Dubaï." },
  { q: "Quels sont les délais ?", a: "24h à 48h partout en Tunisie." }
];

const buildFormattedOrderReceipt = (order) => {
  const itemsLines = order.items
    .map((i) => `• ${i.quantity}x *${i.product.brand} ${i.product.name}* (${i.product.volume}) — ${i.product.price * i.quantity} DT`)
    .join("\n");

  return `🧞‍♂️ *NOUVELLE COMMANDE — ALADIN PARFUMS*
━━━━━━━━━━━━━━━━━━━━
🔖 *Réf :* ${order.ref}
📅 *Date :* ${order.date}

👤 *CLIENT :*
• Nom : ${order.customer.fullName}
• Tél : ${order.customer.phone}
• Gouvernorat : ${order.customer.governorate}
• Adresse : ${order.customer.address}${order.customer.notes ? `\n• Note : \${order.customer.notes}` : ""}

🛍️ *ARTICLES COMMANDÉS :*
${itemsLines}

💰 *RÉCAPITULATIF :*
• Sous-total : ${order.subtotal.toFixed(3)} DT
• Livraison : ${order.shipping === 0 ? "GRATUITE (0 DT)" : `\${order.shipping.toFixed(3)} DT`}
• *TOTAL À PAYER (Cash à la livraison) : ${order.total.toFixed(3)} DT*
━━━━━━━━━━━━━━━━━━━━
Merci de confirmer ma commande Aladin Parfums !`;
};

export default function App() {
  const [selectedBrand, setSelectedBrand] = useState("Toutes");
  const [selectedGender, setSelectedGender] = useState("Tous");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedNoteFilter, setSelectedNoteFilter] = useState("Toutes");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [studioTheme, setStudioTheme] = useState("ivory");
  const [customImages, setCustomImages] = useState({});
  const [selectedProductForPhoto, setSelectedProductForPhoto] = useState(PERFUMES_DATA[0].id);
  const [customUrlInput, setCustomUrlInput] = useState("");

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminTab, setAdminTab] = useState("notifications");

  const [notificationConfig, setNotificationConfig] = useState(() => {
    try {
      const saved = localStorage.getItem("aladin_notif_config");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return { whatsappAutoRedirect: true, whatsappNumber: STORE_WHATSAPP_NUMBER, enableEmailAlert: false, adminEmail: "", customWebhookUrl: "", enableTelegramAlert: false };
  });

  const [savedOrders, setSavedOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("aladin_orders_log");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  useEffect(() => {
    try { localStorage.setItem("aladin_notif_config", JSON.stringify(notificationConfig)); } catch (e) {}
  }, [notificationConfig]);

  useEffect(() => {
    try { localStorage.setItem("aladin_orders_log", JSON.stringify(savedOrders)); } catch (e) {}
  }, [savedOrders]);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

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

  const [checkoutForm, setCheckoutForm] = useState({ fullName: "", phone: "", governorate: "Tunis", address: "", notes: "" });
  const [formError, setFormError] = useState("");
  const [wholesaleForm, setWholesaleForm] = useState({ shopName: "", phone: "", estimatedQuantity: "12 - 30 pièces" });
  const [wholesaleSent, setWholesaleSent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => { setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length); }, 6500);
    return () => clearInterval(timer);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => { setToastMessage(null); }, 3400);
  };

  const filteredProducts = useMemo(() => {
    return PERFUMES_DATA.filter((item) => {
      const matchesBrand = selectedBrand === "Toutes" || item.brand === selectedBrand;
      const matchesGender = selectedGender === "Tous" || item.gender === selectedGender;
      const matchesCategory = selectedCategory === "Tous" || (selectedCategory === "En Promotion" && item.isPromo) || (selectedCategory === "Nouveautés" && item.isNew) || (selectedCategory === "Best-Sellers" && item.isBestSeller) || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q || item.name.toLowerCase().includes(q) || item.brand.toLowerCase().includes(q);
      return matchesBrand && matchesGender && matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });
  }, [selectedBrand, selectedGender, selectedCategory, selectedNoteFilter, searchQuery, sortBy]);

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 250;
  const shippingFee = cartSubtotal === 0 ? 0 : cartSubtotal >= freeShippingThreshold ? 0 : 8;
  const cartTotal = cartSubtotal + shippingFee;

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) => item.product.id === product.id ? { ...item, quantity: Math.min(item.quantity + qty, 10) } : item);
      }
      return [...prev, { product, quantity: qty }];
    });
    showToast(`${product.brand} ${product.name} ajouté au panier !`);
  };

  const updateCartQty = (productId, delta) => {
    setCart((prev) => prev.map((item) => item.product.id === productId ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0));
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]);
  };

  const handleDirectOrder = (product, qty = 1) => {
    addToCart(product, qty);
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  const triggerBackgroundNotifications = async (orderPayload) => [];

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    const cleanPhone = checkoutForm.phone.replace(/\D/g, "");
    if (!checkoutForm.fullName.trim()) { setFormError("Veuillez saisir votre Nom et Prénom."); return; }
    if (cleanPhone.length !== 8) { setFormError("Veuillez saisir un numéro de téléphone valide à 8 chiffres."); return; }
    if (!checkoutForm.address.trim()) { setFormError("Veuillez indiquer votre adresse de livraison exacte."); return; }

    setIsSubmittingOrder(true);

    const orderRef = "ALADIN-" + Math.floor(100000 + Math.random() * 900000);
    const nowStr = new Date().toLocaleString("fr-TN", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });

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
    const whatsappTarget = STORE_WHATSAPP_NUMBER;
    const whatsappUrl = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(receiptText)}`;

    newOrder.whatsappUrl = whatsappUrl;
    newOrder.receiptText = receiptText;

    setSavedOrders((prev) => [newOrder, ...prev]);
    setIsSubmittingOrder(false);
    setOrderSuccessData(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);

    if (notificationConfig.whatsappAutoRedirect) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleSendTestNotification = (channelType) => {
    const sampleOrder = {
      ref: "TEST-ALADIN-999",
      date: new Date().toLocaleString("fr-TN"),
      customer: { fullName: "Client Test", phone: "94318153", governorate: "Tunis", address: "Avenue Habib Bourguiba" },
      items: [{ product: PERFUMES_DATA[0], quantity: 1 }],
      subtotal: 88,
      shipping: 8,
      total: 96
    };
    const text = buildFormattedOrderReceipt(sampleOrder);
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const scrollToCatalog = () => {
    const el = document.getElementById("catalog-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSaveCustomPhoto = (e) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;
    setCustomImages((prev) => ({ ...prev, [selectedProductForPhoto]: customUrlInput.trim() }));
    setCustomUrlInput("");
    showToast("Photo mise à jour !");
  };

  const handleLocalFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setCustomImages((prev) => ({ ...prev, [selectedProductForPhoto]: reader.result }));
        showToast("Photo appliquée !");
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-900 border border-amber-500/60 text-amber-100 px-5 py-3.5 rounded-xl shadow-2xl animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      <a href={`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour Aladin Parfums ! Je souhaite avoir un conseil.")}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 left-5 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-full shadow-2xl border border-emerald-400/40 transition group">
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="text-xs font-bold hidden sm:inline">WhatsApp Aladin • {STORE_PHONE_DISPLAY}</span>
      </a>

      <div className="bg-gradient-to-r from-amber-950/90 via-zinc-900 to-amber-950/90 border-b border-amber-500/20 text-xs sm:text-sm py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-amber-200/95 font-medium mx-auto sm:mx-0">
            <Truck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Livraison rapide partout en Tunisie (24h–48h) • <strong className="text-amber-300">Frais fixes : 8 DT</strong> (Gratuite dès 250 DT)</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-zinc-300 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Parfums 100% Originaux Scellés
            </span>
            <span className="text-zinc-600">|</span>
            <button onClick={() => setIsWholesaleModalOpen(true)} className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition underline-offset-4 hover:underline">
              <Building2 className="w-3.5 h-3.5" /> Commande en Gros
            </button>
            <span className="text-zinc-600">|</span>
            <a href={`tel:${STORE_WHATSAPP_NUMBER}`} className="flex items-center gap-1.5 hover:text-amber-300 transition">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> Service Client : <strong className="text-white">{STORE_PHONE_DISPLAY}</strong>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex items-center justify-between gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400" aria-label="Menu">
              <Menu className="w-6 h-6" />
            </button>

            <div onClick={() => { setSelectedBrand("Toutes"); setSelectedGender("Tous"); setSelectedCategory("Tous"); setSearchQuery(""); }} className="cursor-pointer flex items-center gap-3 group">
              <AladinRoyalCrest size="md" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-serif font-extrabold tracking-[0.14em] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">ALADIN</span>
                  <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold uppercase tracking-widest">Parfums de Luxe</span>
                </div>
                <span className="block text-[10px] tracking-[0.22em] text-zinc-400 uppercase">L'Élixir d'Orient • Tunisie</span>
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Rechercher Khamrah, 9PM, Liquid Brun..." className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500/70 rounded-full pl-10 pr-9 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition" />
                {searchQuery && (<button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"><X className="w-4 h-4" /></button>)}
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <button onClick={() => setIsWishlistOpen(true)} className="relative p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 text-zinc-300 hover:text-amber-400 transition" title="Mes Favoris">
                <Heart className={`w-5 h-5 transition ${wishlist.length > 0 ? "text-rose-400 fill-rose-400" : ""}`} />
                {wishlist.length > 0 && (<span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-bold flex items-center justify-center text-white shadow">{wishlist.length}</span>)}
              </button>

              <button onClick={() => setIsCartOpen(true)} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition shadow-lg shadow-amber-500/20">
                <div className="relative flex items-center">
                  <ShoppingBag className="w-5 h-5" />
                  {cartTotalItems > 0 && (<span className="-top-2 -right-2 ml-1.5 w-4 h-4 rounded-full bg-zinc-950 text-amber-400 text-[10px] font-bold flex items-center justify-center">{cartTotalItems}</span>)}
                </div>
                <span className="hidden sm:inline font-bold">{cartTotalItems > 0 ? `${cartSubtotal.toFixed(0)} DT` : "Panier"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6" id="catalog-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/90 hover:border-amber-500/50 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 relative">
              <div onClick={() => { setQuickViewProduct(product); setQuickViewQty(1); }} className="cursor-pointer mb-3 relative">
                <PerfumePhotoShowcase product={product} size="md" studioTheme={studioTheme} customImageUrl={customImages[product.id]} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="uppercase tracking-wider font-semibold text-amber-400">{product.brand}</span>
                  <span>{product.gender} • {product.volume}</span>
                </div>
                <h3 onClick={() => { setQuickViewProduct(product); setQuickViewQty(1); }} className="font-serif font-bold text-base text-white group-hover:text-amber-300 transition cursor-pointer line-clamp-1">{product.name}</h3>
                <div className="pt-3 mt-2 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <span className="text-lg font-extrabold text-amber-400">{product.price.toFixed(0)} DT</span>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => { setQuickViewProduct(product); setQuickViewQty(1); }} className="px-2.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition">Détails</button>
                    <button onClick={() => addToCart(product, 1)} className="px-3.5 py-2 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs transition flex items-center gap-1">Panier</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8">
            <button onClick={() => setQuickViewProduct(null)} className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <PerfumePhotoShowcase product={quickViewProduct} size="lg" studioTheme={studioTheme} customImageUrl={customImages[quickViewProduct.id]} />
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">{quickViewProduct.brand}</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-0.5">{quickViewProduct.name}</h3>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{quickViewProduct.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-400">{quickViewProduct.price} DT</span>
                  <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5">
                    <button onClick={() => setQuickViewQty(Math.max(1, quickViewQty - 1))}><Minus className="w-4 h-4 text-white" /></button>
                    <span className="text-sm font-bold px-2 text-white">{quickViewQty}</span>
                    <button onClick={() => setQuickViewQty(Math.min(10, quickViewQty + 1))}><Plus className="w-4 h-4 text-white" /></button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button onClick={() => { addToCart(quickViewProduct, quickViewQty); setQuickViewProduct(null); setIsCartOpen(true); }} className="py-3 rounded-xl bg-zinc-900 text-amber-300 font-bold text-xs">Panier</button>
                  <button onClick={() => handleDirectOrder(quickViewProduct, quickViewQty)} className="py-3 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs">Commander</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
          <div className="bg-zinc-950 border-l border-zinc-800 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl">
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <h3 className="font-serif font-bold text-lg text-white">Votre Panier</h3>
                <button onClick={() => setIsCartOpen(false)}><X className="w-5 h-5 text-white" /></button>
              </div>
              <div className="space-y-3 overflow-y-auto pr-1 my-4 flex-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-white text-xs">{item.quantity}x {item.product.name}</span>
                    <span className="text-amber-400 text-xs font-bold">{item.product.price * item.quantity} DT</span>
                  </div>
                ))}
              </div>
            </div>
            {cart.length > 0 && (
              <button onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }} className="w-full py-3.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-sm">Passer la commande</button>
            )}
          </div>
        </div>
      )}

      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 relative shadow-2xl my-8">
            <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-5 right-5"><X className="w-5 h-5 text-white" /></button>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Finaliser votre commande</h3>
            {formError && <div className="mb-4 p-3 rounded-xl bg-rose-500/15 text-rose-300 text-xs">{formError}</div>}
            <form onSubmit={handleCheckoutSubmit} className="space-y-3.5 text-xs">
              <input type="text" required placeholder="Nom & Prénom" value={checkoutForm.fullName} onChange={(e) => setCheckoutForm({ ...checkoutForm, fullName: e.target.value })} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white" />
              <input type="tel" required placeholder="Téléphone (8 chiffres)" value={checkoutForm.phone} onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white" />
              <input type="text" required placeholder="Adresse exacte" value={checkoutForm.address} onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white" />
              <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm">Confirmer la commande (WhatsApp)</button>
            </form>
          </div>
        </div>
      )}

      {orderSuccessData && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-amber-500/50 rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">Commande Enregistrée !</h3>
            <a href={orderSuccessData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs">Ouvrir WhatsApp</a>
            <button onClick={() => setOrderSuccessData(null)} className="text-xs text-zinc-400 underline">Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}
