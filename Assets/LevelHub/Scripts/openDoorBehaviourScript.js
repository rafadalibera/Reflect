#pragma strict

var doorLevel2 = false;
var doorLevel3 = false;


var openDoor = false;
var startTime : float;

function Update () {
	if (openDoor == true) {
		//play animation to open the door
		if(Time.time > startTime + 2) {
			if (doorLevel2) {
				Application.LoadLevel(2);
			} if (doorLevel3) {
				Application.LoadLevel(3);
			}		  
		}						
	}
}

function OnMouseDown () {
		transform.audio.Play();
//		animation.Play();
		startTime = Time.time;
		openDoor = true;			
}