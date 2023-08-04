//import logo from "logo.svg";
import "./App.css";
import Header from "../Header/Header.js";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="weather" id="weather">
          <div className="weather_info">75F</div>
          <img src="/images/day/sunny.svg" alt="day sunny" className='weather_image' />
        </section>
        <section id="card-section">card section</section>
      </main>
    </div>
  );
}

export default App;
