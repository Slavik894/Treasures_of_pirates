
//function start game
	function startIgra(){
	
	sozdanieBall();
}

//coin sound
function soundClick(){
	var audio = new Audio();
	audio.src="coin.mp3";
	audio.autoplay = true;
}

//sound of falling stone
function soundClick1(){
	var audio = new Audio();
	audio.src="endkamen.mp3";
	audio.autoplay = true;
}
function soundClick2(){
	var audio = new Audio();
	audio.src="rub.wav";
	audio.autoplay = true;
}
//background music
function soundClick3(){
	var audio = new Audio();
	audio.src="1.mp3";
	audio.autoplay = true;
}

//creating a ball
function sozdanieBall(){
	 
	var ball = document.createElement("div");

	 ball.className = "ball";

		ball.innerText = "1"

	 //ball direction
	 var napravlenie = random(2);

	 if(napravlenie == 1){
	 	ball.className = "ball left";
	} else {
	 	ball.className = "ball right";
	}


	//mouse over ball function
	 ball.onmousemove = function(){

	 	if(ball.className != "ball ojidaet-udaleniya"){
			soundClick();
	
			ochki = ochki + 1;
			stars.innerText = ochki;
			
			ball.style.opacity = "0";

			//create a new ball
			setTimeout(function(){
				
				ball.remove();
				//the previously created ball is selected. If it does not exist, this variable is empty
				var suschestvuetBall = document.querySelector(".left",".right");
				if(suschestvuetBall == null){
					
					var kolichestvoBall = random(3);
					
					var tekuscheeColichestvoBall = 0;
					while(tekuscheeColichestvoBall < kolichestvoBall) {
					
					sozdanieBall();
					tekuscheeColichestvoBall = tekuscheeColichestvoBall + 1;
					}

				}
			},200)
		}

		//function makes it impossible to score points on 1 ball more than once
		ball.className = "ball ojidaet-udaleniya" ;

	}

	//ruby coordinate setting
	setTimeout(function(){
		ball.style.top = random(350) + "px";
		ball.style.left = random(350) + "px";
	},200)

	//balloon fall
	setTimeout(function(){
		//element change acceleration
		ball.style.transition = "all 0s"
		//after a time, the bar drops at X px/Y ms.
		var timerBall = setInterval(function(){
			//X px
			ball.style.top = ball.offsetTop + 2 + "px";
			
			if (ball.offsetTop > 500) {
				
				ball.remove();
				//create a new ball
				sozdanieBall();
			
				colichestvoLifes = colichestvoLifes - 1;
			
				if (colichestvoLifes == 0){
					stopIgra();
				}
				
				udalenieLifesBlock();
				sozdanieLifesBlock();
			
				clearInterval(timerBall);
			}
			
		}, 10)
		
	},1000)

	
		if(status != "koniec"){
		igraPole.appendChild(ball)
		}
	}

//random ball spot
function random(max){
	//random number from 0 to max
	var sluchaynoeChislo = 1 + Math.random() * (max + 1);
	sluchaynoeChislo = Math.floor(sluchaynoeChislo);
	return sluchaynoeChislo;
}


/*==================================================
game element creation
==================================================*/
/*<div id="start-block">
	<button id="start-knopka">Start</button>
</div>*/
function sozdanieStartBlock(){
	// create <div id="start-block">
	startBlock = document.createElement("div");
	startBlock.id = "start-block"

	//create a button <button id="start-knopka">Start</button>
	startKnopka = document.createElement("button");
	startKnopka.id = "start-knopka";
	startKnopka.innerText = "Start";

	startBlock.appendChild(startKnopka);

	igraPole.appendChild(startBlock);


}


//creating points and adding an item
function sozdanieStarsBlock(){
	 
	 stars = document.createElement("div");
	 stars.id = "stars";
	
	stars.innerText = 0;
	
	 igraPole.appendChild(stars);
}


