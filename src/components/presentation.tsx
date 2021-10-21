import styles from "../styles/presentation.module.scss";
import React from "react";
import { useState, useEffect, useRef } from "react";
function Presentation() {
  const [title, setTitle] = useState("");
  const string = "Hi! I'm Mădălina";
  const index = useRef(0);
  useEffect(() => {
    function tick() {
      setTitle((prev) => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(tick, 100);
      return () => clearInterval(addChar);
    }
  }, [title]);
  return <div className={styles.whiteText}> {title}</div>;
}
export default Presentation;
