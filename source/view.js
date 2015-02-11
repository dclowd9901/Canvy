var Base  = require('./base.js'),
    Layer = require('./layer.js');

module.exports = Base.extend({
  layer: null,
  subviews: null,
  constraints: null,

  init: function(frame) {
    this.layer = new Layer(frame);
    this.subviews = [];
    this.constraints = [];

    return this;
  },

  draw: function(canvas) {
    this.layer.draw(canvas);
    
    if (this.subviews.length) {
      this.subviews.forEach(function(subview) {
        subview.draw.apply(subview, [canvas]);
      });
    }
  },

  addSubview: function(subview) {
    this.subviews.push(subview);
  },

  removeSubview: function(subview) {
    this.subviews.splice(this.subviews.indexOf(subview), 1);
  }
});