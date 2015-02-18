function Task(taskName,estHours) {
    this.taskName = taskName;
    this.estHours = estHours;
    this.actHours = 0;
    this.taskType = this.type_enum['NONE'];
    this.user = null;
    this.rateMult = 1;

    this.type_enum = {
        BUG : "Bug",
        ENHANCEMENT : "Enhancement",
        TESTING : "Testing",
        DESIGN : "Design",
        NONE : ""
    };

    this.setEstHours = function (estHours) {
        this.estHours = estHours;
    };

    this.setActHours = function (actHours) {
        this.actHours = actHours;
    };

    this.addActHours = function (actHours) {
        this.actHours += actHours;
    };

    this.setTaskType = function (taskType) {
        this.taskType = taskType;
    };

    this.setUser = function (user) {
        this.user = user;
    };

    this.setRateMult = function (rateMult) {
        this.rateMult = rateMult;
    };
};
