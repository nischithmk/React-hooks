import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

function UseRefTest() {
  let { name, num } = useParams();
  const [toggle, setToggle] = useState(false);
  const h1ref = useRef(null);
  const handleClick1 = () => {
    h1ref.current.style.fontSize = "50px";
    h1ref.current.style.color = "red";
    h1ref.current.style.transition = "1s";
    setToggle(!toggle);
  };
  const handleClick2 = () => {
    h1ref.current.style.fontSize = "20px";
    h1ref.current.style.color = "green";
    h1ref.current.style.transition = "1s";
    setToggle(!toggle);
  };
  return (
    <>
      <h1 ref={h1ref}>
        {name} {num + num}
      </h1>
      <button onClick={toggle ? handleClick1 : handleClick2}> Change</button>
    </>
  );
}

export default UseRefTest;
