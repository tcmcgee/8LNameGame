describe("Extenson", function(){
  var nameGame = new NameGame();

  it ("should be able to pass a test", function() {
      expect(true).toEqual(true);
  });

  it ("should be able to check if an array of strings contains a value", function(){
    var stringArray = ["Hello", "My", "Name", "Is", "Tom"]

    expect(nameGame.contains(stringArray, "Tom")).toEqual(true);
  });
});
