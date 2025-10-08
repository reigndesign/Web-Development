import MainLogo from './-logo--nobg.png';

export default function LandPage() {

  return(
    <>
      <div className="container">
        <header className="nav">
          <div className="nav-bar">
            <a href='/'><img src={ MainLogo } alt="Main Logo" className="logo" /></a>
            <ul className="nav-link">
              <li className="nav--visit"><a href="#">Home</a></li>
              <li className="nav--visit"><a href="#">About</a></li>
              <li className="nav--visit"><a href="#">Services</a></li>
              <li className="nav--visit"><a href="#">Contact</a></li>
            </ul>
          </div>
        </header>
      </div>
    </>
  ) 

}