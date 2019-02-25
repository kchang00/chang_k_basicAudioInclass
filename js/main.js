(() => {

	// create a variable stack and grab all of the DOM elements from the page
	
	let aud = document.querySelector('audio'),
		play = document.querySelector('#playBtn'),
		pause = document.querySelector('#pauseBtn'),
		rewind = document.querySelector('#rewindBtn'),
		tracks = document.querySelectorAll('.trackholder');

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

	function swapSource() {
		let currentTrack = this.dataset.currenttrack;

		// indicates source in js, isn't defined in html
		aud.src = `audio/${currentTrack}`;
		aud.load();
		aud.play();
	}

	// add event handling
	play.addEventListener('click', playAudio);
	pause.addEventListener('click', pauseAudio);
	rewind.addEventListener('click', rewindAudio);

	tracks.forEach(track => track.addEventListener('click', swapSource));

})();