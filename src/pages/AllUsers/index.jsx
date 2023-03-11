import React from "react";
import {
  useGetData,
  //   usePostData,
  //   useEditData,
  //   useDeleteData,
} from "../../axios/hooks";

export default function Allusers() {
  const { data: posts, isLoading, isError } = useGetData(["posts"], "/user");

  if (isLoading) {
    return <p>isLoading</p>;
  }
  return (
    <div>
      {posts?.map((e) => (
        <div key={e.id}>
          <h1>{e.email}</h1>
          {console.log(e?.email, 11111)}
        </div>
      ))}
    </div>
  );
}
