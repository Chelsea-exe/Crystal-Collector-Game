 //setting global variables when the page loads
 var total = 0;
 var wins = 0;
 var losses = 0;

 var randomNum = Math.floor(Math.random()*139+11);
 //setting "Number to Match" for game random number between 11-150

 var gamePurple = Math.floor(Math.random()*15+10);
 var gamePink = Math.floor(Math.random()*15+10);
 var gameOrange = Math.floor(Math.random()*15+10);
 var gameBlue = Math.floor(Math.random()*15+10);
 //setting the values for each crystals to any random number between 10-25



 $(document).ready(function() {

  $('#random').html(randomNum);
  $('#wins').html(wins);
  $('#losses').html(losses);
  $('#totalscore').html(total);
  //using Jquery the set variables will be plugged into the html page in the associated div.

  function gameWinner() {
      wins++;
      $('#wins').html(wins);
      alert("Congrats you won the Crystal Collecting game");
      gameReset();
  }
  //gameWinner function is when the user and the computer generated number matches and the function will act
  //a alert will pop up stating the user won and the gameReset function will start.


  function gameLoser() {
      losses++;
      $('#losses').html(losses);
      alert("Sorry you lost the Crystal Collecting game");
      gameReset();

  }
  //gameLoser function is when the user number and the computer generated number doesn't match.
  //a alert will pop up stating the user lost the game and the gameReset function will start.

  function gameReset() {
    randomNum = Math.floor(Math.random()*139+11);
    $('#random').html(randomNum);
    gamePurple = Math.floor(Math.random()*15+10);
    gamePink = Math.floor(Math.random()*15+10);
    gameOrange = Math.floor(Math.random()*15+10);
    gameBlue = Math.floor(Math.random()*15+10);

  }
  //gameReset function when the game is over the computer will generate a new random number between 11-150
  //then plugging that random number into the html with the DOM of Jquery and the crystals numbers are set
  //to new number set between 10-25


  $('#purple').click(function() {
    total = total + gamePurple;
    $('#totalscore').html(total);
    if (total === randomNum) {
        gameWinner();
        gameReset();

    }
    else if (total >= randomNum) {
        gameLoser();
        gameReset();
    }
    // console.log("purple crystal was tallied")
    // console.log(gamePurple)
  })

  $('#pink').click(function() {
      total = total + gamePink;
      $('#totalscore').html(total);
      if (total === randomNum) {
          gameWinner();
          gameReset();

      }
      else if (total > randomNum) {
          gameLoser();
          gameReset();

      }
    //   console.log("pink crystal was tallied")
    //   console.log(gamePink);
  })
  
  $('#orange').click(function() {
      total = total + gameOrange;
      $('#totalscore').html(total);
      if (total === randomNum) {
          gameWinner();
          gameReset();

      }
      else if (total > randomNum) {
          gameLoser();
          gameReset();

      }
    //   console.log("orange crystal was tallied")
    //   console.log(gameOrange);
  })

  $('#blue').click(function() {
      total = total + gameBlue;
      $('#totalscore').html(total);
      if (total === randomNum) {
          gameWinner();
          gameReset();

      }
      else if (total > randomNum) {
          gameLoser();
          gameReset();

      }
    //   console.log("blue crystal was taliied")
    //   console.log(gameBlue);
  })

  /*with each set of crystals a on click function is set using Jquery and if, else if statements
   and the following functions will run. */

 });