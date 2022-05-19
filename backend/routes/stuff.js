const express = require('express');
const router = express.Router();

const stuffCtrl = require ('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require ('../middleware/multer-config');

router.post('/', auth, multer, stuffCtrl.createSauce);          
router.put('/:id', auth, stuffCtrl.modifySauce);
router.delete('/:id', auth, stuffCtrl.removeSauce);
router.get('/:id', auth, stuffCtrl.getOneSauce);
router.get('/', auth, stuffCtrl.getSauces);


module.exports = router ;