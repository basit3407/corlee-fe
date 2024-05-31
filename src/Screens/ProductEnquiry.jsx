import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import ProductsEnquiryComponent from "../components/App/ProductsEnquiryScreen";
import { mockData } from "../util";

function ProductEnquiry() {
  return (
    <>
      <Navbar />
      <ProductsEnquiryComponent
        productDetailsRendererArgsList={mockData.productDetailsRendererArgsList}
      />
      <BottomBar />
    </>
  );
}

export default ProductEnquiry;
