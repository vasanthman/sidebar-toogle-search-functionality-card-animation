import React, { useState } from "react";
import { Button, Card, CardBody, Alert } from "reactstrap";
import { BiSearch } from "react-icons/bi"; // Import the search icon
import Sct from "../../layouts/Sct";
import Sol from "../../layouts/sol";
import Global from "../../layouts/Global";

const SearchButton = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [displayedCards, setDisplayedCards] = useState([]); // State to hold the displayed cards

  // Define your card data here (example)
  const cardData = [
    {
      id: 1,
      title: "SCT HealthCare",
      subTitle: "International Clients & Leads Western Areas",
      logo: <Sct />,
    },
    {
      id: 2,
      title: "SCT HealthCare",
      subTitle: "International Clients & Leads Middle  Western Areas",
      logo: <Sct />,
    },
    {
      id: 3,
      title: "SCT HealthCare",
      subTitle: "International Clients & Leads Southern Areas",
      logo: <Sct />,
    },
    {
      id: 4,
      title: "Solutions Champ",
      subTitle: "Web Design & Development Clients",
      logo: <Sol />,
    },
    {
      id: 5,
      title: "Solutions Champ",
      subTitle: "Local Clients & Leads Southern India",
      logo: <Sol />,
    },
    {
      id: 6,
      title: "Solutions Champ",
      subTitle: "Call Center Clients both Local and International",
      logo: <Sol />,
    },
    {
      id: 7,
      title: "Global Hospital",
      subTitle: "Entire Patient List",
      logo: <Global />,
    },
    {
      id: 8,
      title: "Global Hospital",
      subTitle: "Gynecology Patients List both Local & International",
      logo: <Global />,
    },
    // Add more card data as needed
  ];

  // Function to handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    const filteredCards = cardData.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.subTitle && card.subTitle.toLowerCase().includes(searchQuery.toLowerCase())

    );
    setDisplayedCards(filteredCards);
  };

  return (
    <div>
  <div style={{ display: "flex", justifyContent: "center", textAlign: "center", paddingLeft: "15px" }}>
  <div style={{ position: "relative", width: "100%" }}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearchClick();
          }
        }}
        style={{
          width: "100%", // Adjust width as needed
          height: "51px",
          borderRadius: "10px",
          border: " #C5C5C5",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          fontWeight: "600",
          paddingLeft: "40px", // Adjust padding as needed to accommodate the icon
          textAlign: "center", // Center the text horizontally
        }}
        placeholder="Search Contact List"
      />
      <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "10px" }}>
        <BiSearch
          style={{ color: "#0BAD1B", width: "24px", height: "24px", cursor: "pointer" }}
          onClick={handleSearchClick}
        />
      </div>
    </div>
</div>


      {/* Display filtered cards */}
      <div style={{ width: "100%", textAlign: "center", marginTop: "20px", alignItems: "center", paddingLeft: "15px" }}>
        <div className="card-container">
          {displayedCards.map((card) => (
            <Card key={card.id} style={{ borderRadius: "8px" }} className="card-animation">
              <CardBody>
                <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  {/* Logo */}
                  {card.logo}

                  {/* Title */}
                  <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", paddingTop: "10px" }}>{card.title}</div>

                  {/* Subtitle */}
                  <div className="mt-0">
                    <h5 style={{ textAlign: "left", paddingLeft: "14px" }} className="mt-2"><b>{card.subTitle}</b></h5>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchButton;
