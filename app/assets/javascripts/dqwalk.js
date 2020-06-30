$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const dqwalk1 = document.getElementById('dqwalk');
      const dqwalk2 = document.getElementById('side-dqwalk');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      dqwalk1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/dqwalk/dqwalk-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'dqwalk-gacha-btn');
      });

      dqwalk2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/dqwalk/dqwalk-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'dqwalk-gacha-btn');
      });

      $(document).on('mousedown', '#dqwalk-gacha-btn', function(){
        var btn = document.getElementById('dqwalk-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#dqwalk-gacha-btn', function(){
        var btn = document.getElementById('dqwalk-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#dqwalk-gacha-btn', function(){

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
          const results3 = ["assets/games/dqwalk/ssr/1.png","assets/games/dqwalk/ssr/2.png","assets/games/dqwalk/ssr/3.png",
                            "assets/games/dqwalk/ssr/4.png","assets/games/dqwalk/ssr/5.png","assets/games/dqwalk/ssr/6.png",
                            "assets/games/dqwalk/ssr/7.png","assets/games/dqwalk/ssr/8.png","assets/games/dqwalk/ssr/9.png",
                            "assets/games/dqwalk/ssr/10.png","assets/games/dqwalk/ssr/11.png","assets/games/dqwalk/ssr/12.png",
                            "assets/games/dqwalk/ssr/13.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️🌈";
          break;

          case 2:
          const results2 = ["assets/games/dqwalk/sr/1.png","assets/games/dqwalk/sr/2.png","assets/games/dqwalk/sr/3.png",
                            "assets/games/dqwalk/sr/4.png", "assets/games/dqwalk/sr/5.png","assets/games/dqwalk/sr/6.png",
                            "assets/games/dqwalk/sr/7.png", "assets/games/dqwalk/sr/8.png","assets/games/dqwalk/sr/9.png",
                            "assets/games/dqwalk/sr/10.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐⭐️";
          break;

          default :
          const results1 = ["assets/games/dqwalk/r/1.png","assets/games/dqwalk/r/2.png","assets/games/dqwalk/r/3.png",
                            "assets/games/dqwalk/r/4.png","assets/games/dqwalk/r/5.png","assets/games/dqwalk/r/6.png",
                            "assets/games/dqwalk/r/7.png","assets/games/dqwalk/r/8.png","assets/games/dqwalk/r/9.png",
                            "assets/games/dqwalk/r/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐️";
          break;

        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/dqwalk/ssr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ロトのつるぎ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "聖盾騎士のオノ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "キラーピアス";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ラーミアの杖";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "聖女のこん";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "メタスラのやり";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "黄竜のツメ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ボルケーノウィップ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カンダタトマホーク";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "勇者の盾";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/11.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "聖女のティアラ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/12.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マッスルボディ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/13.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "書聖のはかま";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "戦士の剣";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レックスのオノ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ぎんの短剣";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ペロリンステッキ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "まどろみのこん";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "パルチザン";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "あくまのツメ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "スコーピオンテイル";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ツインスワロー";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "まほうの盾";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/11.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "空竜のかぶりもの";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/12.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マスターベスト";
          break;
          case "http://localhost:3000/assets/games/dqwalk/sr/13.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "無法者のズボン";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "はがねのつるぎ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "バトルアックス";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "くない";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ラブリースティック";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "セレモニーロッド";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "サタンフォーク";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "こあくまメイル";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ローズウィップ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ニンジャカッター";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ライトバックラー";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/11.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "戦士のかぶと";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/12.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ぎんのむねあて";
          break;
          case "http://localhost:3000/assets/games/dqwalk/r/13.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "魔法使いのズボン";
          break;
        };
      });
    }
  });
});