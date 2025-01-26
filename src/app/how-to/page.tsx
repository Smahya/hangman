"use client";

import { CircularBtn } from "@/components/CircularBtn";
import Image from "next/image";
import arrow from "../../../public/icons/arrow.svg";
import howto from "../../../public/icons/how-to.svg";
import { useRouter } from "next/navigation";
import { GameButton } from "@/components/GameButton";

export default function HowTo() {
  const router = useRouter();
  return (
    <div className="page-wrapper">
      <div className="grid grid-cols-[max-content_1fr] items-center gap-4">
        <GameButton
          onClick={() => router.back()}
          className="shadow-[0px_-6px_0px_7px_#9D2DF540_inset] h-24 w-24"
        >
          <Image src={arrow} alt="arrow" className="" />
        </GameButton>
        <Image src={howto} alt="play" className="mx-auto" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-16">
        {steps?.map((item) => {
          return (
            <div
              className="bg-white rounded-[40px] px-12 py-16 grid lg:grid-cols-1 grid-cols-[max-content_1fr] gap-10"
              key={item.id}
            >
              <p className="text-blue text-7xl text-left lg:text-center">
                {item.id}
              </p>
              <div className="grid gap-10">
                <p className="text-dark-navy text-5xl text-left lg:text-center">
                  {item.title}
                </p>
                <p className="hidden md:flex text-lignt-purple text-2xl max-w-auto lg:max-w-[288px] mx-auto text-left lg:text-center">
                  {item.description}
                </p>
              </div>
              <p className="flex col-span-full md:hidden text-lignt-purple text-2xl text-left">
                {item.description}
              </p>
            </div>
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
