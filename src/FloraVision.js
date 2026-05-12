import { useState, useEffect, useCallback } from "react";

/* ══════════════════════════════════════════════════════════
   ICONS
══════════════════════════════════════════════════════════ */
const Icon = {
  Leaf: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#4ade80">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 5.25-8 5.25"/>
      <path d="M3.82 21.34C3.8 21.23 6 14 14 9" stroke="#4ade80" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Search: () => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  Cart: ({ size = 19 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  Play: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  ChevronRight: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  ChevronLeft: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  ArrowUp: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  ),
};

/* ══════════════════════════════════════════════════════════
   SVG PLANT ILLUSTRATIONS
══════════════════════════════════════════════════════════ */
const Plants = {
  HeroPlant: () => (
    <svg viewBox="0 0 440 540" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Pot */}
      <ellipse cx="220" cy="510" rx="78" ry="20" fill="#b8845a" opacity="0.5"/>
      <path d="M150 415 Q155 505 220 518 Q285 505 290 415 Z" fill="#c8946a"/>
      <path d="M144 402 Q220 393 296 402 L290 415 Q220 408 150 415 Z" fill="#b8844a"/>
      <ellipse cx="220" cy="402" rx="76" ry="14" fill="#d4a97a"/>
      <ellipse cx="220" cy="400" rx="72" ry="12" fill="#2d1f14"/>
      {/* Leaves */}
      <ellipse cx="175" cy="300" rx="100" ry="55" fill="#196634" transform="rotate(-28 175 300)"/>
      <ellipse cx="268" cy="282" rx="105" ry="57" fill="#1d7a3c" transform="rotate(24 268 282)"/>
      <ellipse cx="205" cy="240" rx="92" ry="52" fill="#229044" transform="rotate(-10 205 240)"/>
      <ellipse cx="242" cy="208" rx="98" ry="50" fill="#1e8840" transform="rotate(16 242 208)"/>
      <ellipse cx="178" cy="218" rx="86" ry="46" fill="#269050" transform="rotate(-22 178 218)"/>
      <ellipse cx="252" cy="164" rx="92" ry="44" fill="#2aa058" transform="rotate(36 252 164)"/>
      <ellipse cx="188" cy="155" rx="84" ry="42" fill="#289852" transform="rotate(-34 188 155)"/>
      <ellipse cx="225" cy="132" rx="90" ry="40" fill="#1e8a46" transform="rotate(6 225 132)"/>
      <ellipse cx="200" cy="100" rx="82" ry="38" fill="#24963e" transform="rotate(-12 200 100)"/>
      <ellipse cx="250" cy="118" rx="88" ry="42" fill="#2ca058" transform="rotate(28 250 118)"/>
      {/* Highlights */}
      <ellipse cx="168" cy="312" rx="65" ry="35" fill="#2eb85e" transform="rotate(-14 168 312)" opacity="0.65"/>
      <ellipse cx="278" cy="298" rx="70" ry="33" fill="#34cc6a" transform="rotate(22 278 298)" opacity="0.55"/>
      <ellipse cx="225" cy="110" rx="76" ry="34" fill="#34cc6a" transform="rotate(0 225 110)" opacity="0.6"/>
      {/* Veins */}
      <line x1="175" y1="310" x2="130" y2="265" stroke="#145528" strokeWidth="1.8" opacity="0.5"/>
      <line x1="268" y1="292" x2="312" y2="248" stroke="#145528" strokeWidth="1.8" opacity="0.5"/>
    </svg>
  ),

  Aglaonema: () => (
    <svg viewBox="0 0 160 180" width="110" height="130" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="165" rx="36" ry="9" fill="#c0b090" opacity="0.4"/>
      <path d="M52 122 Q55 158 80 167 Q105 158 108 122 Z" fill="#ece5d8"/>
      {[0,1,2,3,4].map(i=><line key={i} x1={56+i*10} y1="122" x2={56+i*10} y2="160" stroke="#d8cfc0" strokeWidth="0.9" opacity="0.5"/>)}
      <path d="M48 114 Q80 108 112 114 L108 122 Q80 118 52 122Z" fill="#ddd4c4"/>
      <ellipse cx="80" cy="114" rx="32" ry="8" fill="#ece5d8"/>
      <ellipse cx="80" cy="112" rx="30" ry="7" fill="#251608"/>
      <ellipse cx="64" cy="73" rx="30" ry="15" fill="#2a7038" transform="rotate(-28 64 73)"/>
      <ellipse cx="98" cy="69" rx="32" ry="16" fill="#308040" transform="rotate(24 98 69)"/>
      <ellipse cx="80" cy="56" rx="28" ry="14" fill="#389448" transform="rotate(-6 80 56)"/>
      <ellipse cx="68" cy="40" rx="25" ry="13" fill="#42a052" transform="rotate(-22 68 40)"/>
      <ellipse cx="94" cy="43" rx="27" ry="13" fill="#3ea050" transform="rotate(28 94 43)"/>
      <ellipse cx="62" cy="75" rx="6" ry="3" fill="rgba(200,255,180,0.3)" transform="rotate(-28 62 75)"/>
      <ellipse cx="100" cy="67" rx="7" ry="3" fill="rgba(200,255,180,0.25)" transform="rotate(24 100 67)"/>
    </svg>
  ),

  PlantainLily: () => (
    <svg viewBox="0 0 140 160" width="105" height="125" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="148" rx="30" ry="7" fill="#beb8a8" opacity="0.4"/>
      <path d="M47 110 Q49 143 70 150 Q91 143 93 110Z" fill="#dddacf"/>
      <path d="M44 103 Q70 97 96 103 L93 110 Q70 107 47 110Z" fill="#ccc8bc"/>
      <ellipse cx="70" cy="103" rx="26" ry="7" fill="#dddacf"/>
      <ellipse cx="70" cy="101" rx="24" ry="6" fill="#251608"/>
      <ellipse cx="54" cy="68" rx="25" ry="12" fill="#2c7238" transform="rotate(-26 54 68)"/>
      <ellipse cx="88" cy="64" rx="27" ry="13" fill="#328040" transform="rotate(28 88 64)"/>
      <ellipse cx="70" cy="50" rx="23" ry="12" fill="#3a9248" transform="rotate(-8 70 50)"/>
      <ellipse cx="58" cy="36" rx="21" ry="11" fill="#42a050" transform="rotate(-24 58 36)"/>
      <ellipse cx="83" cy="38" rx="23" ry="11" fill="#3e9c50" transform="rotate(26 83 38)"/>
    </svg>
  ),

  Cactus: () => (
    <svg viewBox="0 0 130 175" width="95" height="135" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="160" rx="30" ry="8" fill="#b86020" opacity="0.4"/>
      <path d="M42 114 Q44 152 65 160 Q86 152 88 114Z" fill="#e07830"/>
      <path d="M39 106 Q65 100 91 106 L88 114 Q65 111 42 114Z" fill="#cc6820"/>
      <ellipse cx="65" cy="106" rx="26" ry="7" fill="#e07830"/>
      <ellipse cx="65" cy="104" rx="24" ry="6" fill="#251608"/>
      <rect x="57" y="18" width="16" height="85" rx="8" fill="#3a8830"/>
      <rect x="34" y="48" width="14" height="52" rx="7" fill="#348028"/>
      <rect x="82" y="44" width="14" height="56" rx="7" fill="#348028"/>
      <line x1="48" y1="60" x2="57" y2="54" stroke="#348028" strokeWidth="3"/>
      <line x1="82" y1="58" x2="73" y2="52" stroke="#348028" strokeWidth="3"/>
      {[22,34,46,58,70,82,94].map(y=>(
        <g key={y}>
          <line x1="57" y1={y} x2="50" y2={y-4} stroke="rgba(255,255,255,0.35)" strokeWidth="0.9"/>
          <line x1="73" y1={y} x2="80" y2={y-4} stroke="rgba(255,255,255,0.35)" strokeWidth="0.9"/>
        </g>
      ))}
    </svg>
  ),

  SwissCheese: () => (
    <svg viewBox="0 0 145 172" width="108" height="135" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="72" cy="160" rx="22" ry="6" fill="#1a1a1a" opacity="0.6"/>
      <rect x="54" y="142" width="36" height="18" rx="8" fill="#1c1c1c"/>
      <rect x="48" y="137" width="48" height="10" rx="5" fill="#272727"/>
      <ellipse cx="72" cy="137" rx="24" ry="6" fill="#333"/>
      <ellipse cx="72" cy="131" rx="20" ry="5" fill="#251608"/>
      <ellipse cx="50" cy="87" rx="32" ry="19" fill="#1c6428" transform="rotate(-24 50 87)"/>
      <ellipse cx="96" cy="82" rx="34" ry="20" fill="#207234" transform="rotate(20 96 82)"/>
      <ellipse cx="70" cy="67" rx="30" ry="18" fill="#248840" transform="rotate(-10 70 67)"/>
      <ellipse cx="54" cy="50" rx="27" ry="15" fill="#2a9248" transform="rotate(-28 54 50)"/>
      <ellipse cx="90" cy="55" rx="29" ry="16" fill="#269044" transform="rotate(24 90 55)"/>
      <ellipse cx="70" cy="38" rx="26" ry="14" fill="#30a050" transform="rotate(0 70 38)"/>
      {/* holes */}
      <ellipse cx="47" cy="90" rx="5" ry="8" fill="#0d1a12" opacity="0.55" transform="rotate(-24 47 90)"/>
      <ellipse cx="94" cy="85" rx="5" ry="8" fill="#0d1a12" opacity="0.5" transform="rotate(20 94 85)"/>
      <ellipse cx="69" cy="69" rx="4" ry="6" fill="#0d1a12" opacity="0.45" transform="rotate(-10 69 69)"/>
    </svg>
  ),

  Sansevieria: () => (
    <svg viewBox="0 0 130 172" width="95" height="135" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="158" rx="28" ry="7" fill="#bec0b0" opacity="0.4"/>
      <path d="M44 120 Q46 152 65 158 Q84 152 86 120Z" fill="#eae8e0"/>
      <path d="M41 113 Q65 107 89 113 L86 120 Q65 117 44 120Z" fill="#dadad0"/>
      <ellipse cx="65" cy="113" rx="24" ry="7" fill="#eae8e0"/>
      <ellipse cx="65" cy="111" rx="22" ry="6" fill="#251608"/>
      <rect x="55" y="28" width="8" height="83" rx="4" fill="#286e38" transform="rotate(-5 55 28)"/>
      <rect x="65" y="18" width="9" height="93" rx="4.5" fill="#30783e"/>
      <rect x="75" y="33" width="8" height="78" rx="4" fill="#286e38" transform="rotate(6 75 33)"/>
      <rect x="47" y="46" width="7" height="67" rx="3.5" fill="#24823a" transform="rotate(-12 47 46)"/>
      <rect x="82" y="50" width="7" height="63" rx="3.5" fill="#24823a" transform="rotate(10 82 50)"/>
      {[38,52,66,80,94,108].map(y=>(
        <line key={y} x1="55" y1={y} x2="63" y2={y} stroke="rgba(255,255,255,0.18)" strokeWidth="0.8"/>
      ))}
    </svg>
  ),

  Agave: () => (
    <svg viewBox="0 0 144 174" width="108" height="135" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="72" cy="159" rx="34" ry="9" fill="#bec0b0" opacity="0.4"/>
      <path d="M45 120 Q47 153 72 161 Q97 153 99 120Z" fill="#eae8e0"/>
      <path d="M42 112 Q72 106 102 112 L99 120 Q72 117 45 120Z" fill="#dad8ce"/>
      <ellipse cx="72" cy="112" rx="30" ry="8" fill="#eae8e0"/>
      <ellipse cx="72" cy="110" rx="27" ry="7" fill="#251608"/>
      {[[-20,-15,0],[0,0,0],[20,-12,0],[-35,-5,-8],[35,-8,8],[-15,-30,-15],[15,-28,15],[0,-35,0],[-8,-42,-5],[8,-42,5]].map(([ox,oy,rot],i)=>(
        <ellipse key={i} cx={72+ox*0.5} cy={82+oy*0.5} rx="19" ry="7"
          fill={i<6?"#368a48":"#44a458"}
          transform={`rotate(${rot+(ox*2)} ${72+ox*0.5} ${82+oy*0.5})`} opacity="0.88"/>
      ))}
    </svg>
  ),

  TrendyA: () => (
    <svg viewBox="0 0 230 270" width="200" height="240" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="115" cy="254" rx="56" ry="14" fill="#c0a880" opacity="0.3"/>
      <path d="M70 180 Q74 246 115 255 Q156 246 160 180Z" fill="#ede5d6"/>
      {[0,1,2,3,4,5,6].map(i=><line key={i} x1={74+i*13} y1="180" x2={74+i*13} y2="248" stroke="#ddd4c0" strokeWidth="1" opacity="0.5"/>)}
      <path d="M65 170 Q115 162 165 170 L160 180 Q115 175 70 180Z" fill="#ddd0be"/>
      <ellipse cx="115" cy="170" rx="50" ry="12" fill="#ede5d6"/>
      <ellipse cx="115" cy="168" rx="47" ry="10" fill="#251608"/>
      <ellipse cx="84" cy="106" rx="52" ry="28" fill="#246832" transform="rotate(-27 84 106)"/>
      <ellipse cx="148" cy="101" rx="55" ry="30" fill="#2a7438" transform="rotate(22 148 101)"/>
      <ellipse cx="112" cy="83" rx="49" ry="26" fill="#328440" transform="rotate(-8 112 83)"/>
      <ellipse cx="92" cy="60" rx="44" ry="23" fill="#3a9048" transform="rotate(-22 92 60)"/>
      <ellipse cx="136" cy="65" rx="47" ry="25" fill="#368c48" transform="rotate(27 136 65)"/>
      <ellipse cx="112" cy="43" rx="42" ry="21" fill="#42a055" transform="rotate(0 112 43)"/>
      <ellipse cx="84" cy="109" rx="10" ry="5" fill="rgba(200,255,180,0.28)" transform="rotate(-27 84 109)"/>
      <ellipse cx="150" cy="103" rx="11" ry="5" fill="rgba(200,255,180,0.22)" transform="rotate(22 150 103)"/>
    </svg>
  ),

  TrendyB: () => (
    <svg viewBox="0 0 205 238" width="180" height="215" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="102" cy="224" rx="50" ry="13" fill="#7accc0" opacity="0.3"/>
      <path d="M61 164 Q64 214 102 222 Q140 214 143 164Z" fill="#a8e8e0"/>
      <path d="M57 154 Q102 147 147 154 L143 164 Q102 160 61 164Z" fill="#90d8d0"/>
      <ellipse cx="102" cy="154" rx="45" ry="12" fill="#a8e8e0"/>
      <ellipse cx="102" cy="152" rx="42" ry="10" fill="#251608"/>
      {[[-22,-19,0],[0,0,0],[22,-14,0],[-38,-5,-8],[38,-6,8],[0,-32,0],[-12,-38,-12],[12,-38,12]].map(([ox,oy,rot],i)=>(
        <ellipse key={i} cx={102+ox*0.5} cy={112+oy*0.5} rx="29" ry="12"
          fill={i<5?"#389850":"#44aa60"}
          transform={`rotate(${rot+(ox*1.6)} ${102+ox*0.5} ${112+oy*0.5})`} opacity={0.85}/>
      ))}
      <ellipse cx="102" cy="100" rx="18" ry="8" fill="#4ab860"/>
      <ellipse cx="102" cy="90" rx="12" ry="6" fill="#54c870"/>
      <ellipse cx="102" cy="82" rx="8" ry="5" fill="#5ed880"/>
    </svg>
  ),

  O2Plant: () => (
    <svg viewBox="0 0 250 315" width="220" height="290" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="125" cy="298" rx="62" ry="17" fill="#beb8a8" opacity="0.3"/>
      <path d="M77 218 Q80 282 125 295 Q170 282 173 218Z" fill="#f2ece4"/>
      {[82,92,102,112,122,132,142,152,162].map((x,i)=>(
        <circle key={i} cx={x} cy={230+i*7} r="1.6" fill="#b0a898" opacity="0.5"/>
      ))}
      <path d="M73 208 Q125 200 177 208 L173 218 Q125 213 77 218Z" fill="#e4dcd4"/>
      <ellipse cx="125" cy="208" rx="52" ry="13" fill="#f2ece4"/>
      <ellipse cx="125" cy="206" rx="49" ry="11" fill="#251608"/>
      <ellipse cx="90" cy="143" rx="54" ry="29" fill="#226035" transform="rotate(-25 90 143)"/>
      <ellipse cx="163" cy="136" rx="57" ry="31" fill="#267040" transform="rotate(20 163 136)"/>
      <ellipse cx="122" cy="114" rx="51" ry="27" fill="#2e8048" transform="rotate(-8 122 114)"/>
      <ellipse cx="97" cy="85" rx="47" ry="25" fill="#349050" transform="rotate(-24 97 85)"/>
      <ellipse cx="152" cy="92" rx="51" ry="27" fill="#308c4e" transform="rotate(28 152 92)"/>
      <ellipse cx="122" cy="63" rx="45" ry="23" fill="#3a9e58" transform="rotate(4 122 63)"/>
      <ellipse cx="101" cy="42" rx="40" ry="21" fill="#40aa60" transform="rotate(-15 101 42)"/>
      <ellipse cx="146" cy="47" rx="43" ry="22" fill="#3ca85e" transform="rotate(20 146 47)"/>
      <ellipse cx="88" cy="147" rx="10" ry="6" fill="rgba(200,255,180,0.32)" transform="rotate(-25 88 147)"/>
      <ellipse cx="165" cy="138" rx="12" ry="6" fill="rgba(200,255,180,0.26)" transform="rotate(20 165 138)"/>
    </svg>
  ),
};

