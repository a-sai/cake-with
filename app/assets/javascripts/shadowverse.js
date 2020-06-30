$(document).on('turbolinks:load', function(){
  $(function(){

    'use strict';
    {
      const shadowverse1 = document.getElementById('shadowverse');
      const shadowverse2 = document.getElementById('side-shadowverse');
      const Image = 'gacha-result';
      const rality = 'show-rality';
      const description = 'show-description';

      shadowverse1.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/shadowverse/shadowverse-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'shadowverse-gacha-btn');
      });

      shadowverse2.addEventListener('click',()=>{
        document.getElementById(Image).src='assets/games/shadowverse/shadowverse-gacha.png';
        document.getElementById(rality).innerText = "";
        document.getElementById(description).innerText = "";
        $('.gacha-btn').attr('id', 'shadowverse-gacha-btn');
      });

      $(document).on('mousedown', '#shadowverse-gacha-btn', function(){
        var btn = document.getElementById('shadowverse-gacha-btn');
        btn.classList.add('pressed')
      });

      $(document).on('mouseup', '#shadowverse-gacha-btn', function(){
        var btn = document.getElementById('shadowverse-gacha-btn');
        btn.classList.remove('pressed')
      });

      $(document).on('click', '#shadowverse-gacha-btn', function(){

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
          const results4 = ["assets/games/shadowverse/legend/l_f_1.png","assets/games/shadowverse/legend/l_f_2.png","assets/games/shadowverse/legend/l_f_3.png",
                            "assets/games/shadowverse/legend/l_f_4.png", "assets/games/shadowverse/legend/l_f_5.png","assets/games/shadowverse/legend/l_f_6.png",
                            "assets/games/shadowverse/legend/l_f_7.png","assets/games/shadowverse/legend/l_f_8.png","assets/games/shadowverse/legend/l_nf_1.png",
                            "assets/games/shadowverse/legend/l_nf_2.png","assets/games/shadowverse/legend/l_nf_3.png","assets/games/shadowverse/legend/l_nf_4.png",
                            "assets/games/shadowverse/legend/l_nf_5.png","assets/games/shadowverse/legend/l_nf_6.png","assets/games/shadowverse/legend/l_nf_7.png",
                            "assets/games/shadowverse/legend/l_nf_8.png"
                          ];
            const n4 = Math.floor(Math.random()*results4.length);
            document.getElementById('gacha-result').src = results4[n4];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "⭐️🌈レジェンドレア🌈⭐️";
          break;
  
          case 3:
          const results3 = ["assets/games/shadowverse/gold/g_f_1.png","assets/games/shadowverse/gold/g_f_2.png","assets/games/shadowverse/gold/g_f_3.png",
                            "assets/games/shadowverse/gold/g_f_4.png","assets/games/shadowverse/gold/g_f_5.png","assets/games/shadowverse/gold/g_f_6.png",
                            "assets/games/shadowverse/gold/g_f_7.png","assets/games/shadowverse/gold/g_f_8.png","assets/games/shadowverse/gold/g_s_1.png",
                            "assets/games/shadowverse/gold/g_s_2.png","assets/games/shadowverse/gold/g_s_3.png","assets/games/shadowverse/gold/g_s_4.png",
                            "assets/games/shadowverse/gold/g_s_5.png","assets/games/shadowverse/gold/g_s_6.png","assets/games/shadowverse/gold/g_s_7.png",
                            "assets/games/shadowverse/gold/g_s_8.png","assets/games/shadowverse/gold/g_a_1.png","assets/games/shadowverse/gold/g_a_2.png",
                            "assets/games/shadowverse/gold/g_a_3.png"
                          ];
            const n3 = Math.floor(Math.random()*results3.length);
            document.getElementById('gacha-result').src = results3[n3];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "ゴールドレア!!!";
          break;
  
          case 2:
          const results2 = ["assets/games/shadowverse/silver/s_f_1.png","assets/games/shadowverse/silver/s_f_2.png","assets/games/shadowverse/silver/s_f_3.png",
                            "assets/games/shadowverse/silver/s_f_4.png","assets/games/shadowverse/silver/s_f_5.png","assets/games/shadowverse/silver/s_f_6.png",
                            "assets/games/shadowverse/silver/s_f_7.png","assets/games/shadowverse/silver/s_f_8.png","assets/games/shadowverse/silver/s_s_1.png",
                            "assets/games/shadowverse/silver/s_s_2.png","assets/games/shadowverse/silver/s_s_3.png","assets/games/shadowverse/silver/s_s_4.png",
                            "assets/games/shadowverse/silver/s_s_5.png","assets/games/shadowverse/silver/s_s_6.png","assets/games/shadowverse/silver/s_s_7.png",
                            "assets/games/shadowverse/silver/s_s_8.png","assets/games/shadowverse/silver/s_a_1.png","assets/games/shadowverse/silver/s_a_2.png",
                            "assets/games/shadowverse/silver/s_a_3.png","assets/games/shadowverse/silver/s_a_4.png","assets/games/shadowverse/silver/s_a_5.png",
                            "assets/games/shadowverse/silver/s_a_6.png","assets/games/shadowverse/silver/s_a_7.png","assets/games/shadowverse/silver/s_a_8.png"
                          ];
            const n2 = Math.floor(Math.random()*results2.length);
            document.getElementById('gacha-result').src = results2[n2];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "シルバーレア!!";
          break;
  
          default:
          const results1 = ["assets/games/shadowverse/bronze/b_f_1.png","assets/games/shadowverse/bronze/b_f_2.png","assets/games/shadowverse/bronze/b_f_3.png",
                            "assets/games/shadowverse/bronze/b_f_4.png","assets/games/shadowverse/bronze/b_f_5.png","assets/games/shadowverse/bronze/b_f_6.png",
                            "assets/games/shadowverse/bronze/b_f_7.png","assets/games/shadowverse/bronze/b_f_8.png","assets/games/shadowverse/bronze/b_s_1.png",
                            "assets/games/shadowverse/bronze/b_s_2.png","assets/games/shadowverse/bronze/b_s_3.png","assets/games/shadowverse/bronze/b_s_4.png",
                            "assets/games/shadowverse/bronze/b_s_5.png","assets/games/shadowverse/bronze/b_s_6.png","assets/games/shadowverse/bronze/b_s_7.png",
                            "assets/games/shadowverse/bronze/b_s_8.png","assets/games/shadowverse/bronze/b_a_1.png","assets/games/shadowverse/bronze/b_a_2.png",
                            "assets/games/shadowverse/bronze/b_a_3.png"
                          ];
            const n1 = Math.floor(Math.random()*results1.length);
            document.getElementById('gacha-result').src = results1[n1];
            var h1 = document.getElementById("show-rality");
            h1.textContent = "ブロンズレア!";
          break;
        };
        const gachaResult = document.getElementById('gacha-result').src;
        switch (gachaResult) {
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "始祖の大狼・オムニス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レヴィオンの英雄・アルベール";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "蒼の反逆者・テトラ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "蒼海の主・ネプチューン";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "紫紺の抵抗者・エンネア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "真紅の抗戦者・モノ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "清純なる祈り・エイラ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_f_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ラグナアウェイク";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "至高の戦神・オーディン";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アイギスシールド・アテナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "鋼鉄と大地の神";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "至高神・ゼウス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "母なる君";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "闇の翼・オリヴィエ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "神託の大天使・ガブリエル";
          break;
          case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "機械神";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_f_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "豪風のリノセウス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_f_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "栄光のフロントガードジェネラル";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_f_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エレメントシャーマン・ライリー";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_f_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "カラミティドラゴン";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_f_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "酒呑童子";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_f_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "堕落の漆黒・アザゼル";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_f_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "報復の白き刃・アニエス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_f_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ドールスローター・フィア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_s_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アリアの旋風";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_s_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レヴィオンの正義";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_s_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "真実の掟";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_s_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "フェニックスハウル";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_s_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "絆の共振";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_s_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "悪夢の始まり";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_s_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "崇拝の実現";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_s_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "破壊の歌声";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_a_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "魔道具専門店";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_a_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "竜の財宝";
          break;
          case "http://localhost:3000/assets/games/shadowverse/gold/g_a_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "黄金の鐘";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_f_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ブルームスピリット";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_f_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "秘伝の抜刀者";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_f_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "クラシカルソーサラー";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_f_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "深緑龍の軍師";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_f_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "冥守の祈祷師・ティティ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_f_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ヴァンパイアスレイヤー・ルシウス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_f_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "フェザーフォルクパニッシャー";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_f_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "暗雲の巫女・エネス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_s_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ナチュラル・マナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_s_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ブレイブ・マナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_s_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "エレメンタル・マナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_s_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ワイルド・マナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_s_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "リヴァイヴ・マナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_s_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "インサニティ・マナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_s_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ジャスティス・マナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_s_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "テクノロジー・マナ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_a_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "フォレスト・コア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_a_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "グローリー・コア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_a_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ウィズダム・コア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_a_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ドラゴニック・コア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_a_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ソウル・コア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_a_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ブラッド・コア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_a_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "セイント・コア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/silver/s_a_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "オリジン・コア";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_f_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ハンマーモンキー";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_f_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "レヴィオンの見習い・ルネス";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_f_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "マジカルラット";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_f_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ガジェットマーメイド";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_f_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "座敷童";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_f_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "アーマードバット";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_f_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "温情のラビットヒーラー";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_f_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "ドリルヘッジホッグ";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_s_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "自然の導き";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_s_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "二刀流";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_s_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "式神の使役";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_s_4.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "オルカの滝のぼり";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_s_5.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "百鬼夜行";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_s_6.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "魅惑の一撃";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_s_7.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "平等なる裁き";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_s_8.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "破壊の愉悦";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_a_1.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "魔女の大釜";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_a_2.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "詠唱：誓いの炎";
          break;
          case "http://localhost:3000/assets/games/shadowverse/bronze/b_a_3.png":
          var h1 = document.getElementById("show-description");
          h1.textContent = "詠唱：白翼の湖";
          break;
        };
      });
    }
  });
});