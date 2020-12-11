<?php
/*
 * Template Name: Memorial Board
 * Template Post Type: page
 */
?>

<?php get_header(); ?>

<?php include ("component/nav.php"); ?>

<section class="section mem-board">

    <div class="grid">

    <div class="col-left">
    <div class="text">
    <h1>Memorial Board<br /><span>Full List of Names</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae? Voluptatibus maiores porro explicabo at, voluptate, aliquid iure, voluptatem perspiciatis maxime numquam nemo temporibus. Est dolorum eveniet magnam aspernatur quisquam.</p>
    </div>

    <div class="letter-grid">

    <div class="alpha alpha-A">a</div>
    <div class="alpha alpha-B">b</div>
    <div class="alpha alpha-C">c</div>
    <div class="alpha alpha-D">d</div>
    <div class="alpha alpha-E">e</div>
    <div class="alpha alpha-F">f</div>
    <div class="alpha alpha-G">g</div>
    <div class="alpha alpha-H">h</div>
    <div class="alpha alpha-I">i</div>
    <div class="alpha alpha-J">j</div>
    <div class="alpha alpha-K">k</div>
    <div class="alpha alpha-L">l</div>
    <div class="alpha alpha-M">M</div>
    <div class="alpha alpha-N">N</div>
    <div class="alpha alpha-O">O</div>
    <div class="alpha alpha-P">P</div>
    <div class="alpha alpha-Q">Q</div>
    <div class="alpha alpha-R">R</div>
    <div class="alpha alpha-S">S</div>
    <div class="alpha alpha-T">T</div>
    <div class="alpha alpha-U">U</div>
    <div class="alpha alpha-V">V</div>
    <div class="alpha alpha-W">W</div>
    <div class="alpha alpha-X">X</div>
    <div class="alpha alpha-Y">Y</div>
    <div class="alpha alpha-Z">Z</div>
        
    </div>

    </div>

    <div class="col-right">

    <div class="text" style="color:white;">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusantium aliquam, neque dolor aliquid impedit ipsa pariatur, mollitia debitis eius, eum laboriosam numquam repudiandae molestiae architecto blanditiis! Ipsum, reiciendis commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolore porro. Dolorem quasi vero perspiciatis amet facilis, non quo quas officiis alias at suscipit temporibus quam dicta numquam voluptatem tempora!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusantium aliquam, neque dolor aliquid impedit ipsa pariatur, mollitia debitis eius, eum laboriosam numquam repudiandae molestiae architecto blanditiis! Ipsum, reiciendis commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolore porro. Dolorem quasi vero perspiciatis amet facilis, non quo quas officiis alias at suscipit temporibus quam dicta numquam voluptatem tempora!
        <a href="#names-modal" rel="modal:open">Click here to test Modal</a>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusantium aliquam, neque dolor aliquid impedit ipsa pariatur, mollitia debitis eius, eum laboriosam numquam repudiandae molestiae architecto blanditiis! Ipsum, reiciendis commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolore porro. Dolorem quasi vero perspiciatis amet facilis, non quo quas officiis alias at suscipit temporibus quam dicta numquam voluptatem tempora!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusantium aliquam, neque dolor aliquid impedit ipsa pariatur, mollitia debitis eius, eum laboriosam numquam repudiandae molestiae architecto blanditiis! Ipsum, reiciendis commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolore porro. Dolorem quasi vero perspiciatis amet facilis, non quo quas officiis alias at suscipit temporibus quam dicta numquam voluptatem tempora!
        </div>

    </div>

    <div id="names-modal" class="modal">
        <div class="grid">
        <div class="info">
            <h1 class="name">Fred Chadwick</h1>
            <div class="rank"><strong>Rank</strong><p class="rank-name">Lorem Ispum</p></div>
            <div class="dod"><strong>Date of Death</strong><p class="dod-date">Lorem Ispum</p></div>
            <div class="buried"><strong>Buried/memorialised:</strong><p class="buried-name">Lorem Ispum</p></div>
            <div class="nok"><strong>Next of kin:</strong><p class="nok-name">Lorem Ispum</p></div>
        </div>
        <div class="img">
            <img src="<?php echo get_bloginfo( 'template_directory' ); ?>/assets/img/names-modal-test-img.png"  alt="">
        </div>
        </div>
    <a href="#" rel="modal:close">&times;</a>
    </div>

    </div>

</section>

<?php get_footer(); ?>