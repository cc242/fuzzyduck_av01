<?php
/*
 * Template Name: Names Menu
 * Template Post Type: page
 */
?>

<?php get_header(); ?>

<?php include ("component/nav.php"); ?>

<section class="section names-menu">

<div class="grid">

    <section class="menu-item">
        <div class="menu-inner-cta animate__animated animate__fadeIn">
        <div class="shader">
        <div class="img img-01"></div>
        </div>
        <a href="<?php echo get_bloginfo( 'template_directory' ); ?>/assets/img/memorial-board"><button>Memorial Board<br><span>Full list of names</span></button></a>
        </div>
    </section>

    <section class="menu-item">
        <div class="menu-inner-cta animate__animated animate__fadeIn animate__delay-1s">
        <div class="shader">
        <div class="img img-02"></div>
        </div>
        <a href="<?php home_url();?>/#"><button>Featured Stories</button></a>
        </div>
    </section>

</div>

</section>

<?php get_footer(); ?>