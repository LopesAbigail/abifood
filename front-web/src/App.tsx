import { ToastContainer } from 'react-toastify';
import Routes from "./Routes";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  return (
    <>
      <Routes />
      <ToastContainer/>
    </>
    
  );
}

export default App;
