Base = require('./base.js');
TextView = require('./text_view.js');

module.exports = Base.extend({
  debugOutput: null,
  viewToDebug: null,

  init: function(viewToDebug) {
    this.debugOutput = new TextView({
      origin: {
        x: 5,
        y: 17
      },
      color: 'rgba(0,255,0,1.0)'
    });

    this.viewToDebug = viewToDebug;
    this.viewToDebug.addSubview(this.debugOutput);
  },

  out: function(debugOutput) {
    this.debugOutput.set('content', debugOutput);
  }
});