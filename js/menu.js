const CON_ITEM = 3;
var menu_audio;
var menuState = {
    preload: function(){
        //load images...
        game.load.image('progressBar_in', 'assets/image/menu/progress_bar_in.png');
        game.load.image('progressBar', 'assets/image/menu/progress_bar.png');
        game.load.image('logo', 'assets/image/menu/logo.png');
        game.load.image('say_l', 'assets/image/menu/say_l.png');
        game.load.image('say_r', 'assets/image/menu/say_r.png');
        game.load.image('ground', 'assets/image/menu/ground.png');
        game.load.spritesheet('NPC1', 'assets/image/menu/player1_NPC.png', 81,262);
        game.load.spritesheet('NPC2', 'assets/image/menu/player2_NPC.png', 81,274);
        game.load.spritesheet('NPC3', 'assets/image/menu/player3_NPC.png', 81,273);
        game.load.audio('BGM', 'assets/music/menu_BGM.mp3');
    },
    create: function(){
        //game settings
        game.stage.backgroundColor = '#ffffbb';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;
        //musics

        //ground
        this.ground = game.add.sprite(game.width/2, game.height, 'ground');
        this.ground.anchor.setTo(0.5, 0.5);
        //1
        this.NPC1 = game.add.sprite(150, 300, 'NPC1');
        this.NPC1.anchor.setTo(0.5, 0.5);
        this.NPC1.animations.add('run_NPC1', [0,1,2,3,4,5,6,7], 8, true);
        this.NPC1.animations.play('run_NPC1');
        //2
        this.NPC2 = game.add.sprite(670, 288, 'NPC2');
        this.NPC2.anchor.setTo(0.5, 0.5);
        this.NPC2.animations.add('run_NPC2', [0,1,2,3,4,5,6,7], 9, true);
        this.NPC2.animations.play('run_NPC2');
        //3
        this.NPC3 = game.add.sprite(770, 289, 'NPC3');
        this.NPC3.anchor.setTo(0.5, 0.5);
        this.NPC3.animations.add('run_NPC3', [0,1,2,3,4,5,6,7], 11, true);
        this.NPC3.animations.play('run_NPC3');
        
        //keys 
        this.control_pos = 0;
        this.control_txt = ["muti-player", "single-player", "about"];
        this.cursor = game.input.keyboard.createCursorKeys();
        var key_down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        key_down.onDown.add(this.control_down, this);
        var key_up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        key_up.onDown.add(this.control_up, this);
        var key_enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key_enter.onDown.add(this.control_enter, this);
        //layout
        this.logo = game.add.sprite(game.width/2, 200, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);
        this.logo.scale.setTo(0.5, 0.5);
        this.logo_tween = game.add.tween(this.logo.scale).to({x:0.55, y:0.55}, 100).yoyo(true);
        game.time.events.loop(1500, function(){this.logo_tween.start();},this);
        
        //say_l
        this.say_l = game.add.sprite(250, 130, 'say_l');
        this.say_l.anchor.setTo(0.5, 0.5);
        this.say_l.scale.setTo(0.75, 0.75);
        this.say_l_tween = game.add.tween(this.say_l.scale).to({x:0.8, y:0.8}, 100).yoyo(true);
        this.say_l_txt = game.add.text(250, 130, this.control_txt[0], {font: '13px Orbitron', fill: '#000000'});
        this.say_l_txt.anchor.setTo(0.5, 0.5);
        //say_r
        this.say_r = game.add.sprite(650, 90, 'say_r');
        this.say_r.anchor.setTo(0.5, 0.5);
        this.say_r.scale.setTo(0.7, 0.7);
        this.say_r.alpha = 0.0;
        this.say_r_tween = game.add.tween(this.say_r).to({alpha:1.0}, 1000);
        this.say_r_tween_b = game.add.tween(this.say_r).to({alpha:0.0}, 1000);
        this.say_r_txt = game.add.text(650, 90, "Press ENTER", {font: '10px Orbitron', fill: '#000000'});
        this.say_r_txt.anchor.setTo(0.5, 0.5);
        this.say_r_txt.alpha = 0.0;
        this.say_r_txt_tween = game.add.tween(this.say_r_txt).to({alpha:1.0}, 1000);
        this.say_r_txt_tween_b = game.add.tween(this.say_r_txt).to({alpha:0.0}, 1000);
        game.time.events.add(1500, function(){this.say_r_tween.start();this.say_r_txt_tween.start();},this);
        game.time.events.add(9500, function(){this.say_r_tween_b.start();this.say_r_txt_tween_b.start();},this);

        menu_audio = game.add.audio('BGM');
        menu_audio.loop = true;
        menu_audio.play();

    },
    update: function(){
    },
    control_down: function(){
        this.control_pos = (this.control_pos == CON_ITEM-1)? 0 : this.control_pos+1;
        this.say_l_txt.text = this.control_txt[this.control_pos];
        this.say_l_tween.start();
    },
    control_up: function(){
        this.control_pos = (this.control_pos == 0)? CON_ITEM-1 : this.control_pos-1;
        this.say_l_txt.text = this.control_txt[this.control_pos];
        this.say_l_tween.start();
    },
    control_enter: function (){
        menu_audio.stop();
        if(this.control_pos == 0){mode = 0;game.state.start('load');}
        else if(this.control_pos == 1){mode=1;game.state.start('load');}
        else {game.state.start('about');}
    }
}

