import React from 'react'
import Rectangle from "../assets/testimonyPics/Rectangle-9.png"
import quest from "../assets/testimonyPics/q.png"


const Testimony = () => {
  return (
    <div className="w-full h-full bg-black grid place-content-center">
      <div className='text-white text-center mt-14'>
        <h2 className='text-3xl'>What They Say?</h2>
      </div>

      <div className='grid lg:grid-cols-2 p-32 gap-20'>
        <div className='bg-blue-900  w-24 h-72 rounded-lg'>
            <div className='w-56 h-60 ml-8'>
            <img src={Rectangle} alt="" style={{width:"100%" , height:"294px" , borderRadius:"13px" , objectFit:"cover"}}/>
            </div>
        </div>
        <div className='w-96 h-44 relative mt-20'>
            <div className='text-white absolute'>
            <h2 className='text-white mb-20'>
            Ac in enim sem elementum. Nisi, 
            est a non libero interdum scelerisque neque, penatibus. Vitae, aliquam venenatis ac porta et. Et eu, interdum elit donec sit 
            sapien mi. Ipsum neque nec pellentesque nullam habitant velit, in.
            </h2>
            <h3 className='text-white mb-4'>Katrin Bousan</h3>
            <h4 className='text-white'>Lorem Ipsum</h4>
            </div>
            <img src={quest} alt="" style={{marginTop:"-4rem" ,}}/>
        </div>
      </div>
    </div>
  )
}

export default Testimony