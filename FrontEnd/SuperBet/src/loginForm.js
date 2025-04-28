export default function LoginForm() {
  return (
    <>
    <div className="intro">
        <h1>Welcome to SuperBet</h1>
        <span>Bet Smarter, Bet Fair</span>
      </div>
      <div className="loginForm">
        <h1>Login</h1>
        <form className="isForm">
          <div className="isForm__phone">
            <input placeholder="enter your phone number" type="text"/>
          </div>
          <div className="isForm__password">
            <input placeholder="enter your password" type="password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  )
}