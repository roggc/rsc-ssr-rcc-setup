import React from "react";

export default function MoreInfo({ data }) {
  return (
    <>
      <div>likes: {data.likes}</div>
      <div>other: {data.other}</div>
    </>
  );
}
