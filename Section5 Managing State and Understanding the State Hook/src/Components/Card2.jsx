import React, { useState } from 'react'

// ! useState intermidiate

const Card2 = () => {

    const [val, setVal] = useState(2);
    return (
        <>

            <h1 className='bg-blue-400'> Card 2</h1>
            <div className='p-5'> {val}</div>
            <button className='px-2 py-3 bg-blue-600 text-white rounded-md' onClick={() => setVal((prev) => prev * 2)}>
                Multiplier
            </button>

        </>

    )
}

export default Card2