var loadState = {
    preload: function(){
       //loading text
        var load_txt = game.add.text(game.width/2, game.height/2-40, 'loading...', {font: '13px Orbitron', fill: '#666666'});
        load_txt.anchor.setTo(0.5, 0.5);
        
        //display progress bar
        var progressBar_in = game.add.sprite(game.width/2-96, game.height/2, 'progressBar_in');
        progressBar_in.anchor.setTo(0, 0.5);
        game.load.setPreloadSprite(progressBar_in);
        
        //image
        //progress bar
        var progressBar = game.add.image(game.width/2, game.height/2, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);

        //background image
        game.load.image('background1', 'assets/image/play/background.png');
        game.load.spritesheet('background2', 'assets/image/play/background2.png',900,450);
        game.load.image('background3', 'assets/image/play/background3.png');
        game.load.image('background_select', 'assets/image/play/background_select.png');
        game.load.image('background_circle1', 'assets/image/play/background_circle1.png');
        game.load.image('background_circle2', 'assets/image/play/background_circle2.png');
        game.load.image('background_circle3', 'assets/image/play/background_circle3.png');
        game.load.image('diamond', 'assets/image/play/diamond.png');
    
        //ground image
        game.load.image('ground', 'assets/image/play/ground.png');
        game.load.image('sink1_1', 'assets/image/play/sinks/sink1_body1.png');
        game.load.image('sink1_2', 'assets/image/play/sinks/sink1_body2.png');
        game.load.image('sink1_3', 'assets/image/play/sinks/sink1_body3.png');
        game.load.image('sink2_1', 'assets/image/play/sinks/sink2_body1.png');
        game.load.image('sink2_2', 'assets/image/play/sinks/sink2_body2.png');
        game.load.image('sink3_1', 'assets/image/play/sinks/sink3_body1.png');
        
        //character's image
        game.load.atlas('player1', 'assets/image/play/players/player1.png', 'assets/image/play/players/player1.json');
        game.load.atlas('player2', 'assets/image/play/players/player2.png', 'assets/image/play/players/player2.json');
        game.load.atlas('player3', 'assets/image/play/players/player3.png', 'assets/image/play/players/player3.json');
        game.load.atlas('party_box', 'assets/image/play/party_box/party_box_sprite_sheet.png', 'assets/image/play/party_box/party_box_sprite_sheet.json');
        
        //tools----------------------
        //flag
        game.load.spritesheet('flag', 'assets/image/play/flag.png',43,50);
        //bow -> 0
        game.load.image('arrow', 'assets/image/play/bow/arrow.png');
        game.load.spritesheet('bow_body1', 'assets/image/play/bow/bow_body1.png',218,219);
        game.load.image('bow_body2', 'assets/image/play/bow/bow_body2.png');
        game.load.image('bow_all', 'assets/image/play/bow/bow_all.png');
        //moving_stair -> 1
        game.load.image('moving_stair', 'assets/image/play//moving_stair/moving_stair.png');
        game.load.image('moving_stair_bar', 'assets/image/play/moving_stair/moving_stair_bar.png');
        //door -> 2
        game.load.image('door', 'assets/image/play/door/door.png');
        game.load.image('door_stair', 'assets/image/play/door/door_stair.png');
        game.load.spritesheet('door_effect', 'assets/image/play/door/door_effect.png', 204,204);
        //rotating wood -> 3
        game.load.image('rotating_wood', 'assets/image/play/rotating_wood.png');
        //wood -> 4
        game.load.image('wood', 'assets/image/play/wood.png');
        //deck -> 5
        game.load.image('deck_body1', 'assets/image/play/deck/deck_body1.png');
        game.load.spritesheet('deck_body2', 'assets/image/play/deck/deck_body2.png',108,94);
        game.load.image('deck_all', 'assets/image/play/deck/deck_all.png');
        //saw_tooth -> 6
        game.load.image('saw_tooth_plateform', 'assets/image/play/saw_tooth/saw_tooth_platform.png');
        game.load.spritesheet('saw_tooth', 'assets/image/play/saw_tooth/saw_tooth.png',94,82);
        game.load.image('saw_tooth_all', 'assets/image/play/saw_tooth/saw_tooth_all.png');
        //stair -> 7
        game.load.image('stair_body1', 'assets/image/play/stair/stair_body1.png');
        game.load.image('stair_body2', 'assets/image/play/stair/stair_body2.png');
        game.load.image('stair_all', 'assets/image/play/stair/stair_all.png');
        //----------------------
        //boom
        game.load.spritesheet('boom', 'assets/image/play/boom.png',128,128);
        //explode
        game.load.spritesheet('explode', 'assets/image/play/explode.png',125,144);
        //player's profile pic
        game.load.image('player1_pic', 'assets/image/play/profile/player1.png');
        game.load.image('player2_pic', 'assets/image/play/profile/player2.png');
        game.load.image('player3_pic', 'assets/image/play/profile/player3.png');
        //load particle image
        game.load.image('pixel', 'assets/image/play/pixel.png');
        //load audio
        game.load.audio('die1', 'assets/audio/die/Die1.mp3');
        game.load.audio('die2', 'assets/audio/die/Die2.mp3');
        game.load.audio('die3', 'assets/audio/die/Die3.mp3');
        game.load.audio('jump1', 'assets/audio/jump/Jump1.mp3');
        game.load.audio('win1', 'assets/audio/win/Win1.mp3');
        game.load.audio('win2', 'assets/audio/win/Win2.mp3');
        game.load.audio('play_bgm_1', 'assets/music/play_BGM_1.mp3');
        game.load.audio('play_bgm_2', 'assets/music/play_BGM_2.mp3');
    },
    create: function(){
        if(mode == 0) game.state.start('select');
        else game.state.start('select');
        //game.state.start('play');
    }
}