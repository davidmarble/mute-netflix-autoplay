// ==UserScript==
// @name           Mute Netflix Autoplay Trailers
// @namespace      davidmarble.com
// @match          *://*.netflix.com/*
// @version        0.1
// @homepage       https://github.com/davidmarble/mute-netflix-autoplay
// @description    Mute all autoplaying trailers when browsing Netflix
// @author         davidmarble
// @license        MIT License
// @grant          none
// ==/UserScript==

// Target node for observing mutations
var target = document.querySelector('.mainView');
 
// Observer instance which will mute any created video elements
var _node;
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    for (var j=0; j < mutation.addedNodes.length; j++){
      _node = mutation.addedNodes[j];
      if (_node.nodeType === 1 && _node.tagName === 'VIDEO'){
        _node.muted = "muted";
      }
    }
  });
});
 
// Config: what to listen for
var config = { 
  childList: true, 
  subtree: true
}
 
// Start observing
observer.observe(target, config);
