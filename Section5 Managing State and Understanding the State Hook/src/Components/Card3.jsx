import React, { useState } from 'react'

// ! useState advance

// !issme haimne objec me ke value ko change kiya pr object and array me hum direct change nhi kr sakte isliye hum

// ! ..val krke object ki sari value le liya then usko onclick ke help se change kiya

const Card3 = () => {

    const [val, setVal] = useState({ name: "Rk", isBanned: false })
    return (
        <>


            <h1 className='bg-blue-400 mt-5 mb-5'> Card 3</h1>

            <h1> Name : {val.name}</h1>
            <h2> Banned : {val.isBanned.toString()}</h2>

            <button onClick={() => setVal({ ...val, isBanned: !val.isBanned })} className='px-2 py-3 bg-blue-600 text-white mt-5 rounded-md' > Clicke  </button>

        </>

    )
}

export default Card3