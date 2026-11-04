<?php
/**
 * The Header for Custom Antigravity Theme
 *
 * Displays all of the <head> section and everything up until <main>
 *
 * @package Custom_Antigravity_Theme
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class('text-stone-900 antialiased selection:bg-orange-300 selection:text-orange-950'); ?>>
<?php wp_body_open(); ?>

  <div class="content-wrapper min-h-screen flex flex-col pb-36 sm:pb-44">
    <main class="flex-grow">
