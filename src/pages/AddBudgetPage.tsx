import { Divider, Text } from "@mantine/core";
import AddToBudget from "../components/AddToBudget";
import SetBudget from "../components/SetBudget";
import PageContainer from "../layout/PageContainer";
import { useContext } from "react";
import ResetValueModal from "../components/ResetValueModal";
import CategoriesContext from "../store/CategoriesContext";

const AddBudgetPage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");
  const expenses = getTotalAmount("Expenses");

  return (
    <PageContainer>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "100px",marginTop: "-80px" }}
      >
        <div style={{ marginRight: "20px" }}>
          <Text size={50} weight={1000} color="black">
            Set Your Income / Budget
          </Text>
          <Text size={22} weight={1000} color="black">
            Sets your income / budget to the entered value.
          </Text>
          <div style={{marginTop:"-80"}}>
          <SetBudget />
          </div>
        </div>
        <img
          src="../public/222.png"
          alt="Income Source"
          style={{ marginLeft: "100px", maxWidth: "3000px" }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' ,marginTop:"-100px"}}>
      <div style={{ marginLeft: "100px", maxWidth: "1200px", marginRight: "50px" , marginBottom:"100px"}}>
        <Text size={40} weight={700} color="dark">
          Add an Income Source
        </Text>
        <Text size={20} weight={700} color="dark">
          Adds on to your current income / budget amount.
        </Text>
        <AddToBudget />
      </div>
      <div style={{ marginLeft: "250px" }}>
        <ResetValueModal prevAmount={budget} type="Budget" />
      </div>
    </div>
    </PageContainer>
  );
};

export default AddBudgetPage;
