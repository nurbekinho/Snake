if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Snake'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Snake'.");
}
var Snake = function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Game(context) {
    Game$Companion_getInstance();
    this.context_0 = context;
    this.state = '';
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
      this.timer_0 = window.setInterval(Game$start$lambda(this), 5);
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
  };
  Game.prototype.update_0 = function () {
  };
  Game.prototype.draw_0 = function () {
  };
  Game.prototype.onKeyDown_0 = function (event) {
    var tmp$;
    var keyboardEvent = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
    switch (keyboardEvent.keyCode) {
      case 37:
        println('left');
        break;
      case 39:
        println('right');
        break;
    }
  };
  Game.prototype.onKeyUp_0 = function (event) {
    var tmp$;
    var keyboardEvent = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
    switch (keyboardEvent.keyCode) {
      case 37:
        println('left up');
        break;
      case 39:
        println('right up');
        break;
      case 32:
        if (equals(this.state, Game$Companion_getInstance().INTRO))
          this.start_0();
        break;
    }
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
  var GAME_WIDTH;
  var GAME_HEIGHT;
  function main() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    var game = new Game(context);
  }
  Object.defineProperty(Game, 'Companion', {
    get: Game$Companion_getInstance
  });
  _.Game = Game;
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
