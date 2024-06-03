import React, { useState } from "react";
import { Button, Collapse, Dropdown, DropdownToggle, Nav, Navbar, NavbarBrand } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const location = useLocation();

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobileMenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  // Define the heading based on the current route
  const getHeading = () => {
    switch (location.pathname) {
      case "/contacts":
        return "Contacts";
      case "/search":
        return "Search";
      default:
        return "";
    }
  };

  // Simulate loading for a certain duration
  const handleClick = () => {
    setIsLoading(true); // Set loading state to true
    setTimeout(() => {
      setIsLoading(false); // Reset loading state after a certain duration
    }, 2000); // Change the duration as needed
  };

  return (
    <Navbar style={{ backgroundColor: "#F9F9F9", borderBottom: "1px solid #E0E0E0", height: "70px" }} className="header" dark expand="md">
      <div className="d-flex align-items-center justify-content-between w-100">
        <NavbarBrand href="/" className="d-lg-none"></NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={showMobileMenu}
          style={{
            backgroundColor: "#FFFFFF", // White background color
            borderColor: "#E0E0E0", // Border color
          }}
        >
          <i className="bi bi-list" style={{ color: "#161616" }}></i>
        </Button>
        {/* Display the heading */}
        <h3 style={{ fontWeight: "bold" }}>{getHeading()}</h3>

        <div className="hstack gap-2">
          {/* Button with Plus Icon */}
          <Button
            color="primary"
            onClick={handleClick}
            disabled={isLoading} // Disable the button when loading
            style={{
              width: "111px",
              height: "40px",
              top: "10px",
              gap: "5px",
              border: "1px solid transparent",
              backgroundColor: "#0BAD1B",
              opacity: "1",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            }}
          >
            {/* Show loader icon if loading, otherwise show Plus icon */}
            {isLoading ? (
              <i className="bi bi-hourglass-top mt-1 animate__animated animate__flash animate__infinite" style={{ fontSize: "24px" }}></i>
            ) : (
              <i className="bi bi-plus mt-1" style={{ fontSize: "24px" }}></i>
            )}{" "}
            Create
          </Button>
        </div>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar></Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color=""></DropdownToggle>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
