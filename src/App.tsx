import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

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
      <div>이것은 글씨입니다.</div>
    </div>
  );
}
