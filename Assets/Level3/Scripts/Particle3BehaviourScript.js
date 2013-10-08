#pragma strict

var particle4 : Transform;

var photo : Transform;
var photo3 : boolean;

function Start () {
	transform.audio.Play();
	photo3 = false;

	if (Particle1BehaviourScript.particleOn != 3) {
		//transform.audio.Play();
		renderer.enabled = false;
	}

}

function Update () {
	if (Particle1BehaviourScript.particleOn == 3) {
		renderer.enabled = true;
		transform.audio.mute = false;
		transform.Rotate(0, 30*Time.deltaTime, 0);
	} else {
		renderer.enabled = false;
		transform.audio.mute = true;
	}
	
	if (photo3 == true) {
		photo.transform.renderer.enabled = true;
	}
}

function OnMouseDown() {
		Particle1BehaviourScript.particleOn = 4;
		particle4.transform.audio.Play();
		photo3 = true;
}	