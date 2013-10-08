#pragma strict

var isPlaying = true;
var particle2 : Transform;

var photo : Transform;

static var particleOn = 1;

function Start () {
	if (particleOn == 1) { //1
		transform.audio.Play();
	}

}

function Update () {
	if (particleOn == 1) { //1
		renderer.enabled = true;
		transform.audio.mute = false;
		transform.Rotate(0, 30*Time.deltaTime, 0);
	} else {
		renderer.enabled = false;
		transform.audio.mute = true;
		photo.transform.renderer.enabled = true;
	}
}	

function OnMouseDown() {
		particleOn = 2;
		particle2.transform.audio.Play();
}	