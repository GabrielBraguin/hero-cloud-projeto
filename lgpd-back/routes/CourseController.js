import express from "express";
let router = express.Router();

import courseService from "../services/CourseService.js";

router.post("/courses", async function (req, res) {
    const courseModel = {
        name: req.body.name
    }

    const course = await courseService.saveCourse(courseModel);
    return res.status(201).json(course);
});

router.get("/courses", async function (req, res) {
    const allCourses = await courseService.getAllCourses();
    return res.status(200).json(allCourses);
});

router.get("/courses/:id", async function (req, res) {
    const course = await courseService.getCourseById(req.params.id);
    return res.status(200).json(course);
});

router.delete("/courses/:id", async function (req, res) {
    await courseService.deleteCourseById(req.params.id);
    return res.status(204);
});

router.put("/courses/:id", async function (req, res) {
    const courseModel = {
        name: req.body.name
    }

    await courseService.updateCourseById(req.params.id, courseModel);
    return res.status(204);
});

export default router;