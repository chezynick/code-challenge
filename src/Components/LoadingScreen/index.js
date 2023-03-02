import React from 'react'

const LoadingScreen = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='rounded-full w-32 h-32 bg-red-600 animate-bounce'/>
        </div>
      );
}
 
export default LoadingScreen;