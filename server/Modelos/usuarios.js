const model = (mongoose) => {
  const { Schema } = mongoose;

  const usuario = new Schema({
    "nombre": String,
  });


  return usuario;
 };

 export default model;