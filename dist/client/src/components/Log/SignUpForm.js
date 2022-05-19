"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const axios_1 = __importDefault(require("axios"));
const react_1 = __importStar(require("react"));
const SignInForm_1 = __importDefault(require("./SignInForm"));
const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = (0, react_1.useState)(false);
    const [pseudo, setPseudo] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [controlPassword, setControlPassword] = (0, react_1.useState)("");
    const handleRegister = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const terms = document.getElementById("terms");
        const pseudoError = document.querySelector(".pseudo.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        const passwordConfirmError = document.querySelector(".password-confirm.error");
        const termsError = document.querySelector(".terms.error");
        passwordConfirmError.innerHTML = "";
        termsError.innerHTML = "";
        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword) {
                passwordConfirmError.innerHTML =
                    "les mots de passe ne correspondent pas";
            }
            if (!terms.checked) {
                termsError.innerHTML = "veuillez valider les conditions generales";
            }
        }
        else {
            yield (0, axios_1.default)({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/user/register`,
                data: {
                    pseudo,
                    email,
                    password,
                },
            })
                .then((res) => {
                setFormSubmit(true);
            })
                .catch((err) => {
                pseudoError.innerHTML = err.response.data.errors.pseudo;
                emailError.innerHTML = err.response.data.errors.email;
                passwordError.innerHTML = err.response.data.errors.password;
            });
        }
    });
    return (<>
      {formSubmit ? (<>
          <SignInForm_1.default />
          <span></span>
          <h4 className="success">
            Enregistrement reussi, veuillez vous connecter
          </h4>
        </>) : (<form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input type="text" name="pseudo" id="pseudo" onChange={(e) => setPseudo(e.target.value)} value={pseudo}/>
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          <div className="password error"></div>
          <br />
          <label htmlFor="password-conf">Control Password</label>
          <br />
          <input type="password" name="password-conf" id="password-conf" onChange={(e) => setControlPassword(e.target.value)} value={controlPassword}/>
          <div className="password-confirm error"></div>
          <br />
          <input type="checkbox" id="terms"/>
          <label htmlFor="terms">
            I accept terms{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              GCD
            </a>
          </label>
          <div className="terms error"></div>
          <br />
          <input type="submit" value="Valider inscription"/>
        </form>)}
    </>);
};
exports.default = SignUpForm;
//# sourceMappingURL=SignUpForm.js.map