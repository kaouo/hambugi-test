import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Result.css";
import resultBackground from "../assets/images/result-background.png"; // 결과 화면 이미지 불러오기

/**
 * MBTI 결과 페이지 컴포넌트
 * 사용자의 MBTI 유형에 따라 다른 결과를 보여줌
 */
function Result() {
  const navigate = useNavigate(); // 페이지 이동을 위한 Hook
  const { mbti } = useParams(); // URL에서 MBTI 결과 값 가져오기

  // MBTI별 햄부기 유형 설명 객체
  const results = {
    INTJ: {
      title: "전략가 햄부기",
      desc: "계획적이고 독립적인 성향의 햄부기!",
      keywords: ["분석적", "계획적", "독립적"],
    },
    INTP: {
      title: "지적인 햄부기",
      desc: "논리적이고 창의적인 햄부기!",
      keywords: ["논리적", "창의적", "조용한 리더"],
    },
    ENTJ: {
      title: "리더 햄부기",
      desc: "야망 있고 주도적인 햄부기!",
      keywords: ["결단력", "주도적", "야망"],
    },
    ENTP: {
      title: "장난꾸러기 햄부기",
      desc: "톡톡 튀는 아이디어 뱅크 햄부기!",
      keywords: ["재치", "아이디어 뱅크", "논쟁가"],
    },

    INFJ: {
      title: "선지자 햄부기",
      desc: "깊은 통찰력과 배려심을 가진 햄부기!",
      keywords: ["배려심", "통찰력", "신비로운"],
    },
    INFP: {
      title: "감성 햄부기",
      desc: "세상을 따뜻하게 바라보는 햄부기!",
      keywords: ["감성적", "이상주의", "따뜻한 마음"],
    },
    ENFJ: {
      title: "사교왕 햄부기",
      desc: "사람들을 이끄는 친화력 넘치는 햄부기!",
      keywords: ["리더십", "친화력", "배려"],
    },
    ENFP: {
      title: "활발한 햄부기",
      desc: "에너지가 넘치고 창의적인 햄부기!",
      keywords: ["사교적", "모험적", "낙천적"],
    },

    ISTJ: {
      title: "신중한 햄부기",
      desc: "책임감이 강하고 신뢰할 수 있는 햄부기!",
      keywords: ["꼼꼼함", "책임감", "신뢰성"],
    },
    ISFJ: {
      title: "착한 햄부기",
      desc: "세심하고 남을 돕는 것을 좋아하는 햄부기!",
      keywords: ["배려심", "헌신적", "조용한 노력가"],
    },
    ESTJ: {
      title: "카리스마 햄부기",
      desc: "체계적이고 목표 지향적인 햄부기!",
      keywords: ["결단력", "리더십", "실용적"],
    },
    ESFJ: {
      title: "사교적인 햄부기",
      desc: "친절하고 분위기 메이커 역할을 하는 햄부기!",
      keywords: ["친절함", "외향적", "조화"],
    },

    ISTP: {
      title: "모험가 햄부기",
      desc: "직관적이고 실용적인 햄부기!",
      keywords: ["논리적", "실용적", "즉흥적"],
    },
    ISFP: {
      title: "예술가 햄부기",
      desc: "자유롭고 감성적인 햄부기!",
      keywords: ["예술적", "감성적", "자유로운 영혼"],
    },
    ESTP: {
      title: "에너자이저 햄부기",
      desc: "도전적이고 활동적인 햄부기!",
      keywords: ["도전적", "즉흥적", "에너지 넘침"],
    },
    ESFP: {
      title: "흥부자 햄부기",
      desc: "즐거움을 추구하는 햄부기!",
      keywords: ["유쾌한", "사교적", "즉흥적"],
    },
  };

  // MBTI 결과 없을 때 기본값 (ISFP)
  const { title, desc, keywords } = results[mbti] || results.ISFP;

  return (
    <div className="result-container">
      {/* 결과 배경 이미지 */}
      <img src={resultBackground} alt="햄부기 결과" className="result-image" />

      {/* 결과 텍스트 영역 */}
      <div className="result-text">
        <h2>{title}</h2>
        <p>{desc}</p>

        {/* MBTI 유형별 키워드 */}
        <div className="keywords">
          {keywords.map((keyword, index) => (
            <span key={index} className="keyword">
              {keyword}
            </span>
          ))}
        </div>

        {/* 다시 하기 버튼 - 홈으로 이동 */}
        <button className="restart-button" onClick={() => navigate("/")}>
          다시 하기
        </button>
      </div>
    </div>
  );
}

export default Result;
