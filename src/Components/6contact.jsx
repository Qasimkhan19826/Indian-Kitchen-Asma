import Youtube from '../assets/YoutubeL3.png';
import Whatsapp from '../assets/WhatsappLogo.png';
import Gmail from '../assets/GmailLogo.png';



function Contact(props) {

  return(
  <div > 
<section id="client-section">
        <h1 className="h-primary center" style={{color:props.mode==='dark'?'white':'black'}}>{props.text[props.language].contact}</h1>
        <div id="clients">
            
            <div className="client-items">
                <a href="https://wa.me/917874867343" target='_blank'> 
                <img src={Whatsapp} alt="Whatsapp" />
                </a>
            </div>
            <div className="client-items">
                <a href='https://youtube.com/@indiankitchen-fe7gk?si=ma8Qb-CoiFnFROsW' target='_blank'> 
                <img src={Youtube} alt=" Youtube" />
                </a>
            </div>
            <div className="client-items">
                <a id="gmail" href="mailto:bubblykhan7890@gmail.com" target='_blank'> 
                <img src={Gmail} alt="Gmail" />
                </a>
            </div>
            
            
        </div>
    </section>
  </div>
    
  );
}

export default Contact;