export default function NavBar() {
  return (
    <>
      <main className="container">
        <nav className="main--nav">
          <div className="nav--data">
            <img src="./logo.png" alt="main--logo" className="main--logo" />
            <span><a href="##"><img src="./order.png"/></a></span>
            <span><a href="##"><img src="./order.png"/></a></span>
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