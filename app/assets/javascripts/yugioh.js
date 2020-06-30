$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const yugioh1 = document.getElementById('yugioh');
      const yugioh2 = document.getElementById('side-yugioh');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      yugioh1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/yugioh/yugioh-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'yugioh-gacha-btn');
      });

      yugioh2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/yugioh/yugioh-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'yugioh-gacha-btn');
      });

      $(document).on('mousedown', '#yugioh-gacha-btn', function(){
        var btn = document.getElementById('yugioh-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#yugioh-gacha-btn', function(){
        var btn = document.getElementById('yugioh-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#yugioh-gacha-btn', function(){

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
          const results4 = ["assets/games/yugioh/ur/1.png","assets/games/yugioh/ur/2.png","assets/games/yugioh/ur/3.png",
                            "assets/games/yugioh/ur/4.png","assets/games/yugioh/ur/5.png","assets/games/yugioh/ur/6.png",
                            "assets/games/yugioh/ur/7.png","assets/games/yugioh/ur/8.png","assets/games/yugioh/ur/9.png",
                            "assets/games/yugioh/ur/10.png","assets/games/yugioh/ur/11.png","assets/games/yugioh/ur/12.png"
                          ];
            const n4 = Math.floor(Math.random()*results4.length);
            document.getElementById('gacha-result').src = results4[n4];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️🌈UR🌈⭐️";
          break;

          case 3:
          const results3 = ["assets/games/yugioh/sr/1.png","assets/games/yugioh/sr/2.png","assets/games/yugioh/sr/3.png",
                            "assets/games/yugioh/sr/4.png", "assets/games/yugioh/sr/5.png","assets/games/yugioh/sr/6.png",
                            "assets/games/yugioh/sr/7.png","assets/games/yugioh/sr/8.png","assets/games/yugioh/sr/9.png",
                            "assets/games/yugioh/sr/10.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "SR!!";
          break;

          case 2:
          const results2 = ["assets/games/yugioh/r/1.png","assets/games/yugioh/r/2.png","assets/games/yugioh/r/3.png",
                            "assets/games/yugioh/r/4.png","assets/games/yugioh/r/5.png","assets/games/yugioh/r/6.png",
                            "assets/games/yugioh/r/7.png","assets/games/yugioh/r/8.png","assets/games/yugioh/r/9.png",
                            "assets/games/yugioh/r/10.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "R!";
          break;

          default:
          const results1 = ["assets/games/yugioh/n/1.png","assets/games/yugioh/n/2.png","assets/games/yugioh/n/3.png",
                            "assets/games/yugioh/n/4.png","assets/games/yugioh/n/5.png","assets/games/yugioh/n/6.png",
                            "assets/games/yugioh/n/7.png","assets/games/yugioh/n/8.png","assets/games/yugioh/n/9.png",
                            "assets/games/yugioh/n/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "N";
          break;
        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/yugioh/ur/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "デュナミス・ヴァルキリア";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "混沌の黒魔術師";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "サイバー・ドラゴン";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カオス・ソルジャー";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "青眼の究極竜";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "竜騎士ブラック・マジシャン・ガール";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ブラック・ローズ・ドラゴン";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "氷結界の龍 ブリューナク";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "予想GUY";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "融合解除";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/11.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "鎖付きブーメラン";
          break;
          case "http://localhost:3000/assets/games/yugioh/ur/12.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "万能地雷グレイモヤ";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "デーモンの召喚";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "グリーン・ガジェット";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レッド・ガジェット";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "イエロー・ガジェット";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "天翔の竜騎士ガイア";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "氷結界の龍 グングニール";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "非常食";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "光の援軍";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マジカルシルクハット";
          break;
          case "http://localhost:3000/assets/games/yugioh/sr/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "フリッグのリンゴ";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ギガ・ガガギゴ";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ジェネクス・コントローラー";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "貫ガエル";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "粋カエル";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "裏ガエル";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "子型ペンギン";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "星屑のきらめき";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "進撃の帝王";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "星屑の残光";
          break;
          case "http://localhost:3000/assets/games/yugioh/r/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "立ちはだかる強敵";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アイツ";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ソイツ";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "コイツ";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ドイツ";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "魔法のランプ";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "女王の影武者";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "7";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カオスの儀式";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シューティング・スター";
          break;
          case "http://localhost:3000/assets/games/yugioh/n/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "スターゲート";
          break;
        };
      });
    }
  });
});