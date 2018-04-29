function newCase(){
  var emptyTiles = $('.emptytile').length;
  var value = Math.random() < 0.9 ? 2 : 4;
  var randomTwo = Math.floor(Math.random()*emptyTiles);
  var boardtile = $('.emptytile').eq(randomTwo);
  $(boardtile).removeClass('emptytile');
  $(boardtile).addClass('fulltile');
  var tilePosition = $(boardtile).position();
  tilePosition.left = tilePosition.left + 8;
  tilePosition.top = tilePosition.top + 8;
  var datarow = boardtile.attr("data-row");
  var datacol = boardtile.attr("data-col");
  $('#boardcontainer').append('<div class = "tile" style="top: ' +tilePosition.top+ 'px;left: ' +tilePosition.left+ 'px" data-row="' + datarow + '"data-col="' + datacol +'">' + value + '</div>');
}

function showScore(){
  var score = 0;
  $('.tile').each(function(){
    score = score+parseInt($(this).text());
  });
  $('#playerScore').replaceWith('<div id="playerScore"> Your score: ' +score+ '</div>');
}

function youLoose() {
    $('#playerMessage').replaceWith('<div id="playerMessage"> GAME OVER </div>');
}
