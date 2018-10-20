"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var history_1 = require("history");
var redux_1 = require("redux");
var connected_react_router_1 = require("connected-react-router");
var state_1 = require("../state");
var ENV_PROD = 'production';
var Harness = /** @class */ (function () {
    function Harness(http, env) {
        this.http = http;
        this.env = env;
        this.history =
            typeof window !== 'undefined' ? history_1.createBrowserHistory({ basename: env.PUBLIC_URL }) : history_1.createMemoryHistory();
        this.middlewares = [connected_react_router_1.routerMiddleware(this.history), redux_thunk_1.default.withExtraArgument({ http: http, env: env })];
        var composeEnhancers;
        if (this.env.NODE_ENV !== ENV_PROD) {
            this.setupLoggerMiddleware();
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
        }
        else {
            composeEnhancers = redux_1.compose;
        }
        this.store = redux_1.createStore(connected_react_router_1.connectRouter(this.history)(state_1.reducers), state_1.initialAppState, composeEnhancers(redux_1.applyMiddleware.apply(void 0, this.middlewares)));
    }
    Harness.prototype.setupLoggerMiddleware = function () {
        var createLogger = require('redux-logger').createLogger;
        this.middlewares.push(createLogger({ duration: true }));
    };
    return Harness;
}());
exports.default = Harness;
//# sourceMappingURL=harness.js.map