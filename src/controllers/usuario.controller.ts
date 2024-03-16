import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.model";
import bcrypt from "bcryptjs";

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await UsuarioModel.find();
    res.json({
      ok: true,
      usuarios,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: `Error consultar los usuarios`,
    });
  }
};

export const getUnUsuario = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const usuarios = await UsuarioModel.findById({ _id: id });
    res.json({
      ok: true,
      usuarios,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: `Error consultar el usuario`,
    });
  }
};

export const crearUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  const { login, password } = body;

  try {
    const existeLogin = await UsuarioModel.findOne({
      login: login,
    });

    if (existeLogin) {
      return res.status(409).json({
        ok: false,
        msg: `Ya existe el login ${login} creado`,
      });
    }

    const newUsuario = new UsuarioModel({
      ...body,
    });

    const salt = bcrypt.genSaltSync(10);
    newUsuario.password = bcrypt.hashSync(password, salt);

    const usuarioCreado = await newUsuario.save();

    res.status(200).json({
      ok: true,
      msg: "Usuario creado satisfactoriamente",
      usuario: usuarioCreado,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      ok: false,
      error,
      msg: "Error al crear el usuario, comuniquese con el administrador",
    });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { body } = req;

    const usuarioActualizado = await UsuarioModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.json({
      ok: true,
      msg: "Usuario Actualizado",
      usuario: usuarioActualizado,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: `Error consultar los clientes`,
    });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { body } = req;

    const usuarioEliminado = await UsuarioModel.findByIdAndDelete(id);

    res.json({
      ok: true,
      msg: "Usuario Eliminado",
      usuario: usuarioEliminado,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: `Error consultar los clientes`,
    });
  }
};
