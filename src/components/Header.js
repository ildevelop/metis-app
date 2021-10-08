import React from "react";
import styled from "styled-components";

const Header = ({ children }) => {
  return (
    <Container>
      <InnerHeader>
        <Title>
          <h1>Welcome to the Metis Web App </h1>
          <p>Please select the database table which we can start checking</p>
        </Title>

        {children}
      </InnerHeader>
    </Container>
  );
};

const InnerHeader = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  justify-content: start;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  text-align: center;
  background: linear-gradient(#5b32b4 0%, #41b7d3 100%);
  color: white;
`;
const Title = styled.div`
  margin-top: 40px;
`;

export default Header;
