"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var defaultState = {
    time: new Date().toLocaleString(),
};
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = defaultState;
        return _this;
    }
    Footer.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "app-footer" },
            react_1.default.createElement("p", null, "established in 2013."),
            react_1.default.createElement("p", null, new Date().toDateString())));
    };
    return Footer;
}(react_1.default.Component));
exports.default = Footer;
//# sourceMappingURL=Footer.js.map