var menuHeight:float=500;
var menuWidth:float=500;
var buttonSpacing:float=25;
var mainMenu: String = "MainMenu";
var titleTexture:Texture2D;
var customSkin:GUISkin;
var customStyle:GUIStyle;

function OnGUI(){
	GUI.skin = customSkin;
	GUILayout.BeginArea(Rect(Screen.width/2-menuWidth/2,Screen.height/2-menuHeight/2,menuHeight,menuWidth),customStyle);
	GUILayout.Space(50);
	GUILayout.Label(titleTexture);
	GUILayout.Space(buttonSpacing);
	
	if(GUILayout.Button("Main Menu")) {
		Application.LoadLevel(mainMenu);
	}
	
	GUILayout.Space(buttonSpacing);
	
	if(GUILayout.Button("Exit to Desktop")) {
		Application.Quit();
	}
	
	GUILayout.Space(buttonSpacing);
	GUILayout.EndArea();
}