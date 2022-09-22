import { useState, useEffect } from "react";

export default function ScrollTrigger() {
  const [mouseDelta, setMouseDelta] = useState(0);
  useEffect(() => {
    const main = document.querySelector("#main");
    // IE9, Chrome, Safari, Opera
    main.addEventListener("mousewheel", MouseWheelHandler, {
      passive: true,
    });
    // Firefox
    main.addEventListener("DOMMouseScroll", MouseWheelHandler, {
      passive: true,
    });
    document.addEventListener("keydown", TypeHandler);
    function MouseWheelHandler(e) {
      // cross-browser wheel delta
      var e = window.event || e; // old IE support
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

      if (delta == 1) {
        setMouseDelta(delta);
        return false;
      }
      if (delta == -1) {
        setMouseDelta(delta);
        return false;
      }
      return false;
    }

    function TypeHandler(e) {
      console.log(e);

      if (e.key == "ArrowUp") {
        setMouseDelta(1);
      } else if (e.key == "ArrowDown") {
        setMouseDelta(-1);
      }
    }

    return () => {
      window.removeEventListener("mousewheel", MouseWheelHandler);
      window.removeEventListener("DOMMouseScroll", MouseWheelHandler);
      window.removeEventListener("keydown", TypeHandler);
    };
  }, []);
  useEffect(() => {
    console.log(mouseDelta);
  }, [mouseDelta]);
  return null;
}
