import './style.css';
import './phone.css';
import Navbar from './Components/1navbar.jsx';
import Home from './Components/2home.jsx';
import BestSellers from './Components/3.best_sellers.jsx';
import Service from './Components/4service.jsx';
import Signin from './Components/5signin.jsx';
import Contact from './Components/6contact.jsx';
import Footer from './Components/7footer.jsx';
import {useState} from 'react';



function App() {
// Enable Dark Mode feature Step 1: setting our state ,purpose:(Whether dark mode is enable or not)
  const[mode,setMode] = useState('light') ;

// Creating state for multiple language feature
const[language,setLanguage]= useState("en");

// All website translation
      const text ={
        en:{
          title:"Welcome To Indian Indian Kitchen Asma",
          home:"Home",
          services:"Services",
          contact:"Contact Us",
          cart:"Add To Cart"
        },
        hi: {
            title: "इंडियन किचन अस्मा",
            home: "होम",
            services: "सेवाएँ",
            contact: "संपर्क करें",
            cart: "कार्ट में जोड़ें"
          },

          gu: {
            title: "ઇન્ડિયન કિચન અસ્મા",
            home: "હોમ",
            services: "સેવાઓ",
            contact: "અમારો સંપર્ક કરો",
            cart: "કાર્ટમાં ઉમેરો"
          }
        
      };


// step 3 Changing our mode by using condtional statements 
    const toggleMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#061625";

    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";

    }

  }
  return (
    
  <>
  {/* step 2 passing our mode  */}
  {/* step 4 passing toggleMode for our dark mode light mode ,We will use this toggle in our button */}
  <Navbar title="Indian Kitchen Asma" mode={mode} toggleMode={toggleMode} language={language} text={text} setLanguage={setLanguage}/> 

  <Home language={language} text={text} setLanguage={setLanguage}/> 

  <BestSellers mode={mode}/>
  <Service mode={mode}/>
  <Signin mode={mode}/>
  <Contact mode={mode}/>
  <Footer/>
  </>
    
  );
}

export default App;
