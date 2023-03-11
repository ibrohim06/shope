import React from "react";
import {
  useGetData,
  //   usePostData,
  //   useEditData,
  //   useDeleteData,
} from "../../../axios/hooks";
import PostProduct from "../PostProduct/postProduct";

export default function GetProductByCateg() {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetData(["products"], "/products/category");
  // /b694e7b3-3a0a-485a-b0c7-13b7ad9933f3
  console.log(products);
  // products?.data?.map((e) => {
  //   console.log(e);
  // });

  if (isLoading) {
    return <p>isLoading</p>;
  }
  return (
    <div>
      {/* {products?.data?.category?.map((e) => {
        return (
          <div key={e.id}>
            <div>
              {console.log(e)}
              <h4>{e.id}</h4>
              <p>{e.gender}</p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
