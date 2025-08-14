import Navbar from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import Destinations from './components/Destinations.tsx';
import Packages from './components/Packages.tsx';
import { Footer } from './components/Footer.tsx';
import ContactForm from './components/ContactForm.tsx';
import { Gallery } from './components/Gallery.tsx'; 

import './index.css'; 

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About + Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Destinations Section */}
      <section id="destinations">
        <Destinations />
      </section>

      {/* Packages Section */}
      <section id="packages">
        <Packages />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
