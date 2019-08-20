// Constructor
function Player(game, x, y) {
	// Phaser.Sprite(game, x, y, key)
	// game.rnd.integerInRange(min, max) returns rand int between min, max
	Phaser.Sprite.call(this, game, x, y, 'player');
	
	// Physics
	this.game.physics.arcade.enable(this);
	this.anchor.set(0.5);
	this.velX = 150;
	this.velY = 150;
	this.body.maxVelocity = 500;
	this.body.collideWorldBounds = true;
	
	// Controls
	this.keys = {};
	this.keys.left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	this.keys.right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	this.keys.up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	this.keys.down = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	this.keys.interact = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
	// State Info
	this.direction = 'front';
	this.isInvincible = false;

	// Character info

	// FSM
	this.fsm = new PhaserFSM([
	{
		name: 'idle',
		initial: true,
		onEnter: function(){},
		onUpdate: function(){
			this.move();
			if(this.keys.interact.justDown) {
				this.interact();
			}
		},
		onLeave: function(){},
		transitions: {
			'walk': 'walking',
			'interact': 'interact'
		}
	},
	{
		name: 'walking',
		initial: false,
		onEnter: function(){},
		onUpdate: function(){
			this.move();
			if(this.body.velocity.x === 0)
				this.fsm.consumeEvent('stop');
			if(this.keys.interact.justDown)
				this.interact();
		},
		onLeave: function(){},
		transitions: {
			'stop': 'idle',
			'interact': 'interact'
		}
	},
	{
		name: 'interact',
		initial: false,
		onEnter: function(){},
		onUpdate: function(){
			this.body.velocity = 0
		},
		onLeave: function(){},
		transitions: {
			'stop': 'idle'
		}
	}], this);
};

// explicitly define prefab's prototype (Phaser.Sprite) and constructor
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

// override Phaser.Sprite update
Player.prototype.update = function() {
	// this.animations.play(this.fsm.getState().name);
};

Player.prototype.move = function() {
	this.setVelocity(0);

	if (this.alive) {
		// Controls
		// Vertical
		if(this.keys.up.isDown) {
			this.body.velocity.y = -this.velY;
			this.direction = 'back';
		}
		else if(this.keys.down.isDown) {
			this.body.velocity.y = this.velY;
			this.direction = 'front';
		}
		// Horizontal
		if(this.keys.left.isDown) {
			this.body.velocity.x = -this.velX;
			this.direction = 'left';
		}
		else if(this.keys.right.isDown) {
			this.body.velocity.x = this.velX;
			this.direction = 'right';
		}

		// FSM handling
		if(this.body.velocity.x !== 0 || this.body.velocity.y !== 0 )
			this.fsm.consumeEvent('walk');
	}
}

Player.prototype.interact = function(target) {
	// If obj exist, do range check
	// FSM handling
	this.fsm.consumeEvent('interact');
}

Player.prototype.setVelocity = function(v) {
	this.body.velocity.x = v;
	this.body.velocity.y = v;
}

Player.prototype.death = function() {
	let deathSprite, overflow;

	if(this.pooCount < 0){
		console.log("death from no poo");
		deathSprite = game.add.sprite(this.x, this.y, 'bloodsplat');
		overflow = false;
	}
	else if(this.pooCount > 100){
		console.log("death from too much poo");
		deathSprite = game.add.sprite(this.x, this.y, 'poosplat');
		overflow = true;
	}
	if (deathSprite){
		var rasp = game.add.audio('rasp', 0.5);
		this.kill();
		rasp.play();
		game.camera.shake(0.005, 400);
		deathSprite.anchor.set(0.5);
		deathSprite.scale.x = 2;
		deathSprite.scale.y = 5;
		game.time.events.add(Phaser.Timer.SECOND * 2, this.changeState, this);
	}
}

Player.prototype.hit = function() {
	// Check if the player is already invincible
	// If it is, return nada
	if (this.isInvincible) return;
	// Else, run this code
	this.isInvincible = true;
	var inviTime = game.time.create(true);
	// Blinking sprite while invincible
	// timer.repeat(delay time, num repeat, function(pls don't touch this), ref(also, don't touch this))
	inviTime.repeat(50, 10, function() {if (this.alpha == 1) this.alpha = 0; else this.alpha = 1;}, this);
	// After super invincibility time, go back to normal state
	inviTime.onComplete.add(function(){this.isInvincible = false; this.alpha = 1;}, this);

	inviTime.start();
}

Player.prototype.changeState = function(){
	game.state.start('end');
}