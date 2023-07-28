// import hotBG from ""
import coldBG from "../src/assets/coldbg.jpg";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBG})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..." />
            <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>London,GB</h3>
              <img
                src="https://openweathermap.org/img/wn/02d@2x.png"
                alt="weatherIcon"
              />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 °C</h1>
            </div>
          </div>

          {/* bottom desc */}
        </div>
      </div>
    </div>
  );
}

export default App;
