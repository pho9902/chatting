import styled from "styled-components";

export const WrapDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BodyDiv = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 80vh;
`;

export const Header = styled.h4`
  color: red;
`;

export const Users = styled.div`
  width: 20vw;
  border: 1px solid;
`;
export const UserHeader = styled.div`
  width: 100%;
  border: 1px solid;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.div`
  border: 1px solid;
  width: 100%;
  height: 10vh;
  border-radius: ${props => props.br};
`;

export const SendBtn = styled.button`
  padding: 1rem;
  border: 1px solid;
`;
