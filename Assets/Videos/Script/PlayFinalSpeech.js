#pragma strict

var movie : MovieTexture;

function Start() {
	movie = renderer.material.mainTexture;
	audio.clip = movie.audioClip;
	
	audio.Play();
	movie.Play();
	
	//Whait the end of the movie
	yield WaitForSeconds (30);
	
	//Load a New Sceane
	Application.LoadLevel(4);
}