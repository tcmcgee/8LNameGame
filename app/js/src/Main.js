chrome.storage.sync.get(['scramble', 'scoreboard'], function(data) {
  console.log("0");
  var scramble = data.scramble;
  var scoreboard = data.scoreboard;
  var nameGame = new NameGame(scramble, scoreboard);

  nameGame.startGame();
});
