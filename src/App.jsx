import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingContact from './components/layout/FloatingContact';
import Home from './pages/Home';
import About from './pages/About';
import Doctor from './pages/Doctor';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="doctor"><Doctor /></div>
        <div id="services"><Services /></div>
        {/* <div id="gallery"><Gallery /></div> */}
        <div id="reviews"><Reviews /></div>
        <div id="faq"><FAQ /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
