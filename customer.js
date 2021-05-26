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
var Customer = /** @class */ (function () {
    function Customer(name, address, mobile) {
        this.name = name;
        this.address = address;
        this.mobile = mobile;
    }
    return Customer;
}());
var CustomerMain = /** @class */ (function (_super) {
    __extends(CustomerMain, _super);
    function CustomerMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerMain.prototype.main = function () {
        var myString = "Name: " + this.name + "," + "Address: " + this.address + "," + "Mobile: " + this.mobile;
        var _a = myString.split(","), name = _a[0], address = _a[1], mobiles = _a[2];
        console.log(name);
        console.log(address);
        console.log(mobiles);
    };
    return CustomerMain;
}(Customer));
var cust = new CustomerMain("Ravi", "Pune", "9999888666");
cust.main();
