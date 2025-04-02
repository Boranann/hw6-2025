var video;

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to false");
	video.loop = false;
	console.log("Loop is set to false");

	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		document.querySelector("#volume").innerHTML = `${Math.floor(video.volume * 100)}%`;
		console.log("Play Video");
	});

	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});

	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("Slow Down Video");
		console.log(`Speed is ${video.playbackRate}`);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("Speed Up Video");
		console.log(`Speed is ${video.playbackRate}`);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log("Skip ahead");
		console.log(`Video current time is ${video.currentTime}`);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
			console.log("Unmute");
		} else {
			video.muted = true;
			this.textContent = "Unmute";
			console.log("Mute");
		}
	});

	document.querySelector("#slider").addEventListener("change", function() {
		const volume = this.value / 100;
		video.volume = volume;
		console.log(`The current volume is ${video.volume}`);
		document.querySelector("#volume").innerHTML = `${Math.floor(video.volume * 100)}%`;
	}
	);

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Vintage Mode Activated");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Vintage Mode Deactivated");
	});
});

