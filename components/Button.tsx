import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Button = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) =>
    isActive ? "rgb(0,115,207)" : "rgb(0,115,207, 0.5)"};
  color: ${({ isActive }) => (isActive ? "white" : "#002E52")};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 0.2em;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? "rgb(0,115,207)" : "rgb(0,115,207, 0.5)"};
  }
`;

export { Button, ButtonsContainer };
