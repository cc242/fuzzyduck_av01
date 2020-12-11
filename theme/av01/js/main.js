// Init jquery
$(document).ready(function(){

    // ********
    // ******** 
    // MEMORIAL BOARD
    // ******** 
    // ********

    $(function() {                
      $(".alpha-A").click(function() {        
        $('.alpha-A').addClass('alpha-active');  
        $('.alpha-B, .alpha-C, .alpha-D').removeClass('alpha-active');  
      });
    });

    $(function() {                
      $(".alpha-B").click(function() {        
        $('.alpha-B').addClass('alpha-active');
        $('.alpha-A, .alpha-C, .alpha-D').removeClass('alpha-active');    
      });
    });


    $(function() {                
      $(".alpha-C").click(function() {        
        $('.alpha-C').addClass('alpha-active');
        $('.alpha-A, .alpha-B, .alpha-D').removeClass('alpha-active');    
      });
    });

    $(function() {                
      $(".alpha-D").click(function() {        
        $('.alpha-D').addClass('alpha-active'); 
        $('.alpha-A, .alpha-B, .alpha-C').removeClass('alpha-active');   
      });
    });




    // ********
    // ******** 
    // MEDAL GAME
    // ******** 
    // ********

    // ******** 
    // Step 1
    // ********

    $(function() {                
      $(".shape01").click(function() {  
        $(this).removeClass('shape01-holder');  
        $('.shape02').removeClass('shape02-active');
        $('.shape03').removeClass('shape03-active');
        $('.shape04').removeClass('shape04-active');
        $('.shape05').removeClass('shape05-active');
        $(this).addClass("shape01-active");
        $('.shape02').addClass('shape02-holder');   
        $('.shape03').addClass('shape03-holder');   
        $('.shape04').addClass('shape04-holder');   
        $('.shape05').addClass('shape05-holder');  
        
        $(".medal-shape").addClass("shape01-pick");

        $(function() {
          var shape01Text = document.querySelector('.shape01-text');
          shape01Text.style.display = "block";
        });
        
      });
    });

    $(function() {                
      $(".shape02").click(function() { 
        $(this).removeClass('shape02-holder'); 
        $('.shape01').removeClass('shape01-active');
        $('.shape03').removeClass('shape03-active');
        $('.shape04').removeClass('shape04-active');
        $('.shape05').removeClass('shape05-active');
        $(this).addClass("shape02-active");
        $('.shape01').addClass('shape01-holder');   
        $('.shape03').addClass('shape03-holder');   
        $('.shape04').addClass('shape04-holder');   
        $('.shape05').addClass('shape05-holder'); 

        $(".medal-shape").addClass("shape02-pick");

        $(function() {
          var shape02Text = document.querySelector('.shape02-text');
          shape02Text.style.display = "block";
        });

      });
    });

    $(function() {                
      $(".shape03").click(function() { 
        $(this).removeClass('shape03-holder'); 
        $('.shape01').removeClass('shape01-active');
        $('.shape02').removeClass('shape02-active');
        $('.shape04').removeClass('shape04-active');
        $('.shape05').removeClass('shape05-active');
        $(this).addClass("shape03-active");  
        $('.shape01').addClass('shape01-holder');   
        $('.shape02').addClass('shape02-holder');   
        $('.shape04').addClass('shape04-holder');   
        $('.shape05').addClass('shape05-holder');
        
        $(".medal-shape").addClass("shape03-pick");

        $(function() {
          var shape03Text = document.querySelector('.shape03-text');
          shape03Text.style.display = "block";
        });

      });
    });

    $(function() {                
      $(".shape04").click(function() { 
        $(this).removeClass('shape04-holder'); 
        $('.shape01').removeClass('shape01-active');
        $('.shape02').removeClass('shape02-active');
        $('.shape03').removeClass('shape03-active');
        $('.shape05').removeClass('shape05-active');
        $(this).addClass("shape04-active"); 
        $('.shape01').addClass('shape01-holder');   
        $('.shape02').addClass('shape02-holder');   
        $('.shape03').addClass('shape03-holder');   
        $('.shape05').addClass('shape05-holder');
        

        $(".medal-shape").addClass("shape04-pick");

        $(function() {
          var shape04Text = document.querySelector('.shape04-text');
          shape04Text.style.display = "block";
        });

      });
    });

    $(function() {                
      $(".shape05").click(function() {
        $(this).removeClass('shape05-holder');  
        $('.shape01').removeClass('shape01-active');
        $('.shape02').removeClass('shape02-active');
        $('.shape03').removeClass('shape03-active');
        $('.shape04').removeClass('shape04-active');
        $(this).addClass("shape05-active"); 
        $('.shape01').addClass('shape01-holder');   
        $('.shape02').addClass('shape02-holder');   
        $('.shape03').addClass('shape03-holder');   
        $('.shape04').addClass('shape04-holder');    

        $(".medal-shape").addClass("shape05-pick");

        $(function() {
          var shape05Text = document.querySelector('.shape05-text');
          shape05Text.style.display = "block";
        });

      });
    });

    $('.step1-cont').click(function(){
          $(".step1").fadeOut(300);
          $(".cont1").fadeOut(300);
          $("#step2").fadeIn(300);
          $(".cont2").fadeIn(300);
    });

    // ******** 
    // Step 2
    // ********

    const ribbon01Text = document.querySelector('.ribbon01-text');
    const ribbon02Text = document.querySelector('.ribbon02-text');
    const ribbon03Text = document.querySelector('.ribbon03-text');
    const ribbon04Text = document.querySelector('.ribbon04-text');
    const ribbon05Text = document.querySelector('.ribbon05-text');
    const ribbon06Text = document.querySelector('.ribbon06-text');
    const ribbon07Text = document.querySelector('.ribbon07-text');
    const ribbon08Text = document.querySelector('.ribbon08-text');

    $(function() {                
      $(".ribbon01").click(function() {
        $(this).addClass("ribbon-active");  
        $(".medal-ribbon").addClass("ribbon01-holder");
        $('.ribbon02').removeClass('ribbon-active'); 
        $('.ribbon03').removeClass('ribbon-active'); 
        $('.ribbon04').removeClass('ribbon-active');
        $('.ribbon05').removeClass('ribbon-active'); 
        $('.ribbon06').removeClass('ribbon-active'); 
        $('.ribbon07').removeClass('ribbon-active');
        $('.ribbon08').removeClass('ribbon-active');
        $('.medal-ribbon').removeClass('ribbon02-holder'); 
        $('.medal-ribbon').removeClass('ribbon03-holder'); 
        $('.medal-ribbon').removeClass('ribbon04-holder');
        $('.medal-ribbon').removeClass('ribbon05-holder'); 
        $('.medal-ribbon').removeClass('ribbon06-holder'); 
        $('.medal-ribbon').removeClass('ribbon07-holder');
        $('.medal-ribbon').removeClass('ribbon08-holder');

        $(function() {
          ribbon01Text.style.display = "block";
          ribbon02Text.style.display = "none";
          ribbon03Text.style.display = "none";
          ribbon04Text.style.display = "none";
          ribbon05Text.style.display = "none";
          ribbon06Text.style.display = "none";
          ribbon07Text.style.display = "none";
          ribbon08Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".ribbon02").click(function() {
        $(this).addClass("ribbon-active");  
        $(".medal-ribbon").addClass("ribbon02-holder");  
        $('.ribbon01').removeClass('ribbon-active'); 
        $('.ribbon03').removeClass('ribbon-active'); 
        $('.ribbon04').removeClass('ribbon-active');
        $('.ribbon05').removeClass('ribbon-active'); 
        $('.ribbon06').removeClass('ribbon-active'); 
        $('.ribbon07').removeClass('ribbon-active');
        $('.ribbon08').removeClass('ribbon-active');
        $('.medal-ribbon').removeClass('ribbon01-holder'); 
        $('.medal-ribbon').removeClass('ribbon03-holder'); 
        $('.medal-ribbon').removeClass('ribbon04-holder');
        $('.medal-ribbon').removeClass('ribbon05-holder'); 
        $('.medal-ribbon').removeClass('ribbon06-holder'); 
        $('.medal-ribbon').removeClass('ribbon07-holder');
        $('.medal-ribbon').removeClass('ribbon08-holder');

        $(function() {
          var ribbon02Text = document.querySelector('.ribbon02-text');
          ribbon01Text.style.display = "none";
          ribbon02Text.style.display = "block";
          ribbon03Text.style.display = "none";
          ribbon04Text.style.display = "none";
          ribbon05Text.style.display = "none";
          ribbon06Text.style.display = "none";
          ribbon07Text.style.display = "none";
          ribbon08Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".ribbon03").click(function() {
        $(this).addClass("ribbon-active");  
        $(".medal-ribbon").addClass("ribbon03-holder"); 
        $('.ribbon01').removeClass('ribbon-active'); 
        $('.ribbon02').removeClass('ribbon-active'); 
        $('.ribbon04').removeClass('ribbon-active');
        $('.ribbon05').removeClass('ribbon-active'); 
        $('.ribbon06').removeClass('ribbon-active'); 
        $('.ribbon07').removeClass('ribbon-active');
        $('.ribbon08').removeClass('ribbon-active');
        $('.medal-ribbon').removeClass('ribbon01-holder'); 
        $('.medal-ribbon').removeClass('ribbon02-holder'); 
        $('.medal-ribbon').removeClass('ribbon04-holder');
        $('.medal-ribbon').removeClass('ribbon05-holder'); 
        $('.medal-ribbon').removeClass('ribbon06-holder'); 
        $('.medal-ribbon').removeClass('ribbon07-holder');
        $('.medal-ribbon').removeClass('ribbon08-holder');  
        
        $(function() {
          var ribbon03Text = document.querySelector('.ribbon03-text');
          ribbon01Text.style.display = "none";
          ribbon02Text.style.display = "none";
          ribbon03Text.style.display = "block";
          ribbon04Text.style.display = "none";
          ribbon05Text.style.display = "none";
          ribbon06Text.style.display = "none";
          ribbon07Text.style.display = "none";
          ribbon08Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".ribbon04").click(function() {
        $(this).addClass("ribbon-active");  
        $(".medal-ribbon").addClass("ribbon04-holder");
        $('.ribbon01').removeClass('ribbon-active'); 
        $('.ribbon02').removeClass('ribbon-active'); 
        $('.ribbon03').removeClass('ribbon-active');
        $('.ribbon05').removeClass('ribbon-active'); 
        $('.ribbon06').removeClass('ribbon-active'); 
        $('.ribbon07').removeClass('ribbon-active');
        $('.ribbon08').removeClass('ribbon-active');
        $('.medal-ribbon').removeClass('ribbon01-holder'); 
        $('.medal-ribbon').removeClass('ribbon02-holder'); 
        $('.medal-ribbon').removeClass('ribbon03-holder');
        $('.medal-ribbon').removeClass('ribbon05-holder'); 
        $('.medal-ribbon').removeClass('ribbon06-holder'); 
        $('.medal-ribbon').removeClass('ribbon07-holder');
        $('.medal-ribbon').removeClass('ribbon08-holder'); 
        
        $(function() {
          var ribbon04Text = document.querySelector('.ribbon04-text');
          ribbon01Text.style.display = "none";
          ribbon02Text.style.display = "none";
          ribbon03Text.style.display = "none";
          ribbon04Text.style.display = "block";
          ribbon05Text.style.display = "none";
          ribbon06Text.style.display = "none";
          ribbon07Text.style.display = "none";
          ribbon08Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".ribbon05").click(function() {
        $(this).addClass("ribbon-active");  
        $(".medal-ribbon").addClass("ribbon05-holder");
        $('.ribbon01').removeClass('ribbon-active'); 
        $('.ribbon02').removeClass('ribbon-active'); 
        $('.ribbon03').removeClass('ribbon-active');
        $('.ribbon04').removeClass('ribbon-active'); 
        $('.ribbon06').removeClass('ribbon-active'); 
        $('.ribbon07').removeClass('ribbon-active');
        $('.ribbon08').removeClass('ribbon-active');
        $('.medal-ribbon').removeClass('ribbon01-holder'); 
        $('.medal-ribbon').removeClass('ribbon02-holder'); 
        $('.medal-ribbon').removeClass('ribbon03-holder');
        $('.medal-ribbon').removeClass('ribbon04-holder'); 
        $('.medal-ribbon').removeClass('ribbon06-holder'); 
        $('.medal-ribbon').removeClass('ribbon07-holder');
        $('.medal-ribbon').removeClass('ribbon08-holder');  

        $(function() {
          var ribbon05Text = document.querySelector('.ribbon05-text');
          ribbon01Text.style.display = "none";
          ribbon02Text.style.display = "none";
          ribbon03Text.style.display = "none";
          ribbon04Text.style.display = "none";
          ribbon05Text.style.display = "block";
          ribbon06Text.style.display = "none";
          ribbon07Text.style.display = "none";
          ribbon08Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".ribbon06").click(function() {
        $(this).addClass("ribbon-active");  
        $(".medal-ribbon").addClass("ribbon06-holder");
        $('.ribbon01').removeClass('ribbon-active'); 
        $('.ribbon02').removeClass('ribbon-active'); 
        $('.ribbon03').removeClass('ribbon-active');
        $('.ribbon04').removeClass('ribbon-active'); 
        $('.ribbon05').removeClass('ribbon-active'); 
        $('.ribbon07').removeClass('ribbon-active');
        $('.ribbon08').removeClass('ribbon-active');
        $('.medal-ribbon').removeClass('ribbon01-holder'); 
        $('.medal-ribbon').removeClass('ribbon02-holder'); 
        $('.medal-ribbon').removeClass('ribbon03-holder');
        $('.medal-ribbon').removeClass('ribbon04-holder'); 
        $('.medal-ribbon').removeClass('ribbon05-holder'); 
        $('.medal-ribbon').removeClass('ribbon07-holder');
        $('.medal-ribbon').removeClass('ribbon08-holder'); 
        
        $(function() {
          var ribbon06Text = document.querySelector('.ribbon06-text');
          ribbon01Text.style.display = "none";
          ribbon02Text.style.display = "none";
          ribbon03Text.style.display = "none";
          ribbon04Text.style.display = "none";
          ribbon05Text.style.display = "none";
          ribbon06Text.style.display = "block";
          ribbon07Text.style.display = "none";
          ribbon08Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".ribbon07").click(function() {
        $(this).addClass("ribbon-active");  
        $(".medal-ribbon").addClass("ribbon07-holder");
        $('.ribbon01').removeClass('ribbon-active'); 
        $('.ribbon02').removeClass('ribbon-active'); 
        $('.ribbon03').removeClass('ribbon-active');
        $('.ribbon04').removeClass('ribbon-active'); 
        $('.ribbon05').removeClass('ribbon-active'); 
        $('.ribbon06').removeClass('ribbon-active');
        $('.ribbon08').removeClass('ribbon-active');
        $('.medal-ribbon').removeClass('ribbon01-holder'); 
        $('.medal-ribbon').removeClass('ribbon02-holder'); 
        $('.medal-ribbon').removeClass('ribbon03-holder');
        $('.medal-ribbon').removeClass('ribbon04-holder'); 
        $('.medal-ribbon').removeClass('ribbon05-holder'); 
        $('.medal-ribbon').removeClass('ribbon06-holder');
        $('.medal-ribbon').removeClass('ribbon08-holder'); 
        
        $(function() {
          var ribbon07Text = document.querySelector('.ribbon07-text');
          ribbon01Text.style.display = "none";
          ribbon02Text.style.display = "none";
          ribbon03Text.style.display = "none";
          ribbon04Text.style.display = "none";
          ribbon05Text.style.display = "none";
          ribbon06Text.style.display = "none";
          ribbon07Text.style.display = "block";
          ribbon08Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".ribbon08").click(function() {
        $(this).addClass("ribbon-active");  
        $(".medal-ribbon").addClass("ribbon08-holder");
        $('.ribbon01').removeClass('ribbon-active'); 
        $('.ribbon02').removeClass('ribbon-active'); 
        $('.ribbon03').removeClass('ribbon-active');
        $('.ribbon04').removeClass('ribbon-active'); 
        $('.ribbon05').removeClass('ribbon-active'); 
        $('.ribbon06').removeClass('ribbon-active');
        $('.ribbon07').removeClass('ribbon-active');
        $('.medal-ribbon').removeClass('ribbon01-holder'); 
        $('.medal-ribbon').removeClass('ribbon02-holder'); 
        $('.medal-ribbon').removeClass('ribbon03-holder');
        $('.medal-ribbon').removeClass('ribbon04-holder'); 
        $('.medal-ribbon').removeClass('ribbon05-holder'); 
        $('.medal-ribbon').removeClass('ribbon06-holder');
        $('.medal-ribbon').removeClass('ribbon07-holder');  

        $(function() {
          var ribbon08Text = document.querySelector('.ribbon08-text');
          ribbon01Text.style.display = "none";
          ribbon02Text.style.display = "none";
          ribbon03Text.style.display = "none";
          ribbon04Text.style.display = "none";
          ribbon05Text.style.display = "none";
          ribbon06Text.style.display = "none";
          ribbon07Text.style.display = "none";
          ribbon08Text.style.display = "block";
        });

      });
    });


    $('.step2-cont').click(function(){
      $("#step2").fadeOut(300);
      $(".cont2").fadeOut(300);
      $("#step3").fadeIn(300);
      $(".cont3").fadeIn(300);
    }); 

    
    // ******** 
    // Step 3
    // ********

    const insig01Text = document.querySelector('.insig01-text');
    const insig02Text = document.querySelector('.insig02-text');
    const insig03Text = document.querySelector('.insig03-text');
    const insig04Text = document.querySelector('.insig04-text');
    const insig05Text = document.querySelector('.insig05-text');
    const insig06Text = document.querySelector('.insig06-text');


    $(function() {                
      $(".insig01").click(function() {  
        $(this).addClass("insig01-active");
        $(".insig02").removeClass('insig02-active');
        $(".insig03").removeClass('insig03-active');
        $(".insig04").removeClass('insig04-active');
        $(".insig05").removeClass('insig05-active');
        $(".insig06").removeClass('insig06-active');
        $(".medal-insig").addClass("insig01-pick");
        $('.medal-insig').removeClass('insig02-pick');
        $('.medal-insig').removeClass('insig03-pick');
        $('.medal-insig').removeClass('insig04-pick');
        $('.medal-insig').removeClass('insig05-pick');
        $('.medal-insig').removeClass('insig06-pick');

        $(function() {
          var insig01Text = document.querySelector('.insig01-text');
          insig01Text.style.display = "block";
          insig02Text.style.display = "none";
          insig03Text.style.display = "none";
          insig04Text.style.display = "none";
          insig05Text.style.display = "none";
          insig06Text.style.display = "none";
          insig07Text.style.display = "none";
          insig08Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".insig02").click(function() {  
        $(this).addClass("insig02-active");
        $(".insig01").removeClass('insig01-active');
        $(".insig03").removeClass('insig03-active');
        $(".insig04").removeClass('insig04-active');
        $(".insig05").removeClass('insig05-active');
        $(".insig06").removeClass('insig06-active');
        $(".medal-insig").addClass("insig02-pick");
        $('.medal-insig').removeClass('insig01-pick');
        $('.medal-insig').removeClass('insig03-pick');
        $('.medal-insig').removeClass('insig04-pick');
        $('.medal-insig').removeClass('insig05-pick');
        $('.medal-insig').removeClass('insig06-pick');

        $(function() {
          var insig02Text = document.querySelector('.insig02-text');
          insig01Text.style.display = "none";
          insig02Text.style.display = "block";
          insig03Text.style.display = "none";
          insig04Text.style.display = "none";
          insig05Text.style.display = "none";
          insig06Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".insig03").click(function() {  
        $(this).addClass("insig03-active");
        $(".insig01").removeClass('insig01-active');
        $(".insig02").removeClass('insig02-active');
        $(".insig04").removeClass('insig04-active');
        $(".insig05").removeClass('insig05-active');
        $(".insig06").removeClass('insig06-active'); 
        $(".medal-insig").addClass("insig03-pick");
        $('.medal-insig').removeClass('insig01-pick');
        $('.medal-insig').removeClass('insig02-pick');
        $('.medal-insig').removeClass('insig04-pick');
        $('.medal-insig').removeClass('insig05-pick');
        $('.medal-insig').removeClass('insig06-pick');

        $(function() {
          var insig03Text = document.querySelector('.insig03-text');
          insig01Text.style.display = "none";
          insig02Text.style.display = "none";
          insig03Text.style.display = "block";
          insig04Text.style.display = "none";
          insig05Text.style.display = "none";
          insig06Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".insig04").click(function() {  
        $(this).addClass("insig04-active");
        $(".insig01").removeClass('insig01-active');
        $(".insig02").removeClass('insig02-active');
        $(".insig03").removeClass('insig03-active');
        $(".insig05").removeClass('insig05-active');
        $(".insig06").removeClass('insig06-active');
        $(".medal-insig").addClass("insig04-pick");
        $('.medal-insig').removeClass('insig01-pick');
        $('.medal-insig').removeClass('insig02-pick');
        $('.medal-insig').removeClass('insig03-pick');
        $('.medal-insig').removeClass('insig05-pick');
        $('.medal-insig').removeClass('insig06-pick');

        $(function() {
          var insig04Text = document.querySelector('.insig04-text');
          insig01Text.style.display = "none";
          insig02Text.style.display = "none";
          insig03Text.style.display = "none";
          insig04Text.style.display = "block";
          insig05Text.style.display = "none";
          insig06Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".insig05").click(function() {  
        $(this).addClass("insig05-active");
        $(".insig01").removeClass('insig01-active');
        $(".insig02").removeClass('insig02-active');
        $(".insig03").removeClass('insig03-active');
        $(".insig04").removeClass('insig04-active');
        $(".insig06").removeClass('insig06-active'); 
        $(".medal-insig").addClass("insig05-pick");
        $('.medal-insig').removeClass('insig01-pick');
        $('.medal-insig').removeClass('insig02-pick');
        $('.medal-insig').removeClass('insig03-pick');
        $('.medal-insig').removeClass('insig04-pick');
        $('.medal-insig').removeClass('insig06-pick');

        $(function() {
          var insig05Text = document.querySelector('.insig05-text');
          insig01Text.style.display = "none";
          insig02Text.style.display = "none";
          insig03Text.style.display = "none";
          insig04Text.style.display = "none";
          insig05Text.style.display = "block";
          insig06Text.style.display = "none";
        });

      });
    });

    $(function() {                
      $(".insig06").click(function() {  
        $(this).addClass("insig06-active");
        $(".insig01").removeClass('insig01-active');
        $(".insig02").removeClass('insig02-active');
        $(".insig03").removeClass('insig03-active');
        $(".insig04").removeClass('insig04-active');
        $(".insig05").removeClass('insig05-active');
        $(".medal-insig").addClass("insig06-pick");
        $('.medal-insig').removeClass('insig01-pick');
        $('.medal-insig').removeClass('insig02-pick');
        $('.medal-insig').removeClass('insig03-pick');
        $('.medal-insig').removeClass('insig04-pick');
        $('.medal-insig').removeClass('insig05-pick');

        $(function() {
          var insig06Text = document.querySelector('.insig06-text');
          insig01Text.style.display = "none";
          insig02Text.style.display = "none";
          insig03Text.style.display = "none";
          insig04Text.style.display = "none";
          insig05Text.style.display = "none";
          insig06Text.style.display = "block";
        });


      });
    });


    $('.step3-cont').click(function(){
      $("#step3").fadeOut(300);
      $(".cont3").fadeOut(300);
      $("#about").fadeIn(300);
      $(".cont4").fadeIn(300);
      gsap.from('.shape-text', {duration: 0.3, opacity: 1, y: -100, opacity: 0, delay: 0.5 })
      gsap.from('.medal-shape', {duration: 0.3, opacity: 1, y: 100, opacity: 0, delay: 0.4 })
      gsap.from('.ribbon-text', {duration: 0.6, opacity: 1, y: -100, opacity: 0, delay: 0.6 })
      gsap.from('.medal-ribbon', {duration: 0.6, opacity: 1, y: -100, opacity: 0, delay: 0.6 })
      gsap.from('.insig-text', {duration: 0.8, opacity: 1, y: 100, opacity: 0, delay: 1.0 })
      gsap.from('.medal-insig', {duration: 0.6, opacity: 1, y: 100, opacity: 0, delay: 0.8 })
    }); 


    // ******** 
    // FINAL: About your medal
    // ********

    $('.step4-cont').click(function(){
      $("#about").fadeOut(300);
      $(".cont4").fadeOut(300);
      $(".step1").fadeIn(300);
      $(".cont1").fadeIn(300);

      $(function() {
        var resetDisplay = document.querySelector('.step1');
        var resetDisplayAbout = document.querySelector('#about');
        resetDisplay.style.display = "block";
        resetDisplayAbout.style.display = "none";
      });
  });

}); // End jquery 