	var bool=true;
	

function fermer(){
var info = document.getElementById('infoSquare');
	if (!bool){
		//cacher l'info
		info.classList.add("cacher");
		bool =!bool;
	}
}


function montrerInfo(){
	// alert("Hello! I am an alert box!!");
	var info = document.getElementById('infoSquare');

	bool = !bool;
	
	if(bool){
		//cacher l'info
		info.classList.add("cacher");
	}else {

		//montrer l'info
		info.classList.remove("cacher");
	}




}