import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductViewer></ProductViewer>
    </main>
  );
}
