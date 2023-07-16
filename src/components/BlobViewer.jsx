import React, { useEffect, useState } from "react";

const BlobViewer = ({ data }) => {
  const [blobURL, setBlobURL] = useState("");

  useEffect(() => {
    const url = URL.createObjectURL(data);
    setBlobURL(url);
  }, []);

  return <div>{blobURL && <img src={blobURL} alt="Blob Image" />}</div>;
};

export default BlobViewer;
