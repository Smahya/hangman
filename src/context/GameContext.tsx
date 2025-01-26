import { usePlayGame } from "@/hooks/usePlayGame";
import { Category } from "@/types";
import React, { createContext, useContext } from "react";

const initialGameState: ReturnType<typeof usePlayGame> = {
  onLetterClick: () => {},
  reset: () => {},
  action: () => {},
  open: false,
  openType: undefined,
  selectedLetters: [],
  lifeForce: 8,
  category: "" as Category,
  letterArrays: [],
  alphabets: [],
  isLetterCorrect: () => false,
};

const GameContext =
  createContext<ReturnType<typeof usePlayGame>>(initialGameState);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const gameState = usePlayGame();
  return (
    <GameContext.Provider value={gameState}>{children}</GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
