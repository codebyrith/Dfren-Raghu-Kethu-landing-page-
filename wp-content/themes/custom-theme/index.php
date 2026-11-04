<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 *
 * @package Custom_Antigravity_Theme
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

// When used on front page or home, load the landing layout directly
if (is_front_page() || is_home()) {
    get_template_part('front-page');
    return;
}

get_header();
?>

<div class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
  <div class="landing-card p-6 sm:p-10 border-2 border-orange-300 bg-white/95 rounded-3xl shadow-xl">
    
    <?php if (have_posts()) : ?>
      <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('prose prose-orange max-w-none'); ?>>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-[#2A1202] mb-4 font-heading">
            <?php the_title(); ?>
          </h1>
          <div class="text-[#4A2004] leading-relaxed">
            <?php the_content(); ?>
          </div>
        </article>
      <?php endwhile; ?>
      
      <div class="mt-8 flex justify-between">
        <?php
        the_posts_navigation(array(
            'prev_text' => '&larr; ' . esc_html__('Older posts', 'custom-antigravity-theme'),
            'next_text' => esc_html__('Newer posts', 'custom-antigravity-theme') . ' &rarr;',
        ));
        ?>
      </div>
    <?php else : ?>
      <p class="text-[#4A2004]"><?php esc_html_e('No content found.', 'custom-antigravity-theme'); ?></p>
    <?php endif; ?>

  </div>
</div>

<?php
get_footer();
