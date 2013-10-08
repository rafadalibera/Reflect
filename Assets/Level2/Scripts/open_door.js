#pragma strict

//var door : Transform;

var openDoor : boolean;
var startTime : float;
var playSound : boolean;

var audio1: AudioSource;

function Start () {
	playSound = false;
	openDoor = false;
}

function Update () {
	if (playSound ==  true) {
		audio1.Play();
		playSound = false;
	}
	if (openDoor == true) {
		//*** Play animation of an openning door ***
		
		if(Time.time > startTime + 2) {	
			Application.LoadLevel(10);	  
		}
	}
}

function OnMouseDown () {
	if (move_celing.end == true) {
		transform.audio.Play();
		animation.Play();
		startTime = Time.time;	
		openDoor = true;
	} else {
		playSound = true;
	}

}
