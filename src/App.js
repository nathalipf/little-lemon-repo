import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";


function App() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

export default App;
