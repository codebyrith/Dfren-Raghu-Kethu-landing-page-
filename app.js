/**
 * Raghu Kethu Peyarchi Landing Page Logic
 * Interactive 12 Rasi Palan, Booking Modal, Gemstone Finder & Countdown
 */

// 12 Zodiac Data for Raghu-Kethu Transit 2026-2027
const rasiData = [
  {
    id: "mesham",
    name: "Mesham (Aries)",
    tamilName: "மேஷம்",
    element: "fire",
    symbol: "♈",
    iconName: "Flame",
    rahuHouse: "11th House (Labha Sthanam)",
    ketuHouse: "5th House (Poorva Punya)",
    rating: "9.0 / 10",
    statusBadge: "Highly Auspicious",
    statusClass: "badge-temple-gold",
    summary: "Tremendous financial elevation, sudden career advancements, and expansion of influential social circles. Speculative investments require balanced discernment.",
    career: "Outstanding breakthroughs, executive promotions, and long-awaited recognition from senior leadership or overseas clients.",
    finance: "Abundant wealth inflow through multiple sources. Sudden windfall gains or ancestral property resolutions.",
    health: "Vitality is robust. Keep stress in check through regular meditation and mindful eating.",
    family: "Children's academic progress will bring joy. Singles may find auspicious matrimonial alliances after May.",
    remedy: "Worship Goddess Durga on Tuesdays. Chant 'Om Durgayei Namaha' 108 times. Sponsor sesame oil lamps at Navagraha shrine.",
    gemstone: "Natural Honey-Cinnamon Hessonite (Gomed) or Red Coral for Mars lord harmony."
  },
  {
    id: "rishabam",
    name: "Rishabam (Taurus)",
    tamilName: "ரிஷபம்",
    element: "earth",
    symbol: "♉",
    iconName: "Mountain",
    rahuHouse: "10th House (Karma Sthanam)",
    ketuHouse: "4th House (Sukha Sthanam)",
    rating: "8.2 / 10",
    statusBadge: "Favorable with Care",
    statusClass: "badge-saffron",
    summary: "Significant career expansion and potential relocation or foreign project assignments. Pay dedicated attention to home harmony and mother's health.",
    career: "Bold career leaps, new entrepreneurial ventures, and shifts into tech or international domains.",
    finance: "Expenditure on property renovation, vehicle purchase, or home upgrades. Steady business revenues.",
    health: "Pay attention to digestive rhythm and chest health. Practice pranayama daily.",
    family: "Occasional misunderstandings at home require calm diplomacy. Respect elder family members' advice.",
    remedy: "Offer milk abhishekam to Lord Shiva on Pradosham days. Visit Thirunageswaram Temple for Lord Raghu archana.",
    gemstone: "Certified White Zircon or Diamond, paired with Kethu-soothing Vaidooryam (Cat's Eye) pendant."
  },
  {
    id: "mithunam",
    name: "Mithunam (Gemini)",
    tamilName: "மிதுனம்",
    element: "air",
    symbol: "♊",
    iconName: "Wind",
    rahuHouse: "9th House (Bhagya Sthanam)",
    ketuHouse: "3rd House (Dhairya Sthanam)",
    rating: "8.7 / 10",
    statusBadge: "Auspicious Fortune",
    statusClass: "badge-temple-gold",
    summary: "Remarkable valor, long-distance spiritual journeys, higher education opportunities, and divine mentor guidance.",
    career: "Overseas opportunities, university admissions, and publishing/media breakthroughs.",
    finance: "Long-term investments yield fruitful returns. Paternal inheritance or trust funds materialize.",
    health: "High stamina and mental agility. Watch out for shoulder and throat strain during seasonal shifts.",
    family: "Supportive younger siblings. Auspicious family ceremonies and pilgrimage tours.",
    remedy: "Chant Vishnu Sahasranamam on Wednesdays. Feed green fodder to cows at your local goshala.",
    gemstone: "Natural Emerald (Panna) alongside an energised 5-Mukhi Rudraksha."
  },
  {
    id: "kadagam",
    name: "Kadagam (Cancer)",
    tamilName: "கடகம்",
    element: "water",
    symbol: "♋",
    iconName: "Droplets",
    rahuHouse: "8th House (Ayur Sthanam)",
    ketuHouse: "2nd House (Dhana/Vak Sthanam)",
    rating: "7.2 / 10",
    statusBadge: "Caution & Remedies Needed",
    statusClass: "badge-crimson",
    summary: "A transformative spiritual phase. Practice disciplined financial management, avoid speculative trading, and speak with compassionate moderation.",
    career: "Research, occult studies, IT forensics, and auditing fields thrive. Avoid hasty workplace conflicts.",
    finance: "Guarded financial approach recommended. Lock emergency funds; avoid lending money to acquaintances.",
    health: "Take care of eye health, teeth, and emotional equilibrium. Hydrate well and maintain satvic diet.",
    family: "Choose words cautiously during domestic discussions to prevent unnecessary friction.",
    remedy: "Chant Maha Mrityunjaya Mantra 108 times daily. Perform Raghu-Kethu Shanti Puja at Keezhperumpallam.",
    gemstone: "Natural Pearl (Moti) set in pure silver ring on the little finger."
  },
  {
    id: "simmam",
    name: "Simmam (Leo)",
    tamilName: "சிம்மம்",
    element: "fire",
    symbol: "♌",
    iconName: "Flame",
    rahuHouse: "7th House (Kalathra Sthanam)",
    ketuHouse: "1st House (Janma Sthanam)",
    rating: "7.6 / 10",
    statusBadge: "Transformative Growth",
    statusClass: "badge-saffron",
    summary: "Major soul growth, re-evaluating core identities, public partnerships, and business collaborations. Spousal understanding flourishes through empathy.",
    career: "New partnerships, international joint ventures, and public-facing consultancy agreements.",
    finance: "Good commercial earnings, but review contractual fine print before signing major deals.",
    health: "Manage headache and blood pressure through yoga, surya namaskar, and adequate rest.",
    family: "Deepen marital bonding through shared spiritual retreats and transparent communication.",
    remedy: "Perform Aditya Hridaya Stotram at sunrise. Offer red hibiscus flowers to Lord Surya.",
    gemstone: "Natural Ruby (Manikyam) or high-grade Hessonite Garnet after birth chart verification."
  },
  {
    id: "kanni",
    name: "Kanni (Virgo)",
    tamilName: "கன்னி",
    element: "earth",
    symbol: "♍",
    iconName: "Mountain",
    rahuHouse: "6th House (Shatru/Roga Sthanam)",
    ketuHouse: "12th House (Moksha Sthanam)",
    rating: "9.2 / 10",
    statusBadge: "Spectacular Victory",
    statusClass: "badge-temple-gold",
    summary: "Lord Raghu in the 6th house is classical Rajayoga! Overwhelming victory over rivals, debt liquidation, foreign settlement paths, and spiritual liberation.",
    career: "Decisive triumph in competitive exams, court matters, and high-stakes corporate competitions.",
    finance: "Speedy clearance of previous loans and outstanding dues. Growth in disposable savings.",
    health: "Chronic ailments find effective medical remedies. Rejuvenated physical vigor and stamina.",
    family: "Spiritual inclinations increase. Peaceful domestic environment and blessings from spiritual teachers.",
    remedy: "Chant Sri Subramanya Bhujangam on Sashti tithis. Offer bananas to elephants or monkeys.",
    gemstone: "Natural Chrysoberyl Cat's Eye (Vaidooryam) for profound 12th house Moksha protection."
  },
  {
    id: "thula",
    name: "Thula (Libra)",
    tamilName: "துலாம்",
    element: "air",
    symbol: "♎",
    iconName: "Wind",
    rahuHouse: "5th House (Poorva Punya)",
    ketuHouse: "11th House (Labha Sthanam)",
    rating: "8.5 / 10",
    statusBadge: "Creative Prosperity",
    statusClass: "badge-temple-gold",
    summary: "Surge in creative intellect, progeny happiness, long-standing wish fulfillments, and lucrative strategic networking.",
    career: "Exceptional success for creators, consultants, educators, software architects, and designers.",
    finance: "Multiple dividend streams, lucrative advisory fees, and profitable stock portfolio rebalancing.",
    health: "Maintain balanced digestion and regular sleep hours. Avoid excessive caffeine.",
    family: "Good news regarding children's aspirations. Deep, fulfilling friendships with spiritual seekers.",
    remedy: "Offer ghee lamps to Goddess Mahalakshmi on Fridays. Chant Sri Suktam with devotion.",
    gemstone: "Natural Diamond or White Sapphire, combined with honey-brown Gomedha talisman."
  },
  {
    id: "viruchigam",
    name: "Viruchigam (Scorpio)",
    tamilName: "விருச்சிகம்",
    element: "water",
    symbol: "♏",
    iconName: "Droplets",
    rahuHouse: "4th House (Sukha/Matru Sthanam)",
    ketuHouse: "10th House (Karma Sthanam)",
    rating: "7.8 / 10",
    statusBadge: "Deep Transformation",
    statusClass: "badge-saffron",
    summary: "Real estate and home environment evolution. Work philosophy shifts towards deeper purpose rather than mere material accumulation.",
    career: "Career role changes, remote work flexibility, or stepping into mentorship and advisory roles.",
    finance: "Substantial capital deployment into land, residential property, or architectural improvements.",
    health: "Pay special attention to cardiovascular fitness and maternal wellness. Routine health checkups advised.",
    family: "Domestic harmony improves when you maintain patience during family property discussions.",
    remedy: "Chant Hanuman Chalisa on Tuesdays. Offer red sindoor to Lord Anjaneya.",
    gemstone: "Natural Italian Red Coral (Moonga) or Yellow Sapphire after Astrologer chart reading."
  },
  {
    id: "dhanusu",
    name: "Dhanusu (Sagittarius)",
    tamilName: "தனுசு",
    element: "fire",
    symbol: "♐",
    iconName: "Flame",
    rahuHouse: "3rd House (Bhratru/Dhairya Sthanam)",
    ketuHouse: "9th House (Dharma Sthanam)",
    rating: "9.3 / 10",
    statusBadge: "Heroic Success & Power",
    statusClass: "badge-temple-gold",
    summary: "Lord Raghu in 3rd creates unstoppable courage, charismatic communication, viral brand recognition, and commercial dominance.",
    career: "Explosive growth for entrepreneurs, digital marketers, advocates, speakers, and defense personnel.",
    finance: "Significant profits from commercial contracts, publications, and short-distance trade.",
    health: "High physical enthusiasm, athletic endurance, and mental resilience.",
    family: "Sibling cooperation and pilgrimage journeys to ancestral kula deivam temples.",
    remedy: "Chant Dakshinamurthy Stotram on Thursdays. Offer yellow chickpeas (channa) to Guru.",
    gemstone: "Untreated Ceylon Yellow Sapphire (Pukhraj) on index finger in gold."
  },
  {
    id: "magaram",
    name: "Magaram (Capricorn)",
    tamilName: "மகரம்",
    element: "earth",
    symbol: "♑",
    iconName: "Mountain",
    rahuHouse: "2nd House (Dhana Sthanam)",
    ketuHouse: "8th House (Ayur Sthanam)",
    rating: "7.9 / 10",
    statusBadge: "Financial Accumulation",
    statusClass: "badge-saffron",
    summary: "Strong accumulation of capital assets and family wealth. Exercise caution with speech and avoid abrupt disputes over ancestral matters.",
    career: "Finance, banking, corporate treasury, and wealth management professions experience surge.",
    finance: "Substantial growth in bank balances, gold accumulations, and fixed deposits.",
    health: "Regulate dietary habits; safeguard throat, eyes, and dental health.",
    family: "Diplomatic communication keeps extended family ties warm and respectful.",
    remedy: "Light sesame oil lamp for Lord Shani on Saturdays. Feed black sesame sweets to the needy.",
    gemstone: "Natural Blue Sapphire (Neelam) or Amethyst, harmonized with Hessonite."
  },
  {
    id: "kumbam",
    name: "Kumbam (Aquarius)",
    tamilName: "கும்பம்",
    element: "air",
    symbol: "♒",
    iconName: "Wind",
    rahuHouse: "1st House (Janma Sthanam)",
    ketuHouse: "7th House (Kalathra Sthanam)",
    rating: "8.0 / 10",
    statusBadge: "Personal Metamorphosis",
    statusClass: "badge-saffron",
    summary: "A historic transit as Lord Raghu occupies your Janma Rasi! Massive reinvention of personality, global aspirations, and philosophical rebirth.",
    career: "Unconventional career paths, artificial intelligence, pioneering startups, and international fame.",
    finance: "Surge in earning ambition. Avoid impulse lifestyle expenditures and speculative traps.",
    health: "Prioritize nerve nourishment, adequate sleep, and daily grounding walks in nature.",
    family: "Give spouse ample personal space; mutual respect prevents unnecessary misunderstandings.",
    remedy: "Worship Lord Bhairava on Ashtami tithi. Chant 'Om Hram Hreem Hroum Sah Rahave Namah' 108 times.",
    gemstone: "Certified Ceylon Gomedha (Hessonite Garnet) in silver to channel Lord Raghu's cosmic power."
  },
  {
    id: "meenam",
    name: "Meenam (Pisces)",
    tamilName: "மீனம்",
    element: "water",
    symbol: "♓",
    iconName: "Droplets",
    rahuHouse: "12th House (Vraya/Moksha Sthanam)",
    ketuHouse: "6th House (Shatru Jaya)",
    rating: "8.4 / 10",
    statusBadge: "Spiritual & Foreign Grace",
    statusClass: "badge-temple-gold",
    summary: "Lord Kethu in 6th crushes competitors while Lord Raghu in 12th opens foreign doors, hospital/wellness projects, and high spiritual realisations.",
    career: "Overseas relocation, foreign trade, multinational appointments, and healthcare leadership.",
    finance: "Expenditures on auspicious ceremonies, charity, and international travel. Steady inflows.",
    health: "Sleep hygiene is essential. Incorporate relaxing sound baths or temple visits in evening.",
    family: "Inner peace prevails. Spiritual maturity brings serene acceptance and family blessings.",
    remedy: "Perform Ganapati Homam on Sankatahara Chaturthi. Chant Lord Kethu Gayatri Mantra.",
    gemstone: "Natural Chrysoberyl Cat's Eye (Vaidooryam) on middle finger in silver or gold."
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  renderRasiGrid("all");
  initRasiFilters();
  initBookingModal();
  initRasiModal();
  initGemstoneCalculator();
  initFAQAccordion();
  initMantraSimulation();
  initMobileMenu();
});

