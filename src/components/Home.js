import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // sessionStorage에서 "reload" 키가 있으면 강제 새로고침
    if (sessionStorage.getItem("reload")) {
      sessionStorage.removeItem("reload"); // 저장된 키 삭제
      window.location.reload(); // 강제 새로고침
    }
  }, []);

  return (
    <div className="home-container">
      {/* 테스트 제목 */}
      <h1>🍔 나만의 햄부기 테스트 🍔</h1>
      <p>포트폴리오용으로 가볍게 제작해보았습니다.</p>

      {/* 테스트 시작 버튼 */}
      <button className="start-button" onClick={() => navigate("/test")}>
        테스트 시작하기
      </button>

      {/* 창작자 정보 */}
      <footer className="footer">
        <p> © 2025 햄부기 테스트 by 가잉 </p>
        <p>
          <a href="mailto:iamkaouo@gmail.com">iamkaouo@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
