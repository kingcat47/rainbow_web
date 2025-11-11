import { useState } from "react";
import Header from "@/components/layout/header";
import MainLayout from "@/components/layout/main";
import Input from "@/components/ui/input";
import Category from "@/components/ui/category";
import { categories } from "@/components/ui/category/data";
import Button from "@/components/ui/button";
import styles from "./styles.module.scss";

export default function Type() {
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSave = () => {
    // TODO: 저장 로직 구현
    console.log("Type data:", {
      country,
      age,
      gender,
      selectedCategories,
    });
  };

  return (
    <>
      <Header />
      <MainLayout>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>취향 카테고리 설정</h1>
            <p className={styles.description}>
              만나고 싶은 사람들의 취향을 선택해주세요.
              <br />
              선택한 취향과 비슷한 사람들과 매칭됩니다.
            </p>

            <div className={styles.form}>
              {/* 나이, 국가, 성별 섹션 */}
              <div className={styles.section}>
                <h2 className={styles.section_title}>기본 정보</h2>
                <div className={styles.form_grid}>
                  <Input
                    label="나이"
                    placeholder="나이를 입력해주세요"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    fullWidth
                    size="large"
                  />
                  <div className={styles.select_wrapper}>
                    <label className={styles.select_label}>국가</label>
                    <select
                      className={styles.select}
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">선택하지 않음</option>
                      <option value="KR">대한민국</option>
                      <option value="US">미국</option>
                      <option value="JP">일본</option>
                      <option value="CN">중국</option>
                      <option value="GB">영국</option>
                      <option value="FR">프랑스</option>
                      <option value="DE">독일</option>
                      <option value="ES">스페인</option>
                      <option value="IT">이탈리아</option>
                      <option value="CA">캐나다</option>
                      <option value="AU">호주</option>
                      <option value="BR">브라질</option>
                      <option value="MX">멕시코</option>
                      <option value="IN">인도</option>
                      <option value="RU">러시아</option>
                      <option value="OTHER">기타</option>
                    </select>
                  </div>
                  <div className={styles.select_wrapper}>
                    <label className={styles.select_label}>성별</label>
                    <select
                      className={styles.select}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">선택하지 않음</option>
                      <option value="male">남성</option>
                      <option value="female">여성</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 취향 카테고리 섹션 */}
              <div className={styles.section}>
                <h2 className={styles.section_title}>취향 카테고리</h2>
                <p className={styles.section_description}>
                  만나고 싶은 사람들의 취향을 선택해주세요.
                </p>
                <Category
                  categories={categories}
                  selectedIds={selectedCategories}
                  onCategoryToggle={handleCategoryToggle}
                />
              </div>

              {/* 저장 버튼 */}
              <div className={styles.action_buttons}>
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleSave}
                  fullWidth
                >
                  설정 저장
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
