import CarouselHomePage from "./carousel"

export default function HeroHomePage() {
  return (
    <>
    <div className="hero--container">
      <div className="hero--data">
        <div className="hero--card-one">
          <h1 className="hero--title">Welcome to SuperBet</h1>
          <p className="hero--text">Your one-stop destination for all your betting needs.</p>
          <button className="hero--btn">Get Started</button>
        </div>
        <div className="hero--card-two">
          <h1 className="hero--title">Bet on Your Favorite Sports</h1>
          <p className="hero--text">Join us and experience the thrill of betting.</p>
          <button className="hero--btn">Join Now</button>
        </div>
      </div>
    </div>
    <CarouselHomePage />
    </>
  )
}