import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => (
  <>
    <LoaderContainer>
      <Blob0 />
      <Blob1 />
      <Blob2 />
      <Blob3 />
      <Blob4 />
      <Blob5 />
    </LoaderContainer>
  </>
);
const animate3 = keyframes`
25%,
75% {
  transform: translateX(1.5rem) scale(0.75);
}

95% {
  transform: translateX(0) scale(1);
}
`;
const animate2 = keyframes`
25%,
75% {
  transform: translateX(-1.5rem) scale(0.75);
}

95% {
  transform: translateX(0) scale(1);
}
`;
const animate1 = keyframes`
25% {
  transform: translateX(-1.5rem) scale(0.75);
}

50%,
75% {
  transform: translateX(-4.5rem) scale(0.6);
}

95% {
  transform: translateX(0) scale(1);
}
`;
const animate4 = keyframes`
25% {
  transform: translateX(1.5rem) scale(0.75);
}

50%,
75% {
  transform: translateX(4.5rem) scale(0.6);
}

95% {
  transform: translateX(0) scale(1);
}
`;
const animate5 = keyframes`
25% {
  transform: translateX(1.5rem) scale(0.75);
}

50% {
  transform: translateX(4.5rem) scale(0.6);
}

75% {
  transform: translateX(7.5rem) scale(0.5);
}

95% {
  transform: translateX(0) scale(1);
}
`;
const animate0 = keyframes`
25% {
  transform: translateX(-1.5rem) scale(0.75);
}

50% {
  transform: translateX(-4.5rem) scale(0.6);
}

75% {
  transform: translateX(-7.5rem) scale(0.5);
}

95% {
  transform: translateX(0) scale(1);
}
`;

const Blob = styled.div`
  width: 1rem;
  height: 1rem;
  background: #75c6d9;
  border-radius: 50%;
  position: relative;
  left: calc(50% - 1rem);
  top: calc(50% - 1rem);
  box-shadow: 0 0 1rem rgba(255, 255, 255, 0.25);
`;

const Blob0 = styled(Blob)`
  animation: 1s ${animate0} infinite;
`;
const Blob1 = styled(Blob)`
  animation: 1s ${animate1} infinite;
`;
const Blob2 = styled(Blob)`
  animation: 1s ${animate2} infinite;
`;
const Blob3 = styled(Blob)`
  animation: 1s ${animate3} infinite;
`;
const Blob4 = styled(Blob)`
  animation: 1s ${animate4} infinite;
`;
const Blob5 = styled(Blob)`
  animation: 1s ${animate5} infinite;
`;
const LoaderContainer = styled.div`
  height: 80px;
  display: flex;
`;

export default Loader;
