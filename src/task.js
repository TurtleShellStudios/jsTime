function Task(pTaskName,pEstHours) {
    this.taskName = pTaskName;
    this.estHours = pEstHours;
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

    this.setEstHours = function (pEstHours) {
        this.estHours = pEstHours;
    };

    this.setActHours = function (pActHours) {
        this.actHours = pActHours;
    };

    this.addActHours = function (pActHours) {
        this.actHours += pActHours;
    };

    this.setTaskType = function (pTaskType) {
        this.taskType = pTaskType;
    };

    this.setUser = function (user) {
        this.user = user;
    };

    this.setRateMult = function (rateMult) {
        this.rateMult = rateMult;
    };
};
