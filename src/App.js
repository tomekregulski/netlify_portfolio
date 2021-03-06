import React, { useState } from 'react';

import NavBar from './components/NavBar';
import About from './components/About';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Greeting from './components/Greeting';
import './styles/reset.css';
import './styles/animations.css';
import './styles/style.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <h1>TR</h1>
        <Router>
          <NavBar open={open} setOpen={setOpen} />
        </Router>
      </header>
      <main>
        <Greeting />
        {/* <Work /> */}
        <MyWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
