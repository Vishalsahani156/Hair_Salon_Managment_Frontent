import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import addDemo from './component/script.js';
// This import  favicon logo from the react icon 
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
function App() {
  // this is script.js function call 
  useEffect(() => {
    addDemo(); // Call the function
  }, []);
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [dateTime, setDateTime] = useState('');
  // const [bodyMessage, setBodyMessage] = useState('');
  // const [register, setRegister] = useState([null]); // ✅ Don't comment this out

  // useEffect(() => {
  //   axios.post('api/v1/users/register', {
  //     fullName,
  //     email,
  //     phoneNumber,
  //     dateTime,
  //     bodyMessage
  //   })
  //     .then((response) => {
  //       setRegister(response.data); // ✅ Corrected
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [bodyMessage, setBodyMessage] = useState('');
  const [register, setRegister] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/v1/users/register', {
      fullName,
      email,
      phoneNumber,
      dateTime,
      bodyMessage
    })
    .then((response) => {
      setRegister(response.data);
      console.log('Registered:', response.data);
    })
    .catch((error) => {
      console.error('Registration error:', error.response?.data || error.message);
    });
  };


  return (

    <div id="top">
      {/* HEADER */}
      <header className="header">
        <div className="header-top">
          <div className="container">
            <ul className="header-top-list">
              <li className="header-top-item">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                <p className="item-title">Call Us :</p>
                <a href="tel:01234567895" className="item-link">+918112585620</a>
              </li>
              <li className="header-top-item">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                <p className="item-title">Opening Hour :</p>
                <p className="item-text">Sunday - Friday, 08 am - 10 pm</p>
              </li>
              <li>
                <ul className="social-list">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.link/onlyy8https://wa.link/onlyy8"
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>

              </li>
            </ul>
          </div>
        </div>
        <div className="header-bottom" data-header>
          <div className="container">
            <a href="#" className="logo">
              Royal <span className="span">Hair Salon</span>
            </a>
            <nav className="navbar container" data-navbar>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a href="#home" className="navbar-link" data-nav-link>Home</a>
                </li>
                <li className="navbar-item">
                  <a href="#services" className="navbar-link" data-nav-link>Services</a>
                </li>
                <li className="navbar-item">
                  <a href="#pricing" className="navbar-link" data-nav-link>Pricing</a>
                </li>
                <li className="navbar-item">
                  <a href="#gallery" className="navbar-link" data-nav-link>Gallery</a>
                </li>
                <li className="navbar-item">
                  <a href="#appointment" className="navbar-link" data-nav-link>Appointment</a>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link" data-nav-link>Contact</a>
                </li>
              </ul>
            </nav>
            <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>

            {/* <a href="#" className="btn has-before"> */}
            {/* <span className="span">Appointment</span> */}
            {/* <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon> */}
            {/* </a> */}

            <a href="#login" class="btn has-before">
              <span className="span">Login</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
            <a href="#login" className="btn has-before">
              <span className="span">Register</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <article>
          {/* HERO SECTION */}
          <section className="section hero has-before has-bg-image" id="home" aria-label="home" style={{ backgroundImage: "url('./images/appoin-banner-1.jpg')" }}>
            <div className="container">
              <h1 className="h1 hero-title">Barbers & Hair Cutting</h1>
              <p className="hero-text"></p>
              <a href="#" className="btn has-before">
                <span className="span">Explore Our Services</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section className="section service" id="services" aria-label="services">
            <div className="container">
              <h2 className="h2 section-title text-center">Service We Provide</h2>
              <p className="section-text text-center">
                Haircuts, coloring, styling, treatments, and more — all tailored to bring out your best look.
              </p>
              <ul className="grid-list">
                {[
                  {
                    title: "Hair Cutting Style", icon: "flaticon-salon", text: "From classic cuts to trendy styles, we tailor each haircut to suit your look and lifestyle Our expert stylists ensure precision and style all in just 30 to 45 minutes   all in just 30 to 45 minutes . "
                  },
                  { title: "Hair Washing", icon: "flaticon-shampoo", text: "Enjoy a refreshing cleanse that leaves your hair soft, shiny, and healthy. Includes gentle shampooing and conditioning — completed in just 10 to 15 minutes." },
                  { title: "Body Treatments", icon: "flaticon-hot-stone", text: "Rejuvenate your skin with our relaxing body treatments. Exfoliation, hydration, and deepnourishment — all in 45 to 60 minutes of pure self-care." },
                  { title: "Beauty & Spa", icon: "flaticon-treatment", text: "Indulge in a world of relaxation and glow. From facials to massages, we offer soothingbeauty and spa services designed to refresh your body and mind — all in 30 to 90 minutes,depending on your chosen treatment." },
                  { title: "Stylist Shaving", icon: "flaticon-shaving-razor", text: "Experience precision shaving with a modern touch. Clean, sharp, and refreshing — done byexpert hands in just 15 to 20 minutes." },
                  { title: "Multi Hair Colors", icon: "flaticon-hair-dye", text: "Add depth, dimension, and personality with multi-tone hair coloring. From bold blends tosubtle highlights — beautifully done in 60 to 90 minutes." },
                ].map((service, index) => (
                  <li key={index}>
                    <div className="service-card">
                      <div className="card-icon">
                        <i className={service.icon}></i>
                      </div>
                      <h3 className="h3">
                        <a href="#" className="card-title">{service.title}</a>
                      </h3>
                      <p className="card-text">{service.text}</p>
                      <a href="#" className="card-btn" aria-label="more">
                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section className="section pricing has-bg-image has-before" id="pricing" aria-label="pricing" style={{ backgroundImage: "url('images/pricing-bg.jpg')" }}>
            <div className="container">
              <h2 className="h2 section-title text-center">Awesome Pricing Plan</h2>
              <p className="section-text text-center">
                Quality services at prices you'll love! Choose from flexible packages tailored to fit your style
                and budget — beauty and care without the compromise.
              </p>
              <div className="pricing-tab-container">
                <ul className="tab-filter">
                  {[
                    { text: "All Pricing", filter: "all", icon: "flaticon-beauty-salon" },
                    { text: "Beauty & Spa", filter: "beauty-spa", icon: "flaticon-relax" },
                    { text: "Body Treatments", filter: "body-treatments", icon: "flaticon-massage" },
                    { text: "Face Washing", filter: "face-washing", icon: "flaticon-spa" },
                    { text: "Meditations", filter: "meditations", icon: "flaticon-yoga" },
                    { text: "Shaving", filter: "shaving", icon: "flaticon-razor-blade" },
                  ].map((tab, index) => (
                    <li key={index}>
                      <button className={`filter-btn ${index === 0 ? 'active' : ''}`} data-filter-btn={tab.filter}>
                        <div className="btn-icon">
                          <i className={tab.icon} aria-hidden="true"></i>
                        </div>
                        <p className="btn-text">{tab.text}</p>
                      </button>
                    </li>
                  ))}
                </ul>
                <ul className="grid-list">
                  {[
                    { title: "Hair Cutting & Fitting", text: "Clean & simple 30-40 minutes", price: "₹540", filter: "shaving", imgSrc: "./images/pricing-1.jpg" },
                    { title: "Shaving & Facial", text: "Clean & simple 30-40 minutes", price: "₹560", filter: "shaving", imgSrc: "./images/pricing-2.jpg" },
                    { title: "Hair Color & Wash", text: "Clean & simple 30-40 minutes", price: "₹350", filter: "face-washing", imgSrc: "./images/pricing-3.jpg" },
                    { title: "Body Massage", text: "Clean & simple 30-40 minutes", price: "₹400", filter: "body-treatments", imgSrc: "images/pricing-4.jpg" },
                    { title: "Beauty & Spa", text: "Clean & simple 30-40 minutes", price: "₹1000", filter: "beauty-spa", imgSrc: "./images/pricing-5.jpg" },
                    { title: "Facial & Face Wash", text: "Clean & simple 30-40 minutes", price: "₹630", filter: "face-washing", imgSrc: "./images/pricing-6.jpg" },
                    { title: "Backbone Massage", text: "Clean & simple 30-40 minutes", price: "₹430", filter: "body-treatments", imgSrc: "./images/pricing-7.jpg" },
                    { title: "Meditation & Massage", text: "Clean & simple 30-40 minutes", price: "₹1100", filter: "meditations", imgSrc: "./images/pricing-8.jpg" },
                  ].map((pricing, index) => (
                    <li key={index} data-filter={pricing.filter}>
                      <div className="pricing-card">
                        <figure className="card-banner img-holder" style={{ '--width': 90, '--height': 90 }}>
                          <img src={pricing.imgSrc} width="90" height="90" alt={pricing.title} className="img-cover" />
                        </figure>
                        <div className="wrapper">
                          <h3 className="h3 card-title">{pricing.title}</h3>
                          <p className="card-text">{pricing.text}</p>
                          <data className="card-price" value="89">{pricing.price}</data>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* GALLERY SECTION */}
          <section className="section gallery" id="gallery" aria-label="photo gallery">
            <div className="container">
              <div className="title-wrapper">
                <div>
                  <h2 className="h2 section-title">Latest Photo Gallery</h2>
                  <p className="section-text">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                  </p>
                </div>
                <a href="#" className="btn has-before">
                  <span className="span">Explore More Gallery</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <ul className="grid-list">
                {[
                  { imgSrc: "./images/gallery-1.jpg", title: "Hair Cutting", text: "Barbers & Salon Services" },
                  { imgSrc: "./images/gallery-2.jpg", title: "Hair Cutting", text: "Barbers & Salon Services" },
                  { imgSrc: "./images/gallery-3.jpg", title: "Hair Cutting", text: "Barbers & Salon Services" },
                  { imgSrc: "./images/gallery-4.jpg", title: "Hair Cutting", text: "Barbers & Salon Services" },
                ].map((gallery, index) => (
                  <li key={index}>
                    <div className="gallery-card">
                      <figure className="card-banner img-holder" style={{ '--width': 422, '--height': 550 }}>
                        <img src={gallery.imgSrc} width="422" height="550" loading="lazy" alt={gallery.title} className="img-cover" />
                      </figure>
                      <div className="card-content">
                        <h3 className="h3 card-title">{gallery.title}</h3>
                        <p className="card-text">{gallery.text}</p>
                        <a href="#" className="card-btn" aria-label="Read more">
                          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* APPOINTMENT SECTION */}
          <section className="section appoin" id="appointment" aria-label="appointment">
            <div className="container">
              <div className="appoin-card">

                {/* Left Banner */}
                <figure className="card-banner img-holder" style={{ '--width': 200, '--height': 300 }}>
                  <img src="https://www.shutterstock.com/image-photo/various-hair-dresser-tools-on-600nw-1163342353.jpg"
                    width="250"
                    height="774"
                    loading="lazy"
                    alt="Appointment Banner Left"
                    className="img-cover"
                  />
                </figure>

                {/* Form Content */}
                <div className="card-content">
                  <h2 className="h2 section-title">Book Your Appointment</h2>
                  <p className="section-text">
                    Schedule your appointment online—choose your service, date, and location.
                  </p>

                  <form action="" className="appoin-form">
                    <div className="input-row">
                      <input type="text" name="name" placeholder="Full Name" required className="input-field" />
                      <input type="email" name="email_address" placeholder="Email Address" required className="input-field" />
                    </div>

                    <div className="input-row">
                      <input type="text" name="phone" placeholder="Phone Number" required className="input-field" />
                      <select name="location" required className="input-field">
                        <option value="">Select Location</option>
                        <option value="Jagatpura">Jagatpura</option>
                        <option value="Civil Line">Civil Line</option>
                        <option value="Vaishali">Vaishali</option>
                        <option value="Mansarovar">Mansarovar</option>
                      </select>
                    </div>

                    <div className="input-row">
                      <input type="date" name="date" required className="input-field" />
                    </div>

                    <div className="dropdown-wrapper">
                      <div className="input-field cen" onClick={() => toggleCheckboxes()} style={{ cursor: 'pointer' }}>
                        Select Services ▼
                      </div>
                      <div className="checkbox-dropdown" id="checkboxList">
                        {['Beauty & spa', 'Body massage', 'Shaving & Facial', 'Hair Color'].map(service => (
                          <label key={service}>
                            <input type="checkbox" value={service} onChange={() => updateSelected()} /> {service}
                          </label>
                        ))}
                      </div>
                      <div id="selectedServices" className="selected-services-display" />
                    </div>

                    <textarea name="message" placeholder="Write a message..." required className="input-field textarea"></textarea>

                    <button type="submit" className="form-btn">
                      <span className="span">Book Now</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </button>
                  </form>
                </div>

                {/* Right Banner */}
                <figure className="card-banner img-holder" style={{ '--width': 200, '--height': 300 }}>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/017/457/394/small/simple-background-with-gradient-shape-green-vector.jpg"
                    width="250"
                    height="774"
                    loading="lazy"
                    alt="Appointment Banner Right"
                    className="img-cover"
                  />
                </figure>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="footer has-bg-image" style={{ backgroundImage: "url('./images/footer-bg.png')" }}>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                Royal <span className="span">Hair Salon</span>
              </a>
              <form action="" className="input-wrapper">
                <input type="email" name="email_address" placeholder="Enter Your Email" required className="email-field" />
                <button type="submit" className="btn has-before">
                  <span className="span">Subscribe Now</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </button>
              </form>
            </div>
            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Quick Links</p>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Our Services</a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Meet Our Team</a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Our Portfolio</a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Need A Career?</a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">News & Blog</a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Services</p>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Hair Cutting</a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Shaving & Design</a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Hair Colors</a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Beauty & Spa</a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before">Body Massages</a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Recent News</p>
                </li>
                {[
                  { imgSrc: "./images/footer-blog-1.jpg", title: "The beginners guide to Henna Brows in Brisbane", date: "25 February 2024" },
                  { imgSrc: "./images/footer-blog-2.jpg", title: "How do I get rid of unwanted hair on my face?", date: "25 March 2024" },
                ].map((blog, index) => (
                  <li key={index}>
                    <div className="blog-card">
                      <figure className="card-banner img-holder" style={{ '--width': 70, '--height': 75 }}>
                        <img src={blog.imgSrc} width="70" height="75" loading="lazy" alt={blog.title} className="img-cover" />
                      </figure>
                      <div className="card-content">
                        <h3>
                          <a href="#" className="card-title">{blog.title}</a>
                        </h3>
                        <div className="card-date">
                          <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                          <time dateTime="2022-08-25">{blog.date}</time>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Contact Us</p>
                </li>
                <li className="footer-list-item">
                  <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                  <address className="contact-link">NIMS University Jaipur (Raj.)</address>
                </li>
                <li className="footer-list-item">
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                  <a href="tel:+0123456789" className="contact-link">+8112585620</a>
                </li>
                <li className="footer-list-item">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                  <span className="contact-link">Sun - Friday, 08 am - 10 pm</span>
                </li>
                <li className="footer-list-item">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                  <a href="mailto:support@gmail.com" className="contact-link">Royal@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2024 <a href="#" className="copyright-link">Ramesh kumar</a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </div>



  )
}
export default App
