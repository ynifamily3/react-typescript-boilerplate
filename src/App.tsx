import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
import ons from "onsenui";
import { Page, Button } from "react-onsenui";

// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "./App.css";

export default function App() {
  const handleClick = () => {
    ons.notification.alert("네이티브 스타일 알림 메시지!");
  };
  useEffect(() => {
    console.log("안녕하신가요?");
  }, []);
  return (
    <Page>
      <div>글씨 출력</div>
      <div>
        <img
          src={require("./images/img1.jpeg").default}
          alt="이미지"
          style={{
            width: "100%",
            maxWidth: "423px",
            height: "auto",
          }}
        />
      </div>
      <Button onClick={handleClick}>클릭해보세요!</Button>
    </Page>
  );
}
