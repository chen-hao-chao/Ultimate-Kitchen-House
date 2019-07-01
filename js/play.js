const SPRITE_SPEED_X = 200;
const SPRITE_SPEED_Y = 400;
const SPRITE_ANCHOR = 0.5;

const SPRITE_X = 100;
const SPRITE_Y = 100;

const WIN_WIDTH = 400;

const PLAYER_NUM = 3;
const TOOL_NUM = 5;
const TOOL_MAX = 10;

//game state
const BOX_OPEN = 0;
const PLACE= 1;
const BOX_CLOSE = 2;
const GO = 3;
const SCORE = 4;

//CNT is the timer
var CNT = 0
var aiCNT=0;
var win1_audio;
var win2_audio;

var ai_player_state = {
    stop:0,
    moving:1
}

var ai1State = ai_player_state.stop;
var ai2State = ai_player_state.stop;
var RETURN = false;
var OVER = false;

function fixed_block_hide_all(timer) {
    $("#fixed_block").hide(timer);
    RETURN = true;
}

var playState = {
    preload: function(){
        ai1State = ai_player_state.stop;
        ai2State = ai_player_state.stop;
        RETURN = false;
        OVER = false;
        CNT = 0;
        //console.log("PLAY");
    },
    create: function () {
        if(classes == 1){
            //create background
            this.background = game.add.tileSprite(0, 0, 900, 450, 'background1');
            //create ground
            this.sink = game.add.group();
            this.sink.enableBody = true;
            var sink1_1 = this.sink.create(50, 310, 'sink1_1');
            sink1_1.body.immovable = true;
            sink1_1.scale.setTo(0.8,0.8);
            var sink1_2 = this.sink.create(35, 300, 'sink1_2');
            sink1_2.body.immovable = true;
            sink1_2.scale.setTo(0.8,0.8);
            var sink1_3 = game.add.sprite(100, 245, 'sink1_3');
            sink1_3.scale.setTo(0.8,0.8);
            var sink2_1 = this.sink.create(418, 425, 'sink2_1');
            sink2_1.body.immovable = true;
            sink2_1.scale.setTo(0.8,0.8);
            var sink2_2 = this.sink.create(400, 415, 'sink2_2');
            sink2_2.body.immovable = true;
            sink2_2.scale.setTo(0.8,0.8);
            var sink3_1 = this.sink.create(710, 150, 'sink3_1');
            sink3_1.body.immovable = true;
            sink3_1.scale.setTo(0.8,0.8);
            //flag
            this.flag = game.add.sprite(850, 105, 'flag');
            this.flag.scale.setTo(0.8,0.8);
            this.flag.animations.add('blow', [0,1,2,3], 12, true);
            this.flag.animations.play('blow');
            this.flag.enableBody=true;
            game.physics.arcade.enable(this.flag);
        }
        else if(classes == 2){
            //create background
            this.background = game.add.sprite(0, 0, 'background2');
            this.background.animations.add('light', [0,1,2,3,2,1,0], 12, false);
            game.time.events.loop(2300, function(){this.background.animations.play('light');},this);
            //create ground
            this.sink = game.add.group();
            this.sink.enableBody = true;
            var sink1_1 = this.sink.create(50, 385, 'wood');
            sink1_1.body.immovable = true;
            sink1_1.scale.setTo(0.8,0.4);
            var sink1_2 = this.sink.create(55, 400, 'wood');
            sink1_2.body.immovable = true;
            sink1_2.scale.setTo(0.05,1.0);
            var sink1_3 = game.add.sprite(255, 400, 'wood');
            sink1_3.scale.setTo(0.05,1.0);
            var sink2_1 = this.sink.create(418, 425, 'wood');
            sink2_1.body.immovable = true;
            sink2_1.scale.setTo(0.6,0.8);
            var sink2_2 = this.sink.create(400, 415, 'sink2_2');
            sink2_2.body.immovable = true;
            sink2_2.scale.setTo(0.8,0.8);
            var wood1 = this.sink.create(750, 150, 'wood');
            wood1.body.immovable = true;
            wood1.scale.setTo(0.2,0.2);
            var wood2 = this.sink.create(750, 250, 'wood');
            wood2.body.immovable = true;
            wood2.scale.setTo(0.2,0.2);
            var wood3 = this.sink.create(750, 350, 'wood');
            wood3.body.immovable = true;
            wood3.scale.setTo(0.2,0.2);

            //flag
            this.flag = game.add.sprite(770, 110, 'flag');
            this.flag.scale.setTo(0.8,0.8);
            this.flag.animations.add('blow', [0,1,2,3], 12, true);
            this.flag.animations.play('blow');
            this.flag.enableBody=true;
            game.physics.arcade.enable(this.flag);

        }
        else{
            //create background
            this.background = game.add.tileSprite(0, 0, 900, 450, 'background3');
            //create ground
            this.sink = game.add.group();
            this.sink.enableBody = true;
            var sink1_1 = this.sink.create(50, 310, 'sink1_1');
            sink1_1.body.immovable = true;
            sink1_1.scale.setTo(0.8,0.8);
            var sink1_2 = this.sink.create(35, 300, 'sink1_2');
            sink1_2.body.immovable = true;
            sink1_2.scale.setTo(0.8,0.8);
            var sink1_3 = game.add.sprite(100, 245, 'sink1_3');
            sink1_3.scale.setTo(0.8,0.8);
            var sink2_1 = this.sink.create(418, 425, 'sink2_1');
            sink2_1.body.immovable = true;
            sink2_1.scale.setTo(0.8,0.8);
            var sink2_2 = this.sink.create(400, 415, 'sink2_2');
            sink2_2.body.immovable = true;
            sink2_2.scale.setTo(0.8,0.8);
            var sink3_1 = this.sink.create(710, 150, 'sink3_1');
            sink3_1.body.immovable = true;
            sink3_1.scale.setTo(0.8,0.8);
            //flag
            this.flag = game.add.sprite(850, 105, 'flag');
            this.flag.scale.setTo(0.8,0.8);
            this.flag.animations.add('blow', [0,1,2,3], 12, true);
            this.flag.animations.play('blow');
            this.flag.enableBody=true;
            game.physics.arcade.enable(this.flag);
        }
        //game state
        this.game_state = BOX_OPEN;

        //the value is true when someone reach the finishing point
        this.finished = [];
        this.finished[0] = false; //[false, false, false];
        this.finished[1] = false;
        this.finished[2] = false;
        //score stores every player's score
        this.score = [];
        this.score[0] = 0;
        this.score[1] = 0;
        this.score[2] = 0;

        //create player1
        this.player1 = game.add.sprite(SPRITE_X, SPRITE_Y, 'player1');
        this.player1.enableBody = true;
        this.player1.anchor.setTo(SPRITE_ANCHOR, SPRITE_ANCHOR);
        this.player1.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(this.player1);
        this.player1.body.gravity.y = 950;
        this.player1.facingLeft = false;
        this.player1.alive = true;
        this.player1.animations.add('rightwait', ['1'], 0, true);
        this.player1.animations.add('rightwalk', ['2','3','4','5','6','7'], 12, true);
        this.player1.animations.add('rightjump', ['8','9'], 8, false);
        this.player1.animations.add('rightdie', ['10','11','12','13'], 8, false);
        this.player1.animations.add('leftwait', ['14'], 0, true);
        this.player1.animations.add('leftwalk', ['15','16','17','18','19','20'], 12, true);
        this.player1.animations.add('leftjump', ['21','22'], 8, false);
        this.player1.animations.add('leftdie', ['23','24','25','26'], 8, false);
        this.score[0] = 0;//the first player1's score is 0
        game.physics.arcade.enable(this.player1);
        this.player1.play('rightwait');
        //create player2
        this.player2 = game.add.sprite(SPRITE_X+5, SPRITE_Y, 'player2');
        this.player2.enableBody = true;
        this.player2.anchor.setTo(SPRITE_ANCHOR, SPRITE_ANCHOR);
        this.player2.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(this.player2);
        this.player2.body.gravity.y = 950;
        this.player2.facingLeft = false;
        this.player2.alive = true;
        this.player2.animations.add('rightwait', ['1'], 0, true);
        this.player2.animations.add('rightwalk', ['2','3','4','5','6','7'], 12, true);
        this.player2.animations.add('rightjump', ['8','9'], 8, false);
        this.player2.animations.add('rightdie', ['10','11','12','13'], 8, false);
        this.player2.animations.add('leftwait', ['14'], 0, true);
        this.player2.animations.add('leftwalk', ['15','16','17','18','19','20'], 12, true);
        this.player2.animations.add('leftjump', ['21','22'], 8, false);
        this.player2.animations.add('leftdie', ['23','24','25','26'], 8, false);
        this.score[1] = 0;//the first player2's score is 0
        game.physics.arcade.enable(this.player2);
        this.player2.play('rightwait');
        //create player3
        this.player3 = game.add.sprite(SPRITE_X+10, SPRITE_X, 'player3');
        this.player3.enableBody = true;
        this.player3.anchor.setTo(SPRITE_ANCHOR, SPRITE_ANCHOR);
        this.player3.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(this.player3);
        this.player3.body.gravity.y = 950;
        this.player3.facingLeft = false;
        this.player3.alive = true;
        this.player3.animations.add('rightwait', ['1'], 0, true);
        this.player3.animations.add('rightwalk', ['2','3','4','5','6','7'], 12, true);
        this.player3.animations.add('rightjump', ['8','9'], 8, false);
        this.player3.animations.add('rightdie', ['10','11','12','13'], 8, false);
        this.player3.animations.add('leftwait', ['14'], 0, true);
        this.player3.animations.add('leftwalk', ['15','16','17','18','19','20'], 12, true);
        this.player3.animations.add('leftjump', ['21','22'], 8, false);
        this.player3.animations.add('leftdie', ['23','24','25','26'], 8, false);
        this.score[2] = 0;//the first player3's score is 0
        game.physics.arcade.enable(this.player3);
        this.player3.play('rightwait');

        //press space to jump
        this.jump_btn1 = this.input.keyboard.addKey(Phaser.KeyCode.UP);
        this.jump_btn2 = this.input.keyboard.addKey(Phaser.KeyCode.W);
        this.jump_btn3 = this.input.keyboard.addKey(Phaser.KeyCode.I);
        
        //left and right btn
        this.cursors1 = [this.input.keyboard.addKey(Phaser.KeyCode.LEFT),this.input.keyboard.addKey(Phaser.KeyCode.RIGHT)];
        this.cursors2 = [this.input.keyboard.addKey(Phaser.KeyCode.A),this.input.keyboard.addKey(Phaser.KeyCode.D)];
        this.cursors3 = [this.input.keyboard.addKey(Phaser.KeyCode.J),this.input.keyboard.addKey(Phaser.KeyCode.L)];

        // tools ---------------
        //bows (*)
        this.bow = [];
        this.bow.idx = 0;
        this.bow.counter = 0;
        for(var i=0;i<TOOL_MAX;i++) this.bow[i] = this.create_bow(0,0);
        //moving_stairs (*)
        this.moving_stair = [];
        this.moving_stair.idx = 0;
        this.moving_stair.counter = 0;
        for(var i=0;i<TOOL_MAX;i++) this.moving_stair[i] = this.create_moving_stair(0,0);
        //door
        this.door = [];
        this.door.idx = 0;
        for(var i=0;i<TOOL_MAX;i++) this.door[i] = this.create_door(0,0);
        //rotating_wood
        this.rotating_wood = [];
        this.rotating_wood.idx = 0;
        for(var i=0;i<TOOL_MAX;i++) this.rotating_wood[i] = this.create_rotating_wood(0,0);
        //wood
        this.wood = [];
        this.wood.idx = 0;
        for(var i=0;i<TOOL_MAX;i++) this.wood[i] = this.create_wood(0,0);
        //deck(*)
        this.deck = [];
        this.deck.idx = 0;
        this.deck.counter = 0;
        for(var i=0;i<TOOL_MAX;i++) this.deck[i] = this.create_deck(0,0);
        //saw_tooth (*)
        this.saw_tooth = [];
        this.saw_tooth.idx = 0;
        this.saw_tooth.counter = 0;
        for(var i=0;i<TOOL_MAX;i++) this.saw_tooth[i] = this.create_saw_tooth(0,0);
        //stairs
        this.stair = [];
        this.stair.idx = 0;
        for(var i=0;i<TOOL_MAX;i++) this.stair[i] = this.create_stair(0,0);

        //effects
        this.boom = game.add.sprite(0, 0, 'boom');
        var ani = this.boom.animations.add('boom', [0,1,2,3,4,5,6,7,8,9,10,11], 11, false);
        ani.onComplete.add(function (){this.boom.visible = false;}, this);
        this.boom.visible = false;
        this.boom.y = 420;
        this.boom.anchor.setTo(0.5,0.5);

        //particle effect
        this.emitter1 = game.add.emitter(422, 320, 15);
        this.emitter1.makeParticles('pixel');
        this.emitter1.setYSpeed(-150, 150);
        this.emitter1.setXSpeed(-50, 50);
        this.emitter1.setScale(1, 0, 1, 0, 800);
        this.emitter1.gravity = 500;
        this.emitter2 = game.add.emitter(422, 320, 15);
        this.emitter2.makeParticles('pixel');
        this.emitter2.setYSpeed(-150, 150);
        this.emitter2.setXSpeed(-50, 50);
        this.emitter2.setScale(1, 0, 1, 0, 800);
        this.emitter2.gravity = 500;
        this.emitter3 = game.add.emitter(422, 320, 15);
        this.emitter3.makeParticles('pixel');
        this.emitter3.setYSpeed(-150, 150);
        this.emitter3.setXSpeed(-50, 50);
        this.emitter3.setScale(1, 0, 1, 0, 800);
        this.emitter3.gravity = 500;
        //sound effect
        this.die1_audio = game.add.audio('die1');
        this.die2_audio = game.add.audio('die2');
        this.die3_audio = game.add.audio('die3');
        this.jump1_audio = game.add.audio('jump1');
        win1_audio = game.add.audio('win1');
        win2_audio = game.add.audio('win2');

        //timer
        game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

        this.boom.anchor.setTo(0.5,0.5);
        //party_box
        this.pbox = game.add.sprite(450, 225, 'party_box');
        this.pbox.enableBody = true;
        this.pbox.anchor.setTo(0.5, 0.5);
        this.pbox.scale.setTo(2, 2);
        game.physics.arcade.enable(this.pbox);
        var anim = this.pbox.animations.add('open', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'], 12, false);
        anim.play('open');anim.onComplete.add(this.toPlace, this);
        
        this.tool = [];

        //tool list
        this.tool_list = [];
        this.tool_num = PLAYER_NUM;
    },
    //state transition...
    toPlace: function(){
        this.game_state = PLACE;
        // tool
        var TOOLS = ['bow_all', 'moving_stair', 'door', 'rotating_wood', 'wood', 'deck_all', 'saw_tooth_all', 'stair_all'];

        var random_num0 = Math.floor((Math.random() * 8));
        this.tool[0] = game.add.sprite(350,150, TOOLS[random_num0]);
        this.tool[0].scale.setTo(0.3,0.3);
        this.tool[0].anchor.setTo(0.5,0.5);
        this.tool[0].inputEnabled = true;
        this.tool[0].input.enableDrag(true);
        this.tool[0].events.onInputDown.add(()=>{ 
            this.pbox.visible = false;
            this.tool_num--;
            for(var i = 0;i < TOOL_NUM ;i++){this.tool[i].alpha = 0.3;}
        }, this);
        this.tool[0].events.onInputUp.add(()=>this.put_tools(random_num0, 0), this);

        this.tool[1] = game.add.sprite(410,250, TOOLS[(random_num0+1)%8]);
        this.tool[1].scale.setTo(0.3,0.3);
        this.tool[1].anchor.setTo(0.5,0.5);
        this.tool[1].inputEnabled = true;
        this.tool[1].input.enableDrag(true);
        this.tool[1].events.onInputDown.add(()=>{
            this.pbox.visible = false;
            this.tool_num--;
            for(var i = 0;i < TOOL_NUM ;i++){this.tool[i].alpha = 0.3;}
        }, this);
        this.tool[1].events.onInputUp.add(()=>this.put_tools((random_num0+1)%8, 1), this);

        this.tool[2] = game.add.sprite(490,150, TOOLS[(random_num0+2)%8]);
        this.tool[2].scale.setTo(0.3,0.3);
        this.tool[2].anchor.setTo(0.5,0.5);
        this.tool[2].inputEnabled = true;
        this.tool[2].input.enableDrag(true);
        this.tool[2].events.onInputDown.add(()=>{
            this.pbox.visible = false;
            this.tool_num--;
            for(var i = 0;i < TOOL_NUM ;i++){this.tool[i].alpha = 0.3;}
        }, this);
        this.tool[2].events.onInputUp.add(()=>this.put_tools((random_num0+2)%8, 2), this);

        this.tool[3] = game.add.sprite(360,300, TOOLS[(random_num0+3)%8]);
        this.tool[3].scale.setTo(0.3,0.3);
        this.tool[3].anchor.setTo(0.5,0.5);
        this.tool[3].inputEnabled = true;
        this.tool[3].input.enableDrag(true);
        this.tool[3].events.onInputDown.add(()=>{
            this.pbox.visible = false;
            this.tool_num--;
            for(var i = 0;i < TOOL_NUM ;i++){this.tool[i].alpha = 0.3;}
        }, this);
        this.tool[3].events.onInputUp.add(()=>this.put_tools((random_num0+3)%8, 3), this);

        this.tool[4] = game.add.sprite(530,300, TOOLS[(random_num0+4)%8]);
        this.tool[4].scale.setTo(0.3,0.3);
        this.tool[4].anchor.setTo(0.5,0.5);
        this.tool[4].inputEnabled = true;
        this.tool[4].input.enableDrag(true);
        this.tool[4].events.onInputDown.add(()=>{
            this.pbox.visible = false;
            this.tool_num--;
            for(var i = 0;i < TOOL_NUM ;i++){this.tool[i].alpha = 0.3;}
        }, this);
        this.tool[4].events.onInputUp.add(()=>this.put_tools((random_num0+4)%8, 4), this);
    },
    toBoxClose: function(){
        this.game_state = BOX_CLOSE;
        this.pbox.visible = true;
        for(i=0;i<TOOL_NUM;i++){
            this.tool[i].visible = false;
        }
        var anim_close = this.pbox.animations.add('close', ['16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'], 12, false);
        anim_close.play('close');
        anim_close.onComplete.add(this.toGo, this);
    },
    toGo: function(){
        this.game_state = GO;
        this.pbox.visible = false;
        //moving stairs
        for(var i=0;i<this.moving_stair.idx;i++){
            this.moving_stair[i][0].body.velocity.x = 60;
            this.moving_stair[i][0].x = this.moving_stair[i][1].x+61;
        }
        //deck
        for(var i=0;i<this.deck.idx;i++){
            this.deck[i][0].body.velocity.y = 60;
            this.deck[i][1].body.velocity.y = 60;
        }
        //saw_tooth
        for(var i=0;i<this.saw_tooth.idx;i++){
            this.saw_tooth[i][1].body.velocity.x = -60;
            this.saw_tooth[i][1].x = this.saw_tooth[i][0].x+24;
        }
        aiCNT=0;
    },
    toScore: function(){
        this.game_state = SCORE;
        document.getElementById("score_board").innerHTML = "<img class = 'profile_pic' src = './assets/image/play/profile/player1.png'>" + this.score[0] + "<div id='myProgress'><div id='myBar1'></div></div>" + "<img class = 'profile_pic' src = './assets/image/play/profile/player2.png'>" + this.score[1] + "<div id='myProgress'><div id='myBar2'></div></div>" + "<img class = 'profile_pic' src = './assets/image/play/profile/player3.png'>" + this.score[2] + "<div id='myProgress'><div id='myBar3'></div></div>";
        $("#fixed_block").show(300);
        var elem = [];
        elem[0] = document.getElementById("myBar1");
        elem[1] = document.getElementById("myBar2");
        elem[2] = document.getElementById("myBar3");
        var width = [];
        width[0] = 0;
        width[1] = 0;
        width[2] = 0;
        var s = [this.score[0], this.score[1], this.score[2]];
        var id = setInterval(frame, 10);

        function frame() {
            if ((width[0] >= s[0]) && (width[1] >= s[1]) && (width[2] >= s[2])) {
                clearInterval(id);
            }
            for (i = 0; i < 3; i++) {
                if (width[i] >= s[i]||width[i]>=WIN_WIDTH) {
                    continue
                } else {
                    width[i]+=10;
                    elem[i].style.width = width[i] / WIN_WIDTH * 100 + '%';
                }
            }
            if (width[0] >= WIN_WIDTH || width[1] >= WIN_WIDTH || width[2] >= WIN_WIDTH) {
                var winner = 0;
                for (i = 1; i < 3; i++){
                    if (s[i] > s[winner]) {
                        winner = i;
                    }
                }
                WINPLAYER = "player" + (winner + 1);
                OVER = true;
            }
        }
    },
    toBoxOpen: function(){console.log("toBoxOpen");
        this.game_state = BOX_OPEN;
        //initialize
        this.player_initialized(this.player1, 0);
        this.player_initialized(this.player2, 1);
        this.player_initialized(this.player3, 2);
        this.pbox.visible = true;
        var anim = this.pbox.animations.add('open', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'], 12, false);
        anim.play('open');anim.onComplete.add(this.toPlace, this);
    },
    player_initialized:function(player, i){
        //score
        this.finished[i] = false;
        //player initialize
        //player.visible = true;
        player.alive = true;
        player.x = SPRITE_X+i*5;
        player.y = SPRITE_Y;
        player.body.velocity.x = 0;
        player.play('rightwait');
        player.facingLeft = false;
        //tools
        this.tool_num = PLAYER_NUM;
    },
    //put container
    put_tools: function(random_num, idx){
        this.pbox.visible = true;
        var x = game.input.mousePointer.x;
        var y = game.input.mousePointer.y;
        
        if(random_num == 0) this.set_bow(x, y, this.bow.idx++);
        else if(random_num == 1) this.set_moving_stair(x, y, this.moving_stair.idx++);
        else if(random_num == 2) this.set_door(x, y, this.door.idx++);
        else if(random_num == 3) this.set_rotating_wood(x, y, this.rotating_wood.idx++);
        else if(random_num == 4) this.set_wood(x, y, this.wood.idx++);    
        else if(random_num == 5) this.set_deck(x, y, this.deck.idx++); 
        else if(random_num == 6) this.set_saw_tooth(x, y, this.saw_tooth.idx++);
        else if(random_num == 7) this.set_stair(x, y, this.stair.idx++);
        //invisible
        for(var i = 0;i < TOOL_NUM ;i++){this.tool[i].alpha = 1;}
        this.tool[idx].visible = false;
        //tool_list
        this.tool_list[PLAYER_NUM-this.tool_num] = random_num;
        //state
        if(this.tool_num == 0) this.toBoxClose();
    },
    updateCounter: function () {
        if(this.game_state == GO){
            CNT++;
            aiCNT++;
        }
    },
    //bow create function
    create_bow: function(x,y){
        var bow_ = [];
        var body1 = game.add.sprite(x, y+2, 'bow_body1');
        body1.animations.add('bow_shoot', [7,8,9,10,0,1,2,3,4,5,6], 11, true);
        body1.anchor.setTo(0.5, 0.5);
        body1.scale.setTo(0.25, 0.25);
        body1.animations.play('bow_shoot');
        body1.visible = false;
        
        var body2 = game.add.sprite(x, y, 'bow_body2');
        body2.anchor.setTo(0.5, 0.5);
        body2.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(body2);
        body2.body.immovable = true;
        body2.visible = false;
        
        var arrow = game.add.group();
        arrow.enableBody = true;
        for(var i=0;i<10;i++){
            var arrow_ = arrow.create(10, 10, 'arrow');
            arrow_.anchor.setTo(0.5, 0.5);
            arrow_.scale.setTo(0.25, 0.25);
            arrow_.body.velocity.x = -100;
            arrow_.alive = false;
            arrow_.visible = false;
            arrow_.checkWorldBounds = true;
            arrow_.outOfBoundsKill = true;
        }
        bow_[0] = body1;
        bow_[1] = body2;
        bow_[2] = arrow;
        return bow_;
    },
    add_arrow: function(x,y,idx){
        if(this.game_state != GO) return;
        var arrow_;
        for(var i=0;i<5;i++){
            var arrow_temp = this.bow[idx][2].children[i];
            if(arrow_temp.alive == false){
                arrow_ = arrow_temp;
                break;
            }
        }
        if(!arrow_){return;}
        arrow_.reset(x, y);
        arrow_.body.velocity.x = -100;
        arrow_.anchor.setTo(0.5, 0.5);
        arrow_.scale.setTo(0.25, 0.25);
        arrow_.alive = true;
        arrow_.visible = true;
        arrow_.checkWorldBounds = true;
        arrow_.outOfBoundsKill = true;
    },
    set_bow: function(x,y,idx){
        this.bow[idx][0].x = x;
        this.bow[idx][0].y = y+2;
        this.bow[idx][0].visible = true;
        this.bow[idx][1].x = x;
        this.bow[idx][1].y = y;
        this.bow[idx][1].visible = true;
    },
    //door create function
    create_door: function(x,y){
        var door_ = [];
        var door = game.add.sprite(x, y, 'door');
        door.anchor.setTo(0.5, 0.5);
        door.scale.setTo(0.25, 0.25);
        door.visible = false;

        var door_stair = game.add.sprite(x, y+40, 'door_stair');
        door_stair.anchor.setTo(0.5, 0.5);
        door_stair.scale.setTo(0.25, 0.25);
        door_stair.enableBody = true;
        game.physics.arcade.enable(door_stair);
        door_stair.body.immovable = true;
        door_stair.visible = false;

        var door_effect = game.add.sprite(x, y, 'door_effect');
        door_effect.animations.add('door_effect', Phaser.Animation.generateFrameNames(0, 59), 60, true);
        door_effect.anchor.setTo(0.5, 0.5);
        door_effect.scale.setTo(0.25, 0.25);
        door_effect.play('door_effect');
        door_effect.enableBody = true;
        game.physics.arcade.enable(door_effect);
        door_effect.visible = false;
        
        door_[0] = door;
        door_[1] = door_stair;
        door_[2] = door_effect;
        return door_;
    },
    set_door: function(x,y,idx){//console.log("XD");
        this.door[idx][0].x = x;
        this.door[idx][0].y = y;
        this.door[idx][0].visible = true;
        this.door[idx][1].x = x;
        this.door[idx][1].y = y+40;
        this.door[idx][1].visible = true;
        this.door[idx][2].x = x;
        this.door[idx][2].y = y;
        this.door[idx][2].visible = true;
    },


    //moving stairs
    create_moving_stair: function(x,y){
        var moving_stair_ = [];
        var moving_stair = game.add.sprite(x+30, y, 'moving_stair');
        moving_stair.anchor.setTo(0.5, 0.5);
        moving_stair.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(moving_stair);
        moving_stair.body.immovable = true;
        moving_stair.body.velocity.x = 0;
        moving_stair.visible = false;
        var moving_stair_bar = game.add.sprite(x-31, y-3, 'moving_stair_bar');
        moving_stair_bar.scale.setTo(0.25, 0.25);
        moving_stair_bar.visible = false;
        moving_stair_[0] = moving_stair;
        moving_stair_[1] = moving_stair_bar;
        return moving_stair_;
    },
    set_moving_stair: function(x,y,idx){
        this.moving_stair[idx][0].x = x+30;
        this.moving_stair[idx][0].y = y;
        this.moving_stair[idx][0].visible = true;
        this.moving_stair[idx][1].x = x-31;
        this.moving_stair[idx][1].y = y-3;
        this.moving_stair[idx][1].visible = true;
    },
    //rotating wood
    create_rotating_wood: function(x,y){
        var rotating_wood = game.add.sprite(x, y, 'rotating_wood');
        rotating_wood.anchor.setTo(0.5, 0.5);
        rotating_wood.scale.setTo(0.5, 0.5);
        game.physics.arcade.enable(rotating_wood);
        rotating_wood.body.immovable = true;
        rotating_wood.visible = false;
        return rotating_wood;
    },
    set_rotating_wood: function(x,y,idx){
        this.rotating_wood[idx].x = x;
        this.rotating_wood[idx].y = y;
        this.rotating_wood[idx].visible = true;
    },
    
    //wood
    create_wood: function(x,y){
        var wood = game.add.sprite(x, y, 'wood');
        wood.anchor.setTo(0.5, 0.5);
        wood.scale.setTo(0.35, 0.35);
        game.physics.arcade.enable(wood);
        wood.body.immovable = true;
        wood.visible = false;
        return wood;
    },
    set_wood: function(x,y,idx){
        this.wood[idx].x = x;
        this.wood[idx].y = y;
        this.wood[idx].visible = true;
    },
    //deck
    create_deck: function(x,y){
        var deck_ = [];
        var deck_body1 = game.add.sprite(x, y, 'deck_body1');
        deck_body1.anchor.setTo(0.5, 0.5);
        deck_body1.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(deck_body1);
        deck_body1.body.immovable = true;
        deck_body1.body.velocity.y = 0;
        deck_body1.visible = false;

        var deck_body2 = game.add.sprite(x, y+17, 'deck_body2');
        deck_body2.animations.add('deck_body2', [0,1,2,3,4,5], 12, true);
        deck_body2.anchor.setTo(0.5, 0.5);
        deck_body2.scale.setTo(0.25, 0.25);
        deck_body2.animations.play('deck_body2');
        game.physics.arcade.enable(deck_body2);
        deck_body2.body.immovable = true;
        deck_body2.body.velocity.y = 0;
        deck_body2.visible = false;

        deck_[0] = deck_body1;
        deck_[1] = deck_body2;
        return deck_;
    },
    set_deck: function(x,y,idx){
        this.deck[idx][0].x = x;
        this.deck[idx][0].y = y;
        this.deck[idx][0].visible = true;
        this.deck[idx][1].x = x;
        this.deck[idx][1].y = y+17;
        this.deck[idx][1].visible = true;
    },
    //stair
    create_stair: function(x,y){
        var stair_ = [];
        var stair_body2 = game.add.sprite(x, y, 'stair_body2');
        stair_body2.anchor.setTo(0.5, 0.5);
        stair_body2.scale.setTo(0.5, 0.5);
        stair_body2.visible = false;
        
        var stair_body1 = game.add.group();
        stair_body1.enableBody = true;
        
        for(var i=0;i<4;i++){
            var stair_body1_ = stair_body1.create(x-i*18+18, y+i*16.5-38, 'stair_body1');
            stair_body1_.body.immovable = true;
            if(i == 0){
                stair_body1_.anchor.setTo(0.25, 0.5);
                stair_body1_.scale.setTo(0.8, 0.5);
            }else{
                stair_body1_.anchor.setTo(0.5, 0.5);
            stair_body1_.scale.setTo(0.5, 0.5);
            }
        }
        stair_body1.visible = false;

        stair_[0] = stair_body1;
        stair_[1] = stair_body2;
        return stair_;
    },
    set_stair: function(x,y,idx){
        this.stair[idx][0].x = x;
        this.stair[idx][0].y = y;
        this.stair[idx][0].visible = true;
        this.stair[idx][1].x = x;
        this.stair[idx][1].y = y;
        this.stair[idx][1].visible = true;
    },
    //saw_tooth
    create_saw_tooth: function(x,y){
        var saw_tooth_ = [];

        var saw_tooth_plateform = game.add.sprite(x, y, 'saw_tooth_plateform');
        saw_tooth_plateform.anchor.setTo(0.5, 0.5);
        saw_tooth_plateform.scale.setTo(0.4, 0.4);
        game.physics.arcade.enable(saw_tooth_plateform);
        saw_tooth_plateform.body.immovable = true;
        saw_tooth_plateform.visible = false;
        
        var saw_tooth = game.add.sprite(x+24, y-10, 'saw_tooth');
        saw_tooth.animations.add('saw_tooth', [0,1,2], 12, true);
        saw_tooth.anchor.setTo(0.5, 0.5);
        saw_tooth.scale.setTo(0.35, 0.35);
        game.physics.arcade.enable(saw_tooth);
        saw_tooth.body.immovable = true;
        saw_tooth.body.velocity.x = 0;
        saw_tooth.animations.play('saw_tooth');
        saw_tooth.visible = false;

        saw_tooth_[0] = saw_tooth_plateform;
        saw_tooth_[1] = saw_tooth;
        return saw_tooth_;
    },
    set_saw_tooth: function(x,y,idx){
        this.saw_tooth[idx][0].x = x;
        this.saw_tooth[idx][0].y = y;
        this.saw_tooth[idx][0].visible = true;
        this.saw_tooth[idx][1].x = x+24;
        this.saw_tooth[idx][1].y = y-10;
        this.saw_tooth[idx][1].visible = true;
    },
    //---------------------------------------------
    update: function(){
        //tool renew
        if(this.game_state == GO){//console.log(this.bow.counter);
            //bow
            this.bow.counter++;
            if(this.bow.counter == 60){
                this.bow.counter = 0;
                for(var i=0;i<this.bow.idx;i++){
                    this.add_arrow(this.bow[i][0].x, this.bow[i][0].y, i);
                }
            }
            //moving stairs
            this.moving_stair.counter++;
            if(this.moving_stair.counter == 53){
                this.moving_stair.counter = 0;
                for(var i=0;i<this.moving_stair.idx;i++){
                    this.moving_stair[i][0].body.velocity.x *= -1;
                }
            }
            //deck
            this.deck.counter++;
            if(this.deck.counter == 50){
                this.deck.counter = 0;
                for(var i=0;i<this.deck.idx;i++){
                    this.deck[i][0].body.velocity.y *= -1;
                    this.deck[i][1].body.velocity.y *= -1;
                }
            }
            //saw_tooth
            this.saw_tooth.counter++;
            if(this.saw_tooth.counter == 55){
                this.saw_tooth.counter = 0;
                for(var i=0;i<this.saw_tooth.idx;i++){
                    this.saw_tooth[i][1].body.velocity.x *= -1;
                }
            }
            //tool collide
            //bow
            for(var i=0;i<this.bow.idx;i++){
                game.physics.arcade.collide(this.player1, this.bow[i][1]);
                game.physics.arcade.overlap(this.player1, this.bow[i][2], ()=> this.player_die(this.player1), null, this);
                game.physics.arcade.collide(this.player2, this.bow[i][1]);
                game.physics.arcade.overlap(this.player2, this.bow[i][2], ()=> this.player_die(this.player2), null, this);
                game.physics.arcade.collide(this.player3, this.bow[i][1]);
                game.physics.arcade.overlap(this.player3, this.bow[i][2], ()=> this.player_die(this.player3), null, this);
                for (var j = 0; j< this.door.idx; j++) {
                    // game.physics.arcade.collide(this.player, this.door[i][1]);
                    game.physics.arcade.overlap(this.door[j][2], this.bow[i][2], this.change_bow_position, null, this);
                }
            }
            //door
            for(var i=0;i<this.door.idx;i++){
                game.physics.arcade.collide(this.player1, this.door[i][1]);
                game.physics.arcade.overlap(this.player1, this.door[i][2], () => this.player_change_position(i,this.player1), null, this);
                game.physics.arcade.collide(this.player2, this.door[i][1]);
                game.physics.arcade.overlap(this.player2, this.door[i][2], () => this.player_change_position(i,this.player2), null, this);
                game.physics.arcade.collide(this.player3, this.door[i][1]);
                game.physics.arcade.overlap(this.player3, this.door[i][2], () => this.player_change_position(i,this.player3), null, this);
            }
            //moving stair
            for(var i=0;i<this.moving_stair.idx;i++){
                game.physics.arcade.collide(this.player1, this.moving_stair[i][0]);
                game.physics.arcade.collide(this.player2, this.moving_stair[i][0]);
                game.physics.arcade.collide(this.player3, this.moving_stair[i][0]);
                game.physics.arcade.overlap(this.player1, this.moving_stair[i][0],this.pushAway);
                game.physics.arcade.overlap(this.player2, this.moving_stair[i][0],this.pushAway);
                game.physics.arcade.overlap(this.player3, this.moving_stair[i][0],this.pushAway);
            }
            //rotating_wood
            for(var i=0;i<this.rotating_wood.idx;i++){
                game.physics.arcade.collide(this.player1, this.rotating_wood[i]);
                game.physics.arcade.collide(this.player2, this.rotating_wood[i]);
                game.physics.arcade.collide(this.player3, this.rotating_wood[i]);
                game.physics.arcade.overlap(this.player1, this.rotating_wood[i], this.pushAway);
                game.physics.arcade.overlap(this.player2, this.rotating_wood[i], this.pushAway);
                game.physics.arcade.overlap(this.player3, this.rotating_wood[i], this.pushAway);
            }
            //deck
            for(var i=0;i<this.deck.idx;i++){
                game.physics.arcade.collide(this.player1, this.deck[i][0]);
                game.physics.arcade.overlap(this.player1, this.deck[i][1], ()=> this.player_die(this.player1), null, this);
                game.physics.arcade.collide(this.player2, this.deck[i][0]);
                game.physics.arcade.overlap(this.player2, this.deck[i][1], ()=> this.player_die(this.player2), null, this);
                game.physics.arcade.collide(this.player3, this.deck[i][0]);
                game.physics.arcade.overlap(this.player3, this.deck[i][1], ()=> this.player_die(this.player3), null, this);
            }
            //stair
            for(var i=0;i<this.stair.idx;i++){
                game.physics.arcade.collide(this.player1, this.stair[i][0]);
                game.physics.arcade.collide(this.player2, this.stair[i][0]);
                game.physics.arcade.collide(this.player3, this.stair[i][0]);
                game.physics.arcade.overlap(this.player1, this.stair[i][0], this.pushAway);
                game.physics.arcade.overlap(this.player2, this.stair[i][0], this.pushAway);
                game.physics.arcade.overlap(this.player3, this.stair[i][0], this.pushAway);
            }
            //saw tooth
            for(var i=0;i<this.saw_tooth.idx;i++){
                game.physics.arcade.collide(this.player1, this.saw_tooth[i][0]);
                game.physics.arcade.overlap(this.player1, this.saw_tooth[i][1], ()=> this.player_die(this.player1), null, this);
                game.physics.arcade.collide(this.player2, this.saw_tooth[i][0]);
                game.physics.arcade.overlap(this.player2, this.saw_tooth[i][1], ()=> this.player_die(this.player2), null, this);
                game.physics.arcade.collide(this.player3, this.saw_tooth[i][0]);
                game.physics.arcade.overlap(this.player3, this.saw_tooth[i][1], ()=> this.player_die(this.player3), null, this);
            }
            //wood
            for(var i=0;i<this.wood.idx;i++){
                game.physics.arcade.collide(this.player1, this.wood[i]);
                game.physics.arcade.collide(this.player2, this.wood[i]);
                game.physics.arcade.collide(this.player3, this.wood[i]);
                game.physics.arcade.overlap(this.player1, this.wood[i], this.pushAway);
                game.physics.arcade.overlap(this.player2, this.wood[i], this.pushAway);
                game.physics.arcade.overlap(this.player3, this.wood[i], this.pushAway);
            }
        }
        else{
            //bow
            this.bow.counter=0;
            //moving stairs
            this.moving_stair.counter = 0;
            for(var i=0;i<this.moving_stair.idx;i++){
                this.moving_stair[i][0].body.velocity.x = 0;
            }
            //deck
            this.deck.counter = 0;
            for(var i=0;i<this.deck.idx;i++){
                this.deck[i][0].body.velocity.y = 0;
                this.deck[i][1].body.velocity.y = 0;
            }
            //saw_tooth
            this.saw_tooth.counter = 0;
            for(var i=0;i<this.saw_tooth.idx;i++){
                this.saw_tooth[i][1].body.velocity.x = 0;
            }
        }
        //ground
        game.physics.arcade.collide(this.player1, this.sink);
        game.physics.arcade.collide(this.player2, this.sink);
        game.physics.arcade.collide(this.player3, this.sink);
        game.physics.arcade.overlap(this.player1, this.sink, this.pushAway);
        game.physics.arcade.overlap(this.player2, this.sink, this.pushAway);
        game.physics.arcade.overlap(this.player3, this.sink, this.pushAway);
        
        //finish
        game.physics.arcade.overlap(this.player1, this.flag, ()=>this.finish(this.player1,this.flag,0));
        game.physics.arcade.overlap(this.player2, this.flag, ()=>this.finish(this.player2,this.flag,1));
        game.physics.arcade.overlap(this.player3, this.flag, ()=>this.finish(this.player3,this.flag,2));

        //movement
        this.moveplayer(1);
        if (mode == 0) {
            this.moveplayer(2);
            this.moveplayer(3);
        } else {
            //ai
            if (aiCNT >= 15) {
                if (this.player2.alive && !this.finished[1]) {
                    this.player_moveleft(this.player2);
                }
                if (this.player3.alive && !this.finished[2]) {
                    this.player_moveleft(this.player3);
                }
            }
            else if(aiCNT >= 20){
                if (this.player2.alive && !this.finished[1]) {
                    this.player_die(this.player2);
                }
                if (this.player3.alive && !this.finished[2]) {
                    this.player_die(this.player3);
                }
            }
            else{
            if (this.player2.alive && this.game_state == GO && (!this.finished[1])) {
                if (ai1State == ai_player_state.stop) {
                    var nearest_obj = this.get_nearest_obj();
                    ai1State = ai_player_state.moving;
                    this.player2.destination = nearest_obj;
                    if (this.player2.facingLeft) {
                        this.player2.animations.play("leftwait");
                    } else {
                        this.player2.animations.play("rightwait");
                    }
                } else {
                    if (this.player2.destination.x > this.player2.x) {
                        this.player_moveright(this.player2);
                    } else {
                        this.player_moveleft(this.player2);
                    }
                    if (this.player2.destination.y < this.player2.y) {
                        this.player_jump(this.player2,2);
                    }
                    if ((this.player2.destination.x == this.player2.x) && (this.player2.destination.y > this.player2.y)) {
                        ai1State = ai_player_state.stop;
                        if (this.player2.facingLeft) {
                            this.player2.animations.play("leftwait");
                        } else {
                            this.player2.animations.play("rightwait");
                        }
                    }

                }
            } else {
                this.player_idle(this.player2);
            }

            if (this.player3.alive && this.game_state == GO && (!this.finished[2])) {
                if (ai2State == ai_player_state.stop) {
                    var nearest_obj = this.get_nearest_obj();
                    ai2State = ai_player_state.moving;
                    this.player3.destination = nearest_obj;
                    if (this.player3.facingLeft) {
                        this.player3.animations.play("leftwait");
                    } else {
                        this.player3.animations.play("rightwait");
                    }
                } else {
                    if (this.player3.destination.x > this.player3.x) {
                        this.player_moveright(this.player3);
                    } else {
                        this.player_moveleft(this.player3);
                    }
                    if (this.player3.destination.y < this.player3.y) {
                        this.player_jump(this.player3, 3);
                    }
                    if ((this.player3.destination.x == this.player3.x) && (this.player3.destination.y > this.player3.y)) {
                        ai2State = ai_player_state.stop;
                        if (this.player3.facingLeft) {
                            this.player3.animations.play("leftwait");
                        } else {
                            this.player3.animations.play("rightwait");
                        }
                    }

                }
            } else {
                this.player_idle(this.player3);
            }
            }
        }
        //bound handle
        this.boundary_handler(this.player1);
        this.boundary_handler(this.player2);
        this.boundary_handler(this.player3);
        //score
        if((this.finished[0]||!this.player1.alive)&&(this.finished[1]||!this.player2.alive)&&(this.finished[2]||!this.player3.alive)&&this.game_state == GO){
            this.toScore();
        }
        if(RETURN){
            RETURN = false;
            this.toBoxOpen();
        }
        if(OVER){
            console.log("OVER");
            game.state.start('win');
        }
    },
    change_bow_position: function (door, bow) {
        var explode = game.add.sprite(door.x, door.y, 'explode');
        ani = explode.animations.add('explode', [0, 1, 2, 3, 4, 5, 6], 12, false, true);
        explode.anchor.setTo(0.5, 0.5);
        explode.scale.setTo(0.5, 0.5);
        explode.animations.play('explode');
        bow.x = Math.floor(Math.random() * 10) * 50 + 400;
        bow.y = Math.floor(Math.random() * 5) * 70 - 100;
    },
    get_nearest_obj: function () {
        var nearest = this.flag;
        return nearest;
    },
    boundary_handler: function(player){
        if(player.y > 500){
            this.player_die(player);
        }
    },
    player_die: function(player){
        if(player.alive == false) return;
        var random = game.rnd.integerInRange(0, 2);
        if (random == 0) {
            this.die1_audio.play();
        } else if (random == 1) {
            this.die2_audio.play();
        } else {
            this.die3_audio.play();
        }
        if(player.y>500){
            this.boom.x = player.x;
            this.boom.visible = true;
            this.boom.animations.play("boom");
        }
        if (player.facingLeft) player.animations.play('leftdie');
        else player.animations.play('rightdie');
        player.alive = false;
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
    },
    player_change_position: function(idx, player){
        game.camera.flash(0xe0ccff, 200);
        game.camera.shake(0.003, 300);
        //explode
        var explode = game.add.sprite(this.door[idx][0].x, this.door[idx][0].y, 'explode');
        ani = explode.animations.add('explode', [0,1,2,3,4,5,6], 12, false, true);
        explode.anchor.setTo(0.5,0.5);
        explode.scale.setTo(0.5,0.5);
        explode.animations.play('explode');
        //position
        x = Math.floor(Math.random() * 10)*50+200;
        y = Math.floor(Math.random() * 5)*70-100;
        player.x = x;
        player.y = y;
    },
    moveplayer: function (num) {
        var player;
        var jump_btn;
        var cursors;
        if(num == 1){player = this.player1; jump_btn = this.jump_btn1; cursors = this.cursors1;}
        else if(num == 2){player = this.player2; jump_btn = this.jump_btn2; cursors = this.cursors2;}
        else if(num == 3){player = this.player3; jump_btn = this.jump_btn3; cursors = this.cursors3;}

        if(player.alive == false || this.game_state != GO || this.finished[num-1] == true) return;
        if(player.body.touching.down){//if this player1 is touching the ground
            player.jump=false;
        }
        if (jump_btn.isDown) {
            this.player_jump(player,num);
        }
        if (cursors[0].isDown) {
            this.player_moveleft(player);
        } else if (cursors[1].isDown) {
            this.player_moveright(player);
            
        } else {
            // Stop the player 
            this.player_idle(player);
            
        }
    },
    pushAway: function (player1, object) {
        if (!player1.jump&&(!(player1.y+20<=object.y))) {//not jumping and not stanging on it
            if (player1.x > object.x) {//player1 is at obj's right
                player1.x += 10;
            } else {
                player1.x -= 10;
            }
        }
    },
    player_jump: function (player,index) {
        if ((player.body.touching.down || player.body.touching.left || player.body.touching.right)) { //check if the player can jump(when the player is in the air, it can't jump)
            // Move the player upward (jump)
            if (player.body.touching.left) {
                //this makes the player bounce away when climbing the wall
                player.body.velocity.x = SPRITE_SPEED_X;
                if (index == 1) {
                    this.emitter1.x = player.x;
                    this.emitter1.y = player.y;
                    this.emitter1.start(true, 800, null, 10);
                } else if (index == 2) {
                    this.emitter2.x = player.x;
                    this.emitter2.y = player.y;
                    this.emitter2.start(true, 800, null, 10);
                } else {
                    this.emitter3.x = player.x;
                    this.emitter3.y = player.y;
                    this.emitter3.start(true, 800, null, 10);
                }
                
            } else if (player.body.touching.right) {
                player.body.velocity.x = -SPRITE_SPEED_X;
                if (index == 1) {
                    this.emitter1.x = player.x;
                    this.emitter1.y = player.y;
                    this.emitter1.start(true, 800, null, 10);
                } else if (index == 2) {
                    this.emitter2.x = player.x;
                    this.emitter2.y = player.y;
                    this.emitter2.start(true, 800, null, 10);
                } else {
                    this.emitter3.x = player.x;
                    this.emitter3.y = player.y;
                    this.emitter3.start(true, 800, null, 10);
                }
            } else {
                player.body.velocity.x = 0;
            }
            player.body.velocity.y = -SPRITE_SPEED_Y;
            if (player.facingLeft) {
                player.animations.play('leftjump');
            } else {
                player.animations.play('rightjump');
            }
            player.jump = true;
            this.jump1_audio.play();
        }
    },
    player_moveleft: function (player) {
        if (player.body.touching.down) {
            player.body.velocity.x = -SPRITE_SPEED_X;
            player.jump = false;
        } else {
            //when player is in the air, he can't change his velocity immediately
            if (player.body.velocity.x > -SPRITE_SPEED_X) {
                player.body.velocity.x -= 10;
            }
        }
        if (player.body.velocity.y < 0 && player.body.touching.down == false) {
            player.jump = true;
            player.animations.play('leftjump');
        } else {
            player.animations.play('leftwalk');
        }
        player.facingLeft = true;
    },
    player_moveright: function (player) {
        if (player.body.touching.down) {
            player.body.velocity.x = SPRITE_SPEED_X;
            player.jump = false;
        } else {
            //when player is in the air, he can't change his velocity immediately
            if (player.body.velocity.x < SPRITE_SPEED_X) {
                player.body.velocity.x += 10;
            }
        }
        if (player.body.velocity.y < 0 && player.body.touching.down == false) {
            player.jump = true;
            player.animations.play('rightjump');
        } else {
            player.animations.play('rightwalk');
        }
        player.facingLeft = false;
    },
    player_idle: function (player) {
        if (player.jump) {
            //the player's x_velocity will decrease gradually when the player is in the air and the controller release the left/right button
            if (player.body.velocity.x != 0) {
                if (player.body.velocity.x > 0) {
                    player.body.velocity.x -= 5;
                    if (player.body.velocity.x <= 0) {
                        player.body.velocity.x = 0;
                    }
                } else {
                    player.body.velocity.x += 5;
                    if (player.body.velocity.x >= 0) {
                        player.body.velocity.x = 0;
                    }
                }
            } else {
                if (player.facingLeft) {
                    player.animations.play('leftjump');
                } else {
                    player.animations.play('rightjump');
                }
            }
        } else {
            player.body.velocity.x = 0;
            if (player.facingLeft) {
                player.animations.play("leftwait");
            } else {
                player.animations.play("rightwait");
            }
        }
    },
    player_stop: function(player){
        player.body.velocity.x = 0;
        if (player.facingLeft) {
            player.animations.play("leftwait");
        } else {
            player.animations.play("rightwait");
        }
    },
    finish: function (player, finishing_point, index) {//when the player reach the finish, the score board pop out
        if ((!this.finished[index])) {
            var random = game.rnd.integerInRange(0, 1);
            if (random == 0) {
                win1_audio.play();
            } else{
                win2_audio.play();
            }

            this.finished[index] = true;
            this.score[index] += (CNT > 100) ? 100 : 200 - CNT;
            this.player_stop(player);
        }
    }
}