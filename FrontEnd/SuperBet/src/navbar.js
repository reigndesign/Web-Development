import mainLogo from './img/logo.jpeg';

export default function NavBar() {
  return (
    <>
      <main className="container">
        <nav className="main--nav">
          <div className="nav--data">
            <img src={ mainLogo } alt="main--logo" className="main--logo" />
            <span><a href="##">Sports</a></span>
            <span><a href="##">Casino</a></span>
          </div>
          <ul className="component--data">
              <li className="list-item"><a href="##">Demo</a></li>
              <li className="list-item"><a href="##">Demo</a></li>
            </ul>
        </nav>
      </main>
    </>
  )
}