$(document).on('turbolinks:load', function() {

  const randomList1 = ["assets/games/slide/1.png","assets/games/slide/2.png","assets/games/slide/3.png",
                      "assets/games/slide/4.png","assets/games/slide/5.png","assets/games/slide/6.png",
                      "assets/games/slide/7.png","assets/games/slide/8.png","assets/games/slide/9.png",
                      "assets/games/slide/10.png","assets/games/slide/11.png","assets/games/slide/12.png"
                  ];
  const num1 = Math.floor(Math.random() * randomList1.length);
  document.getElementById("top-image").src = randomList1[num1];

  const randomList2 = ["assets/games/gacha/1.png","assets/games/gacha/2.png","assets/games/gacha/3.png",
                      "assets/games/gacha/4.png","assets/games/gacha/5.png","assets/games/gacha/6.png"
                  ];
  const num2 = Math.floor(Math.random() * randomList2.length);
  document.getElementById("gacha-result").src = randomList2[num2];

  $(function showIcons(){
    const off = document.getElementById('button');
    const top = 'change-top';
    const gacha1 = 'gacha1';
    const gacha2 = 'gacha2';
    const item1 = 'menu-item1';

    off.addEventListener('mousedown',()=>{
      document.getElementById(top).classList.add('off');
      document.getElementById(gacha1).classList.add('p1');
      document.getElementById(gacha2).classList.add('p2');
      document.getElementById(item1).innerText = "↓ ゲームを選んでね！";
    });

    off.addEventListener('mouseup',()=>{
      document.getElementById(top).classList.add('off');
      document.getElementById(gacha1).classList.add('p1');
      document.getElementById(gacha2).classList.add('p2');
      document.getElementById(item1).innerText = "↓ ゲームを選んでね！";
    });

    off.addEventListener('click',()=>{
      document.getElementById(top).classList.add('off');
      document.getElementById(gacha1).classList.add('p1');
      document.getElementById(gacha2).classList.add('p2');
      document.getElementById(item1).innerText = "↓ ゲームを選んでね！";
    });
  });

  $(function changeTopImage(){

    const Image = 'top-image';
    const fadeSpeed = 3000;
    const item2 = 'menu-item2';
    const pyon = 'pyonpyon';
    const grablu = document.getElementById('grablu');
    const shadowverse = document.getElementById('shadowverse');
    const priconne = document.getElementById('priconne');
    const fankill = document.getElementById('fankill');
    const fgo = document.getElementById('fgo');
    const pazdra = document.getElementById('pazdra');
    const monst = document.getElementById('monst');
    const dqwalk = document.getElementById('dqwalk');
    const yugioh = document.getElementById('yugioh');
    const feh = document.getElementById('feh');

    $(function(){
      $(Image).animate({
        opacity:'1'},fadeSpeed);
    });

    grablu.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/grablu-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });
    
    shadowverse.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/shadowverse-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

    priconne.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/priconne-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

    fankill.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/fankill-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

    fgo.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/fgo-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

    pazdra.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/pazdra-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

    monst.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/monst-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

    dqwalk.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/dqwalk-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

    yugioh.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/yugioh-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

    feh.addEventListener('click',()=>{
      document.getElementById(Image).src='assets/games/top-image/feh-title.png';
      document.getElementById(item2).innerText = "↑ 遊びたいガチャを選ぼう！ ↑";
      document.getElementById(item2).classList.add(pyon);
    });

  });

});