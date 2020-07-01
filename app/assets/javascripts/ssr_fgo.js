$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const fgo1 = document.getElementById('fgo');
      const fgo2 = document.getElementById('side-fgo');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      fgo1.addEventListener('click',()=>{
        document.getElementById(Image).src='/images/games/fgo/fgo-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'fgo-gacha-btn2');
      });

      fgo2.addEventListener('click',()=>{
        document.getElementById(Image).src='/images/games/fgo/fgo-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'fgo-gacha-btn2');
      });

      $(document).on('mousedown', '#fgo-gacha-btn2', function(){
        var btn = document.getElementById('fgo-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#fgo-gacha-btn2', function(){
        var btn = document.getElementById('fgo-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#fgo-gacha-btn2', function(){

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

        const results1 = ["/images/games/fgo/ssr/1.png","/images/games/fgo/ssr/2.png","/images/games/fgo/ssr/3.png",
                          "/images/games/fgo/ssr/4.png","/images/games/fgo/ssr/5.png","/images/games/fgo/ssr/6.png",
                          "/images/games/fgo/ssr/7.png","/images/games/fgo/ssr/8.png","/images/games/fgo/ssr/9.png",
                          "/images/games/fgo/ssr/10.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result2').src = results1[n1];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️🌈";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://18.180.186.71/images/games/fgo/ssr/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アルトリア";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "玉藻";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "スカサハ=スカディ";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "諸葛孔明";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ジャンヌ・ダルク";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ギルガメッシュ";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "イシュタル";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "紫式部";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "イスカンダル";
          break;
          case "http://18.180.186.71/images/games/fgo/ssr/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "謎のヒロインX";
          break;
        };
      });
    }
  });
});