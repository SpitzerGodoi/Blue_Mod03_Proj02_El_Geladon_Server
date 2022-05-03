const mongoose = require('mongoose');

const connectToDatabase = async () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas Conectado'))
    .catch((err) =>
      console.log(`Erro ao conectar com o MONGO-DB, erro: ${err}`),
    );
};

module.exports = connectToDatabase;
