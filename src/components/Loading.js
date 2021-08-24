import React from "react";
import { BoxesLoader } from "react-awesome-loaders";
import "../styles/loading.css";
export const Loading = () => {
  return (
    <div className="loading">
      <BoxesLoader
        boxColor={"#5518ce"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </div>
  );
};
