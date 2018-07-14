
$(document).ready(function() {
	function appendText(text, delay){
		setTimeout(
			function(){
				$("<div>" + "<br>" + text + "</div>").hide().appendTo("#content").fadeIn(1000);}, 4500);
	}

	function runIntroSequence(){
		$("<div>" + "An ant queen slumbers here. She's in a deep sleep, well below the energy threshold for activity. Her breathing steady and slow." + "</div>").hide().appendTo("#content").fadeIn(2000);
		appendText("A lone, purposeless worker idles nearby.", 4500);

		var explorationPhase = 0;

		setTimeout(
			function(){
				$("<br><input type='button' value='Send worker to explore' id='exploreButton'>").hide().appendTo("#content").fadeIn(2000);
				var exploreButton = document.getElementById('exploreButton');
				exploreButton.onclick = function(){
					alert("current phase is " + explorationPhase);
					explorationPhase++;
				};
			}
			, 8000);
	}

	document.getElementById('saveButton').onclick = function(){
		var gameState = {"level": 4, "name": "david"};
		var stringifiedGameState = JSON.stringify(gameState);
		localStorage.setItem("gameState", stringifiedGameState);
	}

	document.getElementById('loadButton').onclick = function(){
		var gameState = JSON.parse(localStorage.gameState);
		alert("the name is " + gameState.name + " and the level is " + gameState.level);
	}
	runIntroSequence();
});