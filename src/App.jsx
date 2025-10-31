import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Separator from "./components/Separator";
import Social from "./components/Social";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Separator />
      <Social />
      <Separator />
      <About />
      <Separator />
      <Stack />
      <Separator />
    </div>
  );
}

export default App;
