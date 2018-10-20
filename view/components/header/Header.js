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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var gotoWelcome = this.props.gotoWelcome;
        return (react_1.default.createElement("div", { className: "app-header" },
            react_1.default.createElement("img", { src: "static/logo.png", alt: "mmdb", onClick: gotoWelcome })));
    };
    return Header;
}(react_1.Component));
var mapStateToProps = function (state) { return ({
    location: state.router.location.pathname,
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        gotoWelcome: function () { return dispatch(connected_react_router_1.push('/')); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Header);
//# sourceMappingURL=Header.js.map