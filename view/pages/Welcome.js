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
var __1 = require("..");
var ArchiveView;
(function (ArchiveView) {
    ArchiveView[ArchiveView["ALL_TIME"] = 0] = "ALL_TIME";
    ArchiveView[ArchiveView["YEAR_2013"] = 1] = "YEAR_2013";
    ArchiveView[ArchiveView["YEAR_2014"] = 2] = "YEAR_2014";
    ArchiveView[ArchiveView["YEAR_2015"] = 3] = "YEAR_2015";
    ArchiveView[ArchiveView["YEAR_2016"] = 4] = "YEAR_2016";
    ArchiveView[ArchiveView["YEAR_2017"] = 5] = "YEAR_2017";
    ArchiveView[ArchiveView["YEAR_2018"] = 6] = "YEAR_2018";
})(ArchiveView || (ArchiveView = {}));
var initialState = { archiveView: ArchiveView.YEAR_2018 };
var selectArchiveView = function (archiveView) {
    switch (archiveView) {
        case ArchiveView.ALL_TIME: return react_1.default.createElement(__1.LeagueAllTimeTable, null);
        case ArchiveView.YEAR_2018: return react_1.default.createElement(__1.LeagueYearTable, { year: "2018" });
        case ArchiveView.YEAR_2017: return react_1.default.createElement(__1.LeagueYearTable, { year: "2017" });
        case ArchiveView.YEAR_2016: return react_1.default.createElement(__1.LeagueYearTable, { year: "2016" });
        case ArchiveView.YEAR_2015: return react_1.default.createElement(__1.LeagueYearTable, { year: "2015" });
        case ArchiveView.YEAR_2014: return react_1.default.createElement(__1.LeagueYearTable, { year: "2014" });
        case ArchiveView.YEAR_2013: return react_1.default.createElement(__1.LeagueYearTable, { year: "2013" });
        default:
            return null;
    }
};
var Welcome = /** @class */ (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.viewArchive = function (archiveView) { return _this.setState(function () { return ({ archiveView: archiveView }); }); };
        return _this;
    }
    Welcome.prototype.render = function () {
        var _this = this;
        var archiveView = this.state.archiveView;
        return (react_1.default.createElement("div", { className: "welcome" },
            react_1.default.createElement("h1", null, "mtbw portal"),
            react_1.default.createElement("p", { className: "welcome-lead" }, "a dynasty baseball league"),
            react_1.default.createElement("div", { className: "welcome-rules" },
                react_1.default.createElement("h3", null, "league rules"),
                react_1.default.createElement("ul", null,
                    react_1.default.createElement("li", null, "stay competitive"),
                    react_1.default.createElement("li", null, "max 55 moves per year / max 5 moves per week"),
                    react_1.default.createElement("li", null, "salary cap for next season is $200"),
                    react_1.default.createElement("li", null, "keep up to 17 players (plus 3 additional n/a if desired)"))),
            react_1.default.createElement("div", { className: "welcome-archive" },
                react_1.default.createElement("h3", null, "league results"),
                react_1.default.createElement("div", { className: "welcome-archive-picker" },
                    react_1.default.createElement("button", { onClick: function () { return _this.viewArchive(ArchiveView.ALL_TIME); } }, "all time"),
                    react_1.default.createElement("button", { onClick: function () { return _this.viewArchive(ArchiveView.YEAR_2018); } }, "2018"),
                    react_1.default.createElement("button", { onClick: function () { return _this.viewArchive(ArchiveView.YEAR_2017); } }, "2017"),
                    react_1.default.createElement("button", { onClick: function () { return _this.viewArchive(ArchiveView.YEAR_2016); } }, "2016"),
                    react_1.default.createElement("button", { onClick: function () { return _this.viewArchive(ArchiveView.YEAR_2015); } }, "2015"),
                    react_1.default.createElement("button", { onClick: function () { return _this.viewArchive(ArchiveView.YEAR_2014); } }, "2014"),
                    react_1.default.createElement("button", { onClick: function () { return _this.viewArchive(ArchiveView.YEAR_2013); } }, "2013")),
                selectArchiveView(archiveView))));
    };
    return Welcome;
}(react_1.Component));
exports.default = Welcome;
//# sourceMappingURL=Welcome.js.map