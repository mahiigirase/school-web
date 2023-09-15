const Field = require('../Model/Fields')


exports.getField = async (req,res)=>{
    try {
        const field = await Field.find();
        return res.json({errors:false,data:field})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postField = async (req,res)=>{
    try {
        
        const field = await Field.create(req.body);
        return res.json({errors:false,data:field})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.updateField = async (req,res)=>{
    try {
        const field = await Field.findByIdAndUpdate(req.params.id , req.body , {new:true});
        return res.json({errors:false,data:field})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteField = async (req,res)=>{
    try {
        const field = await Field.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data:field})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

