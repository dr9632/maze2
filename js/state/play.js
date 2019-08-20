var play = function() {
	
}

play.prototype = {
	preload: function() {
		
	},
	create: function() {
		if (devMode) game.time.advancedTiming = true;
		
		// player
		player = new Player(game, 64, game.world.height - 100, 'player');
		game.add.existing(player);
	},
	update: function() {
		
	},
	render: function() {
		if (devMode){
			game.debug.text('fps: ' + game.time.fps, 32, 86, 'yellow');
		}
	}
}