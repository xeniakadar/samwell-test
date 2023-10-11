import styled from "styled-components";
import { FaStar, FaUser, FaArrowUp } from "react-icons/fa";

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

  @media (max-width: 600px) {
    font-size: 3rem;
  }

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

const DashCard = styled.div`
  background: #3498db;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 179px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 600px) {
    width: calc(100% - 2rem);
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  svg {
    font-size: 2rem;
  }
`;

const InfoCard = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    max-width: 100%;
  }

  h2 {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  h3 {
    margin: 1rem 0;
    color: #555;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const StyledTable = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    max-width: 100%;
    th,
    td {
      padding: 0.25rem;
    }
  }

  th,
  td {
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #3498db;
    color: white;
  }

  tr {
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: none;
    }
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

const Avatar = styled.div`
  background-color: #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
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
  DashCard,
  InfoCard,
  Avatar,
  BoldText,
};
