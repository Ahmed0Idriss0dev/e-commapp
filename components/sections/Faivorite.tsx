'use client'

import { useAppDispatch, useAppSelector } from "@/store/Hooks"
import { removeFromCart } from "@/store/CardSlice"
import { ClosedCaption, Delete, Heart, ShoppingBag, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


export default function Faivorite() {
  const  Faivorite = useAppSelector((state) => state.Faivorite.items)
  const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const  openclose =()=>{
        isOpen ? setIsOpen(false): setIsOpen(true)
    } 
        

  
  return (
    <>
     <button className="relative" onClick={openclose}> 
       {Faivorite.length > 0 && 
        <span className="absolute scale-90 border-2 border-white -top-1 bg-red-600 text-white w-6 h-6 rounded-full">{Faivorite.length} </span>
      }
        <Heart/>
     </button>
     {
        isOpen && 

    <div className="flex a justify-end bg-neutral-800/10 inset-0 fixed z-50 items-center w-full d-dvh">
             <button className="relative w-10 h-10 bg-store-950 text-white rounded-full flex justify-center items-center" onClick={openclose}> 
        <X/>
     </button>
        <div className="w-96 h-dvh bg-white">
          <div className=" p-3">
            <h1 className="text-2xl font-semibold"> 
               Your Favorite Picks</h1>
               <p>Your handpicked favorites all in one place.</p>
          </div>
          {Faivorite.map(({ price , id , title ,image }) => (
             <div key={id} className="flex p-2 justify-start gap-2 items-center h-40 w-full border border-neutral-200">
               <Image src={image} width={600} height={600}  alt={title} className='w-40  h-full   rounded-2xl object-cover' />
                <div className="">
                    <h1>{title} </h1>
                    <button className="w-40 h-9 bg-store-950 text-white rounded-md" onClick={()=> dispatch(removeFromCart(id))}> 
                      remove
                    </button>
                </div>
             </div>
          ))}
    </div>
        
    </div>
     }
    </>
  )
}
