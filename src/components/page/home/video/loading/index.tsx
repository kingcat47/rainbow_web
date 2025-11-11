import styles from "./styles.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.connecting_animation}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2 className={styles.title}>매칭 중...</h2>
        <p className={styles.description}>취향이 맞는 사람을 찾고 있습니다</p>
      </div>
    </div>
  );
}
