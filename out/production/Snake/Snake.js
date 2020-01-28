if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Snake'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Snake'.");
}
var Snake = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  function Body(context) {
    this.context_0 = context;
    this.x = 0.0;
    this.y = 0.0;
  }
  Body.prototype.draw = function () {
    this.context_0.fillRect(this.x, this.y, Head$Companion_getInstance().SIZE, Head$Companion_getInstance().SIZE);
  };
  Body.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Body',
    interfaces: []
  };
  function Game(context) {
    Game$Companion_getInstance();
    this.context_0 = context;
    this.state = '';
    this.isLooped_0 = false;
    this.head_0 = new Head(this.context_0);
    this.timer_0 = 0;
    window.addEventListener('keydown', Game_init$lambda(this));
    window.addEventListener('keyup', Game_init$lambda_0(this));
    this.intro_0();
  }
  function Game$Companion() {
    Game$Companion_instance = this;
    this.INTRO = 'intro';
    this.PLAYING = 'playing';
    this.PAUSED = 'paused';
    this.FINISHED = 'finished';
  }
  Game$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Game$Companion_instance = null;
  function Game$Companion_getInstance() {
    if (Game$Companion_instance === null) {
      new Game$Companion();
    }
    return Game$Companion_instance;
  }
  Game.prototype.intro_0 = function () {
    this.state = Game$Companion_getInstance().INTRO;
    this.context_0.font = '30px Arial';
    this.context_0.fillStyle = 'black';
    this.context_0.textAlign = 'center';
    this.context_0.fillText('Press [Space Bar] To Start The Game', GAME_WIDTH / 2, GAME_HEIGHT / 2);
  };
  function Game$start$lambda(this$Game) {
    return function () {
      this$Game.loop_0();
      return Unit;
    };
  }
  Game.prototype.start_0 = function () {
    if (this.timer_0 === 0) {
      this.stop_0();
      this.state = Game$Companion_getInstance().PLAYING;
      this.timer_0 = window.setInterval(Game$start$lambda(this), 500);
    }
  };
  Game.prototype.stop_0 = function () {
    if (this.timer_0 > 0) {
      window.clearInterval(this.timer_0);
      this.timer_0 = 0;
    }
  };
  Game.prototype.loop_0 = function () {
    this.context_0.clearRect(0.0, 0.0, GAME_WIDTH, GAME_HEIGHT);
    this.update_0();
    this.draw_0();
    this.isLooped_0 = true;
  };
  Game.prototype.update_0 = function () {
    this.head_0.update();
  };
  Game.prototype.draw_0 = function () {
    this.head_0.draw();
  };
  Game.prototype.onKeyDown_0 = function (event) {
    var tmp$;
    var keyboardEvent = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
    if (this.isLooped_0)
      this.head_0.changeDirection_za3lpa$(keyboardEvent.keyCode);
    this.isLooped_0 = false;
  };
  Game.prototype.onKeyUp_0 = function (event) {
    var tmp$;
    var keyboardEvent = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
    if (keyboardEvent.keyCode === 32)
      if (equals(this.state, Game$Companion_getInstance().INTRO))
        this.start_0();
  };
  function Game_init$lambda(this$Game) {
    return function (it) {
      this$Game.onKeyDown_0(it);
      return Unit;
    };
  }
  function Game_init$lambda_0(this$Game) {
    return function (it) {
      this$Game.onKeyUp_0(it);
      return Unit;
    };
  }
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function Head(context) {
    Head$Companion_getInstance();
    this.context_0 = context;
    this.speed_0 = Head$Companion_getInstance().SIZE;
    this.x_0 = 0.0;
    this.y_0 = 0.0;
    this.direction_0 = Head$Companion_getInstance().RIGHT;
  }
  function Head$Companion() {
    Head$Companion_instance = this;
    this.UP = 'up';
    this.DOWN = 'down';
    this.RIGHT = 'right';
    this.LEFT = 'left';
    this.SIZE = 20.0;
  }
  Head$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Head$Companion_instance = null;
  function Head$Companion_getInstance() {
    if (Head$Companion_instance === null) {
      new Head$Companion();
    }
    return Head$Companion_instance;
  }
  Head.prototype.changeDirection_za3lpa$ = function (keyCode) {
    switch (keyCode) {
      case 37:
        if (!equals(this.direction_0, Head$Companion_getInstance().RIGHT))
          this.direction_0 = Head$Companion_getInstance().LEFT;
        break;
      case 38:
        if (!equals(this.direction_0, Head$Companion_getInstance().DOWN))
          this.direction_0 = Head$Companion_getInstance().UP;
        break;
      case 39:
        if (!equals(this.direction_0, Head$Companion_getInstance().LEFT))
          this.direction_0 = Head$Companion_getInstance().RIGHT;
        break;
      case 40:
        if (!equals(this.direction_0, Head$Companion_getInstance().UP))
          this.direction_0 = Head$Companion_getInstance().DOWN;
        break;
    }
  };
  Head.prototype.update = function () {
    switch (this.direction_0) {
      case 'left':
        this.x_0 -= this.speed_0;
        break;
      case 'up':
        this.y_0 -= this.speed_0;
        break;
      case 'right':
        this.x_0 += this.speed_0;
        break;
      case 'down':
        this.y_0 += this.speed_0;
        break;
    }
    if (this.x_0 < 0)
      this.x_0 = GAME_WIDTH - Head$Companion_getInstance().SIZE;
    else if (this.x_0 > GAME_WIDTH)
      this.x_0 = 0.0;
    if (this.y_0 < 0)
      this.y_0 = GAME_HEIGHT - Head$Companion_getInstance().SIZE;
    else if (this.y_0 > GAME_HEIGHT - Head$Companion_getInstance().SIZE)
      this.y_0 = 0.0;
  };
  Head.prototype.draw = function () {
    this.context_0.fillRect(this.x_0, this.y_0, Head$Companion_getInstance().SIZE, Head$Companion_getInstance().SIZE);
  };
  Head.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Head',
    interfaces: []
  };
  var GAME_WIDTH;
  var GAME_HEIGHT;
  function main() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    new Game(context);
  }
  _.Body = Body;
  Object.defineProperty(Game, 'Companion', {
    get: Game$Companion_getInstance
  });
  _.Game = Game;
  Object.defineProperty(Head, 'Companion', {
    get: Head$Companion_getInstance
  });
  _.Head = Head;
  Object.defineProperty(_, 'GAME_WIDTH', {
    get: function () {
      return GAME_WIDTH;
    }
  });
  Object.defineProperty(_, 'GAME_HEIGHT', {
    get: function () {
      return GAME_HEIGHT;
    }
  });
  _.main = main;
  GAME_WIDTH = 800.0;
  GAME_HEIGHT = 600.0;
  main();
  Kotlin.defineModule('Snake', _);
  return _;
}(typeof Snake === 'undefined' ? {} : Snake, kotlin);
