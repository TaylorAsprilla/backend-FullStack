import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import {
  cambioContrasena,
  login,
  olvidoContrasena,
  renewToken,
} from "../controllers/auth.controller";
import validateJWT, { validateJWTPass } from "../middlewares/validate-jwt";

// path: /api/v1/auth/
const router = Router();

router.post(
  "/",
  [
    check("login", "El login es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  login
);

router.post(
  "/olvidocontrasena",
  [
    check("login", "El login es obligatorio").not().isEmpty(),
    check("numeroDocumento", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  olvidoContrasena
);

router.put(
  "/cambiocontrasena",
  validateJWTPass,
  [
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  cambioContrasena
);

router.get("/", validateJWT, renewToken);

export default router;
