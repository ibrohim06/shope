import React, { useEffect } from "react";
import "./style.css";

import {
  useGetData,
  //   usePostData,
  useEditData,
  //   useDeleteData,
} from "../../../axios/hooks";
import { Button, Modal } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { queryClient } from "../../..";

export default function EditProduct(props) {
  const { data: products } = useGetData(
    ["editproducts"],
    `/products/${props?.id}`
  );

  const post = useEditData(`/products/${props?.id}`);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    editData({
      ...data,
    });

  const editData = (data) => {
    console.log(data);
    post.mutate(data, {
      onSuccess: (post) =>
        queryClient.invalidateQueries({ queryKey: ["product"] }),
      onError: (error) => alert(error, "error"),
    });
  };

  const [open, setOpen] = useState(false);
  return (
    <div id="form">
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faEdit} />
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
              <p>Type</p>
              <input
                type="text"
                // placeholder="Type"
                placeholder={products?.type}
                {...register("type", {})}
              />
              <p>Active</p>
              <input
                type="checkbox"
                // placeholder="Active"
                placeholder={products?.active}
                {...register("active", {})}
              />
              <p>Size</p>
              <input
                type="text"
                // placeholder="Size"
                placeholder={products?.size}
                {...register("size", {})}
              />

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
                  value="FAMALE"
                  placeholder="gender"
                />
              </div>
              <p>Color</p>
              <input
                type="text"
                // placeholder="Color"
                placeholder={products?.color}
                {...register("color", {})}
              />
              <p>Name_Uz</p>
              <input
                {...register("name", { required: true })}
                type="text"
                // placeholder
                // value={products?.name_Uz}
                placeholder={products?.name_Uz}
              />
              <p>Name_RU</p>
              <input
                type="text"
                // placeholder="Name_RU"
                placeholder={products?.name_Ru}
                {...register("name_Ru", { required: true })}
              />
              <p>Name_EN</p>
              <input
                type="text"
                // placeholder="Name_EN"
                placeholder={products?.name_En}
                {...register("name_En", { required: true })}
              />
              <p>Price</p>
              <input
                type="number"
                // placeholder="Price"
                placeholder={products?.price}
                {...register("price", {})}
              />
              <p>Discount</p>
              <input
                type="number"
                // placeholder="Discount"
                placeholder={products?.discount}
                {...register("discount", {})}
              />
              <p>Description_Uz</p>
              <input
                type="text"
                // placeholder="description_Uz"
                placeholder={products?.description_Uz}
                {...register("description_Uz", {})}
              />
              <p>Description_Ru</p>
              <input
                type="text"
                // placeholder="description_Ru"
                placeholder={products?.description_Ru}
                {...register("description_Ru", {})}
              />
              <p>Description_En</p>
              <input
                label="description_En"
                type="text"
                // placeholder="description_En"
                placeholder={products?.description_En}
                {...register("description_En", {})}
              />
              <p>Category_ID</p>
              <input
                type="text"
                placeholder="Category_ID"
                // value={products?.categoryId}
                {...register("categoryId", { required: true })}
              />
              <p>Photo_id</p>
              <input
                type="text"
                placeholder="Photo_id"
                // value={products?.photoId}
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
