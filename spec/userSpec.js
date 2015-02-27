describe("User Specifications | ", function() {
	var user;

	beforeEach(function() {
		user = new user("Bob", 17.32, "Dev");
	});

	describe("Initalized user Bob | ", function() {
		it("Users name is Bob", function() {
			expect(user.username).toBe('Bob');
		});
		it("Users payrate is $17.32", function() {
			expect(user.payRate).toBe(17.32);
		});
		it("Users role is Dev", function() {
			expect(user.role).toBe("Dev");
		});
		it("Users hours worked should start at 0", function() {
			expect(user.hoursWorked).toBe(0);
		});
	});

	describe("Initalized user Steve | ", function() {
		var user2;
		beforeEach(function() {
			user2 = new User("Steve", 19.20, "QA")
		});
		it("User2's name is Steve", function() {
			expect(user2.username).toBe('Steve');
		});
		it("First User's name should still be Bob", function() {
			expect(user.username).toBe('Bob');
		});
		it("User2's payrate is $17.32", function() {
			expect(user2.payRate).toBe(19.20);
		});
		it("User2's role is Dev", function() {
			expect(user2.role).toBe("QA");
		});
		it("Users hours worked should start at 0", function() {
			expect(user2.hoursWorked).toBe(0);
		});
	});

	describe("User changed Name | ", function(){
		it("Bob changed his name to Sal", function() {
			user.setName("Sal");
			expect(user.username).toBe("Sal");
		});
	});

	describe("User changed payRate | ", function() {
		it("Bob: pay increase to $20.00", function(){
			user.setPayRate(20);
			expect(user.payRate).toBe(20);
		});
	});

	describe("User changed roles | ", function() {
		it("Bob decided to be a Scrum Master", function() {
			user.setRole("SM");
			expect(user.role).toBe("SM");
		});
	});

	describe("User worked some hours | ", function() {
		it("Bob worked 18.5 hours", function() {
			user.addHoursWorked(18.5);
			expect(user.hoursWorked).toBe(18.5);
		});
		it("Bob worked 18.5 hours, then worked 20 more hours", function() {
			user.addHoursWorked(18.5);
			expect(user.hoursWorked).toBe(18.5);
			user.addHoursWorked(20);
			expect(user.hoursWorked).toBe(38.5);
		});
	});
});