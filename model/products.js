import {pool} from '../config/config.js'
const getProducts = async()=>{
    const [products] = await pool.query(`
    SELECT *
    FROM Products
    `)
    return products
}
const getProduct = async(prodID)=>{
    const [[product]] = await pool.query(`
    SELECT *
    FROM Products
    WHERE prodID = ?
    `,[prodID])
    return product
}
const addProduct = async (prodName,quantity,amount,category,prodUrl,prodBio,prodDes)=>{
    console.log(prodDes)
    const[product] = await pool.query(`
    INSERT INTO Products (prodName,quantity,amount,category,prodUrl,prodBio,prodDes) VALUES (?,?,?,?,?,?,?)
    `,[prodName,quantity,amount,category,prodUrl,prodBio,prodDes])
    return getProduct(product.insertId)
    // const product = await pool.query(`INSERT INTO Products SET (prodId = default,?,?,?,?,?,?,?,?,?)`, [prodName,quantity,amount,category,prodUrl,prodBio]);
    // return getProduct(product.insertId);
}
const editProduct = async (prodID,prodName,quantity,amount,category,prodUrl,prodBio,prodDes)=>{
    const [product] = await pool.query(`
    UPDATE Products SET prodName = ?,quantity = ?,amount = ?,category = ?,prodUrl = ?,prodBio = ?,prodDes = ? WHERE (prodID = ?)
    `,[prodName,quantity,amount,category,prodUrl,prodBio,prodDes,prodID]) 

    return getProducts(product)
}
const deleteProduct = async (prodID)=>{
    const [product] = await pool.query(`
    DELETE FROM Products
    WHERE prodID = ?
    `,[prodID])
    return getProducts(product)
}
export{getProducts,getProduct,addProduct,editProduct,deleteProduct}