import { SyntheticEvent } from "react";
import DeletePortfolio from "../delete-portfolio/DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const PortfolioCard = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${portfolioValue}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {portfolioValue}
      </Link>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValue={portfolioValue}
      />
    </div>
  );
};

export default PortfolioCard;
