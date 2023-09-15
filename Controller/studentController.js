const Student = require('../Model/Student')


exports.getStudent = async (req,res)=>{
    try {
        const student = await Student.find();
        return res.json({errors:false,data:student})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postStudent = async (req,res)=>{
    try {
        const emailExist = await Student.findOne({email:req.body.email})
        if(emailExist) return res.status(400).json({errors:true,message:"Student already exist"})

        const student = await Student.create(req.body);
        return res.json({errors:false,data:student})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.updateStudent = async (req,res)=>{
    try {
        const student = await Student.findByIdAndUpdate(req.params.id , req.body , {new:true});
        return res.json({errors:false,data:student})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteStudent = async (req,res)=>{
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data:student})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

