import React, { useRef, useState } from "react";

function UseRefTest() {
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
      <h1 ref={h1ref}>hey</h1>
      <button onClick={toggle ? handleClick1 : handleClick2}> change</button>
    </>
  );
}

export default UseRefTest;
