import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Hexagons from "../components/Hegagons";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { useState } from "react";

export default function Home() {
  const [showWindow, setShowWindow] = useState(null);
  const [playing, setPlaying] = useState(false);

  // 0 - white
  // 1 - orange
  // 2 - blue
  // 3 - black
  const [colors, setColor] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0,
  ]);
  const [letters, setLetters] = useState([
    "AZK",
    "BK",
    "C",
    "D",
    "EŠ",
    "F",
    "G",
    "H",
    "ChCh",
    "I",
    "JČ",
    "K",
    "LLL",
    "M",
    "NM",
    "O",
    "P",
    "QT",
    "R",
    "Š",
    "T",
    "U",
    "VMK",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  const handleClick = (id) => {
    if (showWindow === null) {
      setShowWindow(id);
    }
  };

  const handleClose = () => {
    setShowWindow(null);
    setPlaying(false);
  };

  const handleWinner = (color) => {
    let newColors = [...colors];
    if (color === "orange") {
      newColors[showWindow - 1] = 1;
    } else if (color === "blue") {
      newColors[showWindow - 1] = 2;
    } else if (color === "black") {
      newColors[showWindow - 1] = 3;
    }
    setColor(newColors);

    setShowWindow(null);
    setPlaying(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {showWindow !== null ? (
          <div className={styles.questionContainer}>
            <div
              className={styles.questionClose}
              onClick={() => handleClose()}
            ></div>
            <div className={styles.countdownContainer}>
              <CountdownCircleTimer
                isPlaying={playing}
                duration={10}
                colors={["#075e80", "#73ebf8", "#f7b419", "#f51e05"]}
                size={200}
                colorsTime={[10, 7, 4, 0]}
                strokeWidth={20}
              ></CountdownCircleTimer>
              <div className={styles.questionLetter}>
                {letters[showWindow - 1]}
              </div>
            </div>

            <div
              className={styles.startButton}
              onClick={() => setPlaying(true)}
            >
              START
            </div>

            <div className={styles.questionWinner}>
              <div
                className={styles.questionWinnerBlue}
                onClick={() => handleWinner("blue")}
              ></div>
              <div
                className={styles.questionWinnerBlack}
                onClick={() => handleWinner("black")}
              ></div>
              <div
                className={styles.questionWinnerOrange}
                onClick={() => handleWinner("orange")}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        <Hexagons handleClick={handleClick} colors={colors} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
