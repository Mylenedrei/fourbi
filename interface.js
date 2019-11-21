	var bool=true;

// function cacherInfo(){
// 	var info = document.getElementById('infoSquare');
// 	console.log("le bool" + bool);
// 	if(bool==false){
// 		info.classList.add("cacher");

// 	}else{
// 		//info.classList.remove("cacher");

// 	}

// }


function montrerInfo(){
	// alert("Hello! I am an alert box!!");
	var info = document.getElementById('infoSquare');

	bool = !bool;
	
	if(bool){
		info.classList.add("cacher");
	}else {
		
		info.classList.remove("cacher");
}


}