/**
 * Rahu Ketu Peyarchi 2026 - Interactive Landing Page Logic
 * Features: 12 Rasi Responsive Grid (4 Columns x 3 Rows), Direct Razorpay Checkout, FAQ Accordion
 */

const RAZORPAY_URL = "https://rzp.io/rzp/Y6bhLqh";

// 12 Zodiac Data for Rahu-Ketu Transit 2026
const rasiData = [
  {
    id: "mesham",
    name: "Mesham (Aries)",
    tamilName: "மேஷம்",
    symbol: "♈",
    element: "fire",
    elementName: "நெருப்பு (Fire)",
    rahuHouseShort: "11-ஆம் இடம் (லாபம்)",
    ketuHouseShort: "5-ஆம் இடம் (புண்ணியம்)",
    rating: "9.2 / 10",
    statusBadge: "மகா யோகம்",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Tremendous financial elevation, sudden windfall gains, executive career advancements, and overseas expansion.",
    career: "Breakthrough promotions and leadership roles.",
    finance: "Abundant wealth inflow and profitable business growth.",
    pariharam: "Worship Goddess Durga on Tuesdays during Rahu Kalam.",
    gemstone: "Natural Hessonite (Gomed) or Red Coral."
  },
  {
    id: "rishabam",
    name: "Rishabam (Taurus)",
    tamilName: "ரிஷபம்",
    symbol: "♉",
    element: "earth",
    elementName: "நிலம் (Earth)",
    rahuHouseShort: "10-ஆம் இடம் (தொழில்)",
    ketuHouseShort: "4-ஆம் இடம் (சுகம்)",
    rating: "8.3 / 10",
    statusBadge: "தொழில் யோகம்",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Significant career expansion, foreign projects, and elevated professional status. Balance work with family harmony.",
    career: "Elevation to managerial posts and global trade.",
    finance: "Steady earnings growth and real estate gains.",
    pariharam: "Milk abhishekam to Lord Shiva on Pradosham days.",
    gemstone: "White Zircon or Cat's Eye (Vaidooryam)."
  },
  {
    id: "mithunam",
    name: "Mithunam (Gemini)",
    tamilName: "மிதுனம்",
    symbol: "♊",
    element: "air",
    elementName: "காற்று (Air)",
    rahuHouseShort: "9-ஆம் இடம் (பாக்கியம்)",
    ketuHouseShort: "3-ஆம் இடம் (தைரியம்)",
    rating: "8.8 / 10",
    statusBadge: "பாக்கிய யோகம்",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Remarkable valor, long-distance pilgrimages, foreign travel, and mentor guidance unlocking long-delayed fortune.",
    career: "Overseas employment opportunities & digital media acclaim.",
    finance: "Ancestral property settlements and investment profits.",
    pariharam: "Chant Vishnu Sahasranamam on Wednesdays.",
    gemstone: "Natural Emerald (Panna) or 5-Mukhi Rudraksha."
  },
  {
    id: "kadagam",
    name: "Kadagam (Cancer)",
    tamilName: "கடகம்",
    symbol: "♋",
    element: "water",
    elementName: "நீர் (Water)",
    rahuHouseShort: "8-ஆம் இடம் (ஆயுள்)",
    ketuHouseShort: "2-ஆம் இடம் (தன & வாக்கு)",
    rating: "7.3 / 10",
    statusBadge: "பரிகார ராசி",
    statusColor: "bg-orange-100 text-orange-800 border-orange-300",
    summary: "Deep spiritual transformation. Exercise disciplined financial prudence, avoid speculative risks, and practice calm speech.",
    career: "Steady work routine; avoid hasty job switches.",
    finance: "Prioritize savings and curb luxury expenses.",
    pariharam: "Perform Ketu archana at Keezhaperumpallam.",
    gemstone: "Natural Pearl (Muthu) or Moonstone in silver."
  },
  {
    id: "simham",
    name: "Simham (Leo)",
    tamilName: "சிம்மம்",
    symbol: "♌",
    element: "fire",
    elementName: "நெருப்பு (Fire)",
    rahuHouseShort: "7-ஆம் இடம் (களத்திரம்)",
    ketuHouseShort: "1-ஆம் இடம் (ஜென்மம்)",
    rating: "7.6 / 10",
    statusBadge: "சுய விழிப்புணர்வு",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Ketu in Janma inspires detachment and spiritual insight, while Rahu in 7th brings dynamic commercial partnerships.",
    career: "Collaborative business contracts and overseas trade.",
    finance: "Gains through business partnerships and spouse.",
    pariharam: "Chant Aditya Hrudayam daily at sunrise.",
    gemstone: "Natural Ruby (Manikyam) or Yellow Sapphire."
  },
  {
    id: "kanni",
    name: "Kanni (Virgo)",
    tamilName: "கன்னி",
    symbol: "♍",
    element: "earth",
    elementName: "நிலம் (Earth)",
    rahuHouseShort: "6-ஆம் இடம் (சத்ரு ஜெயம்)",
    ketuHouseShort: "12-ஆம் இடம் (மோக்ஷம்)",
    rating: "9.3 / 10",
    statusBadge: "வெற்றி யோகம்",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Rahu in 6th is celebrated for vanquishing competitors, clearing chronic debts, and achieving legal and career triumphs.",
    career: "Stunning victories in exams, promotions, and tenders.",
    finance: "Rapid clearance of longstanding debts and loans.",
    pariharam: "Worship Lord Sarabeswara on Sundays during Rahu Kalam.",
    gemstone: "Natural Hessonite (Gomed) or Green Tourmaline."
  },
  {
    id: "thulam",
    name: "Thulam (Libra)",
    tamilName: "துலாம்",
    symbol: "♎",
    element: "air",
    elementName: "காற்று (Air)",
    rahuHouseShort: "5-ஆம் இடம் (புண்ணியம்)",
    ketuHouseShort: "11-ஆம் இடம் (லாபம்)",
    rating: "8.7 / 10",
    statusBadge: "புண்ணிய யோகம்",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Ketu in 11th brings effortless gains and realization of dreams, while Rahu in 5th ignites creative intelligence and fame.",
    career: "Artistic and technological consulting acclaim.",
    finance: "Unexpected profits through investments and royalties.",
    pariharam: "Chant Sri Lalitha Sahasranamam on Fridays.",
    gemstone: "Sparkling White Sapphire or Diamond in silver."
  },
  {
    id: "viruchigam",
    name: "Viruchigam (Scorpio)",
    tamilName: "விருச்சிகம்",
    symbol: "♏",
    element: "water",
    elementName: "நீர் (Water)",
    rahuHouseShort: "4-ஆம் இடம் (சுகம்)",
    ketuHouseShort: "10-ஆம் இடம் (கர்மம்)",
    rating: "7.9 / 10",
    statusBadge: "கவன முன்னேற்றம்",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Purchasing properties, modernizing living spaces, and re-evaluating career trajectory with profound spiritual focus.",
    career: "Growth in advisory, teaching, and consultancy roles.",
    finance: "Investments in land, vehicle, or ancestral property.",
    pariharam: "Offer red flowers to Lord Murugan on Tuesdays.",
    gemstone: "Natural Red Coral (Pavazham) or Yellow Topaz."
  },
  {
    id: "dhanusu",
    name: "Dhanusu (Sagittarius)",
    tamilName: "தனுசு",
    symbol: "♐",
    element: "fire",
    elementName: "நெருப்பு (Fire)",
    rahuHouseShort: "3-ஆம் இடம் (தைரியம்)",
    ketuHouseShort: "9-ஆம் இடம் (பாக்கியம்)",
    rating: "9.4 / 10",
    statusBadge: "தைரிய லக்ஷ்மி",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Rahu in 3rd is one of the most auspicious placements in Vedic astrology, bringing unmatched confidence and victory in all endeavours.",
    career: "Dynamic leadership, rapid promotions, and digital success.",
    finance: "Exponential rise in cash flow and lucrative contracts.",
    pariharam: "Visit Srikalahasti or Thirunageswaram. Guru pooja.",
    gemstone: "Brilliant Natural Yellow Sapphire (Pushparagam)."
  },
  {
    id: "makaram",
    name: "Makaram (Capricorn)",
    tamilName: "மகரம்",
    symbol: "♑",
    element: "earth",
    elementName: "நிலம் (Earth)",
    rahuHouseShort: "2-ஆம் இடம் (தனம் / வாக்கு)",
    ketuHouseShort: "8-ஆம் இடம் (ஆயுள்)",
    rating: "7.8 / 10",
    statusBadge: "பொருளாதார கவனம்",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Rahu in 2nd can bring sudden financial inflows but calls for diplomacy in speech. Ketu in 8th deepens spiritual research.",
    career: "Consistent performance in finance, data, and research.",
    finance: "Sudden monetary gains balanced with family needs.",
    pariharam: "Light sesame oil lamps for Lord Hanuman on Saturdays.",
    gemstone: "Natural Blue Sapphire (Neelam) or Amethyst."
  },
  {
    id: "kumbham",
    name: "Kumbham (Aquarius)",
    tamilName: "கும்பம்",
    symbol: "♒",
    element: "air",
    elementName: "காற்று (Air)",
    rahuHouseShort: "1-ஆம் இடம் (ஜென்மம்)",
    ketuHouseShort: "7-ஆம் இடம் (களத்திரம்)",
    rating: "7.7 / 10",
    statusBadge: "மறுமலர்ச்சி காலம்",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Rahu enters your Janma Rasi initiating an ambitious cycle of personal rebranding, charisma, and international goals. Keep ego in check.",
    career: "Bold career leaps into tech, trading, and media.",
    finance: "High turnover; ensure clear business documentation.",
    pariharam: "Perform archana at Thirunageswaram. Feed crows.",
    gemstone: "Certified Hessonite (Gomed) or Blue Topaz."
  },
  {
    id: "meenam",
    name: "Meenam (Pisces)",
    tamilName: "மீனம்",
    symbol: "♓",
    element: "water",
    elementName: "நீர் (Water)",
    rahuHouseShort: "12-ஆம் இடம் (மோக்ஷம்)",
    ketuHouseShort: "6-ஆம் இடம் (சத்ரு ஜெயம்)",
    rating: "8.5 / 10",
    statusBadge: "சுப விரயம்",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Ketu in 6th crushes all hidden adversaries and illnesses, while Rahu in 12th creates auspicious foreign travel and settlements.",
    career: "Lucrative postings abroad and success in global firms.",
    finance: "Substantial earnings directed toward auspicious events.",
    pariharam: "Visit Thirunageswaram and Keezhaperumpallam.",
    gemstone: "Natural Yellow Sapphire or Vaidooryam (Cat's Eye)."
  }
];

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderRasiGrid();
  setupDirectRazorpayLinks();
});

