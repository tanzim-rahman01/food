import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-slate-50 w-[600px] mx-auto mt-[50px]'>
      <h1 className='text-center text-[25px]'>Sign in to your account</h1>
      <p className='text-center text-[21px]'>  Please enter your email and password to continue</p>
      <form className='p-[50px]' >
      <label className='text-[24px]'>Email</label>
        <div className='text-[30px] '>
          <input 
            type="email" 
            value={''}
          />
        </div>
        <label  className='text-[24px]'>Password</label>
        <div className='text-[30px] ' >
          <input 
            type="password" 
            value={''}
          />
        </div>
        
        <button className='items-center mx-auto mt-[30px] text-wiat bg-green-300 py-[10px] px-[30px] rounded-md'>SingUp</button>
      </form>
    </div>
    </>
  )
}

export default page