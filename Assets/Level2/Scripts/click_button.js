#pragma strict

var clicked : boolean;
static var visible : boolean;
var startTime : float;
var first : boolean;

var audio1 : AudioSource;

function Start () {
	first = true;
	clicked = false;
	visible = false;

}

function Update () {
	//Check if the button is pressed
	if (clicked == true) {
		if (first == true) {
			audio1.Play();
			first = false;
		}
		//Let the celing visible for 5 seconds
		if(Time.time > startTime + 10) {
		  visible = false;
		  clicked = false;
		}
	}

}

function OnMouseDown () {
	//I pressed the button
	
	if (clicked == false) {
		clicked = true;
		visible = true;
		animation.Play();
		startTime = Time.time;
	}
		

}