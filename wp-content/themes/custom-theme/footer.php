<?php
/**
 * The Footer for Custom Antigravity Theme
 *
 * Contains the closing of the #main and #content-wrapper divs and all content after.
 *
 * @package Custom_Antigravity_Theme
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
    </main>

    <?php if (!is_page_template('page-thank-you.php') && !is_page('thank-you') && !is_page('booking-confirmed')) : ?>
    <!-- ========================================================
         STICKY FOOTER - CENTERED BOOK CONSULTATION BUTTON WITH EXPANDED BROWN CONTAINER
         ======================================================== -->
    <div class="sticky-bottom-bar flex items-center justify-center">
      <!-- Centered Highlighted CTA Button with Expanded Brown Bar Margin/Padding -->
      <button 
        type="button" 
        onclick="openBookingModal('Sticky Bottom Bar')"
        class="btn-highlighted-cta w-full max-w-sm sm:max-w-md text-base sm:text-lg py-3.5 sm:py-4 shadow-2xl flex items-center justify-center gap-2.5 font-extrabold tracking-wide mx-auto"
        id="sticky-book-btn">
        <span><?php esc_html_e('Book Consultation', 'custom-antigravity-theme'); ?></span>
        <svg class="w-5 h-5 sm:w-6 sm:h-6 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </button>
    </div>

    <!-- ========================================================
         FLOATING ACTION BUTTONS: RED CALL ICON & GREEN WHATSAPP ICON
         ======================================================== -->
    <div class="fixed bottom-36 sm:bottom-44 right-3 sm:right-6 z-50 flex flex-col items-center gap-2.5">
      
      <!-- Red Floating Phone Call Button (Above WhatsApp) -->
      <a 
        href="tel:+918667515295" 
        class="floating-call-btn"
        title="<?php esc_attr_e('Direct Phone Call with Dr. Kalpana Srikaanth\'s Office', 'custom-antigravity-theme'); ?>"
        aria-label="<?php esc_attr_e('Direct Phone Call', 'custom-antigravity-theme'); ?>">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>

      <!-- Original Green WhatsApp Floating Button (86675 15295) -->
      <a 
        href="https://wa.me/918667515295?text=Hello%20Dr.%20Kalpana%20Srikaanth%20team,%20I%20would%20like%20to%20book%20a%20consultation%20for%20Rahu%20Ketu%20Peyarchi." 
        target="_blank" 
        rel="noopener noreferrer" 
        class="floating-whatsapp"
        title="<?php esc_attr_e('Chat on WhatsApp with Dr. Kalpana Srikaanth\'s Team', 'custom-antigravity-theme'); ?>"
        aria-label="<?php esc_attr_e('WhatsApp Chat', 'custom-antigravity-theme'); ?>">
        <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

    </div>
    <?php endif; ?>

  </div><!-- /.content-wrapper -->

  <!-- ========================================================
       INTERACTIVE CONSULTATION BOOKING MODAL
       ======================================================== -->
  <div id="booking-modal" class="modal-overlay" onclick="handleModalBackdropClick(event)">
    <div class="modal-box p-5 sm:p-7 relative" onclick="event.stopPropagation()">
      
      <!-- Modal Header -->
      <div class="flex items-start justify-between pb-4 border-b border-orange-200 mb-5">
        <div class="pr-6">
          <span class="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-800 bg-orange-100 border border-orange-300 px-2.5 py-0.5 rounded-full mb-1.5">
            <?php esc_html_e('Rahu Ketu Peyarchi 2026 Special', 'custom-antigravity-theme'); ?>
          </span>
          <h3 class="font-heading font-extrabold text-xl sm:text-2xl text-[#2A1202] leading-tight">
            <?php esc_html_e('Book Your Personal Consultation', 'custom-antigravity-theme'); ?>
          </h3>
          <p class="text-xs sm:text-sm text-[#5A2805] mt-1 font-medium">
            <?php esc_html_e('Vedic Horoscope Reading + Lifetime Gemstone Guidance with Dr. Kalpana Srikaanth', 'custom-antigravity-theme'); ?>
          </p>
        </div>
        <button 
          type="button" 
          onclick="closeBookingModal()" 
          id="close-modal-btn"
          aria-label="<?php esc_attr_e('Close modal', 'custom-antigravity-theme'); ?>"
          class="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-orange-100 transition-colors flex-shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Consultation Form -->
      <form id="booking-form" onsubmit="handleBookingSubmit(event)" class="space-y-4">
        
        <div>
          <label for="form-name" class="block text-xs font-bold text-[#2A1202] mb-1">
            <?php esc_html_e('Your Full Name', 'custom-antigravity-theme'); ?> <span class="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            id="form-name" 
            name="fullName"
            required 
            placeholder="<?php esc_attr_e('e.g. Karthikeyan S', 'custom-antigravity-theme'); ?>" 
            class="w-full px-3.5 py-2.5 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm bg-orange-50/30">
        </div>

        <div>
          <label for="form-phone" class="block text-xs font-bold text-[#2A1202] mb-1">
            <?php esc_html_e('WhatsApp / Contact Number', 'custom-antigravity-theme'); ?> <span class="text-red-600">*</span>
          </label>
          <input 
            type="tel" 
            id="form-phone" 
            name="phone"
            required 
            placeholder="<?php esc_attr_e('e.g. 86675 15295', 'custom-antigravity-theme'); ?>" 
            class="w-full px-3.5 py-2.5 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm bg-orange-50/30">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label for="form-dob" class="block text-xs font-bold text-[#2A1202] mb-1">
              <?php esc_html_e('Date of Birth', 'custom-antigravity-theme'); ?> <span class="text-red-600">*</span>
            </label>
            <input 
              type="date" 
              id="form-dob" 
              name="dob"
              required 
              class="w-full px-3.5 py-2.5 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm bg-orange-50/30">
          </div>

          <div>
            <label for="form-rasi" class="block text-xs font-bold text-[#2A1202] mb-1">
              <?php esc_html_e('Janma Rasi (Moon Sign)', 'custom-antigravity-theme'); ?> <span class="text-stone-400 font-normal"><?php esc_html_e('(Optional)', 'custom-antigravity-theme'); ?></span>
            </label>
            <select 
              id="form-rasi" 
              name="rasi"
              class="w-full px-3.5 py-2.5 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm bg-orange-50/30">
              <option value=""><?php esc_html_e('Select your Rasi', 'custom-antigravity-theme'); ?></option>
              <option value="Mesham (Aries)">Mesham (மேஷம் - Aries)</option>
              <option value="Rishabam (Taurus)">Rishabam (ரிஷபம் - Taurus)</option>
              <option value="Mithunam (Gemini)">Mithunam (மிதுனம் - Gemini)</option>
              <option value="Kadagam (Cancer)">Kadagam (கடகம் - Cancer)</option>
              <option value="Simham (Leo)">Simham (சிம்மம் - Leo)</option>
              <option value="Kanni (Virgo)">Kanni (கன்னி - Virgo)</option>
              <option value="Thulaam (Libra)">Thulaam (துலாம் - Libra)</option>
              <option value="Viruchigam (Scorpio)">Viruchigam (விருச்சிகம் - Scorpio)</option>
              <option value="Dhanusu (Sagittarius)">Dhanusu (தனுசு - Sagittarius)</option>
              <option value="Makaram (Capricorn)">Makaram (மகரம் - Capricorn)</option>
              <option value="Kumbam (Aquarius)">Kumbam (கும்பம் - Aquarius)</option>
              <option value="Meenam (Pisces)">Meenam (மீனம் - Pisces)</option>
            </select>
          </div>
        </div>

        <!-- Highlight Box: Bonus Value Included -->
        <div class="p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 flex items-start gap-3">
          <span class="text-xl flex-shrink-0">💎</span>
          <div class="text-xs text-[#3D1C06] leading-relaxed">
            <span class="font-extrabold text-[#2A1202] block"><?php esc_html_e('Special Bonus Included for Life:', 'custom-antigravity-theme'); ?></span>
            <?php esc_html_e('Free Lifetime Gemstone guidance based on your birth Lagna & active Dasha.', 'custom-antigravity-theme'); ?>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button 
            type="submit" 
            id="submit-booking-btn"
            class="btn-highlighted-cta w-full justify-center text-sm sm:text-base py-3 sm:py-3.5 shadow-xl">
            <span><?php esc_html_e('Confirm & Proceed to Payment', 'custom-antigravity-theme'); ?></span>
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>

        <!-- Trust Badges -->
        <div class="flex items-center justify-center gap-3 pt-1 text-[11px] text-stone-500 font-medium">
          <span class="inline-flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>
            <?php esc_html_e('Official Razorpay Gateway', 'custom-antigravity-theme'); ?>
          </span>
          <span>•</span>
          <span><?php esc_html_e('256-bit Secure Checkout', 'custom-antigravity-theme'); ?></span>
        </div>

      </form>

    </div>
  </div>

  <?php wp_footer(); ?>
</body>
</html>
