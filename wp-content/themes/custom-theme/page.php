<?php
/**
 * The template for displaying all single pages
 *
 * @package Custom_Antigravity_Theme
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<div class="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
  <div class="landing-card p-6 sm:p-10 border-2 border-orange-300 bg-white/95 rounded-3xl shadow-xl">
    
    <?php while (have_posts()) : the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="mb-6 pb-4 border-b border-orange-200">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-[#2A1202] font-heading">
            <?php the_title(); ?>
          </h1>
        </header>

        <div class="entry-content text-[#4A2004] leading-relaxed space-y-4">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; ?>

  </div>
</div>

<?php
get_footer();

