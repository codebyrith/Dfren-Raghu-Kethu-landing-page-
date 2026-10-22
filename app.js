/**
 * Rahu Ketu Peyarchi 2026 - Interactive Landing Page Logic
 * Features: 3x4 Rasi Grid Selector (matches user screenshot), Dynamic Detailed Card, Direct Razorpay Checkout, FAQ Accordion
 */

const RAZORPAY_URL = "https://rzp.io/rzp/Y6bhLqh";

// 12 Zodiac Data for Rahu-Ketu Transit 2026
const rasiData = [
  {
    id: "mesham",
    name: "Mesham (Aries)",
    tamilName: "மேஷம்",
    symbol: "♈",
    rahuHouse: "11th House (Labha Sthanam - Aquarius)",
    ketuHouse: "5th House (Poorva Punya - Leo)",
    rating: "9.2 / 10",
    statusBadge: "மகா யோகம் (Highly Auspicious)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Tremendous financial elevation, sudden windfall gains, executive career advancements, and expansion of influential social circles. Opportunities from overseas clients bring outstanding growth.",
    career: "Breakthrough promotions, senior leadership opportunities, and recognition from governing bodies.",
    finance: "Abundant wealth inflow through multiple sources. Lucrative business expansion and settlement of old debts.",
    health: "High vitality and stamina. Practice mindful stress release to balance busy schedules.",
    family: "Children's academic and career accomplishments bring immense pride. Auspicious family ceremonies.",
    pariharam: "Worship Goddess Durga on Tuesdays during Rahu Kalam with lemon lamps. Chant 'Om Durgayei Namaha' 108 times.",
    gemstone: "Natural Hessonite (Gomed) or Red Coral setting for Mars-Rahu harmony."
  },
  {
    id: "rishabam",
    name: "Rishabam (Taurus)",
    tamilName: "ரிஷபம்",
    symbol: "♉",
    rahuHouse: "10th House (Karma Sthanam - Aquarius)",
    ketuHouse: "4th House (Sukha Sthanam - Leo)",
    rating: "8.3 / 10",
    statusBadge: "தொழில் யோகம் (Favorable Career)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Significant career expansion, foreign projects, and elevated professional status. Balance work with home harmony and dedicate time to maternal well-being.",
    career: "New job offers, elevation to managerial posts, or venture expansion into technology and international trade.",
    finance: "Steady growth in earnings. Wise investments in real estate and capital assets.",
    health: "Maintain routine physical exercise and balanced diet to nurture digestive health.",
    family: "Dedicate time to domestic comfort. Cultivate calm communication with close relatives.",
    pariharam: "Perform milk abhishekam to Lord Shiva on Pradosham days. Visit Thirunageswaram Temple for Rahu archana.",
    gemstone: "Certified White Zircon or Ketu-harmonizing Cat's Eye (Vaidooryam)."
  },
  {
    id: "mithunam",
    name: "Mithunam (Gemini)",
    tamilName: "மிதுனம்",
    symbol: "♊",
    rahuHouse: "9th House (Bhagya Sthanam - Aquarius)",
    ketuHouse: "3rd House (Dhairya Sthanam - Leo)",
    rating: "8.8 / 10",
    statusBadge: "பாக்கிய யோகம் (Divine Fortune)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Remarkable valor, long-distance pilgrimages, foreign travels, and divine mentor guidance unlocking long-delayed fortune. High creative expression.",
    career: "Overseas employment opportunities, university admissions, and breakthroughs in digital media or consulting.",
    finance: "Ancestral property settlements and rewarding returns from long-term ventures.",
    health: "Robust stamina and sharp mental focus. Stay well-hydrated during travels.",
    family: "Supportive younger siblings and heartwarming family reunions during pilgrimage visits.",
    pariharam: "Chant Vishnu Sahasranamam on Wednesdays. Feed green gram fodder to cows at a goshala.",
    gemstone: "Natural Emerald (Panna) alongside an energised 5-Mukhi Rudraksha."
  },
  {
    id: "kadagam",
    name: "Kadagam (Cancer)",
    tamilName: "கடகம்",
    symbol: "♋",
    rahuHouse: "8th House (Ayur Sthanam - Aquarius)",
    ketuHouse: "2nd House (Dhana & Vak Sthanam - Leo)",
    rating: "7.3 / 10",
    statusBadge: "பரிகார ராசி (Remedies Needed)",
    statusColor: "bg-orange-100 text-orange-800 border-orange-300",
    summary: "Deep spiritual transformation. Exercise disciplined financial prudence, avoid speculative risks, and practice soft speech in sensitive family matters.",
    career: "Steady work routine is advised. Avoid hasty job resignations without confirmed offers in hand.",
    finance: "Prioritize emergency savings, curb impulsive luxury spending, and maintain clear accounts.",
    health: "Prioritize sleep hygiene, seasonal wellness, and gentle yoga for emotional tranquility.",
    family: "Foster mutual trust in marital relationships. Avoid heated discussions over domestic finances.",
    pariharam: "Visit Keezhaperumpallam temple to perform Ketu archana. Light sesame oil lamps on Saturdays for Lord Bhairava.",
    gemstone: "Natural Pearl (Muthu) or Moonstone set in pure silver ring."
  },
  {
    id: "simham",
    name: "Simham (Leo)",
    tamilName: "சிம்மம்",
    symbol: "♌",
    rahuHouse: "7th House (Kalathra Sthanam - Aquarius)",
    ketuHouse: "1st House (Janma Sthanam - Leo)",
    rating: "7.6 / 10",
    statusBadge: "சுய விழிப்புணர்வு (Self Focus)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Ketu in Janma inspires detachment and spiritual insight, while Rahu in 7th brings dynamic partnerships, contracts, and business expansion.",
    career: "Collaborative business contracts flourish. Choose business partners with verified credentials.",
    finance: "Gains through spouse or overseas business partnerships. Keep clear legal agreements.",
    health: "Practice daily meditation to stay calm and grounded. Avoid physical over-exhaustion.",
    family: "Give ample patience and affection to life partner. Matrimonial discussions require calm understanding.",
    pariharam: "Chant Aditya Hrudayam daily at sunrise. Donate food to elderly persons on Sundays.",
    gemstone: "Natural Ruby (Manikyam) or Yellow Sapphire (Pushparagam) for protective radiance."
  },
  {
    id: "kanni",
    name: "Kanni (Virgo)",
    tamilName: "கன்னி",
    symbol: "♍",
    rahuHouse: "6th House (Shatru/Roga Sthanam - Aquarius)",
    ketuHouse: "12th House (Moksha Sthanam - Leo)",
    rating: "9.3 / 10",
    statusBadge: "வெற்றி யோகம் (Supreme Victory)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Rahu in the 6th house is highly celebrated in classical astrology for vanquishing competitors, clearing chronic debts, and achieving triumphs in all challenges.",
    career: "Stunning victories in competitive examinations, court matters, promotion battles, and corporate tenders.",
    finance: "Rapid clearance of longstanding debts and loans. Inflow of fresh capital investments.",
    health: "Remarkable recovery from lingering health ailments. Physical vitality returns fully.",
    family: "Peace of mind restored. Harmonious domestic atmosphere and charitable deeds.",
    pariharam: "Offer worship to Lord Sarabeswara or Goddess Pratyangira on Sundays during Rahu Kalam.",
    gemstone: "Finest quality Hessonite (Gomed) or Green Tourmaline in silver."
  },
  {
    id: "thulam",
    name: "Thulam (Libra)",
    tamilName: "துலாம்",
    symbol: "♎",
    rahuHouse: "5th House (Poorva Punya - Aquarius)",
    ketuHouse: "11th House (Labha Sthanam - Leo)",
    rating: "8.7 / 10",
    statusBadge: "புண்ணிய யோகம் (Creative Gains)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Ketu in the 11th brings effortless gains and realization of long-held dreams, while Rahu in 5th ignites speculative intelligence and creative fame.",
    career: "Artistic, technological, and research endeavours gain industry-wide acclaim.",
    finance: "Unexpected profits through investments, creative royalties, and professional consultancies.",
    health: "Good physical stamina. Incorporate satvik dietary habits and breathing exercises.",
    family: "Auspicious child-birth blessings for young couples. Joyous celebrations with close friends.",
    pariharam: "Chant Sri Lalitha Sahasranamam on Fridays. Offer sweets to young girl children.",
    gemstone: "Sparkling White Sapphire or Diamond set in platinum or silver."
  },
  {
    id: "viruchigam",
    name: "Viruchigam (Scorpio)",
    tamilName: "விருச்சிகம்",
    symbol: "♏",
    rahuHouse: "4th House (Sukha Sthanam - Aquarius)",
    ketuHouse: "10th House (Karma Sthanam - Leo)",
    rating: "7.9 / 10",
    statusBadge: "கவன முன்னேற்றம் (Steady Progress)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Purchasing properties, modernizing living spaces, and re-evaluating career trajectory with profound spiritual clarity.",
    career: "Transition toward advisory, teaching, research, or independent consultancy roles.",
    finance: "Investments in land, vehicle, or ancestral property upgrades yield solid future value.",
    health: "Pay attentive care to heart and blood pressure rhythm. Regular morning walks are beneficial.",
    family: "Maintain warmth in household discussions. Spend quality time with parents.",
    pariharam: "Offer red flowers to Lord Murugan on Tuesdays. Recite Kanda Sashti Kavasam.",
    gemstone: "Natural Red Coral (Pavazham) or Yellow Topaz."
  },
  {
    id: "dhanusu",
    name: "Dhanusu (Sagittarius)",
    tamilName: "தனுசு",
    symbol: "♐",
    rahuHouse: "3rd House (Dhairya Sthanam - Aquarius)",
    ketuHouse: "9th House (Bhagya Sthanam - Leo)",
    rating: "9.4 / 10",
    statusBadge: "தைரிய லக்ஷ்மி யோகம் (Golden Courage)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Rahu in the 3rd house is one of the most auspicious placements in Vedic astrology, bringing unmatched courage, public fame, and victory in all endeavours.",
    career: "Dynamic public speaking, rapid promotions, digital media breakthroughs, and triumphant negotiations.",
    finance: "Exponential rise in liquid cash flow, profitable contracts, and successful entrepreneurial leaps.",
    health: "Boundless energy and mental cheerfulness. High physical and athletic stamina.",
    family: "Siblings flourish and offer complete solidarity. Auspicious travels with family.",
    pariharam: "Visit Srikalahasti or Thirunageswaram. Perform Guru Dakshinamurthy pooja on Thursdays.",
    gemstone: "Brilliant Natural Yellow Sapphire (Pushparagam) in gold."
  },
  {
    id: "makaram",
    name: "Makaram (Capricorn)",
    tamilName: "மகரம்",
    symbol: "♑",
    rahuHouse: "2nd House (Dhana & Vak Sthanam - Aquarius)",
    ketuHouse: "8th House (Ayur Sthanam - Leo)",
    rating: "7.8 / 10",
    statusBadge: "பொருளாதார கவனம் (Prudent Savings)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Rahu in 2nd brings sudden financial inflows but calls for diplomacy in speech. Ketu in 8th deepens occult interest, meditation, and spiritual research.",
    career: "Consistent professional performance. Opportunities in banking, research, and data analysis.",
    finance: "Sudden monetary gains balanced with family expenditures. Avoid giving unsecured personal loans.",
    health: "Take care of teeth, vision, and throat health. Regular rest and sleep hygiene are necessary.",
    family: "Avoid sharp words in family gatherings. Maintain pleasant and comforting communication.",
    pariharam: "Light mustard or sesame oil lamps for Lord Hanuman on Saturdays. Chant Hanuman Chalisa.",
    gemstone: "Natural Blue Sapphire (Neelam) or Amethyst under expert guidance."
  },
  {
    id: "kumbham",
    name: "Kumbham (Aquarius)",
    tamilName: "கும்பம்",
    symbol: "♒",
    rahuHouse: "1st House (Janma Sthanam - Aquarius)",
    ketuHouse: "7th House (Kalathra Sthanam - Leo)",
    rating: "7.7 / 10",
    statusBadge: "மறுமலர்ச்சி காலம் (Reinvention)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Rahu enters your Janma Rasi initiating an ambitious cycle of personal rebranding, charisma, and international ambitions. Keep ego and temper in check.",
    career: "Bold career leaps, high visibility in public life, and venture into innovative tech or import-export.",
    finance: "High cash turnover. Ensure all transactions and business taxes are strictly documented.",
    health: "Avoid irregular meal times and mental overstimulation. Practice daily pranayama.",
    family: "Nurture marital warmth and mutual transparency. Avoid unnecessary suspicions.",
    pariharam: "Perform archana at Thirunageswaram for Lord Rahu. Feed crows sesame-rice balls on Saturdays.",
    gemstone: "Certified Hessonite (Gomed) or Blue Topaz energized in Rahu hora."
  },
  {
    id: "meenam",
    name: "Meenam (Pisces)",
    tamilName: "மீனம்",
    symbol: "♓",
    rahuHouse: "12th House (Vraya/Moksha Sthanam - Aquarius)",
    ketuHouse: "6th House (Shatru Sthanam - Leo)",
    rating: "8.5 / 10",
    statusBadge: "சுப விரயம் & மோக்ஷம் (Foreign Fortune)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Ketu in the 6th crushes all hidden adversaries and chronic illnesses, while Rahu in 12th creates auspicious foreign travel, overseas settlements, and spiritual peace.",
    career: "Lucrative postings abroad, foreign immigration approvals, and success in multi-national corporations.",
    finance: "Substantial earnings directed toward auspicious celebrations (Subha Vrayam), temple donations, and property.",
    health: "Excellent recovery from chronic health concerns. Prioritize peaceful, uninterrupted sleep.",
    family: "Joyful overseas vacations with loved ones. Harmonious domestic atmosphere.",
    pariharam: "Visit Thirunageswaram and Keezhaperumpallam. Donate blankets to the needy on Amavasya.",
    gemstone: "Natural Yellow Sapphire or Vaidooryam (Cat's Eye) for Ketu empowerment."
  }
];

