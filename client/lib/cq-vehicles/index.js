/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'cq-vehicles',
  lazyLoading: false,
  isDevelopingAddon: function() {
    return true;
  }
});
