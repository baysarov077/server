const { Router } = require("express");
const { productController } = require('../controller/product.controller');

const router = Router();

router.post('/products', productController.postProduct)
router.get('/products', productController.getProduct)
router.get('/products/:id', productController.getProductId)
router.delete('/products/:id', productController.deleteProduct)

module.exports = router