import './style.css';
import './phone.css';
import Navbar from './Components/1navbar.jsx';
import Home from './Components/2home.jsx';
import BestSellers from './Components/3.best_sellers.jsx';
import Service from './Components/4service.jsx';
import Signin from './Components/5signin.jsx';
import Contact from './Components/6contact.jsx';
import Footer from './Components/7footer.jsx';


function App() {

  return (
    
  <>
  <Navbar title="Indian Kitchen Asma" />
  <Home/>
  <BestSellers/>
  <Service/>
  <Signin/>
  <Contact/>
  <Footer/>
  </>
    
  );
}

export default App;
