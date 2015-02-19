describe("Timer Specifications", function() {
	var timer;

	beforeEach(function() {
		timer = new Timer()
	});

	describe("Initialize Tests", function() {
		it("Timer initialized to 0", function() {
			expect(timer.elapsedTime).toBe(0);
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
			var startTime = new Date().getTime()
			while((((new Date().getTime()) - startTime) / 1000) < 5);
			timer.stop()
			expect(timer.elapsedTime).toBe(5);
		});
	});

});