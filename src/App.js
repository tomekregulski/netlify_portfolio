import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Greeting from './components/Greeting';
import './styles/reset.css';
import './styles/card.css';
import './styles/animations.css';
import './styles/style.css';

function App() {
  return (
    <div>
      <header>
        <h1>TR</h1>
        <Router>
          <NavBar />
        </Router>
      </header>
      <main>
        <Greeting />
        <MyWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
