chrome.storage.sync.get(['enabled', 'scramble', 'scoreboard'], function(data) {
  var enabled = data.enabled;
  var scramble = data.scramble;
  var scoreboard = data.scoreboard;

  var nameGame = new NameGame(enabled, scramble, scoreboard);

  nameGame.startGame();
});
