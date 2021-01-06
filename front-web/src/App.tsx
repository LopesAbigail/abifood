import Navbar from "./Navbar";
import Home from "./Home";
import './App.css'

function App() {
  return (
    //ReactFragment: não é retornado no HTML
    <>
      <Navbar/>
      <Home />
    </>
  );
}

export default App;
