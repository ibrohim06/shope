import { Route, Routes } from "react-router-dom";
import Allusers from "../../pages/AllUsers";
import Category from "../../pages/Category/Category";
import PostCateg from "../../pages/Category/createCateg/createCateg";
import DeleteCateg from "../../pages/Category/deleteCateg/deleteCateg";
import EditCateg from "../../pages/Category/editCateg/editCateg";
import DeleProduct from "../../pages/Product/deleteProduct/deleteProduct";
import EditProduct from "../../pages/Product/EditProduct/editProduct";
import GetProduct from "../../pages/Product/GetProduct/getProduct";
import GetProductByCateg from "../../pages/Product/GetProductByCateg/getProductByCateg";
import PostProduct from "../../pages/Product/PostProduct/postProduct";

export default function Routs() {
  return (
    <div>
      <Routes>
        <Route path="/allusers" element={<Allusers />} />
        <Route path="/allproduct" element={<GetProduct />} />
        <Route path="/postproduct" element={<PostProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/deleteproduct" element={<DeleProduct />} />
        <Route path="/productcateg" element={<GetProductByCateg />} />
        <Route path="/category" element={<Category />} />
        <Route path="/editcategory" element={<EditCateg />} />
        <Route path="/deletecateg" element={<DeleteCateg />} />
        <Route path="/postcateg" element={<PostCateg />} />
      </Routes>
    </div>
  );
}
