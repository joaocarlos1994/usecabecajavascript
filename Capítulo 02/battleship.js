var randomLoc =  Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false; 

while (!isSunk) {
	
	guess = prompt("Ready, aim , fire! (enter a number 0-6):");
	
	if (guess < 0 || guess > 6) {
		alert("Insira um numero válido")
	} else {
		
		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3) {
			
			alert("HIT");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship");
			}
			
		} else {
			alert("MISS");
		}		
	
	}	
	
}

var stats = "Você deu " + guesses + " palpites para afundar o navio de batalha, " +
"qual significa que seus tiros accuracy foi " + (3/guesses);

alert(stats);