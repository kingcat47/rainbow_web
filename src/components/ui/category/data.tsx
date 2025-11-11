import {
  Music,
  Film,
  Gamepad2,
  Dumbbell,
  Plane,
  Utensils,
  Palette,
  Code,
  BookOpen,
  Shirt,
  Camera,
  Heart,
} from "lucide-react";
import type { Category } from "./index";

export const categories: Category[] = [
  {
    id: "music",
    label: "음악",
    description: "다양한 음악 장르를 좋아하는 사람",
    icon: <Music />,
  },
  {
    id: "movie",
    label: "영화/드라마",
    description: "영화와 드라마를 즐기는 사람",
    icon: <Film />,
  },
  {
    id: "game",
    label: "게임",
    description: "게임을 즐기는 사람",
    icon: <Gamepad2 />,
  },
  {
    id: "sports",
    label: "운동/스포츠",
    description: "운동과 스포츠를 좋아하는 사람",
    icon: <Dumbbell />,
  },
  {
    id: "travel",
    label: "여행",
    description: "여행을 좋아하는 사람",
    icon: <Plane />,
  },
  {
    id: "food",
    label: "음식",
    description: "맛집과 요리를 즐기는 사람",
    icon: <Utensils />,
  },
  {
    id: "art",
    label: "예술/문화",
    description: "예술과 문화에 관심이 많은 사람",
    icon: <Palette />,
  },
  {
    id: "tech",
    label: "기술/IT",
    description: "기술과 IT에 관심이 있는 사람",
    icon: <Code />,
  },
  {
    id: "book",
    label: "독서",
    description: "책을 좋아하는 사람",
    icon: <BookOpen />,
  },
  {
    id: "fashion",
    label: "패션/뷰티",
    description: "패션과 뷰티에 관심이 있는 사람",
    icon: <Shirt />,
  },
  {
    id: "photography",
    label: "사진",
    description: "사진 촬영을 좋아하는 사람",
    icon: <Camera />,
  },
  {
    id: "pet",
    label: "반려동물",
    description: "반려동물을 키우는 사람",
    icon: <Heart />,
  },
];
