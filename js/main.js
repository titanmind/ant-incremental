

//Populate Panes
$("<div id ='queenPop'>queenPop</div>").appendTo(RES);
$("<div id ='antPop'>antPop</div>").appendTo(RES);
$("<div id ='food'>food</div>").appendTo(RES);
$("<div id ='explored'>explored</div>").appendTo(RES);

$("<div id ='explorers'>explorers</div>").appendTo(JOB);
$("<div id ='foragers'>foragers</div>").appendTo(JOB);
$("<div id ='diggers''>diggers</div>").appendTo(JOB);

$("<div id ='marq''>marq</div>").appendTo(MARQ);

$("<div id ='prog''>progress</div>").appendTo(PROG);

$("<div id ='main''>main</div>").appendTo(MAIN);

$("<div id ='msg'>msg</div>").appendTo(MSG);


function updateScreen(){
}

window.setInterval(updateScreen,30);

//Old JS including Message Script

// $(document).ready(function() {
// 	function appendText(text, delay){
// 		setTimeout(
// 			function(){
// 				$("<div>" + "<br>" + text + "</div>").hide().appendTo("#content").fadeIn(1000);}, 4500);
// 	}

// 	function runIntroSequence(){
// 		$("<div>" + "An ant queen slumbers here. She's in a deep sleep, well below the energy threshold for activity. Her breathing steady and slow." + "</div>").hide().appendTo("#content").fadeIn(2000);
// 		appendText("A lone, purposeless worker idles nearby.", 4500);

// 		var explorationPhase = 0;

// 		setTimeout(
// 			function(){
// 				$("<br><input type='button' value='Send worker to explore' id='exploreButton'>").hide().appendTo("#content").fadeIn(2000);
// 				var exploreButton = document.getElementById('exploreButton');
// 				exploreButton.onclick = function(){
// 					alert("current phase is " + explorationPhase);
// 					explorationPhase++;
// 				};
// 			}
// 			, 8000);
// 	}

// 	document.getElementById('saveButton').onclick = function(){
// 		var gameState = {"level": 4, "name": "david"};
// 		var stringifiedGameState = JSON.stringify(gameState);
// 		localStorage.setItem("gameState", stringifiedGameState);
// 	}

// 	document.getElementById('loadButton').onclick = function(){
// 		var gameState = JSON.parse(localStorage.gameState);
// 		alert("the name is " + gameState.name + " and the level is " + gameState.level);
// 	}
// 	runIntroSequence();
// });