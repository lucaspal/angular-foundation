var VATCalculator = /** @class */ (function () {
    function VATCalculator() {
    }
    VATCalculator.prototype.calculate = function (amount) {
        return amount * 1.25;
    };
    return VATCalculator;
}());
var vat = new VATCalculator();
console.log(vat.calculate(100));
console.log(vat.calculate(120));
