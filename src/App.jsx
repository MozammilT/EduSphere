import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
// import Testimonials_Test from "./components/Testimonials-test";

function App() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <Title subtitle="OUR PROGRAM" title="What We Offer" />
      <Programs />
      <About setPlay={setPlay} />
      <Title subtitle="GALLERY" title="Campus Photos" />
      <Campus />
      <Title subtitle="TESTIMONIALS" title="What Student Says" />
      <Testimonials />
      <Title subtitle="CONTACT US" title="Get In Touch" />
      <Contact />
      <Toaster position="bottom-right" reverse-order={true} />
      <Footer />
      <VideoPlayer play={play} setPlay={setPlay} />
      {/* <Testimonials_Test /> */}
    </>
  );
}

export default App;
