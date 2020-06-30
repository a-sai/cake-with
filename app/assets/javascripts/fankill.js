$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const fankill1 = document.getElementById('fankill');
      const fankill2 = document.getElementById('side-fankill');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      fankill1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/fankill/fankill-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'fankill-gacha-btn');
      });

      fankill2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/fankill/fankill-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'fankill-gacha-btn');
      });

      $(document).on('mousedown', '#fankill-gacha-btn', function(){
        var btn = document.getElementById('fankill-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#fankill-gacha-btn', function(){
        var btn = document.getElementById('fankill-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#fankill-gacha-btn', function(){

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

        if (n < 0.16){
          var gr = 6;
        }else if (n < 0.32){
          var gr = 6;
        }else if (n < 0.48){
          var gr = 4;
        }else if (n < 0.64){
          var gr = 3;
        }else if (n < 0.8){
          var gr = 2;
        }else{
          var gr = 1;
        };

        switch(gr){

          case 6:
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
            document.getElementById('gacha-result').src = results6[n6];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "王姫型";
          break;

          case 5:
          const results5 = ["assets/games/fankill/physics/1.png","assets/games/fankill/physics/2.png","assets/games/fankill/physics/3.png",
                            "assets/games/fankill/physics/4.png","assets/games/fankill/physics/5.png","assets/games/fankill/physics/6.png",
                            "assets/games/fankill/physics/7.png","assets/games/fankill/physics/8.png","assets/games/fankill/physics/9.png",
                            "assets/games/fankill/physics/10.png","assets/games/fankill/physics/11.png","assets/games/fankill/physics/12.png",
                            "assets/games/fankill/physics/13.png","assets/games/fankill/magic/1.png","assets/games/fankill/magic/2.png",
                            "assets/games/fankill/magic/3.png","assets/games/fankill/magic/4.png","assets/games/fankill/magic/5.png",
                            "assets/games/fankill/magic/6.png","assets/games/fankill/magic/7.png","assets/games/fankill/magic/8.png",
                            "assets/games/fankill/magic/9.png","assets/games/fankill/magic/10.png"
                          ];
            const n5 = Math.floor(Math.random()*results5.length);
            document.getElementById('gacha-result').src = results5[n5];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "命姫型";
          break;

          case 4:
          const results4 = ["assets/games/fankill/physics/1.png","assets/games/fankill/physics/2.png","assets/games/fankill/physics/3.png",
                            "assets/games/fankill/physics/4.png","assets/games/fankill/physics/5.png","assets/games/fankill/physics/6.png",
                            "assets/games/fankill/physics/7.png","assets/games/fankill/physics/8.png","assets/games/fankill/physics/9.png",
                            "assets/games/fankill/physics/10.png","assets/games/fankill/physics/11.png","assets/games/fankill/physics/12.png",
                            "assets/games/fankill/physics/13.png","assets/games/fankill/magic/1.png","assets/games/fankill/magic/2.png",
                            "assets/games/fankill/magic/3.png","assets/games/fankill/magic/4.png","assets/games/fankill/magic/5.png",
                            "assets/games/fankill/magic/6.png","assets/games/fankill/magic/7.png","assets/games/fankill/magic/8.png",
                            "assets/games/fankill/magic/9.png","assets/games/fankill/magic/10.png"
                          ];
            const n4 = Math.floor(Math.random()*results4.length);
            document.getElementById('gacha-result').src = results4[n4];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "守姫型";
          break;

          case 3:
          const results3 = ["assets/games/fankill/magic/1.png","assets/games/fankill/magic/2.png",
                            "assets/games/fankill/magic/3.png","assets/games/fankill/magic/4.png","assets/games/fankill/magic/5.png",
                            "assets/games/fankill/magic/6.png","assets/games/fankill/magic/7.png","assets/games/fankill/magic/8.png",
                            "assets/games/fankill/magic/9.png","assets/games/fankill/magic/10.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "魔姫型";
          break;

          case 2:
          const results2 = ["assets/games/fankill/physics/1.png","assets/games/fankill/physics/2.png","assets/games/fankill/physics/3.png",
                            "assets/games/fankill/physics/4.png","assets/games/fankill/physics/5.png","assets/games/fankill/physics/6.png",
                            "assets/games/fankill/physics/7.png","assets/games/fankill/physics/8.png","assets/games/fankill/physics/9.png",
                            "assets/games/fankill/physics/10.png","assets/games/fankill/physics/11.png","assets/games/fankill/physics/12.png",
                            "assets/games/fankill/physics/13.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "攻姫型";
          break;

          default :
          const results1 = ["assets/games/fankill/physics/1.png","assets/games/fankill/physics/2.png","assets/games/fankill/physics/3.png",
                            "assets/games/fankill/physics/4.png","assets/games/fankill/physics/5.png","assets/games/fankill/physics/6.png",
                            "assets/games/fankill/physics/7.png","assets/games/fankill/physics/8.png","assets/games/fankill/physics/9.png",
                            "assets/games/fankill/physics/10.png","assets/games/fankill/physics/11.png","assets/games/fankill/physics/12.png",
                            "assets/games/fankill/physics/13.png","assets/games/fankill/magic/1.png","assets/games/fankill/magic/2.png",
                            "assets/games/fankill/magic/3.png","assets/games/fankill/magic/4.png","assets/games/fankill/magic/5.png",
                            "assets/games/fankill/magic/6.png","assets/games/fankill/magic/7.png","assets/games/fankill/magic/8.png",
                            "assets/games/fankill/magic/9.png","assets/games/fankill/magic/10.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "匠姫型";
          break;

        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/fankill/physics/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アスカロン";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "フォルカス";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ムラマサ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シユウ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アフロディーテ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "リットゥ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ダーインスレイヴ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シタ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ハルパー";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ゲイボルグ";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/11.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "青龍偃月刀";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/12.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "シェキナー";
          break;
          case "http://localhost:3000/assets/games/fankill/physics/13.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "与一";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "グリモワール";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヴァナルガンド";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "芭蕉扇";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ブリューナク";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ケラウノス";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アスクレピオス";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ケーリュケイオン";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カドケウス";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ミストルティン";
          break;
          case "http://localhost:3000/assets/games/fankill/magic/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "フライシュッツ";
          break;
        };
      });
    }
  });
});