import { useState } from "react";
import Header from "@/components/layout/header";
import MainLayout from "@/components/layout/main";
import Checkbox from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import styles from "./styles.module.scss";

export default function Type() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    {
      id: "music",
      label: "음악",
      description: "다양한 음악 장르를 좋아하는 사람",
    },
    {
      id: "movie",
      label: "영화/드라마",
      description: "영화와 드라마를 즐기는 사람",
    },
    { id: "game", label: "게임", description: "게임을 즐기는 사람" },
    {
      id: "sports",
      label: "운동/스포츠",
      description: "운동과 스포츠를 좋아하는 사람",
    },
    { id: "travel", label: "여행", description: "여행을 좋아하는 사람" },
    { id: "food", label: "음식", description: "맛집과 요리를 즐기는 사람" },
    {
      id: "art",
      label: "예술/문화",
      description: "예술과 문화에 관심이 많은 사람",
    },
    {
      id: "tech",
      label: "기술/IT",
      description: "기술과 IT에 관심이 있는 사람",
    },
    { id: "book", label: "독서", description: "책을 좋아하는 사람" },
    {
      id: "fashion",
      label: "패션/뷰티",
      description: "패션과 뷰티에 관심이 있는 사람",
    },
    {
      id: "photography",
      label: "사진",
      description: "사진 촬영을 좋아하는 사람",
    },
    { id: "pet", label: "반려동물", description: "반려동물을 키우는 사람" },
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    }
  };

  const handleSave = () => {
    // TODO: 저장 로직 구현
    console.log("Selected categories:", selectedCategories);
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

            <div className={styles.categories_grid}>
              {categories.map((category) => (
                <div key={category.id} className={styles.category_card}>
                  <Checkbox
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) =>
                      handleCategoryChange(category.id, checked)
                    }
                    label={category.label}
                    description={category.description}
                    size="lg"
                  />
                </div>
              ))}
            </div>

            <div className={styles.action_buttons}>
              <Button
                variant="primary"
                size="large"
                onClick={handleSave}
                disabled={selectedCategories.length === 0}
                fullWidth
              >
                저장하기 ({selectedCategories.length})
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