/* ══════════════════════════════════════════════════════════
   STAR RATING
══════════════════════════════════════════════════════════ */
function Stars({ count = 5 }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={i <= Math.floor(count) ? "#f59e0b" : i - 0.5 <= count ? "url(#hg)" : "rgba(255,255,255,0.2)"}
          />
          <defs>
            <linearGradient id="hg">
              <stop offset="50%" stopColor="#f59e0b"/>
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)"/>
            </linearGradient>
          </defs>
        </svg>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const TOP_PLANTS = [
  { id:1, name:"Aglaonema plant",    desc:"The Aglaonema plant, commonly known as Chinese Evergreen, known for its attractive foliage and ease of care", price:"Rs. 300/-", Plant: Plants.Aglaonema },
  { id:2, name:"Plantain Lilies",    desc:"Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.", price:"Rs. 380/-", Plant: Plants.PlantainLily },
  { id:3, name:"Cactus",             desc:"It is known for their ability to thrive in arid environments and harsh conditions.", price:"Rs. 259/-", Plant: Plants.Cactus },
  { id:4, name:"Swiss cheese Plant", desc:"It is a popular tropical houseplant known for its distinctive, perforated leaves", price:"Rs. 400/-", Plant: Plants.SwissCheese, featured: true },
  { id:5, name:"Sansevieria plant",  desc:"It is a popular indoor plant admired for its striking appearance and low-maintenance nature.", price:"Rs. 450/-", Plant: Plants.Sansevieria },
  { id:6, name:"Agave plant",        desc:"The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves.", price:"Rs. 359/-", Plant: Plants.Agave },
];

