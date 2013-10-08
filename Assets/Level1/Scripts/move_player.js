#pragma strict

var player : Transform;

static var instance : move_player;
 
function Awake() {
	if(instance == null)
          instance = this;
}

function OnDestroy() {
	if(instance == this)
		instance = null;
}

function Start () {
	renderer.enabled = false;
	transform.position.x = player.transform.position.x;
	transform.position.z = player.transform.position.z;

}

function Update () {
	transform.position.x = player.transform.position.x;
	transform.position.z = player.transform.position.z;
}