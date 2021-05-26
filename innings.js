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
var Innings = /** @class */ (function () {
    function Innings(teamname, inningsname) {
        this.teamname = teamname;
        this.inningsname = inningsname;
    }
    return Innings;
}());
var InningsMain = /** @class */ (function (_super) {
    __extends(InningsMain, _super);
    function InningsMain(teamname, inningsname, runs) {
        var _this = _super.call(this, teamname, inningsname) || this;
        _this.runs = runs;
        return _this;
    }
    InningsMain.prototype.displayInningsDetails = function () {
        console.log("Team name:" + " " + this.teamname);
        console.log("Innings name:" + " " + this.inningsname);
        console.log("Runs:" + " " + this.runs);
    };
    return InningsMain;
}(Innings));
var get = new InningsMain("Austrlia", "first", 200);
get.displayInningsDetails();
