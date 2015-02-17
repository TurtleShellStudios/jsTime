describe("Timer Specifications", function() {

	beforeEach(function() {
		var timer = Timer.init()
	});

	describe("Initialize Tests", function() {
		it("Timer initialized to 0", function() {
			expect(timer.elapsedTime()).toBe(0);
		});
		it("Timer initialized as stopped", function() {
			expect(timer.isStarted).toBe(false);
		});
		it("Timer label's value intialized as 00:00:00", function() {
			expect(timer.timeLabel).toBe('00:00:00');
		});
	});

	describe("Setting a task", function() {
		beforeEach(function() {
			var task = Task.init("Issue 1",10800);
			timer.assocTask(task);
			expect(timer.task).toBe(task);
		});
	});

	describe("Running the timer", function() {
		it("Time after 5 seconds will be 5", function() {
			timer.start()
			setTimeout(function() {timer.stop();}, 5000);
			expect(timer.elapsedTime).toBe(5);
		});
	});

});