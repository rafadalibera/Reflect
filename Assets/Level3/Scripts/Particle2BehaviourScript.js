#pragma strict

var particle3 : Transform;

var photo : Transform;
var photo2 : boolean;

function Start () {
	photo2 = false;
	transform.audio.Play();

	if (Particle1BehaviourScript.particleOn != 2) {
		//transform.audio.Play();
		renderer.enabled = false;
	}

}

function Update () {
	if (Particle1BehaviourScript.particleOn == 2) {
		renderer.enabled = true;
		transform.audio.mute = false;
		transform.Rotate(0, 30*Time.deltaTime, 0);
	} else {
		renderer.enabled = false;
		transform.audio.mute = true;
	}
	
	if (photo2 == true) {
		photo.transform.renderer.enabled = true;
	}
}

function OnMouseDown() {
		Particle1BehaviourScript.particleOn = 3;
		particle3.transform.audio.Play();
		photo2 = true;
}	