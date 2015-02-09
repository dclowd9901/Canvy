var Base = require('./base.js');
var _     = require('lodash');
var Rect = require('./rect.js');

module.exports = Base.extend({
  frame: null,
  bounds: null,
  position: null,
  transform: null,
  backgroundColor: null,
  zPosition: 0,
  sublayers: [],
  drawable: null,

  init: function(frame) {
    this.frame = frame;
    this.drawable = new Drawable(frame);
  },

  draw: function(canvas) {
    this.drawable.draw(canvas);
    this.drawSublayers(canvas);
  },

  drawSublayers: function(canvas) {
    if (this.sublayers.length) {
      this.sublayers.forEach(function(sublayer){
        sublayer.draw(canvas);
      });
    }
  },

  addSublayer: function(layer) {
    this.sublayers.push(layer);
  },

  removeSublayer: function(layer) {
    this.sublayers.splice(this.sublayers.indexOf(layer), 1);
  },

  readyForRedraw: function() {
    this._readyForRedraw = true;
  }
});