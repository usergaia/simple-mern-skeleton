const express = require('express')
const router = express.Router();
const { getItem, getItems, postItem, updItem, delItem } = require('../controllers/item.controller.js')


//get
router.get('/', getItems);
router.get('/:id', getItem);

//post
router.post('/', postItem);

//put
router.put('/:id', updItem);

//delete
router.delete('/:id', delItem);

module.exports = router;
