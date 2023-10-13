import React from "react";
import {
  Container,
  Main,
  Title,
  Description,
} from "../components/sharedstyles";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <Container>
      <Main>
        <Title>404 - Page Not Found</Title>
        <Description>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Description>
        <Link href="/">Go Back</Link>
      </Main>
    </Container>
  );
};

export default Custom404;
