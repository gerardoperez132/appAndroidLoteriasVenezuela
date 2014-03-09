


$(document).ready(function () {

	myurl = "http://nodejs-fyc.rhcloud.com/";

	jQuery.ajax({
	  type: 'GET',
	  dataType: "json",
	  crossDomain:true,
	  url: myurl ,
	  success: function() { console.log('Success!'); },                                                                                                                                                                                       
	  error: function() { console.log('Uh Oh!'); }, 
	    
	  }).done(function ( data ) {
	 console.log(data);
	});

	
});



//$(document).ready(function () {
//	var url = 'http://nodejs-fyc.rhcloud.com/parseN';
//	$.getJSON( url, {
//	    format: "json"
//	  })
//	  .done(function( data ) {
//		  console.log(data);
//	  });
//
//});





//$(document).ready(function () {
//    var url = 'http://nodejs-fyc.rhcloud.com/parseN';
//    $.getJSON(url, function (data) {
////    	$.each( data, function( key, val ) {
////        alert(key);
////    	});
//    });
//}); 