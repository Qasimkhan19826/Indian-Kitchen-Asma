import { useState, useEffect } from 'react';
import Logo from '../assets/Indian_Kitchen_Logo.webp';

// React lucide package provides you entity that you can use in the navbar cart ,Dark Mode ,Light Mode
import { ShoppingCart, Sun, Moon } from 'lucide-react';

import { useCart } from "../9.CartContext.jsx";


function Navbar(props) {

  // Getting total quantity from Global Cart Context
  const { totalQuantity } = useCart();

  // Creating our proper (Responsive Mobile Navbar)
  const [menuopen, setMenuOpen] = useState(false);

  // Using useEffect to block scrolling when the drawer is open else scrolling is allowed
  useEffect(() => {
    document.body.style.overflow = menuopen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuopen]);


  return (
    <>

      <nav
        id="navbar"
        style={{
          backgroundColor: props.mode === 'light' ? 'silver' : '#061625'
        }}
      >

        <div id="logo">
          <img
            className="image"
            src={Logo}
            alt="Indian Kitchen Asma "
          />
        </div>


        {/* ============================= */}
        {/* PHONE NAVBAR BUTTONS */}
        {/* ============================= */}

        <div className="mobile-actions">

          {/* Cart button for phone */}
          <button className="btn6 cart-icon">

            <ShoppingCart
                size={28}
                strokeWidth={2}
            />

            {totalQuantity > 0 && (
                <span className="cart-badge">
                    {totalQuantity}
                </span>
            )}

          </button>


          {/* Dark / Light button for phone */}
          <button
            className="btn3 mobile-mode"
            onClick={props.toggleMode}
          >

            {props.mode === 'light'
              ? <Sun size={32} strokeWidth={1} />
              : <Moon size={32} strokeWidth={1} />
            }

          </button>

        </div>


        {/* ============================= */}
        {/* DESKTOP NAVBAR */}
        {/* ============================= */}

        <ul className='desktop-menu'>

          <li className="item">
            <a href="#home">
              {props.text[props.language].home}
            </a>
          </li>

          <li className="item">
            <a href="#services">
              {props.text[props.language].services}
            </a>
          </li>

          <li className="item">
            <a href="#contact">
              {props.text[props.language].contact}
            </a>
          </li>

          <li className="item">
            <a href="#signin">
              {props.text[props.language].signin}
            </a>
          </li>


          {/* Desktop Cart Button */}
          <li>

             <button className="btn6 cart-icon">

            <ShoppingCart
                size={28}
                strokeWidth={2}
            />

            {totalQuantity > 0 && (
                <span className="cart-badge">
                    {totalQuantity}
                </span>
            )}

          </button>


          </li>

        </ul>


        {/* ============================= */}
        {/* DESKTOP RIGHT SIDE */}
        {/* ============================= */}

        <div id="left" className='desktop-menu'>

          {/* 
          <button className="btn4">
            {props.text[props.language].login}
          </button>

          <button className="btn4">
            {props.text[props.language].signin}
          </button>
          */}


          {/* Language Selection */}
          <select
            className='btn4'
            value={props.language}
            onChange={(e) => props.setLanguage(e.target.value)}
          >

            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="gu">ગુજરાતી</option>
            <option value="ur">اردو</option>
            <option value="ch">中文</option>

          </select>


          {/* Dark / Light Mode */}
          <button
            className="btn3"
            onClick={props.toggleMode}
          >

            {props.mode === 'light'
              ? <Sun size={32} strokeWidth={1} />
              : <Moon size={32} strokeWidth={1} />
            }

          </button>

        </div>


        {/* ============================= */}
        {/* PHONE MENU BUTTON */}
        {/* ============================= */}

        <button
          className='menu-button'
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>


        {/* ============================= */}
        {/* RIGHT SIDE MOBILE MENU */}
        {/* ============================= */}

        <div
          className={`mobile-menu ${menuopen ? "open" : ""}`}
          style={{
            backgroundColor:
              props.mode === 'light' ? 'white' : '#061625'
          }}
        >

          {/* Close Button */}
          <button
            className="close-button"
            style={{
              color:
                props.mode === 'light' ? 'black' : 'white'
            }}
            onClick={() => setMenuOpen(false)}
          >
            x
          </button>


          {/* Home */}
          <a
            href="#home"
            style={{
              color:
                props.mode === 'light' ? 'black' : 'white'
            }}
          >
            {props.text[props.language].home}
          </a>


          {/* Services */}
          <a
            href="#services"
            style={{
              color:
                props.mode === 'light' ? 'black' : 'white'
            }}
          >
            {props.text[props.language].services}
          </a>


          {/* Contact */}
          <a
            href="#contact"
            style={{
              color:
                props.mode === 'light' ? 'black' : 'white'
            }}
          >
            {props.text[props.language].contact}
          </a>


          {/* Signin */}
          <a
            href="#contact"
            style={{
              color:
                props.mode === 'light' ? 'black' : 'white'
            }}
          >
            {props.text[props.language].signin}
          </a>


          {/* 
          <button className="btn4">
            {props.text[props.language].login}
          </button>

          <button className="btn4">
            {props.text[props.language].signin}
          </button>
          */}


          {/* Language Selection */}
          <select
            className='btn4'
            value={props.language}
            onChange={(e) => props.setLanguage(e.target.value)}
          >

            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="gu">ગુજરાતી</option>
            <option value="ch">中文</option>
            <option value="ur">اردو</option>

          </select>

        </div>

      </nav>

    </>
  );
}

export default Navbar;