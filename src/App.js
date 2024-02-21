import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Service from './components/Service';
import Blog from './components/Blog';
import { useState } from 'react';





function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Header />
      <main>
        <article>
          <Hero />
          <About />
          <Service />
          {/* <Features /> */}
          <Blog />
          <CTA />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
