const express = require("express");
const authMiddleware = require("../middlewares/auth.middlewares");
const interviewController = require("../controllers/interview.controller");
const upload = require("../middlewares/file.middleware");

const interviewRouter = express.Router();

/**
 * @route POST /api/interview/
 * @description Generate new interview report based on resume PDF, job description, and self description.
 * @access Private
 */
interviewRouter.post(
    "/",
    authMiddleware,
    upload.single("resume"),
    interviewController.generateInterViewReportController
);

/**
 * @route GET /api/interview/
 * @description Get all interview reports of the logged-in user.
 * @access Private
 */
interviewRouter.get(
    "/",
    authMiddleware,
    interviewController.getAllInterviewReportsController
);

/**
 * @route GET /api/interview/report/:interviewId
 * @description Get interview report by interviewId.
 * @access Private
 */
interviewRouter.get(
    "/report/:interviewId",
    authMiddleware,
    interviewController.getInterviewReportByIdController
);

/**
 * @route POST /api/interview/resume/pdf/:interviewReportId
 * @description Generate resume PDF based on interview report data.
 * @access Private
 */
interviewRouter.post(
    "/resume/pdf/:interviewReportId",
    authMiddleware,
    interviewController.generateResumePdfController
);

module.exports = interviewRouter;
