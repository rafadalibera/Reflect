#pragma strict

//I want to access the transform
var person : Transform;
var text : GUIText;
var chest_v : Transform;
var pickedItUp = false;
static var key = false;
var ani_key : Transform;
var startTime : float;

static var instance : key;
 
function Awake() {
	if(instance == null)
          instance = this;
}

function OnDestroy() {
	if(instance == this)
		instance = null;
}

function Start () {
	ani_key.renderer.enabled = false;

}

function Update () {
	//Somehow I want the transform of the key to follow the person
	//set the position of the key to the position of the person
	//I want to do this only when I "PICK IT UP"
	if (pickedItUp == true) {
		//transform.position = person.transform.position + person.transform.forward*2;
		//transform.position = person.transform.position;
		
		//*** Play animation of an openning chest ***
		
		if(Time.time > startTime + 3) {
		  ani_key.renderer.enabled = false;
		}
		
		
		
		text.text = "you have 1 key";
		key = true;
		
		
	} else {
		text.text = "";
	}

}

function OnMouseDown () {
	//I want to somehow pick it up here
	
	if (pickedItUp == false) {
		pickedItUp = true;
		chest_v.animation.Play();
		transform.audio.Play();
		ani_key.renderer.enabled = true;
		ani_key.animation.Play();
		startTime = Time.time;
	}
		

}

function OnMouseUp () {
	//I want to somehow throw the key
	//How do I access access the rigidbody?
	//rigidbody.velocity = person.transform.forward*20;
	//transform.position = person.transform.position;
	//pickedItUp = false;
	
	
}