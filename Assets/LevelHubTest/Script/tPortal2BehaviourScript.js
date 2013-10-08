#pragma strict

var level : GameObject;
var triggerd : boolean;

function Start () {
	triggerd = false;

}

function OnTriggerEnter (other : Collider) {
	if (triggerd ==  false) {
		triggerd = true;
		level.transform.animation.Play("Take 0010");
		
	}

}