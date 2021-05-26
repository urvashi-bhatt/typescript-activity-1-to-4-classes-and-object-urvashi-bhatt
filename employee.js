var EmployeeMain = /** @class */ (function () {
    function EmployeeMain() {
        this.name = "Ravi";
        this.address = "Pune";
        this.mobile = "9998887771";
    }
    EmployeeMain.prototype.main = function () {
        console.log("Employee Details");
        console.log("Name:" + " " + this.name);
        console.log("Address:" + " " + this.address);
        console.log("Mobile:" + " " + this.mobile);
    };
    return EmployeeMain;
}());
var e = new EmployeeMain();
e.main();
