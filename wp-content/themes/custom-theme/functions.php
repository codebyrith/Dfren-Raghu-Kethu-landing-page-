<?php
/**
 * Custom Antigravity Theme Functions and Definitions
 *
 * @package Custom_Antigravity_Theme
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * 1. Theme Setup
 */
function custom_antigravity_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Switch default core markup for search form, comment form, and comments to output valid HTML5.
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Enable responsive embedded content (e.g. YouTube videos).
    add_theme_support('responsive-embeds');

    // Register primary navigation menu (optional extension).
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'custom-antigravity-theme'),
    ));
}
add_action('after_setup_theme', 'custom_antigravity_theme_setup');

/**
 * 2. Enqueue Styles and Scripts
 */
function custom_antigravity_theme_scripts() {
    $theme_version = wp_get_theme()->get('Version');

    // Google Fonts (Montserrat, Outfit, Mukta Malar)
    wp_enqueue_style(
        'custom-antigravity-fonts',
        'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=Outfit:wght@300;400;500;600;700;800&family=Mukta+Malar:wght@400;600;700;800&display=swap',
        array(),
        null
    );

    // Tailwind CSS via CDN
    wp_enqueue_script(
        'tailwind-cdn',
        'https://cdn.tailwindcss.com',
        array(),
        null,
        false
    );

    // Tailwind Configuration Inline Script
    $tailwind_config = "
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            heading: ['\"Montserrat\"', 'sans-serif'],
            sans: ['\"Outfit\"', 'sans-serif'],
            tamil: ['\"Mukta Malar\"', 'sans-serif'],
          },
          colors: {
            brandOrange: {
              50: '#FFF7ED',
              100: '#FFEDD5',
              200: '#FED7AA',
              300: '#FDBA74',
              400: '#FB923C',
              500: '#FF6A00',
              600: '#EA580C',
              700: '#C2410C',
              800: '#9A3412',
              900: '#7C2D12',
            },
            templeAmber: '#FFA000',
            templeGold: '#FFD54F',
            deepBrown: '#2A1202',
            warmWhite: '#FFFDF9'
          }
        }
      }
    };
    ";
    wp_add_inline_script('tailwind-cdn', $tailwind_config);

    // Main Theme Stylesheet (style.css)
    wp_enqueue_style(
        'custom-antigravity-style',
        get_stylesheet_uri(),
        array(),
        $theme_version
    );

    // Main Interactive JavaScript (assets/js/main.js)
    wp_enqueue_script(
        'custom-antigravity-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        $theme_version,
        true
    );

    // Pass Dynamic Data to Frontend JavaScript
    $thank_you_page = get_page_by_path('thank-you');
    $thank_you_url = $thank_you_page ? get_permalink($thank_you_page) : home_url('/thank-you/');

    wp_localize_script('custom-antigravity-main', 'antigravityData', array(
        'ajaxUrl'     => admin_url('admin-ajax.php'),
        'themeUri'    => get_template_directory_uri(),
        'homeUrl'     => home_url('/'),
        'thankYouUrl' => esc_url($thank_you_url),
        'razorpayUrl' => 'https://rzp.io/rzp/Y6bhLqh',
        'phonePrimary'=> '9842266555',
    ));
}
add_action('wp_enqueue_scripts', 'custom_antigravity_theme_scripts');

/**
 * 3. Helper function to resolve theme asset paths
 */
function custom_antigravity_asset($relative_path) {
    return esc_url(get_template_directory_uri() . '/assets/' . ltrim($relative_path, '/'));
}

