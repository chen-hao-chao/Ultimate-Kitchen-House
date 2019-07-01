var game = new Phaser.Game(900, 450, Phaser.AUTO, "canvas");
$("#fixed_block").hide();//hide the scoreboard in the beginning
game.state.add("menu", menuState);
game.state.add("load", loadState);
game.state.add("play", playState);
game.state.add("select", selectState);
game.state.add("about", aboutState);
game.state.add("win", winState);
game.state.start("menu");