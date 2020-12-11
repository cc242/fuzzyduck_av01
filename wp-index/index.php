<?php
/*
 * Template Name: Home Page Main Menu
 * Template Post Type: page
 */
?>

<?php get_header(); ?>

<main class="menu-grid">

    <section class="menu-item">
        <a href="http://ducknest.co.uk/doncaster/av01/app/#/featuredstories">
            <div class="menu-inner-cta animate__animated animate__fadeIn ">
            <div class="shader">
            <div class="img"></div>
            </div>
                <div class="buttonwrap"><button>Explore Medals</button></div>
            </div>
        </a>
    </section>

    <section class="menu-item">
        <a href="http://ducknest.co.uk/doncaster/av01/app/#/names">
            <div class="menu-inner-cta animate__animated animate__fadeIn animate__delay-1s">
            <div class="shader">
            <div class="img"></div>
            </div>
                <div class="buttonwrap"><button>Explore Names</button></div>
            </div>
        </a>
    </section>

    <section class="menu-item">
        <a href="<?php home_url();?>/doncaster/av01/medal-game">
            <div class="menu-inner-cta animate__animated animate__fadeIn animate__delay-2s">
            <div class="shader">
            <div class="img"></div>
            </div>
                <div class="buttonwrap"><button>Create your own medal</button></div>
            </div>
        </a>
    </section>

</main>

<form class="searchbox">
    <div class="s-box">
    <div class="search-icon"><div class="img"></div></div><input type="text" placeholder="Search Object Number"></input>
    </div>
</form>

<?php get_footer(); ?>
