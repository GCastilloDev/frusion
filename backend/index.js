if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = require('./src/server/server');
const { conectDB } = require('./src/database/database');

app.get('/api/v1/', (req, res) => {
  res.json('Iniciado!');
})

serverInit = async () => {
  await conectDB();
  app.listen(process.env.PORT, () => {
    console.log(`app is listening on port: ${process.env.PORT}`);
  });
}

serverInit();

