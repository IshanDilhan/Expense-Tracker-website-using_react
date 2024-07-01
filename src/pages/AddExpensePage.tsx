import { Divider, Text } from "@mantine/core";
import AddToExpenses from "../components/AddToExpenses";
import PageContainer from "../layout/PageContainer";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import CategoriesContext from "../store/CategoriesContext";

const AddExpensePage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const expenses = getTotalAmount("Expenses");

  return (
    <PageContainer>
      
      <AddToExpenses />
      
      
    </PageContainer>
  );
};

export default AddExpensePage;
