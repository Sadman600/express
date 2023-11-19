const { userService } = require("./user.services");


const userCollection = (req, res) => {
    res.send('Hello user !!!')
}
const userCollectionPost = async (req, res) => {
    try {
        const data = await req.body;
        const serviceData = await userService(data)
        res.status(200).json({
            success: true,
            data: serviceData
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            data: error
        })
    }
}

module.exports = {
    userCollection,
    userCollectionPost
}