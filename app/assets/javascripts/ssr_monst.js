$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const monst1 = document.getElementById('monst');
      const monst2 = document.getElementById('side-monst');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      monst1.addEventListener('click',()=>{
        document.getElementById(Image).src='/images/games/monst/monst-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'monst-gacha-btn2');
      });

      monst2.addEventListener('click',()=>{
        document.getElementById(Image).src='/images/games/monst/monst-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'monst-gacha-btn2');
      });

      $(document).on('mousedown', '#monst-gacha-btn2', function(){
        var btn = document.getElementById('monst-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#monst-gacha-btn2', function(){
        var btn = document.getElementById('monst-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#monst-gacha-btn2', function(){

        var h1 = document.getElementById("show-rality2");
        if (h1 == null){
          return false;
        }
        h1.textContent = "";

        var h1 = document.getElementById("show-description2");
        if (h1 == null){
          return false;
        }
        h1.textContent = "";

        const results1 = ["/images/games/monst/ssr/1.png","/images/games/monst/ssr/2.png","/images/games/monst/ssr/3.png",
                          "/images/games/monst/ssr/4.png","/images/games/monst/ssr/5.png","/images/games/monst/ssr/6.png",
                          "/images/games/monst/ssr/7.png","/images/games/monst/ssr/8.png","/images/games/monst/ssr/9.png",
                          "/images/games/monst/ssr/10.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result2').src = results1[n1];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️⭐️🌈";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://18.180.186.71/images/games/monst/ssr/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ルシファー";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ガブリエル";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ミカエル";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ラファエル";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ウリエル";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "エクスカリバー";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "風神雷神";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ユグドラシル";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ソロモン";
          break;
          case "http://18.180.186.71/images/games/monst/ssr/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アトゥム";
          break;
        };
      });
    }
  });
});