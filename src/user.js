function user(name, rate, role) {
	
	this.username = name;
	this.payRate = rate;
	this.role = role;
	this.hoursWorked = 0;
	
	this.setName = function(name) {
		this.username = name;
	};

	this.setPayRate = function(rate) {
		this.payRate = rate;
	};

	this.setRole = function(role) {
		this.role = role;
	};

	this.addHoursWorked = function(hours) {
		this.hoursWorked += hours;
	};
};