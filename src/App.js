import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
