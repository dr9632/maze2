// Source: https://github.com/ajmetal/Phaser-State-Machine

PhaserFSM = function (states, obj) {

    Phaser.Sprite.call(
        this, 
        obj.game, 
        obj.x || 0, 
        obj.y || 0, 
        null, 
        null
    );

    this.states = states; //JSON variable holding all the states
    this.obj = obj; //object in the game these states act on
    this.initialState = undefined; //state the object starts in, defined in iteration
    this.indices = {}; //array used for fast lookup for events and states

    for (var i = 0; i < states.length; i++) {
        this.indices[this.states[i].name] = i;
        if (this.states[i].initial)
            this.initialState = this.states[i];
    }
    if (!this.initialState) {
        console.warn("State Machine has no initial state!");
    }
    this.currentState = this.initialState;
    this.lastState = this.currentState;

    this.game.add.existing(this);
};

PhaserFSM.prototype = Object.create(Phaser.Sprite.prototype);
PhaserFSM.prototype.constructor = PhaserFSM;

PhaserFSM.prototype.update = function () {
    this.currentState.onUpdate.call(this.obj);
};

PhaserFSM.prototype.consumeEvent = function (e) {
    if (this.currentState.transitions[e]) {
        this.lastState = this.currentState;
        this.currentState.onLeave.call(this.obj);
        this.currentState = this.states[this.indices[this.currentState.transitions[e]]];
        this.currentState.onEnter.call(this.obj);
    }
};

PhaserFSM.prototype.getState = function () {
    return this.currentState;
};

PhaserFSM.prototype.reset = function () {
    this.currentState = this.initialState;
};
