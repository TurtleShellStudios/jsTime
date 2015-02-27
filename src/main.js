var timerID;
var prevTime = 0;

var startTimer = new timer();
var assignedUser = new user("armandm", 19.00, "Dev");
var assocTask = new task("Fix all that junk!!", 7200);
assocTask.setTaskType(assocTask.type_enum['BUG']);

document.getElementById('taskNameLabel').innerHTML = assocTask.taskName;
document.getElementById('taskTypeLabel').innerHTML = assocTask.taskType;
document.getElementById('taskHoursLabel').innerHTML = (assocTask.estHours/3600);

document.getElementById('username').innerHTML = "User: " + assignedUser.username;
document.getElementById('role').innerHTML = "Role: " + assignedUser.role;
document.getElementById('payRate').innerHTML = "Pay Rate: $" + assignedUser.payRate + "/hr";
document.getElementById('taskCost').innerHTML = "Task Cost: $" + (assignedUser.payRate * assocTask.estHours / 3600);

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
