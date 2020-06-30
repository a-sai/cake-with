$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const feh1 = document.getElementById('feh');
      const feh2 = document.getElementById('side-feh');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      feh1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/feh/feh-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'feh-gacha-btn');
      });

      feh2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/feh/feh-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'feh-gacha-btn');
      });

      $(document).on('mousedown', '#feh-gacha-btn', function(){
        var btn = document.getElementById('feh-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#feh-gacha-btn', function(){
        var btn = document.getElementById('feh-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#feh-gacha-btn', function(){

        var h1 = document.getElementById("show-rality");
        if (h1 == null){
          return false;
        }
        h1.textContent = "";

        var h1 = document.getElementById("show-description");
        if (h1 == null){
          return false;
        }
        h1.textContent = "";

        const n = Math.random();

        if (n < 0.1){
          var gr = 3;
        }else if (n < 0.3){
          var gr = 2;
        }else{
          var gr = 1;
        };

        switch(gr){

          case 3:
          const results3 = ["assets/games/feh/ssr/1.png","assets/games/feh/ssr/2.png","assets/games/feh/ssr/3.png",
                            "assets/games/feh/ssr/4.png","assets/games/feh/ssr/5.png","assets/games/feh/ssr/6.png",
                            "assets/games/feh/ssr/7.png","assets/games/feh/ssr/8.png","assets/games/feh/ssr/9.png",
                            "assets/games/feh/ssr/10.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️🌈";
          break;

          case 2:
          const results2 = ["assets/games/feh/sr/1.png","assets/games/feh/sr/2.png","assets/games/feh/sr/3.png",
                            "assets/games/feh/sr/4.png", "assets/games/feh/sr/5.png","assets/games/feh/sr/6.png",
                            "assets/games/feh/sr/7.png", "assets/games/feh/sr/8.png","assets/games/feh/sr/9.png",
                            "assets/games/feh/sr/10.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐️⭐️";
          break;

          default :
          const results1 = ["assets/games/feh/r/1.png","assets/games/feh/r/2.png","assets/games/feh/r/3.png",
                            "assets/games/feh/r/4.png","assets/games/feh/r/5.png","assets/games/feh/r/6.png",
                            "assets/games/feh/r/7.png","assets/games/feh/r/8.png","assets/games/feh/r/9.png",
                            "assets/games/feh/r/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐️";
          break;

        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/feh/ssr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ルキナ";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "リン";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "つばさ";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "キヌ";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アクア";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カムイ";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エイル";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マルス";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ロイ";
          break;
          case "http://localhost:3000/assets/games/feh/ssr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アイク";
          break;
          case "http://localhost:3000/assets/games/feh/sr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "リリーナ";
          break;
          case "http://localhost:3000/assets/games/feh/sr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ニノ";
          break;
          case "http://localhost:3000/assets/games/feh/sr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シーダ";
          break;
          case "http://localhost:3000/assets/games/feh/sr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カミラ";
          break;
          case "http://localhost:3000/assets/games/feh/sr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "セシリア";
          break;
          case "http://localhost:3000/assets/games/feh/sr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エイリーク";
          break;
          case "http://localhost:3000/assets/games/feh/sr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "デューテ";
          break;
          case "http://localhost:3000/assets/games/feh/sr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ラインハルト";
          break;
          case "http://localhost:3000/assets/games/feh/sr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ラス";
          break;
          case "http://localhost:3000/assets/games/feh/sr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アベル";
          break;
          case "http://localhost:3000/assets/games/feh/r/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "リュシオン";
          break;
          case "http://localhost:3000/assets/games/feh/r/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ネサラ";
          break;
          case "http://localhost:3000/assets/games/feh/r/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アシュナード";
          break;
          case "http://localhost:3000/assets/games/feh/r/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ケンプフ";
          break;
          case "http://localhost:3000/assets/games/feh/r/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "バルボ";
          break;
          case "http://localhost:3000/assets/games/feh/r/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "パイソン";
          break;
          case "http://localhost:3000/assets/games/feh/r/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カイン";
          break;
          case "http://localhost:3000/assets/games/feh/r/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "コンラート";
          break;
          case "http://localhost:3000/assets/games/feh/r/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "モゥディ";
          break;
          case "http://localhost:3000/assets/games/feh/r/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ルトガー";
          break;
        };
      });
    }
  });
});