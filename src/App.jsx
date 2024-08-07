import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="Hero">
        <Hero />
      </section>
      <section className="about bg-second" id="About">
        <About />
      </section>
      <section id="Project">
        <Project />
      </section>
    </>
  );
}

export default App;
