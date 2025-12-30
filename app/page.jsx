import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

/**
 * Root page component that renders the main layout containing the navigation bar and hero section.
 *
 * @returns {JSX.Element} The page JSX with a <main> element wrapping <NavBar /> and <Hero />.
 */
export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
    </main>
  );
}