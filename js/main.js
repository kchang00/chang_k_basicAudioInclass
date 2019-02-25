(() => {

	// create a variable stack and grab all of the DOM elements from the page
	
	let aud = document.querySelector('audio'),
		play = document.querySelector('#playBtn'),
		pause = document.querySelector('#pauseBtn'),
		rewind = document.querySelector('#rewindBtn'),

	// write the functions for the audio element
	function playAudio() {
		aud.play();
	}

	function pauseAudio() {
		aud.pause(true);
	}

	function rewindAudio() {
		aud.currentTime = 0;
	}

	// add event handling
	play.addEventListener('click', playAudio);
	pause.addEventListener('click', pauseAudio);
	rewind.addEventListener('click', rewindAudio);

})();