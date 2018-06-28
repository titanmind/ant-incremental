$(document).ready(function() {
	function changeContentText(newText) {
		$("#content").fadeOut(function(){$(this).text(newText).fadeIn()});
	}

	changeContentText("An ant queen slumbers here. She's in a deep sleep, well below the energy threshold for activity. Her breathing steady and slow. A lone, purposeless worker idles nearby.");

	$("#content").text("hi");
});