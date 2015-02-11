var View = require('./view.js'),
    _    = require('lodash');

module.exports = View.extend({
  _currentPresentationView: null,
  _canvas: null,
  _loopInterval: null,
  fps: 60,
  tick: 0,

  startTime: 0,
  currentTime: 0,
  deltaTime: 0,

  init: function(canvas) {
    this._super({
      origin: {
        x: 0,
        y: 0
      },
      size: {
        width: canvas.elWidth * canvas.scale.x,
        height: canvas.elHeight * canvas.scale.y
      }
    });
    this._canvas = canvas;
    this.loopStart();
    return this;
  },

  loopStart: function() {
    this.startTime = this.currentTime = Date.now();
    this._loopInterval = setInterval(_.bind(this.loop, this), 1000/this.fps);
  },

  loop: function() {
    var now = Date.now();
    this.deltaTime =  now - this.currentTime;
    this.currentTime = now;

    this._canvas.context2d.clearRect(0, 0, this._canvas.elWidth, this._canvas.elHeight);
    this.draw(this._canvas);

    this.tick++;

    this.afterLoop();
  },

  afterLoop: function() {}
});