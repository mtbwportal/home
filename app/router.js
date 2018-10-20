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
var react_router_dom_1 = require("react-router-dom");
var connected_react_router_1 = require("connected-react-router");
var view_1 = require("../view");
var util_1 = require("../util");
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Router.prototype.render = function () {
        var history = this.props.history;
        return (react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: history },
            react_1.default.createElement(view_1.ErrorBoundary, null,
                react_1.default.createElement("div", { className: "app" },
                    react_1.default.createElement(view_1.Header, null),
                    react_1.default.createElement("div", { className: "app-dashboard" },
                        react_1.default.createElement(view_1.Sidebar, null),
                        react_1.default.createElement("div", { className: "app-content" },
                            react_1.default.createElement(react_router_dom_1.Switch, null,
                                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: util_1.urls.welcome(), component: view_1.Welcome }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: util_1.urls.home(), component: view_1.Home }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: util_1.urls.players(), component: view_1.Players }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: util_1.urls.teams(), component: view_1.Teams }),
                                react_1.default.createElement(react_router_dom_1.Route, { component: view_1.NotFound })))),
                    react_1.default.createElement(view_1.Footer, null)))));
    };
    return Router;
}(react_1.default.Component));
exports.default = Router;
//# sourceMappingURL=router.js.map