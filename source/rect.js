var Drawable = require('./drawable.js');

module.exports = Drawable.extend({
  width: 0,
  height: 0,
  x: 0,
  y: 0, 

  init: function(frame) {
    this.x = frame.origin.x;
    this.y = frame.origin.y;
    this.width = frame.size.width;
    this.height = frame.size.height;
  },

  draw: function(canvas) {    
    if (this.color) {
      canvas.context2d.fillStyle = this.color;
      canvas.context2d.fillRect(this.x, this.y, this.width, this.height);
    } else if (this.strokeColor) {
      canvas.context2d.strokeStyle = this.strokeColor;
      canvas.context2d.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
});