$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const grablu1 = document.getElementById('grablu');
      const grablu2 = document.getElementById('side-grablu');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      grablu1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/grablu/gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'grablu-gacha-btn');
      });

      grablu2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/grablu/gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'grablu-gacha-btn');
      });

      $(document).on('mousedown', '#grablu-gacha-btn', function(){
        var btn = document.getElementById('grablu-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#grablu-gacha-btn', function(){
        var btn = document.getElementById('grablu-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#grablu-gacha-btn', function(){

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
          var gr = 4;
        }else if (n < 0.3){
          var gr = 3;
        }else if (n < 0.6){
          var gr = 2;
        }else{
          var gr = 1;
        };

        switch(gr){

          case 4:
          const results4 = ["assets/games/grablu/summon/1.png","assets/games/grablu/summon/2.png","assets/games/grablu/summon/3.png",
                            "assets/games/grablu/summon/4.png","assets/games/grablu/summon/5.png","assets/games/grablu/summon/6.png",
                            "assets/games/grablu/summon/7.png","assets/games/grablu/summon/8.png","assets/games/grablu/summon/9.png",
                            "assets/games/grablu/summon/10.png","assets/games/grablu/summon/11.png","assets/games/grablu/summon/12.png",
                            "assets/games/grablu/summon/13.png"
                          ];
            const n4 = Math.floor(Math.random()*results4.length);
            document.getElementById('gacha-result').src = results4[n4];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️🌈SSR召喚石🌈⭐️";
          break;

          case 3:
          const results3 = ["assets/games/grablu/ssr/1.png","assets/games/grablu/ssr/2.png","assets/games/grablu/ssr/3.png",
                            "assets/games/grablu/ssr/4.png", "assets/games/grablu/ssr/5.png","assets/games/grablu/ssr/6.png",
                            "assets/games/grablu/ssr/7.png","assets/games/grablu/ssr/8.png","assets/games/grablu/ssr/9.png",
                            "assets/games/grablu/ssr/10.png","assets/games/grablu/ssr/11.png","assets/games/grablu/ssr/12.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️🌈SSR🌈⭐️";
          break;

          case 2:
          const results2 = ["assets/games/grablu/sr/1.png","assets/games/grablu/sr/2.png","assets/games/grablu/sr/3.png",
                            "assets/games/grablu/sr/4.png","assets/games/grablu/sr/5.png","assets/games/grablu/sr/6.png",
                            "assets/games/grablu/sr/7.png","assets/games/grablu/sr/8.png","assets/games/grablu/sr/9.png",
                            "assets/games/grablu/sr/10.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "SR!!";
          break;

          default:
          const results1 = ["assets/games/grablu/r/1.png","assets/games/grablu/r/2.png","assets/games/grablu/r/3.png",
                            "assets/games/grablu/r/4.png","assets/games/grablu/r/5.png","assets/games/grablu/r/6.png",
                            "assets/games/grablu/r/7.png","assets/games/grablu/r/8.png","assets/games/grablu/r/9.png",
                            "assets/games/grablu/r/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "R!";
          break;
        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/grablu/summon/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "グリームニル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シヴァ";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エウロペ";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ゴッドガード･ブローディア";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ルシフェル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "バハムート";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ラファエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ミカエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガブリエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ウリエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/11.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "メタトロン";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/12.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "サリエル";
          break;
          case "http://localhost:3000/assets/games/grablu/summon/13.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ベリアル";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ユイシス";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヴァジラ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "イルザ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヘルエス";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "フェリ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アンスリア";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アテナ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マキュラ･マリウス";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ゆぐゆぐ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ティアマト";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/11.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ゾーイ";
          break;
          case "http://localhost:3000/assets/games/grablu/ssr/12.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ケルベロス";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ミリン";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エジェリー";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マイム";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レオナ";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヤイア";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "プレデター";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ククル";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "テレーズ";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "コルワ";
          break;
          case "http://localhost:3000/assets/games/grablu/sr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ダヌア";
          break;
          case "http://localhost:3000/assets/games/grablu/r/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ロザミア";
          break;
          case "http://localhost:3000/assets/games/grablu/r/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カイラナ";
          break;
          case "http://localhost:3000/assets/games/grablu/r/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ルナール";
          break;
          case "http://localhost:3000/assets/games/grablu/r/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マリー";
          break;
          case "http://localhost:3000/assets/games/grablu/r/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "クムユ";
          break;
          case "http://localhost:3000/assets/games/grablu/r/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "K･B･S･N";
          break;
          case "http://localhost:3000/assets/games/grablu/r/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アリステラ";
          break;
          case "http://localhost:3000/assets/games/grablu/r/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "イッパツ";
          break;
          case "http://localhost:3000/assets/games/grablu/r/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ブリジール";
          break;
          case "http://localhost:3000/assets/games/grablu/r/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ウェルダー";
          break;
        };
      });
    }
  });
});