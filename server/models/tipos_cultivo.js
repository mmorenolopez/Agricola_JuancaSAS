const model = (mongoose) => {
  const { Schema } = mongoose;
  const tipoCultivoSchema = new Schema({
    "nombre": String,
    "cantidad_semillas": Number,
    "agua_mtr3": Number,
    "tiempo_sem": Number,
    "fertilizantes_hec": Number,
    "tiempo_recolecion_sem": Number,
    "recoleccion_kg": Number,
    "tiempo_espera_dias": Number,
    "valor_semilla": Number,
  });


  return tipoCultivoSchema;
};


export default model;