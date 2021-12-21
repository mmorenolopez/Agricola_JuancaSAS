import mongoose from "mongoose";

import ModelAreas from "./areas_cultivo";
import ModelTipo from "./tipos_cultivo";
import ModelProgramacion from "./programacion";
import ModelUsuarios from "./usuarios";

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');

  return {
    Areas: ModelAreas(mongoose),
    Tipo: ModelTipo(mongoose),
    Programacion: ModelProgramacion(mongoose),
    Usuarios: ModelUsuarios(mongoose),
  };
}

export default main;
