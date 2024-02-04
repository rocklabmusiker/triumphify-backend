import { Router } from "express";
import validateResources, {
  blankSchema,
} from "../../middlewares/validateResources";
import userControllers from "./controllers/index.user.controller";

const router = Router();

router.get("/", userControllers.handleGetAllUsers);

export default router;
