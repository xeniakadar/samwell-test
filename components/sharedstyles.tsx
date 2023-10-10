import styled from "styled-components";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;

  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: none;
    }
    a {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;

const StyledTable = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin-bottom: 2rem;

  th,
  td {
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #f7f7f7;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  Summary,
  UserList,
  StyledTable,
};
