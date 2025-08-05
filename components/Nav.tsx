import { Heart, ShoppingBag } from 'lucide-react'
import React from 'react'
import Logo from './kits/Logo'
import AddToCard from './sections/AddToCard'
import Faivorite from './sections/Faivorite'

const Nav = () => {

  return (
    <nav className='flex p-4 justify-between items-center gap-2 h-12 '>
        <Logo/>
        <div className="flex justify-center gap-2 items-center">
           <Faivorite/>
            <AddToCard/>
        </div>


    </nav>
  )
}

export default Nav