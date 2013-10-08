#pragma strict

static var end : boolean;
var door : Transform;

var audioOhh : AudioSource;
var audioHurt : AudioSource;

function Start () {
	door.renderer.enabled = false;
	end = false;

}

function Update () {
	
	if (end == false) {
		// Celing visible/ not visible
		if (click_button.visible == true) {
			renderer.enabled = true;
		} else {
			renderer.enabled = false;
		}
		
		if (transform.position.y > -1) {
			if (transform.position.y > 1) {
				transform.Translate(0, -0.2*Time.deltaTime, 0);
			} else {
				transform.Translate(0, -10*Time.deltaTime, 0);
			}
		} else {
			end = true;
			transform.audio.mute = true;
		}
	} else {
		renderer.enabled = true;
		door.renderer.enabled = true;
		audioOhh.Play();
	}

}

function OnCollisionStay (c : Collision) {
		end = true;
		//audioHurt.Play();
		//load the begining of the level
		Application.LoadLevel(5);


}