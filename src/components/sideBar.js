import React, { Component, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SideBar = (props) => {
  console.log(props.sidebar);
  return (
    <div className="expanded_sidebar">
      <div className="close_button" onClick={() => props.closeSideBar(false)}>
        <h4>
          Close
          <AiOutlineCloseCircle size={31} className="closeIcon" />
        </h4>
      </div>

      <h1>Scrolbar </h1>
    </div>
  );
};

const CloisngSideBar = (props) => {
  console.log(props.sidebar);
  return (
    <div className="closingBar">
      <div className="close_button" onClick={() => props.closeSideBar(true)}>
        <h4>
          Close
          <AiOutlineCloseCircle size={31} className="closeIcon" />
        </h4>
      </div>
      <h1>closingBar</h1>
    </div>
  );
};

export { SideBar, CloisngSideBar };
