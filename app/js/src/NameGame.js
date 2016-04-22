function NameGame(){ }

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

NameGame.prototype.addTextInput = function(employeeDiv, count){
 employeeDiv.append("Name: <input type ='text' class='" + count + "'>");
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

}

NameGame.prototype.startGame = function() {
  var names = []; 
  var count = 0;
  var score = 0;

  $('body').prepend("<div class='score'> <h3 class='scoreboard'>YO</h3> </div>");
  var scoreBoard = $(".score"); 
  NameGame.prototype.centerAndStyle(scoreBoard); 

  $(".one-fourth > h3").map(function() {
    var employeeName = NameGame.prototype.getName($(this));
    names.push(employeeName);
    NameGame.prototype.removeName($(this));
    NameGame.prototype.addTextInput($(this), count);
    count++;
  });


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
          score += .5;
          $(this).val(names[$(this).attr('class')]);
          $(this).css('border', '5px solid #00f');
      } 
      else
      {
          $(this).val(names[$(this).attr('class')]);
          $(this).css('border', '5px solid #f00');
      }

      $(this).prop('disabled', true);
      $('.score .scoreboard').html(score + " / " + names.length + " | " + Math.round(score * 1000 / names.length)/10 + "%");
      nextIndex = currentIndex + 1;
      var current = parseInt($(this).attr('class'));
      next = $("." + (current + 1));
      next.focus();
    });
  }
}

var nameGame = new NameGame();

nameGame.startGame();
