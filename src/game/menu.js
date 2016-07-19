game.module(
    'game.menu'
)
.body(function() {

SceneMenu = game.Scene.extend({
    backgroundColor: 0x1a1a1a,

    init: function() {

    	this.menuContainer = new game.Container();
        this.menuContainer.position.set(0, 0);
        this.stage.addChild(this.menuContainer);

        var logo = new game.Sprite('logo.png');
        logo.anchor.set(0.5, 0.5);
        logo.position.set(game.system.width / 2, game.system.height / 6);
        this.menuContainer.addChild(logo);

        this.createButton('play', 1.13);
    },

    createButton: function (text, location) {
        var self = this;
        var button = new game.Sprite('media/buttonBG.png');

        button.position.set(game.system.width / 2, game.system.height / 2);
        button.anchor.set(0.5, 0.5);
        button.name = text;
        button.position.y = game.system.height / location;
        //button.tint = '0x' + game.flavours[game.theme][1].fill;
        button.interactive = true;
        button.buttonMode = true;

        button.mousedown = function() {
            self.startGame(this);
        };
        button.touchstart = function() {
            self.startGame(this);
        };

        this.menuContainer.addChild(button);

        var buttonText = new game.BitmapText(text, { font: 'ctsFONT' });
        buttonText.position.x = -(buttonText.textWidth / 2);
        buttonText.position.y = -(buttonText.textHeight / 1.5);
        button.addChild(buttonText);
    },

    startGame: function() {
        this.stage.removeChild(this.menuContainer);
        game.system.setScene(SceneGame);
    }
});

});

