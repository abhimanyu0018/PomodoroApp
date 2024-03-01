import { useState, useContext, useEffect } from "react";
import {Howl} from 'howler';

import {
  FaHeart,
  FaPause,
  FaPlay,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { displayContext } from "./context/MinContext";
import Control from "./Control";
import achiveSound from "./assets/achiveSound.mp3"

function App() {
  const display = useContext(displayContext);

  const [isRunning, setIsRunning] = useState(false);

  const [isBreak, setIsBreak] = useState(false);

  const [timeMin, setTimeMin] = useState(25);

  const [timeSec, setTimeSec] = useState(0);

  const alarmSound = new Howl({
    src: [achiveSound],
    loop: false,
    html5: true,
    volume: 0.5
  })

  useEffect(() => {
    if (isRunning) {
      const timeInterval = setInterval(() => {
        //decrese sec
        if (timeSec > 0) {
          setTimeSec((prev) => prev - 1);
        }

        //decrese Min
        if (timeSec === 0) {
          setTimeMin((prev) => prev - 1);
          setTimeSec(59);
        }

        if (timeMin === 0 && timeSec === 0) {
          setIsRunning(false);
          alarmSound.play()
          if(!isBreak){
            setIsBreak( prev => !prev)
            setTimeMin(display.displayBreak)
            setTimeSec(0)
          }

          if(isBreak)
          {
            setIsBreak( prev => !prev)
            setTimeMin(display.displaySession)
            setTimeSec(0)
          }
        }
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [isRunning, timeMin, timeSec]);

  const RunningHandler = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setTimeMin(25);
    setTimeSec(0);
    setIsRunning(false);
  };

  //setting values

  const valueHandler = () => {
    setIsRunning(false);
    setTimeSec(0);
    setTimeMin(display.displaySession);
  };

  return (
    <>
      <div className="bg-red-600 w-full h-screen text-white p-10 flex flex-col gap-1 text-center justify-center items-center">
        <h1 className="font-semibold text-[2rem] capitalize">Pomodoro Timer</h1>
        <div className="w-96 h-96 bg-red-300 block pt-6">
          <h2 className="bg-red-400 text-[2rem] mx-11">
            {isBreak ? "Break" : "Session"}
          </h2>

          <h1 className="text-7xl font-bold mt-20 mb-10">
            {timeMin}:{timeSec < 10 ? "0" + timeSec : timeSec}
          </h1>

          <div className="flex gap-4 justify-center">
            <button onClick={RunningHandler}>
              
              {isRunning ? <FaPause /> : <FaPlay />}{" "}
            </button>
            <button onClick={reset}>
              <HiOutlineRefresh className="text-xl" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 flex-col">
          <div className="flex gap-8 mt-2">
            <Control title={"Break"} defaultTime={5} />
            <Control title={"Session"} defaultTime={25} />
          </div>

          <div>
            <button
              onClick={valueHandler}
              className="px-3 rounded-lg bg-red-400 hover:bg-red-900 text-lg"
            >
              SET
            </button>
          </div>
        </div>

        <div className="mt-10">
          <p>
            Made with <FaHeart className="inline" /> by Abhimanyu Kanaujia
          </p>
          <p>Connect with me:</p>
          <div className="flex items-center gap-2 p-2 justify-center">
            <a href="https://github.com/abhimanyu0018" target="_blank">
              <FaGithub />
            </a>
            <a href="https://twitter.com/iamManukage" target="_blank">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/abhimanyukanaujia018/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
