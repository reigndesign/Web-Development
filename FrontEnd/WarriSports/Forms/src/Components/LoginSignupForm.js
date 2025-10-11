import './assets/css/LoginSignForm.css'
import user_icon from './assets/images/person-outline.svg'
import email_icon from './assets/images/mail-outline.svg'
import password_icon from './assets/images/lock-closed-outline.svg'
import phone_icon from './assets/images/phone-portrait-outline.svg'
import main_logo from './assets/images/WS--Logo__8.png'
import { useState } from 'react'




function LoginSignupForm() {

  const [action, setAction] = useState("Sign Up")

  return (
    <div className='container flex flex-col m-auto bg-white mt-[10px] w-[600px] h-auto shadow-lg'>
      <img src={main_logo} alt='WarriSports Logo' className='logo m-auto h-[100px] w-[100px] mt-3' />
      <div className='header flex flex-col items-center gap-[9px] w-[100%]'>
        <h1 className='title text-[#25294a] text-3xl font-bold'>Welcome to WarriSports</h1>
        <p className='subtitle text-[#25294a] text-sm font-normal'>Please login or create an account to continue</p>
      </div>

      <div className='form flex flex-col mt-[30px] gap-[20px]'>
        {action==="Login" ? null : <div className='input flex items-center m-auto w-[380px] h-[50px] bg-[#eaeaea] rounded-sm'>
          <img src={user_icon} alt='user icon' className='input-icon m-[0px 30px] h-[30px] px-5' />
          <input type='text' className='input-field h-[50px] w-[300px] bg-transparent border-none outline-none text-[#797979] font-[19px]' placeholder='Username' />
        </div>}
        <div className='input flex items-center m-auto w-[380px] h-[50px] bg-[#eaeaea] rounded-sm'>
          <img src={email_icon} alt='email icon' className='input-icon m-[0px 30px] h-[30px] px-5' />
          <input type='email' className='input-field h-[50px] w-[300px] bg-transparent border-none outline-none text-[#797979] font-[19px]' placeholder='Email' />
          {action==="Login" ? null : <button className='check-email absolute  right-[485px] h-[50px] bg-[#797979] text-white font-[16px] px-5 py-1 rounded-sm cursor-pointer'>Get Code</button>}
        </div>
        {action==="Login" ? null : <div className='input flex items-center m-auto w-[380px] h-[50px] bg-[#eaeaea] rounded-sm'>
          <img src={phone_icon} alt='phone icon' className='input-icon m-[0px 30px] h-[30px] px-5' />
          <input type='text' className='input-field h-[50px] w-[300px] bg-transparent border-none outline-none text-[#797979] font-[19px]' placeholder='Phone Number' />
        </div>}
        
        <div className='input flex items-center m-auto w-[380px] h-[50px] bg-[#eaeaea] rounded-sm'>
          <img src={password_icon} alt='password icon' className='input-icon m-[0px 30px] h-[30px] px-5' />
          <input type='password' className='input-field h-[50px] w-[300px] bg-transparent border-none outline-none text-[#797979] font-[19px]' placeholder='Password' />
        </div>
        {action==="Sign Up" ? null : <div className='forget-password pl-[110px] text-[#797979] font-[17px] '>Lost Password? <span className='cursor-pointer text-[#4c00b4]'>Click here!</span>
        </div>
}
      </div>
      {/* Button Section */}
      <div className='buttons flex gap-[30px] py-[20px] mx-auto'>
        <input className={action==="Login"?"submit-btn gray-text":"submit-btn"}  type='button' value={" Sign Up "} />
        <input className={action==="Sign Up"?"submit-btn gray-text":"submit-btn"}  type='button' value={" Login "}/>
      </div>
      {/* Button section Ends Here */}

      {/* Footer Section */}
      {action==="Sign Up" ? null :<div className='form--footer mx-auto p-[20px] '>I don't have an account? <span className='text-[#4c00b4] cursor-pointer' onClick={() => {setAction("Sign Up")}}>Sign Up</span></div>}

      {action==="Login" ? null : <div className='form--footer mx-auto pb-[20px] '>I already have an account? <span className='text-[#4c00b4] cursor-pointer' onClick={() => {setAction("Login")}}>Login</span>
      </div>}
      {/* Footer Section Ends Here */}
      
    </div>
  )
}

export default LoginSignupForm
