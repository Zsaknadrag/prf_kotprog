"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ShufflePipe = (function () {
    function ShufflePipe() {
    }
    ShufflePipe.prototype.transform = function (input) {
        if (!Array.isArray(input)) {
            return input;
        }
        var shuffled = input.slice();
        for (var i = 0, n = input.length - 1, l = n - 1; i < l; ++i) {
            var j = Math.floor(Math.random() * (n - i + 1)) + i;
            _a = [shuffled[j], shuffled[i]], shuffled[i] = _a[0], shuffled[j] = _a[1];
        }
        return shuffled;
        var _a;
    };
    return ShufflePipe;
}());
ShufflePipe = __decorate([
    core_1.Pipe({ name: 'shuffle' })
], ShufflePipe);
exports.ShufflePipe = ShufflePipe;
//# sourceMappingURL=shuffle.js.map