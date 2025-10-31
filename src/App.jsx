import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Separator from "./components/Separator";
import Social from "./components/Social";

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
    </div>
  );
}

export default App;
