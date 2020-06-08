const mongoose = require('mongoose');

conectDB = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGO, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Contectado con exito a la base de datos');
    } catch (error) {
        console.log(error);
    }
}

// moongose
//   .connect(process.env.URI_MONGO, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Conexion a la bd exitosa');
//   })
//   .catch((e) => {
//     console.log('Error', e);
//   });

module.exports = { conectDB };
