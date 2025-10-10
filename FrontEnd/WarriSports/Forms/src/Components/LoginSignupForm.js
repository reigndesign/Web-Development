import './assets/css/LoginSignForm.css'
import user_icon from './assets/images/person-outline.svg'
import email_icon from './assets/images/mail-outline.svg'
import password_icon from './assets/images/lock-closed-outline.svg'
import phone_icon from './assets/images/phone-portrait-outline.svg'




function LoginSignupForm() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>Welcome to WarriSports</div>
        <div className='subtitle'>Please login or create an account to continue</div>
      </div>

      <div className='form'>
        <div className='input'>
          <img src={user_icon} alt='user icon' className='input-icon' />
          <input type='text' className='input-field' placeholder='Username' />
        </div>
        <div className='input'>
          <img src={email_icon} alt='user icon' className='input-icon' />
          <input type='email' className='input-field' placeholder='Email' />
        </div>
        <div className='input'>
          <img src={phone_icon} alt='user icon' className='input-icon' />
          <input type='text' className='input-field' placeholder='Phone Number' />
        </div>
        <div className='input'>
          <img src={password_icon} alt='user icon' className='input-icon' />
          <input type='text' className='input-field' placeholder='Password' />
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignupForm
