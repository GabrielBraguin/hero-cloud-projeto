import express from "express";
let router = express.Router();

import teacherService from "../services/TeacherService.js";

router.post("/teachers", async function (req, res) {
    const teacherModel = {
        name: req.body.name
    }

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(201).json(teacher);
});

router.get("/teachers", async function (req, res) {
    const allTeachers = await teacherService.getAllTeachers();
    return res.status(200).json(allTeachers);
});

router.get("/teachers/:id", async function (req, res) {
    const teacher = await teacherService.getTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.delete("/teachers/:id", async function (req, res) {
    await teacherService.deleteTeacherById(req.params.id);
    return res.status(204);
});

router.put("/teachers/:id", async function (req, res) {
    const teacherModel = {
        name: req.body.name
    }

    await teacherService.updateTeacherById(req.params.id, teacherModel);
    return res.status(204);
});

export default router;