import { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    // 카메라 스트림 가져오기
    const getCameraStream = async () => {
      try {
        const cameraStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(cameraStream);
        if (videoRef.current) {
          videoRef.current.srcObject = cameraStream;
        }
      } catch (error) {
        console.error("카메라 접근 실패:", error);
      }
    };

    getCameraStream();

    // cleanup
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        playsInline
      />
      {!stream && (
        <div className={styles.placeholder}>
          <div className={styles.placeholder_content}>
            <div className={styles.connecting_animation}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className={styles.placeholder_text}>카메라 로딩 중...</p>
          </div>
        </div>
      )}
    </div>
  );
}