const REVIEWS = [
  { name:"Shelly Russel",  stars:5,   text:"Just got my hands on some absolutely awesome plants, and I couldn't be happier! Every single one is gorgeous.", avatar:"SR", color:"#6b5b8a" },
  { name:"Lula Rolfson",   stars:5,   text:"Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.", avatar:"LR", color:"#4a7a6b" },
  { name:"Carol Huels",    stars:4.5, text:"It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!", avatar:"CH", color:"#c45a6a" },
];

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function FloraVision() {
  const [activeNav, setActiveNav]   = useState("Home");
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [showTop, setShowTop]       = useState(false);
  const [o2Slide, setO2Slide]       = useState(0);
  const [newsletter, setNewsletter] = useState("");
  const [cartCount, setCartCount]   = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  const addToCart = useCallback(() => setCartCount(c => c + 1), []);

  const NAV_LINKS = ["Home", "Plants Type", "Contact"];

  return (
    <>
      {/* ══ NAVBAR ══════════════════════════════════════════ */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo" onClick={() => setActiveNav("Home")}>
          <Icon.Leaf /> Flora<span>Vision</span>.
        </a>

        <div className="nav-links">
          {NAV_LINKS.map(link => (
            <button key={link} className={`nav-link${activeNav === link ? " active" : ""}`}
              onClick={() => setActiveNav(link)}>
              {link} {link === "Plants Type" && <Icon.ChevronDown />}
            </button>
          ))}
        </div>

        <div className="nav-icons">
          <button className="nav-icon-btn" title="Search"><Icon.Search /></button>
          <button className="nav-icon-btn" title="Cart" onClick={addToCart} style={{ position:"relative" }}>
            <Icon.Cart />
            {cartCount > 0 && (
              <span style={{ position:"absolute", top:4, right:4, width:16, height:16, borderRadius:"50%", background:"#4ade80", color:"#0b1a0e", fontSize:9, fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center" }}>{cartCount}</span>
            )}
          </button>
         <button
  className={`hamburger${menuOpen ? " open" : ""}`}
  onClick={() => setMenuOpen(m => !m)}
>
  <span></span>
  <span></span>
  <span></span>
</button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`menu-overlay${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map(link => (
          <button key={link} className={`nav-link${activeNav === link ? " active" : ""}`}
            onClick={() => { setActiveNav(link); setMenuOpen(false); }}>
            {link}
          </button>
        ))}
        <div style={{ marginTop:"auto", display:"flex", gap:12 }}>
          <button className="btn-primary" style={{ flex:1, padding:"12px 0", textAlign:"center" }}>Buy Now</button>
        </div>
      </div>

      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />

        {/* Big plant SVG — desktop only (hidden on mobile via CSS) */}
        <div className="hero-plant" style={{ width:"clamp(340px,50vw,640px)", height:"clamp(360px,55vh,620px)" }}>
          <Plants.HeroPlant />
        </div>

        <div className="hero-content">
          <div className="hero-tag">🌿 &nbsp;Premium Indoor Plants</div>

          <h1 className="hero-title">
            Earth's<br /><em>Exhale</em>
          </h1>

          <p className="hero-subtitle">
            "Earth's Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>

          <div className="hero-cta">
            <button className="btn-primary" onClick={addToCart}>Buy Now</button>
            <button className="btn-play">
              <span className="play-ring"><Icon.Play /></span>
              Live Demo
            </button>
          </div>

          <div className="hero-stats">
            {[["500+","Plant Species"],["4.9★","Customer Rating"],["12K+","Happy Customers"]].map(([n,l]) => (
              <div className="stat-item" key={l}>
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating product card */}
        <div className="hero-product-card">
          <div className="product-card-img"><Plants.Aglaonema /></div>
          <p className="product-card-tag">Indoor Plant</p>
          <div className="product-card-row">
            <span className="product-card-name">Aglaonema plant</span>
            <Icon.ChevronRight size={15} />
          </div>
          <button className="btn-primary" style={{ width:"100%", padding:"11px 0", fontSize:14 }}
            onClick={addToCart}>Buy Now</button>
          <div className="product-dots">
            {[0,1,2].map(i => <div key={i} className={`dot${i===0?" active":""}`} />)}
          </div>
        </div>

        {/* Review card */}
        <div className="hero-review-card">
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div className="avatar" style={{ background:"linear-gradient(135deg,#4ade80,#22c55e)" }}>RH</div>
            <div>
              <p style={{ fontWeight:700, fontSize:14, marginBottom:4 }}>Ronnie Hamill</p>
              <Stars count={5} />
            </div>
          </div>
          <p style={{ fontSize:12.5, color:"rgba(255,255,255,0.6)", lineHeight:1.68, marginTop:66 }}>
            I can't express how thrilled I am with my new natural plant! They bring such a fresh and vibrant energy to my home.
          </p>
        </div>
      </section>

      {/* ══ TRENDY PLANTS ════════════════════════════════════ */}
      <section className="section" id="trendy">
        <div className="section-wrap"><h2 className="section-title">Our Trendy plants</h2></div>

        <div style={{ maxWidth:960, margin:"0 auto" }}>
          {/* Card 1 */}
          <div className="trendy-card">
            <div className="trendy-card-plant"><Plants.TrendyA /></div>
            <div className="trendy-card-info">
              <h3 className="card-title">For Your Desks Decorations</h3>
              <p className="card-desc">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
              <p className="trendy-price">Rs. 599/-</p>
              <div className="trendy-btns">
                <button className="btn-outline">Explore</button>
                <button className="btn-icon" onClick={addToCart}><Icon.Cart size={16} /></button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="trendy-card reverse">
            <div className="trendy-card-plant"><Plants.TrendyB /></div>
            <div className="trendy-card-info">
              <h3 className="card-title">For Your Desks Decorations</h3>
              <p className="card-desc">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.</p>
              <p className="trendy-price">Rs. 399/-</p>
              <div className="trendy-btns">
                <button className="btn-outline">Explore</button>
                <button className="btn-icon" onClick={addToCart}><Icon.Cart size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TOP SELLING ══════════════════════════════════════ */}
      <section className="section section-alt" id="shop">
        <div className="section-wrap"><h2 className="section-title">Our Top Selling Plants</h2></div>
        <div className="plant-grid">
          {TOP_PLANTS.map(({ id, name, desc, price, Plant, featured }) => (
            <div key={id} className={`plant-card${featured?" featured":""}`}>
              {featured && <span className="badge-top">⭐ Best Seller</span>}
              <div className="plant-card-img"><Plant /></div>
              <p className="plant-name">{name}</p>
              <p className="plant-desc">{desc}</p>
              <div className="plant-footer">
                <span className="plant-price">{price}</span>
                <button className="btn-icon" onClick={addToCart}><Icon.Cart size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CUSTOMER REVIEWS ═════════════════════════════════ */}
      <section className="section" id="reviews">
        <div className="section-wrap"><h2 className="section-title">Customer Review</h2></div>
        <div className="review-grid">
          {REVIEWS.map(({ name, stars, text, avatar, color }) => (
            <div key={name} className="review-card">
              <div className="review-head">
                <div className="avatar" style={{ background: color }}>{avatar}</div>
                <div>
                  <p className="review-name">{name}</p>
                  <Stars count={stars} />
                </div>
              </div>
              <p className="review-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BEST O2 ══════════════════════════════════════════ */}
      <section className="section section-alt" id="o2">
        <div className="section-wrap"><h2 className="section-title">Our Best o2</h2></div>
        <div className="o2-card">
          <div className="o2-plant"><Plants.O2Plant /></div>
          <div className="o2-info">
            <h3 className="o2-title">We Have Small And Best O2 Plants Collection's</h3>
            <p className="o2-desc">Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
            <p className="o2-desc" style={{ marginBottom:28 }}>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
            <div className="o2-nav">
              <button className="btn-outline">Explore</button>
              <button className="btn-circle" onClick={() => setO2Slide(s => Math.max(0, s-1))}><Icon.ChevronLeft /></button>
              <span className="o2-counter">0{o2Slide+1}/04</span>
              <button className="btn-circle" onClick={() => setO2Slide(s => Math.min(3, s+1))}><Icon.ChevronRight /></button>
            </div>
          </div>
        </div>
        <div className="slide-dots">
          {[0,1,2].map(i => (
            <div key={i} className={`sdot${i === o2Slide%3 ? " active" : ""}`}
              onClick={() => setO2Slide(i)} />
          ))}
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════ */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="nav-logo" style={{ marginBottom:0, cursor:"default" }}>
              <Icon.Leaf /> Flora<span style={{ color:"#4ade80" }}>Vision</span>.
            </div>
            <blockquote className="footer-brand-quote">
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
            </blockquote>
            <div className="social-btns">
              {["FB","TW","LI"].map(s => <button key={s} className="social-btn">{s}</button>)}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="footer-col-title">Quick Link's</p>
            {["Home","Type's Of plant's","Contact","Privacy"].map(l => (
              <a key={l} className="footer-link" href="#hero">{l}</a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <p className="footer-col-title">For Every Update.</p>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.45)", marginBottom:18, lineHeight:1.65 }}>
              Subscribe to our newsletter for the latest plant care tips, new arrivals, and exclusive offers.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter Email"
                value={newsletter}
                onChange={e => setNewsletter(e.target.value)}
              />
              <button className="newsletter-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">FloraVision © {new Date().getFullYear()} — All rights reserved</p>
          <p className="footer-copy">Crafted with 🌿 for plant lovers</p>
        </div>
      </footer>

      {/* ══ SCROLL TO TOP ════════════════════════════════════ */}
      <button className={`scroll-top${showTop?" visible":""}`} onClick={scrollTop} aria-label="Scroll to top">
        <Icon.ArrowUp />
      </button>
    </>
  );
}
