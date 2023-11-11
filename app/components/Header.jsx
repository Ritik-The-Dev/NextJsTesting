import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-screen p-2">
            <div className="header-logo">
                <h1 className='font-bold text-5xl'>
                <Link href="/">
                <Image src="/Logo.svg" 
                    width= {50}
                    height={50}/>
                </Link>
                </h1>
            </div>
            <div>
                <nav>
                    <ul className="flex items-center justify-center">
                        <Link href="/"><li className='p-2 text-2xl hover:bg-gray-200 rounded-3xl mr-5'>Home</li></Link>
                        <Link href="/about"><li className='p-2 text-2xl hover:bg-gray-200 rounded-3xl mr-5'>About</li></Link>
                        <Link href="/movie"><li className='p-2 text-2xl hover:bg-gray-200 rounded-3xl mr-5'>Movie</li></Link>
                        <Link href="/contact"><li className='p-2 text-2xl hover:bg-gray-200 rounded-3xl mr-5'>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
