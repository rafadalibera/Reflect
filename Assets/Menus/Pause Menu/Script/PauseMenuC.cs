using UnityEngine;
using System.Collections;

public class PauseMenuC : MonoBehaviour {
	
	public GUISkin myskin;
	
	public bool level2 = false;
	public bool level3 = false;
	
	private Rect windowRect;
	private bool paused = false, waited = true;

	// Use this for initialization
	private void Start () {
		windowRect = new Rect(Screen.width/2 - 100, Screen.height/2 - 100, 200, 200);
	
	}
	
	private void waiting() {
		waited = true;
	}
	
	// Update is called once per frame
	void Update () {
		if (waited) {
			if(Input.GetKey(KeyCode.Escape) || Input.GetKey(KeyCode.P)) {
				if (paused) {
					paused = false;
				} else {
					paused = true;
				}
				
				waited = false;
				Invoke("waiting", 0.3f);
			}			
		}
		if (paused) {
			Time.timeScale = 0;
		} else {
			Time.timeScale = 1;
		}
	
	}
	
	private void OnGUI() {
		if (paused)
			windowRect = GUI.Window(0, windowRect, windowFunc, "Pause Menu");
	}
	
	private void windowFunc (int id) {
		if (GUILayout.Button("Resume")) {
			paused = false;
		}
		if (GUILayout.Button("Main Menu")) {
			Application.LoadLevel(0);
		}
		if (GUILayout.Button("Quit")) {
			Application.Quit();
		}
		if (level2) {
			if (GUILayout.Button("Back to hub")) {
				Application.LoadLevel(5);
			}
		}
		if (level3) {
			if (GUILayout.Button("Back to hub")) {
				Application.LoadLevel(10);
			}
		}
	}
	
}
