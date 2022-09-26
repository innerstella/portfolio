import React from "react";
import { Link } from "react-scroll";

import styled from "styled-components";
const HeadWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 13vh;
  background: white;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
`;

const Title = styled.span`
  font-size: 4vh;
  font-family: "SUIT", sans-serif;
  font-weight: 800;
  position: absolute;
  left: 5vh;
  top: 2vh;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40vw;
  height: 100px;
  position: relative;
  left: 17vw;
`;
const Menu = styled.p`
  font-size: 2.5vh;
  font-family: "SUIT", sans-serif;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.hr`
  position: absolute;
  width: 100vw;
  top: 9vh;
  border: 1px solid black;
  position: fixed;
  z-index: 11;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 30vh;
  left: 10vw;
`;
const ProfilePic = styled.img`
  display: flex;
  justify-content: center;
  width: 17vw;
`;
const Text1 = styled.p`
  display: flex;
  justify-content: center;

  font-size: 3.7vh;
  font-weight: 700;
  font-family: "SUIT", sans-serif;
`;
const Text2 = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;

  font-size: 2.5vh;
  font-weight: 500;
  font-family: "SUIT", sans-serif;
  width: 60vw;
`;
const Text3 = styled.span`
  font-size: 2.5vh;
  font-weight: 600;
  font-family: "SUIT", sans-serif;
  border: 1px solid black;
  padding: 2vh 3vw;
  margin: 1vh 1vw;
`;
const Stack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50vw;
`;
const Text4 = styled.p`
  font-size: 3.5vh;
  font-weight: 700;
  font-family: "SUIT", sans-serif;
`;
const Sites = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;
`;
const SiteImg = styled.img`
  width: 20vw;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
`;
const Text5 = styled.p`
  font-size: 2.5vh;
  font-weight: 400;
  font-family: "SUIT", sans-serif;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;
const MoreWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
`;
const Text6 = styled.p`
  font-size: 2vh;
  font-weight: 400;
  font-family: "SUIT", sans-serif;
  text-align: center;
  position: relative;
  top: 30vh;
`;
const Col = styled.div`
  padding-right: 15vw;
`;

const Home = () => {
  const onClick = (e) => {
    const clickedText = e.target.innerHTML;
    {
      clickedText === "깃허브" && window.open("https://github.com/innerstella");
    }
    {
      clickedText === "티스토리" &&
        window.open("https://inner-stella.tistory.com/");
    }
    {
      clickedText === "링크드인" &&
        window.open(
          "https://www.linkedin.com/in/%EC%88%98%EC%A7%80-%EC%B0%A8-7a046b212/"
        );
    }
  };
  const onClickImg = (e) => {
    console.log(e.target.alt);
    const clickedSite = e.target.alt;
    {
      clickedSite === "hotpot" &&
        window.open("https://mara-source-dictionary.netlify.app/");
    }
    {
      clickedSite === "michelin" &&
        window.open("https://twitter-michelin-guide.netlify.app/");
    }
    {
      clickedSite === "water" &&
        window.open("https://hey-hows-the-water.netlify.app/");
    }
  };

  return (
    <>
      <HeadWrap>
        <Title>INNERSTELLA</Title>
        <MenuWrap>
          <Menu>
            <Link to="intro" smooth={true} duration={500}>
              소개
            </Link>
          </Menu>

          <Menu>
            <Link to="project" smooth={true} duration={500}>
              프로젝트
            </Link>
          </Menu>
          <Link to="more" smooth={true} duration={500}>
            <Menu>더보기</Menu>
          </Link>
        </MenuWrap>
      </HeadWrap>
      <Line />

      <Wrapper>
        <div name="intro">
          <center>
            <ProfilePic alt="profile" src="img/profile.png" />
            <Text1>Learn by Doing</Text1>
            <Text2>
              모두가 즐겁고 편리한 일상을 보낼 수 있는 서비스를 직접 만들며
            </Text2>
            <Text2>공부하고 배우는 FE 개발자입니다.</Text2>
          </center>

          <br />
          <br />
          <center>
            <Stack>
              <Text3>HTML</Text3>
              <Text3>CSS</Text3>
              <Text3>JavaScript</Text3>
              <Text3>React</Text3>
              <Text3>Flutter</Text3>
            </Stack>
          </center>
        </div>

        <div name="project">
          <br />
          <br />
          <br />
          <br />

          <Text4>Project</Text4>
          <br />

          <Sites>
            <SiteImg
              onClick={onClickImg}
              alt="hotpot"
              src="/img/hotpot.jpg"
            ></SiteImg>
            <SiteImg
              onClick={onClickImg}
              alt="michelin"
              src="/img/michelin.jpg"
            ></SiteImg>
            <SiteImg
              onClick={onClickImg}
              alt="water"
              src="/img/water.jpg"
            ></SiteImg>
          </Sites>
        </div>

        <div name="more">
          <br />
          <br />
          <br />
          <br />

          <MoreWrap>
            <Col>
              <Text4>연락</Text4>
              <Text5>inner0509@gmail.com</Text5>
              <Text5 onClick={onClick}>링크드인</Text5>
            </Col>
            <Col>
              <Text4>기록</Text4>
              <Text5 onClick={onClick} name="github">
                깃허브
              </Text5>
              <Text5 onClick={onClick} name="tistory">
                티스토리
              </Text5>
            </Col>
          </MoreWrap>
        </div>
        <br />
        <Text6>&copy; 2022 INNERSTELLA</Text6>
      </Wrapper>
    </>
  );
};

export default Home;
