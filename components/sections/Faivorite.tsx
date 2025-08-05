'use client'

import { useAppDispatch, useAppSelector } from "@/store/Hooks"
import { removeFromCart } from "@/store/CardSlice"
import { Delete, Heart, ShoppingBag } from "lucide-react"
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

    <div className="flex justify-end bg-neutral-800/10 inset-0 fixed z-50 items-center w-full d-dvh">
        
        <div className="w-96 h-dvh bg-white">
          {Faivorite.map(({ price ,  id , title }) => (
             <div key={id} className="flex p-2 justify-between items-center h-40 w-full border border-neutral-200">
               {/* <Image src={image} width={600} height={600}  alt={title} className='w-40  h-full   rounded-2xl object-cover' /> */}
                <div className="">
                    <h1>{title} </h1>
                    {/* <p>{quantity} </p> */}
                    <button onClick={()=> dispatch(removeFromCart(id))}> 
                        <Delete/>
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
