import React, { useState } from "react";
import "./index.css"; 
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const companyInfo = {
    companyName: "Geeksynergy Technologies Pvt Ltd",
    address: "Sanjayanagar, Bengaluru-56",
    phone: "XXXXXXXXX09",
    email: "XXXXXX@gmail.com",
  };

  const handleCompanyInfoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="nav">
      <ul className="ul">
        <Link to={"/"}>
          <li className="li">Home</li>
        </Link>
        <li onClick={handleCompanyInfoClick}>Company Info</li>
      </ul>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Company Info</h2>
            <p>Company: {companyInfo.companyName}</p>
            <p>Address: {companyInfo.address}</p>
            <p>Phone: {companyInfo.phone}</p>
            <p>Email: {companyInfo.email}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;
