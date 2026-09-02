import { FaWhatsapp, FaYoutube, FaEnvelope } from "react-icons/fa";



function Contact(props) {

  return(
  <div > 
<section id="client-section">
        <h1 className="h-primary center" style={{color:props.mode==='dark'?'white':'black'}}>{props.text[props.language].contact}</h1>
        <div id="clients">
            
            <div className="client-items">
                <a href="https://wa.me/917874867343" target='_blank'> 
                <FaWhatsapp className="social-icon whatsapp social-icon"  style={{color:props.mode ==="light"?"black":"white"}}/>
                </a>
            </div>
            <div className="client-items">
                <a href='https://youtube.com/@indiankitchen-fe7gk?si=ma8Qb-CoiFnFROsW' target='_blank'> 
                <FaYoutube className="social-icon youtube social-icon"  style={{color:props.mode ==="light"?"black":"white"}}/> 
                </a>
            </div>
            <div className="client-items">
                <a id="gmail" href="mailto:bubblykhan7890@gmail.com" target='_blank' > 
                <FaEnvelope className="social-icon gmail social-icon" style={{color:props.mode ==="light"?"black":"white"}}/>
                </a>
            </div>
            

        </div>
    </section>
  </div>
    
  );
}

export default Contact;