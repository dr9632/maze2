var play = function() {
	
}

play.prototype = {
	preload: function() {
		
	},
	create: function() {
		if (devMode) game.time.advancedTiming = true;
		
		// player
		player = new Player(game, game.world.width/2, game.world.height/2, 'player');
		game.add.existing(player);
	},
	update: function() {
		
	},
	render: function() {
		if (devMode){
			game.debug.text('fps: ' + game.time.fps, 32, 32, 'yellow');
			game.debug.body(player);
		}
	}
}