import { Link } from "react-router-dom";

const NavLayout = () => {
  return (
    <div className="bg-red-600">
      <div className="flex justify-between items-center py-4 px-5 md:px-[8rem] 2xl:px[4rem]">
        <h2 className="text-2xl font-bold text-white/90">logo</h2>
        <div className="flex gap-3">
          <Link className="text-white/90" to={"/"}>
            Home
          </Link>
          <Link className="text-white/90" to={"/product"}>
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavLayout;
