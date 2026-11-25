var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		const volume = Math.round(video.volume) * 100;
		document.querySelector("#volume").textContent = volume + "%";
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate = video.playbackRate * 0.9;
		console.log("New speed is " + video.playbackRate * 100 + "%");
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate = video.playbackRate / 0.9;
		console.log("New speed is " + video.playbackRate * 100 + "%");
	});

	document.querySelector("#skip").addEventListener("click", function() {
		const newTime = video.currentTime + 10;
		if (newTime > video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current location is " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		const muteState = video.muted;
		if (muteState) {
			video.muted = false;
			document.querySelector("#mute").textContent = "Mute";
		} else {
			video.muted = true;
			document.querySelector("#mute").textContent = "Unmute";
		}
	});

	document.querySelector("#slider").addEventListener("input", function() {
		const sliderVolume = document.querySelector("#slider").value;
		video.volume = sliderVolume / 100;
		document.querySelector("#volume").textContent = sliderVolume + "%";
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});


