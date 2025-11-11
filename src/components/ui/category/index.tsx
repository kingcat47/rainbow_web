import CategoryItem from "./category-item";
import styles from "./styles.module.scss";

export interface Category {
  id: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export interface CategoryProps {
  categories: Category[];
  className?: string;
}

export default function Category({ categories, className }: CategoryProps) {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          label={category.label}
          description={category.description}
          icon={category.icon}
        />
      ))}
    </div>
  );
}
