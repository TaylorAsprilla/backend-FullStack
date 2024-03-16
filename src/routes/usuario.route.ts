import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import {
  crearUsuario,
  deleteUsuario,
  getUnUsuario,
  getUsuarios,
  updateUsuario,
} from "../controllers/usuario.controller";
import validateJWT from "../middlewares/validate-jwt";

// path: /api/v1/usuario
const router = Router();

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("tipoDocumento", "El tipo de documento es obligatorio")
      .not()
      .isEmpty(),
    check("numeroDocumento", "El número de documento es obligatorio")
      .not()
      .isEmpty(),
    check("login", "El login es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  crearUsuario
);
router.get("/", validateJWT, getUsuarios);
router.get("/:id", validateJWT, getUnUsuario);
router.put("/:id", validateJWT, updateUsuario);
router.delete("/:id", validateJWT, deleteUsuario);

export default router;