/*<div id="lifes">
</div>*/
//создание жизней
function sozdanieLifesBlock(){
	//create element
	lifes = document.createElement("div");
	lifes.id = "lifes";
	//current number of balls
	var tekuscheeColichestvoLifes = 0;

	while(tekuscheeColichestvoLifes < colichestvoLifes){
		var span = document.createElement("span");
		lifes.appendChild(span);
		tekuscheeColichestvoLifes = tekuscheeColichestvoLifes + 1;
	}
	igraPole.appendChild(lifes);
}


//function for timer
function sozdanieTimerBlock (){
	
	var h2 = document.createElement("h2");
	h2.innerText = "Time: ";


	timerBlock = document.createElement("span");
	timerBlock.id = "timer";
	timerBlock.innerText = "120";
	h2.appendChild(timerBlock);

	infoBlock.appendChild(h2);
}

//create end-of-the-game block
function sozdanieKoniecIgra(){
	//create <div id="koniec-igra"></div>
	var div = document.createElement("div");
	div.id = "koniec-igra";

	var h2 = document.createElement("h2");
	h2.innerText = "Game over"

	var h3 = document.createElement("h3");
	h3.innerText = "You've achieved " + ochki+ " coins";

	//restart game btn
	var startAgain = document.createElement("button");
	startAgain.id = "start-again";
	startAgain.innerText = "Play again!";

	startAgain.onclick = function(){
		location.reload();
	}


	div.appendChild(h2);

	div.appendChild(h3);

	div.appendChild(startAgain);
	//adding an end-of-game block to the game field
	igraPole.appendChild(div);
}

//create ruby
function sozdanieJewel(){
	
	var jewel = document.createElement("div");

	 jewel.className = "jewel";

	//function for dragging the mouse over the ruby
	 jewel.onmousemove = function(){
	 	if(jewel.className != "jewel ojidaet-udaleniya"){
			//adding lives
			colichestvoLifes = colichestvoLifes + 1;
			//adding time
			soundClick2();
			udalenieLifesBlock();
			sozdanieLifesBlock();


			//ruby transparency
			jewel.style.opacity = "0";

			//create new ball
			setTimeout(function(){
				//delete previous ball
				jewel.remove();
				//the previously created ruby is selected. If it does not exist, this variable is empty
				var suschestvuetJewel = document.querySelector(".jewel");
				if(suschestvuetJewel == null){
				
					var kolichestvoBall = 1;
					
					var tekuscheeColichestvoBall = 0;
					while(tekuscheeColichestvoBall < kolichestvoBall) {
					
					sozdanieBall();
					tekuscheeColichestvoBall = tekuscheeColichestvoBall + 1;
					}

				}
			},200)
		}

		//the function makes it impossible to score points on 1 ball more than once
		jewel.className = "jewel ojidaet-udaleniya" ;

	}

	//ruby coordinate setting
		jewel.style.top = "-80px";
		jewel.style.left = random(750) + "px";//

	//rubby fall
	setTimeout(function(){
		//element change acceleration
		jewel.style.transition = "all 0s"
		//after a time the ruby descends at a rate of X px/Y ms
		var timerJewel = setInterval(function(){
			//X px
			jewel.style.top = jewel.offsetTop + 1 + "px";
		
			if (jewel.offsetTop > 700) {
				soundClick1();
				jewel.remove();
				sozdanieJewel();
				colichestvoLifes = 0;
				
				if (colichestvoLifes == 0){
					stopIgra();
				}
				//number of lives update
				udalenieLifesBlock();
				sozdanieLifesBlock();
				//delete timer
				clearInterval(timerJewel);
			}
			//Y ms
		}, 10)
		
	},100)

		//Validation. If the game is over, no ruby is created
		if(status != "koniec"){
		igraPole.appendChild(jewel)
		}
	}

/*===================================================
deleting elements
=====================================================*/
//delete start block
function udalenieStartBlock(){
	startBlock.remove();
}


//delete lives block
function udalenieLifesBlock(){
	lifes.remove();
}


//delete stars block
function udalenieStarsBlock(){
	stars.remove();
}


//delete timer block
function udalenieTimerBlock(){
	infoBlock.remove();
}


//delete game field
function ochistitIgraPole(){
	igraPole.innerText = "";
}
