import styled from "styled-components";

const WrapDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BodyDiv = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 80vh;
`;

const Header = styled.h4`
  color: red;
`;

const Users = styled.div`
  width: 20vw;
  border: 1px solid;
`;
const UserHeader = styled.div`
  width: 100%;
  border: 1px solid;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.div`
  border: 1px solid;
  width: 100%;
  height: 10vh;
`;

const SendBtn = styled.button`
  padding: 1rem;
  border: 1px solid;
`;

const Main = () => {
  return (
    <WrapDiv>
      <BodyDiv>
        <Header>채팅을 만들어보자</Header>
        외않되?
        <Input>전송</Input>
      </BodyDiv>
      <Users>
        <UserHeader>
          <span>채팅 참여자 목록</span>
        </UserHeader>
        <span>박현우</span>
      </Users>
    </WrapDiv>
  );
};

export default Main;
