import React from "react";
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

export default function PostCateg() {
  const post = usePostData("/category");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    postData({
      ...data,
    });

  const postData = (data) => {
    post.mutate(data, {
      onSuccess: (post) =>
        queryClient.invalidateQueries({ queryKey: ["Category"] }),
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
          title="Create category"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>Name_Uz</p>
              <input
                {...register("name_Uz", { required: true })}
                type="text"
                placeholder={"name_Uz"}
              />
              <p>Name_RU</p>
              <input
                type="text"
                placeholder={"name_Ru"}
                {...register("name_Ru", { required: true })}
              />
              <p>Name_EN</p>
              <input
                type="text"
                placeholder={"name_En"}
                {...register("name_En", { required: true })}
              />
              <p>Photo_id</p>
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
