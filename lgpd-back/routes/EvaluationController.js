import express from "express";
let router = express.Router();

import evaluationService from "../services/EvaluationService.js";

router.post("/evaluations", async function (req, res) {
    const evaluationModel = {
        concept: req.body.concept
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(201).json(evaluation);
});

router.get("/evaluations", async function (req, res) {
    const allEvaluations = await evaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluations);
});

router.get("/evaluations/:id", async function (req, res) {
    const evaluation = await evaluationService.getEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.delete("/evaluations/:id", async function (req, res) {
    await evaluationService.deleteEvaluationById(req.params.id);
    return res.status(204);
});

router.put("/evaluations/:id", async function (req, res) {
    const evaluationModel = {
        concept: req.body.concept
    }

    await evaluationService.updateEvaluationById(req.params.id, evaluationModel);
    return res.status(204);
});

export default router;