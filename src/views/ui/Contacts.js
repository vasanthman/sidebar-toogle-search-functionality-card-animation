import React, { useState } from "react";
import Sct from "../../layouts/Sct"; // Correct import statement with 'Sct' instead of 'sct'
import Sol from "../../layouts/sol";
import Global from "../../layouts/Global";
import { Link, useLocation } from "react-router-dom";
import { MdMoreVert } from 'react-icons/md'; // Import the MdMoreVert icon


const Contacts = () => {
  
  
  return (
    <div className="container">
      <div className="grid-container">
    
   
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px",alignItems:"center",justifyItems:"center",paddingLeft:"6px" }}  className="card-animation">
      {/* Box 1 */}
      <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #E0E0E0", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }} >
        {/* Logo */}
        <Sct />

        {/* Title with three-dot menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", marginTop: "38px" }} className="mt-2">SCT HealthCare</div>
          <div style={{ marginLeft: "auto" }}>
            <MdMoreVert style={{ width: "20px", height: "20px", top: "11px", gap: "0px", opacity: "0px" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "200px", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0", boxSizing: "border-box" }} className="mt-2">
          <h5 style={{ textAlign: "left", paddingLeft:"14px" }} className="mt-4"><b>International Clients & Leads <br/>Western Areas</b></h5>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px",weight:"400", color:"#393939"}} className="mt-3">
            <i className="bi bi-person" style={{ marginRight: "8px" }}></i> {/* Contacts icon */}
            <p style={{ textAlign: "left", margin: "0" }}>1200 Contacts</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-layout-three-columns" style={{ marginRight: "8px" }}></i> {/* Columns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>5 Columns</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i> {/* Campaigns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>Used in 2 Campaigns</p>
          </div>
        </div>

        {/* Updated Info */}
        <div style={{ textAlign: "left", fontSize: "14px", paddingLeft: "14px" }} className="mt-2">
          <p style={{ color: "#6F6F6F" }}>
            Updated by: John A
            <br />
            Updated on: 23 Dec, 2023
          </p>
        </div>
      </div>




      {/* Box 2 */}
      <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #E0E0E0", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>
        {/* Logo */}
        <Sct />

        {/* Title with three-dot menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", marginTop: "38px" }} className="mt-2">SCT HealthCare</div>
          <div style={{ marginLeft: "auto" }}>
            <MdMoreVert style={{ width: "20px", height: "20px", top: "11px", gap: "0px", opacity: "0px" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "200px", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0", boxSizing: "border-box" }} className="mt-2">
          <h5 style={{ textAlign: "center" }} className="mt-4"><b>International Clients & Leads Middle East Areas</b></h5>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-3">
            <i className="bi bi-person" style={{ marginRight: "8px" }}></i> {/* Contacts icon */}
            <p style={{ textAlign: "left", margin: "0" }}>580 Contacts</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-layout-three-columns" style={{ marginRight: "8px" }}></i> {/* Columns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>5 Columns</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i> {/* Campaigns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>Used in 2 Campaigns</p>
          </div>
        </div>

        {/* Updated Info */}
        <div style={{ textAlign: "left", fontSize: "14px", paddingLeft: "14px" }} className="mt-2">
          <p style={{ color: "#6F6F6F" }}>
            Updated by: Vasanth A
            <br />
            Updated on: 23 Dec, 2023
          </p>
        </div>
      </div>


      {/* Box 3 */}
      <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #E0E0E0", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>
        {/* Logo */}
        <Sct />

        {/* Title with three-dot menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", marginTop: "38px" }} className="mt-2">SCT HealthCare</div>
          <div style={{ marginLeft: "auto" }}>
            <MdMoreVert style={{ width: "20px", height: "20px", top: "11px", gap: "0px", opacity: "0px" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "200px", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0", boxSizing: "border-box" }} className="mt-2">
          <h5 style={{ textAlign: "left" , paddingLeft:"14px"}} className="mt-4"><b>Local Clients & Leads <br/>Southern India</b></h5>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-3">
            <i className="bi bi-person" style={{ marginRight: "8px" }}></i> {/* Contacts icon */}
            <p style={{ textAlign: "left", margin: "0" }}>250 Contacts</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-layout-three-columns" style={{ marginRight: "8px" }}></i> {/* Columns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>5 Columns</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i> {/* Campaigns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>Used in 2 Campaigns</p>
          </div>
        </div>

        {/* Updated Info */}
        <div style={{ textAlign: "left", fontSize: "14px", paddingLeft: "14px" }} className="mt-2">
          <p style={{ color: "#6F6F6F" }}>
            Updated by: Subash B
            <br />
            Updated on: 23 Dec, 2023
          </p>
        </div>
      </div>


      {/* Box 4 */}
      <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #E0E0E0", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>
        {/* Logo */}
        <Sol />

        {/* Title with three-dot menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", marginTop: "38px" }} className="mt-2">SCT HealthCare</div>
          <div style={{ marginLeft: "auto" }}>
            <MdMoreVert style={{ width: "20px", height: "20px", top: "11px", gap: "0px", opacity: "0px" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "200px", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0", boxSizing: "border-box" }} className="mt-2">
          <h5 style={{ textAlign: "center" }} className="mt-4"><b>Web Design & Development Clients</b></h5>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-3">
            <i className="bi bi-person" style={{ marginRight: "8px" }}></i> {/* Contacts icon */}
            <p style={{ textAlign: "left", margin: "0" }}>580 Contacts</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-layout-three-columns" style={{ marginRight: "8px" }}></i> {/* Columns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>5 Columns</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i> {/* Campaigns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>Used in 2 Campaigns</p>
          </div>
        </div>

        {/* Updated Info */}
        <div style={{ textAlign: "left", fontSize: "14px", paddingLeft: "14px" }} className="mt-2">
          <p style={{ color: "#6F6F6F" }}>
            Updated by: Abel A
            <br />
            Updated on: 23 Dec, 2023
          </p>
        </div>



      </div>

      {/* Box 5 */}
      <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #E0E0E0", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>
        {/* Logo */}
        <Sol />

        {/* Title with three-dot menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", marginTop: "38px" }} className="mt-2">SolutionsChamps</div>
          <div style={{ marginLeft: "auto" }}>
            <MdMoreVert style={{ width: "20px", height: "20px", top: "11px", gap: "0px", opacity: "0px" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "200px", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0", boxSizing: "border-box" }} className="mt-2">
          <h5 style={{ textAlign: "left", paddingLeft:"14px"}} className="mt-4"><b>Local Clients & Leads <br/>Southern India</b></h5>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-3">
            <i className="bi bi-person" style={{ marginRight: "8px" }}></i> {/* Contacts icon */}
            <p style={{ textAlign: "left", margin: "0" }}>580 Contacts</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-layout-three-columns" style={{ marginRight: "8px" }}></i> {/* Columns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>5 Columns</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i> {/* Campaigns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>Used in 2 Campaigns</p>
          </div>
        </div>

        {/* Updated Info */}
        <div style={{ textAlign: "left", fontSize: "14px", paddingLeft: "14px" }} className="mt-2">
          <p style={{ color: "#6F6F6F" }}>
            Updated by: Abishek A
            <br />
            Updated on: 20 Dec, 2023
          </p>
        </div>



      </div>

      {/* Box 6 */}
      <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #E0E0E0", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>
        {/* Logo */}
        <Sol />

        {/* Title with three-dot menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", marginTop: "38px" }} className="mt-2">SolutionsChamps</div>
          <div style={{ marginLeft: "auto" }}>
            <MdMoreVert style={{ width: "20px", height: "20px", top: "11px", gap: "0px", opacity: "0px" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "200px", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0", boxSizing: "border-box" }} className="mt-2">
          <h5 style={{ textAlign: "left", paddingLeft:"14px" }} className="mt-4"><b>Call Center Clients both Local and International</b></h5>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-3">
            <i className="bi bi-person" style={{ marginRight: "8px" }}></i> {/* Contacts icon */}
            <p style={{ textAlign: "left", margin: "0" }}>180 Contacts</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-layout-three-columns" style={{ marginRight: "8px" }}></i> {/* Columns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>5 Columns</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i> {/* Campaigns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>Used in 2 Campaigns</p>
          </div>
        </div>

        {/* Updated Info */}
        <div style={{ textAlign: "left", fontSize: "14px", paddingLeft: "14px" }} className="mt-2">
          <p style={{ color: "#6F6F6F" }}>
            Updated by: Abishek A
            <br />
            Updated on: 20 Dec, 2023
          </p>
        </div>



      </div>

      {/* Box 7 */}

      <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #E0E0E0", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>
        {/* Logo */}
        <Global />

        {/* Title with three-dot menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", marginTop: "38px" }} className="mt-2">SolutionsChamps</div>
          <div style={{ marginLeft: "auto" }}>
            <MdMoreVert style={{ width: "20px", height: "20px", top: "11px", gap: "0px", opacity: "0px" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "200px", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0", boxSizing: "border-box" }} className="mt-2">
          <h5 style={{ textAlign: "left", paddingLeft: "14px" }} className="mt-4"><b>Entire Patient List</b></h5>
         
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-3">
            <i className="bi bi-person" style={{ marginRight: "8px" }}></i> {/* Contacts icon */}
            <p style={{ textAlign: "left", margin: "0" }}>580 Contacts</p>
          </div>
         
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-layout-three-columns" style={{ marginRight: "8px" }}></i> {/* Columns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>5 Columns</p>
          </div>
         
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i> {/* Campaigns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>Used in 2 Campaigns</p>
          </div>
        </div>

        {/* Updated Info */}
        <div style={{ textAlign: "left", fontSize: "14px", paddingLeft: "14px" }} className="mt-2">
          <p style={{ color: "#6F6F6F" }}>
            Updated by: Ashok A
            <br />
            Updated on: 20 Dec, 2023
          </p>
        </div>


        
      </div>

      {/* Box 8 */}
      <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #E0E0E0", position: "relative", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>
        {/* Logo */}
        <Global />

        {/* Title with three-dot menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "left", fontSize: "16px", color: "#393939", paddingLeft: "50px", marginTop: "38px" }} className="mt-2">SolutionsChamps</div>
          <div style={{ marginLeft: "auto" }}>
            <MdMoreVert style={{ width: "20px", height: "20px", top: "11px", gap: "0px", opacity: "0px" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "200px", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0", boxSizing: "border-box" }} className="mt-2">
          <h5 style={{ textAlign: "left", paddingLeft:"14px" }} className="mt-4"><b>Gynecology Patients List both<br/>Local & International</b></h5>
         
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-3">
            <i className="bi bi-person" style={{ marginRight: "8px" }}></i> {/* Contacts icon */}
            <p style={{ textAlign: "left", margin: "0" }}>380 Contacts</p>
          </div>
         
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-layout-three-columns" style={{ marginRight: "8px" }}></i> {/* Columns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>5 Columns</p>
          </div>
         
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "14px" }} className="mt-2">
            <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i> {/* Campaigns icon */}
            <p style={{ textAlign: "left", margin: "0" }}>Used in 2 Campaigns</p>
          </div>
        </div>

        {/* Updated Info */}
        <div style={{ textAlign: "left", fontSize: "14px", paddingLeft: "14px" }} className="mt-2">
          <p style={{ color: "#6F6F6F" }}>
            Updated by: Aslam C
            <br />
            Updated on: 20 Dec, 2023
          </p>
        </div>


        
      </div>

    </div>
    </div>
    </div>



  );
};





export default Contacts;
