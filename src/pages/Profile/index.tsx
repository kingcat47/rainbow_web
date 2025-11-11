import { useState } from "react";
import Header from "@/components/layout/header";
import MainLayout from "@/components/layout/main";
import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import styles from "./styles.module.scss";

export default function Profile() {
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    {
      id: "music",
      label: "음악",
      description: "다양한 음악 장르를 좋아합니다",
    },
    {
      id: "movie",
      label: "영화/드라마",
      description: "영화와 드라마를 즐깁니다",
    },
    {
      id: "game",
      label: "게임",
      description: "게임을 즐깁니다",
    },
    {
      id: "sports",
      label: "운동/스포츠",
      description: "운동과 스포츠를 좋아합니다",
    },
    {
      id: "travel",
      label: "여행",
      description: "여행을 좋아합니다",
    },
    {
      id: "food",
      label: "음식",
      description: "맛집과 요리를 즐깁니다",
    },
    {
      id: "art",
      label: "예술/문화",
      description: "예술과 문화에 관심이 많습니다",
    },
    {
      id: "tech",
      label: "기술/IT",
      description: "기술과 IT에 관심이 있습니다",
    },
    {
      id: "book",
      label: "독서",
      description: "책을 좋아합니다",
    },
    {
      id: "fashion",
      label: "패션/뷰티",
      description: "패션과 뷰티에 관심이 있습니다",
    },
    {
      id: "photography",
      label: "사진",
      description: "사진 촬영을 좋아합니다",
    },
    {
      id: "pet",
      label: "반려동물",
      description: "반려동물을 키웁니다",
    },
  ];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    if (checked) {
      setSelectedInterests([...selectedInterests, interestId]);
    } else {
      setSelectedInterests(selectedInterests.filter((id) => id !== interestId));
    }
  };

  const handleSave = () => {
    // TODO: 저장 로직 구현
    console.log("Profile data:", {
      nickname,
      age,
      bio,
      interests: selectedInterests,
    });
  };

  const isFormValid = nickname.trim() && age.trim() && bio.trim();

  return (
    <>
      <Header />
      <MainLayout>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>프로필 설정</h1>
            <p className={styles.description}>
              나를 소개해주세요. 당신의 취향과 관심사를 알려주시면
              <br />더 정확한 매칭을 도와드릴 수 있습니다.
            </p>

            <div className={styles.form}>
              {/* 프로필 이미지 섹션 */}
              <div className={styles.section}>
                <h2 className={styles.section_title}>프로필 사진</h2>
                <div className={styles.avatar_section}>
                  <div className={styles.avatar_placeholder}>
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="32"
                        fill="rgba(255,255,255,0.1)"
                      />
                      <path
                        d="M32 20C27.5817 20 24 23.5817 24 28C24 32.4183 27.5817 36 32 36C36.4183 36 40 32.4183 40 28C40 23.5817 36.4183 20 32 20Z"
                        fill="rgba(255,255,255,0.5)"
                      />
                      <path
                        d="M32 38C25.3726 38 20 41.3726 20 48H44C44 41.3726 38.6274 38 32 38Z"
                        fill="rgba(255,255,255,0.5)"
                      />
                    </svg>
                  </div>
                  <Button variant="secondary" size="medium">
                    사진 변경
                  </Button>
                </div>
              </div>

              {/* 기본 정보 섹션 */}
              <div className={styles.section}>
                <h2 className={styles.section_title}>기본 정보</h2>
                <div className={styles.form_grid}>
                  <Input
                    label="닉네임"
                    placeholder="닉네임을 입력해주세요"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                    fullWidth
                    size="large"
                  />
                  <Input
                    label="나이"
                    type="number"
                    placeholder="나이를 입력해주세요"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    fullWidth
                    size="large"
                  />
                </div>
              </div>

              {/* 자기소개 섹션 */}
              <div className={styles.section}>
                <h2 className={styles.section_title}>자기소개</h2>
                <div className={styles.textarea_wrapper}>
                  <label className={styles.textarea_label}>
                    자기소개 <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    className={styles.textarea}
                    placeholder="자신을 자유롭게 소개해주세요. 취향, 관심사, 대화 스타일 등을 적어주시면 더 좋은 매칭을 받을 수 있습니다."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={6}
                    required
                  />
                </div>
              </div>

              {/* 관심사 섹션 */}
              <div className={styles.section}>
                <h2 className={styles.section_title}>내 관심사</h2>
                <p className={styles.section_description}>
                  나의 취향과 관심사를 선택해주세요.
                </p>
                <div className={styles.interests_grid}>
                  {interests.map((interest) => (
                    <div key={interest.id} className={styles.interest_card}>
                      <Checkbox
                        checked={selectedInterests.includes(interest.id)}
                        onCheckedChange={(checked) =>
                          handleInterestChange(interest.id, checked)
                        }
                        label={interest.label}
                        description={interest.description}
                        size="lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 저장 버튼 */}
              <div className={styles.action_buttons}>
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleSave}
                  disabled={!isFormValid}
                  fullWidth
                >
                  프로필 저장
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
