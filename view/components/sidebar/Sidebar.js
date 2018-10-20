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
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sidebar.prototype.render = function () {
        var _a = this.props, gotoHome = _a.gotoHome, gotoPlayers = _a.gotoPlayers, gotoTeams = _a.gotoTeams;
        return (react_1.default.createElement("div", { className: "app-sidebar" },
            react_1.default.createElement("button", { onClick: gotoHome },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "home", size: "2x" })),
            react_1.default.createElement("button", { onClick: gotoTeams },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "grip-horizontal", size: "2x" })),
            react_1.default.createElement("button", { onClick: gotoPlayers },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "male", size: "2x" }))));
    };
    return Sidebar;
}(react_1.default.Component));
var mapStateToProps = function (state) { return ({
    location: state.router.location.pathname,
}); };
var mapDispatchToProps = function (dispatch) {
    return {
        gotoHome: function () { return dispatch(connected_react_router_1.push('/home')); },
        gotoPlayers: function () { return dispatch(connected_react_router_1.push('/players')); },
        gotoTeams: function () { return dispatch(connected_react_router_1.push('/teams')); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sidebar);
//# sourceMappingURL=Sidebar.js.map