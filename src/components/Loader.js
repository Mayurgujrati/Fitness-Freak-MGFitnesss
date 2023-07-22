import React from "react";
import { LiquidLoader } from "react-loaders-kit";
import styled from "styled-components";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 2,
    colors: ["#915eff", "#white", "#black"],
  };

  return (
    <LoaderDiv className="loader">
      <LiquidLoader {...loaderProps} />
      <h2>MG Fitness</h2>
    </LoaderDiv>
  );
}

const LoaderDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 5px;
  margin: auto auto;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  h2 {
    color: #915eff;
    font-size: 1.5rem;
  }
`;

export default Loader;
