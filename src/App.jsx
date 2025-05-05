import { useState } from "react";
//importing components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import styles from "./App.module.css";

function App() {
    const [searchTerm, setSearchTerm] = useState ("")
  return (
    <>
      <Header setSearchTerm={setSearchTerm}/>
      <Main searchTerm={searchTerm}/>
      <Footer />
    </>
  );
}

export default App;
