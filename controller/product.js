import { getProducts,getProduct,addProduct,editProduct,deleteProduct } from "../model/products.js";

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
            const {prodName,quantity,amount,category,prodUrl,prodBio,prodDes} = req.body
            // console.log( addProduct );
            await addProduct(prodName,quantity,amount,category,prodUrl,prodBio,prodDes)
            res.send({
                msg:'New Product Added'
            })
        }catch(e){
            console.log(e)
            res.status(404).json({
               status:404,
               msg:'Cannot add a product'
            })
        }
    },
    editProduct:async (req,res)=>{
        try{
            const product = await getProduct(+req.params.prodID)
            let {prodName,quantity,amount,category,prodUrl,prodBio,prodDes} = req.body
            prodName ? prodName=prodName: {prodName}=product
            quantity ? quantity=quantity: {quantity}=product
            amount ? amount=amount: {amount}=product
            category ? category=category: {category}=product
            prodUrl ? prodUrl=prodUrl: {prodUrl}=product
            prodBio ? prodBio=prodBio: {prodBio}=product
            prodDes ? prodDes=prodDes: {prodDes}=product
            await editProduct(+req.params.prodID,prodName,quantity,amount,category,prodUrl,prodBio,prodDes)
            res.json(await getProducts())
        }catch(e){
            console.log(e)
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