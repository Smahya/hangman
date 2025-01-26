import React from "react";
import { useParams } from "next/navigation";
import data from "../data.json";
import { Category } from "@/types";
import { Categories } from "@/types";
import { LIFE_FORCE } from "@/utils/constants";

export const usePlayGame = () => {
  const [selectedLetters, setSelectedLetters] = React.useState<string[]>([]);
  const [lifeForce, setLifeForce] = React.useState(LIFE_FORCE);
  const [open, setOpen] = React.useState(false);
  const [openType, setOpenType] = React.useState<"paused" | "loose" | "win">();
  const params = useParams();

  const category = React.useMemo(
    () => decodeURI(params.category as string) as Category,
    [params]
  );

  const categoryData = React.useMemo(() => {
    const categories = data.categories as Categories;
    return categories[category];
  }, [category]);

  const [initialData, setInitialData] = React.useState(categoryData);

  const alphabets = React.useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  }, []);

  const categoryPickedAtRandom = React.useMemo(() => {
    const filteredList = initialData?.filter((item) => !item.selected);
    const randomIndex = Math.floor(Math.random() * filteredList?.length);

    const selectedCategory = filteredList[randomIndex];
    return selectedCategory;
  }, [initialData]);

  const letterArrays = React.useMemo(() => {
    return convertToLetterArrays(categoryPickedAtRandom?.name || "");
  }, [categoryPickedAtRandom]);

  function convertToLetterArrays(str: string): string[][] {
    return str.split(" ").map((word) => word.toUpperCase().split(""));
  }

  function isLetterCorrect(letter: string) {
    return categoryPickedAtRandom?.name?.toUpperCase()?.includes(letter);
  }

  function onLetterClick(letter: string) {
    const hasLetter = isLetterCorrect(letter);
    if (!hasLetter) return setLifeForce((prev) => prev - 1);
    setSelectedLetters((prev) =>
      prev?.includes(letter) ? [...prev] : [...prev, letter]
    );
  }

  function reset() {
    setInitialData((prev) =>
      prev?.map((category) => {
        return {
          ...category,
          selected:
            category.name?.toLowerCase() ===
            categoryPickedAtRandom?.name?.toLowerCase()
              ? !category.selected
              : category.selected,
        };
      })
    );
    setSelectedLetters([]);
    setLifeForce(LIFE_FORCE);
    setOpen(false);
  }

  function action(type: "paused" | "win" | "loose") {
    setTimeout(() => {
      setOpenType(type);
      setOpen(true);
    }, 1000);
  }

  React.useEffect(() => {
    const loose = lifeForce === 0;
    const hasWon = categoryPickedAtRandom?.name
      ?.split("")
      ?.every((letter) => selectedLetters?.includes(letter?.toUpperCase()));

    if (loose) {
      action("loose");
    } else if (hasWon) {
      action("win");
    }
  }, [lifeForce, categoryPickedAtRandom, selectedLetters, initialData]);

  return {
    open,
    reset,
    action,
    category,
    openType,
    alphabets,
    lifeForce,
    letterArrays,
    onLetterClick,
    isLetterCorrect,
    selectedLetters,
  };
};
