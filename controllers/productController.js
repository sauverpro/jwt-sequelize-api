const db =  require ('../models')

// create main model
const Product = db.products
const Reviews = db.reviews

// main work

// 1. create product 

const addProduct = async(req, res)=>{
    let info = {
        title:req.body.title,
        price:req.body.price,
        Description:req.body.Description,
        published:req.body.published ? req.body.published : false
    }
    const product = await Product.create(info)
    res.status(200).send(product)
}
// 2. get all products

const getAllProduct = async (req, res)=>{
    let product = await Product.findAll({})
    res.status(200).send(product)
}
// 3. get SINGLE products

const getOneProduct = async (req, res)=>{
    let id = req.body.id
    let product = await Product.findOne({where: {id: id}})
    res.status(200).send(product)
}

// 4. UPDATE products

const updateProduct = async (req, res)=>{
    let id = req.params.id
    let product = await Product.update(req.body, {where: {id:id}})
    res.status(200).send(product)
}

// 5. delete products

const deleteProduct = async (req, res)=>{
    let id = req.params.id
    await Product.destroy({where: {id: id}})
    res.status(200).send(`product deleted`)
}

// 5. get published products

const getPublishedProduct = async (req, res)=>{
   
   const products= await Product.findAll({where: {published: true}})
    res.status(200).send(products)
}
module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}