import axios from "axios";
import { CompanySearch } from "./company";

const REACT_APP_API_KEY = "ahCDJ333z2shI1GefQrffr9pkQiruq5c";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("Error message: ", error.message);
  }
};
