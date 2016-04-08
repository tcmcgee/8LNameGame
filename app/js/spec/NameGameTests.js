describe("Extension", function(){
  var nameGame;
  var EmployeeDiv;
  beforeEach(function() { 
    nameGame = new NameGame();
   EmployeeDiv = setFixtures('<h3>Taka Goto</h3>'); 
  });
   
  it ("should be able to check if an array of strings contains a value", function(){
    var stringArray = ["Hello", "My", "Name", "Is", "Tom"]

    expect(nameGame.contains(stringArray, ["Tom"])).toEqual(true);
  });

  it ("should be able to use jasmine-jquery", function(){
    expect($('<div>some text</div>')).toHaveText('some text');
  });

  it ("should be able to get the name from an EmployeeDiv", function(){
    expect(nameGame.getName(EmployeeDiv)).toHaveText('Taka Goto');
  });
  
  it ("should accept é and e as the same character when comparing", function(){
   var stringArray = ["Héllo", "My", "Name", "Is", "Tom"]

    expect(nameGame.contains(stringArray, ["Héllo"])).toEqual(true);
    expect(nameGame.contains(stringArray, ["Hello"])).toEqual(true);
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




});
