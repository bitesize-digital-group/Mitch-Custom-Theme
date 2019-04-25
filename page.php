<?php get_header() ?>
<div>
<?php if (have_posts()) : while(have_posts()) : the_post(); ?>
			<h3><?php the_title(); ?></h3>
            <?php the_excerpt(); ?>
            <a href="<?php the_permalink() ?>" class="btn carousel-caption-btn text-white">Read More</a>
	<?php endwhile; endif; ?>	
</div>
<?php get_footer() ?>