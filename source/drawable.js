var Base = require('./base.js');

module.exports = Base.extend({
  TEXT_ALIGNMENTS: {
    LEFT: 'left',
    RIGHT: 'right',
    CENTER: 'center',
    START: 'start',
    END: 'end'
  },

  TEXT_BASELINES: {
    TOP: 'top',
    HANGING: 'hanging',
    MIDDLE: 'middle',
    ALPHABETIC: 'alphabetic',
    IDEOGRAPHIC: 'ideographic',
    BOTTOM: 'bottom'
  },
  
  globalAlpha: 1.0,
  globalCompositeOperation: (function() {
    return this.GCO.SOURCE_OVER;
  }),

  font: '12px sans-serif',
  shadowBlur: 0,
  shadowColor: 'rgba(0,0,0,0)',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  strokeStyle: '#000',
  textAlign: (function() {
    return this.TEXT_ALIGNMENTS.START;
  }),
  textBaseline: (function() {
    return this.TEXT_BASELINES.ALPHABETIC;
  }),

    LINE_CAPS: {
    BUTT: 'butt',
    ROUND: 'round',
    SQUARE: 'square'
  },

  GCO: {
    SOURCE_OVER: 'source-over',
    SOURCE_IN: 'source-in',
    SOURCE_OUT: 'source-out',
    SOURCE_ATOP: 'source-atop',
    DESTINATION_OVER: 'destination-over',
    DESTINATION_IN: 'destination-in',
    DESTINATION_OUT: 'destination-out',
    DESTINATION_ATOP: 'destination-atop',
    LIGHTER: 'lighter',
    COPY: 'copy',
    XOR: 'xor',
    MULTIPLY: 'multiply',
    SCREEN: 'screen',
    OVERLAY: 'overlay',
    DARKEN: 'darken',
    LIGHTEN: 'lighten',
    COLOR_DODGE: 'color-dodge',
    COLOR_BURN: 'color-burn',
    HARD_LIGHT: 'hard-light',
    SOFT_LIGHT: 'soft-light',
    DIFFERENCE: 'difference',
    EXCLUSION: 'exclusion',
    HUE: 'hue',
    SATURATION: 'saturation',
    COLOR: 'color',
    LUMINOSITY: 'luminosity'
  },

  LINE_JOINS: {
    BEVEL: 'bevel',
    ROUND: 'round',
    MITER: 'miter'
  },

  fillStyle: null,
  filter: null,
  globalAlpha: 1.0,
  globalCompositeOperation: (function() {
    return this.GCO.SOURCE_OVER;
  }),
  imageSmoothingEnabled: false,
  lineCap: (function() {
    return this.LINE_CAPS.BUTT;
  }),
  lineDashOffset: 0.0,
  lineJoin: (function() {
    return this.LINE_JOINS.BEVEL;
  }),
  lineWidth: 1.0,
  miterLimit: 10.0,
  shadowBlur: 0,
  shadowColor: 'rgba(0,0,0,0)',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  strokeStyle: '#000',

  draw: function() {}
});