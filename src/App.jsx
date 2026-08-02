import './style.css';
import './phone.css';
import Navbar from './Components/1navbar.jsx';
import Home from './Components/2home.jsx';
import Service from './Components/3service.jsx';
import Signin from './Components/4signin.jsx';
import Ourclients from './Components/5ourclients.jsx';
import Footer from './Components/6footer.jsx';

function App() {

  return (
    
  <>
  <Navbar/>
  <Home/>
  <Service/>
  <Signin/>
  <Ourclients/>
  <Footer/>
  </>
    
  );
}

export default App;
