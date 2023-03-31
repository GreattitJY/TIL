import React from "react";
import styled, { keyframes } from "styled-components";

const Base = styled.div`
  position: relative;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  ${({ circle }) => circle && "border-radius: 50%"};
  background-color: #ddd;

  & + & {
    margin-top: 10px;
  }
`;

const shimmerKeyframe = keyframes`
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translate(150%);
    }
`;

const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${shimmerKeyframe} 2.5s infinite;
`;

const Shimmer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;

const Skeleton = ({ width, height, circle }) => {
  return (
    <Base {...{ width }} {...{ height }} {...{ circle }} animation>
      <ShimmerWrapper>
        <Shimmer />
      </ShimmerWrapper>
    </Base>
  );
};

export default Skeleton;
