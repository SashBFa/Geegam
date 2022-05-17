"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const user_model_1 = __importDefault(require("./../models/user.model"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pseudo, email, password } = req.body;
    try {
        const user = yield user_model_1.default.create({ pseudo, email, password });
        res.status(201).send({ user: user._id });
    }
    catch (err) {
        res.status(200).send({ err });
    }
});
exports.signUp = signUp;
//# sourceMappingURL=auth.controller.js.map