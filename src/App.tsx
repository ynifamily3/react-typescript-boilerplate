import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "react-onsenui";
import "./App.css";
// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

export default function App() {
  useEffect(() => {
    console.log("안녕하신가요?");
  }, []);
  return (
    <div>
      <Helmet>
        <title>동적변경</title>
      </Helmet>
      <button type="button">버튼 렌더링</button>
      <div className="test">이것은 글씨입니다.</div>
      <img src={require("./images/img1.jpeg").default} alt="그림" />
      <br />
      <Button>온센 UI 버튼 렌더링</Button>
    </div>
  );
}
