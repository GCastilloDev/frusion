const City = require('../model/cityModel');

const getCities = async (req, res) => {
  City.find({}).exec((error, cities) => {
    if (error) {
      return res.status(400).json({
        mensaje: 'Ha ocurrido un error',
      });
    }

    res.json({
      status: 'ok',
      cities,
    });
  });
};

module.exports = {
  getCities,
};
