console.log('...loaded')

$(document).ready(function(){

    //   var cell = $(e.target);
    //   var cellID = $('id');
    //   function playerMove(cellId){
    //      $(cellID).on('click', function(){
    //      if (cell != 'X' && cell != 'O'){
    //     $(this).text('X').addClass('playerMove');
    //     cell = 'X';
    //     count++;
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
  var playerWinCount = 0;
  var compWinCount = 0;

  $('#field1').on('click', function(){
    if (f1 !='X' && f1 !='O'){
      $(this).text('X').addClass('playerMove');
      f1 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  $('#field2').on('click', function(){
    if (f2 != 'X' && f2 != 'O'){
      $(this).text('X').addClass('playerMove');
      f2 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  $('#field3').on('click', function(){
    if (f3 != 'X' && f3 != 'O'){
      $(this).text('X').addClass('playerMove');
      f3 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  $('#field4').on('click', function(){
    if (f4 != 'X' && f4 != 'O'){
      $(this).text('X').addClass('playerMove');
      f4 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  $('#field5').on('click', function(){
    if (f5 != 'X' && f5 != 'O'){
      $(this).text('X').addClass('playerMove');
      f5 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  $('#field6').on('click', function(){
    if (f6 != 'X' && f6 != 'O'){
      $(this).text('X').addClass('playerMove');
      f6 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  $('#field7').on('click', function(){
    if(f7 != 'X' && f7 != 'O'){
      $(this).text('X').addClass('playerMove');
      f7 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  $('#field8').on('click', function(){
    if (f8 != 'X' && f8 != 'O'){
      $(this).text('X').addClass('playerMove');
      f8 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  $('#field9').on('click', function(){
    if (f9 != 'X' && f9 != 'O'){
      $(this).text('X').addClass('playerMove');
      f9 = 'X';
      count++;
      checkPlayerWin();
      // setTimeout(computerMove, 500);
    }
  });

  function computerMove(){
    console.log('computerMove')
//TEST: when player makes a move, computer always makes a followup move until gave over.
    var compMadeMove = false;
    if (count == 9 /*&& !winner && !loser (how do i write this?)*/){ compMadeMove = true; tieGame(); };
    while (compMadeMove !== true){
      var compIdx = Math.floor(Math.random() * 9)+1;

      if (compIdx == 1 && f1 != 'X' && f1 != 'O'){
        f1 = 'O';
        count++;
        $('#field1').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
      if (compIdx == 2 && f2 != 'X' && f2 != 'O'){
        f2 = 'O';
        count++;
        $('#field2').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
      if (compIdx == 3 && f3 != 'X' && f3 != 'O'){
        f3 = 'O';
        count++;
        $('#field3').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
      if (compIdx == 4 && f4 != 'X' && f4 != 'O'){
        f4 = 'O';
        count++;
        $('#field4').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
      if (compIdx == 5 && f5 != 'X' && f5 != 'O'){
        f5 = 'O';
        count++;
        $('#field5').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
      if (compIdx == 6 && f6 != 'X' && f6 != 'O'){
        f6 = 'O';
        count++;
        $('#field6').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
      if (compIdx == 7 && f7 != 'X' && f7 != 'O'){
        f7 = 'O';
        count++;
        $('#field7').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
      if (compIdx == 8 && f8 != 'X' && f8 != 'O'){
        f8 = 'O';
        count++;
        $('#field8').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
      if (compIdx == 9 && f9 != 'X' && f9 != 'O'){
        f9 = 'O';
        count++;
        $('#field9').text('O').addClass('compMove');
        compMadeMove = true;
        checkComputerWin();
      }
    }

  };

    function checkPlayerWin(){
//TEST: when either player makes any winning combination, the winner dialog displays.

      if ((f1 == 'X' && f2 == 'X' && f3 == 'X') ||
          (f4 == 'X' && f5 == 'X' && f6 == 'X') ||
          (f7 == 'X' && f8 == 'X' && f9 == 'X') ||
          (f1 == 'X' && f4 == 'X' && f7 == 'X') ||
          (f2 == 'X' && f5 == 'X' && f8 == 'X') ||
          (f3 == 'X' && f6 == 'X' && f9 == 'X') ||
          (f1 == 'X' && f5 == 'X' && f9 == 'X') ||
          (f3 == 'X' && f5 == 'X' && f7 == 'X') ||
          (f3 == 'X' && f5 == 'X' && f7 == 'X')){
        playerWinCount++;
        winner();
        } else setTimeout(computerMove, 500);
    }

    function checkComputerWin(){

      if ((f1 == 'O' && f2 == 'O' && f3 == 'O') ||
          (f4 == 'O' && f5 == 'O' && f6 == 'O') ||
          (f7 == 'O' && f8 == 'O' && f9 == 'O') ||
          (f1 == 'O' && f4 == 'O' && f7 == 'O') ||
          (f2 == 'O' && f5 == 'O' && f8 == 'O') ||
          (f3 == 'O' && f6 == 'O' && f9 == 'O') ||
          (f1 == 'O' && f5 == 'O' && f9 == 'O') ||
          (f3 == 'O' && f5 == 'O' && f7 == 'O')){
        compWinCount++;
        loser();
      }
    }

    function checkTie(){
      if (count === 9){
        tieGame();
      }
    };


  function winner(){
  //TEST: once a winner is determined, game should reset
    // alert('winner!!!');
    var win = $('<div>').text('You won!!!').addClass('winMessage');
    $('body').append(win);
    $('#player').text('Player: ' + playerWinCount);
    setTimeout(reset, 3000);
  }
  function loser(){
    // alert('loser...');
    var lose = $('<div>').text('No Buenos!').addClass('loseMessage');
    $('body').append(lose);
    $('#comp').text('Computer: ' + compWinCount);
    setTimeout(reset, 3000);
  }
  function tieGame(){
    // alert('it\'s a tie!!!');
    var tie = $('<div>').text('Tie Game').addClass('tieMessage');
    $('body').append(tie);
    setTimeout(reset, 3000);
  }

  function reset(){
    $('td').text('');
    $('td').removeClass('playerMove');
    $('td').removeClass('compMove');
    f1 = null;
    f2 = null;
    f3 = null;
    f4 = null;
    f5 = null;
    f6 = null;
    f7 = null;
    f8 = null;
    f9 = null;
    count = 0;
    $('.winMessage').remove();
    $('.loseMessage').remove();
    $('.tieMessage').remove();
  }

})
