const Teacher = require('../Model/Teacher')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getTeacher = async (req,res)=>{
    try {
        const teacher = await Teacher.find();
        return res.json({errors:false,data:teacher})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postTeacher = async (req,res)=>{
    try {
        const emailExist = await Teacher.findOne({email:req.body.email})
        if(emailExist) return res.status(400).json({errors:true,message:"teacher already exist"})

        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const teacher = await Teacher.create(req.body);
        return res.json({errors:false,data:teacher})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.updateTeacher = async (req,res)=>{
    try {
        const teacher = await Teacher.findByIdAndUpdate(req.params.id , req.body , {new:true});
        return res.json({errors:false,data:teacher})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteTeacher = async (req,res)=>{
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data:teacher})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res)=>{
    try {
        const teacherExist = await Teacher.findOne({email:req.body.email})
        if(!emailExist) return res.status(400).json({errors:true,message:"Email or Password is Invalid"})

         const verifyPassword = await bcrypt.compare(req.body.password,teacherExist.password)
        if(!verifyPassword) return res.status(400).json({errors:true,message:"Email or Password is Invalid"})

        const token = await jwt.sign({id:teacherExist._id},process.env.SEC)
        
        return res.json({errors:false,data:{Teacher:teacherExist,Token:token}})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
