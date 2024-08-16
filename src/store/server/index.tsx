import { axios, headerJson } from "@/api";
import { useQuery } from "@tanstack/react-query";

const getAllProduct = async (): Promise<any> => {
  const { data } = await axios.get("products", {
    headers: headerJson(),
  });
  return data;
};

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProduct(),
  });
};
