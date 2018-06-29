
$(document).ready(function() {
	var introMessages = [];
	introMessages.push("An ant queen slumbers here. She's in a deep sleep, well below the energy threshold for activity. Her breathing steady and slow.");
	introMessages.push("<br>A lone, purposeless worker idles nearby.")

	//function changeContentText(newText) {
	//	$("#content").fadeOut(function(){$(this).text(newText).fadeIn()});
	//}

	function appendContentText(newText, callbackFunction, callbackArgument) {
		$("<div>" + newText + "</div>").hide().appendTo("#content").fadeIn(1000, function() {
			callbackFunction(callbackArgument)
		});
	}

	function runIntroSequence(introCounter = 0) {
		if (introCounter == introMessages.length) return;
		else appendContentText(introMessages[introCounter], runIntroSequence, introCounter + 1);
	}

	runIntroSequence();
});