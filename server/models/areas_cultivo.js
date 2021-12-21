const model = (mongoose) => {
  const { Schema } = mongoose;
  const areasSchema = new Schema({
    nombre: String,
    area_hec: Number,
    ubicacion: {
      type: Map,
      of: String
    },
    usuarios: [{ type: Schema.Types.ObjectId, ref: 'usuarios' }]
  });

  return areasSchema;
};

export default model;