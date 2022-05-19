"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SignInForm_1 = __importDefault(require("./SignInForm"));
const SignUpForm_1 = __importDefault(require("./SignUpForm"));
const Log = (props) => {
    const [signUpModal, setSignUpModal] = (0, react_1.useState)(props.signup);
    const [signInModal, setSignInModal] = (0, react_1.useState)(props.signin);
    const handleModals = (e) => {
        if (e.currentTarget.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        }
        else if (e.currentTarget.id === "login") {
            setSignInModal(true);
            setSignUpModal(false);
        }
    };
    return (<div className="connection-form">
      <div className="form-container">
        <ul>
          <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : ""}>
            S'inscrire
          </li>
          <li onClick={handleModals} id="login" className={signInModal ? "active-btn" : ""}>
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUpForm_1.default />}
        {signInModal && <SignInForm_1.default />}
      </div>
    </div>);
};
exports.default = Log;
//# sourceMappingURL=index.js.map