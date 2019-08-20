var load = function(game) {
};

load.prototype = {
	preload: function() {
		// Load loading bar
		let loadBar = this.add.sprite(game.width/2 - 256, game.height/2 - 8, 'load');
		loadBar.anchor.set(0, 0.5);
		game.load.setPreloadSprite(loadBar);
		// Custom loading screen
		// let style = {font: 'Press Start 2P', fontSize: '12px', fill: '#fff'};
		// let warning = game.add.text(game.world.centerX, game.world.centerY - 32,
		// 	'Warning: This game is recommended for 3 year olds', style);
		// warning.anchor.set(0.5);
		// game.time.events.add(1200, function() {
		// 	let w_txt = game.add.text(game.world.centerX, game.world.centerY + 24,
		// 	'... or anyone who has sense of humor equivalent to 3 year olds.', style);
		// 	w_txt.anchor.set(0.5);
		// }, this);
		// // Fire this when loading takes forever for some god knows what reason
		// game.time.events.add(10000, function() {
		// 	let w_txt = game.add.text(game.world.centerX, game.world.centerY + 64,
		// 	'Uh, you might want to talk with your internet provider about this.', style);
		// 	w_txt.anchor.set(0.5);
		// }, this);

		// Load all the assets
		// Graphic
		game.load.path = 'assets/img/';

		// Temp Assets
		game.load.image('star', 'star.png');
		game.load.image('player', 'ghost.png');
		
		// UI
		game.load.image('phaser', 'img.png');

		// Chr sprites
		
		// Bullets, particles, effects etc

		// Backgrounds

		// Objects

		// Obstacles
		
		// Cutscenes
		
		// Ethan Mars: "JASON!"
		// (Heavy Rain 2010)

		// Sounds
		// Load all sounds into corresponding array
		game.load.path = 'assets/audio/';
		// BG
		
		// SFX
		// Sound effects from:

	},
	create: function() {
		// Preload audios into corresponding audio arrays
		// BGM[0] = game.add.audio('menumusic', BGVOL, true);	// Menu BGM
		// BGM[1] = game.add.audio('stage1bgm', BGVOL, true);	// Stage BGM
		// BGM[2] = game.add.audio('bosslevel', BGVOL, true);	// Boss BGM
		// BGM[3] = game.add.audio('tuto', BGVOL, true);	// Bulid that fake asthetic for tutorial
		// BGM[4] = game.add.audio('cred', BGVOL, true);	// Epic credits
		// BGM[5] = game.add.audio('c1bg', 0.3, true);	// Cutscene 1 BGM
		// BGM[6] = game.add.audio('c3bg', 0.3, true);	// Cutscene 3 BGM
		// BGM[7] = game.add.audio('cfinalbg', 0.3, true);

		// SFX[0] = game.add.audio('fart');
		// SFX[0].allowMultiple = true;
		// SFX[1] = game.add.audio('rasp');
		// SFX[1].allowMultiple = false;
		// SFX[2] = game.add.audio('turkey');
		// SFX[2].allowMultiple = true;
		// SFX[3] = game.add.audio('grunt');
		// SFX[3].allowMultiple = true;
		// SFX[4] = game.add.audio('splat');
		// SFX[4].allowMultiple = true;
		// SFX[5] = game.add.audio('throw');
		// SFX[5].allowMultiple = true;
		// SFX[6] = game.add.audio('bgrunt');
		// SFX[6].allowMultiple = true;
		// SFX[7] = game.add.audio('bossdeath');
		// SFX[7].allowMultiple = false;
		// SFX[8] = game.add.audio('bossyell');
		// SFX[8].allowMultiple = false;
		// SFX[9] = game.add.audio('deerSound');
		// SFX[9].allowMultiple = true;
		// SFX[10] = game.add.audio('bDeath');
		// SFX[10].allowMultiple = false;
		// SFX[11] = game.add.audio('pooSplat', 0.2);
		// SFX[11].allowMultiple = true;
		// SFX[12] = game.add.audio('shoot', 0.2);
		// SFX[12].allowMultiple = true;
		// SFX[13] = game.add.audio('enemydeath');
		// SFX[13].allowMultiple = true;
		// SFX[14] = game.add.audio('playercol', 0.2);
		// SFX[14].allowMultiple = true;
		// SFX[15] = game.add.audio('shake');
		// SFX[16] = game.add.audio('tplosion');
		// SFX[16].allowMultiple = false;
		
		// Local storage initialization for storing game data
		//localStorage.clear();	// Delete or comment out this line when dev is done
		// if (localStorage.getItem('someShit') != null)
		// 	someShit = JSON.parse(localStorage.getItem('someShit'));
		// else {
		// 	someShit = {
		// 		progress: 0,	// Stage number. 0 is tutorial
		// 		mode: 1,	// See main.js for more info
		// 		dev: false,
		// 		nathan: false,
		// 		cleared: false	// Did this brouwser finished the game at least once?
		// 	}
		// 	localStorage.setItem('someShit', JSON.stringify(someShit));
		// }

		game.state.start('play');
	}
}