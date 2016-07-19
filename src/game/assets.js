game.module(
    'game.assets'
)
.require(
    'engine.audio'
)
.body(function() {

	game.addAsset('ctsFONT.fnt');
	game.addAsset('ctsFONTnormal.fnt');
	game.addAsset('ctsFONTscore.fnt');

	game.addAsset('logo.png');
	game.addAsset('buttonBG.png');
	game.addAsset('halfButton.png');
	game.addAsset('arrow.png');
	game.addAsset('stamp.png');

	game.addAsset('stage.png');
	game.addAsset('soundcheckstand.png');

	game.addAsset('mosher-green.png');
	game.addAsset('mosher-red.png');
	game.addAsset('mosher-yellow.png');
	game.addAsset('mosher-blue.png');
	game.addAsset('mosher-grey.png');

	game.addAudio('audio/Curl of the Burl.m4a', 'rock');
});
