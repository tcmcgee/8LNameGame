chrome.storage.sync.get(['enabled', 'scramble', 'scoreboard'], function(data) {

  var enabled = data.enabled;
  var checkboxEnabled = $("[name=enabled]");
  checkboxEnabled.attr("checked", enabled);
  checkboxEnabled.change(function(e){
    chrome.storage.sync.set({ 'enabled': $(e.target).is(":checked") }, function(){});
  });

  var scramble = data.scramble;
  var checkboxScramble = $("[name=scramble]");
  checkboxScramble.attr("checked", scramble);
  checkboxScramble.change(function(e){
    chrome.storage.sync.set({ 'scramble': $(e.target).is(":checked") }, function(){});
  });

  var scoreboard = data.scoreboard;
  var checkboxScoreboard = $("[name=scoreboard]");
  checkboxScoreboard.attr("checked", scoreboard);
  checkboxScoreboard.change(function(e){
    chrome.storage.sync.set({ 'scoreboard': $(e.target).is(":checked") }, function(){});
  });
});

