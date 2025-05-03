import LoginForm from "./loginForm";
import NavBar from "./navbar";
import HeroHomePage from "./heroHome";
import HomeSideBar from "./sideBar";


export default function App() {
  return (
    <>
      <NavBar />
      <div className="hero--container">
        <HeroHomePage />
      </div>
      {/* <LoginForm /> */}
    </>
  );
}
