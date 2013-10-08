#pragma strict

var level : Transform;
var trigger : boolean;
var cont : int;
var cont2 : int;
var rot : boolean;

var startTime : float;
/*
function Start () {
	trigger = false;
}

function Update() {
	Debug.Log(transform.position);
	if (trigger == true && cont < 90) {
		level.RotateAround(transform.position, Vector3(1, 0, 0), -1);
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
*/

function Start () {
	trigger = false;
	rot = true;
}

function Update() {
	Debug.Log(transform.position);
	if (trigger == true && rot == true && cont < 90) {
		level.RotateAround(transform.position, Vector3(1, 0, 0), -1);
		cont++;
		if (cont >= 90) {
			trigger = false;
			rot = false;
			cont = 0;
		}
	}
	
	if (trigger == true && rot == false && cont2 < 90) {
		level.RotateAround(transform.position, Vector3(1, 0, 0), 1);
		cont2++;
		if (cont2 >= 90) {
			trigger = false;
			rot = true;
			cont2 = 0;
		}
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
		//rot = !rot;
		cont = 0;
		cont2 = 0;
		transform.animation.Play();	
	}

}