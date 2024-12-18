const usermodel = require('../module/userModel')

const addUser = async (req, res) =>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(500).send({
                success : false,
                message : "please fill all Fields...",
            })
        }

        let duplicate = await usermodel.findOne({email:email});
        
        
        if(duplicate){
            return res.status(200).send({
                success : false,
                message : "User is Already register.."
            })
        }

        const user = await usermodel.create({
            name : name,
            email : email,
            password : password
        })

        return res.status(200).send({
            success : true,
            message  : "user Successfully submitted.........",
            user,
        })

        

    } catch (err) {
        return res.status(501).send({
            success: false, 
            err: err,
        })
    }
}
const viewUser = async (req, res) => {
    try {
        const user = await usermodel.find({})
        
        return res.status(200).send({
            success: true,
            length : user.length,
            message: "all User",
            user,
        })
    } catch (err) {
        return res.status(501).send({
            success: false, 
            err: err,
        })
    }
}

const deleteUser = async(req,res)=>{
    try{
        const id = req.query.id;
        
        await usermodel.findByIdAndDelete(id)
        return res.status(200).send({
            success: true, 
            message: "user has Deleted...."
        })
    }catch(err){
        return res.status(501).send({
            success: false, 
            err: err,
        })
    }
}

const updateUser = async (req,res)=> {
    try {
        const {id, name, email, password} = req.body;
        
        if(!name || !email || !password){
            return res.status(500).send({
                success : false,
                message : "please fill all Fields...",
            })
        }

        await usermodel.findByIdAndupdate(id,{
            name : name,
            email : email,
            password : password
        })

        return res.status(200).send({
            success : true,
            message  : "user Successfully Updated.........",
        })

    } catch (err) {
        return res.status(501).send({
            success: false, 
            err: err,
        })
    }
}
module.exports= {
    addUser, viewUser, deleteUser, updateUser
}