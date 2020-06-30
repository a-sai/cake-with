$(function(){

  'use strict';

  {
    const btn2 = document.getElementById('gacha-btn2');

    btn2.addEventListener('mousedown',()=>{
      btn2.classList.add('pressed')
    });

    btn2.addEventListener('mouseup',()=>{
      btn2.classList.remove('pressed')
    });

    btn2.addEventListener('click',()=>{
      const results = ["assets/games/shadowverse/legend/l_f_1.png","assets/games/shadowverse/legend/l_f_2.png","assets/games/shadowverse/legend/l_f_3.png","assets/games/shadowverse/legend/l_f_4.png",
                      "assets/games/shadowverse/legend/l_f_5.png","assets/games/shadowverse/legend/l_f_6.png","assets/games/shadowverse/legend/l_f_7.png","assets/games/shadowverse/legend/l_f_8.png",
                      "assets/games/shadowverse/legend/l_nf_1.png","assets/games/shadowverse/legend/l_nf_2.png","assets/games/shadowverse/legend/l_nf_3.png","assets/games/shadowverse/legend/l_nf_4.png",
                      "assets/games/shadowverse/legend/l_nf_5.png","assets/games/shadowverse/legend/l_nf_6.png","assets/games/shadowverse/legend/l_nf_7.png","assets/games/shadowverse/legend/l_nf_8.png"
                    ];
          const n = Math.floor(Math.random()*results.length);
          document.getElementById('gacha-result2').src = results[n];
    });
  }
});