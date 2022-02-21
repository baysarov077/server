const { Router } = require("express");
const { brandController } = require('../controller/brand.controller');

const router = Router();

router.post('/brands', brandController.postBrand)
router.get('/brands', brandController.getBrand)
router.delete('/brands', brandController.deleteBrand)

module.exports = router