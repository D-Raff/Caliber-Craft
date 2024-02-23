import { getProducts,getProduct,addProduct,editProduct,deleteProduct } from "../model/database.js";

export default {
    getProducts: async (req,res)=>{
        res.send(await getProducts())
    },
    getProduct: async (req,res)=>{
        res.send(await getProduct(+req.params.prodID))
    },
    addProduct: async (req,res)=>{
        const {prodName,quantity,amount,category,prodUrl,prodBio,prodSingle,prodPng} = req.body
        await addProduct(prodName,quantity,amount,category,prodUrl,prodBio,prodSingle,prodPng)
        res.send({
            msg:'New Product Added'
        })
    },
    editProduct:async (req,res)=>{
        const [product] = await getProduct(+req.params.prodID)
        let {prodName,quantity,amount,category,prodUrl,prodBio,prodSingle,prodPng} = req.body
        prodName ? prodName=prodName: {prodName} = product
        quantity ? quantity=quantity: {quantity} = product
        amount ? amount=amount: {amount} = product
        category ? category=category: {category} = product
        prodUrl ? prodUrl=prodUrl: {prodUrl} = product
        prodBio ? prodBio=prodBio: {prodBio} = product
        prodSingle ? prodSingle=prodSingle: {prodSingle} = product
        prodPng ? prodPng=prodPng: {prodPng} = product
        await editProduct(+req.params.prodID,prodName,quantity,amount,category,prodUrl,prodBio,prodSingle,prodPng)
        res.json(await getProducts())
    },
    deleteProduct:async (req,res)=>{
        res.send(await deleteProduct(req.params.prodID))
    }
    
}