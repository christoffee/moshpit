	game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.colours',
    'game.menu',
    'game.moshpit'
)
.body(function() {

	game.System.orientation = game.System.HORIZONTAL;
	game.System.idtkScale = 'ScaleAspectFill';

	game.start(SceneMenu);

});
