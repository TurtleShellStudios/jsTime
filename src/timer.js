var timerID;
var prevTime = 0;

var timer = function () {
	this.elapsedTime = 0;
	this.periodTime = 0;
	this.isStarted = false;
	this.timeLabel = '00:00:00';
	this.startTime = 0;

	this.start = function() {
		this.startTime = new Date().getTime();
		console.log(this.startTime);
	}

	this.stop = function() {
		var stopTime = new Date().getTime();
		this.elapsedTime = Math.floor((stopTime - this.startTime) / 1000);
	}
}

document.getElementById('start').addEventListener('click', function() 
{
	var startTimer = new timer();
	startTimer.start();
	timerID = window.setInterval(function() {
			var time = Math.floor(((new Date().getTime()) - startTimer.startTime) / 1000);
			console.log(time);
			var seconds = (startTimer.elapsedTime + time) % 60;
			var minutes = Math.floor((time / 60) % 60);
			var hours = Math.floor((time / 60) / 60);
			startTimer.timeLabel = hours.toString().concat(':', minutes.toString(), ':', seconds.toString());
			console.log(startTimer.timeLabel);
			document.getElementById('time').innerHTML = startTimer.timeLabel;
	}, 1000);
});

document.getElementById('stop').addEventListener('click', function() {
	clearInterval(timerID);
});