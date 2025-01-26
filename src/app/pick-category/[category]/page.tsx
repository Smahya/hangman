"use client";

import React from "react";

import { GameProvider } from "@/context/GameContext";
import { Gameboard } from "@/components/Gameboard";

export default function PlayGame() {
  return (
    <GameProvider>
      <Gameboard />
    </GameProvider>
  );
}
