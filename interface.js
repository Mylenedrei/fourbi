	var bool=true;




	//var about = document.getElementById("btn-infos");
addEventListener("click", function(){
	 // console.log("Hello World");
	});


function fermer(){


var info = document.getElementById('infos-id');
	if (!bool){
		//cacher l'info
		info.classList.add("cacher");
		bool =!bool;
	}
}


function montrerInfo(){
	// alert("Hello! I am an alert box!!");
	var info = document.getElementById('infos-id');

	bool = !bool;

	if(bool){
		//cacher l'info
		info.classList.add("cacher");
	}else {

		//montrer l'info
		info.classList.remove("cacher");
	}


}
