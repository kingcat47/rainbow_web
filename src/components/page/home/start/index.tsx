import StartButton from "./start-button";
import Fillter from "./fillter";
import styles from "./styles.module.scss";

export default function Start() {
  return (
    <div className={styles.container}>
      <StartButton />
      <Fillter />
    </div>
  );
}
