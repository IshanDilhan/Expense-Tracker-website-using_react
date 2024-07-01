import { Button, MultiSelect, Text, TextInput } from "@mantine/core";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AvailableCategoriesContext from "../store/AvailableCategoriesContext";
import CategoriesContext from "../store/CategoriesContext";
import HistoryContext from "../store/HistoryContext";
import ResetValueModal from "../components/ResetValueModal";

type AvailableCategories = {
  label: string;
  value: string;
  isused: string;
};

const AddToExpenses = () => {
  const { addHistoryElement } = useContext(HistoryContext);
  const { getTotalAmount } = useContext(CategoriesContext);
  const expenses = getTotalAmount("Expenses");
  const { availableCategories, setAvailableCategories } = useContext(
    AvailableCategoriesContext
  );
  const { addCategory } = useContext(CategoriesContext);
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);

  const [category, setCategory] = useState<string[]>([""]);
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "white", marginTop:"70px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-80px"
        }}
      >
        <div>
          <Text
            size={50}
            weight={1000}
            mb={20}
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "Helvetica, sans-serif",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "600px",
            })}
          >
            Add your expenses
          </Text>

          <TextInput
            onChange={(e) => setLabel(e.currentTarget.value)}
            mt={20}
            size="md"
            w="40%"
            placeholder="Ex: Car payments"
            label="Label"
            withAsterisk
            styles={{ input: { backgroundColor: "white" } }}
          />
          <TextInput
            onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
            mt={20}
            size="md"
            w="40%"
            placeholder="Ex: 3000"
            label="Amount"
            withAsterisk
            styles={{ input: { backgroundColor: "white" } }}
          />
        </div>
        <div>
          <img
            src="../public/111.png"
            alt="Expense"
            style={{ marginLeft: "100px", maxWidth: "1000px" }}
          />
        </div>
      </div>
      <div style={{ backgroundColor: "white", padding: "20px" ,marginTop: "-100px",}}>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
          <div style={{ marginLeft: "100px",marginTop: "30px"}}>
          <Text
            size={32}
            weight={1000}
            mb={20}
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "Helvetica, sans-serif",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "600px",
            })}
          >
              Add a Category to Your Expense
            </Text>
            <MultiSelect
              w="40%"
              styles={{ input: { backgroundColor: "white" } }}
              mt={10}
              data={availableCategories}
              label="Select a Category"
              placeholder="Select a category or create a new one"
              searchable
              creatable
              value={category}
              onChange={setCategory}
              maxSelectedValues={1}
              getCreateLabel={(query) =>
                `+ Create ${query[0].toUpperCase() + query.substring(1)}`
              }
              onCreate={(query) => {
                const capQuery = query[0].toUpperCase() + query.substring(1);
                const item = {
                  value: capQuery,
                  label: capQuery,
                  isused: "false",
                };
                console.log("hello");

                setAvailableCategories((current) => [item, ...current]);
                return item;
              }}
            />
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "40px",marginBottom: "-40px" }}
            >
              <Button
                mr={30}
                
                onClick={() => {
                  if (label === "" || value <= 0 || Number.isNaN(value)) {
                    alert(
                      "Invalid Entries. Make sure the label is not empty and the amount is greater than zero."
                    );
                  } else {
                    // if the user does not select a category while creating his expense, set category equal to 'Uncatigorized'
                    category[0] === undefined ||
                    category[0] === null ||
                    category[0] === ""
                      ? (category[0] = "Uncategorized")
                      : null;
                    addCategory({
                      label: category[0],
                      amount: value,
                      id: crypto.randomUUID(),
                    });
                    setAvailableCategories((prev) => {
                      // set the isused property of the available category selected to true
                      return prev.map((c) => {
                        if (c.label === category[0]) {
                          c.isused = "true";
                        }
                        return c;
                      });
                    });
                    // navigate back to the home page
                    navigate("/Dashboard");
                    addHistoryElement({
                      label: label,
                      amount: value,
                      id: crypto.randomUUID(),
                      type: "Expense",
                      dateCreated: "",
                      category: category[0],
                    });
                  }
                }}
              >
                Add Expense
              </Button>
              <Button
                color="red"
                onClick={() => {
                  // Checks if the user has not selected a category
                  if (category[0] === "") {
                    alert("No category has been selected!");
                  } else {
                    // if they have selected a category

                    // Uncategorized cannot be removed
                    if (category[0] === "Uncategorized") {
                      alert("Uncategorized cannot be removed!");
                      return;
                    }
                    let removed = false; // used to check if the category has been removed
                    setAvailableCategories((prev) => {
                      // create a hard copy of the previous category state
                      const arr: AvailableCategories[] = JSON.parse(
                        JSON.stringify(prev)
                      );
                      // if the category selected exists in the available categories array and its match is not being used remove the category
                      arr.forEach((c, index) => {
                        if (c.label === category[0] && c.isused === "false") {
                          arr.splice(index, 1);
                          removed = true;
                        }
                      });

                      return arr;
                    });
                    // if the category has not been removed then it is being used. Show an alert to notify the user
                    removed
                      ? null
                      : alert(
                          "Category cannot be removed since it is being used."
                        );
                  }
                }}
              >
                Remove Category
              </Button>
            </div>
          </div>
          <div style={{marginLeft:"250px",marginTop:"100px"}}>
          <ResetValueModal prevAmount={expenses} type="Expenses" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToExpenses;
