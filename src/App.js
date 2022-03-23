import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

//rafce
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "Fav among engineers",
  },
  {
    title: "How do you use React?",
    content: "By creating components",
  },
];

const options = [
  { label: "The color red", value: "red" },
  { label: "The color blue", value: "blue" },
  { label: "The color green", value: "green" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <br />
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown{" "}
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}

      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  );
};

export default App;
