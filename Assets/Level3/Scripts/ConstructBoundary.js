import System.Math;

var mapAsset : TextAsset;
var mapAsset1 : TextAsset;
var mapAsset2 : TextAsset;
var blockPrefabUp : Transform;
var blockPrefabDown : Transform;
var particle1 : Transform;
var particle2 : Transform;
var particle3 : Transform;
var particle4 : Transform;
var doorPrefabUp : Transform;
var doorPrefabDown : Transform;
var characterPrefab : Transform;

//var map = mapAsset.text.Split ("\n"[0]);

function Awake () {
var map = mapAsset.text.Split ("\n"[0]);
/*
	var op = Random.Range(-1,2);

	if (op == 0) {
		map = mapAsset1.text.Split ("\n"[0]);
	} else if (op == 1) {
		map = mapAsset2.text.Split ("\n"[0]);
	}
*/	
    var v = new Vector3 ();
    v.y = 1.0;
    for (var j = 0; j < map.length; j ++) {
        v.z = (map.length - j - 1);
        for (var i = 0; i < map[j].length; i ++) {
            v.x = (i - map[j].length) + 1;
            if (map[j][i] == "X") {
            	if (j == map.length-1 || j == 0 || i == map[j].length-1 || i == 0) {
            		var inst = Instantiate (blockPrefabDown, v, Quaternion.identity);
                	inst.transform.parent = transform;
            	} else { 
                	inst = Instantiate (blockPrefabUp, v, Quaternion.identity);
                	inst.transform.parent = transform;
                }
            //}  else if (map[j][i] == "1") {
            //    Instantiate (particle1, v, Quaternion.identity);
            //} else if (map[j][i] == "2") {
            //    Instantiate (particle2, v, Quaternion.identity);
            //} else if (map[j][i] == "3") {
            //    Instantiate (particle3, v, Quaternion.identity);
            //} else if (map[j][i] == "4") {
            //    Instantiate (particle4, v, Quaternion.identity);
            } else if (map[j][i] == "C") {
                Instantiate (characterPrefab, v, Quaternion.identity);
            } //else if (map[j][i] == "D") {
                //Instantiate (doorPrefabUp, v, Quaternion.identity);
            //}
        }
    }
    
    var r = new Vector3 ();
    r.y = -1.2;
    for ( j = 0; j < map.length; j ++) {
        r.z = (map.length - j - 1);
        for ( i = 0; i < map[j].length; i ++) {
            r.x = (i - map[j].length) + 1;
            if (map[j][i] == "X") {
                inst = Instantiate (blockPrefabDown, r, Quaternion.identity);
                inst.transform.parent = transform;
            }  else if (map[j][i] == "1") {
                Instantiate (particle1, r, Quaternion.identity);
            } else if (map[j][i] == "2") {
                Instantiate (particle2, r, Quaternion.identity);
            } else if (map[j][i] == "3") {
                Instantiate (particle3, r, Quaternion.identity);
            } else if (map[j][i] == "4") {
                Instantiate (particle4, r, Quaternion.identity);
            } //else if (map[j][i] == "D") {
                //Instantiate (doorPrefabDown, r, Quaternion.identity);
            //}
        }
    }
  
    var w = new Vector3 ();
    w.y = 3.0;
    for (j = 0; j < map.length; j ++) {
        w.z = (map.length - j - 1);
        for (i = 0; i < map[j].length; i ++) {
            w.x = (i - map[j].length) + 1;           
                Instantiate (blockPrefabDown, w, Quaternion.identity);
        }
    }
    
    var q = new Vector3 ();
    q.y = -3.2;
    for (j = 0; j < map.length; j ++) {
        q.z = (map.length - j - 1);
        for (i = 0; i < map[j].length; i ++) {
            q.x = (i - map[j].length) + 1;           
                Instantiate (blockPrefabDown, q, Quaternion.identity);
        }
    }
    
}
