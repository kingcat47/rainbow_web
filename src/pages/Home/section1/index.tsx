import { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Section1() {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    // 사용자 카메라 스트림 가져오기
    const getLocalStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("카메라 접근 실패:", error);
      }
    };

    getLocalStream();

    // cleanup
    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      if (remoteStream) {
        remoteStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.video_grid}>
        {/* 왼쪽: 본인 화면 */}
        <div className={styles.local_section}>
          <div className={styles.video_wrapper}>
            <video
              ref={localVideoRef}
              className={styles.video}
              autoPlay
              muted
              playsInline
            />
            {!localStream && (
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
            <div className={styles.video_label}>나</div>
          </div>
        </div>

        {/* 오른쪽: 상대방 화면 */}
        <div className={styles.remote_section}>
          <div className={styles.video_wrapper}>
            <video
              ref={remoteVideoRef}
              className={styles.video}
              autoPlay
              playsInline
            />
            {!remoteStream && (
              <div className={styles.placeholder}>
                <div className={styles.placeholder_content}>
                  <div className={styles.connecting_animation}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p className={styles.placeholder_text}>
                    상대방 연결 대기 중...
                  </p>
                </div>
              </div>
            )}
            <div className={styles.video_label}>상대방</div>
          </div>
        </div>
      </div>
    </div>
  );
}
