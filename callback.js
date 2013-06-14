/* This file is my attempt at teaching you how JavaScript callbacks work.  While learning callbacks I feel most 
examples I have come across are to complicated.  This is my attempt to create a VERY basic example in which I can 
explain to myself how they work.

This simple script accepts an array of website names and them formats them with the correct "www." and ".com".  */


var urlArray = ['google', 'yahoo', 'ebay'];										

var userNotify = function(data, callback) {  // 2. data = urlArray and callback = "makeUrl". 
	for (var i = 0; i < data.length; i++) {											
		console.log("Modifying string \"" + data[i] + "\" to correct format...");	
	}

	callback(data, printArray);	// 3. After loop completes, the callback is executed (in this case data is sent to function makeUrl with the the printArray callback).																																					

};

var makeUrl = function(data, callback) {  // 4.  makeUrl gets data and callback (callback = printArray).										
	for (var i = 0; i < data.length; i++) {											
		data[i] = "www." + data[i] + ".com";
	}
	callback(data);	// 5. The callback printArray is executed with the modified data array.
}; 																				
										
var printArray = function(data) {  // 6. Array is printed out
	console.log(data);
};

userNotify(urlArray, makeUrl);  // 1. We start our script by sending "urlArray" and "makeUrl" to function "userNotify."  