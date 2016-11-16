chrome.storage.sync.get(['scramble', 'scoreboard'], function(data) {
  var scramble = data.scramble;
  var scoreboard = data.scoreboard;
  var nameGame = new NameGame(scramble, scoreboard);

  nameGame.startGame();
});
