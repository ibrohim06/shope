import React, { useEffect } from "react";
import {
  // useGetData,
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
import { queryClient } from "../../..";

export default function DeleProduct(props) {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    deleteData({
      ...data,
    });

  const deletes = useDeleteData(`/products/${props.id}`);

  const deleteData = (data) => {
    deletes.mutate(data, {
      onSuccess: (deletes) =>
        queryClient.invalidateQueries({ queryKey: ["product"] }),
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
