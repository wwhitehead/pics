import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { returnStatement } from "@babel/types";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 748626ce3988969f8f2eabefb60cfacc753509780b5752307f74218d2ed6a8bb"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
