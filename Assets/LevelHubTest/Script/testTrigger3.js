#pragma strict

#pragma strict

var level : Transform;
var trigger : boolean;
var cont : int;
var cont2 : int;
var turnOnce : boolean;
var rot : boolean;

var startTime : float;

function Start () {
	trigger = false;
	turnOnce = true;
	cont = 0;
	cont2 = 0;
	rot = false;
}

function Update() {
	Debug.Log(transform.position);
	if (trigger == true && cont < 180) {
		level.RotateAround(transform.position, Vector3(0, 0, 1), 1);
		cont++;
	}
	
	//Animation
	if (trigger == true) {
		if(Time.time > startTime + 1) {
			renderer.enabled = false;
		}	  
	}

}

function OnTriggerEnter (other : Collider) {
	if (trigger ==  false) {
		trigger = true;
		transform.animation.Play();	
	}

}