import React from "react";
import More from "../components/More";
import Intro from "../components/Intro";
import Project from "../components/Project";
import { Link } from "react-scroll";
import { useState } from "react";

import styled from "styled-components";
const HeadWrap = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  padding: 5vh 100vw;
  background: white;
  z-index: 10;
`;

const Bg = styled.div`
  background: #f2f2f2;
  width: 100vw;
  z-index; 2;
`;
const Title = styled.span`
  font-size: 4vh;
  font-family: "SUIT", sans-serif;
  font-weight: 800;
  position: absolute;
  left: 5vh;
  top: 2vh;
`;
const Menu1 = styled.span`
  font-size: 2.5vh;
  font-family: "SUIT", sans-serif;
  font-weight: 600;
  position: absolute;
  top: 3vh;
  left: 70vw;
`;
const Menu2 = styled.span`
  font-size: 2.5vh;
  font-family: "SUIT", sans-serif;
  font-weight: 600;
  position: absolute;
  top: 3vh;
  left: 80vw;
`;
const Menu3 = styled.span`
  font-size: 2.5vh;
  font-family: "SUIT", sans-serif;
  font-weight: 600;
  position: absolute;
  top: 3vh;
  left: 90vw;
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
`;
const Text5 = styled.p`
  font-size: 2.5vh;
  font-weight: 400;
  font-family: "SUIT", sans-serif;
  text-align: left;
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
        <Link to="intro" smooth={true} duration={500}>
          <Menu1>소개</Menu1>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <Menu2>프로젝트</Menu2>
        </Link>
        <Link to="more" smooth={true} duration={500}>
          <Menu3>더보기</Menu3>
        </Link>
      </HeadWrap>
      <Line />

      <Bg>
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
          <Text6>&copy; 2022 INNERSTELLA</Text6>
        </Wrapper>
      </Bg>
    </>
  );
};

export default Home;
