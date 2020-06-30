$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const pazdra1 = document.getElementById('pazdra');
      const pazdra2 = document.getElementById('side-pazdra');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      pazdra1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/pazdra/pazdra-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'pazdra-gacha-btn');
      });

      pazdra2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/pazdra/pazdra-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'pazdra-gacha-btn');
      });

      $(document).on('mousedown', '#pazdra-gacha-btn', function(){
        var btn = document.getElementById('pazdra-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#pazdra-gacha-btn', function(){
        var btn = document.getElementById('pazdra-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#pazdra-gacha-btn', function(){

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
          const results3 = ["assets/games/pazdra/ssr/1.png","assets/games/pazdra/ssr/2.png","assets/games/pazdra/ssr/3.png",
                            "assets/games/pazdra/ssr/4.png","assets/games/pazdra/ssr/5.png","assets/games/pazdra/ssr/6.png",
                            "assets/games/pazdra/ssr/7.png","assets/games/pazdra/ssr/8.png","assets/games/pazdra/ssr/9.png",
                            "assets/games/pazdra/ssr/10.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️⭐️⭐️🌈";
          break;

          case 2:
          const results2 = ["assets/games/pazdra/sr/1.png","assets/games/pazdra/sr/2.png","assets/games/pazdra/sr/3.png",
                            "assets/games/pazdra/sr/4.png", "assets/games/pazdra/sr/5.png","assets/games/pazdra/sr/6.png",
                            "assets/games/pazdra/sr/7.png", "assets/games/pazdra/sr/8.png","assets/games/pazdra/sr/9.png",
                            "assets/games/pazdra/sr/10.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐️⭐️⭐️⭐️";
          break;

          default :
          const results1 = ["assets/games/pazdra/r/1.png","assets/games/pazdra/r/2.png","assets/games/pazdra/r/3.png",
                            "assets/games/pazdra/r/4.png","assets/games/pazdra/r/5.png","assets/games/pazdra/r/6.png",
                            "assets/games/pazdra/r/7.png","assets/games/pazdra/r/8.png","assets/games/pazdra/r/9.png",
                            "assets/games/pazdra/r/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐️⭐️⭐️";
          break;

        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/pazdra/ssr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レムゥ";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ノルザ";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アルジェ";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ファスカ";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ネレ";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "龍刀・蛇骨姫";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "龍刀・薄霧";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "龍刀・九斬公";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "龍刀・我乱童子";
          break;
          case "http://localhost:3000/assets/games/pazdra/ssr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "龍刀・宙天丸";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "幻神・オーディン";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "時女神・スクルド";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "風神";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヨグ＝ソトース";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "執行者・メタトロン";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マッハ";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シェアト";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カエデ";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "雷神";
          break;
          case "http://localhost:3000/assets/games/pazdra/sr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エスカマリ";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "朱雀の化身・レイラン";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "青龍の化身・カリン";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "玄武の化身・メイメイ";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "麒麟の化身・サクヤ";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "白虎の化身・ハク";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "赤龍喚士・ソニア";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "藍龍喚士・スミレ";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "美髯神・関羽";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "代行者・メタトロン";
          break;
          case "http://localhost:3000/assets/games/pazdra/r/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "フェンリル";
          break;
        };
      });
    }
  });
});