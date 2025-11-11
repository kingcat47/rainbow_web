import styles from "./styles.module.scss";

export interface CategoryItemProps {
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export default function CategoryItem({
  label,
  description,
  icon,
}: CategoryItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>{label}</div>
        <div className={styles.description}>{description}</div>
      </div>
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
}
