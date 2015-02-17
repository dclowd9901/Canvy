var Base     = require('./base.js'),
    _        = require('lodash'),
    Rect     = require('./rect.js'),
    Drawable = require('./drawable.js');

module.exports = Base.extend({
  frame: null,
  bounds: null,
  position: null,
  transform: null,
  backgroundColor: null,
  zPosition: 0,
  sublayers: null,
  drawable: null,
  constraintRules: {
     widthSet: /(\w+)\([<=>\d]+\)/g,
     widthSize: /([<>=])=(\d+)/g,
     object: /\[(\w+)(?:\(.*\))*\]|\|/g,
     spacing: /(\||\[(\w+)[\(\)><=\d]*\])([-\d]*)(\||\[(\w+)[\(\)><=\d]*\])/g
  },

  init: function(frame) {
    this.frame = frame;
    this.drawable = new Drawable(frame);
    this.sublayers = [];
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
  },

  _parseConstraint: function(constraint) {
    var parsedConstraint = this._parseWidths(constraint);

  },

  _parseWidths: function(vfl) {
    var matches = this.constraintRules.widthSet.match(vfl),
        parsedConstraint = {
          objects: {
            first: null
          },
          instruction: null,
          value: null,
          direction: null
        };

    _.each(matches, _.bind(function(match) {
      var result = this.constraintRules.widthSize.exec(match);

      switch (result[1]) {
        case '<':
          this.maxWidth = result[2];
        case '>':
          this.minWidth = result[2];
        case '=':
          this.width = result[2];
      }
    }, this));
  },

  _parseSpacing: function(vfl) {
    var matches = [];

    while(match = this.constraintRules.spacing.exec(vfl)) {
      matches.push(match);
      regex.lastIndex = match.index + 1;
    }
  }
});