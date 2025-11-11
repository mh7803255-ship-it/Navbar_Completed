
import React, { useEffect } from "react";
import './NavbarStyle.css'; 

const JewelleryNavbar = () => {
  useEffect(() => {
    const defaultConfig = {
      shop_name: "Radiant Jewels",
      tagline: "Timeless Elegance Since 1990",
      home_text: "Home",
      collections_text: "Collections",
      services_text: "Services",
      about_text: "About",
      contact_text: "Contact",
      background_color: "#16213e", 
      navbar_color: "#0f3460",    
      accent_color: "#ffd700",    
      text_color: "#e8e8e8",       
      font_family: "Playfair Display",
    };

    async function onConfigChange(config) {
      const shopName = config.shop_name || defaultConfig.shop_name;
      const tagline = config.tagline || defaultConfig.tagline;

      const shopNameElement = document.getElementById("shop-name");
      const taglineElement = document.getElementById("tagline");

      if (shopNameElement) shopNameElement.textContent = shopName;
      if (taglineElement) taglineElement.textContent = tagline;
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
      });
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <div className="logo">💎</div>
            <div className="brand-text">
              <div className="brand-name" id="shop-name">
                Radiant Jewels
              </div>
              <div className="brand-tagline" id="tagline">
                Timeless Elegance Since 1990
              </div>
            </div>
          </div>

          <ul className="nav-menu">
            <li className="nav-item"><a href="#Dashboard" className="nav-link" id="home-link">Dashboard</a></li>
            
            {/* Collections Dropdown */}
            <li className="nav-item">
              <a href="#collections" className="nav-link" id="collections-link">
                Collections <span className="dropdown-arrow">▼</span>
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-header">Precious Metals</div>
                <a href="#gold" className="dropdown-item"><span className="dropdown-icon">✨</span> Gold Collection</a>
                <a href="#silver" className="dropdown-item"><span className="dropdown-icon">🌙</span> Silver Collection</a>
                <a href="#platinum" className="dropdown-item"><span className="dropdown-icon">💫</span> Platinum Collection</a>
                <a href="#Ring" className="dropdown-item"><span className="dropdown-icon">💍</span> Ring Collection</a>
                <a href="#Luxirious Neclace" className="dropdown-item"><span className="dropdown-icon">💫</span> Necklace Collection</a>

                <div className="dropdown-header">Gemstones</div>
                <a href="#diamonds" className="dropdown-item"><span className="dropdown-icon">💎</span> Diamond Jewellery</a>
              </div>
            </li>
            
            {/* Services Dropdown */}
            <li className="nav-item">
              <a href="#services" className="nav-link" id="services-link">
                Services <span className="dropdown-arrow">▼</span>
              </a>
              <div className="dropdown-menu">
                <a href="#custom-design" className="dropdown-item">🎨 Custom Design</a>
                <a href="#repair" className="dropdown-item">🔧 Repair & Restoration</a>
                <a href="#Gold Pawning" className="dropdown-item">✨Gold Pawning</a>
                <a href="#Silver Pawning" className="dropdown-item">💎Silver Pawning</a>


              </div>
            </li>
                <li className="nav-item"><a href="#contact" className="nav-link" id="contact-link">Contact</a></li>
            
            {/* CTA Button */}
            <li className="nav-item"><a href="#book" className="cta-button">Book Appointment</a></li>
          </ul>
        </div>
      </nav>
      
      {/* Main Content Area */}
      <div className="demo-content">
        <h1>Welcome to Our Jewellery Collection</h1>
        <p>Explore our exquisite range of handcrafted jewellery. From timeless gold pieces to stunning diamond collections, we offer the finest craftsmanship and exceptional service. Hover over the navigation menu to discover our complete range of collections and services.</p>
      </div>
    </>
  );
};

export default JewelleryNavbar;