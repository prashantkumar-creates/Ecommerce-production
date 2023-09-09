import express from "express";
import { getAllOrdersController, getOrdersController, orderStatusController, registerController, updateProfileController } from '../controllers/authController.js'
import { loginController } from "../controllers/authController.js";
import { testController, forgotPasswordController } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routing 
// register || method post 
router.post("/register", registerController);
//login
router.post("/login", loginController);
//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);
//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController)
//orders
router.get("/all-orders", requireSignIn, getAllOrdersController)

// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
);

export default router
