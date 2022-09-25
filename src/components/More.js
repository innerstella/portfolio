import React, { useState } from "react";

const More = () => {
  console.log("more");
  const [url, setUrl] = useState("");
  const onClick = (e) => {
    // if (e.target.innerHTML === "깃허브") {
    //   setUrl("https://github.com/innerstella");
    // }
    const clickedText = e.target.innerHTML;
    {
      clickedText === "깃허브" && setUrl("https://github.com/innerstella");
    }
    {
      clickedText === "티스토리" && setUrl("https://inner-stella.tistory.com/");
    }
    {
      clickedText === "링크드인" &&
        setUrl(
          "https://www.linkedin.com/in/%EC%88%98%EC%A7%80-%EC%B0%A8-7a046b212/"
        );
    }

    window.open(url);
  };

  return (
    <>
      <div>
        <h4>연락</h4>
        <p>inner0509@gmail.com</p>
        <p onClick={onClick}>링크드인</p>
      </div>
      <div>
        <h4>기록</h4>
        <p onClick={onClick} name="github">
          깃허브
        </p>
        <p onClick={onClick} name="tistory">
          티스토리
        </p>
      </div>
    </>
  );
};

export default More;
