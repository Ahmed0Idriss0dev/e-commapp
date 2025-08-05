'use client'

import { useAppDispatch, useAppSelector } from "@/store/Hooks"
import { removeFromCart } from "@/store/CardSlice"
import { Delete, ShoppingBag, ShoppingCart, Trash, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const  openclose =()=>{
        isOpen ? setIsOpen(false): setIsOpen(true)
    } 
        

    const totle = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  return (
    <>
     <button className="relative" onClick={openclose}> 
      {cartItems.length > 0 && 
        <span className="absolute scale-90 border-2 border-white -top-1 bg-red-600 text-white w-6 h-6 rounded-full">{cartItems.length} </span>
      }
        <ShoppingBag/>
     </button>
     {
        isOpen && 

    <div className="flex  justify-end bg-neutral-800/10 inset-0 fixed z-50 items-center w-full d-dvh">
        <div className="w-96 relative flex justify-between flex-col h-dvh bg-white">
          <div className="overflow-y-scroll">
        <div className=" p-4">
           <h1 className="text-2xl font-semibold">Classic White T-Shirt</h1>
           <p> A soft, everyday essential made from 100% cotton.</p>
           <h1> Total Amount  :{totle} USD </h1>
        </div>
          <button className="absolute  -left-6 w-10 h-10 bg-store-950 text-white rounded-full flex justify-center items-center" onClick={openclose}> 
        <X/>
     </button>
          {cartItems.map(({image , id , title , quantity}) => (
             <div key={id} className="flex p-2 justify-start gap-2 items-center h-40 w-full border border-neutral-200">
               <Image src={image} width={600} height={600}  alt={title} className='w-40  h-full   rounded-2xl object-cover' />
                <div className="">
                    <h1>{title} </h1>
                    <p>{quantity} </p>
                    <button className="w-40 h-9 bg-store-800 text-white rounded-md" onClick={()=> dispatch(removeFromCart(id))}> 
                        remove
                    </button>
                </div>
             </div>
          ))}
          </div>
          <div className="p-2.5">

          <button  className=' bg-store-950 flex justify-center items-center gap-2 text-white w-full h-12 rounded-md'>
          <ShoppingCart/>
          <span>shop now</span>
        </button>    </div>
          </div>
        
    </div>
     }
    </>
  )
}
