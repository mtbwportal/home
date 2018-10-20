"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentName = function (component) {
    return component.displayName || component.name;
};
exports.getHocComponentName = function (hocName, component) {
    return hocName + "(" + exports.getComponentName(component) + ")";
};
//# sourceMappingURL=react.js.map