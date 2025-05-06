export default function LatestGames() {
  return (
    <>
      <div className="latest--games">
        <h3 className="latest--games--title">Latest Games</h3>
        <div className="latest--games--container">
          <div className="latest--games--card">
            <img src="https://example.com/game1.jpg" alt="Game 1" className="latest--image" />
            <h2 className="latest--games-title">Game 1</h2>
            <p className="latest--games-description">Description of Game 1.</p>
          </div>
          <div className="latest--games--card">
            <img src="https://example.com/game2.jpg" alt="Game 2" className="latest--image" />
            <h2 className="latest--games-title">Game 2</h2>
            <p className="latest--games-description">Description of Game 2.</p>
          </div>
          <div className="latest--games--card">
            <img src="https://example.com/game3.jpg" alt="Game 3" className="latest--image" />
            <h2 className="latest--games-title">Game 3</h2>
            <p className="latest--games-description">Description of Game 3.</p>
          </div>
        </div>
      </div>
    </>
  )
}