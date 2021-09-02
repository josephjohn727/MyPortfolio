import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navfrom from "./components/Navbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <div>
      <>
        <Particles
          className="particle-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9aboo",
                },
              },
            },
          }}
        />
        <Navbar />
        <Header />
      </>
      {/* <h1>My Portfolio ........</h1>; */}
    </div>
  );
}

export default App;
