import myimage from "./assets/Logo.png";
import React from 'react';
import "../src/App.css";

const Navbar = () => {
  const navbarStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(17, 25, 40, 0.75)",
    borderRadius: "0px", // Set to 0px to match the card's border-radius
    border: "none", // Remove the border
  };

  return (
    <nav style={navbarStyles} className="p-5 flex justify-between items-center mainNav">
      <div className="flex items-center">
        {/* Logo (You can replace the src and alt with your own logo) */}
        <img src={myimage} alt="Logo" className="w-auto h-12 mr-2" />
      </div>
      <button className="text-white p-5 rounded-md focus:outline-none bookTicket">
        Book Tickets
      </button>
    </nav>
  );
};

export default Navbar;
