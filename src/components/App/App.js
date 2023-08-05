//import logo from "logo.svg";
import "./App.css";
import Header from "../Header/Header.js";
import WeatherCard from "../WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard night={ false } type='night-fog' />
        <section id="card-section">card section</section>
      </main>
    </div>
  );
}

export default App;
