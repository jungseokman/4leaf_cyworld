import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import AppHeader from "../components/AppHeader";

const ParentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const WidthWrapper = styled.section`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5px;
`;

const Cyworld = ({ Component }) => {
  return (
    <>
      <AppHeader />
      <ParentWrapper>
        <WidthWrapper width="calc((100% - 1300px) / 2)"></WidthWrapper>
        <WidthWrapper width="1300px">
          <Component />
        </WidthWrapper>
        <WidthWrapper width="calc((100% - 1300px) / 2)"></WidthWrapper>
      </ParentWrapper>
    </>
  );
};

export default Cyworld;
