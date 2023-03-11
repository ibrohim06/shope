import React from "react";
import s from "../../Category/style.module.scss";
import { Button, Modal } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetData,
  //   usepatchData,
  useEditData,
  //   useDeleteData,
} from "../../../axios/hooks/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { QueryClient } from "@tanstack/react-query";
import { queryClient } from "../../..";

export default function EditCateg(props) {
  // const patch = useEditData(`/products/${props?.id}`);
  const data = useGetData([]);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetData(["Category"], `/category/${props?.id}`);
  const patch = useEditData(`/category/${props?.id}`);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    editData({
      ...data,
      price: Number(data.price),
      discount: Number(data.discount),
    });
  const editData = (data) => {
    // console.log(data);
    patch.mutate(data, {
      onSuccess: (patch) =>
        queryClient.invalidateQueries({ queryKey: ["Category"] }),
      onError: (error) => err(),
    });
  };
  const notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const err = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>
      <Modal
        className={s.modal}
        title="Edit category"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <p>Name_Uz</p>
          <input
            {...register("name_Uz", { required: true })}
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
          <p>Photo_id</p>
          <input
            type="text"
            placeholder="Photo_id"
            // value={products?.photoId}
            {...register("photoId", {})}
          />
          <input type="submit" onClick={() => setOpen(false)} />
        </form>
      </Modal>
      {/* <button onClick={notify}>Notify</button>; */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}
