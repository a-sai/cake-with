$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const shadowverse1 = document.getElementById('shadowverse');
      const shadowverse2 = document.getElementById('side-shadowverse');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      shadowverse1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/shadowverse/shadowverse-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'shadowverse-gacha-btn2');
      });

      shadowverse2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/shadowverse/shadowverse-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'shadowverse-gacha-btn2');
      });

      $(document).on('mousedown', '#shadowverse-gacha-btn2', function(){
        var btn = document.getElementById('shadowverse-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#shadowverse-gacha-btn2', function(){
        var btn = document.getElementById('shadowverse-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#shadowverse-gacha-btn2', function(){

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

        const results1 = ["assets/games/shadowverse/legend/l_f_1.png","assets/games/shadowverse/legend/l_f_2.png","assets/games/shadowverse/legend/l_f_3.png",
                          "assets/games/shadowverse/legend/l_f_4.png", "assets/games/shadowverse/legend/l_f_5.png","assets/games/shadowverse/legend/l_f_6.png",
                          "assets/games/shadowverse/legend/l_f_7.png","assets/games/shadowverse/legend/l_f_8.png","assets/games/shadowverse/legend/l_nf_1.png",
                          "assets/games/shadowverse/legend/l_nf_2.png","assets/games/shadowverse/legend/l_nf_3.png","assets/games/shadowverse/legend/l_nf_4.png",
                          "assets/games/shadowverse/legend/l_nf_5.png","assets/games/shadowverse/legend/l_nf_6.png","assets/games/shadowverse/legend/l_nf_7.png",
                          "assets/games/shadowverse/legend/l_nf_8.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result2').src = results1[n1];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "⭐️🌈レジェンドレア🌈⭐️";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "始祖の大狼・オムニス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "レヴィオンの英雄・アルベール";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "蒼の反逆者・テトラ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "蒼海の主・ネプチューン";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "紫紺の抵抗者・エンネア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "真紅の抗戦者・モノ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "清純なる祈り・エイラ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ラグナアウェイク";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "至高の戦神・オーディン";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アイギスシールド・アテナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "鋼鉄と大地の神";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "至高神・ゼウス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "母なる君";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "闇の翼・オリヴィエ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "神託の大天使・ガブリエル";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "機械神";
          break;
        };
      });
    }
  });
});