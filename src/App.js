import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import Result from "./components/Result";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const navigate = useNavigate(); // 페이지 이동을 위한 내비게이션 함수

  useEffect(() => {
    // 새로고침 시 무조건 홈 화면으로 이동하도록 설정
    if (sessionStorage.getItem("reload")) {
      sessionStorage.removeItem("reload"); // reload 키를 제거
      navigate("/"); // 홈 화면으로 이동
    }
  }, [navigate]); // navigate 함수가 변경될 때마다 실행

  return (
    <Routes>
      {/* 홈페이지 경로 설정 */}
      <Route path="/" element={<Home />} />

      {/* 테스트 페이지 경로 설정 */}
      <Route path="/test" element={<Test />} />

      {/* 로딩 페이지 경로 설정, MBTI 유형을 URL에서 받음 */}
      <Route path="/loading/:mbtiType" element={<LoadingScreen />} />

      {/* 결과 페이지 경로 설정, MBTI 유형을 URL에서 받음 */}
      <Route path="/result/:mbtiType" element={<Result />} />

      {/* 존재하지 않는 경로로 접근 시 홈 화면으로 이동 */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
