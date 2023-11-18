import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import "./styles.scss";
import Cookies from "js-cookie";

function Header() {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const companyInfo = {
    companyName: "Geeksynergy Technologies Pvt Ltd",
    address: "Sanjayanagar, Bengaluru-56",
    phone: "XXXXXXXXX09",
    email: "XXXXXX@gmail.com",
  };

  const onClickLogout = () => {
    Cookies.remove("userToken");
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  const handleCompanyInfoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <h1 onClick={() => navigate("/")}>Geeksynergy</h1>
      </div>
      <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={34} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>
      <nav className={`navigation ${mobileMenu ? "active" : ""}`}>
        <ul>
          <li>Home</li>
          <li onClick={handleCompanyInfoClick}>Company Info</li>
          <li onClick={handleCompanyInfoClick}>Contact</li>
          {mobileMenu ? <li onClick={onClickLogout}>Logout</li> : ""}
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
      <div className="search-bar">
        <button onClick={onClickLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