// 1. Live Countdown Muhurtham Timer (Countdown to Auspicious Transit Window)
function initCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 28);
  targetDate.setHours(targetDate.getHours() + 14);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      document.getElementById("timer-days").innerText = "00";
      document.getElementById("timer-hours").innerText = "00";
      document.getElementById("timer-mins").innerText = "00";
      document.getElementById("timer-secs").innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");

    const daysEl = document.getElementById("timer-days");
    const hoursEl = document.getElementById("timer-hours");
    const minsEl = document.getElementById("timer-mins");
    const secsEl = document.getElementById("timer-secs");

    if (daysEl) daysEl.innerText = pad(days);
    if (hoursEl) hoursEl.innerText = pad(hours);
    if (minsEl) minsEl.innerText = pad(mins);
    if (secsEl) secsEl.innerText = pad(secs);
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// 2. Render 12 Rasi Palan Cards
function renderRasiGrid(filterElement) {
  const container = document.getElementById("rasi-cards-grid");
  if (!container) return;

  const filtered = filterElement === "all" 
    ? rasiData 
    : rasiData.filter(item => item.element === filterElement);

  container.innerHTML = filtered.map(item => `
    <div class="glass-card rasi-card p-6 flex flex-col justify-between" data-id="${item.id}">
      <div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 flex items-center justify-center text-2xl font-bold shadow-sm">
              ${item.symbol}
            </span>
            <div>
              <h3 class="font-serif text-xl font-bold text-amber-950">${item.name}</h3>
              <p class="text-sm font-semibold text-amber-800">${item.tamilName} • ${capitalize(item.element)} Element</p>
            </div>
          </div>
          <span class="inline-block text-xs px-2.5 py-1 rounded-full ${item.statusClass}">
            ${item.statusBadge}
          </span>
        </div>

        <div class="space-y-2 mb-4 text-xs font-semibold text-amber-900/90 bg-amber-50/70 p-3 rounded-lg border border-amber-200/60">
          <div class="flex items-center justify-between">
            <span class="text-amber-800 font-medium">🪐 Raghu Position:</span>
            <span class="font-bold text-amber-950">${item.rahuHouse}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-amber-800 font-medium">🌑 Kethu Position:</span>
            <span class="font-bold text-amber-950">${item.ketuHouse}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-amber-800 font-medium">✨ Transit Score:</span>
            <span class="font-extrabold text-red-700">${item.rating}</span>
          </div>
        </div>

        <p class="text-sm text-stone-800 line-clamp-3 mb-4 leading-relaxed font-normal">
          ${item.summary}
        </p>
      </div>

      <div class="pt-3 border-t border-amber-200/80 flex items-center justify-between gap-2">
        <button 
          onclick="openRasiModal('${item.id}')"
          class="text-xs font-bold text-red-700 hover:text-red-900 flex items-center gap-1 group py-1.5 transition-colors">
          <span>Read Detailed Horoscope</span>
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <button 
          onclick="openBookingModal('Gemstone Recommendation', '${item.name}')"
          class="text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-950 px-3 py-1.5 rounded-md border border-amber-300 transition-all hover:scale-105">
          Book Consultation (₹999)
        </button>
      </div>
    </div>
  `).join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 3. Filter Tabs
function initRasiFilters() {
  const filterBtns = document.querySelectorAll(".rasi-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const element = btn.getAttribute("data-filter");
      renderRasiGrid(element);
    });
  });
}

