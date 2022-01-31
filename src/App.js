import logo from "./logo.svg";
import "./App.css";
import img1 from "./images/nis1.jpeg";
import { useState } from "react";
import { employee, images } from "./array.js";
import { FaBars } from "react-icons/fa";
import { SideBar, CloisngSideBar } from "./components/sideBar";
import UseEffectFunction from "./components/useeffect";
import { AiOutlineCloseCircle } from "react-icons/ai";
import EmployeeForm from "./components/forms";
import UseRefTest from "./components/useRef";
import UseReducerTest from "./components/useReducer";

function App() {
  const [name, setName] = useState(employee);
  let [t, setTime] = useState(10);
  const [img, changeImage] = useState(images);
  let [sidebar, showsidebar] = useState(null);

  const handleClick = () => {
    setName([]);
  };
  const removeItem = (id) => {
    let newEmp = employee.filter((emp) => emp.id != id);
    setName(newEmp);
  };

  const startTimer = () => {
    setInterval(() => {
      setTime((prevState) => {
        if (prevState == 0) {
          return (prevState = 10);
        } else return prevState - 1;
      });
    }, 1000);
  };

  return (
    <div
      className="main"
      style={{ marginLeft: sidebar ? "19.7%" : "0%", transition: "  1s" }}
    >
      {/* navbar */}
      <div className="Nav">
        <ul>
          <li>
            <a href="#box"> Home </a>
          </li>
          <li className="portfolio_list">
            <a href="#">Portfolio</a>
            <ul className="portfolio">
              <li>
                <a href="#">Futures</a>
              </li>
              <li>
                <a href="#">Stocks</a>
              </li>
              <li>
                <a href="#">Funds</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Assets</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        {/* sidebar */}
        <div className="sidebar">
          <button
            className="sidebar_button"
            onClick={() => {
              showsidebar(true);
            }}
            style={{ display: sidebar ? "none" : "inline-block" }}
          >
            <FaBars size="2em" className="fabar" />
          </button>
          {sidebar ? (
            <SideBar sidebar={sidebar} closeSideBar={showsidebar} />
          ) : (
            <CloisngSideBar sidebar={sidebar} closeSideBar={showsidebar} />
          )}
        </div>
      </div>
      {/* remove button */}
      {name.map((n) => {
        const { id, name, color } = n;
        return (
          <div key={id}>
            <h1 className="names">{name}</h1>
            <button
              onClick={() => removeItem(id)}
              style={{ backgroundColor: color, color: "whitesmoke" }}
            >
              remove me
            </button>
          </div>
        );
      })}
      <br />
      <h1>{t}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <br />
      {/* Photos */}
      <div className="photoGrid">
        {img.map((i) => {
          const { id, url } = i;
          return (
            <div key={id}>
              <img src={require(`${url}`)} alt={id} />
            </div>
          );
        })}
      </div>
      {/* forms */}
      <EmployeeForm />
      {/* useEffect */}
      <UseEffectFunction />

      {/* useReducer */}
      <UseReducerTest />

      {/* useRef */}
      <UseRefTest />

      <div className="box" id="box">
        <div className="back">Back</div>
        <div className="front">Front</div>
      </div>
    </div>
  );
}

export default App;
