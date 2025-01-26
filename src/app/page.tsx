"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../public/icons/logo.svg";
import Play from "../../public/icons/play.svg";
import { Button } from "@/components";
import { GameButton } from "@/components/GameButton";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <Image
          src={Logo}
          alt="logo"
          className="translate-y-20 translate-x-24"
        />

        <div
          className={`gap-6 h-[500px] w-[590px] max-w-[98vw] rounded-[72px] 
          bg-gradient-to-b from-[#344ABA] to-[#001479] 
          shadow-[0px_8px_0px_4px_#140E66,0px_-6px_0px_8px_#2463FF]
          bg-transparent flex flex-col items-center justify-center`}
        >
          <GameButton
            onClick={() => router.push("/pick-category")}
            className="w-[200px] h-[200px] shadow-[0px_-4px_0px_5px_#243041_inset,0px_-12px_0px_11px_#9D2DF5_inset]"
          >
            <Image src={Play} alt="play" className="" />
          </GameButton>

          <Button onClick={() => router.push("/how-to")}>How to play</Button>
        </div>
      </div>
    </main>
  );
}
