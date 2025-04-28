import CarouselHomePage from "./carousel"

export default function HeroHomePage() {
  return (
    <>
    <div className="hero--container">
      <div className="hero--sidebar">
        <ul className="sidebar">
          <li className="sidebar--item__1 hero--btn"><a href="##" target="_blank">Soccer</a></li>
          <li className="sidebar--item__2 hero--btn"><a href="##" target="_blank">Basket Ball</a></li>
          <li className="sidebar--item__3 hero--btn"><a href="##" target="_blank">Casino</a></li>
        </ul>
      </div>
    </div>
    <CarouselHomePage />
    </>
  )
}