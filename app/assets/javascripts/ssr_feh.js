$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const feh1 = document.getElementById('feh');
      const feh2 = document.getElementById('side-feh');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      feh1.addEventListener('click',()=>{
        document.getElementById(Image).src='/images/games/feh/feh-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'feh-gacha-btn2');
      });

      feh2.addEventListener('click',()=>{
        document.getElementById(Image).src='/images/games/feh/feh-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'feh-gacha-btn2');
      });

      $(document).on('mousedown', '#feh-gacha-btn2', function(){
        var btn = document.getElementById('feh-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#feh-gacha-btn2', function(){
        var btn = document.getElementById('feh-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#feh-gacha-btn2', function(){

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

        const results1 = ["/images/games/feh/ssr/1.png","/images/games/feh/ssr/2.png","/images/games/feh/ssr/3.png",
                          "/images/games/feh/ssr/4.png","/images/games/feh/ssr/5.png","/images/games/feh/ssr/6.png",
                          "/images/games/feh/ssr/7.png","/images/games/feh/ssr/8.png","/images/games/feh/ssr/9.png",
                          "/images/games/feh/ssr/10.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result2').src = results1[n1];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️🌈";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://18.180.186.71/images/games/feh/ssr/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ルキナ";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "リン";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "つばさ";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "キヌ";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アクア";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "カムイ";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "エイル";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "マルス";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ロイ";
          break;
          case "http://18.180.186.71/images/games/feh/ssr/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アイク";
          break;
        };
      });
    }
  });
});