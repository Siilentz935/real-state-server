const  User = require('../models/user.model').User
async function createUser(req,res){
    const firstName = req.body.fn
    const lastName = req.body.ln
    const userName = req.body.un
    const password = req.body.pss
    if (firstName && lastName && userName && password){
        try{
        const  newUser = await new User({
            userName:userName,
            lastName:lastName,
            firstName: firstName,
            password:password

        }).save()
            res.status(200).json({
                message:"User Created",
                obj:newUser
            })
            }catch(e){
            console.log("cambio")
                console.error(e)
            res.status(500).json({
                message:"Something happen try later"
            })
             }
    }else{
        res.status(400).json({
            message : "Some parameters are missing"
        })
    }

}

async function getUsers(req,res){
        try{
            const users = await User.find({

             })
            res.status(200).json({
                message:"User Created",
                obj:users
            })
        }catch(e){
            console.log("cambio")
            console.error(e)
            res.status(500).json({
                message:"Something happen try later"
            })
        }

}
module.exports={
    createUser,
    getUsers
}