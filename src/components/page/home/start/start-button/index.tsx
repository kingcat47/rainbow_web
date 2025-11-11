import styles from "./styles.module.scss";

export default function StartButton() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.icons}>
        <img src="/Avatar.svg" alt="start" />
        <img src="/Avatar.svg" alt="start" />
        <img src="/Avatar.svg" alt="start" />
        <img src="/Avatar.svg" alt="start" />
      </div> */}
      <div className={styles.text}>비디오챗 시작하기</div>
    </div>
  );
}
