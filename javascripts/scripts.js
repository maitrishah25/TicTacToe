console.log('...loaded')

$(document).ready(function(){

    // $('.grid-cell').on('click', function(){
    //   var cell = $(e.target);
    //   var cellID = $('id');
    //   function makeMove(cellId){
    //     if (! .notAvailable)
    //       $(cellID).text('X');
    //       $(cellID).addClass('notAvailable');
    //       count++;
    //     }
    // })

  var f1;
  var f2;
  var f3;
  var f4;
  var f5;
  var f6;
  var f7;
  var f8;
  var f9;
  var count = 0;

  $('#field1').on('click', function(){
    if (f1 !='X' && f1 !='O'){
      $(this).text('X').addClass('playerMove');
      f1 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  $('#field2').on('click', function(){
    if (f2 != 'X' && f2 != 'O'){
      $(this).text('X').addClass('playerMove');
      f2 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  $('#field3').on('click', function(){
    if (f3 != 'X' && f3 != 'O'){
      $(this).text('X').addClass('playerMove');
      f3 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  $('#field4').on('click', function(){
    if (f4 != 'X' && f4 != 'O'){
      $(this).text('X').addClass('playerMove');
      f4 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  $('#field5').on('click', function(){
    if (f5 != 'X' && f5 != 'O'){
      $(this).text('X').addClass('playerMove');
      f5 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  $('#field6').on('click', function(){
    if (f6 != 'X' && f6 != 'O'){
      $(this).text('X').addClass('playerMove');
      f6 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  $('#field7').on('click', function(){
    if(f7 != 'X' && f7 != 'O'){
      $(this).text('X').addClass('playerMove');
      f7 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  $('#field8').on('click', function(){
    if (f8 != 'X' && f8 != 'O'){
      $(this).text('X').addClass('playerMove');
      f8 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  $('#field9').on('click', function(){
    if (f9 != 'X' && f9 != 'O'){
      $(this).text('X').addClass('playerMove');
      f9 = 'X';
      count++;
      computerMove();
      checkWin();
    }
  });

  function computerMove(){
//TEST: when player makes a move, computer always makes a followup move until gave over.
    var compMadeMove = false;
    while (compMadeMove !== true){
      var compIdx = Math.floor(Math.random() * 9)+1;

      if (compIdx == 1 && f1 != 'X' && f1 != 'O'){
        f1 = 'O';
        count++;
        $('#field1').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
      if (compIdx == 2 && f2 != 'X' && f2 != 'O'){
        f2 = 'O';
        count++;
        $('#field2').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
      if (compIdx == 3 && f3 != 'X' && f3 != 'O'){
        f3 = 'O';
        count++;
        $('#field3').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
      if (compIdx == 4 && f4 != 'X' && f4 != 'O'){
        f4 = 'O';
        count++;
        $('#field4').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
      if (compIdx == 5 && f5 != 'X' && f5 != 'O'){
        f5 = 'O';
        count++;
        $('#field5').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
      if (compIdx == 6 && f6 != 'X' && f6 != 'O'){
        f6 = 'O';
        count++;
        $('#field6').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
      if (compIdx == 7 && f7 != 'X' && f7 != 'O'){
        f7 = 'O';
        count++;
        $('#field7').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
      if (compIdx == 8 && f8 != 'X' && f8 != 'O'){
        f8 = 'O';
        count++;
        $('#field8').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
      if (compIdx == 9 && f9 != 'X' && f9 != 'O'){
        f9 = 'O';
        count++;
        $('#field9').text('O').addClass('compMove');
        compMadeMove = true;
        checkWin();
      }
    }

  };

    function checkWin(){
//TEST: when either player makes any winning combination, the winner dialog displays.
      if (f1 == 'X' && f2 == 'X' && f3 == 'X'){
        winner();
      }
      if (f4 == 'X' && f5 == 'X' && f6 == 'X'){
        winner();
      }
      if (f7 == 'X' && f8 == 'X' && f9 == 'X'){
        winner();
      }
      if (f1 == 'X' && f4 == 'X' && f7 == 'X'){
        winner();
      }
      if (f2 == 'X' && f5 == 'X' && f8 == 'X'){
        winner();
      }
      if (f3 == 'X' && f6 == 'X' && f9 == 'X'){
        winner();
      }
      if (f1 == 'X' && f5 == 'X' && f9 == 'X'){
        winner();
      }
      if (f3 == 'X' && f5 == 'X' && f7 == 'X'){
        winner();
      }

      if (f1 == 'O' && f2 == 'O' && f3 == 'O'){
        loser();
      }
      if (f4 == 'O' && f5 == 'O' && f6 == 'O'){
        loser();
      }
      if (f7 == 'O' && f8 == 'O' && f9 == 'O'){
        loser();
      }
      if (f1 == 'O' && f4 == 'O' && f7 == 'O'){
        loser();
      }
      if (f2 == 'O' && f5 == 'O' && f8 == 'O'){
        loser();
      }
      if (f3 == 'O' && f6 == 'O' && f9 == 'O'){
        loser();
      }

      if (count === 9){
        tieGame();
      }
    };

  function winner(){
    alert('winner!!!');
    reset();
  }
  function loser(){
    alert('loser...');
    reset();
  }
  function tieGame(){
    alert('it\'s a tie!!!');
    reset();
  }

  function reset(){
    $('td').text('');
    f1 = null;
    f2 = null;
    f3 = null;
    f4 = null;
    f5 = null;
    f6 = null;
    f7 = null;
    f8 = null;
    f9 = null;
  }

})
