const productController =  require('../controllers/productController.js')
const verifyToken = require("../middlewares/tokenCheck")
const router =  require ('express').Router()

router.post('/addproducts', verifyToken, productController.addProduct )
router.get('/allproduct',productController.getAllProduct )
router.get('/published',productController.getPublishedProduct)
router.get('/:id',productController.getOneProduct)
router.put('/edit/:id',verifyToken,productController.updateProduct)
router.delete('/delete/:id',verifyToken, productController.deleteProduct)
module.exports= router
