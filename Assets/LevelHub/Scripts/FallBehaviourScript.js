#pragma strict

var level2 : boolean;
var level3 : boolean;
var level4 : boolean;

function Update () {

	if (transform.position.y < -30) {
		if (level2 == true) {
			Application.LoadLevel(5);
		} if (level3 == true) {
			Application.LoadLevel(10);
		} if (level4 == true) {
			Application.LoadLevel(11);
		}
	}

}