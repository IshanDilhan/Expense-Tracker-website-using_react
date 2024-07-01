// MainAppShell.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import HomePage from "../pages/HomePage";
import AddBudgetPage from "../pages/AddBudgetPage";
import AddExpensePage from "../pages/AddExpensePage";
import DashboardPage from "../pages/DashboardPage";
import Recommendation from "../pages/Recommendation";
import Tips_For_Balance from "../pages/Tips_For_Balance";
import DisplayCategoriesPage from "../pages/DisplayCategoriesPage";
import Navbar from "./Navbar";

type HistoryElement = {
  id: string;
  label: string;
  amount: number;
  type: string;
};

const MainAppShell = () => {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "theme",
    defaultValue: "dark",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme("light");

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <Navbar /> {/* Include the Navbar component here */}

          <AppShell
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "light"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Dashboard" element={<DashboardPage />} />
              <Route path="/newExpense" element={<AddExpensePage />} />
              <Route path="/newBudget" element={<AddBudgetPage />} />
              <Route path="/Analyzer" element={<DisplayCategoriesPage />} />
              <Route path="/Recommendation" element={<Recommendation />} />
              <Route path="/Tips_For_Balance" element={<Tips_For_Balance />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MainAppShell;
