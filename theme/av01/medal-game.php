<?php
/*
 * Template Name: Medal Game
 * Template Post Type: page
 */
?>

<?php get_header(); ?>

<?php include ("component/nav.php"); ?>

<section class="section step1">

    <h1><span>Step 1</span> Choose your shape</h1>

    <div class="shape-grid">
        <div class="shape shape01 shape01-holder"></div>
        <div class="shape shape02 shape02-holder"></div>
        <div class="shape shape03 shape03-holder"></div>
        <div class="shape shape04 shape04-holder"></div>
        <div class="shape shape05 shape05-holder"></div>
    </div>

</section>

<aside class="cont cont1">
    <a class="btn-cont step1-cont">Continue</a>
</aside>


<section id="step2" class="section" style="display: none;">

    <h1><span>Step 2</span> Select your ribbon colour</h1>

    <div class="content">

    <div class="ribbon-grid">
        <div class="ribbon ribbon01"><div class="ribbon01-holder"></div></div>
        <div class="ribbon ribbon02"><div class="ribbon02-holder"></div></div>
        <div class="ribbon ribbon03"><div class="ribbon03-holder"></div></div>
        <div class="ribbon ribbon04"><div class="ribbon04-holder"></div></div>
        <div class="ribbon ribbon05"><div class="ribbon05-holder"></div></div>
        <div class="ribbon ribbon06"><div class="ribbon06-holder"></div></div>
        <div class="ribbon ribbon07"><div class="ribbon07-holder"></div></div>
        <div class="ribbon ribbon08"><div class="ribbon08-holder"></div></div>
    </div>

    <div class="medal-display">
        <div class="inner">
        <div class="medal-ribbon"></div>
        <div class="medal-shape"></div>
        <div class="medal-insig"></div>
        </div>
    </div>

    </div>

</section>

<aside class="cont cont2" style="display: none;">
    <a class="btn-cont step2-cont">Continue</a>
</aside>


<section id="step3" class="section" style="display: none;">

    <h1><span>Step 3</span> Select your insignia</h1>

    <div class="content">

    <div class="insig-grid">
        <div class="insig insig01 insig01-holder"></div>
        <div class="insig insig02 insig02-holder"></div>
        <div class="insig insig03 insig03-holder"></div>
        <div class="insig insig04 insig04-holder"></div>
        <div class="insig insig05 insig05-holder"></div>
        <div class="insig insig06 insig06-holder"></div>
        <div class="insig insig07 insig07-holder"></div>
        <div class="insig insig08 insig08-holder"></div>
    </div>

    <div class="medal-display">

        <div class="inner">
        <div class="medal-ribbon"></div>
        <div class="medal-shape">
            <div class="medal-insig"></div>
        </div>
        </div>

    </div>

    </div>


</section>

<aside class="cont cont3" style="display: none;">
    <a class="btn-cont step3-cont">Continue</a>
</aside>


<section id="about" class="section" style="display: none;">

    <div class="content">

    <h1>About <br />your medal</h1>

    <div class="shape-line-wrapper"><div class="shape-line"></div></div>
    <div class="shape-text">
    <h3>Shape</h3>
    <p class="shape01-text" style="display: none;"><?php the_field('shape01_text'); ?></p>
    <p class="shape02-text" style="display: none;"><?php the_field('shape02_text'); ?></p>
    <p class="shape03-text" style="display: none;"><?php the_field('shape03_text'); ?></p>
    <p class="shape04-text" style="display: none;"><?php the_field('shape04_text'); ?></p>
    <p class="shape05-text" style="display: none;"><?php the_field('shape05_text'); ?></p>

    </div>

    <div class="medal-display">

        <div class="inner">
        <div class="medal-ribbon"></div>
        <div class="medal-shape"><div class="medal-insig"></div></div>
        </div>

    </div>

    <div class="ribbon-line-wrapper"><div class="ribbon-line"></div></div>
    <div class="ribbon-text">
    <h3>Ribbon</h3>
    <p class="ribbon01-text" style="display: none;"><?php the_field('ribbon01_text'); ?></p>
    <p class="ribbon02-text" style="display: none;"><?php the_field('ribbon02_text'); ?></p>
    <p class="ribbon03-text" style="display: none;"><?php the_field('ribbon03_text'); ?></p>
    <p class="ribbon04-text" style="display: none;"><?php the_field('ribbon04_text'); ?></p>
    <p class="ribbon05-text" style="display: none;"><?php the_field('ribbon05_text'); ?></p>
    <p class="ribbon06-text" style="display: none;"><?php the_field('ribbon06_text'); ?></p>
    <p class="ribbon07-text" style="display: none;"><?php the_field('ribbon07_text'); ?></p>
    <p class="ribbon08-text" style="display: none;"><?php the_field('ribbon08_text'); ?></p>
    </div>



    <div class="insig-line-wrapper"><div class="insig-line"></div></div>
    <div class="insig-text">
    <h3>Insignature</h3>
    <p class="insig01-text" style="display: none;"><?php the_field('insig01_text'); ?></p>
    <p class="insig02-text" style="display: none;"><?php the_field('insig02_text'); ?></p>
    <p class="insig03-text" style="display: none;"><?php the_field('insig03_text'); ?></p>
    <p class="insig04-text" style="display: none;"><?php the_field('insig04_text'); ?></p>
    <p class="insig05-text" style="display: none;"><?php the_field('insig05_text'); ?></p>
    <p class="insig06-text" style="display: none;"><?php the_field('insig06_text'); ?></p>
    </div>


    </div>


</section>

<aside class="cont cont4" style="display: none;">
    <a onClick="history.go(0);" class="btn-cont step4-cont">Play again</a>
</aside>


<?php get_footer(); ?>
