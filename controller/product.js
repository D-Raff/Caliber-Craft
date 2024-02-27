import { getProducts,getProduct,addProduct,editProduct,deleteProduct } from "../models/product.js";

export default {
    getProducts: async (req,res)=>{
        try{
            res.send(await getProducts())
        }catch(e){
            res.status(404).json({
                status: 404,
                msg:'Cannot retrive Products'
            })
        }
    },
    getProduct: async (req,res)=>{
        try{
            res.send(await getProduct(+req.params.prodID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Sorry cannot get that product'
            })
        }
    },
    addProduct: async (req,res)=>{
        try{
            const {prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3} = req.body
            await addProduct(prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3)
            res.send({
                msg:'New Product Added'
            })
        }catch(e){
            res.status(404).json({
               status:404,
               msg:'Cannot add a product'
            })
        }
    },
    editProduct:async (req,res)=>{
        try{
            const [product] = await getProduct(+req.params.prodID)
            let {prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3} = req.body
            prodName ? prodName=prodName: {prodName} = product
            quantity ? quantity=quantity: {quantity} = product
            amount ? amount=amount: {amount} = product
            category ? category=category: {category} = product
            prodUrl ? prodUrl=prodUrl: {prodUrl} = product
            prodBio ? prodBio=prodBio: {prodBio} = product
            prodSingle1 ? prodSingle1=prodSingle1: {prodSingle1} = product
            prodSingle2 ? prodSingle2=prodSingle2: {prodSingle2} = product
            prodSingle3 ? prodSingle3=prodSingle3: {prodSingle3} = product
            await editProduct(+req.params.prodID,prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3)
            res.json(await getProducts())
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Unable to edit product'
            })
        }
    },
    deleteProduct:async (req,res)=>{
        try{
            res.send(await deleteProduct(req.params.prodID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'No product was deleted'
            })
        }
    }
    
}