import { Helmet } from "react-helmet";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Ahmed Nassar | Chemist | MERN Developer</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Ahmed Nassar | Chemist | MERN Developer"
        />
      </Helmet>
      <div className="overflow-x-hidden text-neutral-700 antialiased selection:bg-gray-600 selection:text-gray-300 ">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute bottom-auto left-auto right-0 top-0 size-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
        </div>
        <Navbar />

        <div className="container mx-auto px-8">
          <Hero />
          <About />
          <Experiences />
          <Projects />
          {/* <Gallery /> */}
          <Education />
          <Courses />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
