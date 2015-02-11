var Drawable = require('./drawable.js');

module.exports = Drawable.extend({
  content: '',

  origin: {
    x: 0,
    y: 0,
  },

  size: {
    maxWidth: undefined
  },

  color: 'rgba(0,0,0,1.0)',

  init: function(frame) {
    _.extend(this, frame);
  },

  draw: function(canvas) {
    canvas.context2d.font = this.font;
    canvas.context2d.fillStyle = this.color;
    canvas.context2d.fillText(this.content, this.origin.x, this.origin.y);
  }
});