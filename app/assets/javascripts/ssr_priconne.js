$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const priconne1 = document.getElementById('priconne');
      const priconne2 = document.getElementById('side-priconne');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      priconne1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/priconne/priconne-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'priconne-gacha-btn2');
      });

      priconne2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/priconne/priconne-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'priconne-gacha-btn2');
      });

      $(document).on('mousedown', '#priconne-gacha-btn2', function(){
        var btn = document.getElementById('priconne-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#priconne-gacha-btn2', function(){
        var btn = document.getElementById('priconne-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#priconne-gacha-btn2', function(){

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

        const results1 = ["assets/games/priconne/ssr/1.png","assets/games/priconne/ssr/2.png","assets/games/priconne/ssr/3.png",
                          "assets/games/priconne/ssr/4.png","assets/games/priconne/ssr/5.png","assets/games/priconne/ssr/6.png",
                          "assets/games/priconne/ssr/7.png","assets/games/priconne/ssr/8.png","assets/games/priconne/ssr/9.png",
                          "assets/games/priconne/ssr/10.png","assets/games/priconne/ssr/11.png","assets/games/priconne/ssr/12.png",
                          "assets/games/priconne/ssr/13.png","assets/games/priconne/ssr/14.png","assets/games/priconne/ssr/15.png",
                          "assets/games/priconne/ssr/16.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result2').src = results1[n1];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "🌈⭐️⭐️⭐️🌈";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/priconne/ssr/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ユニ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "チエル";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "クロエ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "カスミ(マジカル)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "キョウカ(ハロウィン)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "シズル(バレンタイン)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "キャル(ニューイヤー)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "コッコロ(ニューイヤー)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ニノン(オーエド)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "マコト(サマー)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/11.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アンナ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/12.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "トモ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/13.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "サレン(サマー)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/14.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "イリヤ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/15.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "マホ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/16.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ハツネ";
          break;
        };
      });
    }
  });
});