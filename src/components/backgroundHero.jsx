import bg from "../assets/background.png";

function HeroBg() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position:  'absolute',
        height: "100vh",
        width: '100%',
        zIndex: -1,
      }}
    ></div>
  );
}

export default HeroBg;
