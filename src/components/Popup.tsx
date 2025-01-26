"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Paused from "../../public/icons/paused.svg";
import Win from "../../public/icons/you-win.svg";
import Loose from "../../public/icons/you-lose.svg";
import { Button } from "@/components";

type Props = {
  type?: "paused" | "win" | "loose";
  playAgain?: () => void;
  continuePlay?: () => void;
};

export const Popup = ({ type = "paused", playAgain, continuePlay }: Props) => {
  const router = useRouter();

  const headers: Record<string, any> = {
    paused: Paused,
    win: Win,
    loose: Loose,
  };
  return (
    <div className="fixed top-0 left-0 right-0 overflow-hidden w-full bg-gradient-to-b from-[#1A0337] via-[#131381]/30 to-[#35B6FF] flex h-screen flex-col items-center">
      <div className="w-max h-max m-auto">
        <Image
          src={headers[type]}
          alt="logo"
          className="translate-y-10 translate-x-40"
        />

        <div
          className={`gap-8 h-[500px] w-[590px] max-w-[98vw] rounded-[72px] 
          bg-gradient-to-b from-[#344ABA] to-[#001479] 
          shadow-[0px_8px_0px_4px_#140E66,0px_-6px_0px_8px_#2463FF]
          bg-transparent flex flex-col items-center justify-center`}
        >
          <Button
            onClick={() => {
              type === "paused" ? continuePlay?.() : playAgain?.();
            }}
          >
            {type === "paused" ? "CONTINUE" : "PLAY AGAIN"}
          </Button>
          <Button onClick={() => router.push("/pick-category")}>
            New category
          </Button>
          <Button variant="secondary" onClick={() => router.push("/")}>
            Quit game
          </Button>
        </div>
      </div>
    </div>
  );
};
