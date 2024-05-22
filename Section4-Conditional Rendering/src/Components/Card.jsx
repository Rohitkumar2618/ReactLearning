import React from 'react'

const Card = () => {

  const data = [
    {
      name: 'Husn',
      description: 'Written by Anuv jain'

    },

    {
      name: 'Kyun',
      description: 'Written by Vilen '

    },
  ]
  return (
    <div
      className='w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center rounded items-center'
    >

      {data.map((item, index) => (
        <div className=' w-60 px-3 py-2  bg-zinc-100
                rounded-md'>
          <h3 className='font-semibold text-xl '>{item.name}</h3>
          <p className='text-xs mt-2'>
            {item.description}
          </p>
          <button onClick={() => alert("Clicked")}
            className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3 '> Download Now</button>
        </div>
      ))}
    </div>
  )
}

export default Card