//function at the loading page
function start(){

	//create start block
	sozdanieStartBlock();
	
	//create timer block
	sozdanieTimerBlock();

	startKnopka.onclick = nachat;

}
//function to start the game
function nachat(){
	soundClick3();
	status = "nachat";
	//delete start block
	udalenieStartBlock();
	//create stars block
	sozdanieStarsBlock();
	//create lives block
	sozdanieLifesBlock();
	//create a ball
	sozdanieBall();
	//create a timer
	timerIgra();
	//create a rub every 10 s
	setInterval(function(){
		sozdanieJewel();
	},10000)
}

start();




//stopping the game
function stopIgra(){
	status = "koniec";
	//delete lives block
	udalenieLifesBlock();
	//delete stars block
	udalenieStarsBlock();
	//delete timer
	udalenieTimerBlock()
	//clear game field
	ochistitIgraPole();
	//the end of the game
	sozdanieKoniecIgra();

}


function timerIgra(){
	//end-of-game timer
	var chasy = setInterval(function () {

	timerBlock.innerText = timerBlock.innerText - 1;
	
		if(timerBlock.innerText == 0){
		
			stopIgra();
			
			clearInterval(chasy);
			
			timerBlock.innerText = 10;
		}
	},1000)
	}
