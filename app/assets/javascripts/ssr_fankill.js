$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const fankill1 = document.getElementById('fankill');
      const fankill2 = document.getElementById('side-fankill');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      fankill1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/fankill/fankill-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'fankill-gacha-btn2');
      });

      fankill2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/fankill/fankill-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'fankill-gacha-btn2');
      });

      $(document).on('mousedown', '#fankill-gacha-btn2', function(){
        var btn = document.getElementById('fankill-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#fankill-gacha-btn2', function(){
        var btn = document.getElementById('fankill-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#fankill-gacha-btn2', function(){

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

        const results6 = ["assets/games/fankill/physics/1.png","assets/games/fankill/physics/2.png","assets/games/fankill/physics/3.png",
                          "assets/games/fankill/physics/4.png","assets/games/fankill/physics/5.png","assets/games/fankill/physics/6.png",
                          "assets/games/fankill/physics/7.png","assets/games/fankill/physics/8.png","assets/games/fankill/physics/9.png",
                          "assets/games/fankill/physics/10.png","assets/games/fankill/physics/11.png","assets/games/fankill/physics/12.png",
                          "assets/games/fankill/physics/13.png","assets/games/fankill/magic/1.png","assets/games/fankill/magic/2.png",
                          "assets/games/fankill/magic/3.png","assets/games/fankill/magic/4.png","assets/games/fankill/magic/5.png",
                          "assets/games/fankill/magic/6.png","assets/games/fankill/magic/7.png","assets/games/fankill/magic/8.png",
                          "assets/games/fankill/magic/9.png","assets/games/fankill/magic/10.png"
                        ];
          const n6 = Math.floor(Math.random()*results6.length);
          document.getElementById('gacha-result2').src = results6[n6];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️⭐️🌈";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/fankill/physics/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アスカロン";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "フォルカス";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ムラマサ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "シユウ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アフロディーテ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "リットゥ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ダーインスレイヴ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "シタ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ハルパー";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ゲイボルグ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/11.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "青龍偃月刀";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/12.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "シェキナー";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/13.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "与一";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "グリモワール";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ヴァナルガンド";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "芭蕉扇";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ブリューナク";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ケラウノス";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アスクレピオス";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ケーリュケイオン";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "カドケウス";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ミストルティン";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "フライシュッツ";
          break;
        };
      });
    }
  });
});