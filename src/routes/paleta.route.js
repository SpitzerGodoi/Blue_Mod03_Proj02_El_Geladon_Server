const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');
const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require('../middlewares/paleta.middleware');

route.get('/all-paletas', controllerPaletas.findAllPaletasController);
route.get(
  '/one-paleta/:id',
  validId,
  controllerPaletas.findByIdPaletasController,
);
route.post(
  '/create-paleta',
  validObjectBody,
  controllerPaletas.createPaletaController,
);
route.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  controllerPaletas.updatePaletaController,
);
route.delete(
  '/delete-paleta/:id',
  validId,
  controllerPaletas.deletePaletaController,
);

const controllerCarinho = require('../controllers/carrinho.controller');

route.get('/all-carrinho', controllerCarinho.findAllCarrinhoController);

route.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  controllerCarinho.createManyItemsCarrinhoController,
);

route.delete(
  '/finish-carrinho',
  controllerCarinho.deleteAllItemsCarrinhoController,
);

module.exports = route;
