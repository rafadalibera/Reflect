#pragma strict

var isQuitButton = false;
var isContinueButton = false;
var isPlayButton = false;

function OnMouseEnter() {
	renderer.material.color = Color.blue;
}

function OnMouseExit() {
	renderer.material.color = Color.white;
}

function OnMouseDown() {

	if (isQuitButton) {
		//quit game
		Application.Quit();
	}
	if (isContinueButton) {
		//load level
		Application.LoadLevel(6);
	}
	if (isPlayButton) {
		//load level
		Application.LoadLevel(6);
	}

}