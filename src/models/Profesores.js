import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
  {
    RFC: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    nombres: {
        type: String,
        required: true,
    },
    paterno: {
        type: String,
        required: true,
    },
    materno: {
        type: String,
        required: true,
    },
    fechaNacimiento: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    celular: {
        type: String,
        required: true,
    },
    profesion: {
        type: String,
        required: true,
    },
    numeroEmpleado: {
      type: String,
      required: true,
    },
    opcion:{
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Profesores", profesorEsquema);