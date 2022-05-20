"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const LeftNav_1 = __importDefault(require("../LeftNav"));
const UploadImg_1 = __importDefault(require("./UploadImg"));
const UpdateProfil = () => {
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "profil-container" }, { children: [(0, jsx_runtime_1.jsx)(LeftNav_1.default, {}), (0, jsx_runtime_1.jsxs)("h1", { children: ["Profil de ", userData.pseudo] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "update-container" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "left-part" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Photo de profil" }), (0, jsx_runtime_1.jsx)("img", { src: userData.picture, alt: "user-pic" }), (0, jsx_runtime_1.jsx)(UploadImg_1.default, {})] })) }))] })));
};
exports.default = UpdateProfil;
//# sourceMappingURL=UpdateProfil.js.map