$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const grablu1 = document.getElementById('grablu');
      const grablu2 = document.getElementById('side-grablu');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      grablu1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/grablu/gacha-ssr.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'grablu-gacha-btn2');
      });

      grablu2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/grablu/gacha-ssr.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'grablu-gacha-btn2');
      });

      $(document).on('mousedown', '#grablu-gacha-btn2', function(){
        var btn = document.getElementById('grablu-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#grablu-gacha-btn2', function(){
        var btn = document.getElementById('grablu-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#grablu-gacha-btn2', function(){

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

        const n = Math.random();

        if (n < 0.5){
          var gr = 2;
        }else {
          var gr = 1;
        };

        switch(gr){

          case 2:
          const results2 = ["assets/games/grablu/summon/1.png","assets/games/grablu/summon/2.png","assets/games/grablu/summon/3.png",
                            "assets/games/grablu/summon/4.png","assets/games/grablu/summon/5.png","assets/games/grablu/summon/6.png",
                            "assets/games/grablu/summon/7.png","assets/games/grablu/summon/8.png","assets/games/grablu/summon/9.png",
                            "assets/games/grablu/summon/10.png","assets/games/grablu/summon/11.png","assets/games/grablu/summon/12.png",
                            "assets/games/grablu/summon/13.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result2').src = results2[n2];
            var h1 = document.getElementById("show-rality2");
            h1.textContent = "⭐️🌈SSR召喚石🌈⭐️";
          break;

          default:
          const results1 = ["assets/games/grablu/ssr/1.png","assets/games/grablu/ssr/2.png","assets/games/grablu/ssr/3.png",
                            "assets/games/grablu/ssr/4.png", "assets/games/grablu/ssr/5.png","assets/games/grablu/ssr/6.png",
                            "assets/games/grablu/ssr/7.png","assets/games/grablu/ssr/8.png","assets/games/grablu/ssr/9.png",
                            "assets/games/grablu/ssr/10.png","assets/games/grablu/ssr/11.png","assets/games/grablu/ssr/12.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result2').src = results1[n1];
            var h1 = document.getElementById("show-rality2");
            h1.textContent = "⭐️🌈SSR🌈⭐️";
          break;

        };
        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/grablu/summon/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "グリームニル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "シヴァ";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "エウロペ";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ゴッドガード･ブローディア";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ルシフェル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "バハムート";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ラファエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ミカエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ガブリエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ウリエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/11.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "メタトロン";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/12.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "サリエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/13.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ベリアル";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ユイシス";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ヴァジラ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "イルザ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ヘルエス";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "フェリ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アンスリア";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アテナ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "マキュラ･マリウス";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ゆぐゆぐ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ティアマト";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/11.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ゾーイ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/12.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ケルベロス";
          break;
        };
      });
    }
  });
});