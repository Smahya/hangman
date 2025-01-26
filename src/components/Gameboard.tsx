"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import hamburger from "../../public/icons/hamburger.svg";
import heart from "../../public/icons/heart.svg";

import { Popup } from "@/components/Popup";
import { useGameContext } from "@/context/GameContext";
import { LetterKeyboard } from "@/components/LetterKeyboard";
import { WordTile } from "./WordTile";
import { LIFE_FORCE } from "@/utils/constants";

export const Gameboard = () => {
  const router = useRouter();

  const { category, lifeForce, reset, open, openType } = useGameContext();

  return (
    <div className="page-wrapper">
      <div className="flex items-center justify-between gap-4 mb-10">
        <div className="grid grid-cols-[max-content_1fr] items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="grid place-content-center shadow-[0px_-6px_0px_7px_#9D2DF540_inset] h-24 w-24 rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF]"
          >
            <Image src={hamburger} alt="hamburger" className="" />
          </button>
          <p className="text-white text-7xl  whitespace-nowrap capitalize">
            {category}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white rounded-full px-3 py-2 min-w-[160px]">
            <div
              className="bg-dark-navy h-[13px] rounded-full"
              style={{
                width: `${(lifeForce / LIFE_FORCE) * 100}%`,
              }}
            ></div>
          </div>

          <Image src={heart} alt="heart" className="" />
        </div>
      </div>

      <div className="grid grid-rows-2 gap-20">
        <WordTile />
        <LetterKeyboard />
      </div>

      {open ? <Popup type={openType} playAgain={reset} /> : null}
    </div>
  );
};
