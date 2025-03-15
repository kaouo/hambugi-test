import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/App.css"; // 전체 스타일 적용
import "./styles/index.css"; // 추가적인 기본 스타일 적용

// React 애플리케이션이 렌더링될 루트 요소 가져오기
const root = ReactDOM.createRoot(document.getElementById("root"));

// 브라우저가 새로고침될 때 sessionStorage에 "reload" 값을 저장
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("reload", "true"); // 새로고침 감지 후 저장
});

// React 애플리케이션을 렌더링
root.render(
  <React.StrictMode>
    <Router future={{ v7_relativeSplat: true }}>
      {" "}
      {/* 옵션 추가 */}
      <App />
    </Router>
  </React.StrictMode>
);
