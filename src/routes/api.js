const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')
const card = require('../controllers/cardController');
const productItem = require('../controllers/product_itemController');
const orderController = require('../controllers/orderController')
const product = require('../controllers/productController');
const shipmentController = require('../controllers/shipmentController')
const customerController = require('../controllers/customerController');
const subAdminController = require('../controllers/subAdminController')
const categoryController = require('../controllers/catagoryController')
const postController = require('../controllers/postController')
const paymentController = require('../controllers/paymentController')
const wishListController = require('../controllers/wishlistController');

// user routes ======================
router.get('/user-create', userController.create)
router.get('/user-read', userController.read)
router.get('/user-update', userController.update)
router.get('/user-delete', userController.delete)

// Admin routes =========================
router.get('/admin-create', adminController.create)
router.get('/admin-read', adminController.read)
router.get('/admin-update', adminController.update)
router.get('/admin-delete', adminController.delete)

// card routes ===============================
router.get('/card-create',card.create)
router.get('/card-read', card.read)
router.get('/card-update', card.update)
router.get('/card-delete', card.delete)

// product item routes ===========================
router.get('/product-item-create', productItem.create)
router.get('/product-item-read', productItem.read)
router.get('/product-item-update',productItem.update)
router.get('/product-item-delete', productItem.delete)

// order by product ==========================
router.get('/order-create', orderController.create)
router.get('/order-read', orderController.read)
router.get('/order-update', orderController.update)
router.get('/order-delete',orderController.delete)

// product routes ============================
router.get('/product-create', product.create)
router.get('/product-read', product.read)
router.get('/product-update', product.update)
router.get('/product-delete', product.delete)

// shipment routes ============================
router.get('/shipment-create', shipmentController.create)
router.get('/shipment-read', shipmentController.read)
router.get('/shipment-update', shipmentController.update)
router.get('/shipment-delete', shipmentController.delete)

// customer routes =============================
router.get('/customer-create', customerController.create)
router.get('/customer-read', customerController.read)
router.get('/customer-update', customerController.update)
router.get('/customer-delete', customerController.delete)

// subAdmin routes ==========================
router.get('/sub-admin-create', subAdminController.create)
router.get('/sub-admin-read', subAdminController.read)
router.get('/sub-admin-update', subAdminController.update)
router.get('/sub-admin-delete', subAdminController.delete)

//category routes =============================
router.get('/category-create', categoryController.create)
router.get('/category-read', categoryController.read)
router.get('/category-update', categoryController.update)
router.get('/category-delete', categoryController.delete)

// payment routes ============================
router.get('/payment-create', paymentController.create)
router.get('/payment-read', paymentController.read)
router.get('/payment-update', paymentController.update)
router.get('/payment-delete', paymentController.delete)

// wishList Router =============================
router.get('/wishList-create', wishListController.create)
router.get('/wishList-read', wishListController.read)
router.get('/wishList-update', wishListController.update)
router.get('/wishList-delete', wishListController.delete)


// post routes ================================
router.get('/post-create', postController.create)
router.get('/post-read', postController.read)
router.get('/post-update', postController.update)
router.get('/post-delete', postController.delete)






// user not found page----------------------------------- 

router.get('*', (req, res) => {
  res.json({
    massage: "page not found",
    success: false,
  })
})


module.exports = router