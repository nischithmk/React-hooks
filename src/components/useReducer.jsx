import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type == "Test") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "submitted",
    };
  }
  if (action.type == "removeItem") {
    const newPeople = state.people.filter((p) => p.id != action.payload);
    return {
      ...state,
      people: newPeople,
    };
  }

  return state;
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "enter text",
};

const UseReducerTest = () => {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleClick = (e) => {
    e.preventDefault();
    if (text) {
      const newItem = { id: new Date().getTime().toString(), text };
      dispatch({ type: "Test", payload: newItem });
      setText("");
    } else {
    }
  };

  return (
    <>
      {state.isModalOpen ? "submitted" : "Enter Text"}
      <form>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>submit</button>
      </form>

      {state.people.map((p) => {
        return (
          <div key={p.id}>
            <button>{p.text}</button>
            <button
              onClick={() => dispatch({ type: "removeItem", payload: p.id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseReducerTest;
