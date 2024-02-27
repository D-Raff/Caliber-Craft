import {pool} from '../config/config.js'
const getProducts = async()=>{
    const [products] = await pool.query(`
    SELECT *
    FROM Products
    `)
    return products
}
const getProduct = async(prodID)=>{
    const [product] = await pool.query(`
    SELECT *
    FROM Products
    WHERE prodID = ?
    `,[prodID])
    return product
}
const addProduct = async (prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3)=>{
    const[product] = await pool.query(`
    INSERT INTO Products (prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3) VALUES (?,?,?,?,?,?,?,?,?)
    `,[prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3])
    return getProduct(product.insertId)
}
const editProduct = async (prodID,prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3)=>{
    const [product] = await pool.query(`
    UPDATE Products SET prodName = ?,quantity = ?,amount = ?,category = ?,prodUrl = ?,prodBio = ?,prodSingle1 = ?,prodSingle2 = ?,prodSingle3 = ? WHERE (prodID = ?)
    `,[prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3,prodID]) 

    return getProducts(product)
}
const deleteProduct = async (prodName)=>{
    const [product] = await pool.query(`
    DELETE FROM Products
    WHERE prodName = ?
    `,[prodName])
    return getProducts(product)
}
export{getProducts,getProduct,addProduct,editProduct,deleteProduct}