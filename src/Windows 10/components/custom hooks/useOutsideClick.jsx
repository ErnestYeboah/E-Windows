import { useEffect } from "react";

export default function useOutsideClick(handler, ref) {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        handler(e);
      }
    }

    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
