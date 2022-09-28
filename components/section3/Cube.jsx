import styles from "./Cube.module.css";

export default function Cube() {
  return (
    <div className={styles.cube}>
      <span className={styles.upper}></span>
      {/* <span className={styles.lower}></span> */}
      <div>
        <span style={{ transform: "rotateY(0deg) translateZ(100px)" }}></span>
        <span style={{ transform: "rotateY(90deg) translateZ(100px)" }}></span>
        <span style={{ transform: "rotateY(180deg) translateZ(100px)" }}></span>
        <span style={{ transform: "rotateY(270deg) translateZ(100px)" }}></span>
      </div>
    </div>
  );
}
