import{r as t,c as i,h as s,g as h}from"./p-0d847530.js";import{S as e}from"./p-0f3d65ca.js";const r="assets/game";class a{constructor(){this.gameover=new e}initWithPhaser(t,i){a._phaser=i,this.assetDir=t.assetDir?t.assetDir:r,this.fieldId=t.fieldId,this.initGameInstance(t)}initGameInstance(t){return null}getPreloadGame(){return null}getCreateGame(){return null}getUpdateGame(){return null}}function n(t,i){return t=Math.ceil(t),i=Math.floor(i),Math.floor(Math.random()*(i-t))+t}a._phaser=null;class l extends a{constructor(){super(),this.config={gameWidth:400,gameHeight:600},this.values=[],this.correctValues=[],this.wrongValues=[],this.gameOptions={cardScale:1,cardWidth:167,cardHeight:243,flipSpeed:190,flipZoom:1.5,initViewDuration:1e4,backgroundColor:"#fff",mainLabelColor:"#41307c",cardTextColor:"#1d1f35",correctAnswerColor:"#44C3AA"},this.REVEALED_FRAME=1,this.cards=[],this.texts=[],this.flippingCards=[],this.lastPickedCards=[]}initGameInstance(t){this.values=t.values,this.correctValues=t.correctValues,this.wrongValues=t.wrongValues,this.gameInstance=new a._phaser.Game(this.config.gameWidth,this.config.gameHeight,a._phaser.AUTO,t.fieldId,{preload:()=>this.getPreloadGame(),create:()=>this.getCreateGame(),update:()=>this.getUpdateGame()})}getPreloadGame(){this.gameInstance.load.spritesheet("card",this.assetDir+"/card_sprite.png",this.gameOptions.cardWidth,this.gameOptions.cardHeight)}getCreateGame(){this.gameInstance.stage.backgroundColor=this.gameOptions.backgroundColor,this.resetGameData(),this.initDeck(),this.initHUD()}initDeck(){this.gameOptions.cardScale=Math.min(this.gameInstance.world.width/2/this.gameOptions.cardWidth,this.gameInstance.world.height/2/this.gameOptions.cardHeight)-.05,this.gameOptions.flipZoom=1.5*this.gameOptions.cardScale;let t=[{x:10,y:15},{x:this.gameInstance.world.width-this.gameOptions.cardWidth*this.gameOptions.cardScale-5,y:15},{x:10,y:this.gameInstance.world.height-this.gameOptions.cardHeight*this.gameOptions.cardScale-15},{x:this.gameInstance.world.width-this.gameOptions.cardWidth*this.gameOptions.cardScale-5,y:this.gameInstance.world.height-this.gameOptions.cardHeight*this.gameOptions.cardScale-15}];!function(t){let i,s=0,h=null;for(i=t.length-1;i>0;i-=1)s=Math.floor(Math.random()*(i+1)),h=t[i],t[i]=t[s],t[s]=h}(t);for(let i=0;i<this.values.length;i++)this.cards[i]=this.createCard(i,t[i],!0),this.texts[i]=this.createCardText(this.cards[i]),this.createFlippingTweens(i,this.cards[i],this.texts[i]);setTimeout(()=>{this.hideAllCards(),this.mainLabel.setText("")},this.gameOptions.initViewDuration)}initHUD(){let t=Math.round(Math.min(.05*this.gameInstance.world.height,.05*this.gameInstance.world.width));this.mainLabel=this.gameInstance.add.text(0,0,"MEMORY-GAME-INSTRUCTIONS",{fontSize:t+"px",fontWeight:"bold",fill:"#fff",boundsAlignH:"center",boundsAlignV:"middle",backgroundColor:this.gameOptions.mainLabelColor}),this.mainLabel.setTextBounds(0,this.gameInstance.world.height/2-15,this.gameInstance.world.width,30)}playerHasWon(){let t=!0;return this.cards.forEach(i=>{i.data.solved||(t=!1)}),t}createCard(t,i,s){let h=this.gameInstance.add.sprite(this.gameOptions.cardScale*this.gameOptions.cardWidth/2+i.x,this.gameOptions.cardScale*this.gameOptions.cardHeight/2+i.y,"card");return s&&(h.frame=1),h.data={idx:t,text:this.values[t],revealed:!0===s,solved:!1},h.anchor.set(.5),h.scale.set(this.gameOptions.cardScale),h}createCardText(t){let i=this.gameInstance.add.text(t.x,t.y,t.data.revealed?t.data.text:"",{fontSize:"20px",fill:this.gameOptions.cardTextColor,wordWrap:!0,wordWrapWidth:t.width,align:"center",backgroundColor:"transparent"});return i.anchor.set(.5),i}createFlippingTweens(t,i,s){i.inputEnabled=!0,i.events.onInputDown.add(()=>{this.onTapCard(t,i)}),i.flipCardTween=this.gameInstance.add.tween(i.scale).to({x:0,y:this.gameOptions.flipZoom},this.gameOptions.flipSpeed/2,a._phaser.Easing.Linear.None),i.flipTextTween=this.gameInstance.add.tween(s.scale).to({x:0,y:this.gameOptions.flipZoom},this.gameOptions.flipSpeed/2,a._phaser.Easing.Linear.None),i.flipCardTween.onComplete.add(()=>{i.frame=1-i.frame,i.frame===this.REVEALED_FRAME?(i.data.revealed=!0,s.setText(this.values[t])):(i.data.revealed=!1,s.setText("")),i.backflipCardTween.start(),i.backflipTextTween.start()}),i.backflipCardTween=this.gameInstance.add.tween(i.scale).to({x:this.gameOptions.cardScale,y:this.gameOptions.cardScale},this.gameOptions.flipSpeed/2,a._phaser.Easing.Linear.None),i.backflipTextTween=this.gameInstance.add.tween(s.scale).to({x:this.gameOptions.cardScale,y:this.gameOptions.cardScale},this.gameOptions.flipSpeed/2,a._phaser.Easing.Linear.None),i.backflipCardTween.onComplete.add(()=>{this.flippingCards[t]=!1,this.computeGameState()},this)}onTapCard(t,i){this.isSomeCardFlipping()||i.data.revealed||!this.canFlipAnotherCard()||(this.flippingCards[t]=!0,this.lastPickedCards.push(i.data.idx),i.flipCardTween.start(),i.flipTextTween.start())}isSomeCardFlipping(){return this.flippingCards.indexOf(!0)>=0}canFlipAnotherCard(){return this.cards.reduce((t,i)=>(!0===i.data.revealed&&!1===i.data.solved&&t++,t),0)<2}hideAllCards(){for(let t=0;t<this.values.length;t++)!0===this.cards[t].data.revealed&&!1===this.cards[t].data.solved&&(this.flippingCards[t]=!0,this.cards[t].flipCardTween.start(),this.cards[t].flipTextTween.start())}computeGameState(){let t=!1;2===this.lastPickedCards.length&&(this.lastPickedCards.indexOf(0)>=0&&this.lastPickedCards.indexOf(1)>=0&&(this.cards[0].data.solved=!0,this.cards[1].data.solved=!0,this.texts[0].addColor(this.gameOptions.correctAnswerColor,0),this.texts[1].addColor(this.gameOptions.correctAnswerColor,0)),this.lastPickedCards.indexOf(2)>=0&&this.lastPickedCards.indexOf(3)>=0&&(this.cards[2].data.solved=!0,this.cards[3].data.solved=!0,this.texts[2].addColor(this.gameOptions.correctAnswerColor,0),this.texts[3].addColor(this.gameOptions.correctAnswerColor,0)),t=this.playerHasWon()),this.lastPickedCards.length>=2&&(this.lastPickedCards=[],setTimeout(()=>this.hideAllCards(),800)),t&&this.mainLabel.setText("GAMEOVER")}resetGameData(){this.cards=[],this.texts=[],this.flippingCards=[],this.lastPickedCards=[]}}class o extends a{constructor(){super(),this.config={gameWidth:400,gameHeight:600}}initGameInstance(t){this.gameInstance=new a._phaser.Game(this.config.gameWidth,this.config.gameHeight,a._phaser.AUTO,t.fieldId,{preload:()=>this.getPreloadGame(),create:()=>this.getCreateGame(),update:()=>this.getUpdateGame()})}getPreloadGame(){}getCreateGame(){}emitGameOver(){this.gameover.next(!0)}}class d extends a{constructor(){super(...arguments),this.gameWidth=300,this.gameHeight=200,this.wrongValues=[],this.correctValues=[],this.fontStyle={font:"15px Arial",fill:"#fff",boundsAlignH:"center",boundsAlignV:"middle"},this.isPaused=!0,this.isGameOver=!1,this.words=[],this.clouds=[],this.cloudSpeeds=[],this.backgrounds=[],this.blockSpeed=3,this.nextJump=0}initGameInstance(t){this.gameInstance=new a._phaser.Game(this.gameWidth,this.gameHeight,a._phaser.AUTO,t.fieldId,{preload:()=>this.getPreloadGame(),create:()=>this.getCreateGame(),update:()=>this.getUpdateGame()})}getPreloadGame(){this.gameInstance.load.image("sky",this.assetDir+"/sky.png"),this.gameInstance.load.image("ground",this.assetDir+"/ground.png"),this.gameInstance.load.image("cloud",this.assetDir+"/cloud.png"),this.gameInstance.load.image("bg_hill_1",this.assetDir+"/bg_hill_1.png"),this.gameInstance.load.image("bg_hill_2",this.assetDir+"/bg_hill_2.png"),this.gameInstance.load.image("block",this.assetDir+"/block.png"),this.gameInstance.load.spritesheet("mario",this.assetDir+"/mario.png",50,50)}getCreateGame(){this.gameInstance.physics.startSystem(a._phaser.Physics.ARCADE),this.resetGameData(),this.initBackgroundElements(),this.initCollectibleObjects(),this.initHUD(),this.initPlayer(),this.initListeners()}getUpdateGame(){if(this.gameInstance&&this.gameInstance.physics&&this.gameInstance.physics.arcade&&(this.gameInstance.physics.arcade.collide(this.player,this.groundTile),this.gameInstance.physics.arcade.overlap(this.player,this.block,this.handleCollision,null,this)),this.isPaused||this.isGameOver)this.player.animations.stop();else{this.isJumping?(this.player.loadTexture("mario",5),this.jumpNow()):this.player.animations.play("walk");for(let t=0;t<this.backgrounds.length;t++){let i=this.backgrounds[t];i.x>-600?i.x-=4:i.x=this.gameInstance.world.width+600}for(let t=0;t<this.clouds.length;t++){let i=this.clouds[t];i.x>-100?i.x-=this.cloudSpeeds[t]:i.x=500}this.block.x>-250?this.block.x-=this.blockSpeed:(this.block.x=this.gameInstance.world.width+250,this.remainingWordsText.setText("WORDS"),this.words.length>0?(this.currentWord=this.words.shift(),this.block.removeChild(this.blockLabel),this.blockLabel=this.gameInstance.add.text(40,5,this.currentWord,this.fontStyle),this.block.addChild(this.blockLabel)):(this.player.loadTexture("mario",5),this.gameOver()))}}initBackgroundElements(){this.gameInstance.add.tileSprite(0,0,this.gameWidth,this.gameHeight,"sky");for(let t=0;t<4;t++){let i=2===n(1,4)?1:-1,s=this.gameInstance.add.sprite(this.gameInstance.world.width/2+i*(30*t),30*t+80,"cloud");s.anchor.set(.5,.5),s.alpha=Math.random(),this.clouds.push(s),this.cloudSpeeds.push(n(0,5)+2)}this.backgrounds.push(this.gameInstance.add.sprite(0,this.gameInstance.world.height-100,"bg_hill_1")),this.backgrounds.push(this.gameInstance.add.sprite(800,this.gameInstance.world.height-100,"bg_hill_2")),this.groundTile=this.gameInstance.add.tileSprite(0,this.gameInstance.world.height-16,this.gameInstance.world.width,this.gameInstance.world.height,"ground"),this.gameInstance.physics.arcade.enable(this.groundTile),this.groundTile.body.allowGravity=!1,this.groundTile.body.immovable=!0}initCollectibleObjects(){this.block=this.gameInstance.add.sprite(this.gameInstance.world.width+500,this.gameInstance.world.height-60,"block"),this.block.animations.add("spin"),this.block.animations.play("spin",2,!0),this.remainingWordsText=this.gameInstance.add.text(16,20,"WORDS:"+this.words.length,this.fontStyle),this.currentWord=this.words.shift(),this.blockLabel=this.gameInstance.add.text(40,5,this.currentWord,this.fontStyle),this.block.addChild(this.blockLabel),this.gameInstance.physics.arcade.enable(this.block)}initHUD(){this.centeredLabel=this.gameInstance.add.text(0,0,"START",this.fontStyle),this.centeredLabel.setTextBounds(0,this.gameInstance.world.height/2-15,this.gameInstance.world.width,30),this.centeredLabel.inputEnabled=!0,this.centeredLabel.events.onInputDown.add(()=>{this.isPaused=!1,this.centeredLabel.setText(""),this.centeredLabel.inputEnabled=!1}),this.pauseLabel=this.gameInstance.add.text(this.gameInstance.world.width-100,20,"PAUSE",this.fontStyle),this.pauseLabel.inputEnabled=!0,this.pauseLabel.events.onInputDown.add(()=>{this.pauseUnPauseGame()})}initPlayer(){this.player=this.gameInstance.add.sprite(30,this.gameInstance.world.height-70,"mario"),this.gameInstance.physics.arcade.enable(this.player),this.player.body.bounce.y=.2,this.player.body.gravity.y=700,this.player.body.collideWorldBounds=!0,this.player.animations.add("walk",[1,2,3,4],20,!0)}initListeners(){this.gameInstance.input.onDown.add(()=>{this.isPaused||this.isGameOver||(this.isJumping=!0)}),this.gameInstance.input.onUp.add(()=>{this.isPaused||this.isGameOver||(this.isJumping=!1)})}pauseUnPauseGame(){this.isPaused?(this.isPaused=!1,this.gameInstance.state.resume(),this.centeredLabel.setText(""),this.pauseLabel.setText("PAUSE")):(this.isPaused=!0,this.gameInstance.state.pause(),this.pauseLabel.setText("PAUSE"))}jumpNow(){this.gameInstance.time.now>this.nextJump&&(this.player.body.velocity.y=-400,this.nextJump=this.gameInstance.time.now+1500)}handleCollision(t,i){i.x=this.gameInstance.world.width+500,this.wrongValues.indexOf(this.currentWord)>=0?(t.loadTexture("mario",6),this.gameOver()):(this.score++,this.remainingWordsText.setText("WORDS:"+this.words.length),this.words.length>0?(this.currentWord=this.words.shift(),i.removeChild(this.blockLabel),this.blockLabel=this.gameInstance.add.text(40,5,this.currentWord,this.fontStyle),i.addChild(this.blockLabel)):(t.loadTexture("mario",5),this.gameOver()))}resetGameData(){this.score=0,this.clouds=[],this.cloudSpeeds=[],this.block={x:-250},this.isGameOver=!1,this.isPaused=!0,this.isJumping=!1}gameOver(){this.centeredLabel.setText("GAMEOVER"),this.pauseLabel.setText(""),this.isGameOver=!0,this.gameover.next(!0)}}const c="Runner",u="Card",m="Example",g=class{constructor(s){t(this,s),this.gameName=c,this.fieldId="game-div",this.gameProps=null,this.gameOver=i(this,"gameOver",7)}componentDidLoad(){setTimeout(()=>this.init(),300)}componentWillUpdate(){this.isGameOver&&this.gameOver.emit(!0)}setGameProps(){this.gameProps={fieldId:this.fieldId}}init(){this.game=function(t){switch(t){case c:return new d;case u:return new l;case m:return new o;default:return null}}(this.gameName),this.game.gameover.subscribe(t=>{this.isGameOver=t}),this.setGameProps(),this.game.initWithPhaser(this.gameProps,this.phaser)}render(){return s("div",null,s("div",{class:"outer-container",id:this.fieldId}))}get host(){return h(this)}static get style(){return""}};export{g as yoo_form_input_game};