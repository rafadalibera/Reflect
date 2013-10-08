#pragma strict

var movie : MovieTexture;

static var instance : PlayIntro;
 
function Awake() {
	if(instance == null)
          instance = this;
}

function OnDestroy() {
	if(instance == this)
		instance = null;
}

function Start() {
	movie = renderer.material.mainTexture;
	audio.clip = movie.audioClip;
	
	audio.Play();
	movie.Play();
	
	//Whait the end of the movie
	yield WaitForSeconds (33);
	
	//Load a New Sceane
	Application.LoadLevel(1);
}