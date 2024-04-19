const { Router } = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = Router();

const { getPlaceById, getPlacesByUserId, createPlace, updatePlace, deletePlace } = require('../controllers/places-controller');

router.get('/:pid', getPlaceById);

router.get('/user/:uid', getPlacesByUserId);

router.use(checkAuth);

router.post('/', fileUpload.single('image'), [check('title').notEmpty(), check('description').isLength({ min: 5 }), check('address').notEmpty()], createPlace);

router.patch('/:pid', [check('title').notEmpty(), check('description').isLength({ min: 5 })], updatePlace);

router.delete('/:pid', deletePlace);

module.exports = router;
