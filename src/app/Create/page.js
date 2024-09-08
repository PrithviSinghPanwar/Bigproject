"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set ,onValue  } from "firebase/database";
import { app } from '../Firebaseconfig';

export default function Create() {
  let [user,setUser]=useState([])
  
  const db = getDatabase(app);
  let obj={user, setUser}
  let randomCode=String((new Date().getTime())) 
  
 

  let handleForm=(event)=>{
    
    event.preventDefault();
    let uheading=event.target.heading.value;
    
    let udescription=event.target.description.value;
    let obj={uheading,udescription}
    set(ref(db, 'enquiry/' + randomCode ),obj );
    event.target.reset()
    
  }
  
  return (
    <div className='w-full  	 text-2xl mx-auto px-2  md:max-w-[1400px] '>
        <div className="lg:mx-auto rounded-lg p-4 px-2 my-8 createshadow" >
            <form onSubmit={handleForm}>
                <label  className="block my-4 md:text-lg text-sm font-medium text-gray-900">Heading</label>

                <input type="text" name="heading" rows="4" className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."/>

                <label  className="block my-4 text-sm md:text-lg font-medium text-gray-900">Desciption</label>
                <textarea name="description" className="block min-h-[300px] mt-4 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here...">
                    </textarea>
                <div className="text-center">
                    <button  type="submit" className="transform  w-[40%] rounded-md mt-10  bg-[black] text-white py-2 font-bold duration-300 hover:bg-[#4B0082] ">Add Blog</button>
                </div>
           </form>
         </div>
    </div>
  )
}
