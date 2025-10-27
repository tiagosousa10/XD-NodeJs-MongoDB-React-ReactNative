import express from "express";
const router = express.Router();

//                   --- controllers ---
import TaskController from "../controller/TaskController.js";
//                   --- middlewares ---
import TaskValidation from "../middlewares/TaskValidation.js";

router.post("/", TaskValidation, TaskController.create);
router.put("/:id", TaskValidation, TaskController.update);
router.get("/:id", TaskController.show);
router.delete("/:id", TaskController.delete);
router.put("/:id/:done", TaskController.done);

router.get("/filter/all/:macaddress", TaskController.all);
router.get("/filter/late/:macaddress", TaskController.late);
router.get("/filter/today/:macaddress", TaskController.today);
router.get("/filter/week/:macaddress", TaskController.week);
router.get("/filter/month/:macaddress", TaskController.month);
router.get("/filter/year/:macaddress", TaskController.year);

export default router;
