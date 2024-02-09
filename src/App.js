import './App.scss'
import AboutMe from './components/AboutMe'
import Projects from './components/Closing'
import Closing from './components/Projects'

function App() {
  return (
    <div className="App">
      <section id="sideBar">
        <span></span>
      </section>

      <AboutMe />
      <Projects />
      <Closing />
    </div>
  );
}

export default App;
