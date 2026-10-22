/**
 * Rahu Ketu Peyarchi 2026 - Interactive Landing Page Logic
 * Features: 12 Rasi Responsive Grid with Element Filters, Direct Razorpay Checkout, FAQ Accordion
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
    elementName: "நெருப்பு ராசி (Fire)",
    rahuHouse: "11th House (Labha Sthanam - Aquarius)",
    ketuHouse: "5th House (Poorva Punya - Leo)",
    rahuHouseShort: "11-ஆம் இடம் (லாப ஸ்தானம்)",
    ketuHouseShort: "5-ஆம் இடம் (பூர்வ புண்ணியம்)",
    rating: "9.2 / 10",
    statusBadge: "Highly Auspicious (மகா யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Tremendous financial elevation, sudden windfall gains, executive career advancements, and expansion of influential social circles.",
    career: "Breakthrough promotions, senior leadership opportunities, and recognition from overseas clients.",
    finance: "Abundant wealth inflow through multiple sources and lucrative business expansion.",
    pariharam: "Worship Goddess Durga on Tuesdays during Rahu Kalam with lemon lamps.",
    gemstone: "Natural Hessonite (Gomed) or Red Coral setting."
  },
  {
    id: "rishabam",
    name: "Rishabam (Taurus)",
    tamilName: "ரிஷபம்",
    symbol: "♉",
    element: "earth",
    elementName: "நில ராசி (Earth)",
    rahuHouse: "10th House (Karma Sthanam - Aquarius)",
    ketuHouse: "4th House (Sukha Sthanam - Leo)",
    rahuHouseShort: "10-ஆம் இடம் (தொழில் / கர்மம்)",
    ketuHouseShort: "4-ஆம் இடம் (சுக ஸ்தானம்)",
    rating: "8.3 / 10",
    statusBadge: "Favorable Career Leap (தொழில் முன்னேற்றம்)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Significant career expansion, foreign projects, and elevated professional status. Balance work with home harmony.",
    career: "New job offers, elevation to managerial posts, or venture expansion into international trade.",
    finance: "Steady growth in earnings. Wise investments in real estate and capital assets.",
    pariharam: "Perform milk abhishekam to Lord Shiva on Pradosham days. Visit Thirunageswaram.",
    gemstone: "Certified White Zircon or Ketu-harmonizing Cat's Eye."
  },
  {
    id: "mithunam",
    name: "Mithunam (Gemini)",
    tamilName: "மிதுனம்",
    symbol: "♊",
    element: "air",
    elementName: "காற்று ராசி (Air)",
    rahuHouse: "9th House (Bhagya Sthanam - Aquarius)",
    ketuHouse: "3rd House (Dhairya Sthanam - Leo)",
    rahuHouseShort: "9-ஆம் இடம் (பாக்கிய ஸ்தானம்)",
    ketuHouseShort: "3-ஆம் இடம் (தைரிய ஸ்தானம்)",
    rating: "8.8 / 10",
    statusBadge: "Divine Fortune & Courage (பாக்கிய யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Remarkable valor, long-distance pilgrimages, foreign travels, and divine mentor guidance unlocking long-delayed fortune.",
    career: "Overseas employment opportunities, university admissions, and breakthroughs in digital media.",
    finance: "Ancestral property settlements and rewarding returns from long-term ventures.",
    pariharam: "Chant Vishnu Sahasranamam on Wednesdays. Feed green gram to cows.",
    gemstone: "Natural Emerald (Panna) alongside an energised Rudraksha."
  },
  {
    id: "kadagam",
    name: "Kadagam (Cancer)",
    tamilName: "கடகம்",
    symbol: "♋",
    element: "water",
    elementName: "நீர் ராசி (Water)",
    rahuHouse: "8th House (Ayur Sthanam - Aquarius)",
    ketuHouse: "2nd House (Dhana & Vak Sthanam - Leo)",
    rahuHouseShort: "8-ஆம் இடம் (ஆயுள் ஸ்தானம்)",
    ketuHouseShort: "2-ஆம் இடம் (தன & வாக்கு ஸ்தானம்)",
    rating: "7.3 / 10",
    statusBadge: "Caution & Remedies Needed (பரிகார ராசி)",
    statusColor: "bg-orange-100 text-orange-800 border-orange-300",
    summary: "Deep spiritual transformation. Exercise disciplined financial prudence, avoid speculative risks, and practice soft speech.",
    career: "Steady work routine is advised. Avoid hasty job resignations without confirmed offers.",
    finance: "Prioritize emergency savings, curb impulsive luxury spending, and maintain clear accounting.",
    pariharam: "Visit Keezhaperumpallam temple to perform Ketu archana. Light sesame oil lamps on Saturdays.",
    gemstone: "Natural Pearl (Muthu) or Moonstone set in pure silver ring."
  },
  {
    id: "simham",
    name: "Simham (Leo)",
    tamilName: "சிம்மம்",
    symbol: "♌",
    element: "fire",
    elementName: "நெருப்பு ராசி (Fire)",
    rahuHouse: "7th House (Kalathra Sthanam - Aquarius)",
    ketuHouse: "1st House (Janma Sthanam - Leo)",
    rahuHouseShort: "7-ஆம் இடம் (களத்திர ஸ்தானம்)",
    ketuHouseShort: "1-ஆம் இடம் (ஜென்ம ஸ்தானம்)",
    rating: "7.6 / 10",
    statusBadge: "Spiritual Awakening & Focus (சுய விழிப்புணர்வு)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Ketu in Janma inspires detachment and spiritual insight, while Rahu in 7th brings dynamic partnerships and business contracts.",
    career: "Collaborative business contracts flourish. Choose business partners with verified credentials.",
    finance: "Gains through spouse or overseas business partnerships. Keep clear legal agreements.",
    pariharam: "Chant Aditya Hrudayam daily at sunrise. Donate food to elderly persons on Sundays.",
    gemstone: "Natural Ruby (Manikyam) or Yellow Sapphire (Pushparagam)."
  },
  {
    id: "kanni",
    name: "Kanni (Virgo)",
    tamilName: "கன்னி",
    symbol: "♍",
    element: "earth",
    elementName: "நில ராசி (Earth)",
    rahuHouse: "6th House (Shatru/Roga Sthanam - Aquarius)",
    ketuHouse: "12th House (Moksha Sthanam - Leo)",
    rahuHouseShort: "6-ஆம் இடம் (சத்ரு / ரோக ஜெயம்)",
    ketuHouseShort: "12-ஆம் இடம் (மோக்ஷ ஸ்தானம்)",
    rating: "9.3 / 10",
    statusBadge: "Supreme Victory & Debt Relief (வெற்றி யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Rahu in the 6th house is highly celebrated in classical astrology for vanquishing competitors, clearing chronic debts, and achieving legal triumphs.",
    career: "Stunning victories in competitive examinations, court cases, promotion battles, and corporate tenders.",
    finance: "Rapid clearance of longstanding debts and loans. Inflow of fresh capital investments.",
    pariharam: "Offer worship to Lord Sarabeswara or Goddess Pratyangira on Sundays during Rahu Kalam.",
    gemstone: "Finest quality Hessonite (Gomed) or Green Tourmaline in silver."
  },
  {
    id: "thulam",
    name: "Thulam (Libra)",
    tamilName: "துலாம்",
    symbol: "♎",
    element: "air",
    elementName: "காற்று ராசி (Air)",
    rahuHouse: "5th House (Poorva Punya - Aquarius)",
    ketuHouse: "11th House (Labha Sthanam - Leo)",
    rahuHouseShort: "5-ஆம் இடம் (பூர்வ புண்ணியம்)",
    ketuHouseShort: "11-ஆம் இடம் (லாப ஸ்தானம்)",
    rating: "8.7 / 10",
    statusBadge: "Creative Genius & Profits (புண்ணிய யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Ketu in the 11th brings effortless gains and realization of dreams, while Rahu in 5th ignites speculative intelligence and creative fame.",
    career: "Artistic, technological, and research endeavours gain industry-wide acclaim.",
    finance: "Unexpected profits through investments, creative royalties, and professional consultancies.",
    pariharam: "Chant Sri Lalitha Sahasranamam on Fridays. Offer sweets to young girl children.",
    gemstone: "Sparkling White Sapphire or Diamond set in platinum or silver."
  },
  {
    id: "viruchigam",
    name: "Viruchigam (Scorpio)",
    tamilName: "விருச்சிகம்",
    symbol: "♏",
    element: "water",
    elementName: "நீர் ராசி (Water)",
    rahuHouse: "4th House (Sukha Sthanam - Aquarius)",
    ketuHouse: "10th House (Karma Sthanam - Leo)",
    rahuHouseShort: "4-ஆம் இடம் (சுக & மாத்ரு ஸ்தானம்)",
    ketuHouseShort: "10-ஆம் இடம் (தொழில் ஸ்தானம்)",
    rating: "7.9 / 10",
    statusBadge: "Property & Career Balance (கவனமான முன்னேற்றம்)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Purchasing properties, modernizing living spaces, and re-evaluating career trajectory with profound spiritual focus.",
    career: "Transition toward advisory, teaching, research, or independent consultancy roles.",
    finance: "Investments in land, vehicle, or ancestral property upgrades yield solid future value.",
    pariharam: "Offer red flowers to Lord Murugan on Tuesdays. Recite Kanda Sashti Kavasam.",
    gemstone: "Natural Red Coral (Pavazham) or Yellow Topaz."
  },
  {
    id: "dhanusu",
    name: "Dhanusu (Sagittarius)",
    tamilName: "தனுசு",
    symbol: "♐",
    element: "fire",
    elementName: "நெருப்பு ராசி (Fire)",
    rahuHouse: "3rd House (Dhairya Sthanam - Aquarius)",
    ketuHouse: "9th House (Bhagya Sthanam - Leo)",
    rahuHouseShort: "3-ஆம் இடம் (தைரிய & வீரிய ஸ்தானம்)",
    ketuHouseShort: "9-ஆம் இடம் (பாக்கிய ஸ்தானம்)",
    rating: "9.4 / 10",
    statusBadge: "Golden Courage & Prosperity (தைரிய லக்ஷ்மி யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Rahu in the 3rd house is one of the most auspicious placements in Vedic astrology, bringing unmatched confidence, media fame, and victory in all endeavours.",
    career: "Dynamic public speaking, rapid promotions, digital media breakthroughs, and triumphant negotiations.",
    finance: "Exponential rise in liquid cash flow, profitable contracts, and successful entrepreneurial leaps.",
    pariharam: "Visit Srikalahasti or Thirunageswaram. Perform Guru pooja on Thursdays.",
    gemstone: "Brilliant Natural Yellow Sapphire (Pushparagam) in gold."
  },
  {
    id: "makaram",
    name: "Makaram (Capricorn)",
    tamilName: "மகரம்",
    symbol: "♑",
    element: "earth",
    elementName: "நில ராசி (Earth)",
    rahuHouse: "2nd House (Dhana & Vak Sthanam - Aquarius)",
    ketuHouse: "8th House (Ayur Sthanam - Leo)",
    rahuHouseShort: "2-ஆம் இடம் (தன & குடும்ப ஸ்தானம்)",
    ketuHouseShort: "8-ஆம் இடம் (ஆயுள் ஸ்தானம்)",
    rating: "7.8 / 10",
    statusBadge: "Prudent Speech & Savings (பொருளாதார கவனம்)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Rahu in 2nd can bring sudden financial inflows but calls for diplomacy in speech. Ketu in 8th deepens occult interest and spiritual research.",
    career: "Consistent professional performance. Opportunities in banking, research, and data analysis.",
    finance: "Sudden monetary gains balanced with family expenditures. Avoid giving unsecured loans.",
    pariharam: "Light mustard or sesame oil lamps for Lord Hanuman on Saturdays. Chant Hanuman Chalisa.",
    gemstone: "Natural Blue Sapphire (Neelam) or Amethyst under expert guidance."
  },
  {
    id: "kumbham",
    name: "Kumbham (Aquarius)",
    tamilName: "கும்பம்",
    symbol: "♒",
    element: "air",
    elementName: "காற்று ராசி (Air)",
    rahuHouse: "1st House (Janma Sthanam - Aquarius)",
    ketuHouse: "7th House (Kalathra Sthanam - Leo)",
    rahuHouseShort: "1-ஆம் இடம் (ஜென்ம ஸ்தானம்)",
    ketuHouseShort: "7-ஆம் இடம் (களத்திர ஸ்தானம்)",
    rating: "7.7 / 10",
    statusBadge: "Personal Reinvention (மறுமலர்ச்சி காலம்)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Rahu enters your Janma Rasi initiating an ambitious cycle of personal rebranding, charisma, and international ambitions. Keep ego in check.",
    career: "Bold career leaps, high visibility in public life, and venture into innovative tech or import-export.",
    finance: "High cash turnover. Ensure all transactions and business taxes are strictly documented.",
    pariharam: "Perform archana at Thirunageswaram for Lord Rahu. Feed crows sesame-rice balls on Saturdays.",
    gemstone: "Certified Hessonite (Gomed) or Blue Topaz energized in Rahu hora."
  },
  {
    id: "meenam",
    name: "Meenam (Pisces)",
    tamilName: "மீனம்",
    symbol: "♓",
    element: "water",
    elementName: "நீர் ராசி (Water)",
    rahuHouse: "12th House (Vraya/Moksha Sthanam - Aquarius)",
    ketuHouse: "6th House (Shatru Sthanam - Leo)",
    rahuHouseShort: "12-ஆம் இடம் (சுப விரய & மோக்ஷ ஸ்தானம்)",
    ketuHouseShort: "6-ஆம் இடம் (சத்ரு ஜெயம்)",
    rating: "8.5 / 10",
    statusBadge: "Foreign Settlement & Spiritual Peace (சுப விரயம் & மோக்ஷம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Ketu in the 6th crushes all hidden adversaries and illnesses, while Rahu in 12th creates auspicious foreign travel, overseas settlements, and spiritual charities.",
    career: "Lucrative postings abroad, foreign immigration approvals, and success in multi-national corporations.",
    finance: "Substantial earnings directed toward auspicious celebrations (Subha Vrayam) and property.",
    pariharam: "Visit Thirunageswaram and Keezhaperumpallam. Donate blankets to the needy on Amavasya.",
    gemstone: "Natural Yellow Sapphire or Vaidooryam (Cat's Eye) for Ketu empowerment."
  }
];

// Current active filter
let currentFilter = "all";

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderRasiGrid("all");
  setupFilterTabs();
  setupDirectRazorpayLinks();
});

// Render 12 Rasi Cards in a Responsive Grid Layout
function renderRasiGrid(filter = "all") {
  const container = document.getElementById("rasi-cards-grid");
  if (!container) return;

  currentFilter = filter;
  const filteredData = filter === "all" 
    ? rasiData 
    : rasiData.filter(r => r.element === filter);

  container.innerHTML = filteredData.map(r => `
    <div class="rasi-grid-card flex flex-col justify-between" id="card-${r.id}">
      <div>
        <!-- Card Top Bar: Symbol, Name & Status Badge -->
        <div class="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-orange-200/70">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 p-0.5 shadow-md flex items-center justify-center flex-shrink-0">
              <div class="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-2xl font-bold">
                ${r.symbol}
              </div>
            </div>
            <div>
              <h4 class="font-heading font-extrabold text-lg text-[#2A1202] leading-tight">
                ${r.name}
              </h4>
              <span class="tamil-text text-sm font-bold text-orange-900 block mt-0.5">
                ${r.tamilName} • <span class="text-xs font-semibold text-stone-600">${r.elementName}</span>
              </span>
            </div>
          </div>
          <span class="text-[10px] sm:text-[11px] font-extrabold px-2.5 py-1 rounded-full border text-center ${r.statusColor}">
            ${r.statusBadge.split('(')[0].trim()}
          </span>
        </div>

        <!-- Transit Houses Placement -->
        <div class="grid grid-cols-2 gap-2 mb-3.5">
          <div class="p-2.5 rounded-xl bg-orange-50/90 border border-orange-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-orange-700 block mb-0.5">🪐 Rahu (ராகு)</span>
            <p class="font-heading font-bold text-xs sm:text-[13px] text-[#2A1202] leading-snug">${r.rahuHouseShort}</p>
          </div>
          <div class="p-2.5 rounded-xl bg-amber-50/90 border border-amber-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">🌑 Ketu (கேது)</span>
            <p class="font-heading font-bold text-xs sm:text-[13px] text-[#2A1202] leading-snug">${r.ketuHouseShort}</p>
          </div>
        </div>

        <!-- Summary -->
        <p class="text-xs sm:text-[13px] text-stone-700 leading-relaxed mb-3 font-medium">
          ${r.summary}
        </p>

        <!-- Highlights (Career & Wealth) -->
        <div class="space-y-1.5 mb-3.5 text-xs text-stone-800 bg-white/70 p-2.5 rounded-xl border border-stone-200/80">
          <div class="flex items-start gap-1.5">
            <span class="text-orange-700 font-bold">💼</span>
            <span class="leading-snug"><strong class="text-stone-900">Career:</strong> ${r.career}</span>
          </div>
          <div class="flex items-start gap-1.5">
            <span class="text-amber-700 font-bold">💰</span>
            <span class="leading-snug"><strong class="text-stone-900">Finance:</strong> ${r.finance}</span>
          </div>
        </div>

        <!-- Pariharam & Gemstone Box -->
        <div class="p-3 rounded-xl bg-gradient-to-r from-orange-100/80 via-amber-100/60 to-orange-100/80 border border-orange-300 text-xs mb-4 space-y-1.5">
          <div>
            <strong class="text-[#2A1202] block mb-0.5">🕉️ Prescribed Pariharam:</strong>
            <p class="text-[#5A2805] text-[11px] sm:text-xs leading-relaxed">${r.pariharam}</p>
          </div>
          <div class="pt-1 border-t border-orange-200/60">
            <strong class="text-[#2A1202] block mb-0.5">💎 Recommended Gemstone:</strong>
            <p class="text-orange-950 font-bold text-[11px] sm:text-xs">${r.gemstone}</p>
          </div>
        </div>
      </div>

      <!-- Book Consultation CTA Button (Direct to Razorpay) -->
      <a 
        href="${RAZORPAY_URL}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-highlighted-cta w-full text-center text-xs sm:text-sm py-2.5 shadow-md group">
        <span>Book Consultation for ${r.name.split(' ')[0]}</span>
        <svg class="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </div>
  `).join("");
}

// Setup Category Filter Tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".rasi-filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter") || "all";
      renderRasiGrid(filter);
    });
  });
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
