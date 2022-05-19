"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("../Navbar"));
const home_1 = __importDefault(require("./../../pages/home"));
const profil_1 = __importDefault(require("./../../pages/profil"));
const trending_1 = __importDefault(require("./../../pages/trending"));
const index = () => {
    return (<react_router_dom_1.BrowserRouter>
      <Navbar_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<home_1.default />}/>
        <react_router_dom_1.Route path="/profil" element={<profil_1.default />}/>
        <react_router_dom_1.Route path="/trending" element={<trending_1.default />}/>
        <react_router_dom_1.Route path="*" element={<home_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = index;
//# sourceMappingURL=index.js.map