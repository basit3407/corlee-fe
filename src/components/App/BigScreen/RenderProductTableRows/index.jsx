import ProductTableRow from "../ProductTableRow";

function RenderProductTableRows({ productTableRowsData }) {
  return (
    <tbody>
      {productTableRowsData.map((data, index) => {
        return <ProductTableRow {...data} key={index} />;
      })}
    </tbody>
  );
}

export default RenderProductTableRows;
