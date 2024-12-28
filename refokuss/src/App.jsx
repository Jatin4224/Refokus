import Cards from "./components/Cards";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 text-white font-satoshi ">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
      </div>
    </>
  );
}

export default App;
