$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const fgo1 = document.getElementById('fgo');
      const fgo2 = document.getElementById('side-fgo');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      fgo1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/fgo/fgo-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'fgo-gacha-btn');
      });

      fgo2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/fgo/fgo-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'fgo-gacha-btn');
      });

      $(document).on('mousedown', '#fgo-gacha-btn', function(){
        var btn = document.getElementById('fgo-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#fgo-gacha-btn', function(){
        var btn = document.getElementById('fgo-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#fgo-gacha-btn', function(){

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
          const results3 = ["assets/games/fgo/ssr/1.png","assets/games/fgo/ssr/2.png","assets/games/fgo/ssr/3.png",
                            "assets/games/fgo/ssr/4.png","assets/games/fgo/ssr/5.png","assets/games/fgo/ssr/6.png",
                            "assets/games/fgo/ssr/7.png","assets/games/fgo/ssr/8.png","assets/games/fgo/ssr/9.png",
                            "assets/games/fgo/ssr/10.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️🌈";
          break;

          case 2:
          const results2 = ["assets/games/fgo/sr/1.png","assets/games/fgo/sr/2.png","assets/games/fgo/sr/3.png",
                            "assets/games/fgo/sr/4.png", "assets/games/fgo/sr/5.png","assets/games/fgo/sr/6.png",
                            "assets/games/fgo/sr/7.png", "assets/games/fgo/sr/8.png","assets/games/fgo/sr/9.png",
                            "assets/games/fgo/sr/10.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐️⭐️";
          break;

          default :
          const results1 = ["assets/games/fgo/r/1.png","assets/games/fgo/r/2.png","assets/games/fgo/r/3.png",
                            "assets/games/fgo/r/4.png","assets/games/fgo/r/5.png","assets/games/fgo/r/6.png",
                            "assets/games/fgo/r/7.png","assets/games/fgo/r/8.png","assets/games/fgo/r/9.png",
                            "assets/games/fgo/r/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️⭐️⭐️";
          break;

        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/fgo/ssr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アルトリア";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "玉藻";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "スカサハ=スカディ";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "諸葛孔明";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ジャンヌ・ダルク";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ギルガメッシュ";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "イシュタル";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "紫式部";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "イスカンダル";
          break;
          case "http://localhost:3000/assets/games/fgo/ssr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "謎のヒロインX";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エミヤ";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "セイバーオルタ";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ネロクラウディウス";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "浅上藤乃";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "巴御前";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ゴルゴーン";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヘラクレス";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ランスロット";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ナイチンゲール(サンタ)";
          break;
          case "http://localhost:3000/assets/games/fgo/sr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ニトクリス";
          break;
          case "http://localhost:3000/assets/games/fgo/r/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エウリュアレ";
          break;
          case "http://localhost:3000/assets/games/fgo/r/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "クーフーリン";
          break;
          case "http://localhost:3000/assets/games/fgo/r/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "清姫";
          break;
          case "http://localhost:3000/assets/games/fgo/r/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "メドゥーサ";
          break;
          case "http://localhost:3000/assets/games/fgo/r/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "パラケルスス";
          break;
          case "http://localhost:3000/assets/games/fgo/r/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ベディヴィエール";
          break;
          case "http://localhost:3000/assets/games/fgo/r/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "メディア";
          break;
          case "http://localhost:3000/assets/games/fgo/r/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "呂布奉先";
          break;
          case "http://localhost:3000/assets/games/fgo/r/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ブーディカ";
          break;
          case "http://localhost:3000/assets/games/fgo/r/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "赤兎馬";
          break;
        };
      });
    }
  });
});