let selectedRasiId = "mesham";

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderRasiButtons();
  selectRasi("mesham");
  setupDirectRazorpayLinks();
});

// Render the 3x4 Rasi Button Grid (Small & Compact Matching User Reference Screenshot)
function renderRasiButtons() {
  const container = document.getElementById("rasi-buttons-grid");
  if (!container) return;

  container.innerHTML = rasiData.map(r => `
    <button 
      type="button" 
      onclick="selectRasi('${r.id}')" 
      id="btn-rasi-${r.id}"
      class="rasi-grid-btn ${r.id === selectedRasiId ? 'active' : ''}">
      <span class="text-sm sm:text-base leading-none mb-0.5">${r.symbol}</span>
      <span class="tamil-text text-xs sm:text-sm font-bold text-[#2A1202] leading-tight block">
        ${r.tamilName}
      </span>
      <span class="text-[9px] sm:text-[10px] font-medium text-stone-600 block leading-none mt-0.5">
        ${r.name.split(' ')[0]}
      </span>
    </button>
  `).join("");
}

// Select Rasi & Open Detailed Content Card Below
function selectRasi(id) {
  selectedRasiId = id;

  // Update active state on buttons
  document.querySelectorAll(".rasi-grid-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtn = document.getElementById(`btn-rasi-${id}`);
  if (activeBtn) activeBtn.classList.add("active");

  const r = rasiData.find(item => item.id === id);
  if (!r) return;

  const resultContainer = document.getElementById("rasi-result-card");
  if (!resultContainer) return;

  resultContainer.innerHTML = `
    <!-- Card Top Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-orange-200 gap-4">
      <div class="flex items-center gap-3.5">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 p-0.5 shadow-md flex items-center justify-center flex-shrink-0">
          <div class="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-3xl font-bold">
            ${r.symbol}
          </div>
        </div>
        <div>
          <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-[#2A1202]">
            ${r.tamilName} (${r.name.split(' ')[0]}) Rasi
          </h3>
          <span class="tamil-text text-sm sm:text-base text-orange-900 font-bold block mt-0.5">
            ராகு கேது பெயர்ச்சி 2026 பலன்கள் & பரிகாரங்கள்
          </span>
        </div>
      </div>
      <div class="flex items-center gap-2.5 flex-wrap">
        <span class="px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-bold ${r.statusColor}">
          ${r.statusBadge}
        </span>
        <span class="text-xs sm:text-sm font-extrabold text-[#2A1202] bg-orange-100 px-3 py-1.5 rounded-full">
          Transit Score: ${r.rating}
        </span>
      </div>
    </div>

    <!-- Transit Houses Placement -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
      <div class="p-4 rounded-xl bg-orange-50 border border-orange-200">
        <span class="text-xs font-bold uppercase tracking-wider text-orange-700 block mb-1">🪐 Rahu (ராகு) Transit House</span>
        <p class="font-heading font-bold text-base text-[#2A1202]">${r.rahuHouse}</p>
      </div>
      <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">🌑 Ketu (கேது) Transit House</span>
        <p class="font-heading font-bold text-base text-[#2A1202]">${r.ketuHouse}</p>
      </div>
    </div>

    <!-- Transit Overview Summary -->
    <div class="mb-6 p-4.5 rounded-xl bg-orange-50/70 border border-orange-200">
      <h4 class="font-heading font-bold text-sm text-[#2A1202] mb-1.5">🌟 Transit Overview (பொதுப்பலன்):</h4>
      <p class="text-sm sm:text-base text-[#3A1400] font-medium leading-relaxed">
        ${r.summary}
      </p>
    </div>

    <!-- 4 Detailed Predictions Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
      <div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
        <h5 class="text-xs font-bold text-orange-800 uppercase mb-1">💼 Career & Job</h5>
        <p class="text-xs text-stone-700 leading-relaxed">${r.career}</p>
      </div>
      <div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
        <h5 class="text-xs font-bold text-orange-800 uppercase mb-1">💰 Finance & Wealth</h5>
        <p class="text-xs text-stone-700 leading-relaxed">${r.finance}</p>
      </div>
      <div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
        <h5 class="text-xs font-bold text-orange-800 uppercase mb-1">🌿 Health & Peace</h5>
        <p class="text-xs text-stone-700 leading-relaxed">${r.health}</p>
      </div>
      <div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
        <h5 class="text-xs font-bold text-orange-800 uppercase mb-1">🏡 Family & Marriage</h5>
        <p class="text-xs text-stone-700 leading-relaxed">${r.family}</p>
      </div>
    </div>

    <!-- Pariharam & Gemstone Box -->
    <div class="p-5 rounded-2xl bg-gradient-to-r from-orange-100/90 via-amber-100/70 to-orange-100/90 border-2 border-orange-300 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 class="font-heading font-bold text-sm text-[#2A1202] mb-1">
            🕉️ Prescribed Pariharam (பரிகாரம்):
          </h4>
          <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
            ${r.pariharam}
          </p>
        </div>
        <div>
          <h4 class="font-heading font-bold text-sm text-[#2A1202] mb-1">
            💎 Auspicious Gemstone (அதிர்ஷ்ட ரத்தினம்):
          </h4>
          <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
            ${r.gemstone}
          </p>
        </div>
      </div>
    </div>

    <!-- Direct Razorpay CTA Button -->
    <div class="text-center pt-2">
      <a 
        href="${RAZORPAY_URL}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-highlighted-cta text-base sm:text-lg px-8 py-3.5 shadow-xl inline-flex items-center">
        <span>Book Personal Consultation for ${r.tamilName} (${r.name.split(' ')[0]})</span>
        <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </div>
  `;
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
