chrome.storage.sync.get(['scramble'], function(data) {
  var scramble = data.scramble;
  console.log(scramble);
  var nameGame = new NameGame(scramble);

  nameGame.startGame();
});
