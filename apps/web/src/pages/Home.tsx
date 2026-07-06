import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/features/Features";
import Stats from "../components/stats/Stats";
import About from "../components/about/About";
import Roadmap from "../components/roadmaps/Roadmap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <About />
      <Roadmap />
    </>
  );
}