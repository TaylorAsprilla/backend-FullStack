import { Model, Schema, Types, model } from "mongoose";

interface Caracteristicas {
  procesador: string;
  memoriaRam: string;
  almacenamiento: string;
  pantalla: string;
}

interface ProgramasInstalados {
  so: string;
  office: string;
  antivirus: string;
  multimedia: string;
}

interface Distribuidor {
  nit: string;
  razonSocial: string;
  telefono: number;
  direccion: string;
}

interface Opiniones {
  comentarios: string;
  calificacion: number;
  fecha?: Date;
}

interface ProductoInterface {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
  createdAt: Date;
  peso: string;
  ip: string;
  estado: boolean;
  caracteristicas: Caracteristicas;
  programasInstalados: ProgramasInstalados;
  distribuidor: Distribuidor;
  opiniones: Opiniones;
  usuario: Types.ObjectId;
}

const ProductoSchema = new Schema<ProductoInterface>({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
  stock: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  peso: { type: String, required: true },
  ip: { type: String },
  estado: { type: Boolean, required: true, default: true },
  caracteristicas: { type: Object, required: true },
  programasInstalados: { type: Object, required: true },
  distribuidor: { type: Object, required: true },
  opiniones: { type: Object },
  usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
});

const ProductoModel: Model<ProductoInterface> = model<ProductoInterface>(
  "producto",
  ProductoSchema
);

export default ProductoModel;
