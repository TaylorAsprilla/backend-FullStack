// path: /api/v1/cliente

import { Router } from "express";
import {
  crearClientes,
  deleteCliente,
  getClientes,
  getUnCliente,
  updateCliente,
  updateEstado,
} from "../controllers/cliente.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import validateJWT from "../middlewares/validate-jwt";

const router = Router();

router.post(
  "/",
  // validateJWT,
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("telefono", "El telefóno es obligatorio").not().isEmpty(),
    check("tipoDocumento", "El tipo de documento es obligatorio")
      .not()
      .isEmpty(),
    check("numeroDocumento", "El número de documento es obligatorio")
      .not()
      .isEmpty(),
    validateFields,
  ],
  crearClientes
);
router.get("/", getClientes);
router.get("/:id", validateJWT, getUnCliente);
router.put("/:id", validateJWT, updateCliente);
router.put("/estado/:id", validateJWT, updateEstado);
router.delete("/:id", validateJWT, deleteCliente);

export default router;
