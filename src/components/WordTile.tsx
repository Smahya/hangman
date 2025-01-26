"use client";

import React from "react";
import cx from "classnames";
import { useGameContext } from "@/context/GameContext";

export const WordTile = () => {
  const { selectedLetters, letterArrays } = useGameContext();

  return (
    <div className="flex flex-wrap items-center justify-center gap-16">
      {letterArrays.map((letterArray, index) => {
        return (
          <div key={index} className="flex">
            {letterArray.map((letter, index) => {
              const isSelected = selectedLetters?.includes(letter);
              return (
                <div key={index}>
                  <div
                    className={cx(
                      `grid place-content-center w-[110px] h-[120px]
                       text-[84px] rounded-[40px]
                       shadow-[0px_-2px_0px_3px_#140E66_inset,0px_1px_0px_6px_#3C74FF_inset]`,

                      {
                        "bg-blue": isSelected,
                        "bg-transparent": !isSelected,
                      }
                    )}
                  >
                    {isSelected ? letter : null}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
