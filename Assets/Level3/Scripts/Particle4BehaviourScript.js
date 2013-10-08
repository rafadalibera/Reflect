#pragma strict

static var doorLocked = true;
var door : Transform;

var photo : Transform;
var photo4 : boolean;

function Start () {
	transform.audio.Play();
	
	photo4 = false;

	if (Particle1BehaviourScript.particleOn != 4) {
		//transform.audio.Play();
		renderer.enabled = false;
	}

}

function Update () {
	if (Particle1BehaviourScript.particleOn == 4) {
		renderer.enabled = true;
		transform.audio.mute = false;
		transform.Rotate(0, 30*Time.deltaTime, 0);
	} else {
		renderer.enabled = false;
		transform.audio.mute = true;
	}
	
	if (photo4 == true) {
		photo.transform.renderer.enabled = true;
	}
}

function OnMouseDown() {
		Particle1BehaviourScript.particleOn = 5;
		doorLocked = false;
		//door.transform.audio.Play();
		photo4 = true;
}	