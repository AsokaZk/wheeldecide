import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import items from "./campistas";

function InputAutocomplete(props) {
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results);
    // props.setCampWheel("");
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    props.setCampWheel("");
    props.setCampWheel(item);
  };
  const handleOnClear = () => {
    // the item selected
    props.setCampWheel("");
  };
  const handleOnFocus = () => {
    props.setCampWheel("");
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div className="App-form">
      <header className="App-header d-flex justify-content-center">
        <div style={{ width: 800 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            fuseOptions={{ minMatchCharLength: 4 }}
            showIcon={false}
            maxResults={1}
            onClear={handleOnClear}
            onFocus={handleOnFocus}
          />
        </div>
      </header>
    </div>
  );
}

export default InputAutocomplete;
