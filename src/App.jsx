import HeroBg from "./components/backgroundHero.jsx";
import userImage from "./assets/user.png";

function App() {
  return (
    <>
      {/* ──────────────── Hero Section ──────────────── */}
      <div id="heroSection" className="h-screen relative">
        <HeroBg />
        <div id="navBar" className="flex justify-between items-center">
          <a href="index.html" className="w-16 h-auto flex py-2 ml-16">
            <img src="./src/assets/logo.png" alt="Wakamonoo Logo" />
          </a>
          <div id="navLinks">
            <ul className="flex space-x-6 mr-16 text-light font-body text-xl">
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div id="heroPage">
          <div
            id="centerPage"
            className="relative w-full mx-auto mt-16 h-[150px]"
          >
            <p className="text-light text-opacity-5 text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-daredevil text-center relative z-10">
              WAKAMONO OF THE NIGHT
            </p>
            <p
              className="text-transparent text-opacity-5 text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-daredevil text-center absolute top-0 left-0 right-0 z-30"
              style={{
                WebkitTextStroke: "1px #0d0d0d", // red stroke, adjust thickness & color
                pointerEvents: "none", // so it doesn’t block clicks
              }}
            >
              WAKAMONO OF THE NIGHT
            </p>
          </div>
          <div
            id="userHero"
            className="flex justify-between"
          >
            <img src={userImage} alt="User" className="w-auto" />
            <div id="userDesc">
              <p className="text-primary text-4xl lg:text-7xl text-techno">JOVEN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
