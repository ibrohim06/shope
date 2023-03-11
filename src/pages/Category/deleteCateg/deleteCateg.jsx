import React, { useEffect } from "react";
import {
  useGetData,
  //   usePostData,
  //   useEditData,
  useDeleteData,
} from "../../../axios/hooks";
import { Button, Modal } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { instance } from "../../../axios/axios";
import { queryClient } from "../../..";

export default function DeleteCateg(props) {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    deleteData({
      ...data,
    });

  const deletes = useDeleteData(`/category/${props.id}`);

  const deleteData = (data) => {
    console.log(data);
    deletes.mutate(deletes, {
      onSuccess: (deletes) =>
        queryClient.invalidateQueries({ queryKey: ["Category"] }),
      onError: (error) => alert("error"),
    });
  };

  const [open, setOpen] = useState(false);
  return (
    <div id="form">
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Modal
          className="modal"
          title="Delete post"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="submit" />
            </form>
          </>
        </Modal>
      </>
    </div>
  );
}
