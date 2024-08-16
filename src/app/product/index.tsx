import { useGetAllProduct } from "@/store/server";

const Product = () => {
  const { data } = useGetAllProduct();
  console.log(data);
  return <div>Products</div>;
};

export default Product;
