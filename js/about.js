var aboutState = {
    preload: function(){
        game.load.image('aboutGround', 'assets/image/play/about_background.png');
    },
    create: function(){console.log("sss");
        this.aboutGround = game.add.sprite(450, 225, 'aboutGround')
        this.aboutGround.anchor.setTo(0.5, 0.5);
        this.aboutGround.scale.setTo(0.5, 0.52);

        var key_enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key_enter.onDown.add(this.control_enter, this);
    },
    update: function(){
    },
    control_enter: function () {
        game.state.start('menu');
    }
}