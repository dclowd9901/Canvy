var Class = require('uberclass'),
    _     = require('lodash');

module.exports = Class.extend({
  eventHandlers: {},

  get: function(key) {
    return this[key];
  },

  set: function(key, value) {
    var before = this[key];
    this[key] = value;

    this.eventHandlers[key] = this.eventHandlers[key] || [];

    this.eventHandlers[key].forEach(function(eventHandler) {
      eventHandler.func.apply(eventHandler.context || window, [value, before]);
    });
  },

  on: function(key, func, context) {
    this.eventHandlers[key] = this.eventHandlers[key] || [];

    this.eventHandlers[key].push({
      func: func,
      context: context
    });
  },

  off: function(key, func) {
    var idx = _.indexOf(this.eventHandlers[key], function(eventHandler) {
      return eventHandler.func === func;
    });

    this.eventHandlers[key].splice(idx, 1);
  }
});