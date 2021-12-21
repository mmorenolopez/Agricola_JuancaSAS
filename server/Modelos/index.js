import mongoose from 'mongoose';
import ModelAreas from './areas_cultivo';
import ModelProgramacion from './programacion';
import ModelTipo from './tipos_cultivo';
import ModelUsuarios from './usuarios';

async function main() {
  await mongoose.connect(
    'mongodb+srv://admin:useradmin@cluster0.he6xv.mongodb.net/argicola?authSource=admin&replicaSet=atlas-ssylfq-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
  );

  return {
    Areas: ModelAreas(mongoose),
    Tipo: ModelTipo(mongoose),
    Programacion: ModelProgramacion(mongoose),
    Usuarios: ModelUsuarios(mongoose),
  };
}

export default main;
