import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Campus from "./components/Campus";

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
    </>
  );
}

export default App;
