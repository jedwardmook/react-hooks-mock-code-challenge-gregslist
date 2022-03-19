import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  
  const [searchListing, setSearchListing] = useState("")

  function handleSearch(newSearch){
    setSearchListing(newSearch)
  }
  
 

  return (
    <div className="app">
      <Header 
        onSearch={handleSearch}/>
      <ListingsContainer  
        search={searchListing}/>
    </div>
  );
}

export default App;
