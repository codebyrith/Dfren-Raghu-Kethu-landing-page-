<?php
/**
 * Template Name: Thank You / Confirmation Page
 *
 * Dedicated page template for payment/booking confirmation.
 *
 * @package Custom_Antigravity_Theme
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

  <div class="flex-grow flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
    
    <!-- Header Brand Pill -->
    <div class="mb-6 text-center">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-white/95 border border-orange-300 shadow-md hover:bg-white transition-all group">
        <span class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
        <span class="font-heading font-extrabold text-xs sm:text-sm text-[#2A1202] tracking-wide">
          <?php esc_html_e('Dr. Kalpana Srikaanth • Rahu Ketu Peyarchi 2026', 'custom-antigravity-theme'); ?>
        </span>
      </a>
    </div>

    <!-- Clean Confirmation Card -->
    <div class="max-w-2xl w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-orange-300 p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
      
      <!-- Top Decorative Accent Bar -->
      <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-amber-400 to-green-500"></div>

      <!-- Success Checkmark Icon -->
      <div class="mx-auto mb-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 p-1 shadow-lg flex items-center justify-center animate-bounce">
        <div class="w-full h-full bg-white rounded-full flex items-center justify-center">
          <svg class="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-3xl sm:text-4xl font-extrabold text-[#2A1202] mb-3 tracking-tight font-heading">
        <?php esc_html_e('Booking Confirmed!', 'custom-antigravity-theme'); ?>
      </h1>

      <!-- Subtitle: Warm note confirming details and payment -->
      <p class="text-sm sm:text-base lg:text-lg text-[#4A2004] font-medium max-w-xl mx-auto leading-relaxed mb-6">
        <?php esc_html_e('Thank you for booking your personalized consultation with Dr. Kalpana Srikaanth. Your consultation details and payment have been received successfully.', 'custom-antigravity-theme'); ?>
      </p>

      <!-- Booking Summary Details Card -->
      <div class="bg-gradient-to-r from-orange-50/90 via-amber-50 to-orange-50/90 rounded-2xl border border-orange-200 p-4 sm:p-5 mb-8 text-left max-w-lg mx-auto shadow-inner">
        <div class="flex items-center justify-between pb-3 border-b border-orange-200/80 mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-orange-800"><?php esc_html_e('Consultation Package', 'custom-antigravity-theme'); ?></span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-green-100 text-green-800 border border-green-300">
            ✓ <?php esc_html_e('Confirmed & Active', 'custom-antigravity-theme'); ?>
          </span>
        </div>
        
        <div class="space-y-2 text-xs sm:text-sm">
          <div class="flex items-start justify-between gap-2">
            <span class="text-stone-600"><?php esc_html_e('Guidance:', 'custom-antigravity-theme'); ?></span>
            <span class="font-bold text-[#2A1202] text-right"><?php esc_html_e('Rahu Ketu Peyarchi Vedic Transit Analysis', 'custom-antigravity-theme'); ?></span>
          </div>
          <div class="flex items-start justify-between gap-2">
            <span class="text-stone-600"><?php esc_html_e('Bonus:', 'custom-antigravity-theme'); ?></span>
            <span class="font-bold text-amber-900 text-right"><?php esc_html_e('🎁 Lifetime Gemstone Guidance Included', 'custom-antigravity-theme'); ?></span>
          </div>
          <div id="client-name-row" class="hidden flex items-start justify-between gap-2">
            <span class="text-stone-600"><?php esc_html_e('Name:', 'custom-antigravity-theme'); ?></span>
            <span id="client-name-val" class="font-bold text-[#2A1202] text-right"></span>
          </div>
          <div id="client-phone-row" class="hidden flex items-start justify-between gap-2">
            <span class="text-stone-600"><?php esc_html_e('Phone:', 'custom-antigravity-theme'); ?></span>
            <span id="client-phone-val" class="font-bold text-[#2A1202] text-right"></span>
          </div>
          <div class="flex items-start justify-between gap-2">
            <span class="text-stone-600"><?php esc_html_e('Mode:', 'custom-antigravity-theme'); ?></span>
            <span class="font-semibold text-orange-950 text-right"><?php esc_html_e('Phone Call / WhatsApp Video / In-Person', 'custom-antigravity-theme'); ?></span>
          </div>
        </div>
      </div>

      <!-- Coordinator Next Steps Note -->
      <p class="text-xs sm:text-sm text-stone-600 mb-6 max-w-md mx-auto leading-relaxed">
        <?php esc_html_e('Our consultation coordinator will contact you shortly to schedule your preferred time slot. You can also connect with us right now on WhatsApp to expedite your appointment:', 'custom-antigravity-theme'); ?>
      </p>

      <!-- Prominent WhatsApp CTA Button -->
      <div class="mb-6">
        <a 
          href="https://wa.me/918667515295?text=Hi%20Dr.%20Kalpana%20Srikaanth,%20I%20have%20completed%20my%20booking%20consultation." 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-whatsapp-cta w-full sm:w-auto text-base sm:text-lg inline-flex items-center justify-center gap-3 px-8 py-4 shadow-xl"
          id="thank-you-wa-btn">
          <svg class="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span><?php esc_html_e('Chat on WhatsApp / Connect with Us', 'custom-antigravity-theme'); ?></span>
        </a>
      </div>

      <!-- Secondary Return to Home Button -->
      <div class="pt-2">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-950 hover:text-orange-700 underline decoration-orange-400 decoration-2 transition-colors">
          <span>&larr; <?php esc_html_e('Return to Homepage', 'custom-antigravity-theme'); ?></span>
        </a>
      </div>

    </div>

    <!-- Office Address and Support Footer Info -->
    <div class="mt-8 text-center text-xs text-orange-950/90 font-medium max-w-lg mx-auto space-y-1">
      <p class="font-bold text-[#2A1202]"><?php esc_html_e('Dr. Kalpana Srikaanth • Panchrathna Gems & Astro Research Centre', 'custom-antigravity-theme'); ?></p>
      <p><?php esc_html_e('33, 7th Street, Tatabad, Coimbatore - 641012, Tamil Nadu, India', 'custom-antigravity-theme'); ?></p>
      <p><?php esc_html_e('Direct Assistance:', 'custom-antigravity-theme'); ?> <a href="tel:+918667515295" class="underline font-bold">+91 86675 15295</a></p>
    </div>

  </div>

<?php
get_footer();

