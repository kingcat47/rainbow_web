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
  selectedIds?: string[];
  onCategoryToggle?: (categoryId: string) => void;
}

export default function Category({
  categories,
  className,
  selectedIds = [],
  onCategoryToggle,
}: CategoryProps) {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          label={category.label}
          description={category.description}
          icon={category.icon}
          isSelected={selectedIds.includes(category.id)}
          onClick={() => onCategoryToggle?.(category.id)}
        />
      ))}
    </div>
  );
}
