import Header from "@/components/layout/header";
import MainLayout from "@/components/layout/main";
import Category from "@/components/ui/category";
import { categories } from "@/components/ui/category/data";
import styles from "./styles.module.scss";

export default function Type() {
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

            <Category categories={categories} />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
