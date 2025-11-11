import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./styles.module.scss";

export default function Section3() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: "레인보우를 무료로 사용할 수 있나요?",
      answer:
        "네, 레인보우는 기본 기능을 무료로 제공합니다. 취향 기반 매칭, 필터 기능, 스킵 기능 등 핵심 기능을 무료로 이용하실 수 있습니다.",
    },
    {
      question: "레인보우는 어떻게 취향을 분석하나요?",
      answer:
        "사용자가 입력한 취향 데이터와 상호작용 데이터(스킵, 대화 지속 시간 등)를 분석하여 대화 코드가 잘 맞는 사람과 매칭합니다. 시스템이 계속 학습하여 매칭 정확도가 향상됩니다.",
    },
    {
      question: "얼굴 필터 기능은 어떻게 사용하나요?",
      answer:
        "화상채팅 중 다양한 필터를 적용하여 얼굴을 가릴 수 있습니다. 익명성을 보장하면서도 재미있는 요소를 더해 부담 없이 대화를 시작할 수 있습니다.",
    },
    {
      question: "취향이 맞지 않는 사람과 매칭되면 어떻게 하나요?",
      answer:
        "스킵 기능을 통해 취향이 맞지 않는 상대를 건너뛸 수 있습니다. 이러한 데이터는 시스템이 학습하여 향후 더 정확한 매칭을 제공하는 데 활용됩니다.",
    },
    {
      question: "레인보우의 차별점은 무엇인가요?",
      answer:
        "단순 성별/지역 필터가 아닌 취향 기반 매칭을 제공합니다. 외모 부담을 제거하고 대화 코드에 집중하여 매칭 성공률을 극대화하고 사용자 이탈률을 낮추는 것이 핵심 차별점입니다.",
    },
    {
      question: "레인보우의 안전 기능은 어떤 게 있나요?",
      answer:
        "신고 기능, 블록 기능, 자동 모더레이션 시스템 등을 통해 안전한 사용자 경험을 제공합니다. 또한 필터 기능을 통해 익명성을 보장하여 심리적 부담을 줄입니다.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.faq_section}>
      <div className={styles.faq_wrapper}>
        <h2 className={styles.faq_title}>자주 묻는 질문 FAQ</h2>
        <div className={styles.faq_list}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faq_item} ${
                openFaq === index ? styles.faq_item_open : ""
              }`}
            >
              <button
                className={styles.faq_question}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`${styles.faq_icon} ${
                    openFaq === index ? styles.faq_icon_open : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className={styles.faq_answer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
