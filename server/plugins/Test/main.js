module.exports = function(chatter) {

  this.onEnable = function() {
    chatter.pluginManager.registerEvent(this, "PluginsFinishedLoadingEvent", function(event) {
      console.log(chatter.pluginManager.getPlugins());
    });
  };

};
