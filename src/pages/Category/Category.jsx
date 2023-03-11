import React from "react";
import s from "./style.module.scss";
import { Button, Modal } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import { useForm } from "react-hook-form";
import {
  useGetData,
  //   usepatchData,
  useEditData,
  //   useDeleteData,
} from "../../axios/hooks";
import Example from "../../components/example";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditCateg from "./editCateg/editCateg";
import DeleteCateg from "./deleteCateg/deleteCateg";
import PostCateg from "./createCateg/createCateg";

export default function Category() {
  const [idd, setId] = useState("");
  const {
    data: products,
    isLoading,
    isError,
  } = useGetData(["Category"], `/category`);

  if (isLoading) {
    return <h1 className={s.loading}>Loading...</h1>;
  }

  if (isError) {
    return <h1 className={s.loading}>Error...</h1>;
  }

  console.log(products);
  return (
    <div>
      <div className={s.title}>
        <h4>Category ID</h4>
        <h4>Name Uz</h4>
        <h4>Name Ru</h4>
        <h4>Name En</h4>
        <h4>Photo ID</h4>
        <div>
          <h4>Edit</h4>
        </div>
        <div>
          <h4>create</h4>
        </div>
      </div>
      {products?.data?.map((e) => {
        return (
          <div key={e.id} className={s.flex}>
            <div className={s.card} onClick={() => setId(e.id)}>
              <h2>{e.id}</h2>
              <h2>{e.name_Uz}</h2>
              <h2>{e.name_Ru}</h2>
              <h2>{e.name_En}</h2>
              <h2>{e.photoId}</h2>
              <h2 id={s.flex_id}>
                <EditCateg id={idd} className={s.btns} />
              </h2>
              <h2>
                <DeleteCateg id={idd} className={s.btns} />
              </h2>
              <h2>
                <PostCateg id={idd} className={s.btns} />
              </h2>
            </div>
          </div>
        );
      })}
      {/* <Example /> */}
    </div>
  );
}
