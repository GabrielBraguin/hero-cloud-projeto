import express from "express";
let router = express.Router();

import userController from "./UserController.js";
import courseController from "./CourseController.js";
import teacherController from "./TeacherController.js";
import evaluationController from "./EvaluationController.js";

router.get("/", function(res, req){
    console.log("oi");
    res.status(200).json({message: "oie"});
});

router.use("?", userController);
router.use("?", courseController);
router.use("?", teacherController);
router.use("?", evaluationController);

export default router;