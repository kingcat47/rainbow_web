import Loading from "./loading";
import OnlyVoice from "./only-voice";
import Camera from "./camera";
import Default from "./defualt";
import styles from "./styles.module.scss";

export type VideoMode = "loading" | "only-voice" | "camera" | "default";

interface VideoProps {
  mode?: VideoMode;
  remoteStream?: MediaStream | null;
}

export default function Video({
  mode = "loading",
  remoteStream = null,
}: VideoProps) {
  return (
    <div className={styles.container}>
      {mode === "loading" && <Loading />}
      {mode === "only-voice" && <OnlyVoice />}
      {mode === "camera" && <Camera />}
      {mode === "default" && <Default remoteStream={remoteStream} />}
    </div>
  );
}
