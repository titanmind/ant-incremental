var tutorialText1 = "Your vision begins to adjust, you can make out two faint shapes nearby. They seem to be moving.";
var buttonText1 = "Inspect First Shape";
var tutorialText2 = "You can make out a deeply slumbering Queen who seems to be well below the activation threshold for any activity.";
var buttonText2 = "Inspect Second Shape";
var tutorialText3 = "A lone, purposeless worker, starved, slow. But it will be enough.";
var buttonText3 = "Send Worker to Explore";
var tutorialText4 = "The worker feels around for gaps in the walls, it finds none.";
var buttonText4 = "Explore some More";
var tutorialText5 = "";
var buttonText5 = "";

var buttonState = 0;


$(document).ready(function() {

	function changeTutorialText(contentText,buttonText) {
		$("#content").fadeOut(100,function() {
				$(this).text(contentText).fadeIn(100);	
			});
		$("#button1").fadeOut(100,function() {
				$(this).text(buttonText).fadeIn(100);
			});
		buttonState++;
	}

    $("#button1").click(function() {
    	if (buttonState==0) {
	  		changeTutorialText(tutorialText1,buttonText1);
		}
		else if (buttonState==1) {
			changeTutorialText(tutorialText2,buttonText2);
		}
		else if (buttonState==2) {
			changeTutorialText(tutorialText3,buttonText3);
		}
		else if (buttonState==3) {
			changeTutorialText(tutorialText4,buttonText4);	
		}
		else if (buttonState==4) {
			changeTutorialText(tutorialText5,buttonText5);
		}
	});
});

