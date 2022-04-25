const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const allPaletas = await Paletas.find();
  return allPaletas;
};

const findByIdPaletasService = async (idParam) => {
  const onePaleta = await Paletas.findById(idParam);
  return onePaleta;
};

const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paletas.create(newPaleta);
  return createdPaleta;
};

const updatePaletaService = async (idParam, editedPaleta) => {
  const updatePaleta = await Paletas.findByIdAndUpdate(idParam, editedPaleta);
  return updatePaleta;
};

const deletePaletaService = async (idParam) => {
  return await Paletas.findByIdAndDelete(idParam);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletasService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
