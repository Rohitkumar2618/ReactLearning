// ! useState Basics


// Isse hame ye samajh aata hai ki useState ki madat se onClick event se banned ki value false se true or true se false kausi

// hoti hai

import React, { useState } from 'react'

const Card = () => {

  const [banned, setBanned] = useState(false)

  return (
    <>

      <h1 className='bg-blue-400'> Card 1</h1>
      <div className='p-5'>

        {banned.toString()}
      </div>

      <button className='px-2 py-3 mb-5  bg-blue-600 text-white rounded-md' onClick={() => setBanned(!banned)}> Banned</button>

    </>
  )
}

export default Card