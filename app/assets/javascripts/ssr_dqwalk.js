$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const dqwalk1 = document.getElementById('dqwalk');
      const dqwalk2 = document.getElementById('side-dqwalk');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      dqwalk1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/dqwalk/dqwalk-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'dqwalk-gacha-btn2');
      });

      dqwalk2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/dqwalk/dqwalk-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'dqwalk-gacha-btn2');
      });

      $(document).on('mousedown', '#dqwalk-gacha-btn2', function(){
        var btn = document.getElementById('dqwalk-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#dqwalk-gacha-btn2', function(){
        var btn = document.getElementById('dqwalk-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#dqwalk-gacha-btn2', function(){

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

        const results1 = ["assets/games/dqwalk/ssr/1.png","assets/games/dqwalk/ssr/2.png","assets/games/dqwalk/ssr/3.png",
                          "assets/games/dqwalk/ssr/4.png","assets/games/dqwalk/ssr/5.png","assets/games/dqwalk/ssr/6.png",
                          "assets/games/dqwalk/ssr/7.png","assets/games/dqwalk/ssr/8.png","assets/games/dqwalk/ssr/9.png",
                          "assets/games/dqwalk/ssr/10.png","assets/games/dqwalk/ssr/11.png","assets/games/dqwalk/ssr/12.png",
                          "assets/games/dqwalk/ssr/13.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result2').src = results1[n1];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️🌈";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/dqwalk/ssr/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ロトのつるぎ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "聖盾騎士のオノ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "キラーピアス";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ラーミアの杖";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "聖女のこん";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "メタスラのやり";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "黄竜のツメ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ボルケーノウィップ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "カンダタトマホーク";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "勇者の盾";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/11.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "聖女のティアラ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/12.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "マッスルボディ";
          break;
          case "http://localhost:3000/assets/games/dqwalk/ssr/13.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "書聖のはかま";
          break;
        };
      });
    }
  });
});