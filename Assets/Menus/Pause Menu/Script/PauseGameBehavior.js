var gamePaused :boolean = false;

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		if (gamePaused == true) {
			Time.timeScale = 1;
			gamePaused = false;
			gameObject.GetComponent(PauseMenu).enabled = false;
		}
		if (gamePaused == false) {
			Time.timeScale = 0;
			gamePaused = true;
			gameObject.GetComponent(PauseMenu).enabled = true;
		}
	}

}