import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(""); // 별명 상태 저장

  // 닉네임 저장 및 테스트 시작
  const handleStart = () => {
    const trimmedNickname = nickname.trim(); // 공백 제거
    if (/^[가-힣]{1,2}$/.test(trimmedNickname)) {
      // 한글 2글자 이내 허용
      localStorage.setItem("nickname", trimmedNickname); // 별명 저장
      navigate("/test"); // 테스트 페이지로 이동
    } else {
      alert("이름(별명)을 2글자 이내로 입력해주세요!");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("reload")) {
      sessionStorage.removeItem("reload");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="home-container">
      {/* 테스트 제목 */}
      <h1>🍔 나만의 햄부기 테스트 🍔</h1>
      <p className="nickname-guide">* 2글자 이내 한글로 입력해주세요</p>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        maxLength={2}
        placeholder="이름(별명) 입력"
        className="nickname-input"
      />

      {/* 테스트 시작 버튼 */}
      <button className="start-button" onClick={handleStart}>
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
