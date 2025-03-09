import User from "../model/usermodel.js"
export const createUser = async (req, res) => {
    try {
        // const {name,email,tel} = req.body;
        
        // Normally, you would save this data to a database (e.g., MongoDB)
        const newUser=new User(req.body)
        const {email}=newUser
        const userExist=await User.findOne({email})
        if(userExist){
           return res.status(400).json({message:"user arleady exist"})
        }
        const saveData=await newUser.save()
       res.status(200).json({message:"user created successfull"})
        
    } catch (error) {
        res.status(500).json({message:"user not created",error})
    }
};

export const getAllusers=async (req,res) => {
    try {
        const userData=await User.find();
        if(!userData){
            res.status(400).json({message:"no data saved in database"});
        }
        else{
            res.status(200).json( userData)
        }
        
    } catch (error) {
        res.status(500).json({message:"error try again", error})
        
    }
}

export const getSingleuser=async (req,res)=>{
    try {
        
        const id=req.params.id
        const userExist=await User.findById(id)
        if(!userExist){
           res.status(400).json({message:"the user id not found"})
        }
        res.status(200).json({message:"the user found is",userExist})

        console.log(user);
    } catch (error) {
        res.status(500).json({message:"the user not retreived"});
        
    }
}

export const updateUser=async(req,res)=>{
    try {
        const id=req.params.id;
    const UserExist=await User.findById(id);
    console.log("the data retreived are:", UserExist)
    if(!UserExist){
        res.status(400).json({message:"The user not found"});
    }
    const updatedData=await User.findByIdAndUpdate(id,req.body,{
        new:true
    })

    res.status(200).json(updatedData);
        
    } catch (error) {
        res.status(500).json({message:"server error"});
        
    }
    
}

export const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
    const userExist=await User.findById(id);

    if(userExist){
        res.status(400).json({message:"user not found"})
    }
    await User.findByIdAndDelete(id);
res.status(200).json({message:"data deleted successfully"});
    } catch (error) {
        res.status(500).status({errorMessage:error.message})
        
    }

    

}