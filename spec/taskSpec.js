describe("Task Specifications", function () {
    
beforeEach(function (){
    var task = Task.init("Issue 1",10800);
    var user1 = User.init("Bob",15.38,"Dev");
    var user2 = User.init("Jane",14.00,"QA");
});

describe("Task initialized", function () {
    it ("Task's name is 'Issue 1'", function () {
        expect(task.getName()).toBe("Issue 1");
    });

    it ("Task's estimated time is 3 hours (10800 s)", function () {
        expect(task.getEstHours()).toBe(10800);
    });

    it ("Task's actual hours starts at 0", function () {
        expect(task.getActHours()).toBe(0);
    });
});

describe("Types Added, Changed", function () {
    it ("Task's type initialized to null", function () {
        expect(task.getType()).toBe(null);
    });
    it ("Task's type changed to 'Bug'", function () {
        task.setType("Bug");
        expect(task.getType()).toBe("Bug");
    });
});

//test adding, changing of ActHours
describe("Actual Hours Added, Changed", function () {
    it ("Task's actual hours updated to 3", function () {
        task.addActHours(3);
        expect(task.getActHours()).toBe(3);
    });
    it ("Task's actual hours updated to 5 (2 steps)", function () {
        task.addActHours(3);
        task.addActHours(2);
        expect(task.getActHours()).toBe(5);
    });
});

describe("Estimated Hours Edited", function () {
    it ("Task's estimated hours updated to 7", function () {
        task.setEstHours(7);
        expect(task.getEstHours(7)).toBe(7);
    });
});

describe("User Assigned, Unassigned, Reassigned", function () {
    it ("Task's User assigned to Bob (user1)", function () {
        task.assignUser(user1);
        expect(task.getUser()).toBe(user1);
    });
    it ("Task's User unassigned (null)", function () {
        task.assignUser(null);
        expect(task.getUser()).toBe(null);
    });
    it ("Task's User reassigned to Jane (user2)", function () {
        task.assignUser(user1);
        task.assignUser(user2);
        expect(task.getUser()).toBe(user2);
    });
});

//test assign, change RateMult
describe ("RateMult set, changed", function () {
    it ("Task's Multiplier set", function () {
        task.setRateMult(1.2);
        expect(task.getRateMult()).toBe(1.2);
    });
    it ("Task's Multiplier reset (2 steps)", function () {
        task.setRateMult(1.3);
        task.setRateMult(1.8);
        expect(task.getRateMult()).toBe(1.8);
    });
});
});
