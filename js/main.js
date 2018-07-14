
$(document).ready(function() {
	function appendText(text, delay){
		setTimeout(
			function(){
				$("<div>" + "<br>" + text + "</div>").hide().appendTo("#content").fadeIn(1000);}, 4500);
	}

	function runIntroSequence(){
		$("<div>" + "An ant queen slumbers here. She's in a deep sleep, well below the energy threshold for activity. Her breathing steady and slow." + "</div>").hide().appendTo("#content").fadeIn(2000);
		appendText("A lone, purposeless worker idles nearby.", 4500);
		setTimeout(
			function(){
				$("<br><input type='button' value='Send worker to explore' id='exploreButton'>").hide().appendTo("#content").fadeIn(2000);
				document.getElementById('exploreButton').onclick = function(){
					alert(3);};
			}
			, 8000);
	}

	runIntroSequence();
});