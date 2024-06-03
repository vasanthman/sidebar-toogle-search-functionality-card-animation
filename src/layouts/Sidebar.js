import React, { useState } from "react";
import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo"

const navigation = [
  {
    title: "Contacts",
    href: "/contacts",
    icon: "bi bi-file-person", // Use "bi-person" icon for Contacts
  },
];

const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  // Function to handle click on the "Create" button
  const handleClick = () => {
    setIsLoading(true); // Set loading state to true
    setTimeout(() => {
      setIsLoading(false); // Reset loading state after a certain duration
    }, 2000); // Change the duration as needed
  };

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {/* Search button */}
                    {/* Create button */}
                    <NavItem className="sidenav-bg mt-4">
            <Button
              color="primary"
              onClick={handleClick}
              disabled={isLoading} // Disable the button when loading
              style={{
                width: "250px",
                height: "40px",
                top: "10px",
                gap: "15px",
                border: "1px solid transparent",
                backgroundColor: "#0BAD1B",
                opacity: "1",
                fontSize: "18px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                borderRadius: "8px",
                
              }}
            >
              {/* Show loader icon if loading, otherwise show Plus icon */}
              {isLoading ? (
                <i className="bi bi-hourglass-top mt-1 animate__animated animate__flash animate__infinite" style={{ fontSize: "26px" }}></i>
              ) : (
                <i className="bi bi-plus mt-0" style={{ fontSize: "28px"}}></i>
              )}{" "}
              Create
            </Button>
          </NavItem>

          <NavItem>
            <Link to="/search" className="nav-link py-3 white-text search-button mt-4">
              <i className="bi bi-search sidebar-icon"></i>
              <span className="ms-3 d-inline-block">Search</span>
            </Link>
          </NavItem>
       
          {/* Buttons */}
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg mt-4">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "nav-link py-3 white-text"
                    : "nav-link py-3 white-text"
                }
              >
                <i className={`${navi.icon} sidebar-icon`}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}

        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
