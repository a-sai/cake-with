$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const monst1 = document.getElementById('monst');
      const monst2 = document.getElementById('side-monst');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      monst1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/monst/monst-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'monst-gacha-btn');
      });

      monst2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/monst/monst-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'monst-gacha-btn');
      });

      $(document).on('mousedown', '#monst-gacha-btn', function(){
        var btn = document.getElementById('monst-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#monst-gacha-btn', function(){
        var btn = document.getElementById('monst-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#monst-gacha-btn', function(){

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

        if (n < 0.3){
          var gr = 2;
        }else {
          var gr = 1;
        };

        switch(gr){

          case 2:
          const results2 = ["assets/games/monst/ssr/1.png","assets/games/monst/ssr/2.png","assets/games/monst/ssr/3.png",
                            "assets/games/monst/ssr/4.png","assets/games/monst/ssr/5.png","assets/games/monst/ssr/6.png",
                            "assets/games/monst/ssr/7.png","assets/games/monst/ssr/8.png","assets/games/monst/ssr/9.png",
                            "assets/games/monst/ssr/10.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️⭐️🌈";
          break;

          default :
          const results1 = ["assets/games/monst/sr/1.png","assets/games/monst/sr/2.png","assets/games/monst/sr/3.png",
                            "assets/games/monst/sr/4.png", "assets/games/monst/sr/5.png","assets/games/monst/sr/6.png",
                            "assets/games/monst/sr/7.png", "assets/games/monst/sr/8.png","assets/games/monst/sr/9.png",
                            "assets/games/monst/sr/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐️⭐️⭐️";
          break;

        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/monst/ssr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ルシファー";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガブリエル";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ミカエル";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ラファエル";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ウリエル";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エクスカリバー";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "風神雷神";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ユグドラシル";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ソロモン";
          break;
          case "http://localhost:3000/assets/games/monst/ssr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アトゥム";
          break;
          case "http://localhost:3000/assets/games/monst/sr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アマテラス";
          break;
          case "http://localhost:3000/assets/games/monst/sr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アフロディーテ";
          break;
          case "http://localhost:3000/assets/games/monst/sr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ネプチューン";
          break;
          case "http://localhost:3000/assets/games/monst/sr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レヴィアタン";
          break;
          case "http://localhost:3000/assets/games/monst/sr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "イシス";
          break;
          case "http://localhost:3000/assets/games/monst/sr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ジュピター";
          break;
          case "http://localhost:3000/assets/games/monst/sr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヴィーナス";
          break;
          case "http://localhost:3000/assets/games/monst/sr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヘルメス";
          break;
          case "http://localhost:3000/assets/games/monst/sr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シヴァ";
          break;
          case "http://localhost:3000/assets/games/monst/sr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ホルス";
          break;
        };
      });
    }
  });
});