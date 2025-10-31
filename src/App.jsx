import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Separator from "./components/Separator";
import Social from "./components/Social";
import Stack from "./components/Stack";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Separator />
      <Social />
      <Separator />
      <About />
      <Separator />
      <Stack />
      <Separator />
      <Projects />
      <Separator />
    </>
  );
}

export default App;
