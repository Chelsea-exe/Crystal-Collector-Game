//While typing the javascript I gotten errors of line 5 [setting up the range value of numbers] stating the ) isn't expected but per to my research the work we've done the symbol is need
//I tried to debugging it, starting all over, redoing the javascript code, I didn't finish with the values of the rest of the crystals since I can't
//figure out what "text" wasn't added correctly
$(document).ready(function(){
var random = Math.floor()*50+1)

$('#random').text(Random);

var number1 = Math.floor(Math.random()*24+1);
var number2 = Math.floor(Math.random()*24+1);
var number3 = Math.floor(Math.random()*24+1);
var number4 = Math.floor(Math.random()*24+1);

var total = 0;
var wins = 0;
var loses = 0;
$('#Wins').html(Wins);
$('#Losses').html(Losses);

function reset(){
    Random = Math.floor(Math.random()*50+1);
    console.log(Random)
    $('#random').html(Random);
    number1 = Math.floor(Math.random()*24+1);
    number2 = Math.floor(Math.random()*24+1);
    number3 = Math.floor(Math.random()*24+1);
    number4 = Math.floor(Math.randon()*24+1);
    userTotal = 0;
    $('#Totalscore').html(userTotal);

function yes(){
alert("YOU'RE A WINNER!!");
        wins++;
        $('#Wins').html(wins);
        reset();
    }
function welp(){
alert("Welp, a Lose!");
    losses++;
    $('#Losses').html(losses);
    reset()
}
$('#purpleC').on ('click', function(){
    userTotal = userTotal + number1;
    console.log("New Total = " + userTotal);
    $('#Totalscore').html(userTotal);
        if (userTotal === Random){
          yes();
        }
        else if ( userTotal > Random){
          welp();
        }   
  })  
}
})