/**
 * Rahu Ketu Peyarchi 2026 - Interactive Landing Page Logic
 * Features: 12 Rasi Transit Impact Navigator, Booking Modal, FAQ Accordion, WhatsApp & Razorpay Links
 */

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
    statusBadge: "Highly Auspicious (மகா யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Tremendous financial elevation, sudden windfall gains, executive career advancements, and expansion of influential social circles.",
    career: "Breakthrough promotions, senior leadership opportunities, and recognition from overseas clients or governing bodies.",
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
    statusBadge: "Favorable Career Leap (தொழில் முன்னேற்றம்)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Significant career expansion, foreign projects, and elevated professional status. Balance work with home harmony.",
    career: "New job offers, elevation to managerial posts, or venture expansion into technology and international trade.",
    finance: "Steady growth in earnings. Wise investments in real estate and capital assets.",
    health: "Maintain routine physical exercise and balanced diet to nurture digestive health.",
    family: "Dedicate time to maternal well-being and domestic comfort. Cultivate calm communication.",
    pariharam: "Perform milk abhishekam to Lord Shiva on Pradosham days. Visit Thirunageswaram Temple for Rahu archana.",
    gemstone: "Certified White Zircon or Diamond, paired with Ketu-harmonizing Cat's Eye pendant."
  },
  {
    id: "mithunam",
    name: "Mithunam (Gemini)",
    tamilName: "மிதுனம்",
    symbol: "♊",
    rahuHouse: "9th House (Bhagya Sthanam - Aquarius)",
    ketuHouse: "3rd House (Dhairya Sthanam - Leo)",
    rating: "8.8 / 10",
    statusBadge: "Divine Fortune & Courage (பாக்கிய யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Remarkable valor, long-distance pilgrimages, foreign travels, and divine mentor guidance unlocking long-delayed fortune.",
    career: "Overseas employment opportunities, university admissions, and breakthroughs in digital media or consulting.",
    finance: "Ancestral property settlements and rewarding returns from long-term ventures.",
    health: "Robust stamina and sharp mental focus. Stay hydrated during travels.",
    family: "Supportive younger siblings and heartwarming family reunions during pilgrimage visits.",
    pariharam: "Chant Vishnu Sahasranamam on Wednesdays. Feed green gram fodder to cows at your local goshala.",
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
    statusBadge: "Caution & Remedies Needed (பரிகார ராசி)",
    statusColor: "bg-orange-100 text-orange-800 border-orange-300",
    summary: "Deep spiritual transformation. Exercise disciplined financial prudence, avoid speculative risks, and practice soft speech.",
    career: "Steady work routine is advised. Avoid hasty job resignations without confirmed offers.",
    finance: "Prioritize emergency savings, curb impulsive luxury spending, and maintain clear accounting.",
    health: "Prioritize sleep hygiene, seasonal wellness, and gentle yoga to maintain emotional balance.",
    family: "Foster mutual trust in marital relationships. Avoid heated arguments over family finances.",
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
    statusBadge: "Spiritual Awakening & Focus (சுய விழிப்புணர்வு)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Ketu in Janma inspires detachment and spiritual insight, while Rahu in 7th brings dynamic partnerships and business contracts.",
    career: "Collaborative business contracts flourish. Choose business partners with verified credentials.",
    finance: "Gains through spouse or overseas business partnerships. Keep clear legal agreements.",
    health: "Practice meditation to stay calm and grounded. Avoid physical over-exhaustion.",
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
    statusBadge: "Supreme Victory & Debt Relief (வெற்றி யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Rahu in the 6th house is highly celebrated in classical astrology for vanquishing competitors, clearing chronic debts, and achieving legal triumphs.",
    career: "Stunning victories in competitive examinations, court cases, promotion battles, and corporate tenders.",
    finance: "Rapid clearance of longstanding debts and loans. Inflow of fresh capital investments.",
    health: "Remarkable recovery from lingering health ailments. Vitality returns fully.",
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
    statusBadge: "Creative Genius & Profits (புண்ணிய யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Ketu in the 11th brings effortless gains and realization of dreams, while Rahu in 5th ignites speculative intelligence and creative fame.",
    career: "Artistic, technological, and research endeavours gain industry-wide acclaim. Influential mentoring.",
    finance: "Unexpected profits through investments, creative royalties, and professional consultancies.",
    health: "Good physical stamina. Incorporate satvik dietary habits and breathing exercises.",
    family: "Auspicious child-birth blessings for couples. Joyous celebrations with close friends.",
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
    statusBadge: "Property & Career Balance (கவனமான முன்னேற்றம்)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Purchasing properties, modernizing living spaces, and re-evaluating career trajectory with profound spiritual focus.",
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
    statusBadge: "Golden Courage & Prosperity (தைரிய லக்ஷ்மி யோகம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Rahu in the 3rd house is one of the most auspicious placements in Vedic astrology, bringing unmatched confidence, media fame, and victory in all endeavours.",
    career: "Dynamic public speaking, rapid promotions, digital media breakthroughs, and triumphant negotiations.",
    finance: "Exponential rise in liquid cash flow, profitable contracts, and successful entrepreneurial leaps.",
    health: "Boundless energy and mental cheerfulness. High athletic stamina.",
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
    statusBadge: "Prudent Speech & Savings (பொருளாதார கவனம்)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Rahu in 2nd can bring sudden financial inflows but calls for diplomacy in speech. Ketu in 8th deepens occult interest and spiritual research.",
    career: "Consistent professional performance. Opportunities in banking, research, and data analysis.",
    finance: "Sudden monetary gains balanced with family expenditures. Avoid giving unsecured loans.",
    health: "Take care of teeth, vision, and throat health. Regular rest is necessary.",
    family: "Avoid sarcastic words in family gatherings. Maintain pleasant and comforting communication.",
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
    statusBadge: "Personal Reinvention (மறுமலர்ச்சி காலம்)",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    summary: "Rahu enters your Janma Rasi initiating an ambitious cycle of personal rebranding, charisma, and international ambitions. Keep ego in check.",
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
    statusBadge: "Foreign Settlement & Spiritual Peace (சுப விரயம் & மோக்ஷம்)",
    statusColor: "bg-green-100 text-green-800 border-green-300",
    summary: "Ketu in the 6th crushes all hidden adversaries and illnesses, while Rahu in 12th creates auspicious foreign travel, overseas settlements, and spiritual charities.",
    career: "Lucrative postings abroad, foreign immigration approvals, and success in multi-national corporations.",
    finance: "Substantial earnings directed toward auspicious celebrations (Subha Vrayam), temple donations, and property.",
    health: "Excellent recovery from chronic health concerns. Prioritize peaceful sleep.",
    family: "Joyful overseas vacations with loved ones. Harmonious domestic life.",
    pariharam: "Visit Thirunageswaram and Keezhaperumpallam. Donate blankets to the needy on Amavasya.",
    gemstone: "Natural Yellow Sapphire or Vaidooryam (Cat's Eye) for Ketu empowerment."
  }
];

