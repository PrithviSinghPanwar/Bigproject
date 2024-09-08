"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from './FireBaseConfig';


export default function Blog() {

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
        <div>
            <section className='my-14 pt-10'>
                <div className='py-3 w-[1320px] mx-auto grid grid-cols-3 '>
                    {user.length >= 1


                        ?
                        user.map((Userdata, index) => {
                            return (
                                <div className='grid grid-cols-3 '>
                                <div className='w-[380px] h-[300px]  text-justify text-sm rounded-sm p-4 text-wrap flex justify-around flex-col justify blogshadow mb-10'>
                                    <h1 className='text-xl capitalize  font-bold'>{Userdata.uheading}</h1>
                                    <p>{Userdata.udescription}</p>
                                    <h1>1 minute ago</h1>
                                </div>
        
        
                            </div>
                    )
                        })

                        :

                        <div>
                            <div colSpan={2}>
                                No Data Found
                            </div>
                        </div>
                    }

                 
                   
                </div>
                <div className='flex justify-center items-center mt-6'>
                        <button className='transform btn-color px-10 font-extrabold rounded-lg text-white py-2 '>Load More</button>
                    </div>
            </section>
        </div>
    )
}
