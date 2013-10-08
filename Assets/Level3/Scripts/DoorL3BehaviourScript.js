#pragma strict

var doorDown : GameObject;
var openDoor : boolean;

var startTime : float;

function Start () {
	//transform.audio.Play();
	openDoor = false;

}

function Update () {
	if (openDoor == true) {
		transform.audio.mute = true;
		if(Time.time > startTime + 2) {
			Application.LoadLevel(11);	  
		}
	} else {
		if (Particle1BehaviourScript.particleOn == 5) {
			transform.audio.mute = false;
		} else {
			transform.audio.mute = true;
		}
	}

}

function OnMouseDown() {
	if (Particle4BehaviourScript.doorLocked == false) {
		animation.Play();
		//transform.audio.Play();
		doorDown.transform.audio.Play();
		//doorDown.animation.Play();
		startTime = Time.time;	
		openDoor = true;
	}
}