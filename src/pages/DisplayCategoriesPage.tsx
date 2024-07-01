import { Text } from "@mantine/core";
import { useContext } from "react";
import DisplayCategories from "../components/DisplayCategories";
import PageContainer from "../layout/PageContainer";
import PieChart from "../components/PieChart";
import CategoriesContext from "../store/CategoriesContext";
import HistoryStack from "../components/HistoryStack";

const DisplayCategoriesPage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");
  const expenses = getTotalAmount("Expenses");
  
  return (
    <PageContainer>
      <Text
        size={35}
        weight={700}
        mb={20}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[1]
              : theme.colors.gray[8],
        })}
      >
        Spending Categories
      </Text>
      <DisplayCategories />
      
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <HistoryStack />
        <div style={{ marginLeft: '50px' }}> {/* Adjust the margin-left as needed */}
          {(budget > 0 || expenses > 0) && <PieChart />}
        </div>
      </div>
    </PageContainer>
  );
};

export default DisplayCategoriesPage;