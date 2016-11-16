function NameGame(enabled, scramble, scoreboard){
  this.enabled = enabled;
  this.scramble = scramble;
  this.scoreboard = scoreboard;
}

NameGame.prototype.contains = function(a, obj) {
  for (var j = 0; j < obj.length; j++) {
    for (var i = 0; i < a.length; i++) {
     var name1 = a[i].replace(/é/g, 'e').replace(/ä/g, 'a');
     var name2 = obj[j].replace(/é/g, 'e').replace(/ä/g, 'a');
      if (name1  === name2) {
        return true;
      }
    }
  }
  return false;
}

NameGame.prototype.getName = function(employeeDiv){
  var name = employeeDiv.html();
  return name;
}

NameGame.prototype.removeName = function(employeeDiv){
  employeeDiv.html("");
}

NameGame.prototype.updateScoreboard = function(score, numberCompleted){
  var scoreboardText = score + " / " + numberCompleted + " | " + Math.round(score * 1000 / numberCompleted)/10 + "%"
  $('.score .scoreboard').html(scoreboardText);
}

NameGame.prototype.centerAndStyle = function(prependedBody){
  $('.scoreboard').width('50%'); 
  prependedBody.css("position","fixed");
  prependedBody.css("text-align","center");
  prependedBody.width('50%');
  prependedBody.css('left','37.5%');
  prependedBody.css('z-index','2');
  $('.scoreboard').css('background-color','#d3d3d3'); 
  $('.scoreboard').css('padding','20px');
  prependedBody.css('top', $('.dark').height());

}

NameGame.prototype.addTextInput = function(employeeDiv, count) {
 employeeDiv.append("Name: <input type ='text' class='" + count + "'>");
}

NameGame.prototype.shuffle = function(){
  var count = 0;
  $(".one-fourth").map(function(){
    $(this).addClass("wholething" + count);
    count++;
  });

  for (var i = 0; i < count; i++) {
    var swapIndex = Math.floor(Math.random() * count);
    var swappingRow = $(".wholething" + swapIndex).closest('.row');
    $(".wholething" + swapIndex).appendTo($(".wholething" + i).closest('.row'));
    $(".wholething" + i).appendTo(swappingRow);
  }
}

NameGame.prototype.addScoreboard = function() {
  $('body').prepend("<div class='score'> <h3 class='scoreboard'>Score</h3> </div>");
  var scoreBoard = $(".score"); 
  NameGame.prototype.centerAndStyle(scoreBoard); 
}

NameGame.prototype.replaceNamesWithInputs = function() {
    count = 0;
    names = [];
    $(".one-fourth > h3").map(function() {
      var employeeName = NameGame.prototype.getName($(this));
      names.push(employeeName);
      NameGame.prototype.removeName($(this));
      NameGame.prototype.addTextInput($(this), count);
      count++;
    });
    return names || [];
}

NameGame.prototype.startGame = function() {
  var names = []; 
  var count = 0;
  var score = 0;
  var numberCompleted = 0;


  if (this.scoreboard === true) {
    this.addScoreboard();
  }
  
  if(this.scramble === true) {
    this.shuffle();
  }

  if (this.enabled === true) {
    count = 0;
    names = this.replaceNamesWithInputs();
  }

  for (var i = 0; i < names.length; i++) {
    $( "." + i ).change(function() {
      var currentIndex = i;
      var name = names[$(this).attr('class')].toLowerCase().replace(/é/g, 'e').replace(/ä/g, 'a');
      var userInput = $(this).val().toLowerCase().replace(/é/g,'e').replace(/ä/g, 'a');
      if (userInput === name) 
      {
          score += 1; 
          $(this).val(names[$(this).attr('class')]);
          $(this).css('border', '5px solid #0f0');
      } 
      else if (NameGame.prototype.contains((name.toLowerCase().split(' ')), $(this).val().toLowerCase().split(' ')))
      {
          console.log("You Entered: " + userInput + "\n The Correct Answer Was: " + name);
          score += .5;
          $(this).val(names[$(this).attr('class')]);
          $(this).css('border', '5px solid #00f');
      } 
      else
      {
          console.log("You Entered: " + userInput + "\n The Correct Answer Was: " + name);
          $(this).val(names[$(this).attr('class')]);
          $(this).css('border', '5px solid #f00');
      }

      $(this).prop('disabled', true);
      numberCompleted += 1;
      NameGame.prototype.updateScoreboard(score, numberCompleted)
    });
  }
}
