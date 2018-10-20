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
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (err, info) {
        this.setState(function () { return ({ err: err }); });
        console.log("caught error: " + JSON.stringify(err));
        console.log(info);
    };
    ErrorBoundary.prototype.render = function () {
        var children = this.props.children;
        if (this.state.err) {
            var err = this.state.err;
            return (react_1.default.createElement("div", { className: "error-boundary" },
                react_1.default.createElement("h1", { className: "error-boundary-title" }, "Oops...this error is no yolk!"),
                react_1.default.createElement("p", { className: "error-boundary-advice" }, "Try refreshing the page. If the problem persists, then we are already aware of this issue. Hang tight!"),
                react_1.default.createElement("hr", null),
                react_1.default.createElement("div", { className: "error-boundary-details" },
                    react_1.default.createElement("h5", null, err.name),
                    react_1.default.createElement("pre", null, err.message))));
        }
        return children;
    };
    return ErrorBoundary;
}(react_1.default.Component));
exports.default = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map