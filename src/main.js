var timerID;
var prevTime = 0;

var startTimer = new timer();
document.getElementById('startstop').addEventListener('click', function() 
{
	if(!startTimer.isStarted)
	{
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
		document.getElementById('startstop').innerHTML = 'Stop';
		startTimer.isStarted = true;
	}
	else
	{
		clearInterval(timerID);
		document.getElementById('startstop').innerHTML = 'Start';	
		startTimer.isStarted = false;
	}
});