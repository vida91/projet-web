const express= require('express');
const router=express.Router();

const createProduct=require('./controllers/control')

router.get('/api/products',createProduct)

module.exports=router;