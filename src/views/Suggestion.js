import React from "react";
import styled from "styled-components";
import { WhoToFollow } from "../components/WhoToFollow";

const Wrapper = styled.div`
	position: relative;
  padding: 1rem;
  min-height: 100vh;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Suggestion = () => {
  return (
    <Wrapper>
      <WhoToFollow />
    </Wrapper>
  );
};
