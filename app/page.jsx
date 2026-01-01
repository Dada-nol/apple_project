import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductViewer></ProductViewer>
      <Showcase></Showcase>
    </main>
  );
}
