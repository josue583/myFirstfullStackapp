import React from "react";





function getUser(){
    return(
        
        
        <div className=" flex flex-col items-center items-center p-20 bg-gray-100 ">
            <div>
                
            </div>
            
            <div className="w-1/2 flex flex-col items-center  gap-6 p-10 bg-white">
            <h1 className="w-3/5 h-12 text-center rounded-xs text-2xl font-bold text-white bg-cyan-800 p-2">STUDENT' S INFORMATION</h1>
            <div className="w-full flex flex-col gap-8">
            <button className="w-24 h-8 bg-blue-500 text-sm rounded-lg text-white">add user <i class="fa-solid text-white fa-user-plus"></i></button>
            <table className="w-full border-collapse border border-gray-500 bg-white text-sm  text-center">
            <thead>
                <tr className="bg-cyan-800 text-white h-12">
                  <th className="border border-gray-300">NAME</th>
                  <th className="border border-gray-300">Email</th>
                  <th className="border border-gray-300">Tel</th>
                  <td>Action</td>
                </tr>
                </thead>
                <tr className="border border-gray-300 h-12">
                    <td className="border border-gray-300">josue</td>
                    <td className="border border-gray-300">ndikumwenayojosue@gmail.com</td>
                    <td className="border border-gray-300">08784447583</td>
                    <td className="border border-gray-300">
                        <button className="w-8 h-8 bg-blue-400 rounded-sm"><i class="fa-solid fa-pen-to-square"></i></button> | <button className="w-8 h-8 bg-red-600 rounded-sm"><i class="fa-solid text-white fa-trash"></i></button>
                        </td>
                </tr>
                <tr className="border border-gray-300 h-12">
                    <td className="border border-gray-300">josue</td>
                    <td className="border border-gray-300">ndikumwenayojosue@gmail.com</td>
                    <td className="border border-gray-300">08784447583</td>
                    <td className="border border-gray-300">
                        <button className="w-8 h-8 bg-blue-400 rounded-sm"><i class="fa-solid fa-pen-to-square"></i></button> | <button className="w-8 h-8 bg-red-600 rounded-sm"><i class="fa-solid text-white fa-trash"></i></button>
                        </td>
                </tr>
                <tr className="border border-gray-300 h-12">
                    <td className="border border-gray-300">josue</td>
                    <td className="border border-gray-300">ndikumwenayojosue@gmail.com</td>
                    <td className="border border-gray-300">08784447583</td>
                    <td className="border border-gray-300">
                        <button className="w-8 h-8 bg-blue-400 rounded-sm"><i class="fa-solid fa-pen-to-square"></i></button> | <button className="w-8 h-8 bg-red-600 rounded-sm"><i class="fa-solid text-white fa-trash"></i></button>
                        </td>
                </tr>
             
                    
               
            </table>
            </div>
                
            </div>
            
        </div>

    );
}

export default getUser