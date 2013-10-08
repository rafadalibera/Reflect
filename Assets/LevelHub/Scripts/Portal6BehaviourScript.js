#pragma strict

function OnTriggerEnter (other : Collider) {
	// Change to a new scene in the same positon
	Application.LoadLevel(6);
}