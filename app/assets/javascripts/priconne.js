$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const priconne1 = document.getElementById('priconne');
      const priconne2 = document.getElementById('side-priconne');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      priconne1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/priconne/priconne-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'priconne-gacha-btn');
      });

      priconne2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/priconne/priconne-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'priconne-gacha-btn');
      });

      $(document).on('mousedown', '#priconne-gacha-btn', function(){
        var btn = document.getElementById('priconne-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#priconne-gacha-btn', function(){
        var btn = document.getElementById('priconne-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#priconne-gacha-btn', function(){

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
          const results3 = ["assets/games/priconne/ssr/1.png","assets/games/priconne/ssr/2.png","assets/games/priconne/ssr/3.png",
                            "assets/games/priconne/ssr/4.png","assets/games/priconne/ssr/5.png","assets/games/priconne/ssr/6.png",
                            "assets/games/priconne/ssr/7.png","assets/games/priconne/ssr/8.png","assets/games/priconne/ssr/9.png",
                            "assets/games/priconne/ssr/10.png","assets/games/priconne/ssr/11.png","assets/games/priconne/ssr/12.png",
                            "assets/games/priconne/ssr/13.png","assets/games/priconne/ssr/14.png","assets/games/priconne/ssr/15.png",
                            "assets/games/priconne/ssr/16.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "🌈⭐️⭐️⭐️🌈";
          break;

          case 2:
          const results2 = ["assets/games/priconne/sr/1.png","assets/games/priconne/sr/2.png","assets/games/priconne/sr/3.png",
                            "assets/games/priconne/sr/4.png", "assets/games/priconne/sr/5.png","assets/games/priconne/sr/6.png",
                            "assets/games/priconne/sr/7.png", "assets/games/priconne/sr/8.png","assets/games/priconne/sr/9.png",
                            "assets/games/priconne/sr/10.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️";
          break;

          default :
          const results1 = ["assets/games/priconne/r/1.png","assets/games/priconne/r/2.png","assets/games/priconne/r/3.png",
                            "assets/games/priconne/r/4.png","assets/games/priconne/r/5.png","assets/games/priconne/r/6.png",
                            "assets/games/priconne/r/7.png","assets/games/priconne/r/8.png","assets/games/priconne/r/9.png",
                            "assets/games/priconne/r/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️";
          break;

        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/priconne/ssr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ユニ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "チエル";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "クロエ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カスミ(マジカル)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "キョウカ(ハロウィン)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シズル(バレンタイン)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "キャル(ニューイヤー)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "コッコロ(ニューイヤー)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ニノン(オーエド)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マコト(サマー)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/11.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アンナ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/12.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "トモ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/13.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "サレン(サマー)";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/14.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "イリヤ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/15.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マホ";
          break;
          case "http://localhost:3000/assets/games/priconne/ssr/16.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ハツネ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "タマキ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ミフユ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カオリ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ミミ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シオリ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ミヤコ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アカリ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エリコ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ユキ";
          break;
          case "http://localhost:3000/assets/games/priconne/sr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "スズナ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ユカリ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ミソギ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ユイ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レイ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヒヨリ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アオイ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "クルミ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アユミ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "スズメ";
          break;
          case "http://localhost:3000/assets/games/priconne/r/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヨリ";
          break;
        };
      });
    }
  });
});