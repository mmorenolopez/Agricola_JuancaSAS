const model = (mongoose) => {
  const { Schema } = mongoose;
  const cultivoActivosSchema = new Schema({
    tipo_cultivo: { type: Schema.Types.ObjectId, ref: 'tipos_cultivo' },
    area_cultivo: { type: Schema.Types.ObjectId, ref: 'area_cultivo' },
    fecha_siembra:  { type: Date, default: Date.now },
    fecha_programacion_recoleccion:  { type: Date, default: Date.now },
    fecha_proxima_siembra:  { type: Date, default: Date.now },
    valor: {
      agua_mtr3: Number, 
      fertilizante: Number, 
      semilla: Number,
    }
  });

  cultivoActivosSchema
    .virtual('valor.total')
    .get(function(value, virtual, doc) {
      return Object
        .keys(this.valor)
        .reduce((acc, name) => acc + this.valor[name], 0);
    });

  return cultivoActivosSchema;
};



export default model;