"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const user_actions_1 = require("../../actions/user.actions");
const LeftNav_1 = __importDefault(require("../LeftNav"));
const UploadImg_1 = __importDefault(require("./UploadImg"));
const UpdateProfil = () => {
    const [bio, setBio] = (0, react_1.useState)("");
    const [updateForm, setUpdateForm] = (0, react_1.useState)(false);
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleUpdate = () => {
        dispatch((0, user_actions_1.updateBio)(userData._id, bio));
        setUpdateForm(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "profil-container" }, { children: [(0, jsx_runtime_1.jsx)(LeftNav_1.default, {}), (0, jsx_runtime_1.jsxs)("h1", { children: ["Profil de ", userData.pseudo] }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "update-container" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "left-part" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Photo de profil" }), (0, jsx_runtime_1.jsx)("img", { src: userData.picture, alt: "user-pic" }), (0, jsx_runtime_1.jsx)(UploadImg_1.default, {})] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "right-part" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "bio-update" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Bio" }), updateForm === false && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ onClick: () => setUpdateForm(!updateForm) }, { children: userData.bio })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => setUpdateForm(!updateForm) }, { children: "modifier bio" }))] })), updateForm && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "textarea", defaultValue: userData.bio, onChange: (e) => setBio(e.target.value) }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleUpdate }, { children: "Valider modifications" }))] }))] })) }))] }))] })));
};
exports.default = UpdateProfil;
//# sourceMappingURL=UpdateProfil.js.map