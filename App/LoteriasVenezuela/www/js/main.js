var resultado ; //obj con los datos
//Cargo cuando cargue
$(document).ready(function () {
	
	get();
	
	
});


//cargo cuando lo pidas
$("#refresh").click(function () {
	get();
	
	
});


//funcion para actualizar valores
var refresh = function(){
	//Carga el resultado de Triple Tachira
	$( "#TTa1-a" ).text(resultado.TRIPLETACHIRA1_A);
	$( "#TTa1-b" ).text(resultado.TRIPLETACHIRA1_B);
	
}; 

//Funcion para buscar los resultados en el servidot
function get(){
	
	myurl = "http://nodejs-fyc.rhcloud.com/";
	jQuery.ajax({
	    type: 'GET',
	    dataType: "json",	
	    crossDomain: true,
	    url: myurl,
	    success: function () {
	       //fino
	    },
	    error: function () {
	       //error
	    },

	}).done(function (data) {
	    console.log(data);
	    resultado = data;
	    refresh();
	});
	
}



