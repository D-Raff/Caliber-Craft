
const checkUser = async (emailAdd)=>{
    const [[{userPass}]] = await pool.query(`
    SELECT userPass FROM Users WHERE emailAdd = ?
    `,[emailAdd])
    return userPass
}
