import express from "express";
let router = express.Router();

import userService from "../services/UserService.js";

router.post("/users", async function (req, res) {
    const userModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: Dreq.body.email,
        gender: req.body.gender,
    }

    const user = await userService.saveUser(userModel);
    return res.status(201).json(user);
});

router.get("/users", async function (req, res) {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
});

router.get("/users/:id", async function (req, res) {
    const user = await userService.getUserById(req.params.id);
    return res.status(200).json(user);
});

router.delete("/users/:id", async function (req, res) {
    await userService.deleteUserById(req.params.id);
    return res.status(204);
});

router.put("/users/:id", async function (req, res) {
    const userModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: Dreq.body.email,
        gender: req.body.gender,
    }

    await userService.updateUserById(req.params.id, userModel);
    return res.status(204);
});

export default router;