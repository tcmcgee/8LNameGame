function NameGame(){ }

NameGame.prototype.contains = function(a, obj) {
  for (var j = 0; j < obj.length; j++) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] === obj[j]) {
        return true;
      }
    }
  }
  return false;
}

NameGame.prototype.startGame = function() {
  var names = []; 
  var count = 0;
  $(".one-fourth > h3").map(function() {
    names.push($(this).html());
    $(this).html("");
    $(this).append( 'Name:<input type="text" name="firstname" class="' + count + '">');
    count++;
  });


  for (var i = 0; i < count; i++) {
    $( "." + i ).change(function() {
      var currenti = i;
      var name = names[$(this).attr('class')]
        if ($(this).val().toLowerCase() === name.toLowerCase()) {
          $(this).css('border', '5px solid #0f0');
        } else if (NameGame.prototype.contains((name.toLowerCase().split(' ')), $(this).val().toLowerCase().split(' '))) {
          $(this).val(names[$(this).attr('class')]);
          $(this).css('border', '5px solid #00f');
        } else {
          $(this).val(names[$(this).attr('class')]);
          $(this).css('border', '5px solid #f00');
        }

      $(this).prop('disabled', true);
      nextIndex = currenti + 1;
      var current = parseInt($(this).attr('class'));
      next = $("." + (current + 1));
      next.focus();
    });
  }
}

var nameGame = new NameGame();

nameGame.startGame();
