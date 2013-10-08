#pragma strict

var openDoor: boolean;

var startTime : float;

function Start () {
	openDoor = false;
}

function FixedUpdate () {	
	if (openDoor == true) {
		if(Time.time > startTime + 2) {
			Application.LoadLevel(3);		  
		}
	}
}

function OnMouseDown () {
		transform.audio.Play();
		//transform.animation.Play();
		animation.Play();
		startTime = Time.time;	
		openDoor = true;	
}