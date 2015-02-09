TextView = require('./view.js');
Text = require('./text.js');
Layer = require('./layer.js');

module.exports = View.extend({  
  content: '',

  init: function(frame) {
    this._super(frame);

    this.layer.drawable = new Text(frame);
    this.on('content', _.bind(function(newText) {
      this.layer.drawable.content = newText;
    },this));
  }
});