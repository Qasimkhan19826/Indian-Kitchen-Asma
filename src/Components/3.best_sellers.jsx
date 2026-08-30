// Card Images (Dishes)
import img1 from "../assets/img1-removebg-preview.webp";
import img2 from "../assets/img2-removebg-preview.webp";
import img3 from "../assets/img3-removebg-preview.webp";
import img4 from "../assets/img4-removebg-preview.webp";
import img5 from "../assets/img5-removebg-preview.webp";
import img6 from "../assets/img6-removebg-preview.webp";
import img7 from "../assets/img7-removebg-preview.webp";
import img8 from "../assets/cimg8.webp";
import Productcart from "./8.productcart";

function Service(props) {
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <section id="services-container">
        <h1 className="h-primary center">
          {props.text[props.language].bestsellers}
        </h1>
        <div id="bestsellers">
          <div className="card"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#232a3b",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <img src={img1} alt="Chicken Biryani" />
            <h3 className="food-title center">
              {props.text[props.language].dish1}
              <div><span>{props.text[props.language].currency}</span>{props.text[props.language].price1}</div>
            </h3>

            <Productcart
              language={props.language}
              text={props.text}
              setlanguage={props.setlanguage}
              // addToCart={props.addToCart}

            />
          </div>

          <div
            className="card"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#232a3b",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <img src={img2} alt="Chicken Nahari" />
            <h3 className="food-title center">
              {props.text[props.language].dish2}
              <div><span>{props.text[props.language].currency}</span>{props.text[props.language].price2}</div>

            </h3>
            <Productcart
              language={props.language}
              text={props.text}
              setlanguage={props.setlanguage}
              // addToCart={props.addToCart}

            />
          </div>
          <div
            className="card"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#232a3b",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <img src={img3} alt=" 2 Tandoori Leg Piece" />
            <h3 className="food-title center">
              {props.text[props.language].dish3}

              <div><span>{props.text[props.language].currency}</span>{props.text[props.language].price3}</div>

            </h3>
            <Productcart
              language={props.language}
              text={props.text}
              setlanguage={props.setlanguage}
              // addToCart={props.addToCart}

            />
          </div>

          <div
            className="card"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#232a3b",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <img src={img4} alt="Paneer Biryani" />
            <h3 className="food-title center">
              {props.text[props.language].dish4}
              <div><span>{props.text[props.language].currency}</span>{props.text[props.language].price4}</div>

            </h3>
            <Productcart
              language={props.language}
              text={props.text}
              setlanguage={props.setlanguage}
              // addToCart={props.addToCart}  

            />
          </div>
          <div
            className="card"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#232a3b",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <img src={img5} alt="Tandoori Paneer Tikka" />
            <h3 className="food-title center">
              {props.text[props.language].dish5}
              <div><span>{props.text[props.language].currency}</span>{props.text[props.language].price5}</div>

            </h3>
            <Productcart
              language={props.language}
              text={props.text}
              setlanguage={props.setlanguage}
              // cartCount={cartCount+quantity}
              // addToCart={props.addToCart}

            />
          </div>
          <div
            className="card"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#232a3b",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <img src={img6} alt="Pav Bhaji" />
            <h3 className="food-title center">
              {props.text[props.language].dish6}
              <div><span>{props.text[props.language].currency}</span>{props.text[props.language].price6}</div>

            </h3>
            <Productcart
              language={props.language}
              text={props.text}
              setlanguage={props.setlanguage} 
              // addToCart={props.addToCart}

            />
          </div>
          <div
            className="card"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#232a3b",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <img src={img7} alt="Shahi Tudka" />
            <h3 className="food-title center">
              {props.text[props.language].dish7}
              <div><span>{props.text[props.language].currency}</span>{props.text[props.language].price7}</div>

            </h3>
            <Productcart
              language={props.language}
              text={props.text}
              setlanguage={props.setlanguage} 
              // addToCart={props.addToCart}

            />
          </div>
        
          <div
            className="card"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#232a3b",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <img src={img8} alt="Malai Kheer" />
            <h3 className="food-title center">
              {props.text[props.language].dish8}
              <div><span>{props.text[props.language].currency}</span>{props.text[props.language].price8}</div>
            </h3>

            <Productcart
              language={props.language}
              text={props.text}
              setlanguage={props.setlanguage}
              // addToCart={props.addToCart}

            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
