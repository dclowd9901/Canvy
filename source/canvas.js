var Base = require('./base.js');
var $     = require('jquery');

/**
 * UICanvasView/canvas.js
 *
 * More or less an interface with the canvas element you intend to work with. 
 * This is a very low-level class, and you really shouldn't be mucking around
 * in here unless you're doing some really crazy shit.
 */
module.exports = Base.extend({

  /**
   * Canvas element
   *
   * @property {DOMElement} el
   */
  el: null,

  /**
   * Cached jQuery element
   * 
   * @property {jQuery} $el
   */
  $el: null,

  context2d: null,

  elWidth: 0,
  elHeight: 0,

  scale: {
    x: 1,
    y: 1
  },

  /**
   * Performs canvas bootstrapping. If a jQuery collection, only sets first.
   *
   * @param {DOMElement|jQuery} el
   */
  init: function(el) {
    this.$el = el.jquery ? el.first() : $(el);
    this.el = el.jquery ? el[0] : el;

    this.elWidth = this.$el.width();
    this.elHeight = this.$el.height();

    this.context2d = this.el.getContext('2d');
    this.on('scale', function(newScale) {
      this.context2d.scale(newScale.x, newScale.y);
    }, this);
  }


});