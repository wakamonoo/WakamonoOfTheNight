function App() {
  return (
    <div id="body">
      {/* ──────────────── Hero Section ──────────────── */}
      <div id="heroSection" className="bg-primary h-screen">
        <div id="navBar" className="bg-secondary flex justify-between items-center">
          <a href="index.html" className="w-16 h-auto flex py-2 ml-16">
            <img src="./src/assets/logo.png" alt="Wakamonoo Logo" />
          </a>
          <div id="navLinks">
            <ul className="flex space-x-6 mr-16 text-white">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ──────────────── About Section ──────────────── */}

      {/* ──────────────── Skills Section ──────────────── */}

      {/* ──────────────── Projects Section ──────────────── */}

      {/* ──────────────── Contact Me Section ──────────────── */}
    </div>
  );
}

export default App;
