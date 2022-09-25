import React from "react";
import styled from "styled-components";

let IntroWrap = styled.div`
  position: absolute;
  top: 30vh;
  left: 10vw;
  width: 80vw;
`;

let ProfilePic = styled.img`
  display: flex;
  justify-content: center;
  width: 17vw;
`;
let Text1 = styled.p`
  display: flex;
  justify-content: center;

  font-size: 3.7vh;
  font-weight: 700;
  font-family: "SUIT", sans-serif;
`;
let Text2 = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;

  font-size: 2.5vh;
  font-weight: 500;
  font-family: "SUIT", sans-serif;
`;

const Intro = () => {
  return (
    <>
      <IntroWrap>
        <center>
          <ProfilePic alt="profile" src="img/profile.png" />
        </center>
        <Text1>Learn by Doing</Text1>
        <Text2>
          모두가 즐겁고 편리한 일상을 보낼 수 있는 서비스를 직접 만들며 공부하고
          배우는 FE 개발자입니다.
        </Text2>
      </IntroWrap>
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>Flutter</span>
    </>
  );
};

export default Intro;
