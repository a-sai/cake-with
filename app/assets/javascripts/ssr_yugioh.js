$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const yugioh1 = document.getElementById('yugioh');
      const yugioh2 = document.getElementById('side-yugioh');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      yugioh1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/yugioh/yugioh-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'yugioh-gacha-btn2');
      });

      yugioh2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/yugioh/yugioh-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'yugioh-gacha-btn2');
      });

      $(document).on('mousedown', '#yugioh-gacha-btn2', function(){
        var btn = document.getElementById('yugioh-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#yugioh-gacha-btn2', function(){
        var btn = document.getElementById('yugioh-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#yugioh-gacha-btn2', function(){

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

        const results1 = ["assets/games/yugioh/ur/1.png","assets/games/yugioh/ur/2.png","assets/games/yugioh/ur/3.png",
                          "assets/games/yugioh/ur/4.png","assets/games/yugioh/ur/5.png","assets/games/yugioh/ur/6.png",
                          "assets/games/yugioh/ur/7.png","assets/games/yugioh/ur/8.png","assets/games/yugioh/ur/9.png",
                          "assets/games/yugioh/ur/10.png","assets/games/yugioh/ur/11.png","assets/games/yugioh/ur/12.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result2').src = results1[n1];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "⭐️🌈UR🌈⭐️";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/yugioh/ur/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "デュナミス・ヴァルキリア";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "混沌の黒魔術師";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "サイバー・ドラゴン";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "カオス・ソルジャー";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "青眼の究極竜";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "竜騎士ブラック・マジシャン・ガール";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ブラック・ローズ・ドラゴン";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "氷結界の龍 ブリューナク";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "予想GUY";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "融合解除";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/11.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "鎖付きブーメラン";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/12.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "万能地雷グレイモヤ";
          break;
        };
      });
    }
  });
});