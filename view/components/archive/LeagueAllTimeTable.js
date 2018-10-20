"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var league_results_1 = require("../../../data/league-results");
var LeagueAllTimeTable = function () { return (react_1.default.createElement("table", { className: "welcome-archive-table" },
    react_1.default.createElement("caption", null, "a summary of the league's all-time results."),
    react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", null,
            react_1.default.createElement("th", { scope: "col" }, "place"),
            react_1.default.createElement("th", { scope: "col" }, "team"),
            react_1.default.createElement("th", { scope: "col" }, "championships"),
            react_1.default.createElement("th", { scope: "col" }, "wins"),
            react_1.default.createElement("th", { scope: "col" }, "losses"),
            react_1.default.createElement("th", { scope: "col" }, "ties"),
            react_1.default.createElement("th", { scope: "col" }, "win %"),
            react_1.default.createElement("th", { scope: "col" }, "gb"))),
    react_1.default.createElement("tbody", null, league_results_1.leagueAllTimeResults.map(function (lr) { return (react_1.default.createElement("tr", { key: lr.team },
        react_1.default.createElement("td", null, lr.place),
        react_1.default.createElement("td", null, lr.team),
        react_1.default.createElement("td", null, lr.championships),
        react_1.default.createElement("td", null, lr.wins),
        react_1.default.createElement("td", null, lr.losses),
        react_1.default.createElement("td", null, lr.ties),
        react_1.default.createElement("td", null, lr.winPct),
        react_1.default.createElement("td", null, lr.gb))); })))); };
exports.default = LeagueAllTimeTable;
//# sourceMappingURL=LeagueAllTimeTable.js.map