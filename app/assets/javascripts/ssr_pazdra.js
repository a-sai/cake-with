$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const pazdra1 = document.getElementById('pazdra');
      const pazdra2 = document.getElementById('side-pazdra');
      const Image = 'gacha-result2';
      const rality = 'show-rality2';
      const description = 'show-description2';

      pazdra1.addEventListener('click',()=>{
        document.getElementById(Image).src='/images/games/pazdra/pazdra-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'pazdra-gacha-btn2');
      });

      pazdra2.addEventListener('click',()=>{
        document.getElementById(Image).src='/images/games/pazdra/pazdra-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn2').attr('id', 'pazdra-gacha-btn2');
      });

      $(document).on('mousedown', '#pazdra-gacha-btn2', function(){
        var btn = document.getElementById('pazdra-gacha-btn2');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#pazdra-gacha-btn2', function(){
        var btn = document.getElementById('pazdra-gacha-btn2');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#pazdra-gacha-btn2', function(){

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

        const results1 = ["/images/games/pazdra/ssr/1.png","/images/games/pazdra/ssr/2.png","/images/games/pazdra/ssr/3.png",
                          "/images/games/pazdra/ssr/4.png","/images/games/pazdra/ssr/5.png","/images/games/pazdra/ssr/6.png",
                          "/images/games/pazdra/ssr/7.png","/images/games/pazdra/ssr/8.png","/images/games/pazdra/ssr/9.png",
                          "/images/games/pazdra/ssr/10.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result2').src = results1[n1];
          var h1 = document.getElementById("show-rality2");
          h1.textContent = "🌈⭐️⭐️⭐️⭐️⭐️⭐️⭐️🌈";

        const gachaResult = document.getElementById('gacha-result2').src;
        switch (gachaResult) {
          case "http://18.180.186.71/images/games/pazdra/ssr/1.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "レムゥ";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/2.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ノルザ";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/3.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "アルジェ";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/4.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ファスカ";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/5.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "ネレ";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/6.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "龍刀・蛇骨姫";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/7.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "龍刀・薄霧";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/8.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "龍刀・九斬公";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/9.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "龍刀・我乱童子";
          break;
          case "http://18.180.186.71/images/games/pazdra/ssr/10.png":
          var h1 = document.getElementById("show-description2");
          h1.textContent = "龍刀・宙天丸";
          break;
        };
      });
    }
  });
});