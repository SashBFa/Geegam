"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.GET_USER = void 0;
const axios_1 = __importDefault(require("axios"));
exports.GET_USER = "GET_USER";
const getUser = (uid) => {
    return (dispatch) => {
        return axios_1.default
            .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
            .then((res) => {
            dispatch({ type: exports.GET_USER, payload: res.data });
        })
            .catch((err) => console.log(err));
    };
};
exports.getUser = getUser;
//# sourceMappingURL=user.actions.js.map