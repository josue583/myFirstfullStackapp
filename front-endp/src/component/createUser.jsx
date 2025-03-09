import axios from "axios";
import React, { useState }  from "react";
import { Link ,useNavigate} from "react-router-dom";
import toast from "react-hot-toast";




function Add(){

    const users={
        name:"",
       email:"",
       tel:""

    }
    const [user,setuser]=useState(users)
    const navigate=useNavigate();
    const inputhandling=(e)=>{
        const {name,value}=e.target
        console.log(name,value)
        setuser({...user,[name]:value})
        

    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      

        await axios.post("http://localhost:3000/api/user", user)
        .then((response)=>{
            toast.success(response.data.message,{position:"top"})
            // setuser({name:"",value:""})
        navigate('/');

        })
        
        
        
        
        
        }
     

         
       

       

        
       
    
    return (
        <div className="w-1/5  h-96 bg-white flex flex-col justify-center gap-4 p-6 ">
             <Link to="/"  className="w-24 h-8  bg-gray-600 text-white rounded-lg flex gap-2 justify-center items-center "><i class="fa-solid fa-backward text-back"></i>BACK</Link>
             <h2 className="w-full  text-2xl font-bold text-center text-cyan-800 text-shadow-md">ADD NEW USER</h2>
            <form className=" flex flex-col gap-4 rounded-lg " onSubmit={handleSubmit}>
           
            
            <div className=" flex flex-col gap-2">
            <div className="  flex flex-col">
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={user.name} onChange={inputhandling} autoComplete="off" placeholder="enter your name" className="border border-gray-300 p-2" />
                </div>
               <div className="w-full flex flex-col ">
               <label htmlFor="email">E-mail</label>
               <input type="email" onChange={inputhandling} name="email" value={user.email} autoComplete="off" placeholder="enter your email" className="border border-gray-300 p-2" />
               </div>
               <div className="w-full flex flex-col">
               <label htmlFor="telephone number "> tel</label>
               <input type="text" name="tel" value={user.tel} onChange={inputhandling} autoComplete="off" placeholder="enter your email" className="border border-gray-300 p-2" />
               </div>
               <div className="w-full">
               <button type="submit" className="w-full h-8 bg-blue-500 rounded-lg">Register</button>
               </div>
            </div>
            </form>
        </div>
    );
}

export default Add