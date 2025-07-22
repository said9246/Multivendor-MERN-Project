import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { productData } from "../static/data";

const ProductDetailsPage = () => {
  const {name} = useParams();
  const [data, setData] = useState(null);
  const productName=name.replace(/-/g,"  ")
  console.log("Product Name:", name);

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, []);

  return (
    <div>
      <Header />
      {/* {data ? (
        <>
          <ProductDetails data={data} />
          <SuggestedProduct data={data} />
        </>
      ) : (
        <div className="p-4 text-center">Product not found or loading...</div>
      )} */}

      <ProductDetails/>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;










// -----------------------------------------correct code after completed -------


// import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import ProductDetails from "../components/Products/ProductDetails";
// import SuggestedProduct from "../components/Products/SuggestedProduct";
// import { useSelector } from "react-redux";

// const ProductDetailsPage = () => {
//   const { allProducts } = useSelector((state) => state.products);
//   const { allEvents } = useSelector((state) => state.events);
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [searchParams] = useSearchParams();
//   const eventData = searchParams.get("isEvent");

//   useEffect(() => {
//     if (eventData !== null) {
//       const data = allEvents && allEvents.find((i) => i._id === id);
//       setData(data);
//     } else {
//       const data = allProducts && allProducts.find((i) => i._id === id);
//       setData(data);
//     }
//   }, [allProducts, allEvents]);

//   return (
//     <div>
//       <Header />
//       <ProductDetails data={data} />
//         {
//           !eventData && (
//             <>
//             {data && <SuggestedProduct data={data} />}
//             </>
//           )
//         }
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetailsPage;
