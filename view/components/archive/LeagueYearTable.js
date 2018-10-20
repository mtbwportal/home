"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var league_results_1 = require("../../../data/league-results");
var LeagueYearTable = function (_a) {
    var year = _a.year;
    return (react_1.default.createElement("table", { className: "welcome-archive-table" },
        react_1.default.createElement("caption", null, "a summary of the league's " + year + " results."),
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "place"),
                react_1.default.createElement("th", null, "team"),
                react_1.default.createElement("th", null, "wins"),
                react_1.default.createElement("th", null, "losses"),
                react_1.default.createElement("th", null, "ties"),
                react_1.default.createElement("th", null, "win %"),
                react_1.default.createElement("th", null, "gb"),
                react_1.default.createElement("th", null, "moves"))),
        react_1.default.createElement("tbody", null, league_results_1.leagueYearResults[year].map(function (lr) { return (react_1.default.createElement("tr", { key: lr.team },
            react_1.default.createElement("td", null, lr.place),
            react_1.default.createElement("td", null, lr.team),
            react_1.default.createElement("td", null, lr.wins),
            react_1.default.createElement("td", null, lr.losses),
            react_1.default.createElement("td", null, lr.ties),
            react_1.default.createElement("td", null, lr.winPct),
            react_1.default.createElement("td", null, lr.gb),
            react_1.default.createElement("td", null, lr.moves))); }))));
};
exports.default = LeagueYearTable;
//# sourceMappingURL=LeagueYearTable.js.map