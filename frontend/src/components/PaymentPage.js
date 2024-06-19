import React, { useState, useContext} from 'react'
import { useDispatch,useNavigate } from 'react-router-dom'
import { CgClose } from "react-icons/cg";
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';
const PaymentPage = ( {onClose,data}) => {
  const { fetchUserAddToCart } = useContext(Context)

 const navigate = useNavigate(); 
const success=async()=>{
  const dataResponse = await fetch(SummaryApi.deleteallcart.url,{
    method : SummaryApi.deleteallcart.method,
    credentials : 'include',
    headers : {
        "content-type" : "application/json"
    }
})

const dataApi = await dataResponse.json()
if(dataApi.success){
  toast.success("We will verify your payment and then proceess your order.Thank you!!Happy Shopping!");
  fetchUserAddToCart();
  navigate('/');
}
}

  return (

    <div className='fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
    <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

         <div className='flex justify-between items-center pb-3'>
        
             <h2 className='font-bold text-lg'>Payment-Page-Pay Through any UPI App</h2>

             <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose} >
                 <CgClose/>
             </div>
         </div>
         <img src={data} className='mx-auto mt-8 block'></img>
        
            <p className='text-center '>Click "Yes" After Completing the Payment</p>
           <button className='px-3 py-2 mx-auto block mt-8 bg-red-600 text-white mb-10 hover:bg-red-700' onClick={success}>Yes</button>
                 



   
    </div> 

 </div>
    
  )
}

export default PaymentPage