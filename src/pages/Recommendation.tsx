import { useContext } from "react";
import { SimpleGrid, Text } from "@mantine/core";
import DisplayCard from "../components/DisplayCard";
import HistoryStack from "../components/HistoryStack";
import PageContainer from "../layout/PageContainer";
import PieChart from "../components/PieChart";
import CategoriesContext from "../store/CategoriesContext";


const Recommendation = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");
  const expenses = getTotalAmount("Expenses");
  const isExpensesHigh = expenses > budget;
  const isIncomeHigher = budget > expenses;


  return (
    <PageContainer>
      {/* Displays the net balance of the user */}
      <Text
        size={35}
        weight={700}
        mb={20}
        color="black"
      >
        Recommendation
      </Text>
      <SimpleGrid cols={2} style={{ justifyContent: "center" }}>
        <DisplayCard label="Income / Budget" amount={budget} color="green.4" />
        <DisplayCard label="Expenses" amount={expenses} color="red.4" />
                 
      </SimpleGrid>

      <div style={{ marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {/* Other components or content */}
  {isExpensesHigh && (
    <div style={{ color: 'black', fontSize: '24px' }}>
      <p>Your expenses are higher than your income. Here's some recommendation:</p>
      <ul>
        <li>Review and cut unnecessary expenses.</li>
        <li>Explore additional sources of income or side hustles.</li>
      <li>Negotiate bills and expenses to get better rates.</li>
      <li>Build an emergency fund for unexpected expenses.</li>
        {/* Add more advice as needed */}
      </ul>
    </div>
  )}

  {isIncomeHigher && (
    <Text sx={{ color: 'black', fontSize: '30px' }}>
      Your income is higher than your expenses. Good job on managing your finances!
    </Text>
  )}
</div>
    </PageContainer>
  );
};

export default Recommendation;