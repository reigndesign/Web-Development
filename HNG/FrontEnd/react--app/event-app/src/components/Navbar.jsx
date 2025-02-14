import logo from '../assets/img/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className="main--navbar flex justify-between items-center">
            <div className="main-logo">
                <img src={ logo } alt="main logo" />
            </div>
            <ul className=" nav--item list-none flex uppercase cursor-pointer">
                <li className="nav--list">Events</li>
                <li className="nav--list">my ticket</li>
                <li className="nav--list">About Project</li>
            </ul>
            <a className=" uppercase no-underline " href="">My Ticket</a>
        </nav>
    
    </>
  )
}

export default Navbar