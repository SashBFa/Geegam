import * as rtr from "express";
import * as authController from "./../controllers/auth.controller";
import * as userController from "./../controllers/user.controller";
import * as uploadController from "./../controllers/upload.controller";
import multer from "multer";

const router = rtr.Router();
const upload = multer();

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

//upload
router.post("/upload", upload.single("file"), uploadController.uploadProfil);

export default router;
