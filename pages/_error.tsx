import React from "react";
import {
  Container,
  Main,
  Title,
  Description,
} from "../components/sharedstyles";
import Link from "next/link";

interface ErrorProps {
  statusCode: number | null;
}

const ErrorPage: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <Container>
      <Main>
        <Title>Error {statusCode}</Title>
        <Description>
          {statusCode === 404
            ? "The user you're looking for does not exist."
            : "An unexpected error has occurred."}
        </Description>
        <Link href="/">Go Home</Link>
      </Main>
    </Container>
  );
};

export function getServerSideProps(context) {
  const statusCode = context.res.statusCode;
  return { props: { statusCode } };
}

export default ErrorPage;
