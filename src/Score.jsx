import React, { useState } from 'react'

function Score() {
    const[score,setScore] = useState(0);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-pink-500'>
        <div className='bg-white p-10 rounded-2xl shadow-2xl shadow-green-500 text-center w-[350px]'>
              <h2 className='text-2xl font-bold text-gray-700 mb-2'>
                Cricket Score
              </h2>
              <p className='text-gray-500 mb-6'>
                state Example using <span className='font-bold'>useState</span>
              </p>
              <h1 className='text-7xl font-extrabold text-blue-600 mb-8'>
                      {score}
              </h1>
              <button className='bg-blue-400 px-8 py-3 text-white text-lg font-semibold rounded-2xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-[0_0_10px_rgba(255,0,0,0.25)]'onClick=
              {()=>{setScore(score+1);}}>Incrment</button>
        </div>
    </div>
  )
}

export default Score