// class Company{
//   name: string;
//   employees: string;
//   teamlead: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   constructor(name: string, employees: string, teamlead: string){
//     this.name = name;
//     this.employees = employees;
//     this.teamlead = teamlead;
//   }
// }
// class CompanyMain extends Company{
// }
var passcode = "Team is formed";
var Company = /** @class */ (function () {
    function Company() {
    }
    Object.defineProperty(Company.prototype, "company_details", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (passcode && passcode == "Team is formed") {
                this._name = newName;
            }
            else {
                console.log("Unauthorized update!");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "main", {
        get: function () {
            return this._employees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "team", {
        get: function () {
            return this._teamlead;
        },
        enumerable: false,
        configurable: true
    });
    return Company;
}());
var CompanyMain = /** @class */ (function (_super) {
    __extends(CompanyMain, _super);
    function CompanyMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CompanyMain.prototype, "main", {
        // main():void{
        //   var myString = "Employees: " + this._employees + "," + "Lead: "  + this._teamlead ;
        //   var [address, mobiles] = myString.split(",");
        //   console.log(address);
        //   console.log(mobiles);
        // }
        set: function (newEmp) {
            this._employees = newEmp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyMain.prototype, "team", {
        set: function (newTeam) {
            this._teamlead = newTeam;
        },
        enumerable: false,
        configurable: true
    });
    return CompanyMain;
}(Company));
var comp = new Company();
var dd = new CompanyMain();
comp.company_details = "L&T Technology Services";
dd.main = "Ravi,Ram,Krishna,Shakir,Thomas";
dd.team = "Thomas";
if (comp.company_details) {
    console.log("Name: " + "" + comp.company_details);
    console.log("Employees; " + dd.main);
    console.log("Lead: " + " " + dd.team);
}
