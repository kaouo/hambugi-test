import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/LoadingScreen.css";

/**
 * 로딩 화면 컴포넌트
 * 일정 시간이 지난 후 결과 페이지로 자동 이동
 */
function LoadingScreen() {
  const navigate = useNavigate();
  const { mbtiType } = useParams(); // URL에서 MBTI 값 받기

  useEffect(() => {
    console.log("로딩 페이지에서 받은 MBTI 값:", mbtiType); // ✅ 값 확인용
    setTimeout(() => {
      if (mbtiType) {
        navigate(`/result/${mbtiType}`);
      } else {
        console.error("MBTI 값이 없음! 홈으로 이동합니다.");
        navigate("/");
      }
    }, 3000);
  }, [navigate, mbtiType]);

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
