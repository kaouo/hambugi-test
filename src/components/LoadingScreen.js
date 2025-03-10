import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoadingScreen.css";

/**
 * 로딩 화면 컴포넌트
 * 일정 시간이 지난 후 결과 페이지로 자동 이동
 */
function LoadingScreen() {
  const navigate = useNavigate(); // 페이지 이동을 위한 React Router Hook

  useEffect(() => {
    setTimeout(() => {
      // 3초 후 결과 페이지로 이동 (임시로 설정)
      navigate("/result/ISFP");
    }, 3000);
  }, [navigate]); // navigate가 변경될 때만 실행

  return (
    <div className="loader-container">
      {/* 회전하는 햄버거 이모지 (로딩 효과) */}
      <div className="burger-loader">🍔</div>

      {/* 로딩중 메시지 표시 */}
      <p>나만의 햄부기 찾는 중...</p>
    </div>
  );
}

export default LoadingScreen;
