// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, BsPlusCircle, MdAttachMoney, FaBalanceScale, MdOutlineRecommend, IoIosAnalytics, MdDashboard } from "react-icons/all";

const Navbar: React.FC = () => {
    const navStyle = {
      backgroundColor: "#f0f0f0",
      padding: "3px",
    };
  
    const ulStyle = {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      display: "flex",
    };
  
    const linkStyle = {
      display: "inline-block",
      margin: "0 15px",
      padding: "10px 15px",
      borderRadius: "5px",
      textDecoration: "none",
      color: "#333", // Adjust the text color as needed
      transition: "background-color 0.3s",
    };
  
    return (
      <nav style={navStyle}>
        <ul style={ulStyle}>
        <li>
            <Link to="/" style={linkStyle}>
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" style={linkStyle}>
              <MdDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/newBudget" style={linkStyle}>
              <MdAttachMoney /> Add Budget
            </Link>
          </li>
          <li>
            <Link to="/newExpense" style={linkStyle}>
              <BsPlusCircle /> Add Expense
            </Link>
          </li>
          <li>
            <Link to="/Analyzer" style={linkStyle}>
              <IoIosAnalytics /> Analyzer
            </Link>
          </li>
          <li>
            <Link to="/Recommendation" style={linkStyle}>
              <MdOutlineRecommend /> Recommendation
            </Link>
          </li>
          <li>
            <Link to="/Tips_For_Balance" style={linkStyle}>
              <FaBalanceScale /> Tips For Balance
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Navbar;