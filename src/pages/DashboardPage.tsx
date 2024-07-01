import { useContext } from "react";
import { SimpleGrid, Text } from "@mantine/core";
import DisplayCard from "../components/DisplayCard";
import HistoryStack from "../components/HistoryStack";
import PageContainer from "../layout/PageContainer";
import PieChart from "../components/PieChart";

import CategoriesContext from "../store/CategoriesContext";

const HomePage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");
  const expenses = getTotalAmount("Expenses");

  return (
    <PageContainer>
      {/* Displays the net balance of the user */}
      <Text
  size={35}
  weight={700}
  mb={20}
  sx={{
    color: 'black', 
  }}
>
        YOUR BALANCE IS: ${budget - expenses}
      </Text>
      <SimpleGrid cols={2} style={{ justifyContent: "center" }}>
        <DisplayCard label="Income / Budget" amount={budget} color="green.4" />
        <DisplayCard label="Expenses" amount={expenses} color="red.4" />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Text
            size={70}
            weight={1000}
            mb={-80}
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "Helvetica, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "100px",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "600px",
            })}
          >
            Analyze Now
          </Text>
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
                marginLeft: "-100px"
              }}
              onClick={() => (window.location.href = "/Analyzer")}
            >
              Analyze
            </button>
          </div>
        
          
        <img
        src="../public/333.png" 
        alt="Description "
        style={{ width: '456px', height: '547px',marginLeft: '0px' }} 
      />
        {/* Only show the pie chart when either expenses or budget is greater than 0 */}
        
        
      </SimpleGrid>
    </PageContainer>
  );
};

export default HomePage;