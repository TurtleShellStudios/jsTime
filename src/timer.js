function Timer() {
	this.elapsedTime = 0;
	this.isStarted = false;
	this.timeLabel = '00:00:00';
	this.startTime = undefined;

	this.start = function() {
		this.startTime = new Date().getTime();
		console.log(this.startTime);
	}

	this.stop = function() {
		var stopTime = new Date().getTime();
		this.elapsedTime = Math.floor((stopTime - this.startTime) / 1000);
	}
}