describe("Task Specifications", function () {
    var task, user1, user2;

    beforeEach(function (){
        task = new Task("Issue 1",10800);
        user1 = new User("Bob",15.38,"Dev");
        user2 = new User("Jane",14.00,"QA");
    });

    describe("Task initialized", function () {
        it ("Task's name is 'Issue 1'", function () {
            expect(task.taskName).toBe("Issue 1");
        });

        it ("Task's estimated time is 3 hours (10800 s)", function () {
            expect(task.estHours).toBe(10800);
        });

        it ("Task's actual hours starts at 0", function () {
            expect(task.actHours).toBe(0);
        });
    });

    describe("Types Added, Changed", function () {
        it ("Task's type initialized to none", function () {
            expect(task.taskType).toBe(task.type_enum['NONE']);
        });
        it ("Task's type changed to 'Bug'", function () {
            task.setTaskType(task.type_enum['BUG']);
            expect(task.taskType).toBe("Bug");
        });
    });

    //test adding, changing of ActHours
    describe("Actual Hours Added, Changed", function () {
        it ("Task's actual hours updated to 3", function () {
            task.addActHours(3);
            expect(task.actHours).toBe(3);
        });
        it ("Task's actual hours updated to 5 (2 steps)", function () {
            task.addActHours(3);
            task.addActHours(2);
            expect(task.actHours).toBe(5);
        });
    });

    describe("Estimated Hours Edited", function () {
        it ("Task's estimated hours updated to 7", function () {
            task.setEstHours(7);
            expect(task.estHours).toBe(7);
        });
    });

    describe("User Assigned, Unassigned, Reassigned", function () {
        it ("Task's User assigned to Bob (user1)", function () {
            task.setUser(user1);
            expect(task.user).toBe(user1);
        });
        it ("Task's User unassigned (null)", function () {
            task.setUser(null);
            expect(task.user).toBe(null);
        });
        it ("Task's User reassigned to Jane (user2)", function () {
            task.setUser(user1);
            task.setUser(user2);
            expect(task.user).toBe(user2);
        });
    });

    //test assign, change RateMult
    describe ("RateMult set, changed", function () {
        it ("Task's Multiplier set", function () {
            task.setRateMult(1.2);
            expect(task.rateMult).toBe(1.2);
        });
        it ("Task's Multiplier reset (2 steps)", function () {
            task.setRateMult(1.3);
            task.setRateMult(1.8);
            expect(task.rateMult).toBe(1.8);
        });
    });
});
