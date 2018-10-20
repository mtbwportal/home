"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
var react_redux_1 = require("react-redux");
var mmdb_client_factory_1 = require("mmdb-client-factory");
var app_1 = require("./app");
require('../static/favicon.ico');
require('../static/main.less');
// TODO: extract url and credentials to env vars
mmdb_client_factory_1.ClientFactory.buildHttp().then(function (client) {
    new app_1.Icons().doInit();
    var app = new app_1.Harness(client, process.env);
    var renderApp = function (Component) {
        return react_dom_1.render(react_1.default.createElement(react_redux_1.Provider, { store: app.store },
            react_1.default.createElement(react_hot_loader_1.AppContainer, null,
                react_1.default.createElement(Component, { history: app.history }))), document.getElementById('root'));
    };
    renderApp(app_1.Router);
    if (module.hot) {
        module.hot.accept('./app/router', function () {
            var appRouter = require('./app/router');
            renderApp(appRouter);
        });
    }
});
//# sourceMappingURL=index.js.map