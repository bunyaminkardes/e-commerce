const router = require("express").Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/category/:category', productController.getProductsByCategory);
router.get('/search/:searchQuery', productController.getProductsBySearch);

module.exports = router;