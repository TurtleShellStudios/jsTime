beforeEach(function() {
	var user = User.init("Bob", 17.32, "Dev");
});

describe("Initalized user Bob", function() {
	it("Users name is Bob", function() {
		expect(user.userName).toBe("Bob");
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

describe("User changed Name", function(){
	it("Bob changed his name to Sal", function() {
		user.setName("Sal");
		expect(user.userName).toBe("Sal");
	});
});

describe("User changed payRate", function() {
	it("Bob: pay increase to $20.00", function(){
		user.setPayRate(20);
		expect(user.payRate).toBe(20);
	});
});

describe("User changed roles", function() {
	it("Bob decided to be a Scrum Master", function() {
		user.setRole("SM");
		expect(user.role).toBe("SM");
	});
});

describe("User worked some hours", function() {
	it("Bob worked 18.5 hours" function() {
		user.addHoursWorked(18.5);
		expect(user.hoursWorked).toBe(18.5);
	});
	it("Bob worked 18.5 hours, then worked 20 more hours" function() {
		user.addHoursWorked(18.5);
		expect(user.hoursWorked).toBe(18.5);
		user.addHoursWorked(20);
		expect(user.hoursWorked).toBe(20);
	});
});