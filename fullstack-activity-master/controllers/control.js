const product=require('./models/product')

exports.createProduct=(req,res,next)=>{
    product.find()
    .then(product=>res.status(200).json(product))
    .catch(error=> res.status(400).json({error}))
}