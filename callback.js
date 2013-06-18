/* This file is my attempt at teaching you how JavaScript callbacks work.  While learning callbacks I feel most 
examples I have come across are to complicated.  This is my attempt to create a VERY basic example in which I can 
explain to myself how they work.

This simple script accepts an array of website names and them formats them with the correct "www." and ".com".  */


var urlArray = ['google', 'yahoo', 'ebay'];										




var userNotify = function(data, callback) {  // 2. data = urlArray and callback = our anonymous function defined on line 27. 
	var
		err
	;
	
	if (err) {
		callback(err);
	}
	
	else {
		for (var i = 0; i < data.length; i++) {	 // 3. Function that modifys each urlArray element.										
			console.log("Modifying string \"" + data[i] + "\" to correct format...");
			data[i] = "www." + data[i] + ".com";
		}
		callback(err, data);	// 4. After loop completes, the callback is executed (the anonymous function defined on line 21).
	}
};

userNotify(urlArray, function(err, data) {    // 1. We start our script by sending "urlArray" and a callback to "userNotify."  
	if (err) {	// 5. If an error exists we will console.log it to screen. err was sent to this function on line 18.
		console.log(err);
	}
	else {     // 6.  No error exists we will console.log data.  data was sent to this function on line 18.
		console.log(data);
	}
}); 