import React, { useState } from "react";
import s from "./style.module.scss";
import {
  useGetData,
  //   usePostData,
  //   useEditData,
  //   useDeleteData,
} from "../../../axios/hooks";
import DeleProduct from "../deleteProduct/deleteProduct";
import EditProduct from "../EditProduct/editProduct";
import PostProduct from "../PostProduct/postProduct";

export default function GetProduct() {
  const [idd, setId] = useState("");
  const {
    data: products,
    isLoading,
    isError,
  } = useGetData(["products"], `/products`);

  if (isLoading) {
    return <h1 className={s.loading}>Loading...</h1>;
  }
  return (
    <div>
      {products?.data?.map((e) => {
        return (
          <div key={e.id}>
            <div className={s.flex} onClick={() => setId(e.id)}>
              <div className={s.card}>
                <div className={s.btns}>
                  <PostProduct id={idd} />
                  <EditProduct id={idd} />
                  <DeleProduct id={idd} />
                </div>
                <div className={s.flex_card}>
                  <h2>
                    Type
                    <p>{e.type}</p>
                  </h2>
                  <h2>
                    Price
                    <p>{e.price}</p>
                  </h2>
                  <h2>
                    CategID
                    <p>{e.categoryId}</p>
                  </h2>
                  <h2>
                    Product-Id
                    <p>{e.id}</p>
                  </h2>

                  <h2>
                    Uz
                    <p>{e.name_Uz}</p>
                  </h2>
                  <h2>
                    Ru
                    <p>{e.name_Ru}</p>
                  </h2>
                  <h2>
                    En
                    <p>{e.name_En}</p>
                  </h2>

                  <h2>
                    Gender
                    <p>{e.gender}</p>
                  </h2>

                  <h2>
                    Color
                    <p>{e.color}</p>
                  </h2>
                  <h2>
                    Size
                    <p>{e.size}</p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
