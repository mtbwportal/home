"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var typescript_fsa_reducers_1 = require("typescript-fsa-reducers");
exports.buildReducer = function (initialState, reducerCases) {
    return reducerCases.reduce(function (reducer, reducerCase) {
        if (!reducerCase.isAsync) {
            var action = reducerCase.actionCreator, stateModifier_1 = reducerCase.stateModifier;
            reducer.case(action, function (state, payload) {
                return immer_1.default(state, function (draft) { return stateModifier_1(draft, payload); });
            });
        }
        else {
            var async = reducerCase.actionCreator, _a = reducerCase.stateModifier, onRequest_1 = _a.onRequest, onSuccess_1 = _a.onSuccess, onFailure_1 = _a.onFailure;
            if (onRequest_1) {
                reducer.case(async.started, function (state, params) {
                    return immer_1.default(state, function (draft) { return onRequest_1(draft, params); });
                });
            }
            if (onSuccess_1) {
                reducer.case(async.done, function (state, success) {
                    return immer_1.default(state, function (draft) { return onSuccess_1(draft, success); });
                });
            }
            if (onFailure_1) {
                reducer.case(async.failed, function (state, failure) {
                    return immer_1.default(state, function (draft) { return onFailure_1(draft, failure); });
                });
            }
        }
        return reducer;
    }, typescript_fsa_reducers_1.reducerWithInitialState(initialState));
};
exports.newActionHandler = function (actionCreator, stateModifier) { return ({ isAsync: false, actionCreator: actionCreator, stateModifier: stateModifier }); };
exports.newAsyncActionHandler = function (actionCreator, stateModifier) { return ({
    isAsync: true,
    actionCreator: actionCreator,
    stateModifier: stateModifier
}); };
//# sourceMappingURL=redux.js.map