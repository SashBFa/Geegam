import * as rtr from "express";
import * as authController from "./../controllers/auth.controller";

const router = rtr.Router();

router.post("/register", authController.signUp);

export default router;
