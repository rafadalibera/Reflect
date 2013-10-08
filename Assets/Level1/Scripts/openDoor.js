#pragma strict

//var door : Transform;
var rotate = false;
var openDoor = false;
var text : GUIText;
var startTime : float;
var i : int;

static var instance : openDoor;
 
function Awake() {
	if(instance == null)
          instance = this;
}

function OnDestroy() {
	if(instance == this)
		instance = null;
}

function Start () {

}

function Update () {
	if (openDoor == true) {
		//play animation to open the door
		/*
		transform.Rotate(0, 5*Time.deltaTime, 0);
		
		*/		
		//*** Play animation of an openning door ***
		text.text = "";
		if(Time.time > startTime + 2) {
			Application.LoadLevel(5);		  
		}
				
		
	}

}

function OnMouseDown () {
	if (key.key == true) {
		transform.audio.Play();
		animation.Play();
		startTime = Time.time;	
		openDoor = true;		
	}

}

