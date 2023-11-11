import React from 'react'
import Image from 'next/image'
const loading = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <div>
        <Image src = "/bouncing-squares.svg" width={100} height={50}/>
      </div>
    </div>
  )
}

export default loading
