import React, { useState, useEffect } from "react";
import { you_tube_search_api } from "../utils/constants";

const Debouncing = () => {
  const [search, set_search_text] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggetions, setShowSuggetions] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggetion();
    }, 200);
    return () => clearInterval(timer);
  }, [search]);

  const fetchSuggetion = async () => {
    let response = await fetch(you_tube_search_api + search);
    const json = await response.json();
    setSuggetions(json[1]);
    console.log("debounce dta - ", suggetions);
  };
  const handleChange = (e) => {
    set_search_text(e.target.value);
  };
  const handleBlur = () => {
    setShowSuggetions(false);
  };

  const handleFocus = () => {
    setShowSuggetions(true);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search text...."
          value={search}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </div>
      {showSuggetions && (
        <div className="sgtn-bg">
          {suggetions.map((i, j) => (
            <li key={j}>{i}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Debouncing;
