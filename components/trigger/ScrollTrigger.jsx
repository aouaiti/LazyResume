import { useEffect, memo, useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { rotate } from "../../Features/globalUiVars/section3";
import { currentPart } from "../../Features/globalUiVars/section2";
import { makeVisible } from "../../Features/globalUiVars/footer";

function ScrollTrigger() {
  const [idle, setIdle] = useState(false);
  const [multiplier, setMultiplier] = useState(0);
  const [checkPoint, setCheckPoint] = useState(false);
  const dispatch = useDispatch();
  const section2Part = useSelector((state) => state.section2.part);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const section3Part = useSelector((state) => state.section3.rotation);
  const a = 1;
  const sectionMutation = () => {
    // dispatch(makeVisible(false));
    if (multiplier === 0) return;
    if (section3Part > 0 && section3Part < 5) return;
    if (currentSection === 1 && (multiplier === -1 || multiplier === 1)) return;
    if (currentSection === 3 && (multiplier === -1 || multiplier === 1)) return;
    if (currentSection === 2) return;
    // else
    //   setTimeout(
    //     () => dispatch(sectionIndex(currentSection + multiplier)),
    //     200
    //   );
  };

  useEffect(() => {
    if (currentSection !== 1 || multiplier !== 1) return;
    let sec1toSec2 = setTimeout(
      () => dispatch(sectionIndex(currentSection + multiplier)),
      50
    );
    return () => clearTimeout(sec1toSec2);
  }, [multiplier]);

  useEffect(() => {
    if (currentSection !== 4 || multiplier !== -1) return;
    let sec1toSec2 = setTimeout(() => {
      dispatch(makeVisible(false));
      dispatch(sectionIndex(currentSection + multiplier));
    }, 50);
    return () => clearTimeout(sec1toSec2);
  }, [multiplier]);

  useEffect(() => {
    if (currentSection === 3 && multiplier === 1 && section3Part === 4) {
      window.scrollTo({
        top: "0",
        // behavior: "instant",
      });
      dispatch(rotate(-section3Part));
      dispatch(sectionIndex(4));
      dispatch(makeVisible(true));
      return;
    }
    if (currentSection !== 3 || multiplier !== -1 || section3Part !== 0) return;
    let sec3toSec2 = setTimeout(() => {
      if (section2Part !== 3) dispatch(currentPart(1));
      dispatch(sectionIndex(currentSection + multiplier));
    }, 600);
    return () => clearTimeout(sec3toSec2);
  }, [multiplier]);

  useEffect(() => {
    if (currentSection !== 3) {
      setIdle(false);
      // dispatch(rotate(-section3Part));
      return;
    }
    dispatch(rotate(-section3Part));
    const timer = setTimeout(() => setIdle(true), 1000);
    return () => clearTimeout(timer);
  }, [currentSection]);

  useEffect(() => {
    if (multiplier === 0 || currentSection !== 3) return;
    if (multiplier === 1 && section3Part === 4) return;
    if (multiplier === -1 && section3Part === 0) return;
    if (!idle) return;
    const sec3 = setTimeout(() => dispatch(rotate(multiplier)), 50);
    return () => clearTimeout(sec3);
  }, [multiplier]);

  let start = null;

  useEffect(() => {
    sectionMutation();
  }, [multiplier, section2Part]);

  //   const scrollDirection = useSelector((state) => state.triggers.scroll);
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

    window.addEventListener("touchstart", touchStartHandler);
    window.addEventListener("touchend", touchEndHandler);

    document.addEventListener("keydown", TypeHandler);

    return () => {
      //   clearTimeout(timer);
      window.removeEventListener("mousewheel", MouseWheelHandler);
      window.removeEventListener("DOMMouseScroll", MouseWheelHandler);
      window.removeEventListener("keydown", TypeHandler);
    };
  }, []);
  const touchStartHandler = (e) => {
    start = e.changedTouches[0];
  };
  const touchEndHandler = (e) => {
    let end = e.changedTouches[0];
    if (end.screenY - start.screenY > 0) {
      setMultiplier(0);
      setMultiplier(-1);
      // console.log("scrolling up");
    } else if (end.screenY - start.screenY < 0) {
      setMultiplier(0);
      setMultiplier(1);
      // console.log("scrolling down");
    }
  };

  const MouseWheelHandler = (e) => {
    // cross-browser wheel delta
    console.log(e.detail);
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

    if (delta == 1) {
      //   dispatch(scrollIndex(delta));
      setMultiplier(0);
      setMultiplier(-1);

      // section3Mutation(-1);
      //   setTimeout(() => dispatch(scrollIndex(0)), 1000);
      return false;
    }
    if (delta == -1) {
      setMultiplier(0);
      setMultiplier(1);

      // section3Mutation(1);
      //   dispatch(scrollIndex(delta));
      //   setTimeout(() => dispatch(scrollIndex(0)), 1000);
      return false;
    }
    return false;
  };

  const TypeHandler = (e) => {
    if (e.key == "ArrowUp") {
      setMultiplier(0);
      setMultiplier(-1);
      // section3Mutation(-1);
      //   dispatch(scrollIndex(1));
      //   setTimeout(() => dispatch(scrollIndex(0)), 1000);
    } else if (e.key == "ArrowDown") {
      setMultiplier(0);
      setMultiplier(1);
      // section3Mutation(1);
      //   dispatch(scrollIndex(-1));
      //   setTimeout(() => dispatch(scrollIndex(0)), 1000);
    }
  };

  return null;
}

export default ScrollTrigger;

/////////////////////////// re implement state (state to redux)
