$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';

    {
      $(document).on('mousedown', '#gacha-btn2', function(){
        var btn2 = document.getElementById('gacha-btn2');
        btn2.classList.add('pressed')
      });

      $(document).on('mouseup', '#gacha-btn2', function(){
        var btn2 = document.getElementById('gacha-btn2');
        btn2.classList.remove('pressed')
      });

      $(document).on('click', '#gacha-btn2', function(){
        const results = ["/images/games/shadowverse/legend/l_f_1.png","/images/games/shadowverse/legend/l_f_2.png","/images/games/shadowverse/legend/l_f_3.png","/images/games/shadowverse/legend/l_f_4.png",
                        "/images/games/shadowverse/legend/l_f_5.png","/images/games/shadowverse/legend/l_f_6.png","/images/games/shadowverse/legend/l_f_7.png","/images/games/shadowverse/legend/l_f_8.png",
                        "/images/games/shadowverse/legend/l_nf_1.png","/images/games/shadowverse/legend/l_nf_2.png","/images/games/shadowverse/legend/l_nf_3.png","/images/games/shadowverse/legend/l_nf_4.png",
                        "/images/games/shadowverse/legend/l_nf_5.png","/images/games/shadowverse/legend/l_nf_6.png","/images/games/shadowverse/legend/l_nf_7.png","/images/games/shadowverse/legend/l_nf_8.png"
                      ];
            const n = Math.floor(Math.random()*results.length);
            document.getElementById('gacha-result2').src = results[n];
      });
    }
  });
});