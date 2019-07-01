# SS_FINAL

## 進度表
(已完成)
- 5/28 架設規範

(計畫完成)
- 6/04 進度45%(...待商榷)
- 6/11 進度90%(...待商榷)
- 6/18 發表

## 架構
- canvas size：900*450
- game state: menu -> load -> play -> win -> back to menu ...
<img src="https://i.imgur.com/aMZyQ05.png" width="356px" height="105px">

## 分支規範
- 一個state，一個js
- 負責該項目的人可將主要state切成若干塊，或是插入分支的state
- 舉例而言：play可以再細分為 1.選角色 2.開始遊戲 3.分數計算...，menu可以加入更多項目，像是 1.操作說明 2.UI...
- 重要：在更動state的時候需要更改兩個地方，1. index.html記得include新的state的js檔(記得include一定要放在game.js之前，不然會出錯) 2. 在game.js當中新增state，舉例來說：game.state.add("win", winState);如下圖：
- <img src="https://i.imgur.com/KX90NAL.png" width="50%" height="50%">
- <img src="https://i.imgur.com/ei2iORa.png" width="50%" height="50%">
NOTE: 盡量使用不同state去切割，因為每個state當中可以重複變數，舉例來說：menu當中的this.score，會和play當中的this.score不一樣。

## 備註
- 在放素材時請分門別類，路徑是assets/(類別)/game state/(素材檔案)，舉例來說：我在play state當中要放入一張圖，我要放在assets/image/play/player.png
- 請確實作好註解，概述這段程式是做什麼的(e.g. //game settings)
- 如果非不得已需要宣告全域變數，請打開index.html，看到註解global variables declaration，在底下宣告，避免大家全域變數重複使用。
- <img src="https://i.imgur.com/sLMee7f.png" width="50%" height="50%">
- 需要merge request請在群組說~我會盡快merge~感謝

## 素材登記(size, frame, function)
- background_play.png: 900*450
- sink.png: 874*390
- boom.png: 128*128
- flag.png: 43*50, 4 frames
- player1.png: 284*264, ([0,1], right_wait)([2,3], left_wait)([4,5,6,7,8,9],rightwalk')([10,11,12,13,14,15],leftwalk')([16,17], right_jump)([18,19], left_jump)([20,21,22,23], right_die)([24,25,26,27], left_die)
- player2.png: 284*276
- player3.png: 284*275

## 人森郝男
![](https://i.imgur.com/N30Kvh3.png)
加油好嗎？各位