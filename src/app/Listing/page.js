"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../FireBaseConfig';

export default function Listing() {
    let [user, setUser] = useState([])

    console.log(user)


    const db = getDatabase(app);
    let getEnquiryData = () => {
        const enquiryRef = ref(db, 'enquiry/');
        onValue(enquiryRef, (enquiryRes) => {
            const data = enquiryRes.val();
            let Userdata = []
            for (let key in data) {
                Userdata.push(data[key])

            }

            setUser(Userdata)



        })
    }
    useEffect(() => {
        getEnquiryData()
    }, [])
    return (
        <div className=''>
            <div className=''>
                <div className=''>
                    <div class="relative  shadow-md sm:rounded-lg overflow-x-auto my-14 mx-auto w-full px-4 md:max-w-[1400px]">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto border-collapse ">
                            <thead>
                                <tr class="bg-gray-200">
                                    <th class="px-4 py-2 text-left">Title</th>
                                    <th class="px-4 py-2 text-left">Description</th>
                                    <th class="px-4 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.length >= 1

                              
                                    ?
                                    user.map((Userdata,index)=>{
                                        return(
                                            <tr class="bg-gray-100">
                                            <td class="border px-4 py-2">{Userdata.uheading}</td>
                                            <td class="border px-4 py-2">{Userdata.udescription}</td>
    
                                        </tr>
                                        )
                                    })
                                    
                                    :

                                    <tr>
                                        <td colSpan={2}>
                                            No Data Found
                                        </td>
                                    </tr>
                                 }




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <img class="w-full h-[30vh]" src="https://firebase-two-ebon.vercel.app/img/16.jpg" alt=""></img>
        </div>
    )
}
