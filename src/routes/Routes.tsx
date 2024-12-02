import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/home-page/HomePage";
import SearchPage from "../pages/search-page/SearchPage";
import CompanyPage from "../pages/company-page/CompanyPage";
import CompanyProfile from "../components/company-profile/CompanyProfile";
import IncomeStatement from "../components/income-statement/IncomeStatement";
import DesignPage from "../pages/design-page/DesignPage";
import BalanceSheet from "../components/balance-sheet/BalanceSheet";
import CashflowStatement from "../components/cashflow-statement/CashflowStatement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "design-guide",
        element: <DesignPage />,
      },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          {
            path: "company-profile",
            element: <CompanyProfile />,
          },
          {
            path: "income-statement",
            element: <IncomeStatement />,
          },
          {
            path: "balance-sheet",
            element: <BalanceSheet />,
          },
          {
            path: "cashflow-statement",
            element: <CashflowStatement />,
          },
        ],
      },
    ],
  },
]);
