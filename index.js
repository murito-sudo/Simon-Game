var start = false;
var level = 1;
var lockboard = false;
var count = 0;
var playing = false;

var simon = [];



$("body").keypress(function(event){

	
		if(start === false){
			$("h1").text("Level 1");
			start = true;
			newMove();

		}
	
});










function newMove(){
	var number =Math.floor(Math.random() * 4) + 1;
	
	


	
	
	
	switch(number){
		case 1:
			simon.push("green");
		
			var interval = setInterval(function(){
				$("#green").toggleClass("pressed");
				setTimeout(returnNormal, 100);

				clearInterval(interval);


			}, level * 1000);
	
	
		break;

		case 2:
			simon.push("red");
			
			var interval =setInterval(function(){
				$("#red").toggleClass("pressed");
			setTimeout(returnNormal, 100);

				clearInterval(interval);


			}, level * 1000);

	
		break;

		case 3:
			simon.push("yellow");
			
			var interval =setInterval(function(){
				$("#yellow").toggleClass("pressed");
			setTimeout(returnNormal, 100);

				clearInterval(interval);


			}, level * 1000);

			


		break;

		case 4:
			simon.push("blue");
	
			var interval =setInterval(function(){
				$("#blue").toggleClass("pressed");
			setTimeout(returnNormal, 100);

				clearInterval(interval);


			}, level * 1000);
			
			

		break;

	}

	playGame();

}


function playGame(){


	var counter = 0;


	var interval = setInterval(function(){
		
		if(simon.length === 0){
			clearInterval(interval);
		}
		$("h1").text("Pay Attention.");

		if(simon[counter] === "green"){
			var audio = new Audio("sounds/green.mp3");
			$("#green").toggleClass("pressed");



			audio.play();

		
			setTimeout(pressReleased, 200, simon[counter]);
			

		}else if(simon[counter] === "red"){
			var audio = new Audio("sounds/red.mp3");
			$("#red").toggleClass("pressed");

			audio.play();



			setTimeout(pressReleased, 200, simon[counter]);
			
		}else if(simon[counter] === "yellow"){
			var audio = new Audio("sounds/yellow.mp3");
			$("#yellow").toggleClass("pressed");

		
			audio.play();

			
			setTimeout(pressReleased, 200, simon[counter]);	
				
		}else if(simon[counter] === "blue"){
			var audio = new Audio("sounds/blue.mp3");
			$("#blue").toggleClass("pressed");


			audio.play();


			setTimeout(pressReleased, 200, simon[counter]);
			

		}

		if(counter === simon.length - 1){
			$("h1").text("Level " + level);
			clearInterval(interval);
		}




		counter++;


	}, 1000)

	





	

	
}





		
for(var x = 0; x < document.querySelectorAll(".btn").length; x++){


		document.querySelectorAll(".btn")[x].addEventListener("click", function(){
			

			if(playing === true){
				var buttonHTML = this.id;
				
				if(buttonHTML === simon[count]){
					if(count === simon.length - 1){
						count = 0;
						level++;
						$("h1").text("Level " + level);
						playing = false;
						buttonPress(buttonHTML);
						newMove();
					}else{
						buttonPress(buttonHTML);
						count++;
					}

				}else{
					gameOver();
				}


			}


		

	

			});


}






function buttonPress(content){

	switch(content){
		case "green":

			$("#green").toggleClass("pressed");
			setTimeout(pressReleased, 100, content);

			var audio = new Audio("sounds/green.mp3");

			setTimeout(function() {
			audio.play();
			}, 100);


		break;

		case "yellow":
			$("#yellow").toggleClass("pressed");
			setTimeout(pressReleased, 100, content);

			var audio = new Audio("sounds/yellow.mp3");

			setTimeout(function() {
			audio.play();
			}, 100);

		break;

		case "red":
			$("#red").toggleClass("pressed");
			setTimeout(pressReleased, 100, content);

			var audio = new Audio("sounds/red.mp3");

			setTimeout(function() {
			audio.play();
			}, 100);

		break;

		case "blue":
			$("#blue").toggleClass("pressed");
			setTimeout(pressReleased, 100, content);

			var audio = new Audio("sounds/blue.mp3");

			setTimeout(function() {
			audio.play();
			}, 100);

		break;

	}

}


function pressReleased(content){
	$('#'+content).toggleClass("pressed");

}





function gameOver(){
	var audio = new Audio("sounds/wrong.mp3");
	audio.play();
	simon = [];
	$("h1").text("Game Over, Finished on level " + level + ", Press any key to continue");
	level = 1;
	start = false;
	playing = false;
	count = 0;
	$("body").css("backgroundColor", "red");

	setTimeout(function(){
		$("body").css("backgroundColor", "#011F3F");

	}, 100);

}



function returnNormal(){
	$('#'+simon[simon.length - 1]).toggleClass("pressed");
	playing = true;
}