import React from "react";

const View = () => {
  const example = { user: "user", docs: [] };
  const docs = [
    {
      cid: "bafybeiewgx4cxjfr6s7x4lexxto7xzvm5spxgxsaj3lrmmbvh4knimrxu4",
      type: "pdf",
      encrypted: false,
      name: "test.pdf",
    },
    {
      cid: "bafybeibsmhptvptijbfy3yqpjhhsoalkpkfysasa5c6p26bfrlz3emonxi",
      type: "pdf",
      encrypted: true,
      name: "test.pdf",
    },
  ];
  return (
    <div>
      {docs.map((doc) => {
        return <div key={doc.cid}>{doc.cid}</div>;
      })}
    </div>
  );
};

export default View;
