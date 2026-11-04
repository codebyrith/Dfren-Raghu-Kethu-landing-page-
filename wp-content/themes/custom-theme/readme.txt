=== Custom Antigravity Theme ===
Contributors: Developer
Tags: responsive-layout, custom-colors, landing-page, translation-ready
Requires at least: 5.8
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Premium Vedic Astrology & Rahu Ketu Peyarchi 2026 landing page theme converted into a complete, standalone, production-ready WordPress classic theme for Dr. Kalpana Srikaanth.

== Description ==

Custom Antigravity Theme converts the high-converting Vedic astrology consultation landing page into a clean WordPress classic theme. It features:
- Responsive Sacred Orange & Gold design with geometric background patterns
- Interactive booking modal with client information collection & direct Razorpay gateway routing
- Dynamic FAQ accordion with expand/collapse logic
- Floating WhatsApp and Phone Call actions
- Full-width sticky bottom booking CTA bar
- Dedicated Thank You / Booking Confirmation page template (`page-thank-you.php`)

== Installation ==

1. Upload the `custom-theme` folder to your `/wp-content/themes/` directory, or zip the folder and upload via `Appearance > Themes > Add New > Upload Theme`.
2. Activate the theme through the `Appearance > Themes` screen in WordPress.
3. In `Settings > Reading`, set "Your homepage displays" to a static page and select your home page (or leave default to load `front-page.php` automatically).
4. Create a new page with slug `thank-you` and assign the "Thank You / Confirmation Page" template from the Page Attributes dropdown.

== Structure ==
- `style.css`: Theme header & complete CSS styles, animations, and custom components.
- `functions.php`: Asset enqueueing (Google Fonts, Tailwind CDN, theme styles, and JavaScript), theme supports, and localized configuration.
- `header.php`: HTML document setup, wp_head(), and page wrapper.
- `front-page.php`: Full landing page markup and sections.
- `footer.php`: Sticky booking footer, modal dialog, floating buttons, and wp_footer().
- `page-thank-you.php`: Dedicated Thank You confirmation template.
- `assets/js/main.js`: Vanilla JS for modal, form, and accordion behaviors.
- `assets/images/`: Authenticated client consultation and media images.

