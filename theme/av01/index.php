<?php
/*
 * Template Name: Home Page Main Menu
 * Template Post Type: page
 */
?>

<?php get_header(); ?>

<main class="menu-grid">

    <section class="menu-item">
        <div class="menu-inner-cta animate__animated animate__fadeIn ">
        <div class="shader">
        <div class="img"></div>
        </div>
        <a href="http://ducknest.co.uk/doncaster/av01/app/#/featuredstories"><button>Explore Medals 2</button></a>
        </div>
    </section>

    <section class="menu-item">
        <div class="menu-inner-cta animate__animated animate__fadeIn animate__delay-1s">
        <div class="shader">
        <div class="img"></div>
        </div>
        <a href="http://ducknest.co.uk/doncaster/av01/app/#/names"><button>Explore Names</button></a>
        </div>
    </section>

    <section class="menu-item">
        <div class="menu-inner-cta animate__animated animate__fadeIn animate__delay-2s">
        <div class="shader">
        <div class="img"></div>
        </div>
        <a href="<?php home_url();?>/doncaster/av01/medal-game"><button>Create your own medal</button></a>
        </div>
    </section>

</main>

<form class="searchbox">
    <div class="s-box">
    <div class="search-icon"><div class="img"></div></div><input type="text" placeholder="Search Object Number"></input>
    </div>
</form>

<?php get_footer(); ?>
