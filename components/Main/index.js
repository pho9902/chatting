import { BodyDiv, Header, Input, UserHeader, Users, WrapDiv } from "./style";

const Main = () => {
  return (
    <WrapDiv>
      <BodyDiv>
        <Header>채팅을 만들어보자</Header>
        외않되?
        <Input br={"5px"}>전송</Input>
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
