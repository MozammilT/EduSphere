import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title subtitle="OUR PROGRAM" title="What We Offer" />
      <Programs />
      <About />
      <Title subtitle="GALLERY" title="Campus Photos" />
      <Campus />
      <Title subtitle="TESTIMONIALS" title="What Student Says" />
      <Testimonials />
    </>
  );
}

export default App;
