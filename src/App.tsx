import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import { Board } from "./components/board";
import { Confetti } from "./components/confetti";
import { CelebrateModal } from "./components/modal";

function App() {
  const [count, setCount] = useState(0);
  const getCls = (c: number) =>
    c === count
      ? `text-stone-300 border-stone-300 absolute border rounded-full w-10 h-10 flex justify-center items-center`
      : `text-stone-500 border-stone-500 absolute  border rounded-full w-10 h-10 flex justify-center items-center`;
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (count === 15) {
      setShow(true);
    }
  }, [count]);
  return (
    <div className="bg-gradient-to-tr from-stone-900 to-stone-950 flex flex-col h-screen items-center justify-center gap-4">
      <div className="flex items-center justify-center">
        <div className="relative">
          <Board />
          <div className={getCls(0)} style={{ top: "24px", left: "32px" }}>
            {count === 0 ? <Ball /> : <p>1</p>}
          </div>
          <div className={getCls(1)} style={{ top: "112px", left: "128px" }}>
            {count === 1 ? <Ball /> : <p>2</p>}
          </div>
          <div className={getCls(2)} style={{ top: "210px", left: "220px" }}>
            {count === 2 ? <Ball /> : <p>3</p>}
          </div>
          <div className={getCls(3)} style={{ top: "120px", left: "318px" }}>
            {count === 3 ? <Ball /> : <p>4</p>}
          </div>
          <div className={getCls(4)} style={{ top: "298px", left: "318px" }}>
            {count === 4 ? <Ball /> : <p>5</p>}
          </div>
          <div className={getCls(5)} style={{ top: "208px", left: "500px" }}>
            {count === 5 ? <Ball /> : <p>6</p>}
          </div>
          <div className={getCls(6)} style={{ top: "397px", left: "500px" }}>
            {count === 6 ? <Ball /> : <p>7</p>}
          </div>
          <div className={getCls(7)} style={{ top: "118px", left: "600px" }}>
            {count === 7 ? <Ball /> : <p>8</p>}
          </div>
          <div className={getCls(8)} style={{ top: "300px", left: "600px" }}>
            {count === 8 ? <Ball /> : <p>9</p>}
          </div>
          <div className={getCls(9)} style={{ top: "299px", left: "690px" }}>
            {count === 9 ? <Ball /> : <p>10</p>}
          </div>
          <div className={getCls(10)} style={{ top: "400px", left: "690px" }}>
            {count === 10 ? <Ball /> : <p>11</p>}
          </div>
          <div className={getCls(11)} style={{ top: "490px", left: "590px" }}>
            {count === 11 ? <Ball /> : <p>12</p>}
          </div>
          <div className={getCls(12)} style={{ top: "490px", left: "500px" }}>
            {count === 12 ? <Ball /> : <p>13</p>}
          </div>
          <div className={getCls(13)} style={{ top: "490px", left: "310px" }}>
            {count === 13 ? <Ball /> : <p>14</p>}
          </div>
          <div className={getCls(14)} style={{ top: "400px", left: "220px" }}>
            {count === 14 ? <Ball /> : <p>15</p>}
          </div>
        </div>
      </div>

      <button
        onClick={() => count <= 14 && setCount((c) => c + 1)}
        className="bg-stone-800 rounded-md text-stone-200 text-sm px-8 py-2 hover:opacity-80 transition-all ease-in-out"
      >
        {count === 14 ? "Congratulation" : "Roll"}
      </button>
      <Confetti threshold={count} />
      <CelebrateModal
        isOpen={show}
        onClose={() => {
          setShow(false);
          setCount(0);
        }}
      />
    </div>
  );
}

export const Ball = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="bg-orange-500 w-6 h-6 rounded-full relative shadow-sm shadow-orange-600"
    ></motion.div>
  );
};
export default App;
