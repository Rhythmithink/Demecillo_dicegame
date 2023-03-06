function rollDice(){
    var diceValue = parseInt(Math.random()*6)+1;
    document.getElementById("diceFace").innerHTML = diceValue;
    if(diceValue > 3){
        document.getElementById("diceMsg").innerHTML = "You rolled a " + diceValue + "! <span class='text-primary'> You Win! </span>";       
    }
    else{
        document.getElementById("diceMsg").innerHTML = "You rolled a " + diceValue + "! <span class='text-danger'>You Lose!</span>";           
    }
}
