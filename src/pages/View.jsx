import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import File from "../asset/file.gif";
import BlobViewer from "../components/BlobViewer";
import { Web3Context } from "../context/Web3Context";
import CryptoJS from "crypto-js";

const View = () => {
  const example = { user: "user", docs: [] };
  const { retrieveFile } = useContext(Web3Context);
  const docs = [
    {
      cid: "bafybeid4cqjcyvhehsyii5updjsamn2kithipthnmeiwgm57vwjhaops6i",
      type: "avif",
      encrypted: false,
      name: "m2.avif",
    },
    {
      cid: "bafybeih5lqtsl5zvysffsfnpjvyjwew6qnsolhlcorc73eoywsqwd6b3om",
      type: "png",
      encrypted: true,
      name: "photo.png.enc",
    },
  ];

  const [blobData, setBlobData] = useState(null);

  const handleShow = async (cid, name) => {
    const data = await retrieveFile(cid, name);
    setBlobData(data);
    // console.log(data);
  };

  const handleDecrypt = async (cid, name) => {
    // Getting blob data
    const data = await retrieveFile(cid, name);

    const encryptionKey = "12345678"; // Replace with your actual encryption key

    const reader = new FileReader();
    reader.onload = function (event) {
      const fileData = event.target.result;
      const decryptedData = CryptoJS.AES.decrypt(
        fileData.split(",")[1], // Remove the "data:application/octet-stream;base64," prefix
        encryptionKey
      ).toString(CryptoJS.enc.Utf8);
      const decryptedFile = new File(
        [decryptedData],
        name.replace(".enc", ""),
        {
          type: data.type,
          lastModified: data.lastModified,
        }
      );
      setBlobData(decryptedFile);
      console.log(decryptedFile);
    };
    reader.readAsDataURL(data);
  };

  return (
    <>
      {Object.is(blobData, null) ? (
        <div>
          {docs.map((doc) => {
            return (
              <div
                className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={doc.cid}
              >
                <div>
                  <img className="rounded-t-lg" src={File} alt="" />
                </div>
                <div className="p-5">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    File Name: {`${doc.name}`}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    File Type: {`${doc.type}`}
                  </p>
                  {doc.encrypted ? (
                    <button
                      onClick={() => handleDecrypt(doc.cid, doc.name)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Decrypt
                    </button>
                  ) : (
                    <button
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => handleShow(doc.cid, doc.name)}
                    >
                      Show
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <BlobViewer data={blobData} />
      )}
    </>
  );
};

export default View;
