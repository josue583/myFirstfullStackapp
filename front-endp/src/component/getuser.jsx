import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";




 function GetUser(){
    const [users, setUsers]=useState([])
    useEffect(()=>{
        const fetchdata= async()=>{
            try {

                const response= await axios.get("http://localhost:3000/api/getUser");
                console.log(response.data)
                   setUsers(response.data)
                
            } catch (error) {
                console.log("error while fetching",error);
                
            }
        }
        fetchdata()
    },[]);
    return(
        
        
        <div className="w-full min-h-screen flex flex-col items-center items-center p-20 bg-gray-100 ">
            
            
            <div className="w-1/2 flex flex-col items-center  gap-6 p-10 bg-white">
            <h1 className="w-3/5 h-12 text-center rounded-xs text-2xl font-bold p-2">STUDENT' S INFORMATION</h1>
            <div className="w-full flex flex-col gap-8">
            <Link to="/add" className="w-24 h-8 bg-blue-500 text-sm rounded-lg text-white flex justify-center items-center gap-2">add user <i class="fa-solid text-black-500 fa-user-plus"></i></Link>
            <table className="w-full border-collapse border border-gray-500 bg-white text-sm  text-center">
            <thead>
                <tr className="bg-cyan-800 text-white h-12">
                  <th className="border  border-gray-300">User ID</th>
                  <th className="border border-gray-300">NAME</th>
                  <th className="border border-gray-300">Email</th>
                  <th className="border border-gray-300">Tel</th>
                  <td>Action</td>
                </tr>
                </thead>
                {Array.isArray(users)&&users.map((users,index)=>{
                    return(
                        <tr className="border border-gray-300 h-12">
                    <td className="border border-gray-300">{index+1}</td>
                    <td className="border border-gray-300">{users.name}</td>
                    <td className="border border-gray-300">{users.email}</td>
                    <td className="border border-gray-300">{users.tel}</td>
                    <td className="border border-gray-300">
                        <button className="w-8 h-8 bg-blue-400 rounded-sm"><i class="fa-solid fa-pen-to-square"></i></button> | <button className="w-8 h-8 bg-red-600 rounded-sm"><i class="fa-solid text-white fa-trash"></i></button>
                        </td>
                </tr>
                        
                    );

                })}
                
                
             
                    
               
            </table>
            </div>
                
            </div>
            
        </div>

    );
}

export default GetUser
