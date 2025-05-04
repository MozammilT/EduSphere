import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title subtitle="OUR PROGRAM" title="What We Offer" />
      <Programs />
    </>
  );
}

export default App;
