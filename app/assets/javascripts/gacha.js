$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      $(document).on('mousedown', '#gacha-btn', function(){
        var btn = document.getElementById('gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#gacha-btn', function(){
        var btn = document.getElementById('gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#gacha-btn', function(){

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

        const results1 = ["assets/games/gacha/pin/1.png","assets/games/gacha/pin/2.png","assets/games/gacha/pin/3.png",
                          "assets/games/gacha/pin/4.png", "assets/games/gacha/pin/5.png","assets/games/gacha/pin/6.png",
                          "assets/games/gacha/pin/7.png","assets/games/gacha/pin/8.png","assets/games/gacha/pin/9.png",
                          "assets/games/gacha/pin/10.png"
                        ];
        const n1 = Math.floor(Math.random()*results1.length);
        document.getElementById('gacha-result').src = results1[n1];
        var h1 = document.getElementById("show-rality");
        h1.textContent = "⭐️🌈GOTCHA🌈⭐️";

        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/gacha/pin/1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン&ムック";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン&ムック";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ムック";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン&ムック";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/9.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン&ムック";
          break;
          case "http://localhost:3000/assets/games/gacha/pin/10.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガチャピン";
          break;
        };
      });
    }
  });
});