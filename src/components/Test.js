import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Test.css";
import "../styles/App.css";

function Test() {
  // 현재 질문 번호 상태 (0부터 시작)
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // MBTI 유형 점수 상태 (초기값은 모두 0)
  const [scores, setScores] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  // 페이지 이동을 위한 함수
  const navigate = useNavigate();

  // 질문 목록
  const questions = [
    {
      id: 1,
      text: "오늘따라 햄부기가 땡기는 날!\n햄부기 가게에 들어왔을 때 나는?",
      options: [
        { text: "혼자 조용히 주문한다", type: "I" },
        { text: "친구에게 같이 먹자고 연락한다", type: "E" },
      ],
    },
    {
      id: 2,
      text: "마침 오늘 나온 신메뉴가 있다!",
      options: [
        { text: "익숙한 메뉴를 주문한다", type: "S" },
        { text: "새로운 메뉴에 도전해본다", type: "N" },
      ],
    },
    {
      id: 3,
      text: "세트 메뉴를 고를 때 나는?",
      options: [
        { text: "무조건 감자튀김을 선택한다", type: "J" },
        { text: "치즈스틱 or 너겟 등\n새로운 걸 시도한다", type: "P" },
      ],
    },
    {
      id: 4,
      text: "감자튀김을 먹을 때 나는?",
      options: [
        { text: "소스를 뿌려서 한꺼번에 먹는다", type: "P" },
        { text: "소스를 따로 찍어가며 먹는다", type: "J" },
      ],
    },
    {
      id: 5,
      text: "음료를 마실 때 나는?",
      options: [
        { text: "얼음 가득 넣어야 시원하다", type: "P" },
        { text: "얼음 없이 진하게 마신다", type: "J" },
      ],
    },
    {
      id: 6,
      text: "테이블을 고를 때 나는?",
      options: [
        { text: "구석진 곳에서 조용히 먹는다", type: "I" },
        { text: "사람 많은 자리도 신경 쓰지 않는다", type: "E" },
      ],
    },
    {
      id: 7,
      text: "햄버거를 먹는 순서는?",
      options: [
        { text: "감자튀김부터 먼저 먹는다", type: "F" },
        { text: "햄버거부터 한입 크게 먹는다", type: "T" },
      ],
    },
    {
      id: 8,
      text: "햄버거가 생각보다 크다면 나는?",
      options: [
        { text: "깔끔하게 나눠서 먹는다", type: "S" },
        { text: "한입에 크게 베어 문다", type: "N" },
      ],
    },
    {
      id: 9,
      text: "친구가 감자튀김을 나눠달라고 한다!",
      options: [
        { text: "쿨하게 나눠준다!", type: "F" },
        { text: "미안하지만 내 감자튀김은 소중하다!", type: "T" },
      ],
    },
    {
      id: 10,
      text: "친구보다 먼저 다 먹는 편?",
      options: [
        { text: "맞다! 빨리 먹는 스타일", type: "J" },
        { text: "천천히 여유롭게 먹는다", type: "P" },
      ],
    },
    {
      id: 11,
      text: "햄버거를 다 먹고 나서 나는?",
      options: [
        { text: "맛 평가를 세세하게 한다", type: "S" },
        { text: "그냥 '맛있었어!' 한마디로 끝", type: "N" },
      ],
    },
    {
      id: 12,
      text: "디저트를 추가할까?",
      options: [
        { text: "배불러도 아이스크림 추가!", type: "P" },
        { text: "배부르면 깔끔하게 끝", type: "J" },
      ],
    },
  ];

  // 사용자가 답변을 선택했을 때 실행되는 함수
  const handleAnswer = (selectedType) => {
    // 선택한 유형의 점수를 증가시킴
    setScores((prevScores) => ({
      ...prevScores,
      [selectedType]: prevScores[selectedType] + 1,
    }));

    // 다음 질문으로 이동 (마지막 질문이면 결과 페이지로 이동)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const mbtiResult = calculateMBTI();
      console.log("계산된 MBTI 값:", mbtiResult);

      sessionStorage.setItem("mbtiResult", mbtiResult); // MBTI 값 저장
      navigate(`/loading/${mbtiResult}`);
    }
  };

  // 최종 MBTI 유형을 계산하는 함수
  const calculateMBTI = () => {
    const { E, I, S, N, T, F, J, P } = scores;

    const getDominant = (a, b) =>
      scores[a] > scores[b]
        ? a
        : scores[a] < scores[b]
        ? b
        : Math.random() < 0.5
        ? a
        : b;

    return (
      getDominant("E", "I") +
      getDominant("S", "N") +
      getDominant("T", "F") +
      getDominant("J", "P")
    );
  };

  return (
    <div className="test-container">
      {/* 진행률 막대바 */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
        ></div>
        <span
          className="progress-emoji"
          style={{ left: `${(currentQuestion / questions.length) * 100}%` }}
        >
          🍔
        </span>
      </div>

      {/* 질문 영역 */}
      <div className="question-container">
        <p className="progress-text">
          {currentQuestion + 1} / {questions.length}
        </p>
        <p className="question-text">{questions[currentQuestion].text}</p>
      </div>

      {/* 답변 버튼 영역 */}
      <div className="button-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswer(option.type)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Test;
