
var winState = {
    preload: function(){
        game.load.image('ground', 'assets/image/menu/ground.png');
        game.load.spritesheet('NPC1', 'assets/image/menu/player1_NPC.png', 81, 262);
        game.load.spritesheet('NPC2', 'assets/image/menu/player2_NPC.png', 81, 274);
        game.load.spritesheet('NPC3', 'assets/image/menu/player3_NPC.png', 81, 273);
        game.load.image('winGround', 'assets/image/play/win_background.png');
    },
    create: function(){console.log("sss");
        this.winGround = game.add.sprite(450, 225, 'winGround')
        this.winGround.anchor.setTo(0.5, 0.5);
        this.winGround.scale.setTo(0.8, 0.65);
        
        this.NPC1 = game.add.sprite(-200, -200, 'NPC1');
        this.NPC1.anchor.setTo(0.5, 0.5);
        this.NPC1.animations.add('run_NPC1', [0, 1, 2, 3, 4, 5, 6, 7], 8, true);
        this.NPC1.animations.play('run_NPC1');
        this.NPC2 = game.add.sprite(-200, -200, 'NPC2');
        this.NPC2.anchor.setTo(0.5, 0.5);
        this.NPC2.animations.add('run_NPC2', [0, 1, 2, 3, 4, 5, 6, 7], 9, true);
        this.NPC2.animations.play('run_NPC2');
        this.NPC3 = game.add.sprite(-200, -200, 'NPC3');
        this.NPC3.anchor.setTo(0.5, 0.5);
        this.NPC3.animations.add('run_NPC3', [0, 1, 2, 3, 4, 5, 6, 7], 11, true);
        this.NPC3.animations.play('run_NPC3');

        var key_enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key_enter.onDown.add(this.control_enter, this);
    },
    update: function(){
        if(WINPLAYER == 'player1'){
            this.NPC1.x = 450;
            this.NPC1.y = 230;
            this.winText = this.add.text(290, 70, 'Player.1 Win !!!', { fontSize: '48px', fill: '#ffffff' });
        } else if(WINPLAYER == 'player2'){
            this.NPC2.x = 450;
            this.NPC2.y = 230;
            this.winText = this.add.text(290, 70, 'Player.2 Win !!!', { fontSize: '48px', fill: '#ffffff' });
        } else if(WINPLAYER == 'player3'){
            this.NPC3.x = 450;
            this.NPC3.y = 230;
            this.winText = this.add.text(290, 70, 'Player.3 Win !!!', { fontSize: '48px', fill: '#ffffff' });
        }
    },
    control_enter: function () {
        //game.state.start('menu');
        location.reload();
    }
}