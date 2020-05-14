 var targetNumber;
 var total = 0;
 var wins = 0;
 var losses = 0;
 var randomNum = Math.floor(Math.random()*71+29);


 var gamePurple = Math.floor(Math.random()*14+1);
 var gamePink = Math.floor(Math.random()*14+1);
 var gameOrange = Math.floor(Math.random()*14+1);
 var gameBlue = Math.floor(Math.random()*14+1);



 $(document).ready(function() {

  $('#random').html(randomNum);
  $('#wins').html(wins);
  $('#losses').html(losses);

  function gameWinner() {
      wins++;
      $('#wins').html(wins);
      alert("Congrats you won the Crystal Collecting game");
      gameReset();
  }


  function gameLoser() {
      losses++;
      $('#losses').html(losses);
      alert("Sorry you lost the Crystal Collecting game");
      gameReset();

  }

  function gameReset() {
    randomNum = Math.floor(Math.random()*71+29);
    $('#random').html(randomNum);
    gamePurple = Math.floor(Math.random()*14+1);
    gamePink = Math.floor(Math.random()*14+1);
    gameOrange = Math.floor(Math.random()*14+1);
    gameBlue = Math.floor(Math.random()*14+1);
  }

  $('#purple').click(function() {
    total = total + gamePurple;
    // console.log("purple crystal was pressed");
    $('#totalscore').html(total);
    if (total === randomNum) {
        gameWinner();
    }
    else if (total > randomNum) {
        gameLoser();
    }
    console.log("purple crystal was tallied")
  })

  $('#pink').click(function() {
      total = total + gamePink;
      $('#totalscore').html(total);
      if (total === randomNum) {
          gameWinner();
      }
      else if (total > randomNum) {
          gameLoser();
      }
      console.log("pink crystal was tallied")
  })
  
  $('#orange').click(function() {
      total = total + gameOrange;
      $('#totalscore').html(total);
      if (total === randomNum) {
          gameWinner();
      }
      else if (total > randomNum) {
          gameLoser();
      }
      console.log("orange crystal was tallied")
  })

  $('#blue').click(function() {
      total = total + gameBlue;
      $('#totalscore').html(total);
      if (total === randomNum) {
          gameWinner();
      }
      else if (total > randomNum) {
          gameLoser();
      }
      console.log("blue crystal was taliied")
  })

 });