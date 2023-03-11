import React from "react";
import css from "./style.css";
import {
  //   useGetData,
  usePostData,
  //   useEditData,
  //   useDeleteData,
} from "../../../axios/hooks";
import { Button, Modal } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { queryClient } from "../../..";

export default function PostProduct() {
  const post = usePostData("/products");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    postData({
      ...data,
      price: Number(data.price),
      discount: Number(data.discount),
    });

  const postData = (data) => {
    post.mutate(data, {
      onSuccess: (post) =>
        queryClient.invalidateQueries({ queryKey: ["product"] }),
      onError: (error) => console.log(error, "error"),
    });
  };

  const [open, setOpen] = useState(false);
  return (
    <div id="form">
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Modal
          className="modal"
          title="Create post"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Type" {...register("type", {})} />
              <input
                type="checkbox"
                placeholder="Active"
                {...register("active", {})}
              />
              <input type="text" placeholder="Size" {...register("size", {})} />
              <div className="form-flex">
                <h4>Both</h4>
                <input
                  {...register("gender")}
                  type="radio"
                  value="BOTH"
                  placeholder="gender"
                />
                <h4>Male</h4>
                <input
                  {...register("gender")}
                  type="radio"
                  value="MALE"
                  placeholder="gender"
                />
                <h4>Famale</h4>
                <input
                  {...register("gender")}
                  type="radio"
                  value="FEMALE"
                  placeholder="gender"
                />
              </div>
              <input
                type="text"
                placeholder="Color"
                {...register("color", {})}
              />
              <input
                type="text"
                placeholder="Name_UZ"
                {...register("name_Uz", {})}
              />
              <input
                type="text"
                placeholder="Name_RU"
                {...register("name_Ru", {})}
              />
              <input
                type="text"
                placeholder="Name_EN"
                {...register("name_En", {})}
              />
              <input
                type="number"
                placeholder="Price"
                {...register("price", {})}
              />
              <input
                type="number"
                placeholder="Discount"
                {...register("discount", {})}
              />
              <input
                type="text"
                placeholder="description_Uz"
                {...register("description_Uz", {})}
              />
              <input
                type="text"
                placeholder="description_Ru"
                {...register("description_Ru", {})}
              />
              <input
                type="text"
                placeholder="description_En"
                {...register("description_En", {})}
              />
              <input
                type="text"
                placeholder="Category_ID"
                {...register("categoryId", {})}
              />
              <input
                type="text"
                placeholder="Photo_id"
                {...register("photoId", {})}
              />
              <input type="submit" onClick={() => setOpen(false)} />
            </form>
          </>
        </Modal>
      </>
    </div>
  );
}
