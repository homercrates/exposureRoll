// this is to simulate an exposure roll in Dead of Winter
function rollExposure() {
	var exposure = Math.random();
	if (exposure <= .50) {
		result = 'clear';
	} else if (exposure <= .75) {	
		result = 'wound';
	} else if (exposure <= .91) {
		result = 'frostbite';
	} else {
		result = 'bite';
	}

	// console log for dev 
	console.log(result)
	return exposure;
}

// this is event handler when button is clicked it will run the rollExposure button above
var exposureButton = document.getElementById('rollExposureButton');
exposureButton.addEventListener("click", function () { rollExposure() });