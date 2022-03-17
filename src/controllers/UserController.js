const Sequelize=require('sequelize');

// import moddule user

const User = require('../modules/User')

const {Op}=require('sequelize');

exports.getUsers=async (req,res)=>{
    try {
        const users=await User.findAll()
        .then((users)=>{
            const res={success:true,data:users}
            return res;
        }).catch(error =>{
            const res = { success: false, error: error }
            return res;
          })
        res.json(users);
    } catch (error) {
        console.log(error);
    }

}

exports.createUser=async (req,res)=>{

    try {
        const user=await User.create({
            name:"John Smith",
            email:"john@smith.com",
            address:"Cll 100 Malibu",
            phone:"123456789"
        })
        .then(user => {
            const res = { success:true,data:user,message:"User created"}
            return res;
        }).catch(err => {
            const res = { success:false,data:err,message:"User can,t created"}
            return res;
        })
        res.status(201).json(user)

    } catch (error) {
        console.log(error);
    }
}