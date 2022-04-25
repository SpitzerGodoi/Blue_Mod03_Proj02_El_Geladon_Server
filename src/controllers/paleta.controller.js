const paletasService = require('../services/paleta.service');
const mogoose = require('mongoose');
const { default: mongoose } = require('mongoose');

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService();
  if (allPaletas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }
  res.send(allPaletas);
};

const findByIdPaletasController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = await paletasService.findByIdPaletasService(idParam);
  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;
  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const editPaleta = req.body;
  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    editPaleta,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletasController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