// Render all 12 Rasi Cards in a 4-Column x 3-Row Grid
function renderRasiGrid() {
  const container = document.getElementById("rasi-cards-grid");
  if (!container) return;

  container.innerHTML = rasiData.map(r => `
    <div class="rasi-grid-card flex flex-col justify-between" id="card-${r.id}">
      <div>
        <!-- Card Top Bar: Symbol, Name & Status Badge -->
        <div class="flex items-start justify-between gap-2.5 pb-2.5 mb-2.5 border-b border-orange-200/70">
          <div class="flex items-center gap-2.5">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 p-0.5 shadow-md flex items-center justify-center flex-shrink-0">
              <div class="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-xl font-bold">
                ${r.symbol}
              </div>
            </div>
            <div>
              <h4 class="font-heading font-extrabold text-base text-[#2A1202] leading-tight">
                ${r.name.split(' ')[0]}
              </h4>
              <span class="tamil-text text-xs font-bold text-orange-900 block">
                ${r.tamilName} • <span class="text-[11px] font-semibold text-stone-600">${r.elementName}</span>
              </span>
            </div>
          </div>
          <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full border text-center ${r.statusColor}">
            ${r.statusBadge}
          </span>
        </div>

        <!-- Transit Houses Placement -->
        <div class="grid grid-cols-2 gap-1.5 mb-2.5">
          <div class="p-2 rounded-lg bg-orange-50/90 border border-orange-200">
            <span class="text-[9px] font-bold uppercase tracking-wider text-orange-700 block mb-0.5">🪐 Rahu</span>
            <p class="font-heading font-bold text-xs text-[#2A1202] leading-snug">${r.rahuHouseShort}</p>
          </div>
          <div class="p-2 rounded-lg bg-amber-50/90 border border-amber-200">
            <span class="text-[9px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">🌑 Ketu</span>
            <p class="font-heading font-bold text-xs text-[#2A1202] leading-snug">${r.ketuHouseShort}</p>
          </div>
        </div>

        <!-- Summary -->
        <p class="text-xs text-stone-700 leading-relaxed mb-2.5 font-medium line-clamp-2">
          ${r.summary}
        </p>

        <!-- Highlights (Career & Wealth) -->
        <div class="space-y-1 mb-2.5 text-[11px] sm:text-xs text-stone-800 bg-white/70 p-2 rounded-lg border border-stone-200/80">
          <div class="flex items-start gap-1 leading-snug">
            <span class="text-orange-700 font-bold">💼</span>
            <span><strong class="text-stone-900">Career:</strong> ${r.career}</span>
          </div>
          <div class="flex items-start gap-1 leading-snug">
            <span class="text-amber-700 font-bold">💰</span>
            <span><strong class="text-stone-900">Finance:</strong> ${r.finance}</span>
          </div>
        </div>

        <!-- Pariharam & Gemstone Box -->
        <div class="p-2.5 rounded-lg bg-gradient-to-r from-orange-100/80 via-amber-100/60 to-orange-100/80 border border-orange-300 text-[11px] sm:text-xs mb-3 space-y-1">
          <div>
            <strong class="text-[#2A1202] block text-[11px]">🕉️ Pariharam:</strong>
            <p class="text-[#5A2805] leading-tight">${r.pariharam}</p>
          </div>
          <div class="pt-1 border-t border-orange-200/60">
            <strong class="text-[#2A1202] block text-[11px]">💎 Gemstone:</strong>
            <p class="text-orange-950 font-bold leading-tight">${r.gemstone}</p>
          </div>
        </div>
      </div>

      <!-- Book Consultation CTA Button (Direct to Razorpay) -->
      <a 
        href="${RAZORPAY_URL}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-highlighted-cta w-full text-center text-xs py-2 shadow-sm group">
        <span>Book for ${r.tamilName}</span>
        <svg class="w-3.5 h-3.5 ml-1 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </div>
  `).join("");
}

// Ensure all "Book Consultation" triggers go directly to Razorpay Gateway
function setupDirectRazorpayLinks() {
  document.querySelectorAll("[data-razorpay]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(RAZORPAY_URL, "_blank");
    });
  });
}

// FAQ Accordion Toggle
function toggleFaq(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);

  if (!content || !icon) return;

  const isHidden = content.classList.contains("hidden");

  // Close all other FAQs
  for (let i = 1; i <= 5; i++) {
    const c = document.getElementById(`faq-content-${i}`);
    const ic = document.getElementById(`faq-icon-${i}`);
    if (c) c.classList.add("hidden");
    if (ic) {
      ic.textContent = "+";
      ic.classList.remove("rotate-45");
    }
  }

  if (isHidden) {
    content.classList.remove("hidden");
    icon.textContent = "×";
    icon.classList.add("rotate-45");
  }
}
