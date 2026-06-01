import { useEffect, useState } from "react";
import { playKeystroke } from "@/lib/boot-sound";

interface Props {
  text: string;
  speed?: number;
  className?: string;
  onDone?: () => void;
  cursor?: boolean;
  sound?: boolean;
}

export function Typewriter({ text, speed = 35, className, onDone, cursor = true, sound = false }: Props) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (sound && text[i - 1] && text[i - 1] !== " ") {
        playKeystroke();
      }
      if (i >= text.length) {
        clearInterval(id);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, onDone, sound]);

  return (
    <span className={className}>
      {out}
      {cursor && <span className="cursor-blink" />}
    </span>
  );
}