// 4. Detailed Horoscope Modal
function initRasiModal() {
  const modal = document.getElementById("rasi-detail-modal");
  const closeBtn = document.getElementById("close-rasi-modal");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    });
  }
}

window.openRasiModal = function(rasiId) {
  const item = rasiData.find(r => r.id === rasiId);
  if (!item) return;

  const modal = document.getElementById("rasi-detail-modal");
  const content = document.getElementById("rasi-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="flex items-start justify-between border-b border-amber-200/80 pb-4 mb-4">
      <div class="flex items-center gap-3">
        <span class="w-14 h-14 rounded-full bg-amber-100 border-2 border-amber-400 text-amber-950 flex items-center justify-center text-3xl font-bold shadow-sm">
          ${item.symbol}
        </span>
        <div>
          <h2 class="font-serif text-2xl font-bold text-amber-950">${item.name} (${item.tamilName})</h2>
          <p class="text-sm font-semibold text-amber-800">${capitalize(item.element)} Element • Score: <span class="text-red-700 font-bold">${item.rating}</span></p>
        </div>
      </div>
      <span class="text-xs font-bold px-3 py-1 rounded-full ${item.statusClass}">
        ${item.statusBadge}
      </span>
    </div>

    <!-- House Highlights -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
      <div class="bg-amber-50/90 p-3.5 rounded-xl border border-amber-300/70">
        <div class="text-xs font-bold text-amber-900 uppercase tracking-wide">🪐 Lord Raghu Transit Axis</div>
        <div class="text-base font-bold text-amber-950 mt-1">${item.rahuHouse}</div>
        <p class="text-xs text-amber-800/90 mt-1">Catalyzes sudden worldly ambitions, unconventional breakthroughs & foreign alliances.</p>
      </div>
      <div class="bg-amber-50/90 p-3.5 rounded-xl border border-amber-300/70">
        <div class="text-xs font-bold text-amber-900 uppercase tracking-wide">🌑 Lord Kethu Transit Axis</div>
        <div class="text-base font-bold text-amber-950 mt-1">${item.ketuHouse}</div>
        <p class="text-xs text-amber-800/90 mt-1">Activates past-life karmic resolution, intuitive perception & spiritual detachment.</p>
      </div>
    </div>

    <!-- Deep-dive categories -->
    <div class="space-y-4 mb-6">
      <div class="p-4 bg-white/80 rounded-xl border border-amber-200 shadow-sm">
        <h4 class="font-serif text-base font-bold text-amber-950 flex items-center gap-2 mb-1.5">
          💼 Career, Business & Social Status
        </h4>
        <p class="text-sm text-stone-800 leading-relaxed">${item.career}</p>
      </div>

      <div class="p-4 bg-white/80 rounded-xl border border-amber-200 shadow-sm">
        <h4 class="font-serif text-base font-bold text-amber-950 flex items-center gap-2 mb-1.5">
          💰 Wealth, Investments & Cash Flow
        </h4>
        <p class="text-sm text-stone-800 leading-relaxed">${item.finance}</p>
      </div>

      <div class="p-4 bg-white/80 rounded-xl border border-amber-200 shadow-sm">
        <h4 class="font-serif text-base font-bold text-amber-950 flex items-center gap-2 mb-1.5">
          ❤️ Family Harmony, Relationships & Marital Life
        </h4>
        <p class="text-sm text-stone-800 leading-relaxed">${item.family}</p>
      </div>

      <div class="p-4 bg-white/80 rounded-xl border border-amber-200 shadow-sm">
        <h4 class="font-serif text-base font-bold text-amber-950 flex items-center gap-2 mb-1.5">
          🌿 Health, Energy & Vitality
        </h4>
        <p class="text-sm text-stone-800 leading-relaxed">${item.health}</p>
      </div>
    </div>

    <!-- Prescribed Vedic Remedies -->
    <div class="p-4 bg-gradient-to-r from-amber-100/90 via-orange-100/90 to-amber-100/90 rounded-xl border border-amber-400 mb-6">
      <h4 class="font-serif text-base font-bold text-red-900 mb-2 flex items-center gap-2">
        🕉️ Tailored Vedic Remedy (Pariharam)
      </h4>
      <p class="text-sm text-amber-950 font-medium leading-relaxed mb-2">
        ${item.remedy}
      </p>
      <div class="text-xs font-semibold text-amber-900 flex items-center gap-1.5">
        <span>💎 Recommended Gemstone:</span>
        <span class="font-bold text-red-800">${item.gemstone}</span>
      </div>
    </div>

    <!-- Modal Action Buttons -->
    <div class="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-amber-200">
      <button 
        onclick="document.getElementById('rasi-detail-modal').classList.add('hidden'); document.body.style.overflow='auto';"
        class="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-amber-300 font-bold text-amber-950 hover:bg-amber-100 transition-colors text-sm">
        Close Window
      </button>

      <button 
        onclick="document.getElementById('rasi-detail-modal').classList.add('hidden'); openBookingModal('Gemstone Recommendation', '${item.name}');"
        class="w-full sm:w-auto btn-pulsing-crimson px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
        <span>Book Consultation (₹999)</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

// 5. Interactive "Book Your Appointment" Modal & Workflow
function initBookingModal() {
  const modal = document.getElementById("booking-modal");
  const closeBtn = document.getElementById("close-booking-modal");
  const form = document.getElementById("appointment-booking-form");
  const serviceSelect = document.getElementById("consultation-type");
  const priceDisplay = document.getElementById("modal-price-badge");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });

  // Price auto-updater based on consultation selection
  if (serviceSelect && priceDisplay) {
    serviceSelect.addEventListener("change", () => {
      updatePriceFromSelect(serviceSelect.value);
    });
  }

  // Handle Form Submission with realistic step transition
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById("booking-submit-btn");
      const originalText = submitBtn.innerHTML;

      // Loading State
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Securing Astrologer Slot...</span>
      `;

      setTimeout(() => {
        // Collect form data
        const clientName = document.getElementById("client-name").value || "Valued Seeker";
        const clientMobile = document.getElementById("client-mobile").value || "+91 98400 XXXXX";
        const clientEmail = document.getElementById("client-email").value || "devotee@example.com";
        const selectedPackage = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : "Gemstone & Transit Recommendation (₹999)";
        const preferredDate = document.getElementById("client-pref-date").value || "Next Auspicious Slot";

        // Show Success Confirmation State
        const formContainer = document.getElementById("booking-form-container");
        const successContainer = document.getElementById("booking-success-container");
        
        if (formContainer && successContainer) {
          formContainer.classList.add("hidden");
          successContainer.classList.remove("hidden");

          // Generate unique booking code
          const randomCode = "RKP-" + Math.floor(1000 + Math.random() * 9000);
          document.getElementById("confirm-booking-id").innerText = randomCode;
          document.getElementById("confirm-client-name").innerText = clientName;
          document.getElementById("confirm-package-name").innerText = selectedPackage;
          document.getElementById("confirm-datetime").innerText = preferredDate;
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    });
  }
}

function updatePriceFromSelect(val) {
  const priceDisplay = document.getElementById("modal-price-badge");
  if (!priceDisplay) return;
  priceDisplay.innerText = "₹999 (Inclusive of Tax & Vedic Vidhi)";
}

// Global function to trigger booking modal from any button on page
window.openBookingModal = function(packageType = "Gemstone Recommendation", rasiNotes = "") {
  const modal = document.getElementById("booking-modal");
  const formContainer = document.getElementById("booking-form-container");
  const successContainer = document.getElementById("booking-success-container");
  const select = document.getElementById("consultation-type");
  const notesField = document.getElementById("client-queries");

  if (!modal) return;

  // Reset to form view
  if (formContainer) formContainer.classList.remove("hidden");
  if (successContainer) successContainer.classList.add("hidden");

  // Pre-select package
  if (select) {
    select.value = "gemstone";
    updatePriceFromSelect(select.value);
  }

  // Pre-fill query field if rasi was passed
  if (notesField && rasiNotes) {
    notesField.value = `Inquiry specifically regarding ${rasiNotes} during the Raghu-Kethu transit period.`;
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

// Demo quick-fill helper for instant testing
window.fillDemoBooking = function() {
  const nameField = document.getElementById("client-name");
  const mobileField = document.getElementById("client-mobile");
  const emailField = document.getElementById("client-email");
  const dobField = document.getElementById("client-dob");
  const tobField = document.getElementById("client-tob");
  const pobField = document.getElementById("client-pob");
  const prefDateField = document.getElementById("client-pref-date");
  const queriesField = document.getElementById("client-queries");

  if (nameField) nameField.value = "Ravi Chandran";
  if (mobileField) mobileField.value = "9840012345";
  if (emailField) emailField.value = "ravi.chandran@example.com";
  if (dobField) dobField.value = "1990-05-15";
  if (tobField) tobField.value = "10:30";
  if (pobField) pobField.value = "Coimbatore, Tamil Nadu";
  if (prefDateField) {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    prefDateField.value = today.toISOString().split("T")[0];
  }
  if (queriesField) queriesField.value = "Seeking astrological guidance for career promotion and family peace during Raghu Kethu transit.";
};

// 6. Interactive Gemstone Suitability Calculator Widget
function initGemstoneCalculator() {
  const form = document.getElementById("gemstone-calc-form");
  const resultBox = document.getElementById("gemstone-calc-result");

  if (!form || !resultBox) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const rasi = document.getElementById("calc-rasi").value;
    const goal = document.getElementById("calc-goal").value;

    let gemTitle = "Natural Honey-Cinnamon Hessonite Garnet (Gomed)";
    let gemPlanet = "Lord Raghu Pacification";
    let gemCarat = "6.25 - 7.50 Ratti (Ceylon Origin)";
    let gemFinger = "Middle Finger on Saturday evening during Raghu Hora";
    let gemMetal = "Panchadhatu (5-Metal Alloy) or Pure Silver";
    let gemDesc = "Channels Lord Raghu's magnetic cosmic rays, dissolves karmic barriers in business and foreign ventures, shields against hidden adversaries, and boosts mental clarity.";

    if (goal === "ketu" || goal === "spiritual") {
      gemTitle = "Natural Chrysoberyl Cat's Eye (Vaidooryam)";
      gemPlanet = "Lord Kethu Pacification";
      gemCarat = "5.50 - 6.75 Ratti (Natural Chrysoberyl)";
      gemFinger = "Little or Middle Finger on Tuesday or Thursday morning";
      gemMetal = "22K Gold or Panchadhatu";
      gemDesc = "Pacifies Lord Kethu's intense spiritual fire, wards off evil eye (drishti), enhances intuitive insight, and protects health from inexplicable ailments.";
    } else if (rasi === "kadagam" || rasi === "viruchigam") {
      gemTitle = "Dual Raghu-Kethu Kavacham: Natural Gomed + Vaidooryam Pendant";
      gemPlanet = "Balanced Lunar Node Shield";
      gemCarat = "4.25 Ratti each certified natural gems";
      gemFinger = "Worn as energised talisman pendant over Anahata (Heart) Chakra";
      gemMetal = "Sterling Silver with sacred Yantra engraving";
      gemDesc = "Specifically formulated for sensitive water signs to neutralize 8th/2nd house transit pressures while elevating financial stability.";
    }

    resultBox.innerHTML = `
      <div class="glass-card p-5 border-2 border-amber-400 bg-amber-50/90 shadow-md">
        <div class="flex items-center justify-between gap-2 border-b border-amber-300 pb-3 mb-3">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-red-800">Prescribed Vedic Gemstone</span>
            <h4 class="font-serif text-lg font-bold text-amber-950">${gemTitle}</h4>
          </div>
          <span class="text-xs font-bold px-2.5 py-1 rounded bg-amber-200 text-amber-900 border border-amber-300">
            ${gemPlanet}
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-amber-950 mb-3">
          <div class="bg-white/80 p-2 rounded border border-amber-200">
            <span class="text-amber-800">Ideal Carat Weight:</span> ${gemCarat}
          </div>
          <div class="bg-white/80 p-2 rounded border border-amber-200">
            <span class="text-amber-800">Auspicious Metal:</span> ${gemMetal}
          </div>
          <div class="bg-white/80 p-2 rounded border border-amber-200 sm:col-span-2">
            <span class="text-amber-800">Wearing Vidhi:</span> ${gemFinger}
          </div>
        </div>

        <p class="text-xs text-stone-800 leading-relaxed mb-4">
          ${gemDesc}
        </p>

        <div class="flex items-center justify-between gap-3 pt-2">
          <span class="text-xs font-bold text-amber-900">100% Lab Tested & Prana-Pratishtha Done</span>
          <button 
            type="button"
            onclick="openBookingModal('Gemstone Recommendation', 'Prescribed Gem: ' + '${gemTitle}')"
            class="btn-pulsing-crimson px-4 py-1.5 rounded-lg text-xs font-bold">
            Consult Gemologist (₹999)
          </button>
        </div>
      </div>
    `;

    resultBox.classList.remove("hidden");
  });
}

// 7. Interactive FAQ Accordion
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (questionBtn && answer) {
      questionBtn.addEventListener("click", () => {
        const isOpen = !answer.classList.contains("hidden");

        // Close other FAQs
        faqItems.forEach(other => {
          other.querySelector(".faq-answer")?.classList.add("hidden");
          const otherIcon = other.querySelector(".faq-icon");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        });

        if (!isOpen) {
          answer.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });
}

// 8. Sacred Audio Mantra Player Simulation
function initMantraSimulation() {
  const playBtn = document.getElementById("mantra-play-btn");
  const statusText = document.getElementById("mantra-status-text");
  const waveBars = document.getElementById("mantra-visualizer");

  if (!playBtn) return;

  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      playBtn.innerHTML = `
        <svg class="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      `;
      if (statusText) statusText.innerText = "Playing: Sacred Raghu-Kethu Gayathri Chants (Temple Sanctum Recording)";
      if (waveBars) waveBars.classList.remove("opacity-30");
      
      // Try Web Audio API tone synthesis for an authentic, soothing Vedic bell/drone sound
      playSacredDroneSound();
    } else {
      playBtn.innerHTML = `
        <svg class="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      `;
      if (statusText) statusText.innerText = "Click to Listen: Raghu & Kethu Stotram Temple Chants (Sample)";
      if (waveBars) waveBars.classList.add("opacity-30");
      stopSacredDroneSound();
    }
  });
}

let audioCtx = null;
let droneOsc = null;
let gainNode = null;

function playSacredDroneSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === "suspended") audioCtx.resume();

    droneOsc = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();

    // Sacred Tanpura Tanpura 'Sa' (C# 138.59 Hz)
    droneOsc.type = "sine";
    droneOsc.frequency.setValueAtTime(138.59, audioCtx.currentTime);

    // Warm soft amplitude
    gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 1.5);

    droneOsc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    droneOsc.start();
  } catch (err) {
    console.log("Web Audio gentle note:", err);
  }
}

function stopSacredDroneSound() {
  try {
    if (gainNode && audioCtx) {
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        if (droneOsc) {
          droneOsc.stop();
          droneOsc.disconnect();
          droneOsc = null;
        }
      }, 900);
    }
  } catch (err) {
    console.log("Audio release note:", err);
  }
}

// 9. Mobile Hamburger Navigation
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav-drawer");
  const closeBtn = document.getElementById("close-mobile-nav");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  });
}
