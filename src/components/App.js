import React from "react";
import SearchBar from "./SearchBar";
import { returnStatement } from "@babel/types";

const App = () => {
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar />
    </div>
  );
};

export default App;
