import useSound from "use-sound";
import cx from "classnames";
import { useGameContext } from "@/context/GameContext";

type Props = {
  letter: string;
  isSelected: boolean;
  onLetterClick: (letter: string) => void;
};

export const LetterKeyboard = () => {
  const { alphabets, onLetterClick, selectedLetters, isLetterCorrect } =
    useGameContext();

  const [playKeyboard] = useSound("/sounds/keyboard.mp3", {
    volume: 0.5,
  });
  const [wrongAnswer] = useSound("/sounds/wronganswer.mp3", {
    volume: 0.5,
  });

  function handleLetterClick(letter: string) {
    onLetterClick(letter);
    const isCorrect = isLetterCorrect(letter);
    if (isCorrect) {
      playKeyboard();
    } else {
      wrongAnswer();
    }
  }
  return (
    <div className="grid grid-cols-9 content-start gap-2 md:gap-4 lg:gap-6 overflow-x-auto">
      {alphabets.map((letter) => {
        const isSelected = selectedLetters?.includes(letter);
        return (
          <Alphabet
            key={letter}
            letter={letter}
            onLetterClick={handleLetterClick}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

export const Alphabet = ({ letter, onLetterClick, isSelected }: Props) => {
  return (
    <button
      key={letter}
      onClick={() => onLetterClick(letter)}
      className={cx(
        `bg-white text-dark-navy hover:bg-blue hover:text-white rounded-[24px] h-[84px] flex items-center justify-center`,
        {
          "opacity-25": isSelected,
        }
      )}
    >
      <span className="text-4xl">{letter}</span>
    </button>
  );
};
