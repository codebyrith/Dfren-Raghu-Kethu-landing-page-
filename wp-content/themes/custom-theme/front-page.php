<?php
/**
 * The Front Page template for Custom Antigravity Theme
 *
 * @package Custom_Antigravity_Theme
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
$theme_uri = get_template_directory_uri();
?>

      <!-- ========================================================
           1. RAHU KETU PEYARCHI CONSULTATION BANNER (Appears First)
           - Labeled badge "Raghu Kethu Peyarchi Consultation + Bonus Life Time Gemstone Prediction"
           ======================================================== -->
      <section class="pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div class="landing-card p-6 sm:p-9 border-2 border-orange-300 text-center bg-gradient-to-r from-orange-100/90 via-amber-50 to-orange-100/90 shadow-xl rounded-3xl">
          <div class="inline-flex items-center justify-center text-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/95 border border-orange-300 text-[#4A2004] text-xs sm:text-sm font-medium shadow-sm mb-3.5">
            <span><?php esc_html_e('Raghu Kethu Peyarchi Consultation +', 'custom-antigravity-theme'); ?> <strong class="font-black text-[#2A1202]"><?php esc_html_e('Bonus', 'custom-antigravity-theme'); ?></strong> <?php esc_html_e('Life Time Gemstone Prediction', 'custom-antigravity-theme'); ?></span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2A1202] leading-snug sm:leading-tight mb-2.5 tracking-tight">
            <span><?php esc_html_e('Raghu ketu peyarchi is a changing sign for a horoscope.', 'custom-antigravity-theme'); ?></span>
            <span class="block tamil-text text-[17px] sm:text-2xl lg:text-3xl font-extrabold text-[#7C2D12] mt-2.5 leading-snug">
              <span class="block sm:inline">உங்க ஜாதகத்துக்கு இந்த ராகு</span>
              <span class="block sm:inline">கேது பயிற்சி எப்படி</span>
              <span class="block sm:inline whitespace-nowrap">இருக்குன்னு தெரிஞ்சுக்கணுமா?</span>
            </span>
          </h2>
          <p class="text-sm sm:text-base lg:text-lg text-[#4A2004] font-medium max-w-3xl mx-auto leading-relaxed">
            <?php esc_html_e('The same transit gives a different result to every birth chart. Get your personal Peyarchi reading and Gemstone guidance from Dr. Kalpana Srikaanth, with 32+ years of experience and 1 lakh+ clients guided.', 'custom-antigravity-theme'); ?>
          </p>
        </div>
      </section>


      <!-- ========================================================
           2. DR. KALPANA SRIKAANTH CREDENTIALS & TRUST STATS
           - Authentic consultation photo left, 6 stat cards right
           ======================================================== -->
      <section id="hero" class="relative pt-2 pb-5 sm:pb-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <!-- 2-Column Hero Body (Photo Left, 6 Rounded Cards Right) Visible in Initial Viewport -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          <!-- Left Column: Authentic Astrologer Consultation Photo (Primary Image) -->
          <div class="lg:col-span-6 flex flex-col">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-200/90 group flex-grow h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[410px] bg-white">
              <img 
                src="<?php echo esc_url($theme_uri); ?>/assets/images/office_consultation_1.jpg" 
                alt="<?php esc_attr_e('Dr. Kalpana Srikaanth personalized consultation at Coimbatore office', 'custom-antigravity-theme'); ?>" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700">
              
              <!-- Ambient Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#2A1202]/85 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-5">
                <div class="bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-orange-200 shadow-lg">
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="font-bold text-[#2A1202] text-sm sm:text-base"><?php esc_html_e('Dr. Kalpana Srikaanth', 'custom-antigravity-theme'); ?></h4>
                      <p class="text-xs text-orange-800 font-medium"><?php esc_html_e('32+ Years Vedic Experience • In-Person & Online Consultations', 'custom-antigravity-theme'); ?></p>
                    </div>
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 flex-shrink-0 ml-2">
                      ● <?php esc_html_e('Active Now', 'custom-antigravity-theme'); ?>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: 6 Rounded Stat / Trust Cards -->
          <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            
            <!-- Card 1 -->
            <div class="stat-feature-card flex flex-col justify-center">
              <span class="text-[11px] font-bold uppercase tracking-wider text-orange-700 block mb-0.5"><?php esc_html_e('32+ Years Experience', 'custom-antigravity-theme'); ?></span>
              <h3 class="font-heading font-extrabold text-lg sm:text-xl text-[#2A1202] mb-1"><?php esc_html_e('32+ Years Experience', 'custom-antigravity-theme'); ?></h3>
              <p class="text-xs sm:text-[13px] text-[#4A2004] leading-relaxed"><?php esc_html_e('Trusted work in Vedic astrology, transit predictions, and authentic gemology.', 'custom-antigravity-theme'); ?></p>
            </div>

            <!-- Card 2 -->
            <div class="stat-feature-card flex flex-col justify-center">
              <span class="text-[11px] font-bold uppercase tracking-wider text-orange-700 block mb-0.5"><?php esc_html_e('Global Reach', 'custom-antigravity-theme'); ?></span>
              <h3 class="font-heading font-extrabold text-lg sm:text-xl text-[#2A1202] mb-1"><?php esc_html_e('1 Lakh+ Happy Clients', 'custom-antigravity-theme'); ?></h3>
              <p class="text-xs sm:text-[13px] text-[#4A2004] leading-relaxed"><?php esc_html_e('Helping devotees and families across India and in 28+ countries worldwide.', 'custom-antigravity-theme'); ?></p>
            </div>

            <!-- Card 3 -->
            <div class="stat-feature-card flex flex-col justify-center">
              <span class="text-[11px] font-bold uppercase tracking-wider text-orange-700 block mb-0.5"><?php esc_html_e('Prestigious Honors', 'custom-antigravity-theme'); ?></span>
              <h3 class="font-heading font-extrabold text-lg sm:text-xl text-[#2A1202] mb-1"><?php esc_html_e('Award Winner', 'custom-antigravity-theme'); ?></h3>
              <p class="text-xs sm:text-[13px] text-[#4A2004] leading-relaxed"><?php esc_html_e('Honoured for life work in traditional Vedic, gemological, and spiritual sciences.', 'custom-antigravity-theme'); ?></p>
            </div>

            <!-- Card 4 -->
            <div class="stat-feature-card flex flex-col justify-center">
              <span class="text-[11px] font-bold uppercase tracking-wider text-orange-700 block mb-0.5"><?php esc_html_e('Precision Readings', 'custom-antigravity-theme'); ?></span>
              <h3 class="font-heading font-extrabold text-lg sm:text-xl text-[#2A1202] mb-1"><?php esc_html_e('Clear & Accurate Guidance', 'custom-antigravity-theme'); ?></h3>
              <p class="text-xs sm:text-[13px] text-[#4A2004] leading-relaxed"><?php esc_html_e('Predictions based on birth chart planetary coordinates and Rahu-Ketu transit math.', 'custom-antigravity-theme'); ?></p>
            </div>

            <!-- Card 5 -->
            <div class="stat-feature-card flex flex-col justify-center">
              <span class="text-[11px] font-bold uppercase tracking-wider text-orange-700 block mb-0.5"><?php esc_html_e('Comprehensive Remedies', 'custom-antigravity-theme'); ?></span>
              <h3 class="font-heading font-extrabold text-lg sm:text-xl text-[#2A1202] mb-1"><?php esc_html_e('Complete Peyarchi Advice', 'custom-antigravity-theme'); ?></h3>
              <p class="text-xs sm:text-[13px] text-[#4A2004] leading-relaxed"><?php esc_html_e('Right pariharam, temple archanas, dosha nivarana, and certified gemstone advice.', 'custom-antigravity-theme'); ?></p>
            </div>

            <!-- Card 6 -->
            <div class="stat-feature-card flex flex-col justify-center">
              <span class="text-[11px] font-bold uppercase tracking-wider text-orange-700 block mb-0.5"><?php esc_html_e('Celebrity Astrologer', 'custom-antigravity-theme'); ?></span>
              <h3 class="font-heading font-extrabold text-lg sm:text-xl text-[#2A1202] mb-1"><?php esc_html_e('Media Recognised Expert', 'custom-antigravity-theme'); ?></h3>
              <p class="text-xs sm:text-[13px] text-[#4A2004] leading-relaxed"><?php esc_html_e('Regularly featured on Sun TV, Vijay TV, Jaya TV, Sankara TV, and leading FM stations.', 'custom-antigravity-theme'); ?></p>
            </div>

          </div>
        </div>

      </section>


      <!-- ========================================================
           3. SECTION: WHY BOOK A PERSONAL CONSULTATION FOR PEYARCHI?
           - Benefits 1, 2, 4, 5 (Lifetime Bonus), 6
           ======================================================== -->
      <section id="why-book-consultation" class="pt-3 pb-8 sm:pt-6 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span class="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-orange-900 bg-white/95 border border-orange-300 px-4 py-1.5 rounded-full shadow-xs mb-3">
            <?php esc_html_e('WHY BOOK A PERSONAL CONSULTATION FOR PEYARCHI?', 'custom-antigravity-theme'); ?>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2A1202] leading-snug sm:leading-tight mb-3">
            <?php esc_html_e('Rasi Palan is General but Your Jathagam Tells More', 'custom-antigravity-theme'); ?>
          </h2>
          <p class="text-sm sm:text-base lg:text-lg text-[#4A2004] font-semibold leading-relaxed mb-2">
            <?php esc_html_e('Rasi predictions provide a general overview. But your personal horoscope may tell a perfect story and remedies.', 'custom-antigravity-theme'); ?>
          </p>
          <p class="text-xs sm:text-sm md:text-base text-[#5A2805] font-medium leading-relaxed">
            <?php esc_html_e('A dedicated consultation with Dr. Kalpana Srikaanth helps you explore the Rahu Ketu Peyarchi in the context of your individual birth chart.', 'custom-antigravity-theme'); ?>
          </p>
        </div>

        <!-- Benefits List -->
        <div class="space-y-4 max-w-3xl mx-auto">
          
          <!-- Benefit 1 -->
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl border border-orange-200/90 p-5 sm:p-6 shadow-md hover:shadow-lg transition-all">
            <div class="flex items-start gap-3.5 sm:gap-4">
              <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">01</span>
              <div>
                <h3 class="font-heading font-extrabold text-base sm:text-lg text-[#2A1202] mb-1.5">
                  <?php esc_html_e('Benefit 1 — Understand Your Personal Transit', 'custom-antigravity-theme'); ?>
                </h3>
                <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
                  <?php esc_html_e('Know how the changing positions of Rahu and Ketu may influence your horoscope. Understand the opportunities that may come your way, the challenges that may require caution, and the periods your horoscope traditionally indicates for growth or setbacks according to your horoscope.', 'custom-antigravity-theme'); ?>
                </p>
              </div>
            </div>
          </div>

          <!-- Benefit 2 -->
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl border border-orange-200/90 p-5 sm:p-6 shadow-md hover:shadow-lg transition-all">
            <div class="flex items-start gap-3.5 sm:gap-4">
              <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">02</span>
              <div>
                <h3 class="font-heading font-extrabold text-base sm:text-lg text-[#2A1202] mb-1.5">
                  <?php esc_html_e('Benefit 2 — Explore Important Life Areas', 'custom-antigravity-theme'); ?>
                </h3>
                <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
                  <?php esc_html_e('Discuss the questions that matter most to you, including career, business, marriage, family, finances, education and relocation.', 'custom-antigravity-theme'); ?>
                </p>
              </div>
            </div>
          </div>

          <!-- Benefit 3 -->
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl border border-orange-200/90 p-5 sm:p-6 shadow-md hover:shadow-lg transition-all">
            <div class="flex items-start gap-3.5 sm:gap-4">
              <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">03</span>
              <div>
                <h3 class="font-heading font-extrabold text-base sm:text-lg text-[#2A1202] mb-1.5">
                  <?php esc_html_e('Benefit 3 — Receive Personalized Pariharam Guidance', 'custom-antigravity-theme'); ?>
                </h3>
                <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
                  <?php esc_html_e('Understand traditional prayers, temple visits, archana and other relevant spiritual practices that may be considered for your horoscope.', 'custom-antigravity-theme'); ?>
                </p>
              </div>
            </div>
          </div>

          <!-- Benefit 4: Special Bonus -->
          <div class="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/90 rounded-2xl border-2 border-amber-400 p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
            <div class="flex items-start gap-3.5 sm:gap-4 relative z-10">
              <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0 shadow-sm">04</span>
              <div>
                <span class="inline-block bg-amber-500 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                  <?php esc_html_e('A Special Bonus for Your Lifetime!', 'custom-antigravity-theme'); ?>
                </span>
                <h3 class="font-heading font-extrabold text-base sm:text-lg text-[#2A1202] mb-1">
                  <?php esc_html_e('Benefit 4: A Special Bonus for Your Lifetime!', 'custom-antigravity-theme'); ?>
                </h3>
                <p class="font-heading font-bold text-sm sm:text-base text-orange-950 mb-1.5">
                  <?php esc_html_e('Get FREE Lifetime Gemstone Recommendation Guidance!', 'custom-antigravity-theme'); ?>
                </p>
                <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
                  <?php esc_html_e('Wondering which gemstone is truly suitable for your horoscope? Get lifetime gemstone recommendation guidance.', 'custom-antigravity-theme'); ?>
                </p>
              </div>
            </div>
          </div>

          <!-- Benefit 5 -->
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl border border-orange-200/90 p-5 sm:p-6 shadow-md hover:shadow-lg transition-all">
            <div class="flex items-start gap-3.5 sm:gap-4">
              <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">05</span>
              <div>
                <h3 class="font-heading font-extrabold text-base sm:text-lg text-[#2A1202] mb-1.5">
                  <?php esc_html_e('Benefit 5 — Ask Your Questions Directly', 'custom-antigravity-theme'); ?>
                </h3>
                <p class="text-xs sm:text-sm text-[#4A2004] leading-relaxed">
                  <?php esc_html_e('Discuss your concerns with an experienced astrologer and receive explanations relevant to your own horoscope for this Rahu kethu peyarchi', 'custom-antigravity-theme'); ?>
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Consultation Booking CTA Button -->
        <div class="text-center pt-8">
          <button 
            type="button" 
            onclick="openBookingModal('Benefits Section Booking')" 
            class="btn-highlighted-cta text-sm sm:text-base px-8 sm:px-11 py-3 sm:py-3.5 shadow-2xl inline-flex items-center gap-2">
            <span><?php esc_html_e('Book Your Personal Consultation', 'custom-antigravity-theme'); ?></span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      </section>


      <!-- ========================================================
           4. REAL GOOGLE CLIENT REVIEWS
           - 4.9 Rating Card & 4 authentic client reviews
           ======================================================== -->
      <section class="pt-6 pb-10 sm:pt-8 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2A1202] mb-1.5">
            <?php esc_html_e('Stories of Hope', 'custom-antigravity-theme'); ?><br class="hidden sm:inline"> <?php esc_html_e('Healing & Guidance', 'custom-antigravity-theme'); ?>
          </h2>
        </div>

        <!-- "Rated on Google" Rating Card -->
        <div class="google-badge-card max-w-sm sm:max-w-md mx-auto mb-7 sm:mb-8 bg-white rounded-2xl border border-gray-200/90 shadow-md p-4 sm:p-5 flex items-center justify-between gap-4">
          <!-- Left: 4.9 & 5 Stars -->
          <div class="flex flex-col items-center justify-center pr-4 sm:pr-5 border-r border-gray-200 flex-shrink-0">
            <span class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-none mb-1 font-heading">4.9</span>
            <div class="flex items-center text-amber-500 text-sm sm:text-base tracking-wider">
              ★★★★★
            </div>
          </div>
          <!-- Right: Rated on Google & 4 Avatars -->
          <div class="flex-grow pl-1 sm:pl-2">
            <h4 class="font-bold text-sm sm:text-base text-gray-900 leading-snug"><?php esc_html_e('Rated on Google', 'custom-antigravity-theme'); ?></h4>
            <p class="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 mb-2"><?php esc_html_e('190+ reviews from real clients', 'custom-antigravity-theme'); ?></p>
            <!-- 4 Initial Circles P, M, A, I matching the reviews below -->
            <div class="flex items-center -space-x-1 sm:-space-x-1.5">
              <span class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#DBEAFE] text-[#1E40AF] border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-xs" title="Palani Samy">P</span>
              <span class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#DCFCE7] text-[#15803D] border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-xs" title="Mohan Balaji">M</span>
              <span class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FEF3C7] text-[#B45309] border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-xs" title="Akilan Akil">A</span>
              <span class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FEE2E2] text-[#B91C1C] border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-xs" title="Indra Varma">I</span>
            </div>
          </div>
        </div>

        <!-- 4 Reviews Grid matching reference cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          <!-- Review 1: Palani Samy Boopathi -->
          <div class="google-review-card">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-full bg-slate-700 text-white font-bold flex items-center justify-center text-sm">
                    P
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-[#2A1202] leading-tight">palani samy boopathi</h4>
                    <span class="text-[11px] text-gray-500">3 reviews</span>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600 text-sm" aria-label="More options">⋮</button>
              </div>
              <div class="flex items-center gap-1 text-amber-500 text-xs mb-2">
                <span>★★★★★</span>
                <span class="text-[11px] text-gray-500 ml-1">a month ago</span>
              </div>
              <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                Many miracles have occurred in our daily lives as everyone in our family has worn the zodiac stones recommended by our horoscopes and performed appropriate pujas. Many thanks to Amma.
              </p>
              <span class="text-[11px] text-blue-600 cursor-pointer block mb-4">
                Translated by Google • See original (Tamil)
              </span>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500">
              <span class="text-orange-600 font-medium">💬 Verified Client</span>
              <span class="text-red-500">♥</span>
            </div>
          </div>

          <!-- Review 2: Mohan Balaji -->
          <div class="google-review-card">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                    M
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-[#2A1202] leading-tight">Mohan Balaji</h4>
                    <span class="text-[11px] text-gray-500">3 reviews</span>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600 text-sm" aria-label="More options">⋮</button>
              </div>
              <div class="flex items-center gap-1 text-amber-500 text-xs mb-2">
                <span>★★★★★</span>
                <span class="text-[11px] text-gray-500 ml-1">7 months ago</span>
              </div>
              <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                It was a wonderful experience. We hope that Krishna show a path to bright future through these Gem Stones. Mam was very friendly. We seek her blessings. Hare Krishna.
              </p>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500 mt-auto">
              <span class="text-orange-600 font-medium">💬 Verified Client</span>
              <span class="text-red-500">♥</span>
            </div>
          </div>

          <!-- Review 3: Akilan Akil -->
          <div class="google-review-card">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-full bg-green-700 text-white font-bold flex items-center justify-center text-sm">
                    A
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-[#2A1202] leading-tight">Akilan Akil</h4>
                    <span class="text-[11px] text-gray-500">4 reviews</span>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600 text-sm" aria-label="More options">⋮</button>
              </div>
              <div class="flex items-center gap-1 text-amber-500 text-xs mb-2">
                <span>★★★★★</span>
                <span class="text-[11px] text-gray-500 ml-1">4 months ago</span>
              </div>
              <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                We are following madam's advising for last 12 years. We are living Happy and peaceful life. All people must Use and feel gem's wonderful power. Thank you so much madam and panjarathna gems.
              </p>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500 mt-auto">
              <span class="text-orange-600 font-medium">💬 Verified Client</span>
              <span class="text-red-500">♥</span>
            </div>
          </div>

          <!-- Review 4: Indra Varma -->
          <div class="google-review-card">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center text-sm">
                    I
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-[#2A1202] leading-tight">Indra varma</h4>
                    <span class="text-[11px] text-gray-500">2 reviews</span>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600 text-sm" aria-label="More options">⋮</button>
              </div>
              <div class="flex items-center gap-1 text-amber-500 text-xs mb-2">
                <span>★★★★★</span>
                <span class="text-[11px] text-gray-500 ml-1">a month ago</span>
              </div>
              <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                The experience here i got is a pleasant environment with best consultant and suitable gems for me. She addressed my Rahu dosha concerns with so much patience and clarity.
              </p>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500 mt-auto">
              <span class="text-orange-600 font-medium">💬 Verified Client</span>
              <span class="text-red-500">♥</span>
            </div>
          </div>

        </div>

      </section>


      <!-- ========================================================
           5. A RECOGNIZED PRESENCE IN MEDIA
           TV Channel Logos: Jaya TV, Puthiya Thalaimurai, Raj TV, Vijay TV, Sankara TV, Puthuyugam
           ======================================================== -->
      <section class="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="landing-card p-6 sm:p-10 text-center border-2 border-amber-300">
          
          <!-- Ornamental Vedic Flourish Divider -->
          <div class="flex items-center justify-center mb-3">
            <img src="<?php echo esc_url($theme_uri); ?>/assets/images/vedic_divider.png" alt="<?php esc_attr_e('Vedic flourish divider', 'custom-antigravity-theme'); ?>" class="h-7 sm:h-9 w-auto opacity-80">
          </div>

          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#2A1202] mb-3">
            <?php esc_html_e('A Recognized Presence in Media', 'custom-antigravity-theme'); ?>
          </h2>

          <div class="max-w-4xl mx-auto space-y-3 mb-8 text-xs sm:text-sm text-[#4A2004] leading-relaxed">
            <p>
              <?php esc_html_e('Dr. Kalpana Srikaanth’s wisdom has reached millions through her appearances on leading television and radio channels. She has been featured on popular FM stations including Suriyan FM, Mirchi FM, Hello FM, Radio City, Rainbow FM, and many others.', 'custom-antigravity-theme'); ?>
            </p>
            <p>
              <?php esc_html_e('Her calm presence and clear explanations have made her a trusted and well-loved expert, offering meaningful guidance to audiences across all age groups.', 'custom-antigravity-theme'); ?>
            </p>
          </div>

          <!-- TV Channel Logos Row -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 items-center justify-center max-w-5xl mx-auto">
            <div class="media-logo-wrapper">
              <img src="<?php echo esc_url($theme_uri); ?>/assets/images/jaya_tv.png" alt="Jaya TV" title="Jaya TV">
            </div>
            <div class="media-logo-wrapper">
              <img src="<?php echo esc_url($theme_uri); ?>/assets/images/puthiya_thalaimurai.png" alt="Puthiya Thalaimurai" title="Puthiya Thalaimurai">
            </div>
            <div class="media-logo-wrapper">
              <img src="<?php echo esc_url($theme_uri); ?>/assets/images/raj_tv.png" alt="Raj TV" title="Raj TV">
            </div>
            <div class="media-logo-wrapper">
              <img src="<?php echo esc_url($theme_uri); ?>/assets/images/vijay_tv.png" alt="Vijay TV" title="Vijay TV">
            </div>
            <div class="media-logo-wrapper">
              <img src="<?php echo esc_url($theme_uri); ?>/assets/images/sankara_tv.png" alt="Sri Sankara TV" title="Sri Sankara TV">
            </div>
            <div class="media-logo-wrapper">
              <img src="<?php echo esc_url($theme_uri); ?>/assets/images/puthuyugam.png" alt="Puthuyugam" title="Puthuyugam">
            </div>
          </div>

        </div>
      </section>


      <!-- ========================================================
           6. FREQUENTLY ASKED QUESTIONS (Accordion)
           ======================================================== -->
      <section class="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#2A1202] mb-2">
            <?php esc_html_e('Frequently Asked Questions', 'custom-antigravity-theme'); ?>
          </h2>
          <p class="text-xs sm:text-sm text-[#4A2004]">
            <?php esc_html_e('Everything you need to know about Rahu Ketu Peyarchi consultation and remedies.', 'custom-antigravity-theme'); ?>
          </p>
        </div>

        <div class="space-y-3.5" id="faq-accordion">
          <!-- FAQ 1 (Matching starting FAQ) -->
          <div class="faq-item">
            <button class="faq-button" onclick="toggleFaq(1)" type="button">
              <span><?php esc_html_e('Why is Rahu Ketu Peyarchi considered so powerful in Vedic Astrology?', 'custom-antigravity-theme'); ?></span>
              <span id="faq-icon-1" class="text-orange-600 text-xl font-bold transition-transform">+</span>
            </button>
            <div id="faq-content-1" class="faq-content hidden space-y-2.5">
              <p><?php esc_html_e('In Vedic Astrology, Rahu and Ketu are considered shadow planets that play an important role in shaping various aspects of an individual\'s life. Their transit (Peyarchi) is considered significant because they move from one zodiac sign to another, potentially bringing changes, challenges and new opportunities.', 'custom-antigravity-theme'); ?></p>
              <p><?php esc_html_e('Their influence may vary depending on an individual\'s birth horoscope. This transit can have an impact on areas such as career, marriage, finances, relationships and personal growth.', 'custom-antigravity-theme'); ?></p>
              <p><?php esc_html_e('A detailed horoscope analysis with Dr. Kalpana Srikaanth can help you understand how this Rahu Ketu Peyarchi may influence your life and what suitable remedies you can consider.', 'custom-antigravity-theme'); ?></p>
              <p><?php esc_html_e('Understand the planetary changes and prepare yourself with personalised astrological guidance.', 'custom-antigravity-theme'); ?></p>
            </div>
          </div>

          <!-- FAQ 2 (Matching starting FAQ) -->
          <div class="faq-item">
            <button class="faq-button" onclick="toggleFaq(2)" type="button">
              <span><?php esc_html_e('How will the consultation with Dr. Kalpana Srikaanth take place?', 'custom-antigravity-theme'); ?></span>
              <span id="faq-icon-2" class="text-orange-600 text-xl font-bold transition-transform">+</span>
            </button>
            <div id="faq-content-2" class="faq-content hidden space-y-2.5">
              <p><?php esc_html_e('Consultations are conducted directly over Phone Call, WhatsApp Video Call, or in person at our Coimbatore office according to your preference. Once you book via our official gateway, our coordinator will reach out to confirm your scheduled appointment slot.', 'custom-antigravity-theme'); ?></p>
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="faq-item">
            <button class="faq-button" onclick="toggleFaq(3)" type="button">
              <span><?php esc_html_e('Will Rahu Ketu Peyarchi affect everyone equally, or does it depend on my horoscope?', 'custom-antigravity-theme'); ?></span>
              <span id="faq-icon-3" class="text-orange-600 text-xl font-bold transition-transform">+</span>
            </button>
            <div id="faq-content-3" class="faq-content hidden space-y-2.5">
              <p><?php esc_html_e('Rahu Ketu Peyarchi does not affect everyone in the same way.', 'custom-antigravity-theme'); ?></p>
              <p><?php esc_html_e('Its influence may vary according to your individual horoscope.', 'custom-antigravity-theme'); ?></p>
              <p><?php esc_html_e('A personalised horoscope analysis with Dr. Kalpana Srikaanth can help you understand the possible effects of this planetary transit on different aspects of your life, including career, marriage, finances and family. You can also understand suitable remedies based on your horoscope.', 'custom-antigravity-theme'); ?></p>
            </div>
          </div>
        </div>
      </section>

<?php
get_footer();

