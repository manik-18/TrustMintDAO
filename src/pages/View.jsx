import React, { useContext } from "react";
import File from "../asset/file.gif";
import { Web3Context } from "../context/Web3Context";

const View = () => {
  const example = { user: "user", docs: [] };
  const { retrieveFile } = useContext(Web3Context);
  const docs = [
    {
      cid: "bafybeicqhnrfj7uxrsehfayaxrdxpyfsdjgsoh7sqmbu6v2u2ai5yo374u",
      type: "png",
      encrypted: false,
      name: "s.png",
    },
    {
      cid: "bafybeibsmhptvptijbfy3yqpjhhsoalkpkfysasa5c6p26bfrlz3emonxi",
      type: "pdf",
      encrypted: true,
      name: "test.pdf",
    },
  ];

  return (
    <>
      <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={File} alt="" />
        </a>
        <div className="p-5">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            File Name: {`${docs[0].name}`}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            File Type: {`${docs[0].type}`}
          </p>
          {docs[0].encrypted ? (
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Decrypt
            </a>
          ) : (
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => retrieveFile(docs[0].cid, docs[0].name)}
            >
              Show
            </a>
          )}
        </div>
      </div>

      <div>
        {docs.map((doc) => {
          return <div key={doc.cid}>{doc.cid}</div>;
        })}
      </div>
    </>
  );
};

export default View;
