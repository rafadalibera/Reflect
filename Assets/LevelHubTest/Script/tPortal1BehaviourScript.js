#pragma strict

var level : GameObject;
var triggerd : boolean;

var startTime : float;

function Start () {
	triggerd = false;

}
/*
function Update() {
	if (triggerd == true) {
		animation.Play();
		if(Time.time > startTime + 2) {
			renderer.enabled = false;	  
		}
	}
}
*/

function OnTriggerEnter (other : Collider) {
	if (triggerd ==  false) {
		triggerd = true;
		level.transform.animation.Play("Take 001");
	}

}