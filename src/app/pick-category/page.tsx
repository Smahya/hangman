"use client";

import Image from "next/image";
import arrow from "../../../public/icons/arrow.svg";
import pickCat from "../../../public/icons/pick-category.svg";
import data from "../../data.json";
import { useRouter } from "next/navigation";
import { GameButton } from "@/components/GameButton";

export default function PictCategory() {
  const router = useRouter();
  return (
    <div className="page-wrapper">
      <div className="grid grid-cols-[max-content_1fr] items-center gap-4">
        <GameButton
          onClick={() => router.back()}
          className="h-24 w-24 shadow-[0px_-6px_0px_7px_#9D2DF540_inset]"
        >
          <Image src={arrow} alt="arrow" className="" />
        </GameButton>
        <Image
          src={pickCat}
          alt="category"
          className="mx-auto object-contain"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {Object.keys(data?.categories)?.map((item) => {
          return (
            <button
              onClick={() => router.push(`/pick-category/${encodeURI(item)}`)}
              className="bg-blue hover:bg-blue/80 rounded-[40px] px-12 py-16 items-center shadow-[0px_-2px_0px_3px_#140E66_inset,0px_1px_0px_6px_#3C74FF_inset]"
              key={item}
            >
              <p className="text-white text-3xl lg:text-4xl xl:text-5xl text-center whitespace-nowrap">
                {item}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const steps = [
  {
    id: "01",
    title: "Choose a category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    id: "02",
    title: "Guess letters",
    description:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    id: "03",
    title: "Win or lose",
    description:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];
