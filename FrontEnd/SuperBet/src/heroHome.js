import CarouselHomePage from "./carousel"
import Images001 from "./img/dynamic-hero-header-for-superbet--06.jpeg"
import Images002 from "./img/dynamic-hero-header-for-superbet--05.jpeg"

export default function HeroHomePage() {
  return (
    <>
    <div className="hero--container">
      <div className="hero--data">
        <div className="hero--card-one">
          <h1 className="hero--title">Welcome to SuperBet</h1>
          <p className="hero--text">Your one-stop destination for all your betting odds.</p>
          <button className="hero--btn">Get Started</button>
        </div>
        <div className="hero--card-two">
          <div className="card--one">
            <div className="card--img">
              <img src={ Images001 } alt="Sports Betting" className="card--image" />
            </div>
            <div className="card--body">
              <h2 className="card--title">Bet on Sports</h2>
              <p className="card--text">Join the excitement of live sports betting.</p>

              <button className="card--btn">Bet Now</button>
            </div>
            
          </div>
          <div className="card--two">
            <div className="card--img">
              <img src={ Images002 } alt="Casino Games" className="card--image" />
            </div>
            <div className="card--body">
              <h2 className="card--title">Casino Games</h2>
              <p className="card--text">Experience the thrill of casino games.</p>

              <button className="card--btn">Play Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CarouselHomePage />
    </>
  )
}