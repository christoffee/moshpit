game.module(
    'game.moshpit'
)
.body(function() {

SceneGame = game.Scene.extend({
    backgroundColor: 0x3F2518,

    init: function(){

      this.gameContainer = new game.Container();
      this.gameContainer.position.set(0, 0);
      this.stage.addChild(this.gameContainer);

      this.crowdContainer = new game.Container();
      this.crowdContainer.position.set(0, 0);
      this.stage.addChild(this.crowdContainer);

      this.crowdOverlayContainer = new game.Container();
      this.crowdOverlayContainer.position.set(0, 100);
      this.gameContainer.addChild(this.crowdOverlayContainer);

      this.crowd = [];
      this.jump = false;

      this.createCrowd(1500);
      this.addStage();
      this.addSoundCheckStand();
      game.audio.playSound('rock');
    },

    addStage: function () {
    	var stage = new game.Sprite('stage.png');
        stage.anchor.set(0.5, 0.5);
        stage.position.set(game.system.width / 2, game.system.height / 14);
        this.stage.addChild(stage);
    },

    addSoundCheckStand: function () {
    	var soundCheckStand= new game.Sprite('soundcheckstand.png');
        soundCheckStand.anchor.set(0.5, 0.5);
        soundCheckStand.position.set(game.system.width / 2, game.system.height / 1.1);
        this.stage.addChild(soundCheckStand);
    },

    createCrowd: function (people) {
    	for (var i = 0; i < people; i++) {
    		var x,y,colour,person = [],jumpTime;

         x = Math.floor(Math.random() * (game.system.width - 40)) + 20;
         y = Math.floor(Math.random() * (game.system.height - 120)) + 110;
         jumpTime = (Math.random() * 300) + 100;
         colour = Math.floor(Math.random() * 5) + 1; 
         personID = i;
         person.push(x,y,colour,personID,jumpTime);

    		this.crowd.push(person);
    	};
      this.addCrowd();
    },

    mousedown: function () {
      var self = this;
      if(this.crowdExcitement){
         this.updateCrowdExcitement();
         if (this.crowdExcitement.count < 50) {
            this.crowdExcitement.count += 2;
         }else{
            this.crowdExcitement.count = 0;

            this.crowdMosh = new game.Emitter();
            this.crowdMosh.container = this.crowdOverlayContainer;
            this.crowdMosh.position.set(game.system.width / 2, game.system.height / 3);
            this.crowdMosh.textures = ['mosher-green.png','mosher-red.png','mosher-blue.png','mosher-yellow.png','mosher-grey.png'];
        
            this.crowdMosh.target.set(game.system.width / 2, game.system.height / 3);
            this.crowdMosh.targetForce = 100;
            this.crowdMosh.velRotate = 2;
            this.crowdMosh.rotate = 2;
            this.crowdMosh.positionVar.set(100, 100);
            this.crowdMosh.speed = 1;
            this.crowdMosh.count = 15;
            //this.crowdMosh.lifeVar = 5;
            setTimeout(function(){self.crowdMosh.active = false;},5000);
            this.addEmitter(this.crowdMosh);
         }
      }

      //jump crowd
      if(!this.jump){
        for (var i = this.crowd.length - 1; i >= 0; i--) {
          self.crowdContainer.children[i].jump();
        }
        this.jump = true;
        setTimeout(function(){self.jump = false;},300);
      }

       
    },

    updateCrowdExcitement: function () {
      if(!this.excitement){

         this.excitement = new game.Graphics();
         this.excitement.beginFill('0xffffff');
         this.excitement.drawRect(100, 100 , 580, 20);

         this.stage.addChild(this.excitement);
      }
      
      this.excitement.position.set(-this.crowdExcitement.count + 50, game.system.height / 1.3);
      this.excitement.scale.x = this.crowdExcitement.count / 100;
      
    },

    addCrowd: function () {
      var self = this;

      for (var i = this.crowd.length - 1; i >= 0; i--) {

         var mosher = new game.Sprite(game.crowd[0][this.crowd[i][2]].name + '.png');

         mosher.anchor.set(0.5, 0.5);
         mosher.position.set(this.crowd[i][0], this.crowd[i][1]);
         mosher.id = this.crowd[i][3];
         mosher.alpha = 0.5;

        mosher.jump = function() {
          
          // var tween = new game.Tween(this.scale);
          //       tween.to({ x: 1.2, y: 1.2 }, self.crowd[this.id][4]);
          //       tween.easing(game.Tween.Easing.Back.InOut);
          //       tween.start();

        var tween1 = new game.Tween(this.scale);
                tween1.to({ x: 1.5, y: 1.5 }, self.crowd[this.id][4]/7);
                tween1.easing(game.Tween.Easing.Back.InOut);
        
        var tween2 = new game.Tween(this.scale);
                tween2.to({ x: 1, y: 1 }, self.crowd[this.id][4]);
                tween2.easing(game.Tween.Easing.Back.InOut);
        
        tween1.chain(tween2);
        tween1.start();
        };

         self.crowdContainer.addChild(mosher);
      };

        this.crowdExcitement = new game.Emitter();
        this.crowdExcitement.container = this.crowdOverlayContainer;
        this.crowdExcitement.position.set(game.system.width / 2, game.system.height / 2);
        this.crowdExcitement.speed = 5;
        this.crowdExcitement.count = 5;
        this.crowdExcitement.positionVar.set(game.system.width, game.system.height / 2);
        this.crowdExcitement.textures = ['mosher-green.png','mosher-red.png','mosher-blue.png','mosher-yellow.png','mosher-grey.png'];
        this.crowdExcitement.velRotate = 40;

        this.addEmitter(this.crowdExcitement);
    }
});


});
