import mainLogo from './img/logo.jpeg';

export default function NavBar() {
  return (
    <>
      <main className="container">
        <nav className="main--nav">
          <div className="nav--data">
            <img src={ mainLogo } alt="main--logo" className="main--logo" />
            <span className="web--Sport"><a href="##">Sports</a></span>
            <span className="web--Casino"><a href="##">Casino</a></span>
          </div>
          <ul className="component--data">
              <li className="list-item--primary"><a href="##">Login</a></li>
              <li className="list-item--secondary"><a href="##">Register</a></li>
            </ul>
        </nav>
      </main>
    </>
  )
}