var move_player1;
var move_player2;
var move_player3;
var play_audio;
var emmiter;
var selectState = {
    preload: function(){
        move_player1 = false;
        move_player2 = false;
        move_player3 = false;
    },
    create: function () {
        var key_enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key_enter.onDown.add(this.Enter, this);

        //background
        this.background = game.add.tileSprite(0, 0, 900, 450, 'background_select');

        //create background
        this.class1 = game.add.sprite(195,game.height-240,'background_circle1');
        this.class1.anchor.setTo(0.5,0.5);
        this.class1.scale.setTo(0.2,0.2);
        this.class1_tween = game.add.tween(this.class1.scale).to({x:0.21, y:0.21}, 100).yoyo(true);
        game.time.events.loop(700, function(){this.class1_tween.start();},this);

        this.class2 = game.add.sprite(450,game.height-360,'background_circle2');
        this.class2.anchor.setTo(0.5,0.5);
        this.class2.scale.setTo(0.2,0.2);
        this.class2_tween = game.add.tween(this.class2.scale).to({x:0.21, y:0.21}, 100).yoyo(true);
        game.time.events.loop(1300, function(){this.class2_tween.start();},this);

        this.class3 = game.add.sprite(720,game.height-240,'background_circle3');
        this.class3.anchor.setTo(0.5,0.5);
        this.class3.scale.setTo(0.2,0.2);
        this.class3_tween = game.add.tween(this.class3.scale).to({x:0.21, y:0.21}, 100).yoyo(true);
        game.time.events.loop(2300, function(){this.class3_tween.start();},this);

        //create ground
        this.floor = game.add.sprite(0, game.height - 50, 'ground');
        game.physics.arcade.enable(this.floor);
        this.floor.body.immovable = true;

        this.floor2 = game.add.group();
        this.floor2.enableBody = true;
        var floor_in_air1 = this.floor2.create(150, game.height - 140, 'wood');
        floor_in_air1.body.immovable = true;
        floor_in_air1.scale.setTo(0.3, 0.2);
        var floor_in_air2 = this.floor2.create(410, game.height - 270, 'wood');
        floor_in_air2.body.immovable = true;
        floor_in_air2.scale.setTo(0.3, 0.2);
        var floor_in_air3 = this.floor2.create(670, game.height - 140, 'wood');
        floor_in_air3.body.immovable = true;
        floor_in_air3.scale.setTo(0.3, 0.2);
        var floor_in_air4 = this.floor2.create(280, game.height - 205, 'wood');
        floor_in_air4.body.immovable = true;
        floor_in_air4.scale.setTo(0.3, 0.2);
        var floor_in_air5 = this.floor2.create(540, game.height - 205, 'wood');
        floor_in_air5.body.immovable = true;
        floor_in_air5.scale.setTo(0.3, 0.2);
        var floor_in_air6 = this.floor2.create(200, game.height - 380, 'wood');
        floor_in_air6.body.immovable = true;
        floor_in_air6.scale.setTo(0.3, 0.2);
        var floor_in_air7 = this.floor2.create(590, game.height - 380, 'wood');
        floor_in_air7.body.immovable = true;
        floor_in_air7.scale.setTo(0.3, 0.2);

        var floor_in_air8 = this.floor2.create(410, game.height - 85, 'wood');
        floor_in_air8.body.immovable = true;
        floor_in_air8.scale.setTo(0.3, 0.7);

        //flag
        this.flag = game.add.sprite(450, 325, 'flag');
        this.flag.scale.setTo(0.8,0.8);
        this.flag.animations.add('blow', [0,1,2,3], 12, true);
        this.flag.animations.play('blow');

        //create player
        this.player1 = game.add.sprite(100, 100, 'player1');
        this.player1.enableBody = true;
        this.player1.anchor.setTo(0.5, 0.5);
        this.player1.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(this.player1);
        this.player1.body.gravity.y = 950 ;
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
        this.player1.jumpback = false;
        this.player1.inputEnabled = true;
        this.player1.events.onInputDown.add(click1, this);
        this.player1.animations.play('rightwait');

        this.player2 = game.add.sprite(400, 100, 'player2');
        this.player2.enableBody = true;
        this.player2.anchor.setTo(0.5, 0.5);
        this.player2.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(this.player2);
        this.player2.body.gravity.y = 950 ;
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
        this.player2.jumpback = false;
        this.player2.inputEnabled = true;
        this.player2.events.onInputDown.add(click2, this);
        game.physics.arcade.enable(this.player2);
        this.player2.animations.play('rightwait');

        this.player3 = game.add.sprite(700, 100, 'player3');
        this.player3.enableBody = true;
        this.player3.anchor.setTo(0.5, 0.5);
        this.player3.scale.setTo(0.25, 0.25);
        game.physics.arcade.enable(this.player3);
        this.player3.body.gravity.y = 950 ;
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
        this.player3.jumpback = false;
        this.player3.inputEnabled = true;
        this.player3.events.onInputDown.add(click3, this);
        this.player3.animations.play('rightwait');


        //press space to jump
        // this.jump_btn = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        this.jump_player2 = this.input.keyboard.addKey(Phaser.KeyCode.W);
        this.jump_player3 = this.input.keyboard.addKey(Phaser.KeyCode.I);
        
        //left and right btn
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player2Left = this.input.keyboard.addKey(Phaser.KeyCode.A);
        this.player2Right = this.input.keyboard.addKey(Phaser.KeyCode.D);
        this.player3Left = this.input.keyboard.addKey(Phaser.KeyCode.J);
        this.player3Right = this.input.keyboard.addKey(Phaser.KeyCode.L);
        
        //emitter
        emitter = game.add.emitter(0, 0, 100);
        emitter.makeParticles('diamond');
        emitter.gravity = 200;

        
        play_audio = game.add.audio('play_bgm_1');
        play_audio.loop = true;
        play_audio.play();

        if (mode == 1) {
            this.player2.alpha = 0;
            this.player3.alpha = 0;
        }

    },
    update: function(){
        //collide
        game.physics.arcade.collide(this.player1, this.floor);
        game.physics.arcade.collide(this.player1, this.floor2);
        game.physics.arcade.collide(this.player2, this.floor);
        game.physics.arcade.collide(this.player2, this.floor2);
        game.physics.arcade.collide(this.player3, this.floor);
        game.physics.arcade.collide(this.player3, this.floor2);
        
        this.movePlayer1();
        this.movePlayer2();
        this.movePlayer3();

        if (mode == 1) {
            this.player2.x = this.player1.x + 30;
            this.player2.y = this.player1.y;
            this.player3.x = this.player1.x + 30;
            this.player3.y = this.player1.y;
        }
    },
    
    movePlayer1: function () {
        if(this.player1.alive == false || move_player1 == false) return;
        if(this.player1.body.touching.down){//if this player is touching the ground
            this.player1.jump=false;
        }
        if (this.cursors.up.isDown) {
            if ((this.player1.body.touching.down || this.player1.body.touching.left || this.player1.body.touching.right)) {//check if the player can jump(when the player is in the air, it can't jump)
                // Move the player upward (jump)
                if (this.player1.body.touching.left) {
                    //this makes the player bounce away when climbing the wall
                    this.player1.body.velocity.x = SPRITE_SPEED_X;
                } else if (this.player1.body.touching.right) {
                    this.player1.body.velocity.x = -SPRITE_SPEED_X;
                } else {
                    this.player1.body.velocity.x = 0;
                }
                this.player1.body.velocity.y = -SPRITE_SPEED_Y;
                if(this.player1.facingLeft){
                    this.player1.animations.play('leftjump');
                }else{
                    this.player1.animations.play('rightjump');
                }
                this.player1.jump=true;
            }
            
        }
        if (this.cursors.left.isDown) {
            if (this.player1.body.touching.down) {
                this.player1.body.velocity.x = -SPRITE_SPEED_X;
                this.player1.jump = false;
            } else {
                //when player is in the air, he can't change his velocity immediately
                if (this.player1.body.velocity.x > -SPRITE_SPEED_X) {
                    this.player1.body.velocity.x -= 10;
                }
            }
            if (this.player1.body.velocity.y < 0 && this.player1.body.touching.down == false) {
                this.player1.jump = true;
                this.player1.animations.play('leftjump');
            } else {
                this.player1.animations.play('leftwalk');                
            }
            this.player1.facingLeft = true;

        } else if (this.cursors.right.isDown) {
            if (this.player1.body.touching.down) {
                this.player1.body.velocity.x = SPRITE_SPEED_X;
                this.player1.jump = false;
            } else {
                //when player is in the air, he can't change his velocity immediately
                if (this.player1.body.velocity.x < SPRITE_SPEED_X) {
                    this.player1.body.velocity.x += 10;
                }
            }
            if (this.player1.body.velocity.y < 0 && this.player1.body.touching.down == false) {
                this.player1.jump = true;
                this.player1.animations.play('rightjump');
            } else {
                this.player1.animations.play('rightwalk');
            }
            this.player1.facingLeft = false;
        }else {
            // Stop the player 
            if (this.player1.jump) {
                //the player's x_velocity will decrease gradually when the player is in the air and the controller release the left/right button
                if (this.player1.body.velocity.x != 0) {
                    if (this.player1.body.velocity.x > 0) {
                        this.player1.body.velocity.x -= 5;
                        if (this.player1.body.velocity.x <= 0) {
                            this.player1.body.velocity.x = 0;
                        }
                    } else {
                        this.player1.body.velocity.x += 5;
                        if (this.player1.body.velocity.x >= 0) {
                            this.player1.body.velocity.x = 0;
                        }
                    }
                } else {
                    if(this.player1.facingLeft){
                        this.player1.animations.play('leftjump');
                    }else{
                        this.player1.animations.play('rightjump');
                    }
                }
            } else {
                this.player1.body.velocity.x = 0;
                if (this.player1.facingLeft) {
                    this.player1.animations.play("leftwait");
                } else {
                    this.player1.animations.play("rightwait");
                }
            }
        }
    },
    movePlayer2: function() {
        if(this.player2.alive == false || move_player2 == false) return;
        if(this.player2.body.touching.down){
            this.player2.jump=false;
            this.player2.jumpback=false;
        }
        if (this.jump_player2.isDown) {
            if ((this.player2.body.touching.down || this.player2.body.touching.left || this.player2.body.touching.right)) {
                // Move the player upward (jump)
                if (this.player2.body.touching.left) {
                    //this makes the player bounce away when climbing the wall
                    this.player2.body.velocity.x = SPRITE_SPEED_X;
                } else if (this.player2.body.touching.right) {
                    this.player2.body.velocity.x = -SPRITE_SPEED_X;
                } else {
                    this.player2.body.velocity.x = 0;
                }
                this.player2.body.velocity.y = -SPRITE_SPEED_Y;
            }
            if ((this.player2.body.touching.down && !(this.player2.body.touching.left || this.player2.body.touching.right || this.player2Left.isDown || this.player2Right.isDown))){
                this.player2.jump=true;
                if(this.player2.jumpback == false) this.player2.jumpback=true;
            }
        }
        if (this.player2Left.isDown  && this.player2.body.x > 0) {
            if (this.player2.body.touching.down) {
                this.player2.body.velocity.x = -SPRITE_SPEED_X;
            } else {
                //when player is in the air, he can't change his velocity immediately
                if (this.player2.body.velocity.x > -SPRITE_SPEED_X) {
                    this.player2.body.velocity.x -= 10;
                }
            }
            
            // this.player.body.velocity.x = -200;
            this.player2.facingLeft = true;
            this.player2.animations.play('leftwalk');
        } else if (this.player2Right.isDown && this.player2.body.x < 900) {
            
            if (this.player2.body.touching.down) {
                this.player2.body.velocity.x = SPRITE_SPEED_X;
            } else {
                if (this.player2.body.velocity.x < SPRITE_SPEED_X) {
                    this.player2.body.velocity.x += 10;
                }
            }
            // this.player.body.velocity.x = 200;
            this.player2.facingLeft = false;
            this.player2.animations.play('rightwalk');
        }else {
            // Stop the player 
            this.player2.body.velocity.x = 0;
            if (this.player2.facingLeft) {
                if (this.player2.jumpback && this.player2.jump) {
                    this.player2.animations.play('leftjump'); this.player2.jumpback = false;
                }
                else if(!this.player2.jump){this.player2.animations.play("leftwait");}
            } else {
                if (this.player2.jumpback && this.player2.jump) {
                    this.player2.animations.play('rightjump'); this.player2.jumpback = false;
                }
                else if(!this.player2.jump){ this.player2.animations.play("rightwait");}
            }
        }
    },
    movePlayer3: function() {
        if(this.player3.alive == false || move_player3 == false) return;
        if(this.player3.body.touching.down){
            this.player3.jump=false;
            this.player3.jumpback=false;
        }
        if (this.jump_player3.isDown) {
            if ((this.player3.body.touching.down || this.player3.body.touching.left || this.player3.body.touching.right)) {
                // Move the player upward (jump)
                if (this.player3.body.touching.left) {
                    //this makes the player bounce away when climbing the wall
                    this.player3.body.velocity.x = SPRITE_SPEED_X;
                } else if (this.player3.body.touching.right) {
                    this.player3.body.velocity.x = -SPRITE_SPEED_X;
                } else {
                    this.player3.body.velocity.x = 0;
                }
                this.player3.body.velocity.y = -SPRITE_SPEED_Y;
            }
            if ((this.player3.body.touching.down && !(this.player3.body.touching.left || this.player3.body.touching.right || this.player3Left.isDown || this.player3Right.isDown))){
                this.player3.jump=true;
                if(this.player3.jumpback == false) this.player3.jumpback=true;
            }
        }
        if (this.player3Left.isDown  && this.player3.body.x > 0) {
            if (this.player3.body.touching.down) {
                this.player3.body.velocity.x = -SPRITE_SPEED_X;
            } else {
                //when player is in the air, he can't change his velocity immediately
                if (this.player3.body.velocity.x > -SPRITE_SPEED_X) {
                    this.player3.body.velocity.x -= 10;
                }
            }
            
            // this.player.body.velocity.x = -200;
            this.player3.facingLeft = true;
            this.player3.animations.play('leftwalk');
        } else if (this.player3Right.isDown && this.player3.body.x < 900) {
            
            if (this.player3.body.touching.down) {
                this.player3.body.velocity.x = SPRITE_SPEED_X;
            } else {
                if (this.player3.body.velocity.x < SPRITE_SPEED_X) {
                    this.player3.body.velocity.x += 10;
                }
            }
            // this.player.body.velocity.x = 200;
            this.player3.facingLeft = false;
            this.player3.animations.play('rightwalk');
        }else {
            // Stop the player 
            this.player3.body.velocity.x = 0;
            if (this.player3.facingLeft) {
                if (this.player3.jumpback && this.player3.jump) {
                    this.player3.animations.play('leftjump'); this.player3.jumpback = false;
                }
                else if(!this.player3.jump){this.player3.animations.play("leftwait");}
            } else {
                if (this.player3.jumpback && this.player3.jump) {
                    this.player3.animations.play('rightjump'); this.player3.jumpback = false;
                }
                else if(!this.player3.jump){ this.player3.animations.play("rightwait");}
            }
        }
    },
    
    Enter: function() {
        if(this.player1.body.x>=50 && this.player1.body.x <= 250 && this.player1.body.y>=game.height - 270 && this.player1.body.y <= game.height - 140){
            if(this.player2.body.x>=50 && this.player2.body.x <= 250 && this.player2.body.y>=game.height - 270 && this.player2.body.y <= game.height - 140){
                if(this.player3.body.x>=50 && this.player3.body.x <= 250 && this.player3.body.y>=game.height - 270 && this.player3.body.y <= game.height - 140){
                    game.state.start('play');
                    classes = 1;
                }
            }
        }
        if(this.player1.body.x>=300 && this.player1.body.x <= 500 && this.player1.body.y>= game.height - 400 && this.player1.body.y <= game.height - 270){
            if(this.player2.body.x>=300 && this.player2.body.x <= 550 && this.player2.body.y>=game.height - 400 && this.player2.body.y <= game.height - 270){
                if(this.player3.body.x>=300 && this.player3.body.x <= 550 && this.player3.body.y>=game.height - 400 && this.player3.body.y <= game.height - 270){
                    game.state.start('play');
                    classes = 2;
                }
            }
        }
        if(this.player1.body.x>=550 && this.player1.body.x <= 750 && this.player1.body.y>=game.height - 270 && this.player1.body.y <= game.height - 140){
            if(this.player2.body.x>=550 && this.player2.body.x <= 750 && this.player2.body.y>=game.height - 270 && this.player2.body.y <= game.height - 140){
                if(this.player3.body.x>=550 && this.player3.body.x <= 750 && this.player3.body.y>=game.height - 270 && this.player3.body.y <= game.height - 140){
                    game.state.start('play');
                    classes = 3;
                }
            }
        }
    }
    
}


function click1(pointer) {
    move_player1 = !move_player1;
    emitter.x = pointer.x;
    emitter.y = pointer.y;
    emitter.start(true, 2000, null, 10);
}

function click2(pointer) {
    move_player2 = !move_player2;
    emitter.x = pointer.x;
    emitter.y = pointer.y;
    emitter.start(true, 2000, null, 10);
}

function click3(pointer) {
    move_player3 = !move_player3;
    emitter.x = pointer.x;
    emitter.y = pointer.y;
    emitter.start(true, 2000, null, 10);
}