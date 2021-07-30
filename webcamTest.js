function startWebcam() {
	var videoPlayer = document.getElementById('videoPlayer');

	var handleSuccess = function(stream) {
		videoPlayer.srcObject = stream;
	};

	navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(handleSuccess);
}