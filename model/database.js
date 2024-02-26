import {pool} from '../config/config.js'

//USER FUNCTIONS
const getUsers = async()=>{
    const[result] = await pool.query(`
    SELECT *
    FROM Users
    `)
    return result
}
const getUser = async(userID)=>{
    const [result] = await pool.query(`
    SELECT *
    FROM Users
    WHERE userID = ?
    `,[userID])
    return result
}
const addUser = async (firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)=>{
    const [result] = await pool.query(`
   INSERT INTO Users (firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile) VALUES (?,?,?,?,?,?,?,?)
    `,[firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile])
    return result
}
const editUser = async (userID,firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)=>{
    const [user] = await pool.query(`
    UPDATE Users SET firstName = ?,lastName = ?,userAge = ?,gender = ?,userRole = ?,emailAdd = ?,userPass = ?,userProfile = ? WHERE (userID = ?)
    `,[firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile,userID])
    return getUsers(user)
}

const deleteUser = async (userID)=>{
    const [user] = await pool.query(`
    DELETE FROM Users
    WHERE userID = ?
    `,[userID])
    return getUsers(user)
}
const checkUser = async (emailAdd)=>{
    const [[{userPass}]]= await pool.query(`
    SELECT userPass FROM Users WHERE emailAdd = ?
    `,[emailAdd])
    return userPass
}

//PRODUCT FUNCTIONS

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
    UPDATE Users SET prodName = ?,quantity = ?,amount = ?,category = ?,prodUrl = ?,prodBio = ?,prodSingle1 = ?,prodSingle2 = ?,prodSingle3 = ? WHERE (prodID = ?)
    `,[prodName,quantity,amount,category,prodUrl,prodBio,prodSingle1,prodSingle2,prodSingle3,prodID,])
    return getProducts(product)
}
const deleteProduct = async (prodName)=>{
    const [product] = await pool.query(`
    DELETE FROM Products
    WHERE prodName = ?
    `,[prodName])
    return getProducts(product)
}
export{getUsers,getUser,addUser,editUser,deleteUser,checkUser,getProducts,getProduct,addProduct,editProduct,deleteProduct}