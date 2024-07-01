import React, { useContext } from "react";
import { Text, ThemeIcon } from "@mantine/core";
import PageContainer from "../layout/PageContainer";
import CategoriesContext from "../store/CategoriesContext";
import { FaFileAlt,FaMoneyBill,FaChartLine,FaWallet } from "react-icons/all";

const HomePage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");
  const expenses = getTotalAmount("Expenses");

  return (
    <PageContainer>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "-50px" }}
      >
        <div>
          <Text
            size={70}
            weight={1000}
            mb={20}
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "Helvetica, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "600px",
            })}
          >
            Balance your Financial situation
          </Text>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              style={{
                width: "150px",
                height: "60px",
                fontSize: "20px",
                borderRadius: "5px",
                background: "#9370DB",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = "/Dashboard")}
            >
              Get Started
            </button>
          </div>
        </div>
        <img
          src="../public/123.png"
          alt="Katherine Johnson"
          height="700"
          style={{ marginLeft: "20px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "100px",
          marginLeft: "70px",
          marginRight: "70px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "300px",
            background: "#ADD8E6",
            color: "#2f2f2f",
            borderRadius: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <FaMoneyBill style={{ fontSize: "4rem", marginTop: "60px" }} />
          <Text
            size={20}
            weight={700}
            mb={20}
            align="center"
            sx={(theme) => ({
              color: "#2f2f2f",
              fontFamily: "sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
            })}
          >
            Expense Tracking
          </Text>
        </div>

        <div
          style={{
            width: "300px",
            height: "300px",
            background: "#ADD8E6",
            color: "#2f2f2f",
            borderRadius: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginLeft: "10px",
          }}
        >
          <FaChartLine style={{ fontSize: "4rem", marginTop: "60px" }} />
          <Text
            size={20}
            weight={700}
            mb={20}
            align="center"
            sx={(theme) => ({
              color: "#2f2f2f",
              fontFamily: "sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
            })}
          >
            Budget Management
          </Text>
        </div>

        <div
          style={{
            width: "300px",
            height: "300px",
            background: "#ADD8E6",
            color: "#2f2f2f",
            borderRadius: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginLeft: "10px",
          }}
          
        >
          <FaWallet style={{ fontSize: "4rem", marginTop: "60px" }} />
          <Text
            size={20}
            weight={700}
            mb={20}
            align="center"
            sx={(theme) => ({
              color: "#2f2f2f",
              fontFamily: "sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
            })}
          >
            Income Tracking
          </Text>
        </div>

        <div
          style={{
            width: "300px",
            height: "300px",
            background: "#ADD8E6",
            color: "#2f2f2f",
            borderRadius: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginLeft: "10px",
          }}
        >
          <FaFileAlt style={{ fontSize: "4rem", marginTop: "60px" }} />
          <Text
            size={20}
            weight={700}
            mb={20}
            align="center"
            sx={(theme) => ({
              color: "#2f2f2f",
              fontFamily: "sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
            })}
          >
            Report Generation
          </Text>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "-50px" }}
      >
        <img
          src="../public/345.png"
          alt="Katherine Johnson"
          height="700"
          style={{ marginLeft: "20px" }}
        />
        <div>
          <Text
            size={70}
            weight={1000}
            mb={20}
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "Helvetica, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "600px",
            })}
          >
            Enter your budget and Expence
          </Text>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              style={{
                width: "150px",
                height: "60px",
                fontSize: "20px",
                borderRadius: "5px",
                background: "#b0b82e",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
                // Added margin-right for spacing
              }}
              onClick={() => (window.location.href = "/newBudget")}
            >
              Add Budget
            </button>
            <button
              style={{
                width: "150px",
                height: "60px",
                fontSize: "20px",
                borderRadius: "5px",
                background: "#b0b82e",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
                
                // Added margin-right for spacing
              }}
              onClick={() => (window.location.href = "/newExpense")}
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>

      <div style={{ alignItems: "center" }}>
        <div>
          <Text
            size={70}
            weight={1000}
            mb={20}
            align="center"
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "100px"
            })}
          >
            The anylyzer is created for you
          </Text>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
              width: "150px",
              height: "60px",
              fontSize: "20px",
              borderRadius: "5px",
              background: "#9370DB",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginRight: "10px",
              marginTop: "10px",
              marginBottom: "100px",
              // Added margin-right for spacing
            }}
            onClick={() => (window.location.href = "/Analyzer")}
          >
            Analyze now
          </button>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "-50px" }}
      >

        <div>
          <Text
            size={70}
            weight={1000}
            mb={20}
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "Helvetica, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "600px",
            })}
          >
            recommendation and tips for your balance
          </Text>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              style={{
                width: "180px",
                height: "80px",
                fontSize: "20px",
                borderRadius: "5px",
                background: "#1e9914",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
                // Added margin-right for spacing
              }}
              onClick={() => (window.location.href = "/Recommendation")}
            >
              recommendation
            </button>
            <button
              style={{
                width: "180px",
                height: "80px",
                fontSize: "20px",
                borderRadius: "5px",
                background: "#1e9914",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
                // Added margin-right for spacing
              }}
              onClick={() => (window.location.href = "/Tips_For_Balance")}
            >
              Tips for balance
            </button>
            
          </div>
        </div>
        <img
          src="../public/678.png"
          alt="Katherine Johnson"
          height="700"
          style={{ marginLeft: "20px",marginTop: "100px" }}
        />
      </div>
    </PageContainer>
  );
};

export default HomePage;