import React from "react";
import EmployeeForm from "./forms";
import UseRefTest from "./useRef";
import UseReducerTest from "./useReducer";
import App from "../App";
import UseEffectFunction from "./useeffect";
import ImageSlider from "./imageSlider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouterExample = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a" element={<EmployeeForm />} />
        <Route path="a/app" element={<App />} />
        <Route path="a/red" element={<UseReducerTest />} />
        <Route path="a/ref/:name/:num" element={<UseRefTest />} />

        <Route path="/b" element={<UseRefTest />} />
        <Route path="/c" element={<UseReducerTest />} />
        <Route path="/d" element={<UseEffectFunction />} />
        <Route path="/image" element={<ImageSlider />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterExample;
