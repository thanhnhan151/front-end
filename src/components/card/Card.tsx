import viteLogo from "/vite.svg";
import "./Card.css";
import { FC } from "react";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img src={viteLogo} alt="Image" />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        consequatur.
      </p>
    </div>
  );
};

export default Card;
