import { useEffect, useRef, useState } from "react";

export default function IntroView() {
  const introText = [
    "Welcome to Windows 10",
    "Thank you for choosing us",
    "We are setting up for you , please wait a little.....",
    "Setup is almost complete",
    "Your device is ready to use",
    "",
  ];

  const [currentChar, setCurrentChar] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const timer = useRef();
  const [setUpCompleted, setSetupCompleted] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  function renderTypeWriter() {
    setCurrentChar((c) => c + 1);

    if (currentChar > introText[currentText].length) {
      setCurrentText((c) => c + 1);
      setCurrentChar(0);
    }

    if (currentText >= introText.length - 1) {
      setIsTyping(false);
      setSetupCompleted(true);
    }
  }

  useEffect(() => {
    if (isTyping) {
      timer.current = setInterval(renderTypeWriter, 100);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [currentText, currentChar]);

  return (
    <div className={setUpCompleted ? "intro-view completed" : "intro-view"}>
      <p>{introText[currentText].slice(0, currentChar)}</p>
    </div>
  );
}
