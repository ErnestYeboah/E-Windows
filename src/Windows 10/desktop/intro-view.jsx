import { useContext, useEffect, useRef, useState } from "react";
import { WindowsContext } from "../context.jsx/context";

export default function IntroView() {
  const { userName } = useContext(WindowsContext);

  const firstName = userName.charAt(0).toUpperCase() + userName.slice(1);

  const introText = [
    `Welcome ${firstName}`,
    "Thank you for choosing us",
    "We are setting up for you , please wait.....",
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
