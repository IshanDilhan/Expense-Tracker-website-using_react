import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "@mantine/core";

import HistoryContext from "../store/HistoryContext";
import CategoriesContext from "../store/CategoriesContext";
import ResetValueModal from "../components/ResetValueModal";

const AddToBudget = () => {
  const { addCategory } = useContext(CategoriesContext);
  const { addHistoryElement } = useContext(HistoryContext);
  
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "white", marginTop: "40px",marginBottom: "-80px" }}>
      <div>
        <TextInput
          onChange={(e) => setLabel(e.currentTarget.value)}
          mt={20}
          size="md"
          styles={{ input: { backgroundColor: "white" } }}
          w="40%"
          placeholder="Ex: Christmas bonus"
          label="Label"
          withAsterisk
        />
        <TextInput
          onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
          mt={20}
          size="md"
          w="40%"
          placeholder="Ex: 3000"
          styles={{ input: { backgroundColor: "white" } }}
          label="Amount"
          withAsterisk
        />
        <Button
          mt={20}
          onClick={() => {
            // Checks if the user input is valid
            if (label === "" || value <= 0 || Number.isNaN(value)) {
              alert(
                "Invalid Entries. Make sure the label is not empty and the amount is greater than zero."
              );
            } else {
              addCategory({
                label: "Budget",
                id: crypto.randomUUID(),
                amount: value,
              });
              // navigate to home page
              navigate("/Dashboard");
              addHistoryElement({
                label: label,
                amount: value,
                id: crypto.randomUUID(),
                type: "Budget",
                dateCreated: "",
                category: "Budget",
              });
            }
          }}
        >
          Add To Budget
        </Button>
      </div>
      
    </div>
  );
};

export default AddToBudget;
