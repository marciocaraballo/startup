self.addEventListener('message',function(event){
	
});

function startCountDown(i,p,f) {
// store parameters
	var pause = 1000;
	var fn = f;
	var i=60;
	// make reference to div
	var countDownObj = document.getElementById("countDown");
	if (countDownObj == null) {
	// error
		alert("div not found, check your id");
	// bail
	return;
	}
	countDownObj.count = function(i) {
	// write out count
		countDownObj.innerHTML = i;
		if (i == 0) {
		// execute function
		fn();
		// stop
		return;
	}
	setTimeout(function() {
	// repeat
		countDownObj.count(i - 1);
	},
	pause
	);
	}
	// set it going
	countDownObj.count(i);
	}

	function myFunction() {
	alert("hi alex");
}