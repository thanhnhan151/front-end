import { FC } from "react";
import Card from "../card/Card";

interface Props {}

const CardList: FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="Apple" ticker="AAPL" price={100} />
      <Card companyName="Microsoft" ticker="MSFT" price={200} />
      <Card companyName="Tesla" ticker="TSLA" price={300} />
    </div>
  );
};

export default CardList;
