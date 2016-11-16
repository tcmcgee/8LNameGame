chrome.storage.sync.get(['scramble', 'scoreboard'], function(data) {
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

