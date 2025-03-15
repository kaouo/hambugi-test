import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Result.css";
import resultBackground from "../assets/images/result-background.png"; // 결과 화면 이미지 불러오기

function Result() {
  const navigate = useNavigate();
  const { mbti } = useParams();
  const nickname = localStorage.getItem("nickname") || "익명의";
  const [loading, setLoading] = useState(true);

  console.log("✅ URL에서 받은 MBTI 값:", mbti);

  // MBTI별 결과 이미지 경로
  const imagePath = require(`../assets/images/${mbti?.toUpperCase()}.png`);

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
      keywords: [
        "상상의 나라",
        "내가 꿈꾸는 세상 만들기",
        "마음이 따뜻한 사람",
        "누군가의 진심 어린 응원이 필요해",
        "가끔 감정 깊이 빠질 때가 있어",
      ],
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
      keywords: [""],
    },
    ISFP: {
      title: "예술가",
      desc: "자유롭고 감성적인 햄부기!",
      keywords: [
        "즉흥 조아",
        "내 감정을 중요하게 생각해",
        "자유롭고 여유로운 거",
        "남에게 피해주는 거 극혐",
        "나만의 감성을 담은 무언가를 만들고 싶어",
      ],
    },
    ESTP: {
      title: "에너자이저 햄부기",
      desc: "도전적이고 활동적인 햄부기!",
      keywords: ["도전적", "즉흥적", "에너지 넘침"],
    },
    ESFP: {
      title: "흥부자",
      desc: "즐거움을 추구하는 햄부기!",
      keywords: ["유쾌한", "사교적", "즉흥적"],
    },
  };

  // MBTI 값이 undefined일 가능성 방지 (소문자로 들어올 경우 대비)
  const result = results[mbti?.toUpperCase()];

  // MBTI 값이 없을 경우, 홈으로 이동 (1초 대기)
  useEffect(() => {
    if (!mbti) {
      console.error("잘못된 MBTI 값이 전달됨:", mbti);
      setTimeout(() => navigate("/"), 1000);
    } else {
      setLoading(false); // 정상적으로 값이 로드되면 로딩 해제
    }
  }, [mbti, navigate]);

  // 로딩 중 화면 표시
  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  // 결과가 없는 경우, 렌더링 중단
  if (!result) return null;

  const { title, desc, keywords } = result;

  return (
    <div className="result-container">
      <div className="image-wrapper">
        <p className="hambugi-type">
          {title.split(" ")[0]} {nickname}부기
        </p>

        {/* MBTI에 맞는 이미지 표시 */}
        <img src={imagePath} alt={title} className="result-image" />

        <div className="keywords-overlay">
          {keywords.map((keyword, index) => (
            <span key={index} className={`keyword keyword-${index}`}>
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <button className="restart-button" onClick={() => navigate("/")}>
        다시 하기
      </button>
    </div>
  );
}

export default Result;
