#pragma strict

var openDoor: boolean;
var door1: boolean;
var door2: boolean;

//var anim : Animator;
//var currentBaseState: AnimatorStateInfo;
//var click;

var startTime : float;

function Start () {
	openDoor = false;
	//anim = gameObject.GetComponent(Animator);
	//click = false;
	//anim.SetBool("cliked", false);
}

function FixedUpdate () {
	//currentBaseState = anim.GetCurrentAnimatorStateInfo(0);
	
	if (openDoor == true) {
		if (door1 == true) {
			if(Time.time > startTime + 2) {
				Application.LoadLevel(8);		  
			}
		}
		if (door2 == true) {
			if(Time.time > startTime + 2) {
				Application.LoadLevel(9);		  
			}
		}
	}
}

function OnMouseDown () {
		transform.audio.Play();
		//transform.animation.Play();
		animation.Play();
		startTime = Time.time;	
		openDoor = true;	
		
		//anim.SetBool("cliked", true);
}
