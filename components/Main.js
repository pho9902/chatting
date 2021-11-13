import styled from "styled-components";

const BodyDiv = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.h4`
  color: red;
`;

const Main = () => {
  return (
    <div>
      <BodyDiv>
        <Header>채팅을 만들어보자</Header>
        외않되?
      </BodyDiv>
    </div>
  );
};

export default Main;
