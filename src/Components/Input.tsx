import React from 'react'

const Input = () => {
  return (<div className='flex justify-center'>
    <div className='flex flex-col heading'>
        <label className='text-mainhead text-xl flex- font-bold mt-12 mb-3 '>Password</label>
        <textarea placeholder='Type your password...' className='h-[5rem] focus:outline-none w-[40rem] text-black text-xl placeholder:text-black bg-[#0ABF04] rounded-xl px-[20px] border-[2px] border-[solid] border-mainhead py-[12px]  '></textarea>
    </div></div>
  )
}

export default Input