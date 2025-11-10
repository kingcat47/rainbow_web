import Button from "@/components/ui/button";
import s from "./styles.module.scss";
import { Clock, User } from "lucide-react";

export default function Header() {
  return (
    <div className={s.container}>
      <div className={s.logo}>Logo</div>
      <div className={s.items}>
        <div className={s.item}>
          <Button leadingIcon={<Clock />} size="medium" variant="secondary">
            지난 대화 상대
          </Button>
        </div>
        <div className={s.login}>
          <Button leadingIcon={<User />} size="medium" variant="secondary">
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
