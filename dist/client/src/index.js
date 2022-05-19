"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./styles/index.scss");
const App_1 = __importDefault(require("./App"));
const react_redux_1 = require("react-redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const reducers_1 = __importDefault(require("./reducers"));
const store = (0, redux_1.legacy_createStore)(reducers_1.default, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_redux_1.Provider store={store}>
    <App_1.default />
  </react_redux_1.Provider>);
//# sourceMappingURL=index.js.map