let selectedRasiId = "mesham";

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderRasiPills();
  selectRasi("mesham");
});

// Render 12 Rasi Pill Buttons
function renderRasiPills() {
  const container = document.getElementById("rasi-pills-container");
  if (!container) return;

  container.innerHTML = rasiData.map(r => `
    <button 
      type="button" 
      onclick="selectRasi('${r.id}')" 
      id="pill-${r.id}"
      class="rasi-pill-btn ${r.id === selectedRasiId ? 'active' : ''}">
      <span>${r.symbol}</span>
      <span>${r.tamilName} (${r.name.split(' ')[0]})</span>
    </button>
  `).join("");
}

// Select a Rasi & Update Result Card
function selectRasi(id) {
  selectedRasiId = id;
  
  // Update active pill button state
  document.querySelectorAll(".rasi-pill-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activePill = document.getElementById(`pill-${id}`);
  if (activePill) activePill.classList.add("active");

  const rasi = rasiData.find(r => r.id === id);
  if (!rasi) return;

  const resultContainer = document.getElementById("rasi-result-card");
  if (!resultContainer) return;

  resultContainer.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-orange-200 gap-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="text-3xl sm:text-4xl">${rasi.symbol}</span>
          <div>
            <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-[#2A1202]">
              ${rasi.name}
            </h3>
            <span class="tamil-text text-base sm:text-lg text-orange-900 font-bold block">
              ${rasi.tamilName} ராசி பலன்கள் & பரிகாரங்கள்
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <span class="px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-bold ${rasi.statusColor}">
          ${rasi.statusBadge}
        </span>
        <span class="text-xs sm:text-sm font-extrabold text-[#2A1202] bg-orange-100 px-3 py-1.5 rounded-full">
          Transit Score: ${rasi.rating}
        </span>
      </div>
    </div>

    <!-- Transit Houses Summary -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div class="p-4 rounded-xl bg-orange-50 border border-orange-200">
        <span class="text-xs font-bold uppercase tracking-wider text-orange-700 block mb-1">Rahu (ராகு) Transit House</span>
        <p class="font-heading font-bold text-base text-[#2A1202]">${rasi.rahuHouse}</p>
      </div>
      <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">Ketu (கேது) Transit House</span>
        <p class="font-heading font-bold text-base text-[#2A1202]">${rasi.ketuHouse}</p>
      </div>
    </div>

    <p class="text-base text-[#3A1400] font-medium leading-relaxed mb-6">
      ${rasi.summary}
    </p>

    <!-- Detailed Predictions Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
        <h4 class="text-xs font-bold text-orange-800 uppercase mb-1">💼 Career & Profession</h4>
        <p class="text-xs text-stone-700 leading-relaxed">${rasi.career}</p>
      </div>
      <div class="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
        <h4 class="text-xs font-bold text-orange-800 uppercase mb-1">💰 Finance & Wealth</h4>
        <p class="text-xs text-stone-700 leading-relaxed">${rasi.finance}</p>
      </div>
      <div class="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
        <h4 class="text-xs font-bold text-orange-800 uppercase mb-1">🌿 Health & Peace</h4>
        <p class="text-xs text-stone-700 leading-relaxed">${rasi.health}</p>
      </div>
      <div class="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
        <h4 class="text-xs font-bold text-orange-800 uppercase mb-1">🏡 Family & Marriage</h4>
        <p class="text-xs text-stone-700 leading-relaxed">${rasi.family}</p>
      </div>
    </div>

    <!-- Pariharam & Gemstone Box -->
    <div class="p-5 rounded-xl bg-gradient-to-r from-orange-100/90 via-amber-100/70 to-orange-100/90 border-2 border-orange-300 mb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 class="font-heading font-bold text-sm text-[#2A1202] mb-1">
            🕉️ Prescribed Pariharam (பரிகாரம்):
          </h4>
          <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
            ${rasi.pariharam}
          </p>
        </div>
        <div>
          <h4 class="font-heading font-bold text-sm text-[#2A1202] mb-1">
            💎 Auspicious Gemstone (அதிர்ஷ்ட ரத்தினம்):
          </h4>
          <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
            ${rasi.gemstone}
          </p>
        </div>
      </div>
    </div>

    <!-- Highlighted Action Button for this Rasi -->
    <div class="text-center pt-2">
      <button 
        type="button" 
        onclick="openBookingModal('Personalized Chart Analysis for ${rasi.name}', '${rasi.name}')"
        class="btn-highlighted-cta text-base sm:text-lg px-8 py-3.5 shadow-xl">
        <span>Book Personal Consultation for ${rasi.name.split(' ')[0]}</span>
        <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </button>
    </div>
  `;
}

// Booking Modal Controls
function openBookingModal(packageName, prefilledRasi = "") {
  const modal = document.getElementById("booking-modal");
  const pkgLabel = document.getElementById("modal-package-name");
  const formRasi = document.getElementById("form-rasi");
  const form = document.getElementById("consultation-form");
  const successBox = document.getElementById("booking-success");

  if (pkgLabel && packageName) {
    pkgLabel.textContent = packageName;
  }
  if (formRasi && prefilledRasi) {
    for (let i = 0; i < formRasi.options.length; i++) {
      if (formRasi.options[i].text.includes(prefilledRasi.split(' ')[0])) {
        formRasi.selectedIndex = i;
        break;
      }
    }
  }

  // Reset states
  if (form) form.classList.remove("hidden");
  if (successBox) successBox.classList.add("hidden");

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close modal when clicking on backdrop
document.addEventListener("click", (e) => {
  const modal = document.getElementById("booking-modal");
  if (e.target === modal) {
    closeBookingModal();
  }
});

// Escape key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBookingModal();
  }
});

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

// Handle Form Submission
function handleBookingSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("form-name")?.value || "";
  const phone = document.getElementById("form-phone")?.value || "";
  const dob = document.getElementById("form-dob")?.value || "";
  const tob = document.getElementById("form-tob")?.value || "Not provided";
  const pob = document.getElementById("form-pob")?.value || "";
  const rasi = document.getElementById("form-rasi")?.value || "";
  const questions = document.getElementById("form-questions")?.value || "";
  const packageName = document.getElementById("modal-package-name")?.textContent || "Peyarchi Consultation";

  // Build WhatsApp pre-filled message URL
  const waText = encodeURIComponent(
    `*Rahu Ketu Peyarchi Consultation Booking*\n` +
    `• Name: ${name}\n` +
    `• Phone: ${phone}\n` +
    `• Package: ${packageName.trim()}\n` +
    `• DOB: ${dob}\n` +
    `• TOB: ${tob}\n` +
    `• POB: ${pob}\n` +
    `• Rasi: ${rasi}\n` +
    `• Query: ${questions}\n\n` +
    `Please confirm my consultation slot with Dr. Kalpana Srikaanth.`
  );

  const waBtn = document.getElementById("success-wa-btn");
  if (waBtn) {
    waBtn.href = `https://wa.me/919894566555?text=${waText}`;
  }

  // Switch form to success state
  const form = document.getElementById("consultation-form");
  const successBox = document.getElementById("booking-success");
  const successMessage = document.getElementById("success-message");

  if (form) form.classList.add("hidden");
  if (successBox) successBox.classList.remove("hidden");
  if (successMessage) {
    successMessage.textContent = `Thank you, ${name}! Your consultation details for ${packageName.trim()} have been recorded. You can complete your booking via our official Razorpay gateway or connect with our coordinator directly on WhatsApp.`;
  }
}
