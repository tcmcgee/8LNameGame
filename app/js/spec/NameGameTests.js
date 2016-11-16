describe("Extension", function(){
  var nameGame;
  var EmployeeDiv;
  var employeesWithRows; 
  beforeEach(function() { 
    nameGame = new NameGame(true, true, true);
    EmployeeDiv = setFixtures('<div class="column one-fourth"><h3>Taka Goto</h3><p>Software Crafter</p></div>');
  });
   
  it ("should be able to check if an array of strings contains a value", function(){
    var stringArray = ["Hello", "My", "Name", "Is", "Tom"]

    expect(nameGame.contains(stringArray, ["Tom"])).toEqual(true);
  });

  it ("should be able to get the name from an EmployeeDiv", function(){
    EmployeeDiv = $(".one-fourth > h3")
    expect(nameGame.getName(EmployeeDiv)).toEqual('Taka Goto');
  });
  
  it ("should accept é and e as the same character when comparing", function(){
   var stringArray = ["Héllo", "My", "Name", "Is", "Tom"]

    expect(nameGame.contains(stringArray, ["Héllo"])).toEqual(true);
    expect(nameGame.contains(stringArray, ["Hello"])).toEqual(true);
});

it ("should accept ä and a as the same character when comparing", function(){
   var stringArray = ["Hällo", "My", "Name", "Is", "Tom"]

    expect(nameGame.contains(stringArray, ["Hällo"])).toEqual(true);
    expect(nameGame.contains(stringArray, ["Hallo"])).toEqual(true);
});

  it ("should be able to remove the Text from the name", function(){
    expect(nameGame.removeName(EmployeeDiv)).not.toHaveText('Taka Goto'); 
  });

  it ("should be able to add a text input to the Employee Div with a class as the given count", function(){
    nameGame.removeName(EmployeeDiv);

    nameGame.addTextInput(EmployeeDiv, 0);
    expect(EmployeeDiv[0].outerHTML).toHaveHtml('Name: <input type="text" class="0"></div>');
  });

  it ("should append a class with a name of the given integer", function(){
    nameGame.removeName(EmployeeDiv);

    nameGame.addTextInput(EmployeeDiv, 20);
    expect(EmployeeDiv[0].outerHTML).toHaveHtml('Name: <input type="text" class="20"></div>');
  });

  it ("shuffles the inputs", function() {
    var shuffleSpy = spyOn(nameGame, "shuffle");

    nameGame.startGame();

    expect(shuffleSpy).toHaveBeenCalled();
  });

  it ("does not shuffle the input if scramble is false", function() {
    var scramble = false;
   var nameGame = new NameGame(true, false, false);
   var shuffleSpy = spyOn(nameGame, "shuffle");

   nameGame.startGame();

   expect(shuffleSpy).not.toHaveBeenCalled();
  });

  it ("shows the scoreboard", function() {
    var scoreboardSpy = spyOn(nameGame, "addScoreboard");

    nameGame.startGame();

    expect(scoreboardSpy).toHaveBeenCalled();
  });

  it ("does not show the scoreboard if scoreboard is false", function() {
   var nameGame = new NameGame(true, true, false);
   var scoreboardSpy = spyOn(nameGame, "addScoreboard");

   nameGame.startGame();

   expect(scoreboardSpy).not.toHaveBeenCalled();
  });

  it ("Replaces the names with text boxes if enabled is true", function() {
   var nameGame = new NameGame(true, true, false);
   var replaceNameSpy = spyOn(nameGame, "replaceNamesWithInputs").and.returnValue(["Taka Goto", "Some Other Name"]);

   nameGame.startGame();

   expect(replaceNameSpy).toHaveBeenCalled();
  });

  it ("Does not replace the names with text boxes if enabled is false", function() {
   var nameGame = new NameGame(false, true, false);
   var replaceNameSpy = spyOn(nameGame, "replaceNamesWithInputs").and.returnValue(["Taka Goto", "Some Other Name"]);

   nameGame.startGame();

   expect(replaceNameSpy).not.toHaveBeenCalled();
  });

});
