import RatioList from "../../components/ratio-list/RatioList";
import Table from "../../components/table/Table";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        This is FinShark's design page. This is where we will house various
        design aspects of the app
      </h2>
      <RatioList />
      <Table />
    </>
  );
};

export default DesignPage;
