import LoginForm from "./loginForm";
import NavBar from "./navbar";
import HeroHomePage from "./heroHome";
import LatestGames from "./lastestGames";
import LeagueTable from "./grid";


export default function App() {
  return (
    <>
      <NavBar />
      <div className="hero--container">
        <HeroHomePage />
      </div>
      <div className="lastest--games">
        <LatestGames />
      </div>
      {/* <LoginForm /> */}
    </>
  );
}
