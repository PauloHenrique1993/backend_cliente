const express = require('express');
const ClienteController = require ('../controllers/clienteController.js');
const router = express.Router();
 
router.post('/cliente', ClienteController.Insert);
 
module.exports = router;