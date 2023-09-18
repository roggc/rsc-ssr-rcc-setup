import React from "react";

export default function MoreInfo({ data }) {
  return (
    <>
      <div>alias:{data.alias}</div>
      <div>likes: {data.likes}</div>
      <div>other: {data.other}</div>
      <div>email:{data.email}</div>
    </>
  );
}
